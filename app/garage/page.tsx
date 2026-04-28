import ModelCard from '@/components/ModelCard';
import SectionTitle from '@/components/SectionTitle';
import { models } from '@/data/models';

export default function GaragePage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Garage"
        title="All Porsche models"
        copy="Browse our curated Porsche roster featuring motorsport heroes, modern missiles and handcrafted restomod artistry."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {models.map((model) => (
          <ModelCard key={model.slug} model={model} />
        ))}
      </div>
    </div>
  );
}
