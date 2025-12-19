"use client"

// app/page.tsx
import { useState } from "react"
import type { ReactNode } from "react"

export default function Page() {
  const [showAllFeatures, setShowAllFeatures] = useState(false)
  
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.10),transparent_55%)]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-[#cfe0ff] bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6 lg:px-20 lg:py-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Go to top">
            <img src="/images/logos/Goverium_brand.jpg" alt="Goverium" className="h-12 w-auto lg:h-14" />
          </a>

          <nav className="hidden flex-1 justify-center gap-12 lg:flex">
            <NavLink href="#product">Product</NavLink>
            <NavLink href="#mission">Mission</NavLink>
            <NavLink href="#team">Team</NavLink>
          </nav>

          <div className="flex gap-3">
            <Button variant="outline" size="lg">
              Client Login
            </Button>
            <Button variant="primary" size="lg">
              Get Access
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="px-4 py-10 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[1300px]">
          <div className="relative overflow-hidden rounded-2xl border border-[#cfe0ff] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.10)] lg:rounded-[3rem] lg:p-16">
            {/* Background image + overlay */}
            <div
              className="absolute inset-0 opacity-90"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.78), rgba(245,248,255,0.92)), url("/images/backgrounds/AdobeStock_416872788.jpeg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.06)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

            <div className="relative z-10 flex min-h-[560px] flex-col items-center justify-center gap-8 text-center">
              <div className="animate-fade-in-up inline-flex items-center justify-center gap-2 rounded-full border border-[#cfe0ff] bg-white/70 px-3 py-1 text-slate-700 backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#2563eb]" />
                <span className="text-xs font-semibold uppercase tracking-wide text-[#2563eb]">
                  Pre-seed Funding Open
                </span>
              </div>

              <div className="max-w-[820px] space-y-4">
                <h1 className="text-5xl font-bold leading-[1.1] tracking-[-0.03em] lg:text-7xl">
                  Decision Intelligence <br />
                  <span className="bg-gradient-to-r from-[#2563eb] to-sky-400 bg-clip-text text-transparent">
                    for the Modern State
                  </span>
                </h1>

                <p className="text-sm font-semibold tracking-wide text-slate-700/90 lg:text-base">
                  Built for city executives, policy leaders, and public-sector teams.
                </p>

                <p className="mx-auto max-w-[640px] text-lg font-medium leading-relaxed text-slate-600 lg:text-xl">
                  We unify data into actionable policy insights. Built for clarity, speed, and trust
                  in an uncertain world.
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <Button variant="primary" size="lg">
                  Pitch Deck
                </Button>
                <Button variant="surface" size="lg">
                  View Product Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-[#cfe0ff] bg-[#eef4ff] py-8">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-6 px-4">
          <p className="text-center text-sm font-medium text-slate-600">Built on principles cities actually care about</p>

          <div className="flex flex-nowrap justify-center gap-6 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 lg:gap-12">
            <TrustItem icon={<ShieldCheck className="h-5 w-5" />} label="Secure by Design" />
            <TrustItem icon={<Lock className="h-5 w-5" />} label="Audit-Ready Architecture" />
            <TrustItem icon={<Gavel className="h-5 w-5" />} label="Privacy-First Data Handling" />
            <TrustItem icon={<Policy className="h-5 w-5" />} label="Enterprise-Grade Reliability" />
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section id="mission" className="px-4 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-base font-semibold uppercase tracking-wide text-[#2563eb]">Why Us?</p>
              <p className="mb-6 text-xl font-semibold text-slate-700">
                Cities already run meetings.<br />
                We help them understand decisions.
              </p>
            </div>
            <p className="mb-6 text-lg leading-relaxed text-slate-700 font-semibold">
              Most cities are compliant. Very few are intelligible.
            </p>

            <div className="space-y-6 pt-4">
              <div className="space-y-4">
                <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                  <div className="flex gap-3">
                    <span className="text-xl">❌</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Information Without Insight</h4>
                      <p className="text-sm text-slate-600">
                        Documents exist. Context doesn't.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                  <div className="flex gap-3">
                    <span className="text-xl">✅</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Decision Intelligence Layer</h4>
                      <ul className="text-sm text-slate-600 space-y-1 ml-4">
                        <li>• Connect decisions</li>
                        <li>• Track issues over time</li>
                        <li>• Surface risk early</li>
                        <li>• Explain outcomes clearly</li>
                      </ul>
                      <p className="text-sm font-semibold text-slate-700 mt-3">One system. One source of understanding.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#cfe0ff] bg-white shadow-2xl shadow-[#2563eb]/10">
            <div
              className="absolute inset-0 opacity-80"
              style={{
                backgroundImage:
                  'url("/images/backgrounds/AdobeStock_636618298.jpeg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex gap-4">
              <MetricPill label="" value="$150k vs $300k typical" badge="" />
              <div className="hidden flex-1 sm:block">
                <MetricPill label="System Replacement" value="0% required" sub="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="product" className="bg-[#eef4ff] py-24">
        <div className="mx-auto max-w-[1300px] px-4 lg:px-12">
          <div className="mx-auto flex max-w-[780px] flex-col items-center gap-4 text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-[#2563eb]">Platform Capabilities</span>
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Everything You Need. Nothing You Don't.</h2>
            <p className="text-lg text-slate-600">
              Built for how city governments actually work—from agenda creation to long-term decision tracking.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<Cube className="h-8 w-8" />}
              title="Meeting Management"
              desc="Full meeting lifecycle automation: agenda creation, live streaming (YouTube integrated), notifications, and interactive clip generation."
            />
            <FeatureCard
              icon={<Atom className="h-8 w-8" />}
              title="AI Assistant"
              desc="Intelligent bot for clerk and staff—automates routine tasks, surfaces relevant past decisions, and keeps meeting records organized."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Enterprise Support"
              desc="Security-compliant hosting, hardware integration options, and dedicated local support—24/7 when you need it."
            />
          </div>

          {/* See Everything Included Button */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="group flex items-center gap-2 rounded-full border-2 border-[#2563eb] bg-white px-6 py-3 text-sm font-semibold text-[#2563eb] transition-all hover:bg-[#2563eb] hover:text-white"
            >
              {showAllFeatures ? "Show Less" : "See Everything Included"}
              <svg
                className={`h-4 w-4 transition-transform ${showAllFeatures ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Expandable Additional Features */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              showAllFeatures ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Meeting Management Additional Features */}
              <FeatureCard
                icon={<Cube className="h-8 w-8" />}
                title="Agenda Management"
                desc="Create, edit, and publish agendas with drag-and-drop simplicity. Template support for recurring meetings."
              />
              <FeatureCard
                icon={<Cube className="h-8 w-8" />}
                title="HD Live Streaming"
                desc="Broadcast meetings in real-time with YouTube integration. Automatic archiving and on-demand playback."
              />
              <FeatureCard
                icon={<Cube className="h-8 w-8" />}
                title="Notification Management"
                desc="Automated alerts for stakeholders, residents, and staff—email, SMS, and push notifications."
              />
              
              {/* AI Assistant Additional Features */}
              <FeatureCard
                icon={<Atom className="h-8 w-8" />}
                title="Interactive Agenda to Clip"
                desc="AI-powered clip generation from meetings—turn discussions into shareable video segments instantly."
              />
              <FeatureCard
                icon={<Atom className="h-8 w-8" />}
                title="Intelligent AI Bot"
                desc="Natural language search across all meeting history. Get instant answers to policy questions."
              />
              
              {/* Enterprise Support Additional Features */}
              <FeatureCard
                icon={<Shield className="h-8 w-8" />}
                title="Hardware Integration"
                desc="Seamless connection with existing AV systems, cameras, and recording equipment."
              />
              <FeatureCard
                icon={<Shield className="h-8 w-8" />}
                title="Local Personal 24x7 Support"
                desc="Dedicated account manager and round-the-clock technical support when you need it most."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Structural Impact */}
      <section className="relative overflow-hidden bg-white px-4 py-24 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_40%)]" />
        <div className="relative mx-auto flex max-w-[1300px] flex-col items-start gap-16 lg:flex-row">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold leading-tight lg:text-4xl">
              Structural Impact <br />
              for Public Servants
            </h2>
            <p className="text-lg text-slate-600">
              Goverium provides the structural layer governments need to reason about decisions — not just record them.
            </p>
            <a href="#" className="inline-flex items-center gap-2 font-bold text-[#2563eb] hover:underline">
              Explore the architecture <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex w-full flex-1 flex-col gap-4 lg:gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">— Decision Traceability</h3>
              <p className="text-base text-slate-600">Decisions remain explainable over time</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">— Cross-Meeting Intelligence</h3>
              <p className="text-base text-slate-600">Issues tracked across agendas, votes, and outcomes</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">— Data Control</h3>
              <p className="text-base text-slate-600">Agencies retain full data ownership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      {/* <section className="border-t border-[#cfe0ff] px-4 py-20 lg:px-12">
        <div className="mx-auto max-w-[1100px]">
          <div className="relative overflow-hidden rounded-3xl border border-[#cfe0ff] bg-gradient-to-br from-white to-[#eef4ff] p-8 lg:p-12">
            <div className="pointer-events-none absolute right-6 top-6 opacity-10">
              <TrendingUp className="h-24 w-24" />
            </div>

            <div className="relative space-y-8">
              <div className="space-y-2">
                <span className="w-fit rounded-full border border-[#cfe0ff] bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-700">
                  Market Insight
                </span>
                <h2 className="text-2xl font-bold lg:text-3xl">The GovTech Revolution is Here</h2>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-lg font-bold">Expanding TAM</h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Global government IT spending is projected to reach $600B by 2025, with a massive shift towards
                    cloud-native, AI-first solutions.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold">Legacy Retirement</h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Over 70% of federal agencies are currently mandated to modernize legacy infrastructure within the
                    next 3 years.
                  </p>
                </div>
              </div>

              <div className="h-px w-full bg-[#cfe0ff]" />

              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="font-medium">Join us in building the operating system for the modern state.</p>
                <button className="rounded-full bg-[#2563eb] px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f8ff]">
                  Access Investor Portal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Team */}
      <section id="team" className="border-t border-[#cfe0ff] bg-white px-4 py-24 lg:px-12">
        <div className="mx-auto max-w-[1300px]">
          <div className="mx-auto flex max-w-[780px] flex-col items-center gap-4 text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-[#2563eb]">Team</span>
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Built by operators, not observers</h2>
            <p className="text-lg text-slate-600">
              We combine public-sector leadership with modern engineering to deliver software that earns trust.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <TeamCard
              icon={<Policy className="h-7 w-7" />}
              title="Policy & Delivery"
              desc="Teams experienced in procurement, compliance, and real-world implementation."
            />
            <TeamCard
              icon={<ShieldCheck className="h-7 w-7" />}
              title="Security-First"
              desc="Auditability, least privilege, and deployment options aligned with sovereign requirements."
            />
            <TeamCard
              icon={<Cube className="h-7 w-7" />}
              title="Product Engineering"
              desc="Integrates with legacy systems while delivering a clean, modern decision workflow."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-24 lg:px-12">
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-8 text-center">
          <h2 className="text-4xl font-bold leading-[1.1] tracking-[-0.02em] lg:text-6xl">
            Ready to shape the <br /> future of governance?
          </h2>
          <p className="max-w-[600px] text-lg text-slate-600">
            We're working with a small number of government teams to explore how decision intelligence can improve public governance.
          </p>

          <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="xl" className="min-w-[200px]">
              Contact Us
            </Button>
          </div>

          <p className="text-sm text-slate-500">Available to public-sector partners and research collaborators.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#cfe0ff] bg-[#eef4ff] px-4 py-12 lg:px-12">
        <div className="mx-auto max-w-[1300px]">
          <div className="flex flex-col justify-between gap-12 lg:flex-row">
            <div className="max-w-xs space-y-4">
              <div className="flex items-center gap-2">
                <img src="/images/logos/Goverium_brand.jpg" alt="Goverium" className="h-8 w-auto" />
              </div>
              <p className="text-sm text-slate-600">
                Decision Intelligence for the Modern State. Built in San Ramon, CA.
              </p>
              <div className="flex gap-4 pt-2 text-slate-600">
                <a href="#" className="transition-colors hover:text-[#2563eb]" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="#" className="transition-colors hover:text-[#2563eb]" aria-label="Website">
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
              <FooterCol title="Platform" links={["Synthesis", "Simulation", "Security", "Integrations"]} />
              <FooterCol title="Company" links={["Mission", "Careers", "Blog", "Contact"]} />
              <FooterCol title="Legal" links={["Privacy Policy", "Terms of Service", "Security Report"]} />
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-[#cfe0ff] pt-8 text-xs text-slate-500">
            <p>© 2025 Goverium Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Small local CSS for the hero badge animation */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up {
            animation: none;
          }
        }
      `}</style>
    </main>
  )
}

/* ----------------------------- tiny components ---------------------------- */

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="rounded-md px-2 py-1 text-lg font-medium text-slate-600 transition-colors hover:text-[#2563eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f8ff]"
    >
      {children}
    </a>
  )
}

function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  children: ReactNode
  variant?: "primary" | "outline" | "surface"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f8ff] active:translate-y-px"
  const sizes: Record<string, string> = {
    sm: "h-9 px-4 text-sm",
    md: "h-10 px-6 text-sm",
    lg: "h-12 px-8 text-base",
    xl: "h-14 px-8 text-lg",
  }
  const variants: Record<string, string> = {
    primary:
      "bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-[0_16px_40px_rgba(37,99,235,0.22)] hover:shadow-[0_22px_60px_rgba(37,99,235,0.30)]",
    outline:
      "border border-slate-300 bg-white/60 text-slate-800 hover:bg-white",
    surface:
      "border border-[#cfe0ff] bg-white/70 text-slate-800 hover:bg-white backdrop-blur-md",
  }
  return (
    <button type="button" className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}

function TrustItem({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-lg font-bold text-slate-800">
      <span className="text-[#2563eb]">{icon}</span>
      {label}
    </div>
  )
}

function InfoCard({
  tone,
  title,
  desc,
}: {
  tone: "good" | "bad"
  title: string
  desc: string
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-[#cfe0ff] bg-white p-4 transition-colors hover:border-[#93c5fd]">
      <div
        className={[
          "h-fit rounded-full p-2",
          tone === "bad" ? "bg-red-500/10 text-red-500" : "bg-[#2563eb]/10 text-[#2563eb]",
        ].join(" ")}
      >
        {tone === "bad" ? <X className="h-5 w-5" /> : <Check className="h-5 w-5" />}
      </div>
      <div>
        <h4 className="mb-1 font-bold">{title}</h4>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  )
}

function MetricPill({
  label,
  value,
  badge,
  sub,
}: {
  label: string
  value: string
  badge?: string
  sub?: string
}) {
  return (
    <div className="flex-1 rounded-xl border border-[#cfe0ff] bg-white/80 p-4 backdrop-blur">
      <div className="mb-1 text-xs uppercase text-slate-500">{label}</div>
      <div className="flex items-end gap-2 text-2xl font-bold">
        <span>{value}</span>
        {badge ? (
          <span className="rounded-full bg-[#2563eb]/10 px-2 py-0.5 text-xs text-[#2563eb]">{badge}</span>
        ) : null}
        {sub ? <span className="text-sm font-normal text-slate-500">{sub}</span> : null}
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-[#cfe0ff] bg-white p-8 transition-all duration-300 hover:bg-[#f5f9ff]">
      <div className="absolute right-0 top-0 -mr-8 -mt-8 h-32 w-32 rounded-bl-[4rem] bg-[#2563eb]/5 transition-all group-hover:bg-[#2563eb]/10" />
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#2563eb] transition-transform group-hover:scale-110">
        {icon}
      </div>
      <div className="relative z-10 mt-6 space-y-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="leading-relaxed text-slate-600">{desc}</p>
      </div>
    </div>
  )
}

function StatCard({ big, small, bigAccent }: { big: string; small: string; bigAccent?: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-3xl border border-[#cfe0ff] bg-white p-6 text-center transition-colors hover:border-[#93c5fd]">
      <div className={`text-4xl font-black lg:text-5xl ${bigAccent ? "text-[#2563eb]" : "text-slate-900"}`}>
        {big}
      </div>
      <div className="text-sm text-slate-600">{small}</div>
    </div>
  )
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="space-y-4">
      <h4 className="font-bold">{title}</h4>
      <div className="space-y-2">
        {links.map((t) => (
          <a key={t} href="#" className="block text-sm text-slate-600 transition-colors hover:text-[#2563eb]">
            {t}
          </a>
        ))}
      </div>
    </div>
  )
}

function TeamCard({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-[2rem] border border-[#cfe0ff] bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#2563eb]">
        {icon}
      </div>
      <div className="mt-6 space-y-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="leading-relaxed text-slate-600">{desc}</p>
      </div>
    </div>
  )
}

/* ---------------------------------- icons --------------------------------- */

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
      <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" />
    </svg>
  )
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
function X({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}
function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  )
}
function ShieldCheck({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2 20 6v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  )
}
function Lock({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 11V8a5 5 0 0 1 10 0v3" />
      <path d="M6 11h12v10H6z" />
    </svg>
  )
}
function Gavel({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 13 8 7l2-2 6 6-2 2Z" />
      <path d="M16 11 20 7l-2-2-4 4" />
      <path d="M2 22l8-8" />
      <path d="M7 17l2 2" />
    </svg>
  )
}
function Policy({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2h9l3 3v17H6z" />
      <path d="M9 9h6M9 13h6M9 17h4" />
    </svg>
  )
}
function Cube({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73Z" />
      <path d="M3.3 7 12 12l8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}
function Atom({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 12c3 0 6-1 8-3s1-5-1-7-5-1-7 1-3 5-3 8" />
      <path d="M12 12c0 3 1 6 3 8s5 1 7-1 1-5-1-7-5-3-9-3" />
      <path d="M12 12c-3 0-6 1-8 3s-1 5 1 7 5 1 7-1 3-5 3-8" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  )
}
function Shield({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2 20 6v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4Z" />
    </svg>
  )
}
function TrendingUp({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 8h6v6" />
    </svg>
  )
}
function Mail({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16v16H4z" />
      <path d="m4 6 8 7 8-7" />
    </svg>
  )
}
function Globe({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2c3 3 4 7 4 10s-1 7-4 10c-3-3-4-7-4-10S9 5 12 2Z" />
    </svg>
  )
}
