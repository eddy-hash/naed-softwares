import { DeviceFrame, StatCard, Bars, Row } from "../device-frame";
import { Package } from "lucide-react";

export function EcommerceMockup() {
  return (
    <DeviceFrame>
      <div className="grid grid-cols-3 gap-3 mb-4">
        <StatCard label="Revenue, 30d" value="TZS 18.6M" accent="text-accent" />
        <StatCard label="Orders" value="348" />
        <StatCard label="Customers" value="2,104" />
      </div>

      <div className="grid md:grid-cols-[1fr_1fr] gap-3 mb-3">
        {["Wireless Earbuds", "Desk Lamp"].map((name) => (
          <div
            key={name}
            className="rounded-[var(--radius-md)] border border-border bg-surface-2 p-3 flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-[var(--radius-sm)] bg-surface-3 flex items-center justify-center shrink-0">
              <Package className="h-4 w-4 text-muted" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-foreground truncate">{name}</p>
              <p className="text-[11px] text-muted-2 font-mono">In stock</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-[1.2fr_1fr] gap-3">
        <div className="rounded-[var(--radius-md)] border border-border bg-surface-2 p-3.5">
          <p className="text-[11px] font-mono text-muted-2 mb-3">Recent orders</p>
          <Row cells={["Order", "Customer", "Status"]} muted />
          <Row cells={["#3021", "A. Mushi", "Shipped"]} />
          <Row cells={["#3022", "J. Kileo", "Processing"]} />
          <Row cells={["#3023", "N. Haule", "Delivered"]} />
        </div>
        <div className="rounded-[var(--radius-md)] border border-border bg-surface-2 p-3.5">
          <p className="text-[11px] font-mono text-muted-2 mb-3">Sales, 7 days</p>
          <Bars values={[8, 11, 9, 14, 10, 16, 12]} />
        </div>
      </div>
    </DeviceFrame>
  );
}
