import { DeviceFrame, StatCard, Row } from "../device-frame";
import { AlertTriangle } from "lucide-react";

export function InventoryMockup() {
  return (
    <DeviceFrame>
      <div className="grid grid-cols-3 gap-3 mb-4">
        <StatCard label="SKUs tracked" value="1,248" />
        <StatCard label="Warehouses" value="3" />
        <StatCard label="Low stock" value="12" accent="text-destructive" />
      </div>

      <div className="grid md:grid-cols-[1.2fr_1fr] gap-3">
        <div className="rounded-[var(--radius-md)] border border-border bg-surface-2 p-3.5">
          <p className="text-[11px] font-mono text-muted-2 mb-3">Stock levels</p>
          <Row cells={["Item", "On hand", "Reorder"]} muted />
          <Row cells={["Cement 50kg", "212", "150"]} />
          <Row cells={["Iron sheets", "34", "60"]} />
          <Row cells={["Paint 20L", "88", "40"]} />
          <Row cells={["Nails 5kg", "19", "50"]} />
        </div>

        <div className="rounded-[var(--radius-md)] border border-destructive/25 bg-destructive/5 p-3.5">
          <div className="flex items-center gap-2 text-destructive text-xs font-mono mb-3">
            <AlertTriangle className="h-3.5 w-3.5" />
            Reorder alerts
          </div>
          <ul className="space-y-2 text-xs text-muted">
            <li className="flex justify-between">
              <span>Iron sheets</span>
              <span className="text-destructive">-26 below</span>
            </li>
            <li className="flex justify-between">
              <span>Nails 5kg</span>
              <span className="text-destructive">-31 below</span>
            </li>
            <li className="flex justify-between">
              <span>Wire mesh</span>
              <span className="text-warning">-4 below</span>
            </li>
          </ul>
        </div>
      </div>
    </DeviceFrame>
  );
}
