import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Shield,
  FileText,
  ArrowLeft,
  Users,
  Target,
  Award,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Company() {
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
            🏢 Company Information
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Building the Future of
            <span className="text-primary"> Digital Education</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Learn about our company policies, join our team, and understand how
            we're shaping the future of tech education.
          </p>
        </div>
      </section>

      {/* Company Sections */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:border-primary/50 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Careers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Join our mission to empower the next generation of digital
                  creators. We're always looking for passionate educators and
                  tech professionals.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Open Positions
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Senior Full-Stack Developer</li>
                      <li>• Video Production Specialist</li>
                      <li>• Course Content Creator</li>
                      <li>• Student Success Manager</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      What We Offer
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Competitive salary packages</li>
                      <li>• Remote work flexibility</li>
                      <li>• Professional development opportunities</li>
                      <li>• Health and wellness benefits</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Our Culture
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We foster innovation, collaboration, and continuous
                      learning. Our team is dedicated to creating inclusive
                      educational experiences that empower students worldwide.
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full">Apply Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Your privacy is our priority. We are committed to protecting
                  your personal information and being transparent about how we
                  use it.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Information We Collect
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Account registration details</li>
                      <li>• Course progress and completion data</li>
                      <li>• Communication preferences</li>
                      <li>• Technical usage analytics</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      How We Use Your Data
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Personalize your learning experience</li>
                      <li>• Track course progress and achievements</li>
                      <li>• Send course updates and notifications</li>
                      <li>• Improve our platform and services</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Your Rights
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Access your personal data</li>
                      <li>• Request data correction or deletion</li>
                      <li>• Opt-out of marketing communications</li>
                      <li>• Download your data</li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <p className="text-xs text-muted-foreground">
                      Last updated: January 2024. We may update this policy
                      periodically and will notify users of significant changes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Terms of Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  By using AETHER HUB, you agree to these terms. Please read
                  them carefully to understand your rights and responsibilities.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Course Access & Usage
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Lifetime access to purchased courses</li>
                      <li>• Personal use only - no redistribution</li>
                      <li>• Downloadable resources for offline study</li>
                      <li>• Community forum participation rules</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Payment & Refunds
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Secure payment processing</li>
                      <li>• 30-day money-back guarantee</li>
                      <li>• No hidden fees or recurring charges</li>
                      <li>• Payment plan options available</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Intellectual Property
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Course content is protected by copyright</li>
                      <li>• Student projects retain ownership rights</li>
                      <li>• Respect for third-party content licenses</li>
                      <li>• DMCA compliance procedures</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Platform Guidelines
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Respectful community interaction</li>
                      <li>• No spam or promotional content</li>
                      <li>• Account security best practices</li>
                      <li>• Reporting and moderation policies</li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <p className="text-xs text-muted-foreground">
                      Effective: January 2024. We reserve the right to modify
                      these terms with prior notice to users.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you need clarification on any of our policies or have specific
            questions about working with us, don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/support">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Contact Support
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-muted"
            >
              Email Legal Team
            </Button>
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
