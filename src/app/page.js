import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  FooterSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
  StatsSection,
  TechStackSection,
  TestimonialsSection,
} from "@/sections";
import {
  SiHtml5,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiCss,
  SiPython,
  SiReact,
  SiVercel,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Home() {
  return (
    <main className="relative isolate space-y-6 pb-10">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="home-orb home-orb-left" />
        <div className="home-orb home-orb-right" />
        <div className="home-grid-overlay" />
        <div className="home-code-scanline" />
        <div className="home-lang-pin home-lang-pin-a"><SiReact /></div>
        <div className="home-lang-pin home-lang-pin-b"><SiJavascript /></div>
        <div className="home-lang-pin home-lang-pin-c"><SiTypescript /></div>
        <div className="home-lang-pin home-lang-pin-d"><SiNodedotjs /></div>
        <div className="home-lang-pin home-lang-pin-e"><SiPython /></div>
        <div className="home-lang-pin home-lang-pin-f"><SiMongodb /></div>
        <div className="home-lang-pin home-lang-pin-g"><SiHtml5 /></div>
        <div className="home-lang-pin home-lang-pin-h"><SiCss /></div>
        <div className="home-lang-pin home-lang-pin-i"><SiTailwindcss /></div>
        <div className="home-lang-pin home-lang-pin-j"><SiGit /></div>
        <div className="home-lang-pin home-lang-pin-k"><SiGithub /></div>
        <div className="home-lang-pin home-lang-pin-l"><SiVercel /></div>
        <div className="home-lang-pin home-lang-pin-m"><SiDocker /></div>
        <div className="home-lang-pin home-lang-pin-n"><SiFigma /></div>
      </div>
      <HeroSection />
        <AboutSection />
      {/* <ExperienceSection /> */}
      <ProjectsSection />
        {/* <SkillsSection /> */}
      <TechStackSection />
      {/* <TestimonialsSection />
      <StatsSection /> */}
      <ContactSection />
      <FooterSection />
    </main>
  );
}
