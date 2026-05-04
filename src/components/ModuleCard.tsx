import { Link } from "react-router-dom";
import { Module } from "@/data/modules";
import { Check, Clock } from "lucide-react";

const colorMap = {
  amber: "bg-accent text-accent-foreground border-accent",
  copper: "bg-copper text-copper-foreground border-copper",
  keycap: "bg-keycap text-keycap-foreground border-keycap",
  primary: "bg-primary text-primary-foreground border-primary",
} as const;

export const ModuleCard = ({ module, completed, score }: { module: Module; completed: boolean; score?: { score: number; total: number } }) => {
  return (
    <Link
      to={`/module/${module.id}`}
      className="group relative flex flex-col p-6 bg-card border border-border rounded-xl shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-amber opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl" />

      <div className="flex items-start justify-between mb-4">
        <div className={`keycap w-14 h-14 text-2xl ${colorMap[module.color]}`}>
          {module.icon}
        </div>
        {completed && (
          <div className="flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-keycap">
            <Check className="w-3.5 h-3.5" /> done
          </div>
        )}
      </div>

      <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
        Module {String(module.number).padStart(2, "0")}
      </div>
      <h3 className="font-display text-2xl font-semibold leading-tight mb-2 group-hover:text-copper transition-colors">
        {module.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{module.tagline}</p>

      <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          <span>{module.estMinutes} min</span>
        </div>
        {score && (
          <div className="font-mono">
            Quiz: <span className="text-foreground font-semibold">{score.score}/{score.total}</span>
          </div>
        )}
      </div>
    </Link>
  );
};
