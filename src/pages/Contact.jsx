import { useState } from "react"
import { Link } from "react-router-dom"
import { useForm, ValidationError } from "@formspree/react"
import {
  Mail,
  MessageCircle,
  Clock,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react"

import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Button from "../components/ui/Button"

function Eyebrow({ children }) {
  return (
    <div className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-[#183A63]">
      <span className="h-px w-8 bg-[#183A63]" />
      {children}
    </div>
  )
}

export default function Contact() {
  const [projectType, setProjectType] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const [state, handleSubmit] = useForm("xvkobqnz")

  const projectOptions = [
    {
      value: "new-website",
      label: "New website",
    },
    {
      value: "redesign",
      label: "Redesign",
    },
    {
      value: "improvements",
      label: "Website improvements",
    },
    {
      value: "not-sure",
      label: "Not sure yet",
    },
  ]

  const selectedOption = projectOptions.find(
    (option) => option.value === projectType
  )

  // Success state
  if (state.succeeded) {
    return (
      <>

        <main>
          <section className="px-6 py-24 md:py-32">
            <div className="mx-auto max-w-[1176px]">
              <div className="mx-auto max-w-2xl text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF0F6]">
                  <CheckCircle2
                    size={28}
                    strokeWidth={1.8}
                    className="text-[#183A63]"
                  />
                </div>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
                  Thanks for reaching out.
                </h1>

                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  I've received your inquiry and will review the details before
                  getting back to you with the next step.
                </p>

                <div className="mt-8">
                  <Link to="/appointment">
                    <Button>
                      Book a Discovery Call
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

      </>
    )
  }

  return (
    <>

      <main>
        {/* Hero */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1176px]">
            <div className="max-w-3xl">
              <Eyebrow>CONTACT</Eyebrow>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl">
                Let's talk about your website.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
                Whether you're starting from scratch or your current website
                isn't doing its job, tell me what you're working with and what
                you need it to accomplish.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-[#F7F7F8] px-6 py-24">
          <div className="mx-auto max-w-[1176px]">
            <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr]">
              {/* Form */}
              <div>
                <div className="mb-10">
                  <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                    Tell me about your project.
                  </h2>

                  <p className="mt-4 max-w-xl leading-7 text-gray-600">
                    A few details are enough to get started. You don't need
                    to have everything figured out before reaching out.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#183A63] focus:ring-1 focus:ring-[#183A63]"
                    />

                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="mt-2 text-sm text-red-600"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#183A63] focus:ring-1 focus:ring-[#183A63]"
                    />

                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="mt-2 text-sm text-red-600"
                    />
                  </div>

                  {/* Business */}
                  <div>
                    <label
                      htmlFor="business"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Business / Company
                    </label>

                    <input
                      id="business"
                      name="business"
                      type="text"
                      placeholder="Your business name"
                      required
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#183A63] focus:ring-1 focus:ring-[#183A63]"
                    />

                    <ValidationError
                      prefix="Business"
                      field="business"
                      errors={state.errors}
                      className="mt-2 text-sm text-red-600"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="relative">
                    <label
                      htmlFor="project-type"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      What do you need?
                    </label>

                    {/* Sends selected value with the form */}
                    <input
                      type="hidden"
                      name="project-type"
                      value={projectType}
                    />

                    {/* Dropdown Button */}
                    <button
                      type="button"
                      id="project-type"
                      aria-haspopup="listbox"
                      aria-expanded={isOpen}
                      onClick={() => setIsOpen(!isOpen)}
                      className={`flex w-full items-center justify-between rounded-xl border bg-white px-4 py-3.5 text-left outline-none transition ${
                        isOpen
                          ? "border-[#183A63] ring-1 ring-[#183A63]"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <span
                        className={
                          selectedOption
                            ? "text-gray-900"
                            : "text-gray-400"
                        }
                      >
                        {selectedOption?.label || "Select an option"}
                      </span>

                      <ChevronDown
                        size={18}
                        strokeWidth={1.8}
                        className={`shrink-0 text-[#183A63] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div
                        role="listbox"
                        className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg"
                      >
                        {projectOptions.map((option) => {
                          const isSelected =
                            projectType === option.value

                          return (
                            <button
                              key={option.value}
                              type="button"
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setProjectType(option.value)
                                setIsOpen(false)
                              }}
                              className={`w-full rounded-lg px-3.5 py-3 text-left text-sm transition ${
                                isSelected
                                  ? "bg-[#183A63] text-white"
                                  : "text-gray-700 hover:bg-[#F7F7F8] hover:text-[#183A63]"
                              }`}
                            >
                              {option.label}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Tell me about the project
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="What are you trying to achieve with your website?"
                      required
                      className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#183A63] focus:ring-1 focus:ring-[#183A63]"
                    />

                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="mt-2 text-sm text-red-600"
                    />
                  </div>

                  {/* Submit */}
                  <Button type="submit" disabled={state.submitting}>
                    {state.submitting ? "Sending..." : "Send inquiry"}

                    {!state.submitting && <ArrowRight size={18} />}
                  </Button>
                </form>
              </div>

              {/* Contact Options */}
              <aside className="lg:pt-16">
                {/* Email */}
                <div className="border-t border-gray-300 pt-8">
                  <div className="flex gap-4">
                    <Mail
                      size={22}
                      strokeWidth={1.8}
                      className="mt-1 shrink-0 text-[#183A63]"
                    />

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Email
                      </h3>

                      <p className="mt-2 text-gray-600">
                        hello@yourdomain.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="mt-8 border-t border-gray-300 pt-8">
                  <div className="flex gap-4">
                    <MessageCircle
                      size={22}
                      strokeWidth={1.8}
                      className="mt-1 shrink-0 text-[#183A63]"
                    />

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        WhatsApp
                      </h3>

                      <p className="mt-2 text-gray-600">
                        +254 XXX XXX XXX
                      </p>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-8 border-t border-gray-300 pt-8">
                  <div className="flex gap-4">
                    <Clock
                      size={22}
                      strokeWidth={1.8}
                      className="mt-1 shrink-0 text-[#183A63]"
                    />

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Availability
                      </h3>

                      <p className="mt-2 text-gray-600">
                        Mon–Fri · 9:00–17:00
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-10 max-w-sm text-sm leading-6 text-gray-500">
                  Prefer not to use the form? You can reach out directly
                  using any of the options above.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1176px]">
            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
                <Eyebrow>WHAT HAPPENS NEXT</Eyebrow>

                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                  A simple process from here.
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {/* Step 1 */}
                <div className="flex gap-6 py-8 first:pt-0">
                  <span className="shrink-0 text-sm font-semibold text-[#183A63]">
                    01
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      I'll review
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-gray-600">
                      I'll look through what you've shared and get a sense of
                      what you're trying to accomplish.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6 py-8">
                  <span className="shrink-0 text-sm font-semibold text-[#183A63]">
                    02
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      We'll talk
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-gray-600">
                      If the project looks like a good fit, we'll have a
                      conversation about your business, customers, and
                      requirements.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6 py-8 last:pb-0">
                  <span className="shrink-0 text-sm font-semibold text-[#183A63]">
                    03
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      We'll decide
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-gray-600">
                      You'll know what the project involves, what I recommend,
                      and what happens next.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F7F7F8] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1176px]">
            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
                <Eyebrow>QUESTIONS</Eyebrow>

                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                  Before you reach out.
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {/* FAQ 1 */}
                <div className="py-8 first:pt-0">
                  <div className="flex gap-4">
                    <CheckCircle2
                      size={21}
                      strokeWidth={1.8}
                      className="mt-1 shrink-0 text-[#183A63]"
                    />

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Do I need to know exactly what I want?
                      </h3>

                      <p className="mt-3 leading-7 text-gray-600">
                        No. You can come with a problem rather than a
                        solution. We'll figure out the right direction
                        together.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div className="py-8">
                  <div className="flex gap-4">
                    <CheckCircle2
                      size={21}
                      strokeWidth={1.8}
                      className="mt-1 shrink-0 text-[#183A63]"
                    />

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Do you work with existing websites?
                      </h3>

                      <p className="mt-3 leading-7 text-gray-600">
                        Yes. If your current website isn't communicating your
                        business properly, we can assess what needs to change.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div className="py-8 last:pb-0">
                  <div className="flex gap-4">
                    <CheckCircle2
                      size={21}
                      strokeWidth={1.8}
                      className="mt-1 shrink-0 text-[#183A63]"
                    />

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        What happens after I submit the form?
                      </h3>

                      <p className="mt-3 leading-7 text-gray-600">
                        I'll review your inquiry and get back to you with the
                        appropriate next step.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1176px]">
            <div className="rounded-2xl bg-[#183A63] px-6 py-16 text-center text-white sm:px-10 md:py-20">
              <div className="mx-auto max-w-2xl">
                <div className="mb-6 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider text-white/70">
                  <span className="h-px w-6 bg-white/50" />

                  READY TO TALK?

                  <span className="h-px w-6 bg-white/50" />
                </div>

                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Let's talk about what your website needs to do.
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/70">
                  Start with where you are. I'll help you work out what comes
                  next.
                </p>

                <div className="mt-7">
                  <Link to="/appointment">
                    <Button variant="light">
                      Book a Discovery Call
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}