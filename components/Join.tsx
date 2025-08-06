import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Join() {
  return (
    <section
      id="join"
      className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Become part of a thriving community of tech enthusiasts and take
              your skills to the next level.
            </p>
          </div>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/30">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      placeholder="Full Name"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      placeholder="Student ID"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Year of Study"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />
                  </div>
                </div>
                <div>
                  <Textarea
                    placeholder="Why do you want to join ASCOL IT Club? Tell us about your interests and goals..."
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 min-h-[120px]"
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full bg-white text-indigo-600 hover:bg-gray-100 font-semibold"
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
