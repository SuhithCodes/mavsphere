import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { signIn, useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";

type AuthProps = {
  isVisible: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  setIsLogin?: (value: boolean) => void;
};

// Login Component
const Login: React.FC<AuthProps> = ({ isVisible, onClose, isDarkMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [alertContent, setAlertContent] = useState({
    title: "",
    description: "",
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setAlertContent({
        title: "Error",
        description: "Invalid email or password",
      });
      setShowAlert(true);
      return;
    }

    setAlertContent({
      title: "Success",
      description: "Logged in successfully",
    });
    setShowAlert(true);

    // Add a small delay before redirecting
    setTimeout(() => {
      router.push("/home");
      onClose();
    }, 500);
  };

  return (
    <>
      <form onSubmit={handleLogin} className="space-y-4 flex-grow">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-sm">
            By logging in, you accept the{" "}
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
          Login Now
        </Button>
      </form>

      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alertContent.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {alertContent.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

// Signup Component
const Signup: React.FC<AuthProps> = ({
  isVisible,
  onClose,
  isDarkMode,
  setIsLogin,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isMentor, setIsMentor] = useState(false);
  const [username, setUsername] = useState("");
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [alertContent, setAlertContent] = useState({
    title: "",
    description: "",
  });

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setAlertContent({
        title: "Error",
        description: "Passwords do not match",
      });
      setShowAlert(true);
      return;
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: uuidv4(),
          email,
          password,
          is_mentor: isMentor,
          firstName,
          lastName,
          username,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Signup failed");
      }

      setAlertContent({
        title: "Success",
        description: "Account created successfully! Please login to continue.",
      });
      setShowAlert(true);

      // Reset form
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setFirstName("");
      setLastName("");
      setUsername("");
      setIsMentor(false);

      // Switch to login view
      setIsLogin(true);
    } catch (error) {
      setAlertContent({
        title: "Error",
        description: error.message || "Failed to create account",
      });
      setShowAlert(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSignup} className="space-y-6 flex-grow">
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="First Name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="flex-1 space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Last Name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="Choose a username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            placeholder="Confirm your password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="signupAsMentor" />
            <Label htmlFor="signupAsMentor" className="text-sm">
              Sign up as a mentor (optional)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <Link href="/terms" className="underline">
                terms and conditions
              </Link>
            </Label>
          </div>
        </div>
        <Button
          className={`w-full ${
            isDarkMode
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-primary hover:bg-primary/90"
          }`}
          type="submit"
        >
          Sign Up
        </Button>
      </form>

      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alertContent.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {alertContent.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

// Main LoginSignup Component
const LoginSignup: React.FC<AuthProps> = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-end transition-opacity duration-300 z-50 ${
        props.isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`w-full max-w-md ${
          props.isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        } h-full overflow-y-auto transition-transform duration-300 ${
          props.isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 flex flex-col h-full">
          <button onClick={props.onClose} className="self-end mb-4">
            Close
          </button>
          <h1 className="text-3xl font-bold mb-6">
            {isLogin ? "Welcome Back to MavSphere" : "Join MavSphere"}
          </h1>

          {isLogin ? (
            <Login {...props} />
          ) : (
            <Signup {...props} setIsLogin={setIsLogin} />
          )}

          <div className="mt-6 text-center text-sm">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Button
              variant="link"
              className={`p-0 ${
                props.isDarkMode
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
