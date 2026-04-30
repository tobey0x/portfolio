import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"

const workItems: Item[] = [
  {
    title: "Zedu Backend",
    description:
      "a scalable go backend service supporting real-time messaging, audio/video conferencing, file sharing, and push notifications",
    role: "backend developer",
    period: "nov 2024 - feb 2026",
    href: "https://https://zedu.chat/",
  },
]

const projectItems = [
  {
    title: "kroller",
    role: "creator",
    description:
      "a webcrawler and scrapper built with golang to understand the go concurrency model",
    href: "https://github.com/tobey0x/kroller",
  },
  {
    title: "wallet service api",
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
    title: "notification system",
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

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList title="work" items={workItems} />
      <BlogSection />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <LinksSection />
    </>
  )
}
