
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">

      {/* CTA Section */}
   <section className="bg-black px-4 sm:px-6 md:px-16 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden px-6 sm:px-10 py-14 sm:py-20 md:py-24 text-center"
            style={{ background: "radial-gradient(ellipse at top left, #c0392b 0%, #1a1a1a 50%, #000 100%)" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Not Limited to Production.
            </h2>
            <p className="text-white/60 text-base sm:text-lg mb-10">
         We're your creative partner in bringing stories to life.
Whether you're creating a film, launching a brand, designing a digital experience, or producing your next campaign, we're here to turn your vision into something unforgettable.

            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-red-500 hover:bg-white hover:text-black text-white text-xs sm:text-sm tracking-widest uppercase px-8 sm:px-14 py-4 sm:py-5 rounded-full cursor-pointer transition-all duration-300 hover:scale-75 font-semibold"
            >
           Let's Create Together →
            </Link>
          </div>
        </div>
      </section>

     <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

  {/* Logo + desc */}
  <div className="md:col-span-1">
    <Image src="/logo.png" alt="Pahadi Bhula" width={1584} height={518} className="h-20 w-auto object-contain mb-4" />
    <p className="text-white/30 text-sm leading-relaxed">
      A creative production house in Dehradun crafting stories that move people and brands forward.
    </p>
  </div>

  {/* Quick Links */}
  <div>
    <p className="text-white/50 text-xs tracking-widest uppercase mb-6">Quick Links</p>
    <div className="flex flex-col gap-3">
      {["Home", "Projects", "About", "Services", "Contact"].map((link) => (
        <Link key={link} href={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
          className="text-white/40 text-sm hover:text-white transition-colors">
          {link}
        </Link>
      ))}
    </div>
  </div>

  {/* Contact */}
  <div>
    <p className="text-white/50 text-xs tracking-widest uppercase mb-6">Contact</p>
    <div className="flex flex-col gap-3 text-sm text-white/40">
      <p>Rajpur Rd, Doon Vihar, Jakhan, Dehradun, Uttarakhand 248001</p>
      <a href="mailto:media@pahadibhulaproduction.in" className="hover:text-white transition-colors">
        media@pahadibhulaproduction.in
      </a>
      <a href="tel:+919458144136" className="hover:text-white transition-colors">
        8439220575
      </a>
      <p>Open Daily · 9am to 8pm</p>
    </div>
  </div>

  {/* Social */}
  <div>
    <p className="text-white/50 text-xs tracking-widest uppercase mb-6">Social Media</p>
    <div className="flex flex-col gap-3">
      <a href="https://www.instagram.com/uk_pahadibhula?igsh=ZTYyZ3lua2JmYngw" target="_blank" rel="noopener noreferrer" className="text-white/40 text-sm hover:text-white transition-colors">Instagram</a>
      <a href="https://www.facebook.com/share/1BrYfPSVya/" target="_blank" rel="noopener noreferrer" className="text-white/40 text-sm hover:text-white transition-colors">Facebook</a>
      <a href="https://www.linkedin.com/company/pahadi-bhula-production/" target="_blank" rel="noopener noreferrer" className="text-white/40 text-sm hover:text-white transition-colors">LinkedIn</a>
    </div>
  </div>
</div>

{/* Bottom bar */}
<div className="border-t border-white/5 py-6 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between text-white/20 text-xs">
  <p>© {new Date().getFullYear()} Pahadi Bhula Production. All rights reserved.</p>
  <Link href="/privacy" className="hover:text-white transition-colors mt-2 md:mt-0">
    Privacy Policy
  </Link>
</div>
    </footer>
  );
}