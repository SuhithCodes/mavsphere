import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type LoginSignupProps = {
  isVisible: boolean;
  onClose: () => void;
  isDarkMode: boolean;
};

const LoginSignup: React.FC<LoginSignupProps> = ({
  isVisible,
  onClose,
  isDarkMode,
}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState(""); // State to store email
  const [password, setPassword] = useState(""); // State to store password
  const router = useRouter(); // Create a router instance

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Authentication logic
    if (email === "john.doe@example.com" && password === "qwerty123") {
      // Navigate to the home page if authentication is successful
      router.push("/home");
    } else {
      // Optionally, you can handle authentication failure here
      alert("Invalid email or password"); // Alert user about failed login
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-end transition-opacity duration-300 z-50 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`w-full max-w-md ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        } h-full overflow-y-auto transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 flex flex-col h-full">
          <button onClick={onClose} className="self-end mb-4">
            Close
          </button>
          <h1 className="text-3xl font-bold mb-6">
            {isLogin ? "Welcome Back to MavSphere" : "Join MavSphere"}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                value={email} // Bind value to state
                onChange={(e) => setEmail(e.target.value)} // Update state on change
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                value={password} // Bind value to state
                onChange={(e) => setPassword(e.target.value)} // Update state on change
                required
              />
            </div>
            {!isLogin && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    type="password"
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="signupAsMentor" />
                  <Label htmlFor="signupAsMentor" className="text-sm">
                    Sign up as a mentor (optional)
                  </Label>
                </div>
              </>
            )}
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm">
                {isLogin ? "By logging in, you accept the " : "I agree to the "}
                <Link href="/terms" className="underline">
                  terms and conditions
                </Link>
              </Label>
            </div>
            <Button
              className={`w-full ${
                isDarkMode
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-primary hover:bg-primary/90"
              }`}
              type="submit"
            >
              {isLogin ? "Login Now" : "Sign Up"}
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Button
              variant="link"
              className={`p-0 ${
                isDarkMode
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-primary hover:text-primary/90"
              }`}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign up" : "Login"}
            </Button>
          </div>
          {isLogin && (
            <div className="mt-4 text-center">
              <Button variant="link" className="text-sm">
                Forgot password?
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
