"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useState } from "react";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {

  const createUser = useMutation(api.users.createUser);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordHash , setPassword] = useState("");

  const [signUpInput, setSignUpInput] = useState({
      name : "",
      email : "",
      passwordHash : ""
  })
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createUser({
      name,
      email,
      passwordHash
    });

    setName("");
    setEmail("");

    alert("User Added Successfully");
  };
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input id="name" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="John Doe" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                placeholder="m@example.com"
                required
              />
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" name="passwordHash" value={passwordHash} onChange={(e)=>setPassword(e.target.value)} type="password" required />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">Create Account</Button>
                <Button variant="outline" type="button">
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <a href="#">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
