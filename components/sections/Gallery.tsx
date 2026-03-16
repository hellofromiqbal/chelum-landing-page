import tebaloiCrunchImg from "@/public/product_tebaloi_crunch.webp";
import lazeezSpiceImg from "@/public/product_lazeez_spice.webp";
import sagokPearlImg from "@/public/product_sagok_pearl.webp";
import blackpeppermintImg from "@/public/product_blackpepper_mint.webp";
import tiongDeliteImg from "@/public/product_tiong_delite.webp";
import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  const images = [
    {
      src: tebaloiCrunchImg,
      alt: "Tebaloi Crunch chocolate bars",
      title: "Tebaloi Crunch",
    },
    {
      src: lazeezSpiceImg,
      alt: "Lazeez Spice chocolate bars",
      title: "Lazeez Spice",
    },
    {
      src: sagokPearlImg,
      alt: "Sagok Pearl chocolate bars",
      title: "Sagok Pearl",
    },
    {
      src: blackpeppermintImg,
      alt: "Blackpeppermint chocolate bars",
      title: "Blackpeppermint",
    },
    {
      src: tiongDeliteImg,
      alt: "Tiong Delite chocolate bars",
      title: "Tiong Delite",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            A visual journey through our chocolate creations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-serif">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={"https://www.instagram.com/my.chelum/"}
            target="_blank"
            className="text-black hover:text-amber-700 transition-colors">
            View More on Instagram →
          </Link>
        </div>
      </div>
    </section>
  );
}