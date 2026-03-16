'use client'

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/chelum_display.webp"
          alt="Luxury chocolate dessert"
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">
          CHELUM
        </h1>
        <p className="text-xl md:text-3xl mb-8 max-w-2xl mx-auto">
          Crafted for your desire
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={"#menu"}
            className="bg-amber-400 text-black px-8 py-4 rounded-full hover:bg-amber-500 transition-all hover:scale-105"
          >
            Explore Our Menu
          </Link>
          <Link
            href={"#contact"}
            className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-zinc-900 transition-all"
          >
            Make a Reservation
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <Link
        href={"#about"}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce cursor-pointer"
      >
        <ChevronDown size={32} />
      </Link>
    </section>
  );
}