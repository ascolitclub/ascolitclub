import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Zap, Star, Trophy } from "lucide-react";

interface Achievement {
  year: string;
  title: string;
  description: string;
}

interface AboutProps {
  achievements: Achievement[];
}

export default function About({ achievements }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Our Club</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            ASCOL IT Club is a vibrant community of technology enthusiasts
            dedicated to fostering innovation, learning, and collaboration among
            students passionate about information technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To create an inclusive environment where students can explore,
                  learn, and excel in various aspects of information technology
                  while building lasting professional relationships.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To be the leading student technology organization that bridges
                  the gap between academic learning and industry requirements,
                  producing skilled IT professionals.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Our Impact
                </h3>
                <p className="text-gray-600">
                  Over 200 active members, 50+ successful events, and countless
                  career opportunities created through our network and
                  initiatives.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/aboutus.jpg"
              alt="Students collaborating in tech lab"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Journey
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-indigo-500 hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5 text-indigo-600" />
                    <Badge variant="secondary">{achievement.year}</Badge>
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
