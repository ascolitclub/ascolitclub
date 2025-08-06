import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Have questions or want to collaborate? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600">ascolitclub2080@gmail.com</p>
                {/* <p className="text-gray-600">president@ascolitclub.edu.np</p> */}
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600">+977 9814092092</p>
                <p className="text-gray-600">+977 9745388369</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Visit Us
                </h3>
                <p className="text-gray-600">ASCOL Campus</p>
                <p className="text-gray-600">Lainchaur, Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/itclubascol"
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/itclubascol_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/ascol-i-t-club"
                  className="w-10 h-10 bg-blue-700 rounded-lg flex items-center blank justify-center text-white hover:bg-blue-800 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  target="_blank"
                  href="https://github.com/ascolitclub"
                  className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" />
                  </div>
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
