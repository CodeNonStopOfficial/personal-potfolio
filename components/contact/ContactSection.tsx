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
    <section
      id="contact"
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
            I build scalable full-stack applications, modern user interfaces,
            and high-performance web experiences using the latest technologies.
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
            <Button size="icon" variant="outline" className="rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.21.08 1.85 1.25 1.85 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.92 1.23 3.23 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </Button>

            <Button size="icon" variant="outline" className="rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.94v5.66H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
              </svg>
            </Button>

            <Button size="icon" variant="outline" className="rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-youtube"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>
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
                Fill out the form and I’ll get back to you soon.
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
