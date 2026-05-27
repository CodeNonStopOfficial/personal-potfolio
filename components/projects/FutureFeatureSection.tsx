"use client";

import { motion } from "framer-motion";

import {
  Brain,
  Cpu,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const futureFeatures = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI Automation",
    description:
      "Smart AI systems that automate workflows and improve productivity.",
  },

  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Fast Performance",
    description:
      "Optimized applications with blazing fast speed and scalability.",
  },

  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Smart Workflows",
    description:
      "Seamless integrations and intelligent workflow management.",
  },

  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Advanced Security",
    description:
      "Enterprise-level security with real-time protection systems.",
  },

  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Modern Stack",
    description:
      "Built using Next.js, AI tools, cloud infrastructure, and automation.",
  },

  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Future Ready",
    description:
      "Designed for the next generation of web and AI applications.",
  },
];

export default function FutureFeatureSection() {
  return (
    <section
      className="
        relative overflow-hidden
        py-16 sm:py-20 lg:py-28
        bg-background
      "
    >
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute left-0 top-0
            h-72 w-72 rounded-full
            bg-cyan-500/10 blur-3xl
          "
        />

        <div
          className="
            absolute bottom-0 right-0
            h-72 w-72 rounded-full
            bg-purple-500/10 blur-3xl
          "
        />
      </div>

      <div
        className="
          mx-auto max-w-7xl
          px-4 sm:px-6 lg:px-8
        "
      >
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="
              rounded-full border
              px-4 py-2 text-xs
              font-medium
              text-muted-foreground
            "
          >
            Future Features
          </span>

          <h2
            className="
              mt-6 text-3xl
              font-bold tracking-tight
              text-foreground
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Building The Future
            <span
              className="
                bg-linear-to-r
                from-cyan-500 to-purple-500
                bg-clip-text text-transparent
              "
            >
              {" "}
              Of Technology
            </span>
          </h2>

          <p
            className="
              mx-auto mt-5 max-w-2xl
              text-sm leading-relaxed
              text-muted-foreground
              sm:text-base md:text-lg
            "
          >
            Modern AI-powered systems designed for the
            next 5 years of innovation, automation,
            scalability, and performance.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div
          className="
            mt-14 grid gap-5
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {futureFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                group relative overflow-hidden
                rounded-3xl border
                border-border
                bg-card/70
                p-6 shadow-sm
                backdrop-blur-md
                transition-all
                hover:shadow-xl
              "
            >
              {/* Hover Gradient */}
              <div
                className="
                  absolute inset-0
                  bg-linear-to-br
                  from-cyan-500/5
                  to-purple-500/5
                  opacity-0 transition
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Icon */}
              <div
                className="
                  relative z-10
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-linear-to-br
                  from-cyan-500
                  to-purple-600
                  text-white
                  shadow-lg
                "
              >
                {feature.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 mt-5">
                <h3
                  className="
                    text-xl font-semibold
                    text-foreground
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-3 text-sm leading-relaxed
                    text-muted-foreground
                    sm:text-base
                  "
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}