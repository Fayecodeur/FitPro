import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="h-screen py-24 relative flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-image.jpg"
          fill
          alt="hero image"
          className="object-cover object-top"
        />
      </div>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-50 max-w-4xl text-center px-4  text-white ">
        <div>
          <h1 className="text-5xl md:text-6xl font-heading font-black leading-tight mb-4">
            Transformez votre corps,{" "}
            <span className="text-primary">Transformer votre vie</span>
          </h1>
          <p className="text-xl md:2xl max-w-2xl text-center mx-auto font-light leading-relaxed mb-8 ">
            Découvrez nos programmes de musculation et fitness personnalisés
            pour atteindre vos objectifs rapidement et en toute sécurité.
          </p>
          <div className="flex flex-col justify-center md:flex-row gap-4">
            <Button
              size={"lg"}
              className="bg-primary hover:bg-primary/90 px-8 text-md font-semibold transition-transform duration-300 hover:scale-105"
            >
              Rejoindre maintenant
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className="bg-transparent px-8 text-md font-semibold transition-transform duration-300 hover:scale-105"
            >
              Voir les plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
