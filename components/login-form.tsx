"use client"
import { cn } from "@/lib/utils"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { signIn } from "@/lib/auth-client";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { z } from "zod";
import { Mail, KeyRound } from "lucide-react";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email(
      "Enter a valid email address"
    )
    .refine(
      (value) =>
        /@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com)$/i.test(
          value
        ),
      {
        message:
          "Only Gmail, Yahoo, Outlook, and Hotmail addresses are allowed",
      }
    ),

  password: z
    .string()
    .min(
      8,
      "Password must be at least 8 characters"
    )
    .max(
      15,
      "Password must not exceed 100 characters"
    )
    .refine(
      (value) => /[a-z]/.test(value),
      {
        message:
          "Password must contain at least one lowercase letter",
      }
    )
    .refine(
      (value) => /[0-9]/.test(value),
      {
        message:
          "Password must contain at least one number",
      }
    )
    .refine(
      (value) =>
        /[!@#$%^&*(),.?":{}|<>]/.test(
          value
        ),
      {
        message:
          "Password must contain at least one special character",
      }
    ),
});
export type LoginFormData =
  z.infer<typeof loginSchema>;

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(
    values: z.infer<typeof loginSchema>
  ) {
    try {
      setIsLoading(true);

      const result = await signIn.email({
        email: values.email,
        password: values.password,
      });

      console.log("LOGIN RESULT:", result);

      if (result?.error) {
        toast.error(
          result.error.message ||
          "Invalid email or password"
        );
        return;
      }

      if (!result?.data) {
        toast.error(
          "Invalid email or password"
        );
        return;
      }

      toast.success(
        "Login successful"
      );

      router.replace("/admin");

    } catch (error: any) {
      console.error(
        "LOGIN ERROR:",
        error
      );

      toast.error(
        error?.message ||
        "Invalid email or password"
      );
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div
      className={cn(
        "flex max-h-screen items-center justify-center ",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-md !border-0 !shadow-none ">
        <CardContent className="p-6 md:p-8">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="flex flex-col items-start gap-3 mb-6">
                <img
                  src="flow.png"
                  alt="Flow"
                  className="w-[120px] h-[40px]"
                />
              </div>

              <Field>
                <FieldLabel htmlFor="email">E-mail</FieldLabel>
                 <div className="relative w-full">
                  <Mail className="absolute left-2 top-3 h-4 w-4 text-gray-500 z-10" />
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  className="rounded-none pl-8 pt-3"
                  {...form.register("email")}
                />
                </div>
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </Field>

              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">
                    Password
                  </FieldLabel>
                </div>
                <div className="relative w-full">
                  <KeyRound className="absolute left-2 top-3 h-4 w-4 text-gray-500 z-10" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="*********"
                    className="rounded-none pl-8 pt-3"
                    {...form.register("password")}
                  />
                  </div>
                  {form.formState.errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.password.message}
                    </p>
                  )}
              </Field>
              <hr />

              <Field>
                <div className="flex justify-end ">
                  <Button type="submit" className="px-4 bg-purple-500 hover:bg-purple-600" disabled={isLoading}
                  >
                    <img src="send.svg" className="w-4 h-4 stroke-white" />
                    Login
                  </Button>
                </div>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}