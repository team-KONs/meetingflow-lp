"use client";

import { motion } from "framer-motion";
import { Beaker, Rocket, Star, ChevronRight } from "lucide-react";

const phases = [
  {
    icon: Beaker,
    phase: "PoC",
    period: "2026年4月〜7月",
    title: "技術検証フェーズ",
    items: [
      "whisper.cppによるリアルタイム音声認識の検証",
      "LLMによる論点抽出のプロトタイプ",
      "基本UIの構築",
    ],
    status: "current",
  },
  {
    icon: Rocket,
    phase: "Phase 1",
    period: "2026年8月〜9月",
    title: "コア機能開発",
    items: [
      "マインドマップUIの実装",
      "リアルタイムパイプラインの安定化",
      "ユーザーテスト実施",
    ],
    status: "upcoming",
  },
  {
    icon: Star,
    phase: "Phase 2",
    period: "2026年10月〜11月",
    title: "拡張・公開",
    items: [
      "マルチプラットフォーム対応",
      "プラグイン機構の導入",
      "OSSコミュニティ公開",
    ],
    status: "upcoming",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">ロードマップ</h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            開発計画
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
          {phases.map((phase, i) => (
            <div key={phase.phase} className="flex items-stretch flex-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="flex-1"
              >
                <div
                  className={`bg-white rounded-2xl p-6 border shadow-sm h-full ${
                    phase.status === "current"
                      ? "border-blue-200 shadow-blue-100"
                      : "border-gray-100"
                  }`}
                >
                  {/* Step indicator */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        phase.status === "current"
                          ? "gradient-bg text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <phase.icon size={18} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-sm font-bold ${
                            phase.status === "current"
                              ? "gradient-text"
                              : "text-gray-400"
                          }`}
                        >
                          {phase.phase}
                        </span>
                        {phase.status === "current" && (
                          <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                            現在
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#6b7280]">{phase.period}</p>
                    </div>
                  </div>

                  <h3 className="font-bold mb-3">{phase.title}</h3>
                  <ul className="space-y-1.5">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-[#6b7280] flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Arrow between cards */}
              {i < phases.length - 1 && (
                <div className="hidden md:flex items-center px-3 text-gray-300">
                  <ChevronRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
