"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  CalendarDays,
} from "lucide-react";

const experiences = [
  {
    company: "CodeNonstop",
    role: "Full Stack Developer",
    duration: "2025 - Present",
    description:
      "Building scalable full-stack applications using Next.js, TypeScript, Prisma, Convex, and Tailwind CSS.",
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    duration: "2024 - 2025",
    description:
      "Developed responsive portfolio websites, admin dashboards, and modern UI systems.",
  },
];

const education = [
  {
    school: "BCA College",
    degree: "Bachelor of Computer Applications",
    duration: "2023 - 2026",
    description:
      "Focused on software engineering, DSA, database systems, and web technologies.",
  },
  {
    school: "Self Learning",
    degree: "Full Stack Development",
    duration: "2024 - Present",
    description:
      "Learning Next.js, React, Node.js, Prisma, Convex, and scalable system design.",
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

function TimelineCard({
  title,
  subtitle,
  duration,
  description,
}: {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -6,
      }}
      className="
        relative rounded-3xl border bg-background/80
        p-4 shadow-sm backdrop-blur-md transition-all
        sm:p-5 md:p-6
      "
    >
      {/* Timeline Dot */}
      <div
        className="
          absolute left-[-29px] top-8
          h-4 w-4 rounded-full
          border-4 border-background bg-primary
        "
      />

      {/* Header */}
      <div
        className="
          flex flex-col gap-3
          sm:flex-row sm:items-start sm:justify-between
        "
      >
        <div>
          <h4
            className="
              text-lg font-bold leading-tight
              sm:text-xl
            "
          >
            {title}
          </h4>

          <p
            className="
              mt-1 text-sm font-medium text-primary
              sm:text-base
            "
          >
            {subtitle}
          </p>
        </div>

        <div
          className="
            flex items-center gap-2
            rounded-full border px-3 py-1
            text-xs text-muted-foreground
            w-fit
          "
        >
          <CalendarDays className="h-3.5 w-3.5" />

          {duration}
        </div>
      </div>

      {/* Description */}
      <p
        className="
          mt-4 text-sm leading-relaxed
          text-muted-foreground
          sm:text-[15px] md:text-base
        "
      >
        {description}
      </p>
    </motion.div>
  );
}

export default function EducationSection() {
  return (
    <section
      className="
        relative overflow-hidden
        py-14 sm:py-20 lg:py-28
      "
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute left-0 top-0
            h-60 w-60 rounded-full
            bg-blue-500/10 blur-3xl
            sm:h-72 sm:w-72
          "
        />

        <div
          className="
            absolute bottom-0 right-0
            h-60 w-60 rounded-full
            bg-purple-500/10 blur-3xl
            sm:h-72 sm:w-72
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
              px-4 py-2 text-xs font-medium
              sm:text-sm
            "
          >
            My Journey
          </span>

          <h2
            className="
              mt-5 text-3xl font-extrabold tracking-tight
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Education & Experience
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
            Combining academic learning with real-world
            development experience to build modern,
            scalable, and responsive applications.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          className="
            mt-14 grid gap-12
            lg:grid-cols-2
            lg:gap-16
          "
        >
          {/* Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Title */}
            <div
              className="
                mb-8 flex items-center gap-4
              "
            >
              <div
                className="
                  rounded-2xl border
                  bg-background p-3 shadow-sm
                "
              >
                <Briefcase className="h-6 w-6" />
              </div>

              <div>
                <h3
                  className="
                    text-2xl font-bold
                    sm:text-3xl
                  "
                >
                  Experience
                </h3>

                <p
                  className="
                    text-sm text-muted-foreground
                  "
                >
                  Professional development journey
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div
              className="
                relative space-y-6
                border-l pl-5 sm:pl-6
              "
            >
              {experiences.map((item, index) => (
                <TimelineCard
                  key={index}
                  title={item.role}
                  subtitle={item.company}
                  duration={item.duration}
                  description={item.description}
                />
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Title */}
            <div
              className="
                mb-8 flex items-center gap-4
              "
            >
              <div
                className="
                  rounded-2xl border
                  bg-background p-3 shadow-sm
                "
              >
                <GraduationCap className="h-6 w-6" />
              </div>

              <div>
                <h3
                  className="
                    text-2xl font-bold
                    sm:text-3xl
                  "
                >
                  Education
                </h3>

                <p
                  className="
                    text-sm text-muted-foreground
                  "
                >
                  Academic learning journey
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div
              className="
                relative space-y-6
                border-l pl-5 sm:pl-6
              "
            >
              {education.map((item, index) => (
                <TimelineCard
                  key={index}
                  title={item.degree}
                  subtitle={item.school}
                  duration={item.duration}
                  description={item.description}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}