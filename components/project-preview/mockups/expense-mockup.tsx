import { DeviceFrame, StatCard, Bars, Row } from "../device-frame";

export function ExpenseMockup() {
  return (
    <DeviceFrame>
      <div className="grid grid-cols-3 gap-3 mb-4">
        <StatCard label="Balance" value="TZS 1.8M" accent="text-success" />
        <StatCard label="Income" value="TZS 3.1M" />
        <StatCard label="Expenses" value="TZS 1.3M" accent="text-destructive" />
      </div>

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-3">
        <div className="rounded-[var(--radius-md)] border border-border bg-surface-2 p-3.5">
          <p className="text-[11px] font-mono text-muted-2 mb-3">By category</p>
          <div className="space-y-2.5">
            {[
              ["Rent", 42, "var(--accent)"],
              ["Food", 27, "var(--signal)"],
              ["Transport", 18, "var(--success)"],
              ["Other", 13, "var(--muted-2)"],
            ].map(([label, pct, color]) => (
              <div key={label as string}>
                <div className="flex justify-between text-xs text-muted mb-1">
                  <span>{label}</span>
                  <span>{pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-surface-3 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pct}%`, background: color as string }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[var(--radius-md)] border border-border bg-surface-2 p-3.5">
          <p className="text-[11px] font-mono text-muted-2 mb-3">Recent transactions</p>
          <Row cells={["Description", "Category", "Amount"]} muted />
          <Row cells={["Grocery run", "Food", "-42,000"]} />
          <Row cells={["Salary", "Income", "+1,200,000"]} />
          <Row cells={["Bus fare", "Transport", "-3,500"]} />
        </div>
      </div>

      <div className="mt-3 rounded-[var(--radius-md)] border border-border bg-surface-2 p-3.5">
        <p className="text-[11px] font-mono text-muted-2 mb-3">Monthly trend</p>
        <Bars values={[5, 8, 6, 9, 7, 4, 10, 6, 8, 7, 9, 6]} color="var(--signal)" />
      </div>
    </DeviceFrame>
  );
}
