
import {
  Compass,
  Focus,
  MousePointerClick,
  MessageCircle,
  Lightbulb,
  ListChecks,
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

export default function About() {
  return (
    <>
      

      <main>
        {/* Hero */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1176px]">
            <div className="max-w-4xl">
              <Eyebrow>ABOUT ME</Eyebrow>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl">
                I build websites around people, not templates.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
                I'm Diana, a web developer focused on building clear,
                purposeful websites for businesses that need their
                information to work harder.
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                No unnecessary complexity. No design for design's sake.
                Just a website that helps people understand your business
                and know what to do next.
              </p>

              <div className="mt-10">
                <Button>Book a Discovery Call</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="bg-[#F7F7F8] px-6 py-24">
          <div className="mx-auto max-w-[1176px]">
            <Eyebrow>HOW I THINK</Eyebrow>

            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                  I start with understanding, not assumptions.
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <Compass
                    size={28}
                    strokeWidth={1.8}
                    className="text-[#183A63]"
                  />

                  <h3 className="mt-8 text-xl font-semibold text-gray-900">
                    Clarity
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    Information should always be easy to find and understand.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#183A63] bg-[#183A63] p-6 text-white">
                  <Focus
                    size={28}
                    strokeWidth={1.8}
                  />

                  <h3 className="mt-8 text-xl font-semibold">
                    Purpose
                  </h3>

                  <p className="mt-3 leading-7 text-white/80">
                    Every section should exist for a reason, not just to fill
                    space.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <MousePointerClick
                    size={28}
                    strokeWidth={1.8}
                    className="text-[#183A63]"
                  />

                  <h3 className="mt-8 text-xl font-semibold text-gray-900">
                    Usability
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    The website should be easy to use, from first visit to
                    last click.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-[#183A63] px-6 py-24 text-white md:py-32">
          <div className="mx-auto max-w-[1176px]">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-white/60">
                MY APPROACH
              </p>

              <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                I care about whether the website works.
              </h2>

              <p className="mt-8 text-lg leading-8 text-white/75">
                A beautiful website isn't the same as a website that's
                effective.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/75">
                I'm interested in the space between the two — creating
                websites that feel considered while making it easy for the
                business to navigate, understand, and trust.
              </p>
            </div>
          </div>
        </section>

        {/* Working Together */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1176px]">
            <Eyebrow>WORKING TOGETHER</Eyebrow>

            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                  You bring the business. I'll build the system around it.
                </h2>
              </div>

              <div className="grid gap-8">
                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F7F8]">
                    <MessageCircle
                      size={22}
                      className="text-[#183A63]"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Understand
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      We talk through your business, its customers, and what
                      the website needs to accomplish.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F7F8]">
                    <ListChecks
                      size={22}
                      className="text-[#183A63]"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Structure
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      I turn that information into a clear structure and
                      sitemap before any design begins.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F7F8]">
                    <Lightbulb
                      size={22}
                      className="text-[#183A63]"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Design
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      I design the interface and layout, staying close to the
                      structure we agreed on.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F7F8]">
                    <Focus
                      size={22}
                      className="text-[#183A63]"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Build
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      I build the website and test everything across devices
                      before it goes live.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Relationship */}
        <section className="bg-[#F7F7F8] px-6 py-24">
          <div className="mx-auto max-w-[1176px]">
            <Eyebrow>WORKING TOGETHER</Eyebrow>

            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                  A straightforward working relationship.
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Clear communication
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    You'll always know what stage we're at and what comes
                    next.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Practical thinking
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    I give honest input on what will actually serve your
                    business.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Thoughtful decisions
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    Recommendations are grounded in reasons, not just current
                    trends.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Attention to detail
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    Small details matter and they show up in how your business
                    is perceived.
                  </p>
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
                Let's build a website that works for your business.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Tell me what you're building, what isn't working, or what you
                need your website to accomplish.
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

