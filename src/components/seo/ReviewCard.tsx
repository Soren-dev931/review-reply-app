export function ReviewCard({
  stars,
  review,
  response,
}: {
  stars: number
  review: string
  response: string
}) {
  return (
    <div className="card overflow-hidden">
      <div className="bg-navy-50 p-5 border-b border-navy-100">
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`text-lg ${i < stars ? 'text-yellow-400' : 'text-navy-200'}`}>
              ★
            </span>
          ))}
        </div>
        <p className="text-navy-700 text-sm leading-relaxed italic">&ldquo;{review}&rdquo;</p>
      </div>
      <div className="bg-emerald-50 p-5">
        <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-2">
          Response
        </p>
        <p className="text-navy-800 text-sm leading-relaxed">{response}</p>
      </div>
    </div>
  )
}

export function CTAButton({ href = '/#demo' }: { href?: string }) {
  return (
    <a href={href} className="btn-primary inline-block text-center">
      Try Free — Generate a Response
    </a>
  )
}

export function PageHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
          {title}
        </h1>
        <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-8">
          <CTAButton />
        </div>
      </div>
    </section>
  )
}
