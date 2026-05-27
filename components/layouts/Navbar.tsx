"use client";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ProfileToggle } from "../shared/ProfileToggle";
import { ThemeToggle } from "../providers/ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const user = true;
  return (
    <header className="sticky top-0 z-50 max-w-full border-b bg-gray-100 dark:bg-[#000000]">
      <nav className="flex items-center justify-between gap-2 px-4 py-4">
        <div className="flex items-center gap-2">
          <h1 className="md:text-2xl text-[18px] font-bold text-[#4500f4]">
            <span className="text-bold text-[#f00]">Code</span>
            Nonstop
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-[#25252afb] dark:text-[#cecece]">
          <Link className="hover:text-[#eb5d3a]" href="/">
            Getting
          </Link>
          <Link className="hover:text-[#eb5d3a]" href="/project">
            Project
          </Link>
          <Link className="hover:text-[#eb5d3a]" href="/services">
            Services
          </Link>
          <Link className="hover:text-[#eb5d3a]" href="/experience">
            Experience
          </Link>
          <Link className="hover:text-[#eb5d3a]" href="/about">
            About
          </Link>
          <Link className="hover:text-[#eb5d3a]" href="/contact">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-2">
          {!user ? (
            <Button
              className={buttonVariants({
                variant: "outline",
                className: "px-4 py-4 text-black dark:text-white",
              })}
            >
              Sign In
            </Button>
          ) : (
            <>
              <ProfileToggle />
            </>
          )}
          <div>
            <ThemeToggle />
          </div>
          <Button
            onClick={() => setOpen(!open)}
            className={buttonVariants({
              variant: "outline",
              className: "md:hidden text-black dark:text-white",
            })}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </nav>
      {/* // mobile responsive  */}
      {open && (
        <div>
          <div className="md:hidden border-t">
            <div className="flex flex-col gap-2 px-2 py-4 text-[16px] font-medium dark:text-gray-100">
              <Link
                className="border px-2 py-2 rounded bg-white dark:bg-[#121214]"
                href="/"
              >
                Getting
              </Link>
              <Link
                className="border px-2 py-2 rounded bg-white dark:bg-[#121214]"
                href="/project"
              >
                Project
              </Link>
              <Link
                className="border px-2 py-2 rounded bg-white dark:bg-[#121214]"
                href="/services"
              >
                Services
              </Link>
              <Link
                className="border px-2 py-2 rounded bg-white dark:bg-[#121214]"
                href="/experience"
              >
                Experience
              </Link>
              <Link
                className="border px-2 py-2 rounded bg-white dark:bg-[#121214]"
                href="/about"
              >
                About
              </Link>
              <Link
                className="border px-2 py-2 rounded bg-white dark:bg-[#121214]"
                href="/contact"
              >
                Contact
              </Link>

              <div className="flex items-center flex-col justify-between pt-4">
                {user ? (
                  <Button
                    className={buttonVariants({
                      variant: "outline",
                      className: "text-black w-full dark:text-white",
                    })}
                  >
                    Sign In
                  </Button>
                ) : (
                  <ProfileToggle />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
