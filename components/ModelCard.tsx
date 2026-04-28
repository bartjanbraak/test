import Link from 'next/link';
import type { PorscheModel } from '@/data/models';

export default function ModelCard({ model }: { model: PorscheModel }) {
  return (
    <Link href={`/garage/${model.slug}`} className="group block">
      <article className="lux-card overflow-hidden transition duration-500 hover:-translate-y-1 hover:border-zinc-600 hover:shadow-glow">
        <div className="relative h-64 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={model.image}
            alt={model.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        </div>
        <div className="space-y-2 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{model.era}</p>
          <h3 className="text-2xl font-semibold text-zinc-100">{model.name}</h3>
          <p className="line-clamp-2 text-sm text-zinc-400">{model.tagline}</p>
          <div className="flex items-center justify-between pt-2 text-sm text-zinc-300">
            <span>{model.power} hp</span>
            <span>0-60 {model.zeroToSixty}s</span>
            <span>{model.topSpeed} mph</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
