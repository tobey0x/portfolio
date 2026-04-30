import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "kroller",
    description: "a simplified webcrawler",
    role: "creator",
    period: "sept 2025",
    achievements: [
      "working with goroutines and channels to achieve concurrency",
    ],
    technologies: ["go"],
    href: "https://github.com/tobey0x/kroller",
  },
  {
    title: "kolo",
    description:
      "a backend wallet service that allows users to deposit money via paystack, manage wallet balances, view transaction history, and transfer funds to other users.",
    role: "creator",
    period: "2025",
    achievements: [
      "integrated paystack payment gateway with webhook signature verification using hmac-sha512",
      "implemented dual authentication — google oauth (jwt) and permission-scoped api keys",
      "built secure fund transfer system with atomic database transactions to ensure balance integrity",
      "designed a rate-limited, role-based api key system supporting up to 5 active keys per user with rollover support",
    ],
    technologies: [
      "go",
      "postgresql",
      "paystack",
      "google oauth",
      "jwt",
      "swagger",
    ],
    href: "https://github.com/tobey0x/HNGi13-8",
  },
  {
    title: "agogo",
    description:
      "a microservices-based notification platform supporting email and push notifications with async processing, message queuing, and jwt authentication.",
    role: "contributor",
    period: "2025",
    achievements: [
      "built and deployed the api gateway in go — handling authentication, rate limiting, and request routing across all services",
      "orchestrated the full multi-service architecture using docker compose with rabbitmq for async task queuing and redis for session caching",
      "integrated firebase fcm for push notifications and smtp for email delivery across independent python and node.js services",
      "managed ci/cd and devops setup including deployment to railway",
    ],
    technologies: [
      "go",
      "node.js",
      "python",
      "postgresql",
      "rabbitmq",
      "redis",
      "docker",
      "firebase",
    ],
    href: "https://github.com/tobey0x/notification-system",
  },
  {
    title: "lagbaja",
    description:
      "an a2a (agent-to-agent) compliant backend service that generates study flashcards from pdf documents and plain text using google gemini ai.",
    role: "creator",
    period: "2025",
    achievements: [
      "implemented the full a2a protocol spec with json-rpc 2.0, supporting blocking task execution and structured artifact responses",
      "built a flexible pdf ingestion pipeline supporting both url-based downloads and direct file uploads",
      "integrated google gemini ai for intelligent flashcard generation with topic categorisation",
      "wrote comprehensive test coverage for handlers and services",
    ],
    technologies: ["go", "google gemini", "a2a protocol", "json-rpc 2.0"],
    href: "https://github.com/tobey0x/lagbaja",
  },
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
        here are some of the projects i&apos;ve worked on while learning and
        exploring new technologies along the way.
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Some of the projects I've worked on.",
  openGraph: {
    images: [
      {
        url: "https://tobiloba.xyz/og/home?title=projects",
      },
    ],
  },
}
