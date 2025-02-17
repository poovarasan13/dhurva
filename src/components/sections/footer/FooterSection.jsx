import { ModeToggle } from "../../ui/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "../../ui/footer";
import dhurvaLogo from "../../../assets/images/dhurva-logo.png";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Mail,
  Phone,
  Map,
  // Instagram,
  FacebookIcon,
  Facebook,
  Instagram,
  InstagramIcon,
  YoutubeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FaceIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { NavLink } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-container px-4 py-8">
        <Footer className="bg-black">
          <FooterContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <FooterColumn className="flex flex-col items-center sm:items-start">
              <div className="mb-4">
                <img
                  src={dhurvaLogo}
                  height="100"
                  width="100"
                  alt="Dhurva Logo"
                  className="mx-auto sm:mx-0"
                />
              </div>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="text-white p-0">
                    @kcedhurva
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 border-black border-2 border-b-gray-700">
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-center">
                      KCE Dhurva
                    </h4>
                    <p className="text-sm">
                      Karpagam College of Engineering is delighted to present
                      the 8th edition of DHRUVA, a national-level
                      techno-management-cultural fest on 15th and 16th March
                      2024. Mark your calendars and join us for an unforgettable
                      celebration of talent, creativity, and innovation at
                      Dhruva 2024.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </FooterColumn>

            <FooterColumn>
              <h3 className="text-md font-semibold mb-4 text-white">
                Quick Visit
              </h3>
              <div className="space-y-2">
                <a
                  href="/culturalFest"
                  className="text-sm text-gray-400 hover:text-sky-500 hover:underline underline-offset-4 transition-all duration-300 block"
                >
                  Cultural Fest
                </a>
                <a
                  href="/technicalFest"
                  className="text-sm text-gray-400 hover:text-sky-500 hover:underline underline-offset-4 transition-all duration-300 block"
                >
                  Technical Fest
                </a>
                <a
                  href="/pass"
                  className="text-sm text-gray-400 hover:text-sky-500 hover:underline underline-offset-4 transition-all duration-300 block"
                >
                  Pass
                </a>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md font-semibold mb-4 text-white">
                Social Media
              </h3>
              <div className="space-y-2">
                <NavLink
                  href="https://www.instagram.com/wekceians/"
                  className="text-sm text-gray-400 hover:text-pink-400 hover:underline underline-offset-4 transition-all duration-300 flex items-center gap-2"
                >
                  <InstagramLogoIcon className="w-4 h-4" />
                  Instagram
                </NavLink>
                <a
                  href="https://www.facebook.com/wekceians/"
                  className="text-sm text-gray-400 hover:text-blue-700 hover:underline underline-offset-4 transition-all duration-300 flex items-center gap-2"
                >
                  <FacebookIcon className="w-4 h-4" />
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/school/wekceians/posts/?feedView=all"
                  className="text-sm text-gray-400 hover:text-sky-500 hover:underline underline-offset-4 transition-all duration-300 flex items-center gap-2"
                >
                  <LinkedInLogoIcon className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href=""
                  className="text-sm text-gray-400 hover:text-red-600 hover:underline underline-offset-4 transition-all duration-300 flex items-center gap-2"
                >
                  <YoutubeIcon className="w-4 h-4" />
                  YouTube
                </a>
              </div>
            </FooterColumn>

            {/* Contact Information */}
            <FooterColumn>
              <h3 className="text-md font-semibold mb-4 text-white">Contact</h3>
              <div className="space-y-2">
                <a
                  href="mailto:dhruva@kce.ac.in"
                  className="text-sm text-gray-400 hover:text-sky-500 hover:underline underline-offset-4 transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  dhruva@kce.ac.in
                </a>
                <a
                  href="tel:6385908383"
                  className="text-sm text-gray-400 hover:text-sky-500 hover:underline underline-offset-4 transition-all duration-300 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  6385908383 / 6385908383
                </a>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-sky-500 hover:underline underline-offset-4 transition-all duration-300 flex items-center gap-2"
                >
                  <Map className="w-10 h-10" />
                  Myleripalayam Village, OththakkalMandapam Post, Coimbatore -
                  641 032
                </a>
              </div>
            </FooterColumn>

            <FooterColumn className="col-span-1 sm:col-span-2 md:col-span-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0986519474127!2d77.01979347480649!3d10.880100889275035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba84ffc9b3ea755%3A0xda7508a90583d22f!2sKarpagam%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1739673858861!5m2!1sen!2sin"
                allowFullScreen
                className="max-w-max h-48 sm:h-64 md:h-48 border rounded-lg shadow-lg"
                title="Google Maps Embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </FooterColumn>
          </FooterContent>

          <FooterBottom className="mt-8 border-t border-gray-800 pt-6">
            <div className="text-gray-400 text-sm text-center sm:text-left">
              © 2025 Karpagam College Of Engineering | KCE - IT
            </div>
            <div className="flex items-center justify-center sm:justify-end gap-4 mt-4 sm:mt-0">
              <a
                href="/"
                className="text-sm text-gray-400 hover:text-sky-500 hover:underline underline-offset-4 transition-all duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/"
                className="text-sm text-gray-400 hover:text-sky-500 hover:underline underline-offset-4 transition-all duration-300"
              >
                Terms of Service
              </a>
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
