import { POLE_META, type Pole } from "@/data/verses";
import { cn } from "@/lib/utils";

export function PoleBadge({
  pole,
  className,
  showShort = false,
}: {
  pole: Pole;
  className?: string;
  showShort?: boolean;
}) {
  const meta = POLE_META[pole];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.66rem] font-medium uppercase tracking-[0.12em]",
        className,
      )}
      style={{
        color: meta.accent,
        borderColor: `color-mix(in srgb, ${meta.accent} 38%, var(--line))`,
        backgroundColor: `color-mix(in srgb, ${meta.accent} 9%, transparent)`,
      }}
    >
      <span
        className="size-1.5 rounded-full"
        style={{ backgroundColor: meta.accent }}
      />
      {showShort ? meta.short : meta.label}
    </span>
  );
}
