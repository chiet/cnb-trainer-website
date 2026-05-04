import { Link, useLocation } from "react-router-dom";
import { useProgress } from "@/hooks/useProgress";
import { modules } from "@/data/modules";

export const SiteHeader = () => {
  const { progress } = useProgress();
  const location = useLocation();
  const pct = Math.round((progress.completed.length / modules.length) * 100);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="keycap w-9 h-9 text-sm bg-primary text-primary-foreground border-primary group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors">
            C
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-lg">Click N Brew</div>
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Training Hub</div>
          </div>
        </Link>

        {location.pathname !== "/" && (
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            ← All modules
          </Link>
        )}

        <div className="hidden sm:flex items-center gap-3">
          <div className="text-xs font-mono text-muted-foreground">
            {progress.completed.length}/{modules.length} modules
          </div>
          <div className="w-32 h-1.5 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-gradient-amber transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>
    </header>
  );
};
