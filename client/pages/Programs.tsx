import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AIChatBox } from "@/components/ui/ai-chat-box";
import {
  Check,
  Code,
  Users,
  Trophy,
  Clock,
  Target,
  BookOpen,
  Laptop,
  Video,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Programs() {
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
                className="text-primary font-medium border-b-2 border-primary"
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
                className="text-muted-foreground hover:text-primary transition-colors"
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
                  className="text-primary font-medium py-2"
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
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
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
            📚 Comprehensive Learning Programs
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Choose Your
            <span className="text-primary"> Learning Path</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Structured programs designed to take you from beginner to
            professional. Each track includes hands-on projects, mentorship, and
            career support.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development Course */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-primary/20 hover:border-primary/40">
              <div className="relative overflow-hidden h-64">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F3f057a7ca1cc41fdac2bd42cea6b1b77?format=webp&width=800"
                  alt="Web Development Course"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  🌐 Web Development
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Web Development Mastery
                </CardTitle>
                <p className="text-muted-foreground">
                  Master modern web development with HTML, CSS, JavaScript,
                  React, and Node.js. Build real projects and become job-ready.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-primary mr-2" />
                    <span className="text-muted-foreground">8-16 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-4 w-4 text-primary mr-2" />
                    <span className="text-muted-foreground">All levels</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 text-primary mr-2" />
                    <span className="text-muted-foreground">10+ Projects</span>
                  </div>
                  <div className="flex items-center">
                    <Laptop className="h-4 w-4 text-primary mr-2" />
                    <span className="text-muted-foreground">Full-stack</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <Link to="/programs/web-development/beginner-to-intermediate">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Beginner to Intermediate Track
                    </Button>
                  </Link>
                  <Link to="/programs/web-development/beginner-to-advanced">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Beginner to Advanced Track
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Adobe After Effects Course */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-primary/20 hover:border-primary/40">
              <div className="relative overflow-hidden h-64">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2Fe74a55e1e2df4d03814749be772501d5?format=webp&width=800"
                  alt="Adobe After Effects Course"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  🎞️ Adobe After Effects
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Motion Graphics & Animation
                </CardTitle>
                <p className="text-muted-foreground">
                  Learn motion graphics, visual effects, and advanced
                  animations. Master Adobe After Effects and create professional
                  video content.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-primary mr-2" />
                    <span className="text-muted-foreground">8-12 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-4 w-4 text-primary mr-2" />
                    <span className="text-muted-foreground">All levels</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 text-primary mr-2" />
                    <span className="text-muted-foreground">15+ Projects</span>
                  </div>
                  <div className="flex items-center">
                    <Video className="h-4 w-4 text-primary mr-2" />
                    <span className="text-muted-foreground">
                      Motion graphics
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <Link to="/programs/adobe-after-effects/beginner-to-intermediate">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Beginner to Intermediate Track
                    </Button>
                  </Link>
                  <Link to="/programs/adobe-after-effects/beginner-to-advanced">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Beginner to Advanced Track
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* CapCut Video Editing Course */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-primary/20 hover:border-primary/40">
              <div className="relative overflow-hidden h-64">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F1360e8a8bf27479fb1c61d4068f46c6b?format=webp&width=800"
                  alt="CapCut Video Editing Course"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  🎬 CapCut Video Editing
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Social Media Video Creation
                </CardTitle>
                <p className="text-muted-foreground">
                  Master CapCut for creating engaging social media content,
                  TikTok videos, and Instagram Reels. Learn mobile-first video
                  editing.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-primary mr-2" />
                    <span className="text-muted-foreground">4-6 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-4 w-4 text-primary mr-2" />
                    <span className="text-muted-foreground">All levels</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 text-primary mr-2" />
                    <span className="text-muted-foreground">5+ Projects</span>
                  </div>
                  <div className="flex items-center">
                    <Video className="h-4 w-4 text-primary mr-2" />
                    <span className="text-muted-foreground">
                      Mobile & Desktop
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <Link to="/programs/capcut-video-editing/beginner-to-intermediate">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Beginner to Intermediate Track
                    </Button>
                  </Link>
                  <Link to="/programs/capcut-video-editing/beginner-to-advanced">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Beginner to Advanced Track
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            What's Included in Every Program
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  1-on-1 Mentorship
                </h3>
                <p className="text-muted-foreground text-sm">
                  Weekly sessions with industry experts
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Project-Based Learning
                </h3>
                <p className="text-muted-foreground text-sm">
                  Build real-world applications
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Career Support
                </h3>
                <p className="text-muted-foreground text-sm">
                  Resume help and interview prep
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Lifetime Access
                </h3>
                <p className="text-muted-foreground text-sm">
                  Keep learning with updates
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Choose Your Path?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Select the program that matches your current skill level and career
            goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Read Our Blog
              </Button>
            </Link>
            <Link to="/get-started">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
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
              <p className="text-muted-foreground">
                Empowering the next generation of creators through expert-led
                digital skills training.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Programs</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="/programs" className="hover:text-primary">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="hover:text-primary">
                    Adobe After Effects
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="hover:text-primary">
                    CapCut Video Editing
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-primary">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Content</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="/blog" className="hover:text-primary">
                    Latest Articles
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-primary">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-primary">
                    Tech News
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-primary">
                    Career Tips
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    to="/support"
                    className="hover:text-primary transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="hover:text-primary transition-colors"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="hover:text-primary transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="hover:text-primary transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 AETHER HUB. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* AI Chat Assistant */}
      <AIChatBox />
    </div>
  );
}
