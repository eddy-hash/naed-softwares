import { PosMockup } from "./mockups/pos-mockup";
import { InventoryMockup } from "./mockups/inventory-mockup";
import { ExpenseMockup } from "./mockups/expense-mockup";
import { SchoolMockup } from "./mockups/school-mockup";
import { EcommerceMockup } from "./mockups/ecommerce-mockup";

const mockups: Record<string, React.ComponentType> = {
  pos: PosMockup,
  inventory: InventoryMockup,
  expense: ExpenseMockup,
  school: SchoolMockup,
  ecommerce: EcommerceMockup,
};

export function ProjectPreview({ slug }: { slug: string }) {
  const Mockup = mockups[slug];
  if (!Mockup) return <MissingPreview />;
  return <Mockup />;
}

function MissingPreview() {
  return (
    <div className="rounded-[var(--radius-lg)] border border-dashed border-border-strong bg-surface p-10 text-center">
      <p className="text-sm text-muted-2 font-mono">Preview unavailable</p>
    </div>
  );
}
