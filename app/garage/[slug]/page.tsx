import { notFound } from 'next/navigation';
import { getModelBySlug } from '@/data/models';

export default function ModelDetailPage({ params }: { params: { slug: string } }) {
  const model = getModelBySlug(params.slug);

  if (!model) notFound();

  return (
    <article className="space-y-8">
      <section className="lux-card overflow-hidden">
        <div className="relative h-80 md:h-[30rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={model.image} alt={model.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-8 left-8 space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-300">{model.era}</p>
            <h1 className="text-4xl font-semibold md:text-5xl">{model.name}</h1>
            <p className="text-zinc-300">{model.tagline}</p>
          </div>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {[
          ['Power', `${model.power} hp`],
          ['Torque', `${model.torque} lb-ft`],
          ['0-60 mph', `${model.zeroToSixty}s`],
          ['Top speed', `${model.topSpeed} mph`],
          ['Estimated price', model.price]
        ].map(([label, value]) => (
          <div key={label} className="lux-card p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{label}</p>
            <p className="pt-2 text-xl font-semibold">{value}</p>
          </div>
        ))}
      </section>
    </article>
  );
}
