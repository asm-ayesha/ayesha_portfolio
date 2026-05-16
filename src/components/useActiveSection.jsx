"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds) {
    const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "home");
    const joinedIds = sectionIds.join("|");

    useEffect(() => {
        let frame = 0;

        const updateActiveSection = () => {
            const marker = window.scrollY + 180;
            let current = sectionIds[0] ?? "home";

            const positionedSections = sectionIds
                .map((id) => {
                    const section = document.getElementById(id);
                    if (!section) {
                        return null;
                    }
                    return { id, top: section.offsetTop };
                })
                .filter(Boolean)
                .sort((a, b) => a.top - b.top);

            positionedSections.forEach((section) => {
                if (marker >= section.top) {
                    current = section.id;
                }
            });

            setActiveSection((previous) => (previous === current ? previous : current));
        };

        const handleScroll = () => {
            if (frame) {
                return;
            }

            frame = window.requestAnimationFrame(() => {
                frame = 0;
                updateActiveSection();
            });
        };

        updateActiveSection();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", updateActiveSection);

        return () => {
            if (frame) {
                window.cancelAnimationFrame(frame);
            }
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, [joinedIds]);

    return activeSection;
}
