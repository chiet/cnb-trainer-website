import { useState } from "react";
import { Quiz as QuizType } from "@/data/modules";
import { Check, X, RotateCcw } from "lucide-react";

export const Quiz = ({ quiz, onComplete }: { quiz: QuizType[]; onComplete: (score: number, total: number) => void }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = quiz.reduce((s, q, i) => s + (answers[i] === q.answer ? 1 : 0), 0);
  const allAnswered = Object.keys(answers).length === quiz.length;

  const submit = () => {
    setSubmitted(true);
    onComplete(score, quiz.length);
  };

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="space-y-8">
      {quiz.map((q, qi) => (
        <div key={qi} className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="keycap w-8 h-8 text-xs flex-shrink-0">{qi + 1}</span>
            <h4 className="font-display text-lg font-semibold pt-1">{q.question}</h4>
          </div>
          <div className="grid gap-2 pl-11">
            {q.options.map((opt, oi) => {
              const selected = answers[qi] === oi;
              const correct = q.answer === oi;
              const showResult = submitted;
              const styles = !showResult
                ? selected
                  ? "border-accent bg-accent/10"
                  : "border-border hover:border-accent/60 bg-card"
                : correct
                ? "border-keycap bg-keycap/10"
                : selected
                ? "border-destructive bg-destructive/10"
                : "border-border bg-card opacity-60";
              return (
                <button
                  key={oi}
                  disabled={submitted}
                  onClick={() => setAnswers({ ...answers, [qi]: oi })}
                  className={`flex items-center justify-between gap-3 p-3.5 border-2 rounded-lg text-left transition-all ${styles}`}
                >
                  <span className="text-sm font-medium">{opt}</span>
                  {showResult && correct && <Check className="w-4 h-4 text-keycap flex-shrink-0" />}
                  {showResult && selected && !correct && <X className="w-4 h-4 text-destructive flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={submit}
          disabled={!allAnswered}
          className="w-full py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold shadow-key hover:shadow-key-pressed hover:translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          Submit answers ({Object.keys(answers).length}/{quiz.length})
        </button>
      ) : (
        <div className="p-5 bg-gradient-amber rounded-lg text-accent-foreground flex items-center justify-between">
          <div>
            <div className="font-display text-2xl font-bold">{score} / {quiz.length}</div>
            <div className="text-sm opacity-80">
              {score === quiz.length ? "Perfect — module mastered!" : score >= quiz.length / 2 ? "Solid. Review missed answers." : "Worth another pass through the module."}
            </div>
          </div>
          <button onClick={reset} className="flex items-center gap-2 px-4 py-2 bg-foreground/10 hover:bg-foreground/20 rounded-md text-sm font-medium transition-colors">
            <RotateCcw className="w-4 h-4" /> Retake
          </button>
        </div>
      )}
    </div>
  );
};
