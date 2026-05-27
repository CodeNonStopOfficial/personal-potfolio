"use client";

import { motion } from "framer-motion";

export function FeatureSection() {
  const featuresData = [
    {
      icon: (
        <svg
          className="h-6 w-6 text-white dark:text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),

      title: "Task Automation",

      description:
        "Let AI handle repetitive and time-consuming tasks so your team can focus on growth.",
    },

    {
      icon: (
        <svg
          className="h-6 w-6 text-white dark:text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 12a9 9 0 1 0 9-9" />
          <path d="M12 7v5l4 2" />
        </svg>
      ),

      title: "Real-Time Monitoring",

      description:
        "Track systems and business operations with live AI-powered monitoring.",
    },

    {
      icon: (
        <svg
          className="h-6 w-6 text-white dark:text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 8 12 13 3 8" />
          <path d="M3 8l9-5 9 5v8l-9 5-9-5V8z" />
        </svg>
      ),

      title: "Context Awareness",

      description:
        "AI adapts to your workflows and provides intelligent context-aware automation.",
    },

    {
      icon: (
        <svg
          className="h-6 w-6 text-white dark:text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        </svg>
      ),

      title: "Resource Optimization",

      description:
        "Optimize workflows and maximize productivity with intelligent AI systems.",
    },

    {
      icon: (
        <svg
          className="h-6 w-6 text-white dark:text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      ),

      title: "Role-Based Access",

      description:
        "Secure and scalable user permissions for teams and organizations.",
    },

    {
      icon: (
        <svg
          className="h-6 w-6 text-white dark:text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 17H4a2 2 0 0 1-2-2V5" />
          <path d="m12 15 5 6H7Z" />
        </svg>
      ),

      title: "AI Collaboration",

      description:
        "AI agents collaborate together to improve efficiency and automate processes.",
    },
  ];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="services"
      className="
        relative overflow-hidden
        py-16 sm:py-20 lg:py-28
        bg-background
      "
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute left-0 top-0
            h-72 w-72 rounded-full
            bg-blue-500/10 blur-3xl
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="
            mx-auto max-w-3xl text-center
          "
        >
          <span
            className="
              inline-flex items-center
              rounded-full border
              border-border
              bg-muted px-4 py-2
              text-xs font-medium
              text-foreground
              sm:text-sm
            "
          >
            Features
          </span>

          <h2
            className="
              mt-6 text-3xl font-extrabold
              tracking-tight
              text-foreground
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            AI Agent Automation Service provider and Techology
          </h2>

          <p
            className="
              mx-auto mt-5 max-w-2xl
              text-sm leading-relaxed
              text-muted-foreground
              sm:text-base
              md:text-lg
            "
          >
            Streamline operations, boost productivity,
            and scale effortlessly with intelligent
            AI-powered automation systems.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div
          className="
            mt-14 grid gap-6
            sm:grid-cols-2
            md:grid-cols-3
            xl:grid-cols-3
          "
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group relative overflow-hidden
                rounded-3xl border
                border-border
                bg-card/80
                p-6 shadow-sm
                backdrop-blur-md
                transition-all
                hover:shadow-xl
              "
            >
              {/* Gradient Hover */}
              <div
                className="
                  absolute inset-0
                  bg-linear-to-br
                  from-blue-500/5
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
                  from-blue-600 to-purple-600
                  shadow-lg
                "
              >
                {feature.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 mt-6">
                <h3
                  className="
                    text-xl font-bold
                    text-foreground
                    sm:text-2xl
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-3 text-sm
                    leading-relaxed
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