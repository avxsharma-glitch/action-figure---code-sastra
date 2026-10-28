"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function LifestyleSection() {
  return (
    <section id="spotlight" className="relative overflow-hidden bg-[#f3f0e9] py-20">
      <div className="mx-auto grid max-w-7xl max-sm:min-w-[520px] items-center gap-10 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="order-2 lg:order-1"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-[#6d28d9]">CHARACTER SPOTLIGHT</span>
          <h2 className="mt-3 text-4xl font-black tracking-tighter text-[#121212] md:text-6xl">BUMBLEBEE</h2>
          <p className="mt-4 max-w-lg font-mono text-sm leading-relaxed text-[#121212]/65">
            A commanding Decepticon presence with gunmetal armor, a signature fusion cannon, and unmistakable purple
            insignia. Built to be the centrepiece of any serious collection.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Decepticon", "Gunmetal armor", "Fusion cannon"].map((trait) => (
              <span key={trait} className="rounded-full bg-white px-3 py-1.5 font-mono text-xs text-[#121212]/65 shadow-sm">
                {trait}
              </span>
            ))}
          </div>
          <motion.a
            href="#collections"
            onClick={(event) => event.preventDefault()}
            className="mt-8 inline-flex rounded-full bg-[#22c55e] px-6 py-3 text-sm font-bold tracking-wide text-white"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Discover Character
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative h-[32rem] w-full max-w-md">
            <Image
              src="/images/megatron.png"
              alt="Megatron action figure"
              fill
              className="object-contain drop-shadow-2xl lg:object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
