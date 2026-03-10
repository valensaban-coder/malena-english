import { useState, useEffect, useRef, useCallback } from "react";
import {
  CATEGORIES, checkAnswer, FILL_BLANK, REPHRASING, ERROR_CORRECTION,
  WORD_FORMATION, VOCABULARY, READING, MOTIVATIONS
} from "./exercises.js";

// ═══════════════════════════════════════
//  CONSTANTS & HELPERS
// ═══════════════════════════════════════
const EXERCISE_TYPES = [
  { id: "fill", name: "Fill in the Blank", icon: "✏️", desc: "Complete sentences with the correct form", color: "#a78bfa", data: FILL_BLANK },
  { id: "rephrase", name: "Rephrasing", icon: "🔄", desc: "Say the same thing using a keyword", color: "#fbbf24", data: REPHRASING },
  { id: "error", name: "Error Correction", icon: "🔍", desc: "Find and fix the mistake", color: "#34d399", data: ERROR_CORRECTION },
  { id: "wordform", name: "Word Formation", icon: "🧩", desc: "Transform the word to fit the sentence", color: "#fb923c", data: WORD_FORMATION },
  { id: "vocab", name: "Vocabulary", icon: "📚", desc: "Medical & academic word choice", color: "#67e8f9", data: VOCABULARY },
  { id: "reading", name: "Reading", icon: "📖", desc: "Comprehension passages with questions", color: "#f472b6", data: READING },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getMotivation() {
  return MOTIVATIONS[Math.floor(Math.random() * MOTIVATIONS.length)];
}

// ═══════════════════════════════════════
//  COMPONENTS
// ═══════════════════════════════════════

function ProgressBar({ value, max = 100, color = "#a78bfa", height = 6, label }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div style={{ marginBottom: 10 }}>
      {label && (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
          <span style={{ fontSize: 11, color: "#8892a4", fontFamily: "var(--mono)" }}>{label}</span>
          <span style={{ fontSize: 11, color, fontFamily: "var(--mono)", fontWeight: 600 }}>{Math.round(pct)}%</span>
        </div>
      )}
      <div style={{ height, borderRadius: height, background: "#1a1f35", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg, ${color}88, ${color})`, borderRadius: height, transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)" }} />
      </div>
    </div>
  );
}

// ── Fill in the Blank Exercise ──
function FillBlankExercise({ exercise, onAnswer }) {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => { setAnswer(""); setResult(null); inputRef.current?.focus(); }, [exercise.id]);

  const check = () => {
    if (!answer.trim()) return;
    const correct = checkAnswer(answer, exercise.a);
    setResult({ correct, correctAnswer: Array.isArray(exercise.a) ? exercise.a[0] : exercise.a });
    onAnswer(correct);
  };

  return (
    <div>
      <div style={{ fontSize: 11, color: "#a78bfa", fontFamily: "var(--mono)", fontWeight: 600, marginBottom: 6, letterSpacing: "0.06em" }}>{exercise.topic}</div>
      <div style={{ fontSize: 17, color: "#e2e8f0", lineHeight: 1.7, marginBottom: 20, fontFamily: "var(--serif)" }}>{exercise.q}</div>
      <div style={{ display: "flex", gap: 8 }}>
        <input ref={inputRef} value={answer} onChange={e => setAnswer(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") { result ? onAnswer(null, "next") : check(); } }}
          disabled={!!result} placeholder="Type your answer..."
          style={{ flex: 1, padding: "12px 16px", borderRadius: 10, border: "1px solid #252d45", background: "#0e1225", color: "#e2e8f0", fontSize: 15, outline: "none", fontFamily: "var(--sans)", transition: "border-color 0.2s" }}
          onFocus={e => e.target.style.borderColor = "#a78bfa55"}
          onBlur={e => e.target.style.borderColor = "#252d45"} />
        {!result ? (
          <button onClick={check} style={{ padding: "12px 24px", borderRadius: 10, border: "none", background: "linear-gradient(135deg, #a78bfa, #7c3aed)", color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer", fontFamily: "var(--sans)" }}>Check</button>
        ) : (
          <button onClick={() => onAnswer(null, "next")} style={{ padding: "12px 24px", borderRadius: 10, border: "none", background: "#252d45", color: "#e2e8f0", fontWeight: 600, fontSize: 14, cursor: "pointer", fontFamily: "var(--sans)" }}>Next →</button>
        )}
      </div>
      {result && <ResultBanner result={result} hint={exercise.hint} />}
    </div>
  );
}

// ── Rephrasing Exercise ──
function RephrasingExercise({ exercise, onAnswer }) {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => { setAnswer(""); setResult(null); inputRef.current?.focus(); }, [exercise.id]);

  const check = () => {
    if (!answer.trim()) return;
    const correct = checkAnswer(answer, exercise.a);
    setResult({ correct, correctAnswer: Array.isArray(exercise.a) ? exercise.a[0] : exercise.a });
    onAnswer(correct);
  };

  return (
    <div>
      <div style={{ padding: "14px 18px", borderRadius: 10, background: "#151a30", border: "1px solid #252d45", marginBottom: 16 }}>
        <div style={{ fontSize: 11, color: "#8892a4", marginBottom: 6, fontFamily: "var(--mono)" }}>ORIGINAL SENTENCE</div>
        <div style={{ fontSize: 16, color: "#e2e8f0", fontFamily: "var(--serif)", lineHeight: 1.6 }}>{exercise.original}</div>
      </div>
      <div style={{ display: "inline-block", padding: "4px 12px", borderRadius: 6, background: "#fbbf2422", color: "#fbbf24", fontSize: 13, fontWeight: 700, fontFamily: "var(--mono)", marginBottom: 12 }}>
        Keyword: {exercise.keyword}
      </div>
      <div style={{ fontSize: 15, color: "#cbd5e1", marginBottom: 16, lineHeight: 1.6 }}>{exercise.prompt}</div>
      <div style={{ display: "flex", gap: 8 }}>
        <input ref={inputRef} value={answer} onChange={e => setAnswer(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") { result ? onAnswer(null, "next") : check(); } }}
          disabled={!!result} placeholder="Complete the sentence..."
          style={{ flex: 1, padding: "12px 16px", borderRadius: 10, border: "1px solid #252d45", background: "#0e1225", color: "#e2e8f0", fontSize: 15, outline: "none", fontFamily: "var(--sans)" }}
          onFocus={e => e.target.style.borderColor = "#fbbf2455"} onBlur={e => e.target.style.borderColor = "#252d45"} />
        {!result ? (
          <button onClick={check} style={{ padding: "12px 24px", borderRadius: 10, border: "none", background: "linear-gradient(135deg, #fbbf24, #f59e0b)", color: "#0c0f1a", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Check</button>
        ) : (
          <button onClick={() => onAnswer(null, "next")} style={{ padding: "12px 24px", borderRadius: 10, border: "none", background: "#252d45", color: "#e2e8f0", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Next →</button>
        )}
      </div>
      {result && <ResultBanner result={result} hint={exercise.hint} />}
    </div>
  );
}

// ── Error Correction Exercise ──
function ErrorCorrectionExercise({ exercise, onAnswer }) {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => { setAnswer(""); setResult(null); inputRef.current?.focus(); }, [exercise.id]);

  const check = () => {
    if (!answer.trim()) return;
    const correct = checkAnswer(answer, exercise.correction);
    setResult({ correct, correctAnswer: exercise.correction });
    onAnswer(correct);
  };

  // Highlight the error in the sentence
  const parts = exercise.sentence.split(exercise.error);

  return (
    <div>
      <div style={{ fontSize: 11, color: "#8892a4", marginBottom: 8, fontFamily: "var(--mono)" }}>FIND AND CORRECT THE ERROR</div>
      <div style={{ fontSize: 17, color: "#e2e8f0", lineHeight: 1.7, marginBottom: 6, fontFamily: "var(--serif)" }}>
        {parts[0]}<span style={{ background: "#ef444433", color: "#fca5a5", padding: "1px 6px", borderRadius: 4, borderBottom: "2px solid #ef4444", fontWeight: 600 }}>{exercise.error}</span>{parts[1]}
      </div>
      <div style={{ fontSize: 12, color: "#64748b", marginBottom: 16 }}>The underlined part contains an error. Write the correction below.</div>
      <div style={{ display: "flex", gap: 8 }}>
        <input ref={inputRef} value={answer} onChange={e => setAnswer(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") { result ? onAnswer(null, "next") : check(); } }}
          disabled={!!result} placeholder="Write the correct form..."
          style={{ flex: 1, padding: "12px 16px", borderRadius: 10, border: "1px solid #252d45", background: "#0e1225", color: "#e2e8f0", fontSize: 15, outline: "none", fontFamily: "var(--sans)" }}
          onFocus={e => e.target.style.borderColor = "#34d39955"} onBlur={e => e.target.style.borderColor = "#252d45"} />
        {!result ? (
          <button onClick={check} style={{ padding: "12px 24px", borderRadius: 10, border: "none", background: "linear-gradient(135deg, #34d399, #059669)", color: "#0c0f1a", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Check</button>
        ) : (
          <button onClick={() => onAnswer(null, "next")} style={{ padding: "12px 24px", borderRadius: 10, border: "none", background: "#252d45", color: "#e2e8f0", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Next →</button>
        )}
      </div>
      {result && <ResultBanner result={result} hint={exercise.explanation} />}
    </div>
  );
}

// ── Word Formation Exercise ──
function WordFormationExercise({ exercise, onAnswer }) {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => { setAnswer(""); setResult(null); inputRef.current?.focus(); }, [exercise.id]);

  const check = () => {
    if (!answer.trim()) return;
    const correct = checkAnswer(answer, exercise.a);
    setResult({ correct, correctAnswer: Array.isArray(exercise.a) ? exercise.a[0] : exercise.a });
    onAnswer(correct);
  };

  return (
    <div>
      <div style={{ display: "inline-block", padding: "4px 14px", borderRadius: 6, background: "#fb923c22", color: "#fb923c", fontSize: 14, fontWeight: 700, fontFamily: "var(--mono)", marginBottom: 14 }}>
        ROOT: {exercise.root}
      </div>
      <div style={{ fontSize: 17, color: "#e2e8f0", lineHeight: 1.7, marginBottom: 20, fontFamily: "var(--serif)" }}>{exercise.sentence}</div>
      <div style={{ display: "flex", gap: 8 }}>
        <input ref={inputRef} value={answer} onChange={e => setAnswer(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") { result ? onAnswer(null, "next") : check(); } }}
          disabled={!!result} placeholder="Form the correct word..."
          style={{ flex: 1, padding: "12px 16px", borderRadius: 10, border: "1px solid #252d45", background: "#0e1225", color: "#e2e8f0", fontSize: 15, outline: "none", fontFamily: "var(--sans)" }}
          onFocus={e => e.target.style.borderColor = "#fb923c55"} onBlur={e => e.target.style.borderColor = "#252d45"} />
        {!result ? (
          <button onClick={check} style={{ padding: "12px 24px", borderRadius: 10, border: "none", background: "linear-gradient(135deg, #fb923c, #ea580c)", color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Check</button>
        ) : (
          <button onClick={() => onAnswer(null, "next")} style={{ padding: "12px 24px", borderRadius: 10, border: "none", background: "#252d45", color: "#e2e8f0", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Next →</button>
        )}
      </div>
      {result && <ResultBanner result={result} hint={exercise.hint} />}
    </div>
  );
}

// ── Vocabulary (Multiple Choice) Exercise ──
function VocabExercise({ exercise, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => { setSelected(null); setResult(null); }, [exercise.id]);

  const check = (option) => {
    if (result) return;
    setSelected(option);
    const correct = option === exercise.a;
    setResult({ correct, correctAnswer: exercise.a });
    onAnswer(correct);
  };

  return (
    <div>
      <div style={{ fontSize: 17, color: "#e2e8f0", lineHeight: 1.7, marginBottom: 20, fontFamily: "var(--serif)" }}>{exercise.q}</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {exercise.options.map(opt => {
          const isSelected = selected === opt;
          const isCorrect = opt === exercise.a;
          let bg = "#151a30";
          let border = "#252d45";
          let textColor = "#cbd5e1";
          if (result) {
            if (isCorrect) { bg = "#05966922"; border = "#059669"; textColor = "#6ee7b7"; }
            else if (isSelected && !isCorrect) { bg = "#dc262622"; border = "#dc2626"; textColor = "#fca5a5"; }
          }
          return (
            <button key={opt} onClick={() => check(opt)} disabled={!!result}
              style={{ padding: "14px 16px", borderRadius: 10, border: `1px solid ${border}`, background: bg, color: textColor, fontSize: 14, fontWeight: 500, cursor: result ? "default" : "pointer", textAlign: "left", fontFamily: "var(--sans)", transition: "all 0.2s" }}
              onMouseEnter={e => { if (!result) { e.target.style.borderColor = "#67e8f955"; e.target.style.background = "#1a2040"; } }}
              onMouseLeave={e => { if (!result) { e.target.style.borderColor = "#252d45"; e.target.style.background = "#151a30"; } }}>
              {opt}
            </button>
          );
        })}
      </div>
      {result && (
        <div style={{ marginTop: 14 }}>
          <ResultBanner result={result} hint={exercise.hint} />
          <button onClick={() => onAnswer(null, "next")} style={{ marginTop: 8, padding: "10px 20px", borderRadius: 8, border: "none", background: "#252d45", color: "#e2e8f0", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>Next →</button>
        </div>
      )}
    </div>
  );
}

// ── Reading Comprehension ──
function ReadingExercise({ exercise, onAnswer }) {
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => { setQIdx(0); setSelected(null); setResult(null); setScore(0); }, [exercise.id]);

  const currentQ = exercise.questions[qIdx];

  const check = (option) => {
    if (result) return;
    setSelected(option);
    const correct = option === currentQ.a;
    if (correct) setScore(s => s + 1);
    setResult({ correct, correctAnswer: currentQ.a });
    onAnswer(correct);
  };

  const next = () => {
    if (qIdx + 1 < exercise.questions.length) {
      setQIdx(qIdx + 1); setSelected(null); setResult(null);
    } else {
      onAnswer(null, "next");
    }
  };

  return (
    <div>
      <div style={{ fontSize: 13, color: "#f472b6", fontWeight: 700, marginBottom: 8, fontFamily: "var(--mono)" }}>{exercise.title}</div>
      <div style={{ padding: "16px 18px", borderRadius: 10, background: "#151a30", border: "1px solid #252d45", marginBottom: 18, maxHeight: 200, overflow: "auto" }}>
        <div style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.75, fontFamily: "var(--serif)" }}>{exercise.passage}</div>
      </div>
      <div style={{ fontSize: 11, color: "#8892a4", fontFamily: "var(--mono)", marginBottom: 8 }}>QUESTION {qIdx + 1} OF {exercise.questions.length} · SCORE: {score}/{qIdx + (result ? 1 : 0)}</div>
      <div style={{ fontSize: 15, color: "#e2e8f0", marginBottom: 14, fontWeight: 500 }}>{currentQ.q}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {currentQ.options.map(opt => {
          const isSelected = selected === opt;
          const isCorrect = opt === currentQ.a;
          let bg = "#151a30";
          let border = "#252d45";
          if (result) {
            if (isCorrect) { bg = "#05966922"; border = "#059669"; }
            else if (isSelected && !isCorrect) { bg = "#dc262622"; border = "#dc2626"; }
          }
          return (
            <button key={opt} onClick={() => check(opt)} disabled={!!result}
              style={{ padding: "12px 16px", borderRadius: 8, border: `1px solid ${border}`, background: bg, color: "#cbd5e1", fontSize: 14, cursor: result ? "default" : "pointer", textAlign: "left", fontFamily: "var(--sans)", transition: "all 0.15s" }}>
              {opt}
            </button>
          );
        })}
      </div>
      {result && (
        <button onClick={next} style={{ marginTop: 12, padding: "10px 20px", borderRadius: 8, border: "none", background: "#252d45", color: "#e2e8f0", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>
          {qIdx + 1 < exercise.questions.length ? "Next Question →" : "Finish →"}
        </button>
      )}
    </div>
  );
}

// ── Result Banner ──
function ResultBanner({ result, hint }) {
  return (
    <div style={{ marginTop: 14, padding: "14px 18px", borderRadius: 10, background: result.correct ? "#05966915" : "#dc262615", border: `1px solid ${result.correct ? "#05966944" : "#dc262644"}` }}>
      <div style={{ fontSize: 15, fontWeight: 700, color: result.correct ? "#6ee7b7" : "#fca5a5", marginBottom: result.correct ? 0 : 4, fontFamily: "var(--sans)" }}>
        {result.correct ? "✓ Correct! Well done!" : "✗ Not quite right"}
      </div>
      {!result.correct && result.correctAnswer && (
        <div style={{ fontSize: 14, color: "#94a3b8", marginBottom: 4 }}>Correct answer: <strong style={{ color: "#e2e8f0" }}>{result.correctAnswer}</strong></div>
      )}
      {hint && <div style={{ fontSize: 12, color: "#64748b", fontStyle: "italic", marginTop: 4, lineHeight: 1.5 }}>{hint}</div>}
    </div>
  );
}

// ═══════════════════════════════════════
//  MAIN APP
// ═══════════════════════════════════════
export default function App() {
  const [screen, setScreen] = useState("home"); // home | type | exercise | stats
  const [selectedType, setSelectedType] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [exIdx, setExIdx] = useState(0);
  const [sessionScore, setSessionScore] = useState({ correct: 0, total: 0 });
  const [allTimeStats, setAllTimeStats] = useState(() => {
    try { return JSON.parse(localStorage.getItem("male_stats") || "null"); } catch { return null; }
  } ?? { totalExercises: 0, totalCorrect: 0, byType: {}, streak: 0, bestStreak: 0, lastDate: null, sessions: 0 });
  const [motivation, setMotivation] = useState(getMotivation());
  const [showHint, setShowHint] = useState(false);
  const [currentStreak, setCurrentStreak] = useState(0);

  // Save stats
  useEffect(() => {
    try { localStorage.setItem("male_stats", JSON.stringify(allTimeStats)); } catch {}
  }, [allTimeStats]);

  const startExercises = (type) => {
    const shuffled = shuffle(type.data).slice(0, type.id === "reading" ? type.data.length : 8);
    setExercises(shuffled);
    setExIdx(0);
    setSessionScore({ correct: 0, total: 0 });
    setCurrentStreak(0);
    setShowHint(false);
    setSelectedType(type);
    setScreen("exercise");
  };

  const handleAnswer = useCallback((correct, action) => {
    if (action === "next") {
      setShowHint(false);
      if (exIdx + 1 < exercises.length) {
        setExIdx(i => i + 1);
      } else {
        // Session complete
        setAllTimeStats(prev => {
          const typeStat = prev.byType[selectedType.id] || { done: 0, correct: 0 };
          return {
            ...prev,
            totalExercises: prev.totalExercises + sessionScore.total,
            totalCorrect: prev.totalCorrect + sessionScore.correct,
            byType: { ...prev.byType, [selectedType.id]: { done: typeStat.done + sessionScore.total, correct: typeStat.correct + sessionScore.correct } },
            bestStreak: Math.max(prev.bestStreak, currentStreak),
            sessions: prev.sessions + 1,
            lastDate: new Date().toISOString().split("T")[0],
          };
        });
        setScreen("results");
      }
      return;
    }
    if (correct !== null) {
      setSessionScore(s => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
      if (correct) setCurrentStreak(s => s + 1);
      else setCurrentStreak(0);
    }
  }, [exIdx, exercises.length, selectedType, sessionScore, currentStreak]);

  const currentExercise = exercises[exIdx];

  const renderExercise = () => {
    if (!currentExercise || !selectedType) return null;
    const props = { exercise: currentExercise, onAnswer: handleAnswer };
    switch (selectedType.id) {
      case "fill": return <FillBlankExercise {...props} />;
      case "rephrase": return <RephrasingExercise {...props} />;
      case "error": return <ErrorCorrectionExercise {...props} />;
      case "wordform": return <WordFormationExercise {...props} />;
      case "vocab": return <VocabExercise {...props} />;
      case "reading": return <ReadingExercise {...props} />;
      default: return null;
    }
  };

  // ── Screens ──
  return (
    <div style={{ minHeight: "100vh", minHeight: "100dvh", background: "#0c0f1a", color: "#e2e8f0", fontFamily: "var(--sans)", overflow: "auto" }}>
      <style>{`
        :root {
          --sans: 'DM Sans', system-ui, -apple-system, sans-serif;
          --serif: 'DM Serif Display', Georgia, serif;
          --mono: 'JetBrains Mono', 'Fira Code', monospace;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
        body { overscroll-behavior: none; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #252d45; border-radius: 2px; }
        input::placeholder { color: #4a5270; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glow { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
        .fade-up { animation: fadeUp 0.4s ease both; }
      `}</style>

      {/* ═══ HOME SCREEN ═══ */}
      {screen === "home" && (
        <div style={{ padding: "0 20px 40px", maxWidth: 560, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ padding: "48px 0 24px", textAlign: "center" }} className="fade-up">
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg, #a78bfa33, #7c3aed22)", border: "2px solid #a78bfa44", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 28 }}>🩺</div>
            <h1 style={{ fontSize: 28, fontFamily: "var(--serif)", color: "#f1f5f9", marginBottom: 4, fontWeight: 400 }}>
              Hey, Male! 👋
            </h1>
            <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.5 }}>{motivation}</p>
          </div>

          {/* Quick stats strip */}
          {allTimeStats.totalExercises > 0 && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 24 }} className="fade-up">
              {[
                { label: "Done", value: allTimeStats.totalExercises, icon: "📝" },
                { label: "Accuracy", value: allTimeStats.totalExercises > 0 ? Math.round((allTimeStats.totalCorrect / allTimeStats.totalExercises) * 100) + "%" : "—", icon: "🎯" },
                { label: "Best Streak", value: allTimeStats.bestStreak, icon: "🔥" },
              ].map(s => (
                <div key={s.label} style={{ padding: "14px 10px", borderRadius: 12, background: "#111528", border: "1px solid #1e2340", textAlign: "center" }}>
                  <div style={{ fontSize: 16, marginBottom: 2 }}>{s.icon}</div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#e2e8f0", fontFamily: "var(--mono)" }}>{s.value}</div>
                  <div style={{ fontSize: 10, color: "#4a5270", fontFamily: "var(--mono)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Exercise types */}
          <div style={{ fontSize: 11, color: "#4a5270", fontFamily: "var(--mono)", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 12, paddingLeft: 4 }}>CHOOSE YOUR PRACTICE</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {EXERCISE_TYPES.map((type, i) => {
              const typeStat = allTimeStats.byType[type.id];
              return (
                <button key={type.id} onClick={() => startExercises(type)}
                  className="fade-up"
                  style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 18px", borderRadius: 14, border: "1px solid #1e2340", background: "#111528", cursor: "pointer", textAlign: "left", transition: "all 0.2s", animationDelay: `${i * 60}ms` }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = type.color + "55"; e.currentTarget.style.transform = "translateX(4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e2340"; e.currentTarget.style.transform = "translateX(0)"; }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: type.color + "15", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{type.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#e2e8f0", marginBottom: 2 }}>{type.name}</div>
                    <div style={{ fontSize: 12, color: "#4a5270" }}>{type.desc}</div>
                    {typeStat && <div style={{ fontSize: 10, color: type.color, fontFamily: "var(--mono)", marginTop: 4 }}>{typeStat.done} done · {typeStat.done > 0 ? Math.round((typeStat.correct / typeStat.done) * 100) : 0}% accuracy</div>}
                  </div>
                  <div style={{ color: "#2a3050", fontSize: 18 }}>›</div>
                </button>
              );
            })}
          </div>

          {/* Stats button */}
          <button onClick={() => { setScreen("stats"); setMotivation(getMotivation()); }}
            style={{ width: "100%", marginTop: 20, padding: "14px", borderRadius: 12, border: "1px solid #1e2340", background: "transparent", color: "#64748b", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "var(--sans)" }}>
            📊 View Full Progress
          </button>
        </div>
      )}

      {/* ═══ EXERCISE SCREEN ═══ */}
      {screen === "exercise" && selectedType && (
        <div style={{ padding: "0 20px 40px", maxWidth: 600, margin: "0 auto" }}>
          {/* Top bar */}
          <div style={{ padding: "16px 0", display: "flex", alignItems: "center", gap: 12 }}>
            <button onClick={() => setScreen("home")} style={{ background: "none", border: "none", color: "#64748b", cursor: "pointer", fontSize: 14, fontFamily: "var(--sans)", padding: "6px 0" }}>← Back</button>
            <div style={{ flex: 1 }} />
            <div style={{ fontSize: 12, color: selectedType.color, fontFamily: "var(--mono)", fontWeight: 600 }}>
              {selectedType.icon} {sessionScore.correct}/{sessionScore.total}
            </div>
            {currentStreak >= 3 && <div style={{ fontSize: 12, color: "#fbbf24", fontFamily: "var(--mono)" }}>🔥 {currentStreak}</div>}
          </div>

          {/* Progress bar */}
          <ProgressBar value={exIdx + 1} max={exercises.length} color={selectedType.color} height={4} />

          {/* Exercise card */}
          <div style={{ marginTop: 16, padding: "24px 20px", borderRadius: 16, background: "#111528", border: "1px solid #1e2340" }} className="fade-up">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: "#4a5270", fontFamily: "var(--mono)" }}>
                {exIdx + 1} / {exercises.length}
              </div>
              {currentExercise?.hint && selectedType.id !== "error" && selectedType.id !== "reading" && (
                <button onClick={() => setShowHint(!showHint)}
                  style={{ fontSize: 11, color: "#a78bfa88", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--mono)" }}>
                  {showHint ? "Hide hint" : "💡 Hint"}
                </button>
              )}
            </div>

            {showHint && currentExercise?.hint && (
              <div style={{ padding: "10px 14px", borderRadius: 8, background: "#a78bfa11", border: "1px solid #a78bfa22", marginBottom: 14, fontSize: 12, color: "#a78bfa", fontStyle: "italic" }}>
                {currentExercise.hint}
              </div>
            )}

            {renderExercise()}
          </div>
        </div>
      )}

      {/* ═══ RESULTS SCREEN ═══ */}
      {screen === "results" && (
        <div style={{ padding: "60px 20px 40px", maxWidth: 480, margin: "0 auto", textAlign: "center" }} className="fade-up">
          <div style={{ fontSize: 56, marginBottom: 16 }}>
            {sessionScore.correct === sessionScore.total ? "🎉" : sessionScore.correct >= sessionScore.total * 0.7 ? "👏" : sessionScore.correct >= sessionScore.total * 0.5 ? "💪" : "📖"}
          </div>
          <h2 style={{ fontSize: 24, fontFamily: "var(--serif)", fontWeight: 400, marginBottom: 8, color: "#f1f5f9" }}>
            {sessionScore.correct === sessionScore.total ? "Perfect score, Male!" : sessionScore.correct >= sessionScore.total * 0.7 ? "Great job, Male!" : "Keep practicing!"}
          </h2>
          <p style={{ fontSize: 14, color: "#64748b", marginBottom: 32 }}>{getMotivation()}</p>

          <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 32 }}>
            <div>
              <div style={{ fontSize: 36, fontWeight: 700, fontFamily: "var(--mono)", color: "#e2e8f0" }}>{sessionScore.correct}</div>
              <div style={{ fontSize: 11, color: "#4a5270" }}>Correct</div>
            </div>
            <div style={{ width: 1, background: "#252d45" }} />
            <div>
              <div style={{ fontSize: 36, fontWeight: 700, fontFamily: "var(--mono)", color: "#e2e8f0" }}>{sessionScore.total}</div>
              <div style={{ fontSize: 11, color: "#4a5270" }}>Total</div>
            </div>
            <div style={{ width: 1, background: "#252d45" }} />
            <div>
              <div style={{ fontSize: 36, fontWeight: 700, fontFamily: "var(--mono)", color: sessionScore.total > 0 ? (sessionScore.correct / sessionScore.total >= 0.7 ? "#6ee7b7" : "#fbbf24") : "#64748b" }}>
                {sessionScore.total > 0 ? Math.round((sessionScore.correct / sessionScore.total) * 100) : 0}%
              </div>
              <div style={{ fontSize: 11, color: "#4a5270" }}>Accuracy</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
            <button onClick={() => { startExercises(selectedType); }}
              style={{ padding: "14px 28px", borderRadius: 12, border: "1px solid #252d45", background: "transparent", color: "#e2e8f0", fontWeight: 600, fontSize: 14, cursor: "pointer", fontFamily: "var(--sans)" }}>
              Retry
            </button>
            <button onClick={() => { setScreen("home"); setMotivation(getMotivation()); }}
              style={{ padding: "14px 28px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, #a78bfa, #7c3aed)", color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer", fontFamily: "var(--sans)" }}>
              Home
            </button>
          </div>
        </div>
      )}

      {/* ═══ STATS SCREEN ═══ */}
      {screen === "stats" && (
        <div style={{ padding: "0 20px 40px", maxWidth: 560, margin: "0 auto" }}>
          <div style={{ padding: "16px 0" }}>
            <button onClick={() => setScreen("home")} style={{ background: "none", border: "none", color: "#64748b", cursor: "pointer", fontSize: 14, fontFamily: "var(--sans)" }}>← Back</button>
          </div>

          <h2 style={{ fontSize: 24, fontFamily: "var(--serif)", fontWeight: 400, marginBottom: 4, color: "#f1f5f9" }}>Your Progress</h2>
          <p style={{ fontSize: 13, color: "#4a5270", marginBottom: 24 }}>Keep it up, future Dr. Malena! 🩺</p>

          {/* Overview cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
            {[
              { label: "Total Exercises", value: allTimeStats.totalExercises, color: "#a78bfa" },
              { label: "Overall Accuracy", value: allTimeStats.totalExercises > 0 ? Math.round((allTimeStats.totalCorrect / allTimeStats.totalExercises) * 100) + "%" : "—", color: "#34d399" },
              { label: "Sessions", value: allTimeStats.sessions, color: "#67e8f9" },
              { label: "Best Streak", value: allTimeStats.bestStreak + " 🔥", color: "#fbbf24" },
            ].map(s => (
              <div key={s.label} style={{ padding: "18px 14px", borderRadius: 14, background: "#111528", border: "1px solid #1e2340" }}>
                <div style={{ fontSize: 24, fontWeight: 700, fontFamily: "var(--mono)", color: s.color, marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "#4a5270" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* By type breakdown */}
          <div style={{ fontSize: 11, color: "#4a5270", fontFamily: "var(--mono)", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 12 }}>BY EXERCISE TYPE</div>
          {EXERCISE_TYPES.map(type => {
            const stat = allTimeStats.byType[type.id];
            if (!stat) return (
              <div key={type.id} style={{ padding: "12px 14px", borderRadius: 10, background: "#111528", border: "1px solid #1e2340", marginBottom: 8, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 18 }}>{type.icon}</span>
                <span style={{ fontSize: 13, color: "#4a5270" }}>{type.name} — not started yet</span>
              </div>
            );
            const accuracy = stat.done > 0 ? Math.round((stat.correct / stat.done) * 100) : 0;
            return (
              <div key={type.id} style={{ padding: "14px 16px", borderRadius: 10, background: "#111528", border: "1px solid #1e2340", marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 18 }}>{type.icon}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#e2e8f0", flex: 1 }}>{type.name}</span>
                  <span style={{ fontSize: 12, fontFamily: "var(--mono)", color: type.color }}>{accuracy}%</span>
                </div>
                <ProgressBar value={accuracy} color={type.color} height={4} />
                <div style={{ fontSize: 11, color: "#4a5270", fontFamily: "var(--mono)" }}>{stat.done} exercises · {stat.correct} correct</div>
              </div>
            );
          })}

          {/* Reset */}
          <button onClick={() => { if (confirm("Reset all progress? This cannot be undone.")) { setAllTimeStats({ totalExercises: 0, totalCorrect: 0, byType: {}, streak: 0, bestStreak: 0, lastDate: null, sessions: 0 }); } }}
            style={{ width: "100%", marginTop: 24, padding: "12px", borderRadius: 10, border: "1px solid #991b1b44", background: "transparent", color: "#991b1b", fontSize: 12, cursor: "pointer", fontFamily: "var(--mono)" }}>
            Reset All Progress
          </button>
        </div>
      )}
    </div>
  );
}
