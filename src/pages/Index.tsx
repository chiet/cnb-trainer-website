import { SiteHeader } from "@/components/SiteHeader";
import { ModuleCard } from "@/components/ModuleCard";
import { modules } from "@/data/modules";
import { useProgress } from "@/hooks/useProgress";

const Index = () => {
  const { progress } = useProgress();
  const totalMinutes = modules.reduce((s, m) => s + m.estMinutes, 0);
  const pct = Math.round((progress.completed.length / modules.length) * 100);

  return (
    <div className="min-h-screen bg-background grain">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div className="absolute inset-0 grain opacity-30" />
        <div className="container relative py-20 md:py-28 text-primary-foreground">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-foreground/10 backdrop-blur rounded-full text-xs font-mono uppercase tracking-widest mb-6 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              New Joiner Training · Updated Sep 2024
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Welcome to <span className="italic text-accent">Click N Brew</span>.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Eight modules. Switches, coffee, customers and the craft. Work through them at your own pace — your progress is saved on this device.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Stat label="Modules" value={`${modules.length}`} />
              <Stat label="Est. time" value={`~${Math.round(totalMinutes / 60)}h`} />
              <Stat label="Complete" value={`${pct}%`} />
            </div>
          </div>

          {/* Decorative keycaps */}
          <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 gap-2 opacity-90">
            <div className="keycap w-16 h-16 text-xl bg-accent text-accent-foreground border-accent rotate-[-6deg]">C</div>
            <div className="keycap w-16 h-16 text-xl bg-card text-foreground rotate-[3deg] mt-6">N</div>
            <div className="keycap w-16 h-16 text-xl bg-copper text-copper-foreground border-copper rotate-[-3deg]">B</div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="container py-16 md:py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-copper mb-2">The Curriculum</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">Pick a module to begin</h2>
          </div>
          <div className="text-sm text-muted-foreground max-w-sm">
            Tackle them in order or jump to what you need. Each module ends with a quick quiz.
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m, i) => (
            <div key={m.id} className="animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <ModuleCard
                module={m}
                completed={progress.completed.includes(m.id)}
                score={progress.quizScores[m.id]}
              />
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="container py-8 flex items-center justify-between text-xs text-muted-foreground">
          <div>© Click N Brew · Internal training</div>
          <div className="font-mono">v1.0 · last updated 2 Sep 2024</div>
        </div>
      </footer>
    </div>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="p-4 bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 rounded-lg">
    <div className="font-display text-3xl font-bold text-accent">{value}</div>
    <div className="text-[11px] uppercase tracking-widest text-primary-foreground/60 mt-1">{label}</div>
  </div>
);

export default Index;
