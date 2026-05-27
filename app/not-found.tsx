import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="mx-auto  flex max-w-2xl flex-col items-center text-center">
        
        {/* 404 Text */}
        <h1 className="text-7xl font-extrabold tracking-tight sm:text-8xl md:text-9xl">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
          Sorry, the page you are looking for does not exist
          or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              Back To Home
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              View Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}