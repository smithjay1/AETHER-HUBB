import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Users,
  Trophy,
  Star,
  ArrowRight,
  Play,
  Palette,
  Video,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b border-white/20 backdrop-blur-sm bg-white/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              CodeMaster
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/signin">
              <Button
                variant="outline"
                className="border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
            🚀 Master In-Demand Skills
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Learn to
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Code, Design & Create
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master coding, UI/UX design, and video editing with expert guidance.
            Join thousands of students who've transformed their careers with
            CodeMaster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6"
              >
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-6"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5,000+</div>
              <div className="text-gray-600">Students Taught</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Master Multiple Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive skill tracks designed to make you
              job-ready
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Development */}
            <Card className="border-2 border-blue-200 hover:border-blue-300 transition-all hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Web Development
                </CardTitle>
                <p className="text-gray-600">From HTML to full-stack apps</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-blue-500 mr-3" />
                    <span>HTML, CSS, JavaScript</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-blue-500 mr-3" />
                    <span>React, Node.js, Databases</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-blue-500 mr-3" />
                    <span>System design & architecture</span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-lg font-bold text-blue-600">
                    $297 - $997
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* UI/UX Design */}
            <Card className="border-2 border-pink-200 hover:border-pink-300 transition-all hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  UI/UX Design
                </CardTitle>
                <p className="text-gray-600">
                  Create beautiful user experiences
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-pink-500 mr-3" />
                    <span>Design principles & theory</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-pink-500 mr-3" />
                    <span>Figma, Adobe XD mastery</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-pink-500 mr-3" />
                    <span>User research & testing</span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-lg font-bold text-pink-600">
                    $397 - $697
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Video Editing */}
            <Card className="border-2 border-red-200 hover:border-red-300 transition-all hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Video Editing
                </CardTitle>
                <p className="text-gray-600">Professional video content</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-red-500 mr-3" />
                    <span>CapCut mobile editing</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-red-500 mr-3" />
                    <span>Adobe After Effects</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-red-500 mr-3" />
                    <span>Motion graphics & VFX</span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-lg font-bold text-red-600">
                    $197 - $497
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Join Our Success Stories
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Students from around the world have transformed their careers
                with our expert-led programs.
              </p>
              <div className="flex items-center mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="ml-3 text-blue-100">
                  4.9/5 from 2,000+ reviews
                </span>
              </div>
              <Link to="/register">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-50"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <blockquote className="text-lg mb-4">
                  "CodeMaster's personalized approach helped me land my dream
                  job as a UI/UX designer at a Fortune 500 company. The
                  mentorship was incredible!"
                </blockquote>
                <cite className="text-blue-200">
                  - Sarah Chen, UI/UX Designer at Microsoft
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals who started their journey
            with CodeMaster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/signin">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                Already have an account?
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  CodeMaster
                </span>
              </div>
              <p className="text-gray-600">
                Empowering the next generation of developers and creators
                through expert-led education.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Video Editing</li>
                <li>Career Support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Help Center</li>
                <li>Community</li>
                <li>Contact Us</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>About Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 CodeMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
