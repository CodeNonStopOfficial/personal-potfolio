"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { Card } from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";
import { GitBranch, Link2Icon, Mail, TableRowsSplitIcon } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact"
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
            bg-green-500/10 blur-3xl
          "
        />

        <div
          className="
            absolute bottom-0 right-0
            h-72 w-72 rounded-full
            bg-emerald-500/10 blur-3xl
          "
        />
      </div>

      <div
        className="
          mx-auto grid max-w-7xl
          gap-12 px-4
          sm:px-6 lg:grid-cols-2
          lg:gap-20 lg:px-8
        "
      >
        {/* Left Side */}
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
          className="
            flex flex-col
            justify-center
          "
        >
          <span
            className="
              w-fit rounded-full border
              px-4 py-2 text-xs
              font-medium
              text-muted-foreground
            "
          >
            Contact Me
          </span>

          <h2
            className="
              mt-6 text-4xl
              font-bold tracking-tight
              text-foreground
              sm:text-5xl
              lg:text-6xl
            "
          >
            Let’s Build
            <span
              className="
                bg-linear-to-r
                from-green-500
                to-emerald-500
                bg-clip-text
                text-transparent
              "
            >
              {" "}
              Something Amazing
            </span>
          </h2>

          <p
            className="
              mt-5 max-w-lg
              text-sm leading-relaxed
              text-muted-foreground
              sm:text-base
            "
          >
            I build scalable full-stack applications,
            modern user interfaces, and high-performance
            web experiences using the latest technologies.
          </p>

          {/* Contact Info */}
          <div className="mt-8 space-y-4">
            <div
              className="
                flex items-center gap-4
              "
            >
              <div
                className="
                  flex h-12 w-12
                  items-center justify-center
                  rounded-2xl
                  border bg-card
                "
              >
                <Mail className="h-5 w-5" />
              </div>

              <div>
                <p
                  className="
                    text-sm font-medium
                    text-foreground
                  "
                >
                  Email
                </p>

                <p
                  className="
                    text-sm text-muted-foreground
                  "
                >
                  virendra@example.com
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div
            className="
              mt-8 flex items-center
              gap-4
            "
          >
            <Button
              size="icon"
              variant="outline"
              className="rounded-full"
            >
              <GitBranch className="h-5 w-5" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              className="rounded-full"
            >
              <Link2Icon className="h-5 w-5" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              className="rounded-full"
            >
              <TableRowsSplitIcon className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        {/* Right Side Form */}
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
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <Card
            className="
              rounded-3xl border
              bg-card/70 p-6
              shadow-xl backdrop-blur-md
              sm:p-8
            "
          >
            <div className="mb-6">
              <h3
                className="
                  text-2xl font-semibold
                  text-foreground
                "
              >
                Send Message
              </h3>

              <p
                className="
                  mt-2 text-sm
                  text-muted-foreground
                "
              >
                Fill out the form and I’ll get back
                to you soon.
              </p>
            </div>

            <form className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <Label>Name</Label>

                <Input
                  type="text"
                  placeholder="Enter your name"
                  className="
                    h-12 rounded-xl
                  "
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label>Email</Label>

                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    h-12 rounded-xl
                  "
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label>Message</Label>

                <Textarea
                  placeholder="Write your message..."
                  className="
                    min-h-[140px]
                    rounded-xl
                    resize-none
                  "
                />
              </div>

              {/* Button */}
              <Button
                type="submit"
                className="
                  h-12 w-full
                  rounded-xl
                  text-base font-medium
                "
              >
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}