import Image from "next/image";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "JoziGlobal s.r.o.",
    legalName: "JoziGlobal s.r.o.",
    description:
      "JoziGlobal s.r.o. is a Slovakia-based platform engineering company that builds and operates custom cloud platforms for software companies on AWS and Kubernetes.",
    url: "https://joziglobal.net",
    logo: "https://joziglobal.net/apple-touch-icon.png",
    email: "jozef.svk@protonmail.com",
    taxID: "52146863",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Južná trieda 4B",
      addressLocality: "Košice",
      addressCountry: "SK",
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Cloud Platform Engineering",
      "AWS",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "Service Mesh",
      "Istio",
      "GitOps",
      "ArgoCD",
      "Internal Developer Platforms",
      "Site Reliability Engineering",
    ],
    offers: [
      {
        "@type": "Offer",
        name: "AWS Cloud Infrastructure",
        description:
          "Designing, automating and operating production-grade AWS environments with security, cost and compliance in mind.",
      },
      {
        "@type": "Offer",
        name: "Kubernetes Platform Development",
        description:
          "Building managed Kubernetes platforms (EKS and self-managed) with multi-tenancy, autoscaling and day-2 operations baked in.",
      },
      {
        "@type": "Offer",
        name: "Infrastructure as Code with Terraform",
        description:
          "Modular, reusable Terraform foundations with versioned modules, policy-as-code and drift-free pipelines.",
      },
      {
        "@type": "Offer",
        name: "Automation with Ansible",
        description:
          "Idempotent automation for VMs, edge nodes and platform components with reusable Ansible roles and collections.",
      },
      {
        "@type": "Offer",
        name: "Service Mesh Implementation",
        description:
          "Istio and Linkerd deployments for traffic shaping, mTLS, multi-cluster connectivity and progressive delivery.",
      },
      {
        "@type": "Offer",
        name: "CI/CD and GitOps Workflows",
        description:
          "ArgoCD, Flux and GitHub Actions pipelines that turn Git into the single source of truth for builds, releases and infrastructure.",
      },
      {
        "@type": "Offer",
        name: "Internal Developer Platforms",
        description:
          "Self-service developer portals built on Backstage and Crossplane, paved roads, golden paths and templated services.",
      },
      {
        "@type": "Offer",
        name: "Platform Reliability and Operations",
        description:
          "SRE practices, SLOs, on-call rotations, incident response and observability with Prometheus, Grafana and OpenTelemetry.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#050810]">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is required as raw script content
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-[#050810]/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-zinc-900 dark:text-white">
            Jozi<span className="text-cyan-500">Global</span>
            <span className="text-zinc-400 dark:text-zinc-600 font-normal text-base ml-1">
              .net
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a
              href="#services"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#technologies"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Technologies
            </a>
            <a
              href="#approach"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Approach
            </a>
            <a
              href="#contact"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.08] bg-[radial-gradient(circle_at_30%_20%,#06b6d4,transparent_50%),radial-gradient(circle_at_80%_70%,#3b82f6,transparent_45%)]" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 text-xs text-zinc-600 dark:text-zinc-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Platform engineering · AWS · Kubernetes · Slovakia & EU
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight mb-6">
                Custom Cloud Platforms,
                <br />
                <span className="text-cyan-500">Engineered to Last.</span>
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                JoziGlobal s.r.o. designs, builds and operates modern cloud
                platforms for software companies. We help engineering teams turn
                raw AWS and Kubernetes into reliable, automated, self-service
                infrastructure that developers actually enjoy using.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors text-center"
                >
                  Start a conversation
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-lg font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-center"
                >
                  Explore services
                </a>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=900&fit=crop"
                alt="Cloud infrastructure and data centers"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About / Intro */}
      <section className="py-16 px-6 border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
            Who we are
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            JoziGlobal s.r.o. is a Slovakia-based platform engineering boutique
            focused on a single discipline:{" "}
            <span className="text-zinc-900 dark:text-white font-medium">
              building and running cloud platforms that scale with your product
            </span>
            . We work with software companies — from early-stage startups
            scaling out of a single VPS to established teams operating
            multi-region Kubernetes fleets — and turn their infrastructure into
            a strategic asset rather than an ongoing source of pain.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              What we do
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              We offer a focused catalogue of platform engineering services.
              Engagements range from a single-purpose consulting sprint to
              long-term, embedded operations of your platform — pick what fits,
              mix what you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AWS Cloud Infrastructure */}
            <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 hover:border-cyan-500/60 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/40 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-cyan-600 dark:text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h11a5 5 0 100-10 7 7 0 00-13.6 2A4 4 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                AWS Cloud Infrastructure
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Production-grade AWS landing zones with multi-account
                architecture, hardened networking, IAM, secrets management and
                cost guardrails. We design environments that pass security
                reviews and stay affordable at scale.
              </p>
            </article>

            {/* Kubernetes Platform Development */}
            <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 hover:border-cyan-500/60 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2l9 5v10l-9 5-9-5V7l9-5zM3 7l9 5 9-5M12 12v10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                Kubernetes Platform Development
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We build managed Kubernetes platforms on EKS or self-hosted
                clusters with autoscaling, multi-tenant namespaces, ingress,
                certificate automation, image policy and a clear day-2
                operations playbook your team can own.
              </p>
            </article>

            {/* Terraform */}
            <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 hover:border-cyan-500/60 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/40 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-violet-600 dark:text-violet-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                Infrastructure as Code with Terraform
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Modular, reusable Terraform foundations with versioned modules,
                remote state, OpenTofu compatibility and policy checks.
                Drift-free pipelines, code-reviewed infrastructure, and a clear
                story for promoting changes between environments.
              </p>
            </article>

            {/* Ansible */}
            <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 hover:border-cyan-500/60 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/40 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-rose-600 dark:text-rose-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                Automation with Ansible
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Reusable Ansible roles and collections for VMs, edge nodes,
                bare-metal and platform components. Idempotent automation,
                molecule-tested roles and clean inventories so your runbooks
                survive contact with reality.
              </p>
            </article>

            {/* Service Mesh */}
            <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 hover:border-cyan-500/60 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                Service Mesh Implementation
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Istio and Linkerd deployments for traffic shaping, mTLS by
                default, observability, multi-cluster connectivity and
                progressive delivery patterns. Pragmatic mesh — only the
                features you actually need, nothing more.
              </p>
            </article>

            {/* CI/CD & GitOps */}
            <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 hover:border-cyan-500/60 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-amber-600 dark:text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                CI/CD and GitOps Workflows
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                ArgoCD, Flux and GitHub Actions pipelines that make Git the
                single source of truth for builds, releases and infrastructure.
                Pull-request driven deployments, signed images, supply-chain
                checks and clear rollbacks.
              </p>
            </article>

            {/* Internal Developer Platforms */}
            <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 hover:border-cyan-500/60 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                Internal Developer Platforms
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Self-service platforms built on Backstage, Crossplane and
                Kubernetes operators. Paved roads, golden-path service
                templates, scorecards and a developer portal that turns
                infrastructure into a product your engineers consume.
              </p>
            </article>

            {/* Platform Reliability */}
            <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 hover:border-cyan-500/60 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-fuchsia-100 dark:bg-fuchsia-900/40 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M12 2a10 10 0 100 20 10 10 0 000-20z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                Platform Reliability & Operations
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                SRE engagements with SLOs, error budgets, on-call rotations,
                incident response and structured postmortems. Observability with
                Prometheus, Grafana, Loki and OpenTelemetry — so you see
                problems before your customers do.
              </p>
            </article>

            {/* Cloud Migration & Modernisation */}
            <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 hover:border-cyan-500/60 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/40 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-teal-600 dark:text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                Cloud Migration & Modernisation
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Migrating workloads from on-prem, legacy VPS or older PaaS
                providers into a modern AWS or Kubernetes-based stack. We plan
                in stages, keep the lights on during the move, and leave you
                with infrastructure your team can grow into.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section
        id="technologies"
        className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/40 border-y border-zinc-200 dark:border-zinc-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Technologies we use every day
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Mature, battle-tested tools — picked because they work, not
              because they trend.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "AWS",
              "Kubernetes",
              "Terraform",
              "Ansible",
              "Istio",
              "Linkerd",
              "ArgoCD",
              "Flux",
              "Helm",
              "Prometheus",
              "Grafana",
              "GitHub Actions",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-6 py-5 text-center font-medium text-zinc-800 dark:text-zinc-200 hover:border-cyan-500/60 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              How we work
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Small team, deep involvement, no hand-offs to junior staff.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-cyan-500 font-mono text-sm mb-3">01</div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                Discover
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We start with your product, your team and your constraints — not
                a generic reference architecture. Goals, traffic patterns,
                compliance, budget and on-call reality all feed the design.
              </p>
            </div>
            <div>
              <div className="text-cyan-500 font-mono text-sm mb-3">02</div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                Build
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Everything as code, reviewed in pull requests, deployed through
                GitOps. We aim for a platform you could understand from a fresh
                checkout — no magical hand-built clusters.
              </p>
            </div>
            <div>
              <div className="text-cyan-500 font-mono text-sm mb-3">03</div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                Operate & hand over
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We can stay on for long-term operations, or we transfer
                ownership cleanly to your team with documentation, runbooks and
                pairing sessions until they are confident.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/40 border-y border-zinc-200 dark:border-zinc-800"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Let's design your platform
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Tell us about your product and the infrastructure behind it. We
            usually reply within two business days.
          </p>
          <a
            href="mailto:jozef.svk@protonmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 mt-12 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            jozef.svk@protonmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
          <p className="mb-2">
            <span className="font-bold text-zinc-900 dark:text-white">
              Jozi<span className="text-cyan-500">Global</span> s.r.o.
            </span>{" "}
            — Custom Cloud Platform Development
          </p>
          <p className="text-sm mb-4">
            AWS · Kubernetes · Terraform · Ansible · Service Mesh · GitOps
          </p>
          <p className="text-xs text-zinc-500">
            © 2026 JoziGlobal s.r.o. · IČO 52146863 · Južná trieda 4B, Košice,
            Slovakia
          </p>
        </div>
      </footer>
    </div>
  );
}
