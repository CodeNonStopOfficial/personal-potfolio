"use client";

import Image from "next/image";
import { Code2, BriefcaseBusiness, Sparkles } from "lucide-react";

export  function AboutSection() {
  const stats = [
    { value: "2+", label: "Experience" },
    { value: "20+", label: "Projects" },
    { value: "10+", label: "Tech Stack" },
  ];

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Scalable and maintainable modern applications.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Real Projects",
      description: "Building real-world full stack applications.",
    },
    {
      icon: Sparkles,
      title: "Creative UI",
      description: "Responsive and smooth user experiences.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-14 dark:bg-black sm:py-16"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-44 w-44 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
              About Me
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Passionate Full Stack Developer
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600 dark:text-neutral-400 sm:text-base">
              I build modern, responsive and scalable web applications with
              clean UI and smooth user experiences using React, Next.js,
              Tailwind CSS and Node.js.
            </p>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/70"
                >
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white sm:text-2xl">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="mt-6 space-y-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-3 rounded-xl border border-neutral-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/60"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-xs leading-6 text-neutral-600 dark:text-neutral-400 sm:text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-[2rem] bg-linear-to-tr from-indigo-500/20 to-cyan-500/20 blur-2xl" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-[1.7rem] border border-neutral-200 bg-neutral-100 p-2 shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200"
                  alt="Developer"
                  width={420}
                  height={500}
                  className="h-[320px] w-full rounded-[1.3rem] object-cover sm:h-[420px] sm:w-[380px]"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs text-neutral-300">
                    React • Next.js • Tailwind
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}