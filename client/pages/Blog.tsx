import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { AIChatBox } from "@/components/ui/ai-chat-box";
import {
  Code,
  Calendar,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
  Lightbulb,
  Star,
  Eye,
  MessageCircle,
  BookOpen,
  Target,
  Rocket,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Mastering Video Editing: From Beginner to Professional Creator",
    excerpt:
      "Learn professional video editing techniques, workflow optimization, and how to create engaging content that captures your audience's attention.",
    author: "Marcus Thompson",
    date: "2024-01-20",
    readTime: "12 min read",
    views: "4.8k",
    comments: 67,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F38d216f1a49845fd9574a8d86582ed04?format=webp&width=800",
    category: "Video Editing",
    featured: true,
  },
  {
    id: 2,
    title:
      "Adobe After Effects: Creating Stunning Motion Graphics for Social Media",
    excerpt:
      "Master the art of motion graphics with Adobe After Effects. Learn to create eye-catching animations that boost engagement across platforms.",
    author: "Sofia Martinez",
    date: "2024-01-18",
    readTime: "10 min read",
    views: "3.9k",
    comments: 54,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F1815451d39944434b604006faf2309f5?format=webp&width=800",
    category: "Adobe After Effects",
    featured: true,
  },
  {
    id: 3,
    title: "Web Security Fundamentals: Protecting Your Applications in 2024",
    excerpt:
      "Essential security practices every developer should know. Learn to protect user data, prevent common vulnerabilities, and build secure applications.",
    author: "Dr. Ahmed Hassan",
    date: "2024-01-16",
    readTime: "15 min read",
    views: "5.2k",
    comments: 89,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F50d261adafc44a94a86814cf6a27327e?format=webp&width=800",
    category: "Security",
    featured: true,
  },
  {
    id: 4,
    title:
      "Night Coding Sessions: Maximizing Productivity in Your Dev Environment",
    excerpt:
      "Discover how to optimize your development setup for late-night coding sessions and boost your productivity with multi-monitor workflows.",
    author: "Alex Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    views: "3.2k",
    comments: 42,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F3f057a7ca1cc41fdac2bd42cea6b1b77?format=webp&width=800",
    category: "Web Development",
    featured: false,
  },
  {
    id: 5,
    title:
      "The Perfect Developer Workspace: Mac Setup for Modern Web Development",
    excerpt:
      "Learn how to configure your Mac development environment with the essential tools and workflows for efficient coding.",
    author: "Sarah Kim",
    date: "2024-01-12",
    readTime: "10 min read",
    views: "2.8k",
    comments: 35,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2Fe74a55e1e2df4d03814749be772501d5?format=webp&width=800",
    category: "Web Development",
    featured: false,
  },
  {
    id: 6,
    title: "Strategic Learning: Planning Your Web Development Journey",
    excerpt:
      "A comprehensive guide to creating an effective study plan for mastering web development from beginner to advanced level.",
    author: "Michael Torres",
    date: "2024-01-10",
    readTime: "12 min read",
    views: "4.1k",
    comments: 67,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F5bde559b62194e899917a33a20e7c108?format=webp&width=800",
    category: "Career",
    featured: false,
  },
  {
    id: 7,
    title: "JavaScript Mastery: Essential Resources and Study Techniques",
    excerpt:
      "Explore the best learning resources and proven techniques to master JavaScript and build a strong foundation for web development.",
    author: "Emma Rodriguez",
    date: "2024-01-08",
    readTime: "9 min read",
    views: "3.5k",
    comments: 48,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F7b69d620b6474255b54066f2104eedbe?format=webp&width=800",
    category: "JavaScript",
    featured: false,
  },
  {
    id: 8,
    title:
      "The Art of Video Editing Timeline: Professional Workflow Techniques",
    excerpt:
      "Master the video editing timeline with advanced techniques for color grading, audio sync, and multi-layer composition workflows.",
    author: "Elena Rodriguez",
    date: "2024-01-12",
    readTime: "14 min read",
    views: "4.1k",
    comments: 58,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F1ae596c284824cebb6bb3a5a2b34972e?format=webp&width=800",
    category: "Video Editing",
    featured: false,
  },
  {
    id: 9,
    title: "Social Media Content Creation: Viral Video Strategies That Work",
    excerpt:
      "Learn the secrets behind viral content creation, trending formats, and how to design videos that capture attention in seconds.",
    author: "Jordan Kim",
    date: "2024-01-10",
    readTime: "9 min read",
    views: "6.3k",
    comments: 94,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F4efd58ef34ce433c9c778d241a80e499?format=webp&width=800",
    category: "Video Editing",
    featured: false,
  },
  {
    id: 10,
    title: "Learning the Classics: Timeless Web Development Principles",
    excerpt:
      "Discover fundamental web development concepts that remain relevant regardless of changing frameworks and technologies.",
    author: "David Martinez",
    date: "2024-01-05",
    readTime: "11 min read",
    views: "2.9k",
    comments: 33,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F573a12b258504863b9ebf6a65c0b047a?format=webp&width=800",
    category: "Web Development",
    featured: false,
  },
  {
    id: 11,
    title: "Strategic Thinking in Programming: Chess Lessons for Developers",
    excerpt:
      "Learn how strategic thinking patterns from chess can improve your problem-solving skills and code architecture decisions.",
    author: "Lisa Wang",
    date: "2024-01-03",
    readTime: "7 min read",
    views: "2.1k",
    comments: 28,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F471054df36e84adaa5ff3a4b1390f893?format=webp&width=800",
    category: "Career",
    featured: false,
  },
  {
    id: 12,
    title: "Leadership in Tech: Building and Managing Development Teams",
    excerpt:
      "Essential skills for transitioning from developer to tech leader, including team management and project coordination strategies.",
    author: "Carlos Johnson",
    date: "2024-01-01",
    readTime: "13 min read",
    views: "3.7k",
    comments: 55,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2Ff0830c750d7b466bb9c22c7b6dbb2945?format=webp&width=800",
    category: "Career",
    featured: false,
  },
  {
    id: 13,
    title:
      "Collaborative Development: Working Effectively in Programming Teams",
    excerpt:
      "Master the art of collaborative coding with Git workflows, pair programming, and effective communication strategies.",
    author: "Nina Patel",
    date: "2023-12-28",
    readTime: "10 min read",
    views: "3.3k",
    comments: 41,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2Fd55db4f9fc7043f7848e536de24ab61b?format=webp&width=800",
    category: "Web Development",
    featured: false,
  },
  {
    id: 14,
    title: "Problem-Solving in Code: Finding Solutions That Stand Out",
    excerpt:
      "Develop advanced problem-solving techniques and learn to identify optimal solutions in complex programming challenges.",
    author: "James Wilson",
    date: "2023-12-25",
    readTime: "8 min read",
    views: "2.6k",
    comments: 36,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F10906aa4247342aea7285c4f14b97e51?format=webp&width=800",
    category: "Web Development",
    featured: false,
  },
  {
    id: 15,
    title: "Learning Automation: Building Smart Study Habits for Developers",
    excerpt:
      "Discover how to create automated learning systems and build consistent coding practice habits that accelerate your growth.",
    author: "Sofia Ahmed",
    date: "2023-12-22",
    readTime: "9 min read",
    views: "2.4k",
    comments: 32,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F1360e8a8bf27479fb1c61d4068f46c6b?format=webp&width=800",
    category: "Career",
    featured: false,
  },
  {
    id: 16,
    title: "Web Security Fundamentals: Protecting Your Code and Data",
    excerpt:
      "Essential security practices every web developer should know, from secure coding to protecting user data and preventing common vulnerabilities.",
    author: "Ryan Cooper",
    date: "2023-12-20",
    readTime: "14 min read",
    views: "4.5k",
    comments: 73,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F48361d66a12840c792e1a76b38827c96?format=webp&width=800",
    category: "Web Development",
    featured: false,
  },
  {
    id: 17,
    title: "The Future of Development: AI Tools and Next-Gen Programming",
    excerpt:
      "Explore how artificial intelligence is transforming web development and learn to integrate AI tools into your development workflow.",
    author: "Maya Singh",
    date: "2023-12-18",
    readTime: "11 min read",
    views: "5.2k",
    comments: 89,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2Fa95b397a085e4e589be92e0d41684bea?format=webp&width=800",
    category: "Web Development",
    featured: true,
  },
];

const categories = [
  "All",
  "Web Development",
  "Video Editing",
  "Adobe After Effects",
  "Security",
  "JavaScript",
  "Career",
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter((post) => post.featured);

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
                className="text-primary font-medium border-b-2 border-primary"
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
                  className="text-primary font-medium py-2"
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

      {/* Hero Section with Sliding Animation */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 animate-pulse"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-bounce">
              📝 Latest Insights & Tutorials
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              AETHER HUB
              <span className="text-primary block animate-slide-in-right">
                {" "}
                Tech Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Stay updated with the latest trends, tutorials, and insights in
              web development, design, and technology. Learn from industry
              experts and level up your skills.
            </p>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-primary/30 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-primary/40 rounded-full animate-float animation-delay-500"></div>
      </section>

      {/* Featured Post Slider */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Featured Articles
          </h2>
          <div className="relative overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredPosts.concat(featuredPosts).map((post, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="border-0 bg-gradient-to-r from-primary/10 to-primary/5 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                          {post.category}
                        </Badge>
                      </div>
                      <CardContent className="p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <Button className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground group">
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Slider Navigation */}
            <div className="flex justify-center mt-6 gap-2">
              {featuredPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground scale-105"
                    : "hover:bg-primary/10 hover:text-primary hover:scale-105"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card
                key={post.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    {post.category}
                  </Badge>
                  {post.featured && (
                    <Star className="absolute top-3 right-3 h-5 w-5 text-yellow-400 fill-current" />
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-bold hover:text-primary transition-colors cursor-pointer group-hover:text-primary">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {post.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        {post.comments}
                      </div>
                    </div>
                    <span className="text-xs">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-primary/5 relative overflow-hidden">
        <div
          className={
            'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] animate-pulse'
          }
        ></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
              Stay in the Loop
            </h2>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-200">
              Get the latest articles, tutorials, and tech insights delivered
              straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in-up animation-delay-400">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 group">
                Subscribe
                <Rocket className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">
                <AnimatedCounter target={150} suffix="+" />
              </h3>
              <p className="text-muted-foreground">Articles Published</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">
                <AnimatedCounter target={50} suffix="k+" />
              </h3>
              <p className="text-muted-foreground">Monthly Readers</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">
                <AnimatedCounter target={95} suffix="%" />
              </h3>
              <p className="text-muted-foreground">Helpful Rating</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">24/7</h3>
              <p className="text-muted-foreground">Learning Support</p>
            </div>
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
                digital skills training and insightful content.
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

      {/* AI Chat Assistant */}
      <AIChatBox />
    </div>
  );
}
