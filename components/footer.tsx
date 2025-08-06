import Link from "next/link";
import { Code, Facebook, Instagram, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import { navItems } from "@/lib/data";
interface FooterProps {
  scrollToSection: (href: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {


  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="logo.png" width={90} height={50} alt="logo"></Image>
              <span className="font-bold text-xl">ASCOL IT Club</span>
            </div>
            <p className="text-gray-400">
              Where students connect, collaborate, and create the future of
              technology.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/itclubascol"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.instagram.com/itclubascol_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/ascol-i-t-club"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/ascolitclub"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact</h4>
            <p className="text-gray-400">
              Lainchaur, Kathmandu, Nepal
              <br />
              ascolitclub2080@gmail.com
              <br />
              +977 9814092092
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Powered by</span>
              <Image
                src="/kailash.png"
                width={200}
                height={80}
                alt="Kailash Cloud"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          </div>
          
        </div>
        <div className="text-center text-slate-400">
          <div className="flex flex-col items-center space-y-4">
            
            <p>&copy; 2025 ASCOL IT Club. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
