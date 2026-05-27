"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  ExternalLink,
  GitBranch,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Modern full-stack e-commerce application with authentication, dashboard, payments, and admin panel.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    tech: [
      "Next.js",
       "React.js",
       "PostGreSql",
      "TypeScript",
      "Prisma",
      "Tailwind",
      "Neon",
      "Better Auth",
      "Acject"
    ],
    github: "#",
    live: "#",
    featured: true,
  },

  {
    title: "AI SaaS Dashboard",
    description:
      "Responsive AI dashboard with analytics, charts, authentication, and subscriptions.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tech: [
      "React",
      "Node.js",
      "Convex",
      "MongoDB",
      "TypeScript",
      "Express.js",
      "JavaScript",
      "Shadcn UI",
      "AWS",
      "Dockor",
      "Ajects",
      "NextAuth.js",
      "Sprine",
      "Next.js",
      "Kubernative"
    ],
    github: "#",
    live: "#",
    featured: false,
  },

  {
    title: "Portfolio Website",
    description:
      "Personal portfolio with animations, responsive design, and dark mode support.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tech: [
      "React",
      "Node.js",
      "Convex",
      "MongoDB",
      "TypeScript",
      "Express.js",
      "JavaScript",
      "Shadcn UI",
      "AWS",
      "Dockor",
      "Ajects",
      "NextAuth.js",
      "Sprine",
      "Next.js",
      "Kubernative"
    ],
    github: "#",
    live: "#",
    featured: false,
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

export default function ProjectSection() {
  return (
    <section id="project"
      className="
        relative overflow-hidden
        py-16 sm:py-20 lg:py-28
      "
    >
      {/* Background Blur */}
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
              rounded-full border
              px-4 py-2 text-xs font-medium
              sm:text-sm
            "
          >
            My Projects
          </span>

          <h2
            className="
              mt-5 text-3xl font-extrabold tracking-tight
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Featured Work &
            Creative Projects
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
            A collection of full-stack applications,
            responsive websites, and modern web projects
            built with the latest technologies.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div
          className="
            mt-14 grid gap-8
            sm:grid-cols-1
            md :grid-cols-3
            lg:grid-cols-3
            xl:grid-cols-3
          "
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group overflow-hidden rounded-3xl
                border bg-background/80
                shadow-sm backdrop-blur-md
                transition-all
              "
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover transition duration-500
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-black/20 opacity-0
                    transition
                    group-hover:opacity-100
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                {/* Featured Badge */}
                {project.featured && (
                  <div
                    className="
                      mb-4 inline-flex items-center
                      rounded-full border
                      px-3 py-1 text-xs font-medium
                    "
                  >
                    Featured Project
                  </div>
                )}

                {/* Title */}
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="
                      text-xl font-bold
                      sm:text-2xl
                    "
                  >
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    className="
                      h-5 w-5 shrink-0
                      transition group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>

                {/* Description */}
                <p
                  className="
                    mt-4 text-sm leading-relaxed
                    text-muted-foreground
                    sm:text-base
                  "
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div
                  className="
                    mt-5 flex flex-wrap gap-2
                  "
                >
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="
                        rounded-full border
                        px-3 py-1 text-xs
                        sm:text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div
                  className="
                    mt-6 flex flex-col gap-3
                    sm:flex-row
                  "
                >
                  <Button
                    asChild
                    className="w-full sm:w-auto"
                  >
                    <Link href={project.live}>
                      <ExternalLink className="mr-2 h-4 w-4" />

                      Live Demo
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <Link href={project.github}>
                      <GitBranch className="mr-2 h-4 w-4" />

                      GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            mt-14 flex justify-center
          "
        >
          <Button
            asChild
            size="lg"
            className="rounded-full px-8"
          >
            <Link href="/projects">
              View All Projects
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}