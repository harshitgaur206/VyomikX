"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2, Loader2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Errors = Partial<Record<"name" | "email" | "organization" | "type" | "message", string>>

const requestTypes = [
  "Workshop for a School",
  "Workshop for an Event",
  "Collaboration / Partnership",
  "Sponsorship",
  "General Inquiry",
]

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")
  const [type, setType] = useState("")
  const [errors, setErrors] = useState<Errors>({})

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const organization = String(data.get("organization") || "").trim()
    const message = String(data.get("message") || "").trim()

    const nextErrors: Errors = {}
    if (!name) nextErrors.name = "Please enter your name."
    if (!email) nextErrors.email = "Please enter your email."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "Please enter a valid email."
    if (!organization) nextErrors.organization = "Please enter your school or organization."
    if (!type) nextErrors.type = "Please choose a request type."
    if (!message) nextErrors.message = "Please tell us a little about your request."

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus("submitting")
    // Front-end only: simulate a submission
    setTimeout(() => {
      setStatus("success")
      form.reset()
      setType("")
    }, 900)
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-primary/40 bg-primary/5 p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15">
          <CheckCircle2 className="h-7 w-7 text-primary" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-foreground">Request received</h3>
        <p className="mt-2 max-w-sm text-pretty leading-relaxed text-muted-foreground">
          Thanks for reaching out to VyomikX. We&apos;ll review your request and get back to you as
          soon as we can.
        </p>
        <Button className="mt-6 rounded-full" onClick={() => setStatus("idle")}>
          Send another request
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" placeholder="Your name" aria-invalid={!!errors.name} />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="organization">School / Organization</Label>
          <Input
            id="organization"
            name="organization"
            placeholder="e.g. Springfield High"
            aria-invalid={!!errors.organization}
          />
          {errors.organization && (
            <p className="text-xs text-destructive">{errors.organization}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="type">Request type</Label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger id="type" aria-invalid={!!errors.type} className="w-full">
              <SelectValue placeholder="Select a type" />
            </SelectTrigger>
            <SelectContent>
              {requestTypes.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.type && <p className="text-xs text-destructive">{errors.type}</p>}
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor="message">Tell us more</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Where and when would you like the workshop? How many participants? Any topics of interest?"
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-1 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Request
            <Send className="ml-1 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
