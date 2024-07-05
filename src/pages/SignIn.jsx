import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import bcrypt from "bcryptjs";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch (e) {
          console.error("Error parsing response:", e);
          throw new Error("Invalid response from server");
        }
        throw new Error(errorData.message || "Failed to sign in");
      }

      const result = await response.json();
      const isPasswordValid = await bcrypt.compare(data.password, result.hashedPassword);

      if (!isPasswordValid) {
        throw new Error("Invalid credentials");
      }

      toast("Sign in successful!", { description: "Welcome back!" });
    } catch (error) {
      console.error("Sign-in error:", error);
      if (error instanceof SyntaxError) {
        toast.error("Sign in failed", { description: "Invalid response from server" });
      } else if (error.message === "Invalid credentials") {
        toast.error("Sign in failed", { description: "Invalid email or password" });
      } else if (error.message === "Failed to sign in") {
        toast.error("Sign in failed", { description: "Server error, please try again later" });
      } else {
        toast.error("Sign in failed", { description: error.message });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" {...register("email")} />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register("password")} />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;