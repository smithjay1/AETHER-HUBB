import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Video,
  Clock,
  Users,
  BookOpen,
  ArrowLeft,
  Check,
  Target,
  Trophy,
  Smartphone,
  Music,
  Scissors,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CapCutBeginnerIntermediate() {
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
            🎬 CapCut Video Editing
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Beginner to Intermediate
            <span className="text-primary block"> Track</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Master mobile video editing for social media. Learn CapCut basics,
            transitions, effects, and create viral-style content for TikTok and
            Instagram.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-primary mr-2" />
              4-6 weeks
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 text-primary mr-2" />
              Social media focused
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 text-primary mr-2" />4 modules
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Social Media Video Mastery
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Module Cards */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  CapCut Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Installing and navigating CapCut (Mobile/Desktop)
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Interface walkthrough
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
                  Basic Editing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Trimming, cutting, splitting
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Adding transitions and effects
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Text overlays
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
                  Sound and Music
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Adding background music
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Sound effects and volume control
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Voiceover recording
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
                  Final Project: 30-sec Reel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Create a complete 30-second social media reel
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Apply all learned techniques
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
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Mobile Editing
                </h3>
                <p className="text-muted-foreground text-sm">
                  Master mobile-first video editing workflows
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scissors className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Quick Edits
                </h3>
                <p className="text-muted-foreground text-sm">
                  Fast editing techniques for social media
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Audio Sync
                </h3>
                <p className="text-muted-foreground text-sm">
                  Perfect music synchronization and sound design
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
            Start Creating Viral Content
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn mobile video editing with CapCut and create engaging social
            media content in just 4-6 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-started?track=capcut-video-editing-intermediate">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                Enroll Now - ₦30,000
              </Button>
            </Link>
            <Link to="/programs/capcut-video-editing/beginner-to-advanced">
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
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Help Center</li>
                <li>Community</li>
                <li>Contact Us</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="/about" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
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
