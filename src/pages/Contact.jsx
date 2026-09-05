
import {
  Mail,
  MessageCircle,
  Clock,
  ArrowRight,
  CheckCircle2,
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

                <form className="space-y-6">
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
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#183A63] focus:ring-1 focus:ring-[#183A63]"
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
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#183A63] focus:ring-1 focus:ring-[#183A63]"
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
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#183A63] focus:ring-1 focus:ring-[#183A63]"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label
                      htmlFor="project-type"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      What do you need?
                    </label>

                    <select
                      id="project-type"
                      name="project-type"
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-[#183A63] focus:ring-1 focus:ring-[#183A63]"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="new-website">New website</option>
                      <option value="redesign">Redesign</option>
                      <option value="improvements">
                        Website improvements
                      </option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
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
                      className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#183A63] focus:ring-1 focus:ring-[#183A63]"
                    />
                  </div>

                  <Button type="submit">
                    Send inquiry
                    <ArrowRight size={18} />
                  </Button>
                </form>
              </div>

              {/* Contact Options */}
              <aside className="lg:pt-16">
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
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1176px]">
            <div className="rounded-3xl bg-[#183A63] px-8 py-16 text-center text-white md:px-16">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Let's talk about what your website needs to do.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Start with where you are. I'll help you work out what comes
                next.
              </p>

              <div className="mt-8">
                <Button variant="secondary">
                  Book a Discovery Call
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

