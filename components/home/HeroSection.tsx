"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, GitBranch, LucidePaintBucket} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 rounded-full border px-4 py-2 text-sm font-medium"
        >
          Full Stack Developer • Next.js Developer
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Building Modern &
          <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Scalable Web Applications
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl"
        >
          Hi, I’m Virendra Kumar Prajapati — a passionate Full Stack
          Developer specializing in Next.js, React, TypeScript,
          Node.js, Prisma, and modern web technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex items-center gap-5"
        >
          <Link
            href="https://github.com"
            target="_blank"
            className="rounded-full border p-3 transition hover:scale-110 hover:bg-muted"
          >
            <GitBranch className="h-5 w-5" />
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
            className="rounded-full border p-3 transition hover:scale-110 hover:bg-muted"
          >
            <LucidePaintBucket className="h-5 w-5" />
          </Link>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
        >
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Prisma",
            "Tailwind CSS",
          ].map((tech) => (
            <div
              key={tech}
              className="rounded-full border bg-background px-5 py-2 text-sm font-medium shadow-sm"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}