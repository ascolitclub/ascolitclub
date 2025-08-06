import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github } from "lucide-react";

interface Member {
  name: string;
  position: string;
  image: string;
  linkedin: string;
  github: string;
}

interface TeamProps {
  members: Member[];
}

export default function Team({ members }: TeamProps) {
  return (
    <section id="members" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our dedicated executive team works tirelessly to create amazing
            experiences and opportunities for all members.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {members.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-80"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-whitemb-2">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-medium mb-4">
                  {member.position}
                </p>
                <div className="flex justify-center space-x-4">
                  <Link
                    href={member.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href={member.github}
                    className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
