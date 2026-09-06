import {
  BriefcaseBusiness,
  Globe,
  Target,
} from "lucide-react"

import Button from "../components/ui/Button"

function Eyebrow({ children, light = false }) {
  return (
    <div
      className={`mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-wider ${
        light ? "text-white/60" : "text-[#183A63]"
      }`}
    >
      <span
        className={`h-px w-8 ${
          light ? "bg-white/50" : "bg-[#183A63]"
        }`}
      />
      {children}
    </div>
  )
}

export default function Appointment() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <>

      <main>
        {/* Hero */}
        <section className="px-6 py-24 md:py-28">
          <div className="mx-auto max-w-[1176px]">
            <div className="max-w-3xl">
              <Eyebrow>BOOK A DISCOVERY CALL</Eyebrow>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl">
                Let's figure out what your website needs.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
                A 1-hour conversation to understand your business, what
                isn't working, and what your website needs to accomplish.
              </p>

              <div className="mt-10">
                <Button onClick={scrollToBooking}>
                  Choose a time
                  <span aria-hidden="true">→</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We'll Talk About */}
        <section className="bg-[#F7F7F8] px-6 py-24">
          <div className="mx-auto max-w-[1176px]">
            <div className="max-w-2xl">
              <Eyebrow>WHAT WE'LL TALK ABOUT</Eyebrow>

              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                Come with a problem. We'll work from there.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {/* Business */}
              <div className="rounded-2xl border border-gray-200 bg-white p-7">
                <BriefcaseBusiness
                  size={28}
                  strokeWidth={1.8}
                  className="text-[#183A63]"
                />

                <h3 className="mt-8 text-xl font-semibold text-gray-900">
                  Your business
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  What you do, who you serve, and what makes your business
                  different.
                </p>
              </div>

              {/* Website */}
              <div className="rounded-2xl border border-gray-200 bg-white p-7">
                <Globe
                  size={28}
                  strokeWidth={1.8}
                  className="text-[#183A63]"
                />

                <h3 className="mt-8 text-xl font-semibold text-gray-900">
                  Your website
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  What you're currently using, what's working, and what's
                  getting in the way.
                </p>
              </div>

              {/* Goals */}
              <div className="rounded-2xl border border-[#183A63] bg-[#183A63] p-7 text-white">
                <Target
                  size={28}
                  strokeWidth={1.8}
                />

                <h3 className="mt-8 text-xl font-semibold">
                  Your goals
                </h3>

                <p className="mt-3 leading-7 text-white/75">
                  What you want the website to help your customers understand
                  or do.
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              You don't need a finished brief before booking.
            </p>
          </div>
        </section>

        {/* Booking Area */}
        <section
          id="booking"
          className="scroll-mt-20 px-6 py-24 md:py-32"
        >
          <div className="mx-auto max-w-[1176px]">
            <div className="mb-10">
              <Eyebrow>FIND A TIME</Eyebrow>

              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                Choose a time that works for you.
              </h2>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
                <span>1 hour</span>

                <span className="h-1 w-1 rounded-full bg-gray-300" />

                <span>Google Meet</span>

                <span className="h-1 w-1 rounded-full bg-gray-300" />

                <span>Free discovery call</span>
              </div>
            </div>

            {/* Google Calendar Booking */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <iframe
                src="https://calendar.app.google/VvqNGCzwb1p74LYx8"
                title="Book a Discovery Call"
                className="h-[750px] w-full border-0"
              />
            </div>
          </div>
        </section>

        {/* After Booking */}
        <section className="bg-[#F7F7F8] px-6 py-24">
          <div className="mx-auto max-w-[1176px]">
            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
                <Eyebrow>AFTER YOU BOOK</Eyebrow>

                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                  What happens next.
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
                      Confirmation
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-gray-600">
                      You'll receive the details for your call.
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
                      Conversation
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-gray-600">
                      We'll talk through your business, website, and goals.
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
                      Next step
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-gray-600">
                      If we're a good fit, I'll explain what I recommend and
                      what working together would look like.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reassurance */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1176px]">
            <div className="border-y border-gray-200 py-10 text-center">
              <p className="text-lg font-medium text-gray-700">
                No pressure. No prepared pitch. Just a conversation about
                your website.
              </p>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}