import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  HelpCircle,
  Users,
  Mail,
  Phone,
  Clock,
  ArrowLeft,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Support() {
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
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            🤝 Support Center
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            We're Here to
            <span className="text-primary"> Help You Succeed</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Get the support you need to excel in your learning journey. Our team
            is available 24/7 to assist you.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-border hover:border-primary/50 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <HelpCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Help Center</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Browse our comprehensive knowledge base with step-by-step
                  guides, tutorials, and troubleshooting tips.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Course Navigation Guides</li>
                  <li>• Technical Troubleshooting</li>
                  <li>• Account Management</li>
                  <li>• Payment & Billing Help</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Community</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Connect with fellow learners, share projects, get feedback,
                  and participate in coding challenges.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Student Forums</li>
                  <li>• Project Showcase</li>
                  <li>• Study Groups</li>
                  <li>• Peer Code Reviews</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Get direct support from our team. We typically respond within
                  2-4 hours during business days.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>aether.hub1@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>+234 702 534 0480</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">FAQ</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Find quick answers to commonly asked questions about courses,
                  enrollment, and platform features.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Enrollment Process</li>
                  <li>• Course Access</li>
                  <li>• Certification Info</li>
                  <li>• Refund Policy</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Clock className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-foreground">
              Support Hours
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Email Support
                    </h3>
                    <p className="text-muted-foreground">
                      24/7 - We respond within 2-4 hours
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Live Chat
                    </h3>
                    <p className="text-muted-foreground">
                      Mon-Fri: 9 AM - 6 PM WAT
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Phone Support
                    </h3>
                    <p className="text-muted-foreground">
                      Mon-Fri: 10 AM - 5 PM WAT
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Community
                    </h3>
                    <p className="text-muted-foreground">
                      24/7 - Peer support available
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
    </div>
  );
}
