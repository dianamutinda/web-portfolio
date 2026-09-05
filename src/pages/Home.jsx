
import {
  Globe,
  MailQuestion,
  MessageSquareOff,
  Search,
  LayoutTemplate,
  Target,
  Code2,
  ClipboardList,
  Layers,
  Sparkles,
  Rocket,
  Eye,
} from "lucide-react"

function Eyebrow({ children }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span className="h-px w-6 bg-[#183A63]" />
      <span className="text-xs font-semibold tracking-wide text-[#183A63]">
        {children}
      </span>
    </div>
  )
}

function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={
        "inline-flex items-center justify-center rounded-md bg-[#183A63] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#122c4c] " +
        className
      }
    >
      {children}
    </button>
  )
}

function Home({ setPage }) {
  const problemCards = [
    {
      icon: Globe,
      num: "01",
      title: "No website",
      body: "Too many businesses are still relying on social media alone, missing out on the credibility and reach a real website provides.",
    },
    {
      icon: MailQuestion,
      num: "02",
      title: "Difficult to find information",
      body: "The information customers need is either buried, spread across unrelated pages, or missing. Customers shouldn't have to search through your website just to get basic details.",
      highlight: true,
    },
    {
      icon: MessageSquareOff,
      num: "03",
      title: "Doesn't communicate",
      body: "Design can easily take priority over information that actually matters, leaving visitors confused about what the business does.",
    },
  ]

  const approach = [
    {
      num: "01",
      title: "Understand the business",
      body: "I start by understanding what your business does, who it serves, and what it needs the website to accomplish.",
    },
    {
      num: "02",
      title: "Build around the customer",
      body: "I consider what your customers are looking for, and the barriers they face, so the website is structured around real needs.",
    },
    {
      num: "03",
      title: "Design with purpose",
      body: "Design should support information, not compete with it. Every layout, spacing, and interaction choice serves the content.",
    },
  ]

  const process = [
    {
      icon: Search,
      num: "01",
      title: "Discovery",
      body: "We start by discussing your business, your customers, and what you need the website to accomplish.",
    },
    {
      icon: ClipboardList,
      num: "02",
      title: "Planning",
      body: "I organise the information and define the structure of the website before any design or development starts.",
    },
    {
      icon: LayoutTemplate,
      num: "03",
      title: "Design",
      body: "I turn the structure into a clear, effective design, keeping it simple, functional, and true to your brand.",
    },
    {
      icon: Code2,
      num: "04",
      title: "Development",
      body: "I build the solution for real use — responsive, fast, and reliable across every device your customers use.",
    },
    {
      icon: Layers,
      num: "05",
      title: "Review & Refinement",
      body: "We revisit the website together, capture your feedback, and refine what needs revisiting.",
    },
    {
      icon: Rocket,
      num: "06",
      title: "Launch",
      body: "Once everything is ready, I make the website live and hand over everything you need to keep it running smoothly.",
    },
  ]

  const whatMeans = [
    {
      icon: Target,
      title: "Business first",
      body: "I understand what your business needs to communicate, rather than forcing my own design ideas onto a project.",
    },
    {
      icon: Eye,
      title: "Customer focused",
      body: "I keep your customers front of mind — what they're looking for, and what helps them act.",
    },
    {
      icon: Sparkles,
      title: "Honest expertise",
      body: "I work simply, transparently, and focus on what serves your customers, not what looks impressive on the surface.",
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-20 pt-20 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
          Websites that communicate for your business.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-500">
          I build clear, functional websites around your business and your
          customers, making important information easy to find and helping
          people take the next step with confidence.
        </p>

        <div className="mt-7">
          <PrimaryButton onClick={() => setPage("about")}>
            Book a Discovery Call
          </PrimaryButton>
        </div>

        <p className="mt-4 text-xs text-gray-400">
          Built around your business, designed around your customers.
        </p>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Eyebrow>THE PROBLEM</Eyebrow>

        <h2 className="max-w-2xl text-2xl font-bold text-gray-900 sm:text-3xl">
          Your website shouldn't make your customers work for information.
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
          A website can look polished and still fail to do its most important
          job. Information can be scattered across different pages,
          difficult to find, incomplete, or missing altogether. When
          customers have to call, email, or send a message just to get basic
          information, the website is creating unnecessary work for both
          them and the business.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {problemCards.map(
            ({ icon: Icon, num, title, body, highlight }) => (
              <div
                key={num}
                className={
                  "rounded-lg border p-6 " +
                  (highlight
                    ? "border-[#183A63] bg-[#183A63] text-white"
                    : "border-gray-200 bg-white")
                }
              >
                <span
                  className={
                    "flex h-9 w-9 items-center justify-center rounded-full " +
                    (highlight ? "bg-white/15" : "bg-[#183A63]")
                  }
                >
                  <Icon size={16} className="text-white" />
                </span>

                <p
                  className={
                    "mt-4 text-xs font-semibold " +
                    (highlight ? "text-white/70" : "text-[#183A63]")
                  }
                >
                  {num}
                </p>

                <h3 className="mt-1 text-sm font-bold">
                  {title}
                </h3>

                <div
                  className={
                    "my-3 h-px w-8 " +
                    (highlight ? "bg-white/30" : "bg-gray-200")
                  }
                />

                <p
                  className={
                    "text-xs leading-relaxed " +
                    (highlight
                      ? "text-white/85"
                      : "text-gray-500")
                  }
                >
                  {body}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* My Approach */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Eyebrow>MY APPROACH</Eyebrow>

        <h2 className="max-w-2xl text-2xl font-bold text-gray-900 sm:text-3xl">
          The website starts with the business, not the design.
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
          Before deciding how a website should look, I need to understand
          what the business needs to communicate and what its customers need
          to know. Once that's clear, I structure the website, decide what
          information belongs where, and create an experience that helps
          people find what they need and take the right next step.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {approach.map((a) => (
            <div key={a.num}>
              <p className="text-sm font-semibold text-gray-900">
                {a.num}. {a.title}
              </p>

              <p className="mt-2 text-xs leading-relaxed text-gray-500">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Eyebrow>THE PROCESS</Eyebrow>

        <h2 className="max-w-2xl text-2xl font-bold text-gray-900 sm:text-3xl">
          A clear process from the first conversation to launch.
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
          You know your business. Before we turn that knowledge into a
          website that works for your customers, here's what the journey
          looks like, step by step.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
          {process.map(({ icon: Icon, num, title, body }) => (
            <div key={num}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#183A63]">
                <Icon size={16} className="text-white" />
              </span>

              <p className="mt-4 text-sm font-bold text-gray-900">
                {num} {title}
              </p>

              <p className="mt-2 text-xs leading-relaxed text-gray-500">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What That Means */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              A website should work for your business.
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
              I don't believe a website should exist simply because a
              business is expected to have one. It should communicate
              clearly, answer customers' questions, and help them take the
              right next step.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900">
              What that means
            </h3>

            <div className="mt-5 space-y-6">
              {whatMeans.map(({ title, body }, i) => (
                <div key={title}>
                  <p className="text-sm font-semibold text-gray-900">
                    {String(i + 1).padStart(2, "0")} {title}
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-gray-500">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Ready to talk about your website?
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm text-gray-500">
          Tell me about your business and what you need your website to
          accomplish — no pressure, just a conversation.
        </p>

        <div className="mt-6">
          <PrimaryButton>
            Book a Discovery Call
          </PrimaryButton>
        </div>
      </section>
    </>
  )
}

export default Home
