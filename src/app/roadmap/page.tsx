import type { Metadata } from "next";
import Roadmap from "@/components/Roadmap";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "ロードマップ - MeetingFlow",
  description:
    "MeetingFlowの開発計画。PoC・コア機能開発・拡張公開の3フェーズで段階的に開発を進めます。",
};

export default function RoadmapPage() {
  return (
    <main>
      <div className="pt-16" />
      <Roadmap />
      <CTA />
    </main>
  );
}
