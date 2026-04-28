import SectionTitle from '@/components/SectionTitle';
import { models } from '@/data/models';

export default function ComparePage() {
  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="Comparison Lab"
        title="Model comparison"
        copy="Benchmark your shortlist side-by-side to decide which machine best matches your driving intent."
      />
      <div className="overflow-x-auto rounded-3xl border border-zinc-800">
        <table className="min-w-full bg-black/30 text-left">
          <thead className="border-b border-zinc-800 bg-zinc-900/80 text-xs uppercase tracking-[0.2em] text-zinc-400">
            <tr>
              <th className="px-5 py-4">Model</th>
              <th className="px-5 py-4">Power</th>
              <th className="px-5 py-4">Torque</th>
              <th className="px-5 py-4">0-60</th>
              <th className="px-5 py-4">Top speed</th>
              <th className="px-5 py-4">Drive</th>
              <th className="px-5 py-4">Price</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model) => (
              <tr key={model.slug} className="border-b border-zinc-800/70 text-sm hover:bg-zinc-900/60">
                <td className="px-5 py-4 font-medium text-zinc-100">{model.name}</td>
                <td className="px-5 py-4 text-zinc-300">{model.power} hp</td>
                <td className="px-5 py-4 text-zinc-300">{model.torque} lb-ft</td>
                <td className="px-5 py-4 text-zinc-300">{model.zeroToSixty}s</td>
                <td className="px-5 py-4 text-zinc-300">{model.topSpeed} mph</td>
                <td className="px-5 py-4 text-zinc-300">{model.drivetrain}</td>
                <td className="px-5 py-4 text-zinc-300">{model.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
