"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    date: "Jun 10, 2026",
    text: "PrebuiltUI has completely changed the way I write code. The components are clean, modern and production-ready.",
    name: "James Bond",
    role: "Amazon.com, Inc.",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  },
  {
    id: 2,
    date: "Jun 10, 2026",
    text: "The components are beautifully designed and incredibly responsive. PrebuiltUI fits perfectly into my React workflow.",
    name: "Emily Rodriguez",
    role: "The Walt Disney Company",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
  },
  {
    id: 3,
    date: "Jun 10, 2026",
    text: "PrebuiltUI is like having a professional design system ready. It has become an essential part of my coding journey.",
    name: "Jack",
    role: "Facebook, Inc.",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    id: 4,
    date: "Jul 12, 2026",
    text: "PrebuiltUI makes building polished interfaces effortless. The components feel thoughtfully designed and easy to customize.",
    name: "Sarah Williams",
    role: "Spotify",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
  },
  {
    id: 5,
    date: "Jul 12, 2026",
    text: "PrebuiltUI delivers a perfect balance between design and development. It helps me move faster and keep my UI consistent.",
    name: "Michael Chen",
    role: "Google LLC",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  },
];

export  function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Auto Slide Mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 >= testimonials.length ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [isMobile]);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 3 >= testimonials.length ? 0 : prev + 3
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 3 < 0 ? Math.max(testimonials.length - 3, 0) : prev - 3
    );
  };

  const visibleTestimonials = isMobile
    ? testimonials.slice(currentIndex, currentIndex + 1)
    : testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="relative overflow-hidden py-20 bg-white dark:bg-black transition-colors duration-300">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="inline-flex items-center rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-4 py-1 text-sm text-neutral-700 dark:text-neutral-300">
              Testimonials
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
              Loved by 10k+ Developers
            </h2>

            <p className="mt-4 max-w-2xl text-sm sm:text-base leading-7 text-neutral-600 dark:text-neutral-400">
              Every testimonial reflects the quality, performance, and developer
              experience we strive to deliver.
            </p>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="h-11 w-11 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              <ChevronLeft className="size-5 text-neutral-700 dark:text-white" />
            </button>

            <button
              onClick={handleNext}
              className="h-11 w-11 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              <ChevronRight className="size-5 text-neutral-700 dark:text-white" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/80 backdrop-blur-xl p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl dark:hover:shadow-white/5"
              >
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {item.date}
                  </span>
                </div>

                {/* Review */}
                <p className="mt-6 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                  "{item.text}"
                </p>

                {/* User */}
                <div className="flex items-center gap-4 mt-8">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={52}
                    height={52}
                    className="rounded-full object-cover border border-neutral-200 dark:border-neutral-700"
                  />

                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white">
                      {item.name}
                    </h3>

                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Dots */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-neutral-900 dark:bg-white"
                  : "w-2.5 bg-neutral-300 dark:bg-neutral-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}