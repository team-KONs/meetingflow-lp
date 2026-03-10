"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Solution() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            MeetingFlowのポジション
          </h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            既存ツールが手薄な「会議中 × ローカル」領域を狙う
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Image
            src="/images/positioning_map.png"
            alt="AI Meeting Solutions Market Landscape: Strategic Positioning — MeetingFlowは会議中×ローカル領域に位置する"
            width={1024}
            height={512}
            className="w-full h-auto rounded-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
