"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z, ZodSchema } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { userResetPassword } from "@/service/reset-password.service";

const formSchema: ZodSchema<{
  password: string;
  confirmPassword: string;
}> = z.object({
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  confirmPassword: z.string().min(6, {
    message: "Confirm password must be at least 6 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;

const ResetPasswordForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();

  const searchParams = useSearchParams();
  const uuid = searchParams.get("uuid");

  const onSubmit: SubmitHandler<FormData> = async (values) => {
    const { password } = values;
    if (!uuid) {
      throw new Error("UUID is required");
    }
    const response = await userResetPassword({
      password,
      uuid,
    });
    if (response.status === 200) {
      router.push("/auth/signin");
    }
  };
  return (
    <Form {...form}>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormDescription>Enter your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Re-enter your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </Form>
  );
};

export default ResetPasswordForm;
