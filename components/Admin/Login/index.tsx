"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input2";
const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

interface Props {
  setIsLoggedIn: (value: boolean) => void;
}
const Login = ({ setIsLoggedIn }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    if (
      values.email !== "admin@careerconquer.com" ||
      values.password !== "ahmad000"
    ) {
      toast.error("Invalid email or password");
    } else {
      setIsLoggedIn(true);
    }
    setIsSubmitting(false);
  }

  return (
    <div className="flex items-center justify-center flex-col min-h-screen px-8 md:px-16">
      <h1 className="text-3xl font-semibold mb-8">
        Login to{" "}
        <span className="bg-[#581c87] px-2 italic text-white">Admin Panel</span>{" "}
      </h1>
      <div className="w-full max-w-[500px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="rounded-full font-bold w-full bg-transparent hover:bg-transparent py-3 border border-black text-black  dark:border-white relative group transition duration-200"
            >
              <div className="rounded-full absolute bottom-0 right-0 bg-[#581c87] h-full w-full -z-10 group-hover:scale-x-95 group-hover:scale-y-75 transition-all duration-200" />
              <span className="relative text-white">
                {isSubmitting ? "Submitting..." : "Login"}
              </span>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
