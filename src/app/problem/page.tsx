import type { Metadata } from "next";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "課題 - MeetingFlow",
  description:
    "日本の会議文化が抱える構造的課題。議論の空転、ファシリテーションの属人化、既存ツールの限界をMeetingFlowが解決します。",
};

export default function ProblemPage() {
  return (
    <main>
      <div className="pt-16" />
      <Problem />
      <Solution />
      <CTA />
    </main>
  );
}
