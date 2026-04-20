import Image from "next/image";
import { PROGRAMS } from "../lib/constant";
import { Card, CardContent } from "./ui/card";
import Container from "./Container";
import { Button } from "./ui/button";

export default function Programs() {
  return (
    <section className="py-16 md:py-28 text-center">
      <Container>
        <h2 className="text-4xl lg:text-5xl font-black font-heading mb-4">
          Nos programmes
        </h2>

        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          Des programmes adaptés à tous les niveaux pour transformer votre corps
          et améliorer vos performances.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program) => (
            <Card
              key={program.title}
              className="p-0 overflow-hidden group flex flex-col pb-3"
            >
              {/* IMAGE */}
              <div className="relative w-full h-48 md:h-44 lg:h-40 overflow-hidden">
                <Image
                  src={program.image}
                  fill
                  alt={program.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <CardContent className="flex flex-col flex-1">
                <h3 className="text-xl lg:text-2xl font-black font-heading mb-3 text-foreground group-hover:text-primary transition-colors">
                  {program.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                  {program.description}
                </p>

                {/* BUTTON aligné en bas */}
                <Button
                  variant="outline"
                  className="w-full  transition-colors group-hover:bg-primary group-hover:text-white"
                >
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
