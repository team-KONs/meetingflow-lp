import type { Metadata } from "next";
import Features from "@/components/Features";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "主な機能 - MeetingFlow",
  description:
    "リアルタイム文字起こし、論点の自動構造化、マインドマップ可視化、完全ローカル処理。MeetingFlowの4つのコア機能を紹介。",
};

export default function FeaturesPage() {
  return (
    <main>
      <div className="pt-16" />
      <Features />
      <CTA />
    </main>
  );
}
