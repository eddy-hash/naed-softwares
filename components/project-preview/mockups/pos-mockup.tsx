import { DeviceFrame, StatCard, Bars, Row } from "../device-frame";
import Image from "next/image";
export function PosMockup() {
  return (
    <DeviceFrame>
      
      <div className="grid grid-cols-3 gap-3 mb-4">
        <StatCard label="Revenue today" value="TZS 4.2M" accent="text-accent" />
        <StatCard label="Transactions" value="184" />
        <StatCard label="Avg. basket" value="TZS 22,800" />
      </div>

      <div className="grid md:grid-cols-[1.3fr_1fr] gap-3">
        <div className="rounded-[var(--radius-md)] border border-border bg-surface-2 p-3.5">
          <p className="text-[11px] font-mono text-muted-2 mb-3">Top products</p>
          <Row cells={["Product", "Quantity", "Total Revenue"]} muted />
          <Row cells={["Rice 5kg", "42", "168,000"]} />
          <Row cells={["Cooking oil 2L", "31", "124,000"]} />
          <Row cells={["Sugar 2kg", "27", "81,000"]} />
          <Row cells={["Soap bar", "58", "58,000"]} />
        </div>

        <div className="rounded-[var(--radius-md)] border border-border bg-surface-2 p-3.5 flex flex-col">
          <p className="text-[11px] font-mono text-muted-2 mb-3">Sales, last 7 days</p>
          <Bars values={[6, 9, 7, 11, 8, 13, 10]} />
          <p className="mt-3 text-[11px] text-muted-2">
            Peak: <span className="text-foreground">Saturday</span>
          </p>
        </div>
      </div>
      
     
       
    </DeviceFrame>


 
    
  );
}
