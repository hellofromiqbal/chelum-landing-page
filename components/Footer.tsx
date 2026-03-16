import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#05132B] text-amber-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-serif text-amber-300 mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-amber-300 mt-1 shrink-0" size={20} />
                <div className="text-white">
                  <p>CHELUM Chocolate Cafe, No. 8 Ground Floor</p>
                  <p>Kompleks Kubah Ria Petra Jaya</p>
                  <p>Kuching, Malaysia 93050</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-amber-300 shrink-0" size={20} />
                <p className="text-white">+60 19 921 1976</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-amber-300 shrink-0" size={20} />
                <p className="text-white">chelumlazeez8808@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-2xl font-serif text-amber-300 mb-6">Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="text-amber-300 mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-amber-200">Monday - Thursday</p>
                  <p className="text-white">08:00 AM - 05:00 PM</p>
                </div>
              </div>
              <div className="ml-8">
                <p className="text-amber-200">Friday - Saturday</p>
                <p className="text-white">08:00 AM - 05:00 PM</p>
              </div>
              <div className="ml-8">
                <p className="text-amber-200">Sunday</p>
                <p className="text-white">08:00 PM - 05:00 PM</p>
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-2xl font-serif text-amber-300 mb-6">Stay Connected</h3>
            <p className="text-white mb-4">
              Subscribe to our newsletter for exclusive offers and chocolate insights.
            </p>
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-full bg-zinc-800 border border-amber-900/30 text-amber-100 placeholder:text-amber-100/40 focus:outline-none focus:border-amber-700"
              />
              <button className="bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors">
                Subscribe
              </button>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/my.chelum/"
                target="_blank"
                className="w-10 h-10 bg-zinc-800 text-white rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://web.facebook.com/chelumsarawakchocolate/"
                target="_blank"
                className="w-10 h-10 bg-zinc-800 text-white rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@chelumchocolate"
                target="_blank"
                className="w-10 h-10 bg-zinc-800 text-white rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-900/20 pt-8 text-center">
          <p className="text-2xl font-serif text-white mb-2">CHELUM</p>
          <p className="text-white">
            © 2026 CHELUM. All rights reserved. Crafted for your desire.
          </p>
        </div>
      </div>
    </footer>
  );
}