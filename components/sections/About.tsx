import { Award, Heart, Sparkles } from "lucide-react";
import Image from "next/image";

export default function About() {
  const features = [
    {
      icon: Heart,
      title: "Passion & Craft",
      description: "Every creation is made with love and high-quality dedication by our master chocolatiers",
    },
    {
      icon: Award,
      title: "Award-Winning",
      description: "Recognized globally for excellence in chocolate artistry and innovation",
    },
    {
      icon: Sparkles,
      title: "Premium Ingredients",
      description: "Only the finest single-origin cacao beans from sustainable farms worldwide",
    },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative h-125 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/product_tiongdelite.webp"
              alt="Cocoa beans"
              className="w-full h-full object-cover"
              fill
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-6">
              Our Chocolate Story
            </h2>
            <p className="text-lg text-zinc-700 mb-6">
              CHELUM represents the pinnacle of Malaysian chocolate craftsmanship, where traditional
              flavors meet modern chocolate artistry. Our name reflects our commitment to excellence
              and our deep respect for local ingredients and heritage.
            </p>
            <p className="text-lg text-zinc-700 mb-6">
              Each of our four signature creations tells a unique story, blending premium chocolate
              with distinctive Malaysian flavors. From the crunch of traditional Tebaloi to the warmth
              of spices, we celebrate the rich tapestry of Malaysian taste in every bar.
            </p>
            <p className="text-lg text-zinc-700">
              Our master chocolatiers source only the finest ingredients, working with sustainable
              local farms to create chocolate that honors both tradition and innovation. Every bar
              is a testament to our dedication to quality and authenticity.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="text-amber-700" size={28} />
              </div>
              <h3 className="text-xl text-zinc-900 mb-3">{feature.title}</h3>
              <p className="text-zinc-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}