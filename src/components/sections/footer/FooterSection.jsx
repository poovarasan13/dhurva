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
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { NavLink } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
      >
        <source
          src="https://res.cloudinary.com/dzpkbej9y/video/upload/v1739965580/video_byosi3.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative mx-auto max-w-container px-4 py-8">
        <Footer className="bg-black bg-opacity-90">
          <FooterContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 items-center">
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
                      the 9th edition of DHRUVA, a national-level fest on 13th ,
                      14th and 15th March 2025.
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
                <a
                  href="/onstage"
                  className="text-sm text-gray-400 hover:text-sky-500 hover:underline underline-offset-4 transition-all duration-300 block"
                >
                  onstage
                </a>
                <a
                  href="/offstage"
                  className="text-sm text-gray-400 hover:text-sky-500 hover:underline underline-offset-4 transition-all duration-300 block"
                >
                  offstage
                </a>
              </div>
            </FooterColumn>

            <FooterColumn>
              <h3 className="text-md font-semibold mb-4 text-white">
                Social Media
              </h3>
              <div className="space-y-2">
                <a
                  href="https://www.instagram.com/wekceians?igsh=dWc3MWE4bzVtcWF2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-pink-400 flex items-center gap-2"
                >
                  <InstagramLogoIcon className="w-4 h-4" /> Wekceians
                </a>
                <a
                  href="https://www.instagram.com/kcedhruva?igsh=cmV3ZjloMW9oeDRs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-pink-400 flex items-center gap-2"
                >
                  <InstagramLogoIcon className="w-4 h-4" />
                  kcedhruva
                </a>
                <a
                  href="https://www.facebook.com/share/1ERFLsRYj7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-blue-700 flex items-center gap-2"
                >
                  <FacebookIcon className="w-4 h-4" /> Facebook
                </a>
                <a
                  href="https://www.linkedin.com/school/wekceians/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-sky-500 flex items-center gap-2"
                >
                  <LinkedInLogoIcon className="w-4 h-4" /> LinkedIn
                </a>
                <a
                  href="https://youtube.com/@wekceians?si=2UClrWxuRShi8Xoy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-red-600 flex items-center gap-2"
                >
                  <YoutubeIcon className="w-4 h-4" /> YouTube
                </a>
              </div>
            </FooterColumn>

            <FooterColumn>
              <h3 className="text-md font-semibold mb-4 text-white">Contact</h3>
              <div className="space-y-2">
                <a
                  href="mailto:dhruva@kce.ac.in"
                  className="text-sm text-gray-400 hover:text-sky-500 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> dhruva@kce.ac.in
                </a>
                <a
                  href="tel:6385291261"
                  className="text-sm text-gray-400 hover:text-sky-500 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +91 6385291261
                </a>
                <a
                  href="tel:6379283008"
                  className="text-sm text-gray-400 hover:text-sky-500 flex items-center gap-2"
                >
                  <p className="px-6">+91 6379283008</p>
                </a>
                <a
                  href="tel:9965240405"
                  className="text-sm text-gray-400 hover:text-sky-500 flex items-center gap-2"
                >
                  <p className="px-6">+91 9965240405</p>
                </a>
                <a
                  href="tel:8438439374"
                  className="text-sm text-gray-400 hover:text-sky-500 flex items-center gap-2"
                >
                  <p className="px-6">+91 8438439374</p>
                </a>
                <a
                  href="https://www.google.com/maps/place/Karpagam+College+of+Engineering/@10.880101,77.022368,15z/data=!4m6!3m5!1s0x3ba84ffc9b3ea755:0xda7508a90583d22f!8m2!3d10.8801009!4d77.0223684!16s%2Fm%2F03m6r9n?hl=en&entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-sky-500 flex items-center gap-2"
                >
                  <Map className="w-4 h-4" /> Coimbatore - 641 032
                </a>
              </div>
            </FooterColumn>

            {/* Map Section in Single Row */}
            <div className="w-full h-64 border rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0986519474127!2d77.01979347480649!3d10.880100889275035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba84ffc9b3ea755%3A0xda7508a90583d22f!2sKarpagam%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1739673858861!5m2!1sen!2sin"
                allowFullScreen
                className="w-full h-full"
                title="Google Maps Embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </FooterContent>

          <FooterBottom className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-400">
            © 2025 Karpagam College Of Engineering | Core Team - My Campus Clubs
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
