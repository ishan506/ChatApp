 import {
  MessageCircle,
  ShieldCheck,
  Zap,
  Globe,
  Heart,
  Send,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#080b1d] text-gray-300 border-t border-violet-900/30">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10">

          {/* Logo */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <div className="p-3 rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-500">
                <MessageCircle className="w-7 h-7 " />
              </div>

              <h1 className="text-4xl font-bold">
                <span className="text-white">Chat</span>

                <span className="bg-linear-to-r from-violet-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
                  App
                </span>
              </h1>

            </div>

            <p className="mt-6 leading-8 text-gray-400">
              ChatApp makes conversations simple, fast and secure.
              Connect with anyone, anytime, anywhere.
            </p>

            <div className="space-y-4 mt-8">

              <div>
 
  
</div>
  <div className="flex items-center gap-3">
      <div className="bg-violet-900/30 p-2 rounded-lg text-violet-400">  <ShieldCheck /></div>
      Chat Lock</div>
              <Feature icon={<Zap />} text="Real-time Messaging" />

              <Feature icon={<Globe />} text="Connect Worldwide" />

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="text-xl font-semibold text-violet-400 mb-5">
              Product
            </h3>

            <ul className="space-y-3">
              <FooterLink>Features</FooterLink>
              <FooterLink>Download App</FooterLink>
              <FooterLink>Pricing</FooterLink>
              <FooterLink>Roadmap</FooterLink>
              <FooterLink>Updates</FooterLink>
            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-semibold text-violet-400 mb-5">
              Company
            </h3>

            <ul className="space-y-3">
              <FooterLink>About</FooterLink>
              <FooterLink>Blog</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Contact</FooterLink>
            </ul>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="text-xl font-semibold text-violet-400 mb-5">
              Stay Updated
            </h3>

            <p className="text-gray-400 mb-5">
              Subscribe for latest news.
            </p>

            <div className="flex overflow-hidden rounded-xl border border-violet-800">

              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 bg-[#12172b] px-4 py-3 outline-none"
              />

              <button className="px-5 bg-linear-to-r from-violet-600 to-pink-500   ">
                <Send size={20} className="text-white" />
              </button>

            </div>

            <div className="flex gap-4 mt-8">

              <Social icon={<FaXTwitter />} />

              <Social icon={<FaInstagram />} />

              <Social icon={<FaLinkedinIn />} />

              <Social icon={<FaGithub />} />

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-violet-900/30 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="flex items-center gap-2 text-gray-400">
            Made with
            <Heart className="fill-pink-500 text-pink-500 w-5 h-5" />
            for better conversations
          </p>

          <p className="text-gray-500">
            © 2026 ChatApp. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-violet-900/30 p-2 rounded-lg text-violet-400">
        {icon}
      </div>
      <span>{text}</span>
    </div>
  );
}

function FooterLink({ children }) {
  return (
    <li className="cursor-pointer hover:text-violet-400 duration-300">
      {children}
    </li>
  );
}

function Social({ icon }) {
  return (
    <button className="w-11 h-11 rounded-full bg-[#151a30] hover:bg-linear-to-r hover:from-violet-600 hover:to-pink-500 transition-all duration-300 hover:scale-110 flex items-center justify-center text-lg">
      {icon}
    </button>
  );
}
