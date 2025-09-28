import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="tobiloba" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          lagos, nigeria
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          freelance
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        a statistics grad diving headfirst into software development. What I
        enjoy most? Getting fully immersed in a problem until the solution
        clicks. When I'm not coding, you'll probably catch me gaming, swimming,
        or running… and if I'm not doing any of those, I'm probably ranting
        about Manchester United or wishing I was lost in a good book.
      </p>
    </header>
  )
}
