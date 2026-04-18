"use client";

import Container from "@/components/Container";
import { NAV_ITEMS } from "../lib/constant";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-colors duration-300">
      <Container>
        <div className="h-16 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              alt="Logo"
              src="/logo.png"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Nav Desktop */}
          <div className="hidden sm:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-md font-semibold text-foreground/90 hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* CTA Desktop */}
            <div className="hidden sm:block">
              <Button>Rejoindre</Button>
            </div>

            {/* Burger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden flex flex-col space-y-1 cursor-pointer"
            >
              <span
                className={`block w-6 h-0.5 bg-foreground transition ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-foreground transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-foreground transition ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-5 py-5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-foreground/90 hover:text-primary transition"
              >
                {item.label}
              </Link>
            ))}

            {/* CTA Mobile */}
            <Button className="px-6 mx-auto" onClick={() => setIsOpen(false)}>
              Rejoindre
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
