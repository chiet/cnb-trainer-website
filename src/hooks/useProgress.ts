import { useEffect, useState, useCallback } from "react";

const KEY = "cnb-training-progress-v1";

type Progress = {
  completed: string[]; // module ids
  quizScores: Record<string, { score: number; total: number }>;
};

const empty: Progress = { completed: [], quizScores: {} };

function read(): Progress {
  if (typeof window === "undefined") return empty;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...empty, ...JSON.parse(raw) } : empty;
  } catch {
    return empty;
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(empty);

  useEffect(() => {
    setProgress(read());
    const onStorage = () => setProgress(read());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const persist = useCallback((next: Progress) => {
    setProgress(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  }, []);

  const markComplete = useCallback((id: string) => {
    const current = read();
    if (current.completed.includes(id)) return;
    persist({ ...current, completed: [...current.completed, id] });
  }, [persist]);

  const setQuizScore = useCallback((id: string, score: number, total: number) => {
    const current = read();
    persist({ ...current, quizScores: { ...current.quizScores, [id]: { score, total } } });
  }, [persist]);

  const reset = useCallback(() => persist(empty), [persist]);

  return { progress, markComplete, setQuizScore, reset };
}
