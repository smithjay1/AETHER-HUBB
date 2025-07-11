import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { AIChatBox } from "@/components/ui/ai-chat-box";
import {
  Code,
  User,
  Mail,
  ArrowLeft,
  ArrowRight,
  Play,
  Video,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function GetStarted() {
  const [selectedTrack, setSelectedTrack] = useState("code-intermediate");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const trackCategories = {
    coding: {
      name: "Web Development",
      tracks: {
        "code-intermediate": {
          name: "Beginner to Intermediate",
          price: "₦60,000",
          duration: "4-6 months",
          icon: Code,
          description: "HTML, CSS, JavaScript, React basics",
        },
        "code-advanced": {
          name: "Beginner to Advanced",
          price: "₦80,000",
          duration: "6-8 months",
          icon: Code,
          description: "Full-stack development, Node.js, Databases",
        },
      },
    },
    design: {
      name: "Adobe After Effects",
      tracks: {
        "adobe-intermediate": {
          name: "Beginner to Intermediate",
          price: "₦60,000",
          duration: "3-5 months",
          icon: Video,
          description: "Motion graphics, basic animations",
        },
        "adobe-advanced": {
          name: "Beginner to Advanced",
          price: "₦80,000",
          duration: "5-7 months",
          icon: Video,
          description:
            "Advanced VFX, complex animations, professional workflows",
        },
      },
    },
    video: {
      name: "CapCut Video Editing",
      tracks: {
        "capcut-intermediate": {
          name: "Beginner to Intermediate",
          price: "₦30,000",
          duration: "2-3 months",
          icon: Play,
          description: "Mobile video editing, effects, social media content",
        },
        "capcut-advanced": {
          name: "Beginner to Advanced",
          price: "₦60,000",
          duration: "3-5 months",
          icon: Play,
          description: "Advanced editing, professional content creation",
        },
      },
    },
  };

  const getCourseName = (trackKey: string) => {
    const categoryKey = Object.keys(trackCategories).find((key) =>
      Object.keys(trackCategories[key].tracks).includes(trackKey),
    );
    if (categoryKey) {
      const category = trackCategories[categoryKey];
      const track = category.tracks[trackKey];
      return `${category.name} - ${track.name}`;
    }
    return trackKey;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!selectedTrack) {
      setError("Please select a course");
      return;
    }

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      setError("Please fill in all required fields");
      return;
    }

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`;
      const courseName = getCourseName(selectedTrack);

      // Create WhatsApp message
      const whatsappMessage = `Hello, my name is ${fullName}. I would like to enroll in the ${courseName} course. My email is ${formData.email}.`;

      // URL encode the message
      const encodedMessage = encodeURIComponent(whatsappMessage);

      // Create WhatsApp link (using international format without + or leading zero)
      const whatsappLink = `https://wa.me/2347025340480?text=${encodedMessage}`;

      // Send email to aether.hub1@gmail.com (you can implement this with EmailJS or similar service)
      try {
        // For now, we'll log the email data. In production, integrate with EmailJS or backend
        console.log("Email data to send to aether.hub1@gmail.com:", {
          to: "aether.hub1@gmail.com",
          subject: `New Course Enrollment: ${courseName}`,
          message: `
            New enrollment request:

            Name: ${fullName}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Course: ${courseName}

            Message: ${whatsappMessage}
          `,
        });
      } catch (emailError) {
        console.error("Email submission error:", emailError);
      }

      // Open WhatsApp with pre-filled message
      window.open(whatsappLink, "_blank");

      // Show success message
      alert(
        `Thank you ${formData.firstName}! You're being redirected to WhatsApp to complete your enrollment for ${courseName}.`,
      );

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
      setSelectedTrack("");
    } catch (error) {
      console.error("Enrollment error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground dark py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to AETHER HUB
          </Link>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 bg-primary rounded-xl flex items-center justify-center">
                <Code className="h-7 w-7 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Choose Your Course
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select from our professional training programs designed to take
              you from beginner to expert level.
            </p>
          </div>
        </div>

        {/* Course Selection */}
        <Card className="border-2 border-border shadow-xl bg-card">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Choose Your Learning Path
              </h2>
              <p className="text-muted-foreground">
                Select the skill you want to master and your experience level
              </p>
            </div>

            <div className="space-y-8">
              {Object.entries(trackCategories).map(
                ([categoryKey, category]) => (
                  <div key={categoryKey}>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      {categoryKey === "coding" && (
                        <Code className="mr-2 h-5 w-5 text-primary" />
                      )}
                      {categoryKey === "design" && (
                        <Video className="mr-2 h-5 w-5 text-primary" />
                      )}
                      {categoryKey === "video" && (
                        <Play className="mr-2 h-5 w-5 text-primary" />
                      )}
                      {category.name}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(category.tracks).map(([key, track]) => {
                        const IconComponent = track.icon;
                        const isSelected = selectedTrack === key;
                        return (
                          <Card
                            key={key}
                            className={`cursor-pointer transition-all hover:shadow-lg bg-card ${
                              isSelected
                                ? "border-2 border-primary bg-primary/5"
                                : "border-2 border-border hover:border-primary/50"
                            }`}
                            onClick={() => setSelectedTrack(key)}
                          >
                            <CardHeader className="text-center pb-4">
                              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                                <IconComponent className="h-6 w-6 text-primary-foreground" />
                              </div>
                              <CardTitle className="text-lg text-foreground">
                                {track.name}
                              </CardTitle>
                              <p className="text-muted-foreground text-sm">
                                {track.description}
                              </p>
                              <div className="text-xl font-bold text-primary mt-2">
                                {track.price}
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {track.duration}
                              </p>
                            </CardHeader>
                            {isSelected && (
                              <CardContent className="pt-0">
                                <Badge className="w-full justify-center bg-primary/10 text-primary border-primary/20">
                                  Selected
                                </Badge>
                              </CardContent>
                            )}
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                ),
              )}
            </div>

            <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">
                🚀 More Skills Coming Soon!
              </h4>
              <p className="text-muted-foreground text-sm">
                We're constantly adding new skills and tracks. Future additions
                include: Data Science, Digital Marketing, Photography, 3D
                Design, and more!
              </p>
            </div>

            {/* Contact Form */}
            <div className="mt-8 border-t border-border pt-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">
                      First Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            firstName: e.target.value,
                          }))
                        }
                        placeholder="John"
                        className="pl-10 bg-background border-border"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">
                      Last Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            lastName: e.target.value,
                          }))
                        }
                        placeholder="Doe"
                        className="pl-10 bg-background border-border"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      placeholder="john@example.com"
                      className="pl-10 bg-background border-border"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    placeholder="+234 XXX XXX XXXX"
                    className="bg-background border-border"
                    required
                  />
                </div>

                {error && (
                  <div className="text-red-400 text-sm text-center bg-red-950/20 border border-red-800/20 rounded-md p-3">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={!selectedTrack}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg disabled:opacity-50"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>

        {/* Help section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Need help choosing the right course?
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <Link
              to="/programs"
              className="text-primary hover:text-primary/80 hover:underline"
            >
              View All Programs
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              to="/blog"
              className="text-primary hover:text-primary/80 hover:underline"
            >
              Read Our Blog
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              to="/about"
              className="text-primary hover:text-primary/80 hover:underline"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* AI Chat Assistant */}
      <AIChatBox />
    </div>
  );
}
