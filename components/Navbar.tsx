import Container from "@/components/Container";
import { NAV_ITEMS } from "../lib/constant";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-colors duration-300">
      <Container>
        <div className="h-16 flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href={"/"}>
              <Image
                alt="Logo"
                src={"/logo.png"}
                width={150}
                height={150}
                className="object-cover"
              />
            </Link>
          </div>
          {/* Nav Desktop */}
          <div className="hidden sm:block">
            <div className="flex items-baseline space-x-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  className="text-foreground  hover:text-primary font-semibold px-3 py-2 transition-colors duration-300"
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Cta */}
          <div className="hidden sm:block">
            <Button>Rejoindre</Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
