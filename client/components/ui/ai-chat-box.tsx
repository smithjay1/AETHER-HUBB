import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Minimize2,
  Maximize2,
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const AIChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your AETHER HUB assistant. I can help you choose the right course, answer questions about our programs, or guide you through enrollment. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const predefinedResponses = {
    courses:
      "We offer three main programs: Web Development (₦60,000-₦80,000), Adobe After Effects (₦60,000-₦80,000), and CapCut Video Editing (₦30,000-₦60,000). Each has beginner-to-intermediate and beginner-to-advanced tracks.",
    pricing:
      "Our courses range from ₦30,000 to ₦80,000 depending on the program and level. Web Development: ₦60,000-₦80,000, Adobe After Effects: ₦60,000-₦80,000, CapCut: ₦30,000-₦60,000.",
    enrollment:
      "To enroll, click 'Get Started' on any page, select your course, fill out the form, and you'll be redirected to WhatsApp to complete your enrollment with our team.",
    support:
      "We offer 24/7 support via email (aether.hub1@gmail.com), WhatsApp (+234 702 534 0480), and our community forums. Our team typically responds within 2-4 hours.",
    duration:
      "Course durations vary: CapCut (4-8 weeks), Web Development (8-16 weeks), Adobe After Effects (8-12 weeks). All courses include lifetime access to materials.",
    default:
      "I'd be happy to help! You can ask me about our courses, pricing, enrollment process, or any other questions about AETHER HUB. For specific technical questions, our support team is also available 24/7.",
  };

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes("course") || message.includes("program")) {
      return predefinedResponses.courses;
    } else if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("fee")
    ) {
      return predefinedResponses.pricing;
    } else if (
      message.includes("enroll") ||
      message.includes("register") ||
      message.includes("join")
    ) {
      return predefinedResponses.enrollment;
    } else if (
      message.includes("support") ||
      message.includes("help") ||
      message.includes("contact")
    ) {
      return predefinedResponses.support;
    } else if (
      message.includes("duration") ||
      message.includes("time") ||
      message.includes("long")
    ) {
      return predefinedResponses.duration;
    } else if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      return "Hello! Welcome to AETHER HUB. I'm here to help you find the perfect course for your skill level and goals. What would you like to know?";
    } else {
      return predefinedResponses.default;
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(
      () => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: getAIResponse(inputMessage),
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiResponse]);
        setIsTyping(false);
      },
      1000 + Math.random() * 1000,
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <Badge className="absolute -top-2 -left-2 bg-green-500 text-white animate-bounce">
          AI
        </Badge>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card
        className={`border-primary/20 shadow-2xl transition-all duration-300 ${
          isMinimized ? "w-80 h-16" : "w-80 h-96"
        }`}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 bg-primary text-primary-foreground rounded-t-lg">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <CardTitle className="text-sm font-medium">
              AETHER AI Assistant
            </CardTitle>
            <Badge className="bg-green-500 text-xs">Online</Badge>
          </div>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-6 w-6 p-0 text-primary-foreground hover:bg-primary/80"
            >
              {isMinimized ? (
                <Maximize2 className="h-3 w-3" />
              ) : (
                <Minimize2 className="h-3 w-3" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0 text-primary-foreground hover:bg-primary/80"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-80">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-background">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 text-sm ${
                      message.isUser
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {!message.isUser && (
                        <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      )}
                      <span className="break-words">{message.text}</span>
                      {message.isUser && (
                        <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground rounded-lg p-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-border p-3 bg-card">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about courses, pricing, enrollment..."
                  className="flex-1 border-border"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};
