"use client";

import Image from "next/image";
import { MapPin, BriefcaseBusiness, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const skills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "JavaScript",
  "TypeScript",
  "Java",
];
const projects = [
  {
    title: "Modern Portfolio",
    description: "Personal portfolio with dark mode and smooth animations.",
  },
  {
    title: "E-Commerce App",
    description: "Amazon-like full stack shopping platform.",
  },
  {
    title: "Task Manager",
    description: "Productivity app with authentication and dashboard.",
  },
];
export default function ProfilePage() {
  return (
    <section className="min-h-screen bg-white px-4 py-10 dark:bg-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Top Card */}
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
          {/* Banner */}
          <div className="relative h-40 w-full bg-linear-to-r from-indigo-500 via-violet-500 to-cyan-500 sm:h-52">
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0">
              <div className="rounded-full border-4 border-white bg-white dark:border-black dark:bg-black">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200"
                  alt="Profile"
                  width={120}
                  height={120}
                  className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-5 pb-8 pt-20 sm:px-10 sm:pt-16">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              {/* Left */}
              <div className="text-center sm:text-left">
                <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
                  Virendra Kumar
                </h1>

                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Full Stack Developer • React • Next.js • Node.js
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 sm:justify-start">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    Bihar, India
                  </div>

                  <div className="flex items-center gap-2">
                    <BriefcaseBusiness size={16} />
                    Open to work
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-center justify-center gap-3 sm:justify-end">
                <Button className="flex items-center justify-center rounded border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-white px-8 py-4">
                  <Link href={"/edit-profile"}>
                    <Edit size={22} />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Bio */}
            <p className="mt-8 max-w-3xl text-sm leading-7 text-neutral-600 dark:text-neutral-400 sm:text-base">
              Passionate full stack developer focused on building modern,
              responsive and scalable web applications. I enjoy creating clean
              user interfaces, solving real-world problems, and learning new
              technologies every day.
            </p>

            {/* Skills */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
                Skills
              </h2>

              <div className="mt-4 flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Featured Projects
            </h2>

            <button className="rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800">
              View All
            </button>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="h-40 rounded-xl bg-linear-to-br from-indigo-500/20 via-violet-500/20 to-cyan-500/20" />

                <h3 className="mt-5 text-lg font-semibold text-neutral-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>

                <button className="mt-5 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  View Project →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
