import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Code, User, Mail, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const { registerWithEmail, loginWithGoogle, loginWithGitHub, isLoading } =
    useAuth();
  const navigate = useNavigate();

  const handleEmailRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!firstName || !lastName || !email) {
      setError("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    const success = await registerWithEmail({ firstName, lastName, email });
    if (success) {
      // Redirect to course selection after successful registration
      navigate("/get-started", { replace: true });
    } else {
      setError("Registration failed. Please try again.");
    }
  };

  const handleGoogleAuth = async () => {
    setError("");
    const success = await loginWithGoogle();
    if (success) {
      // The ProtectedRoute will automatically redirect to /get-started if onboarding is needed
      navigate("/", { replace: true });
    } else {
      setError("Google authentication failed. Please try again.");
    }
  };

  const handleGitHubAuth = async () => {
    setError("");
    const success = await loginWithGitHub();
    if (success) {
      // The ProtectedRoute will automatically redirect to /get-started if onboarding is needed
      navigate("/", { replace: true });
    } else {
      setError("GitHub authentication failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Back to landing */}
        <Link
          to="/landing"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to CodeMaster
        </Link>

        <Card className="border-2 border-white/50 shadow-xl backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Code className="h-7 w-7 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Create Your Account
            </CardTitle>
            <p className="text-gray-600">
              Join thousands of students transforming their careers
            </p>
          </CardHeader>
          <CardContent>
            {/* OAuth Buttons */}
            <div className="space-y-3 mb-6">
              <Button
                onClick={handleGoogleAuth}
                disabled={isLoading}
                variant="outline"
                className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 py-3"
              >
                <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                {isLoading ? "Connecting..." : "Continue with Google"}
              </Button>

              <Button
                onClick={handleGitHubAuth}
                disabled={isLoading}
                variant="outline"
                className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 py-3"
              >
                <svg
                  className="h-5 w-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {isLoading ? "Connecting..." : "Continue with GitHub"}
              </Button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">
                  Or register with email
                </span>
              </div>
            </div>

            {/* Email Registration Form */}
            <form onSubmit={handleEmailRegister} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="John"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Doe"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm text-center bg-red-50 border border-red-200 rounded-md p-3">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
              >
                Sign in here
              </Link>
            </div>

            <div className="mt-4 text-center text-xs text-gray-500">
              By creating an account, you agree to our{" "}
              <Link to="/terms" className="text-blue-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Help section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">
            Need help getting started?
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <Link
              to="/support"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              Contact Support
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              to="/faq"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
