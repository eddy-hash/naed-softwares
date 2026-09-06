import { DeviceFrame, StatCard, Bars, Row } from "../device-frame";

export function SchoolMockup() {
  return (
    <DeviceFrame>
      <div className="grid grid-cols-4 gap-3 mb-4">
        <StatCard label="Students" value="642" />
        <StatCard label="Attendance" value="96.4%" accent="text-signal" />
        <StatCard label="Classes" value="24" />
        <StatCard label="Fees due" value="TZS 2.4M" accent="text-warning" />
      </div>

      <div className="grid md:grid-cols-[1fr_1fr] gap-3">
        <div className="rounded-[var(--radius-md)] border border-border bg-surface-2 p-3.5">
          <p className="text-[11px] font-mono text-muted-2 mb-3">Attendance, this week</p>
          <Bars values={[95, 97, 94, 98, 92]} color="var(--accent)" />
          <div className="flex justify-between mt-2 text-[10px] text-muted-2 font-mono">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
          </div>
        </div>

        <div className="rounded-[var(--radius-md)] border border-border bg-surface-2 p-3.5">
          <p className="text-[11px] font-mono text-muted-2 mb-3">Recent results</p>
          <Row cells={["Class", "Subject", "Avg."]} muted />
          <Row cells={["Form 3A", "Mathematics", "68%"]} />
          <Row cells={["Form 2B", "English", "74%"]} />
          <Row cells={["Form 4A", "Physics", "61%"]} />
        </div>
      </div>
    </DeviceFrame>
  );
}
