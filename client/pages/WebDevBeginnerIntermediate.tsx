import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Clock,
  Users,
  BookOpen,
  ArrowLeft,
  Check,
  Target,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function WebDevBeginnerIntermediate() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F2757031f67ec48728d59754b53021a65?format=webp&width=800"
              alt="AETHER HUB Logo"
              className="h-8 w-8 rounded-lg"
            />
            <span className="text-xl font-bold text-primary">AETHER HUB</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
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
        </div>
      </header>

      {/* Back Navigation */}
      <section className="py-6 px-4 border-b border-border">
        <div className="container mx-auto">
          <Link
            to="/programs"
            className="flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Programs
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            🌐 Web Development
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Beginner to Intermediate
            <span className="text-primary block"> Track</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Master the fundamentals of web development with HTML, CSS,
            JavaScript, and Git. Build real projects and create your first
            portfolio.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-primary mr-2" />
              8-10 weeks
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 text-primary mr-2" />
              Beginner friendly
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 text-primary mr-2" />6 modules
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Course Curriculum
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Module Cards */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  Introduction to Web Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    How the web works
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    What is HTML, CSS, JS
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Setting up a code editor (VS Code)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  HTML Fundamentals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Semantic tags
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Page structure
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Forms, tables, and media
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  CSS Styling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Selectors, colors, units
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Box model, layout (flex/grid)
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Responsive design & media queries
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  JavaScript Basics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Variables, data types
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Functions and events
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    DOM manipulation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">5</span>
                  </div>
                  Version Control with Git
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Git & GitHub basics
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Cloning, pushing, pull requests
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <Trophy className="h-4 w-4" />
                  </div>
                  Final Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Personal Portfolio Site
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Hands-on project using everything learned
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            What You'll Achieve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Build Real Websites
                </h3>
                <p className="text-muted-foreground text-sm">
                  Create responsive, functional websites from scratch
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Professional Portfolio
                </h3>
                <p className="text-muted-foreground text-sm">
                  Showcase your skills with a complete portfolio website
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Solid Foundation
                </h3>
                <p className="text-muted-foreground text-sm">
                  Master the fundamentals to advance to any framework
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
            Ready to Start Your Web Development Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our beginner-friendly program and build your first websites in
            8-10 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-started?track=web-development-intermediate">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                Enroll Now - ₦60,000
              </Button>
            </Link>
            <Link to="/programs/web-development/beginner-to-advanced">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View Advanced Track
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
            <p>&copy; 2024 AETHER HUB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
