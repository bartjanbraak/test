import Link from 'next/link';
import { models } from '@/data/models';
import ModelCard from '@/components/ModelCard';
import SectionTitle from '@/components/SectionTitle';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="lux-card relative overflow-hidden p-10 md:p-16">
        <div className="absolute inset-0 opacity-30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?auto=format&fit=crop&w=1800&q=80"
            alt="Porsche at dusk"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-300">Cinematic Porsche Curation</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Build your <span className="gradient-text">Visual Garage</span> with iconic Porsche silhouettes.
          </h1>
          <p className="max-w-2xl text-zinc-300">
            Explore model stories, compare specs, craft social captions and design your dream build in one luxurious digital studio.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link className="rounded-full bg-zinc-100 px-5 py-2 text-sm font-medium text-zinc-900" href="/garage">
              Enter Garage
            </Link>
            <Link className="rounded-full border border-zinc-600 px-5 py-2 text-sm text-zinc-200" href="/dream-build">
              Configure Dream Build
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          eyebrow="Featured Machines"
          title="The collection"
          copy="A focused lineup of performance moderns and heritage legends styled for immersive viewing."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {models.slice(0, 3).map((model) => (
            <ModelCard key={model.slug} model={model} />
          ))}
        </div>
      </section>
    </div>
  );
}
