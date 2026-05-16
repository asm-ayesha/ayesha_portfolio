"use client";

import React, { useEffect, useRef, useState } from "react";

export function AnimatedCounter({ value, suffix = "", duration = 1200 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (!entries[0]?.isIntersecting || hasAnimated.current) {
                    return;
                }

                hasAnimated.current = true;
                const startedAt = performance.now();

                const step = (timestamp) => {
                    const progress = Math.min((timestamp - startedAt) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setCount(Math.round(value * eased));

                    if (progress < 1) {
                        requestAnimationFrame(step);
                    }
                };

                requestAnimationFrame(step);
            },
            { threshold: 0.55 },
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [duration, value]);

    return (
        <span ref={ref} className="tabular-nums">
            {count}
            {suffix}
        </span>
    );
}
