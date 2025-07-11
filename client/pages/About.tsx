import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Users,
  Target,
  Heart,
  Award,
  Globe,
  Lightbulb,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function About() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F2757031f67ec48728d59754b53021a65?format=webp&width=800"
                alt="AETHER HUB Logo"
                className="h-8 w-8 rounded-lg"
              />
              <span className="text-xl font-bold text-primary">AETHER HUB</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/programs"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Programs
              </Link>
              <Link
                to="/blog"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/about"
                className="text-primary font-medium border-b-2 border-primary"
              >
                About
              </Link>
              <Link to="/get-started">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started
                </Button>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/programs"
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Programs
                </Link>
                <Link
                  to="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/about"
                  className="text-primary font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/get-started"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-2">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            🌟 Our Story
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Transforming Lives
            <span className="text-primary"> Through Digital Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            We believe that anyone can master digital skills with the right
            guidance, support, and community. Our mission is to make quality
            tech education accessible to everyone in Nigeria.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To democratize coding education by providing personalized,
                high-quality programming instruction that adapts to each
                student's learning style and pace. We're not just teaching
                code—we're building the next generation of problem solvers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every student deserves a mentor who believes in their potential.
                That's why we've built a community of experienced developers who
                are passionate about sharing their knowledge and helping others
                succeed.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">5,000+</h3>
                  <p className="text-gray-600 text-sm">Students Taught</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">98%</h3>
                  <p className="text-gray-600 text-sm">Success Rate</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">50+</h3>
                  <p className="text-gray-600 text-sm">Countries Reached</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">4.9/5</h3>
                  <p className="text-gray-600 text-sm">Student Rating</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-blue-100 hover:border-blue-200 transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Student-First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every decision we make is centered around what's best for our
                  students' learning journey and career success.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-green-100 hover:border-green-200 transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We continuously evolve our curriculum and teaching methods to
                  stay current with industry trends and best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-purple-100 hover:border-purple-200 transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Learning is better together. We foster a supportive community
                  where students help each other grow and succeed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced developers and educators from top tech companies who
              are passionate about teaching and mentoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Team Member 1 */}
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                    alt="MC Vester Okoh"
                    className="w-full h-full object-cover bg-gray-200"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  MC Vester Okoh
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  Founder & Lead Instructor
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Passionate Adobe UI/UX designer with expertise in creating
                  accessible learning experiences. Dedicated to making tech and
                  creative skills available to every Nigerian.
                </p>
                <Badge className="bg-blue-100 text-blue-700 text-xs">
                  UI/UX Design
                </Badge>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                    alt="Diamond"
                    className="w-full h-full object-cover bg-gray-200"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Diamond
                </h3>
                <p className="text-green-600 font-medium mb-3">
                  Video Edit/Content Visualisation
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Sharp and creative video editor specializing in content
                  visualization and engaging educational content creation.
                </p>
                <Badge className="bg-green-100 text-green-700 text-xs">
                  Video Editing
                </Badge>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                    alt="Simeon"
                    className="w-full h-full object-cover bg-gray-200"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Simeon
                </h3>
                <p className="text-purple-600 font-medium mb-3">
                  Frontend & Backend Expert
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Skilled web developer with expertise in both frontend and
                  backend technologies. Passionate about creating robust and
                  scalable web applications.
                </p>
                <Badge className="bg-purple-100 text-purple-700 text-xs">
                  Full-Stack Development
                </Badge>
              </CardContent>
            </Card>

            {/* Team Member 4 */}
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">SK</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sarah Kim
                </h3>
                <p className="text-orange-600 font-medium mb-3">
                  Career Advisor
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Former recruiter at Apple. Helps students navigate the job
                  market and land their dream positions.
                </p>
                <Badge className="bg-orange-100 text-orange-700 text-xs">
                  Career Development
                </Badge>
              </CardContent>
            </Card>

            {/* Team Member 5 */}
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">RP</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Raj Patel
                </h3>
                <p className="text-teal-600 font-medium mb-3">
                  Frontend Specialist
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  React expert from Airbnb. Teaches modern frontend development
                  and design systems.
                </p>
                <Badge className="bg-teal-100 text-teal-700 text-xs">
                  Frontend Development
                </Badge>
              </CardContent>
            </Card>

            {/* Team Member 6 */}
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">LG</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Lisa Garcia
                </h3>
                <p className="text-indigo-600 font-medium mb-3">
                  Backend Expert
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Database architect from Spotify. Specializes in scalable
                  backend systems and API design.
                </p>
                <Badge className="bg-indigo-100 text-indigo-700 text-xs">
                  Backend Development
                </Badge>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Plus 20+ mentors from companies like Tesla, Uber, Shopify, and
              more.
            </p>
            <Link to="/get-started">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Meet Your Mentor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">How It All Started</h2>
            <div className="space-y-6 text-lg text-blue-100 leading-relaxed">
              <p>
                Aether Hub kicked off in 2025 when MC Vester Okoh, a passionate
                Adobe UI/UX designer, began mentoring a few young creatives in
                his community. He quickly realized that many learning platforms
                weren't built for Nigerians—they were too expensive, rushed, and
                lacked the kind of support people actually needed to grow.
              </p>
              <p>
                "I saw too many people giving up—not because they lacked talent,
                but because no one was guiding them properly," Vester recalls.
                "That's when the idea for Aether Hub really started to take
                shape."
              </p>
              <p>
                With the help of Simeon, a skilled web developer, and Diamond, a
                sharp and creative video editor, they teamed up to create
                something different—a platform made by creators, for creators.
              </p>
              <p>
                What began as a small WhatsApp group of 10 learners has now
                grown into Aether Hub, a fast-rising digital learning community
                focused on web development, video editing, design, and
                real-world creative skills.
              </p>
              <p>
                But one thing has never changed: Our goal is to make tech and
                creative skills accessible, practical, and personalized for
                everyday Nigerians—and anyone ready to level up.
              </p>
            </div>
            <div className="mt-12 text-center">
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                "The best investment you can make is in yourself" - Warren
                Buffett
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Become part of a supportive community of learners and experienced
            mentors who are invested in your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-started">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/programs">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                Explore Programs
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
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F2757031f67ec48728d59754b53021a65?format=webp&width=800"
                  alt="AETHER HUB Logo"
                  className="h-8 w-8 rounded-lg"
                />
                <span className="text-xl font-bold text-primary">
                  AETHER HUB
                </span>
              </Link>
              <p className="text-gray-600">
                Empowering the next generation of developers through
                personalized coding education.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Programs</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link to="/programs" className="hover:text-blue-600">
                    Beginner Track
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="hover:text-blue-600">
                    Intermediate Track
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="hover:text-blue-600">
                    Advanced Track
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-blue-600">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Content</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link to="/blog" className="hover:text-blue-600">
                    Latest Articles
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-blue-600">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-blue-600">
                    Tech News
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-blue-600">
                    Career Tips
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link
                    to="/support"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="hover:text-blue-600 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2025 AETHER HUB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
