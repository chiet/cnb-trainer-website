import { Block } from "@/data/modules";
import { ExternalLink, Info, Lightbulb, AlertTriangle } from "lucide-react";

export const SectionBlock = ({ block }: { block: Block }) => {
  if (block.type === "text") {
    return <p className="text-foreground/85 leading-relaxed">{block.content}</p>;
  }

  if (block.type === "list") {
    return (
      <ul className="space-y-2.5">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-foreground/85 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "callout") {
    const tone = block.tone ?? "info";
    const Icon = tone === "tip" ? Lightbulb : tone === "warn" ? AlertTriangle : Info;
    const styles = {
      info: "bg-keycap/10 border-keycap/30 text-foreground",
      tip: "bg-accent/15 border-accent/40 text-foreground",
      warn: "bg-copper/15 border-copper/40 text-foreground",
    }[tone];
    const iconColor = { info: "text-keycap", tip: "text-copper", warn: "text-copper" }[tone];
    return (
      <div className={`flex gap-3 p-4 border rounded-lg ${styles}`}>
        <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${iconColor}`} />
        <div>
          {block.title && <div className="font-display font-semibold mb-1">{block.title}</div>}
          <div className="text-sm leading-relaxed text-foreground/85">{block.content}</div>
        </div>
      </div>
    );
  }

  if (block.type === "link") {
    return (
      <a href={block.url} target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-between gap-4 p-4 bg-secondary border border-border rounded-lg hover:border-accent transition-colors group">
        <div>
          <div className="font-display font-semibold group-hover:text-copper transition-colors">{block.label}</div>
          {block.description && <div className="text-xs text-muted-foreground mt-0.5">{block.description}</div>}
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-copper transition-colors" />
      </a>
    );
  }

  if (block.type === "keys") {
    return (
      <div className="flex flex-wrap gap-2">
        {block.items.map((k) => (
          <span key={k} className="keycap px-3 h-9 text-xs">{k}</span>
        ))}
      </div>
    );
  }

  return null;
};
