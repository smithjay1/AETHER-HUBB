import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Check,
  Code,
  X,
  Star,
  Clock,
  Users,
  Trophy,
  CreditCard,
  Palette,
  Video,
  Figma,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <Code className="h-5 w-5 text-primary-foreground" />
            </div>
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
              to="/pricing"
              className="text-primary font-medium border-b-2 border-primary"
            >
              Pricing
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            💰 Affordable Pricing
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Invest in Your
            <span className="text-primary"> Creative Future</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Flexible payment options in Nigerian Naira. Professional training
            from beginner to advanced levels.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2" />
              Instant access after payment
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2" />
              30-day money-back guarantee
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2" />
              Lifetime updates included
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="space-y-12">
            {/* Web Development Section */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Code className="mr-3 h-6 w-6 text-primary" />
                Web Development
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Web Development Intermediate */}
                <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl bg-card">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">
                      Beginner to Intermediate
                    </CardTitle>
                    <p className="text-muted-foreground">
                      HTML, CSS, JavaScript, React basics
                    </p>
                    <div className="text-4xl font-bold text-primary mt-4">
                      ₦60,000
                    </div>
                    <p className="text-muted-foreground">One-time payment</p>
                    <Badge className="mt-3 bg-primary/10 text-primary border-primary/20">
                      Most Popular
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span>HTML, CSS & JavaScript fundamentals</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span>React basics and component development</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span>Build 5 portfolio projects</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span>Weekly mentorship sessions</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span>Community support access</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span>Lifetime course updates</span>
                      </div>
                    </div>
                    <Link to="/get-started?plan=code-intermediate">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Start Learning
                      </Button>
                    </Link>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      Instant access • 30-day guarantee
                    </p>
                  </CardContent>
                </Card>

                {/* Web Development Advanced */}
                <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl bg-card">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">
                      Beginner to Advanced
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Full-stack development, Node.js, Databases
                    </p>
                    <div className="text-4xl font-bold text-primary mt-4">
                      ₦80,000
                    </div>
                    <p className="text-muted-foreground">One-time payment</p>
                    <Badge className="mt-3 bg-primary/10 text-primary border-primary/20">
                      Complete Package
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span>Everything in Intermediate +</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span>Backend development with Node.js</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span>Database design and management</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span>Full-stack project development</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span>Advanced mentorship & career guidance</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span>Industry-ready portfolio</span>
                      </div>
                    </div>
                    <Link to="/get-started?plan=code-advanced">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Start Learning
                      </Button>
                    </Link>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      Instant access • 30-day guarantee
                    </p>
                  </CardContent>
                </Card>

                {/* Intermediate Plan */}
                <Card className="border-2 border-blue-300 hover:border-blue-400 transition-all hover:shadow-xl transform scale-105 relative">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                    🔥 Most Popular
                  </Badge>
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">
                      Intermediate Track
                    </CardTitle>
                    <p className="text-gray-600">Become job-ready developer</p>
                    <div className="text-4xl font-bold text-gray-900 mt-4">
                      $597
                    </div>
                    <p className="text-gray-500">One-time payment</p>
                    <div className="flex items-center justify-center mt-3">
                      <Badge className="bg-blue-100 text-blue-700 border-blue-200 mr-2">
                        Best Value
                      </Badge>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                        <span>Everything in Beginner +</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                        <span>React, Node.js & Database design</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                        <span>Build 5 full-stack applications</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                        <span>Weekly group coding sessions (6 months)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                        <span>Technical interview preparation</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                        <span>Job referral network access</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                        <span>Priority mentor support</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <X className="h-4 w-4 text-gray-300 mr-3 flex-shrink-0" />
                        <span>System design & architecture</span>
                      </div>
                    </div>
                    <Link to="/get-started?plan=intermediate">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Start Intermediate Track
                      </Button>
                    </Link>
                    <p className="text-xs text-gray-500 text-center mt-3">
                      Instant access • 30-day guarantee
                    </p>
                  </CardContent>
                </Card>

                {/* Advanced Plan */}
                <Card className="border-2 border-purple-200 hover:border-purple-300 transition-all hover:shadow-xl">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">
                      Advanced Track
                    </CardTitle>
                    <p className="text-gray-600">Senior developer expertise</p>
                    <div className="text-4xl font-bold text-gray-900 mt-4">
                      $997
                    </div>
                    <p className="text-gray-500">One-time payment</p>
                    <Badge className="mt-3 bg-purple-100 text-purple-700 border-purple-200">
                      Most Comprehensive
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-purple-500 mr-3 flex-shrink-0" />
                        <span>Everything in Intermediate +</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-purple-500 mr-3 flex-shrink-0" />
                        <span>System design & architecture patterns</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-purple-500 mr-3 flex-shrink-0" />
                        <span>Build 8 enterprise-level projects</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-purple-500 mr-3 flex-shrink-0" />
                        <span>Senior developer mentorship (8 months)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-purple-500 mr-3 flex-shrink-0" />
                        <span>Open source contribution guidance</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-purple-500 mr-3 flex-shrink-0" />
                        <span>Leadership & team management skills</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-purple-500 mr-3 flex-shrink-0" />
                        <span>Direct access to CTO network</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-purple-500 mr-3 flex-shrink-0" />
                        <span>Annual tech conference tickets</span>
                      </div>
                    </div>
                    <Link to="/get-started?plan=advanced">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Start Advanced Track
                      </Button>
                    </Link>
                    <p className="text-xs text-gray-500 text-center mt-3">
                      Instant access • 30-day guarantee
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* UI/UX Design Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Palette className="mr-3 h-6 w-6 text-pink-600" />
                UI/UX Design
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* UI/UX Fundamentals */}
                <Card className="border-2 border-pink-200 hover:border-pink-300 transition-all hover:shadow-xl">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Palette className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      UI/UX Fundamentals
                    </CardTitle>
                    <div className="text-4xl font-bold text-gray-900 mt-4">
                      $397
                    </div>
                    <p className="text-gray-600">One-time payment</p>
                    <Badge className="mt-3 bg-pink-100 text-pink-700 border-pink-200">
                      Design Basics
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-pink-500 mr-3 flex-shrink-0" />
                        <span>Design principles & theory</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-pink-500 mr-3 flex-shrink-0" />
                        <span>Figma mastery from basics to advanced</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-pink-500 mr-3 flex-shrink-0" />
                        <span>Typography & color theory</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-pink-500 mr-3 flex-shrink-0" />
                        <span>5 design projects for portfolio</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-pink-500 mr-3 flex-shrink-0" />
                        <span>Design critique & feedback sessions</span>
                      </div>
                    </div>
                    <Link to="/get-started?plan=ui-beginner">
                      <Button className="w-full bg-pink-600 hover:bg-pink-700">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Start UI/UX Fundamentals
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Advanced UI/UX */}
                <Card className="border-2 border-indigo-200 hover:border-indigo-300 transition-all hover:shadow-xl">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Figma className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      Advanced UI/UX
                    </CardTitle>
                    <div className="text-4xl font-bold text-gray-900 mt-4">
                      $697
                    </div>
                    <p className="text-gray-600">One-time payment</p>
                    <Badge className="mt-3 bg-indigo-100 text-indigo-700 border-indigo-200">
                      Professional Level
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-indigo-500 mr-3 flex-shrink-0" />
                        <span>Everything in Fundamentals +</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-indigo-500 mr-3 flex-shrink-0" />
                        <span>User research & testing methods</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-indigo-500 mr-3 flex-shrink-0" />
                        <span>Advanced prototyping & interactions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-indigo-500 mr-3 flex-shrink-0" />
                        <span>Design systems & component libraries</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-indigo-500 mr-3 flex-shrink-0" />
                        <span>Complete UX case study projects</span>
                      </div>
                    </div>
                    <Link to="/get-started?plan=ui-intermediate">
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Start Advanced UI/UX
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Video Editing Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Video className="mr-3 h-6 w-6 text-red-600" />
                Video Editing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* CapCut Mastery */}
                <Card className="border-2 border-red-200 hover:border-red-300 transition-all hover:shadow-xl">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      CapCut Mastery
                    </CardTitle>
                    <div className="text-4xl font-bold text-gray-900 mt-4">
                      $197
                    </div>
                    <p className="text-gray-600">One-time payment</p>
                    <Badge className="mt-3 bg-red-100 text-red-700 border-red-200">
                      Mobile First
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                        <span>CapCut mobile app mastery</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                        <span>TikTok & Instagram Reels optimization</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                        <span>Trending effects & transitions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                        <span>Audio editing & music sync</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                        <span>10+ viral video recreations</span>
                      </div>
                    </div>
                    <Link to="/get-started?plan=video-capcut">
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Start CapCut Mastery
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Adobe After Effects */}
                <Card className="border-2 border-orange-200 hover:border-orange-300 transition-all hover:shadow-xl">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Video className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      Adobe After Effects
                    </CardTitle>
                    <div className="text-4xl font-bold text-gray-900 mt-4">
                      $497
                    </div>
                    <p className="text-gray-600">One-time payment</p>
                    <Badge className="mt-3 bg-orange-100 text-orange-700 border-orange-200">
                      Professional
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
                        <span>After Effects fundamentals to advanced</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
                        <span>Motion graphics & animations</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
                        <span>Visual effects & compositing</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
                        <span>3D animations & camera work</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
                        <span>Professional video portfolio</span>
                      </div>
                    </div>
                    <Link to="/get-started?plan=video-adobe">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Start After Effects
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Flexible Payment Options
          </h2>
          <Tabs defaultValue="full" className="max-w-2xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="full">Pay in Full</TabsTrigger>
              <TabsTrigger value="split">Payment Plan</TabsTrigger>
            </TabsList>
            <TabsContent value="full" className="mt-8">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-green-600">
                    Save 10% - Pay in Full
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Get instant access to your entire program with a one-time
                    payment. Save money and start learning immediately.
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Beginner Track</span>
                      <span className="font-bold">
                        $297{" "}
                        <span className="text-sm text-green-600">
                          (save $33)
                        </span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Intermediate Track</span>
                      <span className="font-bold">
                        $597{" "}
                        <span className="text-sm text-green-600">
                          (save $66)
                        </span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Advanced Track</span>
                      <span className="font-bold">
                        $997{" "}
                        <span className="text-sm text-green-600">
                          (save $111)
                        </span>
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="split" className="mt-8">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle>3-Month Payment Plan</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Split your payment into 3 monthly installments. Start
                    learning now, pay over time.
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Beginner Track</span>
                      <span className="font-bold">$110/month × 3</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Intermediate Track</span>
                      <span className="font-bold">$221/month × 3</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Advanced Track</span>
                      <span className="font-bold">$369/month × 3</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                What happens after I pay?
              </h3>
              <p className="text-gray-600">
                You'll receive instant access to your program dashboard with all
                materials, community access, and can schedule your first
                mentorship session immediately.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Is there a money-back guarantee?
              </h3>
              <p className="text-gray-600">
                Yes! We offer a 30-day money-back guarantee. If you're not
                satisfied, we'll refund your payment in full, no questions
                asked.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I upgrade my plan later?
              </h3>
              <p className="text-gray-600">
                Absolutely! You can upgrade to a higher tier at any time. We'll
                credit what you've already paid toward the new program.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Do you offer student discounts?
              </h3>
              <p className="text-gray-600">
                Yes! Students get 20% off with valid .edu email address. Contact
                support with your student ID for the discount code.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers.
                All payments are processed securely through Stripe.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                How long do I have access?
              </h3>
              <p className="text-gray-600">
                Your access is lifetime! Once you purchase, you can revisit
                materials anytime and receive all future updates to your
                program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Your Coding Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful developers. Pay once, learn forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/get-started">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-50"
              >
                <CreditCard className="mr-2 h-5 w-5" />
                Get Started Now
              </Button>
            </Link>
            <Link to="/programs">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                View Programs
              </Button>
            </Link>
          </div>
          <p className="text-blue-200 text-sm">
            💳 Secure payment • 🔒 30-day guarantee • ⚡ Instant access
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  CodeMaster
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
                  <Link to="/pricing" className="hover:text-blue-600">
                    Pricing
                  </Link>
                </li>
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
                <li>
                  <Link to="/about" className="hover:text-blue-600">
                    About Us
                  </Link>
                </li>
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
