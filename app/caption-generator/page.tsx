'use client';

import { useMemo, useState } from 'react';
import { models } from '@/data/models';

const moods = ['Cinematic', 'Aggressive', 'Minimal', 'Collector'];

export default function CaptionGeneratorPage() {
  const [slug, setSlug] = useState(models[0].slug);
  const [mood, setMood] = useState(moods[0]);

  const caption = useMemo(() => {
    const model = models.find((m) => m.slug === slug)!;
    const lines: Record<string, string> = {
      Cinematic: `${model.name} under midnight light. Steel, speed, and silence. #Porsche #VisualGarage`,
      Aggressive: `${model.name}: ${model.power}hp of unapologetic intent. Built for apexes. #TrackWeapon`,
      Minimal: `${model.name}. Pure form. Pure focus. #Porsche`,
      Collector: `${model.name} in its finest hour — timeless proportions and analog emotion. #GarageGoals`
    };
    return lines[mood];
  }, [slug, mood]);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-semibold">Instagram caption generator</h1>
      <p className="max-w-2xl text-zinc-400">Create polished social captions that match your Porsche post aesthetic.</p>

      <div className="lux-card grid gap-4 p-6 md:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="text-zinc-400">Model</span>
          <select value={slug} onChange={(e) => setSlug(e.target.value)} className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3">
            {models.map((model) => (
              <option key={model.slug} value={model.slug}>
                {model.name}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-sm">
          <span className="text-zinc-400">Mood</span>
          <select value={mood} onChange={(e) => setMood(e.target.value)} className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3">
            {moods.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <div className="md:col-span-2 rounded-2xl border border-zinc-700 bg-zinc-950 p-5 text-lg text-zinc-200">{caption}</div>
      </div>
    </div>
  );
}
