'use client';

import { useMemo, useState } from 'react';
import { models } from '@/data/models';

const paints = ['GT Silver', 'Guards Red', 'Jet Black Metallic', 'Oak Green'];
const wheels = ['Center-lock Satin Black', 'Forged Silver Classic', 'Bronze Track Spec'];
const interiors = ['Black Alcantara', 'Bordeaux Leather', 'Heritage Pepita'];

export default function DreamBuildPage() {
  const [modelSlug, setModelSlug] = useState(models[0].slug);
  const [paint, setPaint] = useState(paints[0]);
  const [wheel, setWheel] = useState(wheels[0]);
  const [interior, setInterior] = useState(interiors[0]);

  const summary = useMemo(() => {
    const model = models.find((m) => m.slug === modelSlug)!;
    return `${model.name} in ${paint} with ${wheel} wheels and ${interior} interior.`;
  }, [modelSlug, paint, wheel, interior]);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-semibold">Dream build configurator</h1>
      <p className="max-w-2xl text-zinc-400">Assemble your ideal Porsche spec and generate a clean showroom-style build summary.</p>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <section className="lux-card space-y-4 p-6">
          {[['Model', modelSlug, setModelSlug, models.map((m) => m.slug)], ['Paint', paint, setPaint, paints], ['Wheels', wheel, setWheel, wheels], ['Interior', interior, setInterior, interiors]].map(
            ([label, value, setter, options]) => (
              <label key={label as string} className="block space-y-2 text-sm">
                <span className="text-zinc-400">{label as string}</span>
                <select
                  value={value as string}
                  onChange={(e) => (setter as (value: string) => void)(e.target.value)}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3"
                >
                  {(options as string[]).map((option) => (
                    <option key={option} value={option}>
                      {label === 'Model'
                        ? models.find((model) => model.slug === option)?.name ?? option
                        : option}
                    </option>
                  ))}
                </select>
              </label>
            )
          )}
        </section>

        <aside className="lux-card flex flex-col justify-between p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Build summary</p>
            <p className="pt-4 text-xl leading-relaxed text-zinc-200">{summary}</p>
          </div>
          <button className="mt-6 rounded-full bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white">
            Save to Visual Garage
          </button>
        </aside>
      </div>
    </div>
  );
}
