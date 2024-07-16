"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z, ZodSchema } from "zod";
import Cookies from "js-cookie";
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
import { useRouter } from "next/navigation";
import { userForgotPassword } from "@/service/forgot-passsword.service";

const formSchema: ZodSchema<{
  email: string;
}> = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
});

type FormData = z.infer<typeof formSchema>;

const ForgotPasswordForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (values) => {
    const { email } = values;
    const response = await userForgotPassword({
      username: email,
      baseUrl: "http://localhost:3002/auth/reset-password",
    });
    console.log(response);
  };
  return (
    <Form {...form}>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormDescription>Enter your email address.</FormDescription>
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

export default ForgotPasswordForm;
