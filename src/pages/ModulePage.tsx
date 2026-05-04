import { Link, useParams, Navigate } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SectionBlock } from "@/components/SectionBlock";
import { Quiz } from "@/components/Quiz";
import { modules } from "@/data/modules";
import { useProgress } from "@/hooks/useProgress";
import { Check, ChevronRight, Clock } from "lucide-react";

const ModulePage = () => {
  const { id } = useParams();
  const module = modules.find((m) => m.id === id);
  const { progress, markComplete, setQuizScore } = useProgress();

  if (!module) return <Navigate to="/" replace />;

  const idx = modules.findIndex((m) => m.id === id);
  const next = modules[idx + 1];
  const isComplete = progress.completed.includes(module.id);

  return (
    <div className="min-h-screen bg-background grain">
      <SiteHeader />

      <article className="container max-w-4xl py-12 md:py-16">
        {/* Header */}
        <header className="mb-12 animate-fade-up">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground">Training</Link>
            <ChevronRight className="w-3 h-3" />
            <span>Module {String(module.number).padStart(2, "0")}</span>
          </div>

          <div className="flex items-start gap-5 mb-6">
            <div className="keycap w-16 h-16 text-3xl bg-primary text-primary-foreground border-primary flex-shrink-0">
              {module.icon}
            </div>
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-2">{module.title}</h1>
              <p className="text-lg text-muted-foreground">{module.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {module.estMinutes} min</span>
            <span>·</span>
            <span>{module.sections.length} sections</span>
            <span>·</span>
            <span>{module.quiz.length} quiz questions</span>
          </div>
        </header>

        {/* Sections */}
        <div className="space-y-12">
          {module.sections.map((section, i) => (
            <section key={section.id} className="animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4 pb-3 border-b border-border">
                {section.title}
              </h2>
              {section.intro && <p className="text-muted-foreground italic mb-5">{section.intro}</p>}
              <div className="space-y-4">
                {section.blocks.map((block, bi) => <SectionBlock key={bi} block={block} />)}
              </div>
            </section>
          ))}
        </div>

        {/* Quiz */}
        <section className="mt-16 p-6 md:p-8 bg-card border border-border rounded-2xl shadow-soft">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-copper">Knowledge Check</span>
          </div>
          <h2 className="font-display text-3xl font-bold mb-6">Quick quiz</h2>
          <Quiz
            quiz={module.quiz}
            onComplete={(score, total) => {
              setQuizScore(module.id, score, total);
              if (score / total >= 0.5) markComplete(module.id);
            }}
          />
        </section>

        {/* Footer nav */}
        <div className="mt-12 flex items-center justify-between gap-4 flex-wrap">
          <button
            onClick={() => markComplete(module.id)}
            disabled={isComplete}
            className="flex items-center gap-2 px-5 py-3 bg-keycap text-keycap-foreground rounded-lg font-semibold shadow-key hover:shadow-key-pressed hover:translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <Check className="w-4 h-4" />
            {isComplete ? "Completed" : "Mark as complete"}
          </button>

          {next ? (
            <Link to={`/module/${next.id}`} className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-semibold shadow-key hover:shadow-key-pressed hover:translate-y-0.5 transition-all">
              Next: {next.title}
              <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link to="/" className="flex items-center gap-2 px-5 py-3 bg-accent text-accent-foreground rounded-lg font-semibold shadow-key hover:shadow-key-pressed hover:translate-y-0.5 transition-all">
              Back to all modules
            </Link>
          )}
        </div>
      </article>
    </div>
  );
};

export default ModulePage;
