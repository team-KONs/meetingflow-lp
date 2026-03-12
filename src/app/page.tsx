import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import ROI from "@/components/ROI";
import HowItWorks from "@/components/HowItWorks";
import TechStack from "@/components/TechStack";
import Comparison from "@/components/Comparison";
import Roadmap from "@/components/Roadmap";
export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Features />
      <ROI />
      <HowItWorks />
      <Comparison />
      <TechStack />
      <Roadmap />
    </main>
  );
}
