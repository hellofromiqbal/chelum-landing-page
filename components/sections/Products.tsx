import tebaloiCrunchImg from "@/public/product_tebaloi_crunch2.webp";
import lazeezSpiceImg from "@/public/product_lazeez_spice2.webp";
import sagokPearlImg from "@/public/product_sagok_pearl2.webp";
import blackpeppermintImg from "@/public/product_blackpepper_mint2.webp";
import tiongDeliteImg from "@/public/product_tiong_delite2.webp";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      name: "Tebaloi Crunch",
      image: tebaloiCrunchImg,
      description: "A delightful fusion of traditional Malaysian Tebaloi biscuits with premium dark chocolate, creating a perfect balance of crunch and smoothness.",
      accentColor: "from-green-600 to-green-800",
      tagColor: "bg-green-700",
    },
    {
      name: "Lazeez Spice",
      image: lazeezSpiceImg,
      description: "An exotic blend of aromatic spices meets rich chocolate, inspired by traditional Malaysian flavors. A bold and warming experience.",
      accentColor: "from-red-600 to-red-800",
      tagColor: "bg-red-700",
    },
    {
      name: "Sagok Pearl",
      image: sagokPearlImg,
      description: "Infused with delicate sago pearls, this creation offers a unique texture that celebrates Malaysian heritage with every bite.",
      accentColor: "from-amber-600 to-orange-800",
      tagColor: "bg-orange-700",
    },
    {
      name: "Blackpeppermint",
      image: blackpeppermintImg,
      description: "A sophisticated combination of black pepper's subtle heat and refreshing peppermint, balanced with smooth chocolate for an unforgettable taste.",
      accentColor: "from-blue-600 to-indigo-800",
      tagColor: "bg-blue-700",
    },
    {
      name: "Tiong Delite",
      image: tiongDeliteImg,
      description: "A luxurious Sarawak chocolate creation that embodies the essence of Malaysian craftsmanship with rich, indulgent flavors.",
      accentColor: "from-yellow-600 to-amber-800",
      tagColor: "bg-yellow-700",
    },
  ];

  return (
    <section id="menu" className="py-24 bg-[#05132B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-amber-300 mb-4">
            Our Collection
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Five distinctive creations, each a masterpiece of flavor and craftsmanship
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-[rgb(5,21,55)] rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-300/20 hover:shadow-3xl transition-all duration-500"
            >
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-linear-to-t ${product.accentColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>

              {/* Product Info */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`${product.tagColor} text-white text-sm px-3 py-1 rounded-full`}>
                    Premium
                  </span>
                  <h3 className="text-2xl font-serif text-amber-300">
                    {product.name}
                  </h3>
                </div>
                <p className="text-white leading-relaxed">
                  {product.description}
                </p>
                <button className="mt-6 text-amber-300 hover:text-amber-400 transition-colors flex items-center gap-2 group-hover:gap-3 duration-300">
                  Learn More
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-white mb-6">
            Each chocolate bar is carefully crafted with premium ingredients and Malaysian heritage
          </p>
          <Link
            href={"#contact"}
            className="bg-amber-400 text-black px-8 py-3 rounded-full hover:bg-amber-600 transition-all hover:scale-105 cursor-pointer">
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
}