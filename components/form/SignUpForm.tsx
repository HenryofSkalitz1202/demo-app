'use client';

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import GoogleSignInButton from "../GoogleSignInButton";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

const FormSchema = z
    .object({
        username: z
        .string()
        .min(1, 'Username is required')
        .max(100),
        email: z
        .string()
        .min(1, 'Email is required')
        .email('Invalid email'),
        password: z
        .string()
        .min(1, 'Password is required')
        .min(8, 'Password must consist at least 8 characters'),
        confirmPassword: z
        .string()
        .min(1, 'Password confirmation is required')
        .min(8, 'Password must consist at least 8 characters'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'Password do not match'
    })

const SignUpForm = () => {
    const router = useRouter();
    const { toast } = useToast()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    })

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: values.username,
                email: values.email,
                password: values.password
            })
        })

        if(response.ok){
            router.push('/sign-in')
            router.refresh()
        }else{
            toast({
                title: "Error",
                description: "Uh-oh! Something went wrong!",
                variant: "destructive",
            })
        }
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
        <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
              <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                  <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
              </FormItem>
              )}
          />
          <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
              <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                  <Input placeholder="mail@example.com" {...field} />
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
                  <Input placeholder="Enter your password" type='password' {...field} />
                  </FormControl>
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
                  <Input placeholder="Confirm your password" type='password' {...field} />
                  </FormControl>
                  <FormMessage />
              </FormItem>
              )}
          />
        </div>
        <Button className='w-full mt-6' type="submit">Sign up</Button>
        </form>
        
        <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block
        before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow
        after:bg-stone-400'>
          or
        </div>

        <GoogleSignInButton>Sign up with Google</GoogleSignInButton>

        <p className='text-center text-sm text-gray-600 mt-2'>
          Already have an account? &nbsp;
          <Link className='text-blue-500 hover:text-blue-800 hover:underline' href="/sign-in">Sign in</Link>
          .
        </p>
    </Form>
  )
}

export default SignUpForm