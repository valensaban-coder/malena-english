// ═══════════════════════════════════════════════
//  EXERCISE DATABASE — Male's English Lab
//  Personalizado para Malena (Medicina, UBA, B2+)
// ═══════════════════════════════════════════════

export const CATEGORIES = [
  { id: "grammar", name: "Grammar", icon: "📐", color: "#a78bfa" },
  { id: "vocabulary", name: "Vocabulary", icon: "📚", color: "#67e8f9" },
  { id: "rephrasing", name: "Rephrasing", icon: "🔄", color: "#fbbf24" },
  { id: "reading", name: "Reading", icon: "📖", color: "#f472b6" },
  { id: "errorcorrection", name: "Error Correction", icon: "🔍", color: "#34d399" },
  { id: "wordformation", name: "Word Formation", icon: "🧩", color: "#fb923c" },
];

// Helper: normalize answers for comparison
export function checkAnswer(userAnswer, correctAnswers) {
  const normalize = s => s.trim().toLowerCase().replace(/['']/g, "'").replace(/\s+/g, " ");
  const user = normalize(userAnswer);
  if (Array.isArray(correctAnswers)) {
    return correctAnswers.some(a => normalize(a) === user);
  }
  return normalize(correctAnswers) === user;
}

// ─────────────────────────────────────
//  FILL IN THE BLANK (Grammar focused)
// ─────────────────────────────────────
export const FILL_BLANK = [
  // Conditionals
  { id: "fb01", topic: "Mixed Conditionals", q: "If I ___ (study) harder at school, I would have a better job now.", a: ["had studied"], hint: "Mixed conditional: past perfect → present result", category: "grammar", difficulty: "B2" },
  { id: "fb02", topic: "Mixed Conditionals", q: "If she ___ (not/move) to London, she wouldn't be so happy today.", a: ["hadn't moved", "had not moved"], hint: "Past condition affecting present situation", category: "grammar", difficulty: "B2" },
  { id: "fb03", topic: "Mixed Conditionals", q: "I ___ (travel) more if I didn't have so many exams at university.", a: ["would travel"], hint: "Second conditional: would + base form for unreal present", category: "grammar", difficulty: "B2" },
  { id: "fb04", topic: "Third Conditional", q: "If the patient ___ (arrive) sooner, the doctors could have saved him.", a: ["had arrived"], hint: "Third conditional: past perfect in if-clause", category: "grammar", difficulty: "B2" },

  // Passives
  { id: "fb05", topic: "Advanced Passives", q: "The new treatment ___ (believe) to reduce symptoms significantly.", a: ["is believed"], hint: "Impersonal passive: subject + is believed + to infinitive", category: "grammar", difficulty: "B2" },
  { id: "fb06", topic: "Advanced Passives", q: "The research paper ___ (should/submit) before the deadline.", a: ["should have been submitted"], hint: "Modal passive: should have been + past participle", category: "grammar", difficulty: "B2" },
  { id: "fb07", topic: "Advanced Passives", q: "It ___ (report) that the virus is spreading rapidly.", a: ["is reported", "has been reported"], hint: "Impersonal passive with 'it'", category: "grammar", difficulty: "B2" },
  { id: "fb08", topic: "Advanced Passives", q: "The patient ___ (operate) on yesterday afternoon.", a: ["was operated"], hint: "Simple past passive", category: "grammar", difficulty: "B2" },

  // Reported Speech
  { id: "fb09", topic: "Reported Speech", q: "The doctor said the patient ___ (need) to rest for a week.", a: ["needed"], hint: "Backshift: present simple → past simple", category: "grammar", difficulty: "B2" },
  { id: "fb10", topic: "Reported Speech", q: "She told me she ___ (be/wait) for the results since Monday.", a: ["had been waiting"], hint: "Backshift: present perfect continuous → past perfect continuous", category: "grammar", difficulty: "B2" },
  { id: "fb11", topic: "Reported Speech", q: "The professor asked us whether we ___ (finish) the assignment.", a: ["had finished"], hint: "Reported questions: past perfect after asked whether", category: "grammar", difficulty: "B2" },

  // Modals of deduction
  { id: "fb12", topic: "Modals of Deduction", q: "She's been studying all night. She ___ (must/be) exhausted.", a: ["must be"], hint: "Must + base form for present deduction (certain)", category: "grammar", difficulty: "B2" },
  { id: "fb13", topic: "Modals of Deduction", q: "He ___ (can't/pass) the exam — he never studied!", a: ["can't have passed"], hint: "Can't have + past participle for impossible past deduction", category: "grammar", difficulty: "B2" },
  { id: "fb14", topic: "Modals of Deduction", q: "The lights are off. They ___ (might/go) to bed already.", a: ["might have gone"], hint: "Might have + past participle for past possibility", category: "grammar", difficulty: "B2" },

  // Inversions
  { id: "fb15", topic: "Inversions", q: "Not only ___ she pass the exam, but she also got the highest mark.", a: ["did"], hint: "Not only + auxiliary + subject inversion", category: "grammar", difficulty: "C1" },
  { id: "fb16", topic: "Inversions", q: "Hardly ___ the lecture started when the fire alarm went off.", a: ["had"], hint: "Hardly + had + subject", category: "grammar", difficulty: "C1" },
  { id: "fb17", topic: "Inversions", q: "Never ___ I seen such a complicated surgery.", a: ["have"], hint: "Never + auxiliary + subject", category: "grammar", difficulty: "C1" },

  // Wish / If only
  { id: "fb18", topic: "Wish & If Only", q: "I wish I ___ (choose) a different specialization.", a: ["had chosen"], hint: "Wish + past perfect for past regrets", category: "grammar", difficulty: "B2" },
  { id: "fb19", topic: "Wish & If Only", q: "If only the hospital ___ (have) better equipment.", a: ["had"], hint: "If only + past simple for present wishes", category: "grammar", difficulty: "B2" },
  { id: "fb20", topic: "Wish & If Only", q: "I wish my classmates ___ (stop) talking during lectures.", a: ["would stop"], hint: "Wish + would for complaints about habits", category: "grammar", difficulty: "B2" },

  // Relative clauses
  { id: "fb21", topic: "Relative Clauses", q: "Dr. García, ___ research focuses on cardiology, won an award.", a: ["whose"], hint: "Possessive relative pronoun in non-defining clause", category: "grammar", difficulty: "B2" },
  { id: "fb22", topic: "Relative Clauses", q: "The hospital ___ I did my internship was in Barracas.", a: ["where"], hint: "Relative adverb for place", category: "grammar", difficulty: "B2" },

  // Gerunds vs Infinitives
  { id: "fb23", topic: "Gerunds vs Infinitives", q: "I remember ___ (dissect) my first specimen. It was nerve-wracking.", a: ["dissecting"], hint: "Remember + gerund = recall a past experience", category: "grammar", difficulty: "B2" },
  { id: "fb24", topic: "Gerunds vs Infinitives", q: "Don't forget ___ (bring) your stethoscope to the practical.", a: ["to bring"], hint: "Forget + to-infinitive = fail to remember a future action", category: "grammar", difficulty: "B2" },
  { id: "fb25", topic: "Gerunds vs Infinitives", q: "The surgeon stopped ___ (check) the patient's vitals.", a: ["to check"], hint: "Stop + to-infinitive = pause in order to do something", category: "grammar", difficulty: "B2" },

  // Subjunctive
  { id: "fb26", topic: "Subjunctive", q: "The doctor recommended that she ___ (take) the medication twice daily.", a: ["take"], hint: "Subjunctive: bare infinitive after recommend", category: "grammar", difficulty: "C1" },
  { id: "fb27", topic: "Subjunctive", q: "It's essential that every patient ___ (be) examined thoroughly.", a: ["be"], hint: "Subjunctive: 'be' (not 'is') after adjectives of necessity", category: "grammar", difficulty: "C1" },

  // Participle clauses
  { id: "fb28", topic: "Participle Clauses", q: "___ (complete) her residency, she moved to a rural hospital.", a: ["Having completed"], hint: "Perfect participle: Having + past participle", category: "grammar", difficulty: "C1" },
  { id: "fb29", topic: "Participle Clauses", q: "___ (not/know) the diagnosis, the team ordered more tests.", a: ["Not knowing"], hint: "Negative present participle clause", category: "grammar", difficulty: "C1" },
];

// ─────────────────────────────────────
//  REPHRASING (Key Word Transformation)
// ─────────────────────────────────────
export const REPHRASING = [
  { id: "rp01", original: "It's a pity I didn't study for the anatomy exam.", keyword: "WISH", prompt: 'Complete: "I ___ for the anatomy exam."', a: ["wish I had studied", "wish i had studied"], hint: "Wish + past perfect for past regrets", category: "rephrasing", difficulty: "B2" },
  { id: "rp02", original: "People say that dark chocolate is good for your heart.", keyword: "SAID", prompt: 'Complete: "Dark chocolate ___ good for your heart."', a: ["is said to be"], hint: "Impersonal passive: subject + is said + to be", category: "rephrasing", difficulty: "B2" },
  { id: "rp03", original: "I haven't been to the dentist for two years.", keyword: "SINCE", prompt: 'Complete: "It has been two years ___ to the dentist."', a: ["since I went", "since I last went", "since i went", "since i last went"], hint: "It has been + time + since + past simple", category: "rephrasing", difficulty: "B2" },
  { id: "rp04", original: "She started studying medicine five years ago.", keyword: "BEEN", prompt: 'Complete: "She ___ medicine for five years."', a: ["has been studying"], hint: "Present perfect continuous for duration from past to now", category: "rephrasing", difficulty: "B2" },
  { id: "rp05", original: "The operation was so complex that it lasted 12 hours.", keyword: "SUCH", prompt: 'Complete: "It was ___ that it lasted 12 hours."', a: ["such a complex operation"], hint: "Such + a/an + adjective + noun + that", category: "rephrasing", difficulty: "B2" },
  { id: "rp06", original: "I didn't know about the side effects, so I took the pills.", keyword: "KNOWN", prompt: 'Complete: "If I ___ the side effects, I wouldn\'t have taken the pills."', a: ["had known about"], hint: "Third conditional: If + past perfect", category: "rephrasing", difficulty: "B2" },
  { id: "rp07", original: "You should have told the doctor about your allergies.", keyword: "OUGHT", prompt: 'Complete: "You ___ the doctor about your allergies."', a: ["ought to have told"], hint: "Ought to have + past participle = should have", category: "rephrasing", difficulty: "B2" },
  { id: "rp08", original: "It wasn't necessary for you to come to the hospital.", keyword: "NEED", prompt: 'Complete: "You ___ to the hospital."', a: ["needn't have come", "didn't need to come"], hint: "Needn't have + past participle (but you did)", category: "rephrasing", difficulty: "B2" },
  { id: "rp09", original: "She regrets not specializing in neurology.", keyword: "WISHES", prompt: 'Complete: "She ___ in neurology."', a: ["wishes she had specialized", "wishes she had specialised"], hint: "Wish + past perfect for past regrets", category: "rephrasing", difficulty: "B2" },
  { id: "rp10", original: "The nurse was too tired to continue her shift.", keyword: "SO", prompt: 'Complete: "The nurse was ___ she couldn\'t continue her shift."', a: ["so tired that"], hint: "So + adjective + that + clause", category: "rephrasing", difficulty: "B2" },
  { id: "rp11", original: "Although he felt unwell, he went to the lecture.", keyword: "DESPITE", prompt: 'Complete: "___ unwell, he went to the lecture."', a: ["despite feeling"], hint: "Despite + gerund", category: "rephrasing", difficulty: "B2" },
  { id: "rp12", original: "I'm sure she passed the pharmacology exam.", keyword: "MUST", prompt: 'Complete: "She ___ the pharmacology exam."', a: ["must have passed"], hint: "Must have + past participle for past certainty", category: "rephrasing", difficulty: "B2" },
  { id: "rp13", original: "The last time I had a check-up was in January.", keyword: "HAD", prompt: 'Complete: "I ___ a check-up since January."', a: ["haven't had", "have not had"], hint: "Present perfect negative for duration since last time", category: "rephrasing", difficulty: "B2" },
  { id: "rp14", original: "They will probably discover a vaccine soon.", keyword: "LIKELY", prompt: 'Complete: "They ___ a vaccine soon."', a: ["are likely to discover"], hint: "Be likely + to infinitive", category: "rephrasing", difficulty: "B2" },
  { id: "rp15", original: "It's impossible that the test results are wrong.", keyword: "CAN'T", prompt: 'Complete: "The test results ___ wrong."', a: ["can't be"], hint: "Can't + be for present impossibility", category: "rephrasing", difficulty: "B2" },
];

// ─────────────────────────────────────
//  ERROR CORRECTION (Find the mistake)
// ─────────────────────────────────────
export const ERROR_CORRECTION = [
  { id: "ec01", sentence: "The doctor suggested the patient to take a week off work.", error: "to take", correction: "taking", explanation: "After 'suggest', use a gerund or subjunctive ('take'), not 'to + infinitive'.", category: "errorcorrection", difficulty: "B2" },
  { id: "ec02", sentence: "Despite of the bad weather, the ambulance arrived on time.", error: "Despite of", correction: "Despite", explanation: "'Despite' is never followed by 'of'. Use 'despite + noun/gerund' or 'in spite of'.", category: "errorcorrection", difficulty: "B2" },
  { id: "ec03", sentence: "She has been working in this hospital since three years.", error: "since three years", correction: "for three years", explanation: "'Since' needs a point in time (since 2022). 'For' is used with durations (for three years).", category: "errorcorrection", difficulty: "B2" },
  { id: "ec04", sentence: "If I would have known about the exam, I would have studied.", error: "would have known", correction: "had known", explanation: "Third conditional: 'If + past perfect', never 'if + would have'.", category: "errorcorrection", difficulty: "B2" },
  { id: "ec05", sentence: "The number of patients have increased significantly.", error: "have", correction: "has", explanation: "'The number of' takes a singular verb. 'A number of' takes plural.", category: "errorcorrection", difficulty: "B2" },
  { id: "ec06", sentence: "She's used to work long shifts at the hospital.", error: "to work", correction: "to working", explanation: "'Be used to' is followed by a gerund, not a base infinitive.", category: "errorcorrection", difficulty: "B2" },
  { id: "ec07", sentence: "I wish I can speak English more fluently.", error: "can", correction: "could", explanation: "After 'wish' for present situations, use past tense: 'could' not 'can'.", category: "errorcorrection", difficulty: "B2" },
  { id: "ec08", sentence: "The professor explained us the cardiovascular system.", error: "explained us", correction: "explained to us", explanation: "'Explain' requires 'to' before the indirect object: explain something TO someone.", category: "errorcorrection", difficulty: "B2" },
  { id: "ec09", sentence: "I've been studying medicine during five years.", error: "during", correction: "for", explanation: "'During' refers to when something happens within a period. 'For' refers to duration/length of time.", category: "errorcorrection", difficulty: "B2" },
  { id: "ec10", sentence: "She denied to have copied in the exam.", error: "to have copied", correction: "having copied", explanation: "'Deny' is followed by a gerund (deny doing/having done), not a to-infinitive.", category: "errorcorrection", difficulty: "B2" },
  { id: "ec11", sentence: "The more you practice, more confident you become.", error: "more confident", correction: "the more confident", explanation: "Comparative correlative: 'The more... the more...' — both need 'the'.", category: "errorcorrection", difficulty: "B2" },
  { id: "ec12", sentence: "I'm looking forward to hear from you about the internship.", error: "to hear", correction: "to hearing", explanation: "'Look forward to' — here 'to' is a preposition, so it's followed by a gerund.", category: "errorcorrection", difficulty: "B2" },
];

// ─────────────────────────────────────
//  WORD FORMATION (Use of English Part 3)
// ─────────────────────────────────────
export const WORD_FORMATION = [
  { id: "wf01", sentence: "The ___ of the new drug was confirmed after clinical trials.", root: "EFFECTIVE", a: ["effectiveness", "effectivity"], hint: "Noun form needed after 'The'", category: "wordformation", difficulty: "B2" },
  { id: "wf02", sentence: "Many patients are ___ about the side effects of the vaccine.", root: "CONCERN", a: ["concerned"], hint: "Adjective form: past participle used as adjective", category: "wordformation", difficulty: "B2" },
  { id: "wf03", sentence: "Her ___ to become a surgeon has never wavered.", root: "DETERMINE", a: ["determination"], hint: "Abstract noun form with -ation", category: "wordformation", difficulty: "B2" },
  { id: "wf04", sentence: "The procedure was ___, and the patient recovered quickly.", root: "PAIN", a: ["painless"], hint: "Adjective meaning 'without pain': -less suffix", category: "wordformation", difficulty: "B2" },
  { id: "wf05", sentence: "There has been a ___ improvement in the patient's condition.", root: "NOTICE", a: ["noticeable"], hint: "Adjective form with -able suffix", category: "wordformation", difficulty: "B2" },
  { id: "wf06", sentence: "The ___ between the two diagnoses was confusing.", root: "SIMILAR", a: ["similarity"], hint: "Noun form with -ity suffix", category: "wordformation", difficulty: "B2" },
  { id: "wf07", sentence: "It would be ___ to ignore these symptoms.", root: "RESPONSIBLE", a: ["irresponsible"], hint: "Negative adjective: ir- prefix", category: "wordformation", difficulty: "B2" },
  { id: "wf08", sentence: "The surgeon performed the operation ___.", root: "SKILL", a: ["skillfully", "skilfully"], hint: "Adverb form: adjective + -fully", category: "wordformation", difficulty: "B2" },
  { id: "wf09", sentence: "Early ___ is crucial for treating most cancers.", root: "DETECT", a: ["detection"], hint: "Noun form with -ion suffix", category: "wordformation", difficulty: "B2" },
  { id: "wf10", sentence: "The test results were ___, so we need to redo them.", root: "CONCLUDE", a: ["inconclusive"], hint: "Negative adjective: in- prefix + -ive suffix", category: "wordformation", difficulty: "B2" },
  { id: "wf11", sentence: "The hospital is ___ for its cardiology department.", root: "KNOW", a: ["known"], hint: "Past participle used as adjective after 'is'", category: "wordformation", difficulty: "B2" },
  { id: "wf12", sentence: "She felt a sudden ___ in her chest.", root: "TIGHT", a: ["tightness"], hint: "Noun form: adjective + -ness", category: "wordformation", difficulty: "B2" },
];

// ─────────────────────────────────────
//  MEDICAL VOCABULARY (Contextual)
// ─────────────────────────────────────
export const VOCABULARY = [
  { id: "vc01", q: "Choose the correct word: The doctor wrote a ___ for antibiotics.", options: ["prescription", "receipt", "recipe", "description"], a: "prescription", hint: "A doctor's written order for medicine", category: "vocabulary", difficulty: "B2" },
  { id: "vc02", q: "Choose the correct word: The patient was ___ to the ICU after the accident.", options: ["admitted", "submitted", "permitted", "committed"], a: "admitted", hint: "To be accepted into a hospital for treatment", category: "vocabulary", difficulty: "B2" },
  { id: "vc03", q: "Choose the correct word: She suffered a ___ reaction to the medication.", options: ["severe", "hard", "strong", "heavy"], a: "severe", hint: "Very serious or intense (medical context)", category: "vocabulary", difficulty: "B2" },
  { id: "vc04", q: "Choose the correct word: The blood test showed a high ___ of cholesterol.", options: ["level", "grade", "degree", "rate"], a: "level", hint: "Amount of a substance in the blood", category: "vocabulary", difficulty: "B2" },
  { id: "vc05", q: "Choose the correct word: The surgeon will ___ on the patient's knee tomorrow.", options: ["operate", "surgery", "cut", "treat"], a: "operate", hint: "Verb: to perform surgery", category: "vocabulary", difficulty: "B2" },
  { id: "vc06", q: "Choose the correct word: After the treatment, the patient made a full ___.", options: ["recovery", "healing", "cure", "remedy"], a: "recovery", hint: "The process of returning to health", category: "vocabulary", difficulty: "B2" },
  { id: "vc07", q: "Choose the correct word: The ___ of the disease are fever, cough, and fatigue.", options: ["symptoms", "signals", "signs", "marks"], a: "symptoms", hint: "Physical indications experienced by a patient", category: "vocabulary", difficulty: "B2" },
  { id: "vc08", q: "Choose the correct word: The doctor ___ her with Type 2 diabetes.", options: ["diagnosed", "detected", "discovered", "determined"], a: "diagnosed", hint: "To identify a disease after examination", category: "vocabulary", difficulty: "B2" },
  { id: "vc09", q: "Choose the correct word: The wound needs to be ___ to prevent infection.", options: ["dressed", "clothed", "covered", "wrapped"], a: "dressed", hint: "Medical term: to apply a dressing to a wound", category: "vocabulary", difficulty: "B2" },
  { id: "vc10", q: "Choose the correct word: The patient is currently on a ___ of chemotherapy.", options: ["course", "path", "road", "way"], a: "course", hint: "A planned series of medical treatments", category: "vocabulary", difficulty: "B2" },
  { id: "vc11", q: "Choose the correct word: She has a ___ condition that requires regular check-ups.", options: ["chronic", "critical", "constant", "continuous"], a: "chronic", hint: "Long-lasting, persistent (medical term)", category: "vocabulary", difficulty: "B2" },
  { id: "vc12", q: "Choose the correct word: The X-ray ___ a fracture in her wrist.", options: ["revealed", "showed up", "opened", "displayed"], a: "revealed", hint: "To make something hidden become visible or known", category: "vocabulary", difficulty: "B2" },
];

// ─────────────────────────────────────
//  READING COMPREHENSION (Short passages)
// ─────────────────────────────────────
export const READING = [
  {
    id: "rd01", category: "reading", difficulty: "B2",
    title: "The Placebo Effect",
    passage: "The placebo effect remains one of medicine's most fascinating phenomena. When patients receive an inert treatment — a sugar pill, saline injection, or even a sham surgery — some experience genuine improvements in their condition. Recent neuroscience research has revealed that placebos can trigger measurable changes in brain chemistry, including the release of endorphins and dopamine. Critics argue this makes clinical trials more complicated, as researchers must account for the placebo response when evaluating new drugs. However, some physicians believe the placebo effect could be harnessed ethically as a complementary approach to conventional treatment.",
    questions: [
      { q: "What does 'inert' most likely mean in this context?", options: ["Having no therapeutic effect", "Extremely powerful", "Recently discovered", "Carefully designed"], a: "Having no therapeutic effect" },
      { q: "According to the passage, placebos can:", options: ["Cause real chemical changes in the brain", "Replace conventional medicine entirely", "Only work on patients with mild conditions", "Only be effective as sugar pills"], a: "Cause real chemical changes in the brain" },
      { q: "Why do critics see the placebo effect as problematic?", options: ["It complicates the evaluation of new medicines", "It proves that drugs don't work", "It is too expensive to study", "It only works on certain patients"], a: "It complicates the evaluation of new medicines" },
    ]
  },
  {
    id: "rd02", category: "reading", difficulty: "B2",
    title: "Antibiotic Resistance",
    passage: "The World Health Organization has declared antibiotic resistance one of the greatest threats to global health. Bacteria evolve rapidly, and the overuse of antibiotics in both human medicine and agriculture has accelerated this process dramatically. When antibiotics are prescribed unnecessarily — for viral infections, for instance — or when patients fail to complete their full course of treatment, resistant strains have an opportunity to develop and spread. The pharmaceutical industry has been slow to develop new antibiotics, partly because they are less profitable than drugs for chronic conditions. Without urgent action, routine surgeries and minor infections could once again become life-threatening.",
    questions: [
      { q: "What is the main cause of antibiotic resistance according to the passage?", options: ["Overuse and misuse of antibiotics", "Lack of hygiene in hospitals", "Patients refusing treatment", "The high cost of antibiotics"], a: "Overuse and misuse of antibiotics" },
      { q: "Why has the pharmaceutical industry been slow to develop new antibiotics?", options: ["They generate less profit than chronic disease drugs", "Scientists don't know how to create them", "Governments have banned new antibiotic research", "Bacteria are impossible to study"], a: "They generate less profit than chronic disease drugs" },
      { q: "What could happen without action against antibiotic resistance?", options: ["Simple infections could become deadly again", "All bacteria would disappear", "Hospitals would close permanently", "Viral infections would increase"], a: "Simple infections could become deadly again" },
    ]
  },
  {
    id: "rd03", category: "reading", difficulty: "B2",
    title: "Sleep and Memory",
    passage: "Medical students are notorious for sacrificing sleep to study, yet research consistently shows this strategy is counterproductive. During sleep, the brain consolidates memories by replaying and strengthening neural pathways formed during the day. The hippocampus, a region critical for learning, transfers information to the neocortex for long-term storage during deep sleep stages. Studies have found that students who sleep seven to eight hours before an exam perform significantly better than those who pull all-nighters, even when the latter group has spent more total hours studying. Furthermore, chronic sleep deprivation impairs the prefrontal cortex, reducing decision-making ability — a particularly dangerous outcome for future physicians.",
    questions: [
      { q: "According to the passage, what happens during sleep?", options: ["The brain strengthens and organizes new memories", "The brain deletes unnecessary information", "Neural pathways are permanently destroyed", "The hippocampus stops functioning"], a: "The brain strengthens and organizes new memories" },
      { q: "Why is sleep deprivation particularly concerning for medical students?", options: ["It impairs decision-making, which is critical for doctors", "It causes permanent brain damage", "It makes them forget everything they learned", "It leads to immediate academic failure"], a: "It impairs decision-making, which is critical for doctors" },
      { q: "What do studies show about all-night study sessions?", options: ["They are less effective than sleeping before an exam", "They are the best way to prepare for exams", "They only work for medical students", "They have no effect on performance"], a: "They are less effective than sleeping before an exam" },
    ]
  },
];

// ─────────────────────────────────────
//  MOTIVATIONAL MESSAGES
// ─────────────────────────────────────
export const MOTIVATIONS = [
  "You're doing amazing, Male! 🩺✨",
  "Every exercise brings you closer to fluency! 💪",
  "Future Dr. Malena crushing it in English! 🎓",
  "Consistency beats perfection. Keep going! 🔥",
  "Your medical English is getting sharper! 🏥",
  "B2 today, C1 tomorrow. You've got this! 📈",
  "Practice makes a great doctor AND a great English speaker! 🌟",
  "Anatomy of success: study + practice + rest 🧠",
];
