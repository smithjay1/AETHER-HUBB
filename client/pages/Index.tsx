import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { AIChatBox } from "@/components/ui/ai-chat-box";
import {
  Check,
  Code,
  Users,
  Trophy,
  Star,
  ArrowRight,
  Play,
  Video,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index() {
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
            🚀 Master Digital Skills
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Learn to
            <span className="text-primary"> Code, Design & Create</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your career with expert-led courses in coding, Adobe After
            Effects, and video editing. From beginner to professional level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/get-started">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-muted text-lg px-8 py-6"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                <AnimatedCounter target={1000} suffix="+" />
              </div>
              <div className="text-muted-foreground">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                <AnimatedCounter target={95} suffix="%" />
              </div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional courses designed to take you from beginner to expert
              level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Coding */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground">
                  Web Development
                </CardTitle>
                <p className="text-muted-foreground">
                  From beginner to full-stack developer
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    HTML, CSS, JavaScript fundamentals
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    React, Node.js & Databases
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    Full-stack project development
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    Career guidance & mentorship
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      ₦60,000
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Beginner to Intermediate
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      ₦80,000
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Beginner to Advanced
                    </p>
                  </div>
                </div>
                <Link to="/get-started?track=coding">
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Start Learning
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Adobe After Effects */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg bg-card transform scale-105 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                Most Popular
              </Badge>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground">
                  Adobe After Effects
                </CardTitle>
                <p className="text-muted-foreground">
                  Motion graphics & animations
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    Motion graphics fundamentals
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    Advanced animations & VFX
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    Professional workflows
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    Portfolio development
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      ₦60,000
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Beginner to Intermediate
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      ₦80,000
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Beginner to Advanced
                    </p>
                  </div>
                </div>
                <Link to="/get-started?track=adobe">
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Start Creating
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* CapCut */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground">
                  CapCut Video Editing
                </CardTitle>
                <p className="text-muted-foreground">
                  Mobile & desktop video creation
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    Mobile video editing mastery
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    Social media content creation
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    Advanced effects & transitions
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    Professional content strategy
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      ₦30,000
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Beginner to Intermediate
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      ₦60,000
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Beginner to Advanced
                    </p>
                  </div>
                </div>
                <Link to="/get-started?track=capcut">
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Start Editing
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Why Choose AETHER HUB?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We're not just another training center. We're your personal
                mentors, committed to transforming your creative and technical
                skills.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      Personalized Learning Path
                    </h3>
                    <p className="text-muted-foreground">
                      Tailored curriculum based on your goals and current skill
                      level
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      Industry Experts
                    </h3>
                    <p className="text-muted-foreground">
                      Learn from professionals working at top creative and tech
                      companies
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      Flexible Payment
                    </h3>
                    <p className="text-muted-foreground">
                      Affordable pricing in Naira with flexible payment options
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-primary/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 text-primary fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-lg mb-4 text-foreground">
                  "AETHER HUB transformed my creative skills in just 4 months.
                  The hands-on approach made all the difference."
                </blockquote>
                <cite className="text-muted-foreground">
                  - Adebayo Olumide, Motion Graphics Designer
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background border-t border-border">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Ready to Start Your Creative Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of successful creators who started their journey with
            AETHER HUB.
          </p>
          <Link to="/get-started">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-6"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
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
