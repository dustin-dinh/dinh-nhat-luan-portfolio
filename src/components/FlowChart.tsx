import type { CSSProperties } from "react";
import { ChevronRight } from "lucide-react";
import { FlowStep } from "@/data/portfolio";

// Animated on md+; phones get the one-line version rendered by ProjectCard.
export default function FlowChart({ steps, label }: { steps: FlowStep[]; label: string }) {
  return (
    <ol aria-label={label} className="flow hidden items-center md:flex" style={{ "--n": steps.length } as CSSProperties}>
      {steps.map((step, i) => (
        <li key={step.label} className="flex min-w-0 flex-1 items-center" style={{ "--i": i } as CSSProperties}>
          <div className="flow-node min-w-0 flex-1 border-2 border-ink px-3 py-2.5">
            <p className="text-sm font-bold leading-tight">{step.label}</p>
            <p className="mt-1 text-xs leading-tight">{step.tool}</p>
          </div>
          {i < steps.length - 1 && (
            <span className="flex shrink-0 items-center" aria-hidden="true">
              <span className="flow-link">
                <span />
              </span>
              <ChevronRight className="-ml-2 h-4 w-4" strokeWidth={2.5} />
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
