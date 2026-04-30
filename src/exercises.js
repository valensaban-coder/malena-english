// ═══════════════════════════════════════════════
//  EXERCISE DATABASE — Male's English Lab
//  Personalizado para Malena (Medicina, UBA, B1→C1)
// ═══════════════════════════════════════════════

export const CATEGORIES = [
  { id: "grammar", name: "Grammar", icon: "📐", color: "#a78bfa" },
  { id: "vocabulary", name: "Vocabulary", icon: "📚", color: "#67e8f9" },
  { id: "rephrasing", name: "Rephrasing", icon: "🔄", color: "#fbbf24" },
  { id: "reading", name: "Reading", icon: "📖", color: "#f472b6" },
  { id: "errorcorrection", name: "Error Correction", icon: "🔍", color: "#34d399" },
  { id: "wordformation", name: "Word Formation", icon: "🧩", color: "#fb923c" },
];

export function checkAnswer(userAnswer, correctAnswers) {
  const normalize = s => s.trim().toLowerCase().replace(/['']/g, "'").replace(/\s+/g, " ");
  const user = normalize(userAnswer);
  if (Array.isArray(correctAnswers)) {
    return correctAnswers.some(a => normalize(a) === user);
  }
  return normalize(correctAnswers) === user;
}

// ─────────────────────────────────────
//  FILL IN THE BLANK
// ─────────────────────────────────────
export const FILL_BLANK = [
  // ── B1 ──
  { id: "fb_b1_01", topic: "Present Perfect", q: "She ___ (never/see) a surgery before today.", a: ["has never seen"], hint: "Present perfect: has/have + past participle", category: "grammar", difficulty: "B1" },
  { id: "fb_b1_02", topic: "Present Perfect", q: "The doctor ___ (just/leave) the ward.", a: ["has just left"], hint: "Just goes between has/have and the past participle", category: "grammar", difficulty: "B1" },
  { id: "fb_b1_03", topic: "Present Perfect Continuous", q: "The patient ___ (wait) for three hours.", a: ["has been waiting"], hint: "Present perfect continuous: has been + -ing", category: "grammar", difficulty: "B1" },
  { id: "fb_b1_04", topic: "Present Perfect Continuous", q: "How long ___ you ___ (study) medicine?", a: ["have you been studying"], hint: "Question form: How long + have + subject + been + -ing?", category: "grammar", difficulty: "B1" },
  { id: "fb_b1_05", topic: "Past Simple vs Continuous", q: "While the nurse ___ (take) his temperature, he fell asleep.", a: ["was taking"], hint: "Past continuous for an ongoing action interrupted by another", category: "grammar", difficulty: "B1" },
  { id: "fb_b1_06", topic: "Past Simple vs Continuous", q: "The ambulance ___ (arrive) while we were still on the phone.", a: ["arrived"], hint: "Past simple for the action that interrupts", category: "grammar", difficulty: "B1" },
  { id: "fb_b1_07", topic: "Comparatives", q: "This treatment is ___ (effective) than the previous one.", a: ["more effective"], hint: "More + adjective for long adjectives", category: "grammar", difficulty: "B1" },
  { id: "fb_b1_08", topic: "Comparatives", q: "The second operation was ___ (complex) than the first.", a: ["less complex", "more complex"], hint: "Less/more + complex", category: "grammar", difficulty: "B1" },
  { id: "fb_b1_09", topic: "Future Forms", q: "The conference ___ (start) at 9 AM tomorrow.", a: ["starts", "is starting"], hint: "Present simple or present continuous for scheduled future", category: "grammar", difficulty: "B1" },
  { id: "fb_b1_10", topic: "Future Forms", q: "I think she ___ (pass) the anatomy exam.", a: ["will pass"], hint: "Will + base form for predictions", category: "grammar", difficulty: "B1" },
  { id: "fb_b1_11", topic: "Modal Verbs", q: "You ___ (must/not) skip your medication.", a: ["must not", "mustn't"], hint: "Must not = prohibition", category: "grammar", difficulty: "B1" },
  { id: "fb_b1_12", topic: "Modal Verbs", q: "Patients ___ (should) avoid alcohol after surgery.", a: ["should"], hint: "Should + base form for advice/recommendation", category: "grammar", difficulty: "B1" },
  { id: "fb_b1_13", topic: "First Conditional", q: "If you ___ (not/rest), you won't recover quickly.", a: ["don't rest", "do not rest"], hint: "First conditional: if + present simple, will + base form", category: "grammar", difficulty: "B1" },
  { id: "fb_b1_14", topic: "First Conditional", q: "She ___ (feel) better if she takes the antibiotics.", a: ["will feel"], hint: "Will + base form in the result clause", category: "grammar", difficulty: "B1" },
  { id: "fb_b1_15", topic: "Passive Voice", q: "The patient ___ (examine) by the specialist this morning.", a: ["was examined"], hint: "Past simple passive: was/were + past participle", category: "grammar", difficulty: "B1" },
  { id: "fb_b1_16", topic: "Passive Voice", q: "The results ___ (send) to the patient tomorrow.", a: ["will be sent"], hint: "Future passive: will be + past participle", category: "grammar", difficulty: "B1" },
  { id: "fb_b1_17", topic: "Relative Clauses", q: "The nurse ___ helped me was very kind.", a: ["who", "that"], hint: "Who or that for people in defining relative clauses", category: "grammar", difficulty: "B1" },
  { id: "fb_b1_18", topic: "Relative Clauses", q: "This is the hospital ___ I was born.", a: ["where"], hint: "Where for places in relative clauses", category: "grammar", difficulty: "B1" },

  // ── B2 ──
  { id: "fb01", topic: "Mixed Conditionals", q: "If I ___ (study) harder at school, I would have a better job now.", a: ["had studied"], hint: "Mixed conditional: past perfect → present result", category: "grammar", difficulty: "B2" },
  { id: "fb02", topic: "Mixed Conditionals", q: "If she ___ (not/move) to London, she wouldn't be so happy today.", a: ["hadn't moved", "had not moved"], hint: "Past condition affecting present situation", category: "grammar", difficulty: "B2" },
  { id: "fb03", topic: "Mixed Conditionals", q: "I ___ (travel) more if I didn't have so many exams at university.", a: ["would travel"], hint: "Second conditional: would + base form for unreal present", category: "grammar", difficulty: "B2" },
  { id: "fb04", topic: "Third Conditional", q: "If the patient ___ (arrive) sooner, the doctors could have saved him.", a: ["had arrived"], hint: "Third conditional: past perfect in if-clause", category: "grammar", difficulty: "B2" },
  { id: "fb05", topic: "Advanced Passives", q: "The new treatment ___ (believe) to reduce symptoms significantly.", a: ["is believed"], hint: "Impersonal passive: subject + is believed + to infinitive", category: "grammar", difficulty: "B2" },
  { id: "fb06", topic: "Advanced Passives", q: "The research paper ___ (should/submit) before the deadline.", a: ["should have been submitted"], hint: "Modal passive: should have been + past participle", category: "grammar", difficulty: "B2" },
  { id: "fb07", topic: "Advanced Passives", q: "It ___ (report) that the virus is spreading rapidly.", a: ["is reported", "has been reported"], hint: "Impersonal passive with 'it'", category: "grammar", difficulty: "B2" },
  { id: "fb08", topic: "Advanced Passives", q: "The patient ___ (operate) on yesterday afternoon.", a: ["was operated"], hint: "Simple past passive", category: "grammar", difficulty: "B2" },
  { id: "fb09", topic: "Reported Speech", q: "The doctor said the patient ___ (need) to rest for a week.", a: ["needed"], hint: "Backshift: present simple → past simple", category: "grammar", difficulty: "B2" },
  { id: "fb10", topic: "Reported Speech", q: "She told me she ___ (be/wait) for the results since Monday.", a: ["had been waiting"], hint: "Backshift: present perfect continuous → past perfect continuous", category: "grammar", difficulty: "B2" },
  { id: "fb11", topic: "Reported Speech", q: "The professor asked us whether we ___ (finish) the assignment.", a: ["had finished"], hint: "Reported questions: past perfect after asked whether", category: "grammar", difficulty: "B2" },
  { id: "fb12", topic: "Modals of Deduction", q: "She's been studying all night. She ___ (must/be) exhausted.", a: ["must be"], hint: "Must + base form for present deduction (certain)", category: "grammar", difficulty: "B2" },
  { id: "fb13", topic: "Modals of Deduction", q: "He ___ (can't/pass) the exam — he never studied!", a: ["can't have passed"], hint: "Can't have + past participle for impossible past deduction", category: "grammar", difficulty: "B2" },
  { id: "fb14", topic: "Modals of Deduction", q: "The lights are off. They ___ (might/go) to bed already.", a: ["might have gone"], hint: "Might have + past participle for past possibility", category: "grammar", difficulty: "B2" },
  { id: "fb18", topic: "Wish & If Only", q: "I wish I ___ (choose) a different specialization.", a: ["had chosen"], hint: "Wish + past perfect for past regrets", category: "grammar", difficulty: "B2" },
  { id: "fb19", topic: "Wish & If Only", q: "If only the hospital ___ (have) better equipment.", a: ["had"], hint: "If only + past simple for present wishes", category: "grammar", difficulty: "B2" },
  { id: "fb20", topic: "Wish & If Only", q: "I wish my classmates ___ (stop) talking during lectures.", a: ["would stop"], hint: "Wish + would for complaints about habits", category: "grammar", difficulty: "B2" },
  { id: "fb21", topic: "Relative Clauses", q: "Dr. García, ___ research focuses on cardiology, won an award.", a: ["whose"], hint: "Possessive relative pronoun in non-defining clause", category: "grammar", difficulty: "B2" },
  { id: "fb22", topic: "Relative Clauses", q: "The hospital ___ I did my internship was in Barracas.", a: ["where"], hint: "Relative adverb for place", category: "grammar", difficulty: "B2" },
  { id: "fb23", topic: "Gerunds vs Infinitives", q: "I remember ___ (dissect) my first specimen. It was nerve-wracking.", a: ["dissecting"], hint: "Remember + gerund = recall a past experience", category: "grammar", difficulty: "B2" },
  { id: "fb24", topic: "Gerunds vs Infinitives", q: "Don't forget ___ (bring) your stethoscope to the practical.", a: ["to bring"], hint: "Forget + to-infinitive = fail to remember a future action", category: "grammar", difficulty: "B2" },
  { id: "fb25", topic: "Gerunds vs Infinitives", q: "The surgeon stopped ___ (check) the patient's vitals.", a: ["to check"], hint: "Stop + to-infinitive = pause in order to do something", category: "grammar", difficulty: "B2" },
  { id: "fb_b2_01", topic: "Reported Speech", q: "She said she ___ (finish) the report the following day.", a: ["would finish"], hint: "Backshift: will → would in reported speech", category: "grammar", difficulty: "B2" },
  { id: "fb_b2_02", topic: "Reported Speech", q: "He told me he ___ (be) a doctor for 20 years.", a: ["had been"], hint: "Backshift: present perfect → past perfect", category: "grammar", difficulty: "B2" },
  { id: "fb_b2_03", topic: "Modals of Deduction", q: "The scan looks clear. It ___ (can't/be) a tumour.", a: ["can't be"], hint: "Can't + be for present impossibility", category: "grammar", difficulty: "B2" },
  { id: "fb_b2_04", topic: "Modals of Deduction", q: "She ___ (must/work) very hard — she got the highest mark.", a: ["must have worked"], hint: "Must have + past participle for past certainty", category: "grammar", difficulty: "B2" },
  { id: "fb_b2_05", topic: "Gerunds vs Infinitives", q: "The nurse tried ___ (wake) the patient but he didn't respond.", a: ["to wake", "waking"], hint: "Try + to-inf (attempt) or try + -ing (experiment)", category: "grammar", difficulty: "B2" },
  { id: "fb_b2_06", topic: "Advanced Passives", q: "A new vaccine ___ (develop) by the research team right now.", a: ["is being developed"], hint: "Present continuous passive: is/are being + past participle", category: "grammar", difficulty: "B2" },
  { id: "fb_b2_07", topic: "Third Conditional", q: "If the ambulance ___ (not/delay), he might have survived.", a: ["hadn't been delayed", "had not been delayed"], hint: "Third conditional with passive in the if-clause", category: "grammar", difficulty: "B2" },
  { id: "fb_b2_08", topic: "Wish & If Only", q: "I wish I ___ (not/say) that to the patient's family.", a: ["hadn't said", "had not said"], hint: "Wish + past perfect for past regrets", category: "grammar", difficulty: "B2" },

  // ── C1 ──
  { id: "fb15", topic: "Inversions", q: "Not only ___ she pass the exam, but she also got the highest mark.", a: ["did"], hint: "Not only + auxiliary + subject inversion", category: "grammar", difficulty: "C1" },
  { id: "fb16", topic: "Inversions", q: "Hardly ___ the lecture started when the fire alarm went off.", a: ["had"], hint: "Hardly + had + subject", category: "grammar", difficulty: "C1" },
  { id: "fb17", topic: "Inversions", q: "Never ___ I seen such a complicated surgery.", a: ["have"], hint: "Never + auxiliary + subject", category: "grammar", difficulty: "C1" },
  { id: "fb26", topic: "Subjunctive", q: "The doctor recommended that she ___ (take) the medication twice daily.", a: ["take"], hint: "Subjunctive: bare infinitive after recommend", category: "grammar", difficulty: "C1" },
  { id: "fb27", topic: "Subjunctive", q: "It's essential that every patient ___ (be) examined thoroughly.", a: ["be"], hint: "Subjunctive: 'be' (not 'is') after adjectives of necessity", category: "grammar", difficulty: "C1" },
  { id: "fb28", topic: "Participle Clauses", q: "___ (complete) her residency, she moved to a rural hospital.", a: ["Having completed"], hint: "Perfect participle: Having + past participle", category: "grammar", difficulty: "C1" },
  { id: "fb29", topic: "Participle Clauses", q: "___ (not/know) the diagnosis, the team ordered more tests.", a: ["Not knowing"], hint: "Negative present participle clause", category: "grammar", difficulty: "C1" },
  { id: "fb_c1_01", topic: "Inversions", q: "Under no circumstances ___ patients leave the ward without permission.", a: ["should", "are"], hint: "Under no circumstances + inverted auxiliary", category: "grammar", difficulty: "C1" },
  { id: "fb_c1_02", topic: "Inversions", q: "Only after she had read the results ___ she understand the diagnosis.", a: ["did"], hint: "Only after + past perfect → did + subject + base form", category: "grammar", difficulty: "C1" },
  { id: "fb_c1_03", topic: "Subjunctive", q: "It is vital that the surgeon ___ (wash) their hands before operating.", a: ["wash", "washes"], hint: "Subjunctive or indicative after it is vital that", category: "grammar", difficulty: "C1" },
  { id: "fb_c1_04", topic: "Cleft Sentences", q: "It ___ the long hours that made her exhausted, not the workload.", a: ["was"], hint: "It + be + emphasis + that/who", category: "grammar", difficulty: "C1" },
  { id: "fb_c1_05", topic: "Cleft Sentences", q: "___ surprised me most was how quickly she recovered.", a: ["What"], hint: "What-cleft: What + clause + was/is", category: "grammar", difficulty: "C1" },
  { id: "fb_c1_06", topic: "Participle Clauses", q: "___ (exhaust) from the night shift, the resident made a minor error.", a: ["Exhausted"], hint: "Past participle clause = passive/adjectival meaning", category: "grammar", difficulty: "C1" },
  { id: "fb_c1_07", topic: "Participle Clauses", q: "The drug, ___ (develop) in the 1990s, is still widely used.", a: ["developed"], hint: "Reduced relative clause with past participle", category: "grammar", difficulty: "C1" },
  { id: "fb_c1_08", topic: "Mixed Conditionals", q: "Were I ___ (know) about the interaction, I wouldn't have prescribed it.", a: ["to know"], hint: "Formal inversion: Were + subject + to + infinitive", category: "grammar", difficulty: "C1" },
  { id: "fb_c1_09", topic: "Advanced Passives", q: "The procedure ___ (think) to carry a low risk of complications.", a: ["is thought"], hint: "Impersonal passive: is thought + to + infinitive", category: "grammar", difficulty: "C1" },
  { id: "fb_c1_10", topic: "Emphasis", q: "Little ___ she know that the test would change her life.", a: ["did"], hint: "Little + inverted auxiliary + subject for emphasis", category: "grammar", difficulty: "C1" },
];

// ─────────────────────────────────────
//  REPHRASING
// ─────────────────────────────────────
export const REPHRASING = [
  // ── B1 ──
  { id: "rp_b1_01", original: "It's possible that she has food poisoning.", keyword: "MIGHT", prompt: 'Complete: "She ___ food poisoning."', a: ["might have", "might have food poisoning"], hint: "Might + have for possibility", category: "rephrasing", difficulty: "B1" },
  { id: "rp_b1_02", original: "I started studying medicine four years ago.", keyword: "FOR", prompt: 'Complete: "I ___ medicine for four years."', a: ["have been studying", "have studied"], hint: "Present perfect (continuous) for duration from past to now", category: "rephrasing", difficulty: "B1" },
  { id: "rp_b1_03", original: "He is too tired to continue the shift.", keyword: "ENOUGH", prompt: 'Complete: "He is not ___ to continue the shift."', a: ["energetic enough", "well enough", "awake enough"], hint: "Not + adjective + enough + to infinitive", category: "rephrasing", difficulty: "B1" },
  { id: "rp_b1_04", original: "The last time she visited the hospital was a year ago.", keyword: "BEEN", prompt: 'Complete: "She ___ the hospital for a year."', a: ["hasn't been to", "has not been to"], hint: "Present perfect negative: hasn't been to + place + for + time", category: "rephrasing", difficulty: "B1" },
  { id: "rp_b1_05", original: "It is not necessary for you to come to the appointment.", keyword: "HAVE", prompt: 'Complete: "You ___ to the appointment."', a: ["don't have to come", "do not have to come"], hint: "Don't have to = no obligation", category: "rephrasing", difficulty: "B1" },
  { id: "rp_b1_06", original: "It's a good idea to eat vegetables every day.", keyword: "SHOULD", prompt: 'Complete: "You ___ vegetables every day."', a: ["should eat"], hint: "Should + base form for advice", category: "rephrasing", difficulty: "B1" },
  { id: "rp_b1_07", original: "The exam was so difficult that she couldn't finish it.", keyword: "TOO", prompt: 'Complete: "The exam was ___ for her to finish."', a: ["too difficult"], hint: "Too + adjective + for + object + to + infinitive", category: "rephrasing", difficulty: "B1" },
  { id: "rp_b1_08", original: "They will probably find a cure for this disease.", keyword: "LIKELY", prompt: 'Complete: "They ___ a cure for this disease."', a: ["are likely to find"], hint: "Be likely + to + infinitive", category: "rephrasing", difficulty: "B1" },

  // ── B2 ──
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
  { id: "rp_b2_01", original: "Someone broke into the pharmacy last night.", keyword: "BROKEN", prompt: 'Complete: "The pharmacy ___ last night."', a: ["was broken into"], hint: "Passive with phrasal verb: was broken into", category: "rephrasing", difficulty: "B2" },
  { id: "rp_b2_02", original: "He was so exhausted that he fell asleep in the lecture.", keyword: "SUCH", prompt: 'Complete: "He was ___ that he fell asleep in the lecture."', a: ["such an exhausted student", "in such exhaustion"], hint: "Such + a/an + adjective + noun + that", category: "rephrasing", difficulty: "B2" },
  { id: "rp_b2_03", original: "It isn't necessary for doctors to work 80 hours a week.", keyword: "HAVE", prompt: 'Complete: "Doctors ___ 80 hours a week."', a: ["don't have to work", "do not have to work"], hint: "Don't have to = no obligation", category: "rephrasing", difficulty: "B2" },
  { id: "rp_b2_04", original: "She will only pass if she studies every day.", keyword: "UNLESS", prompt: 'Complete: "She ___ if she doesn\'t study every day."', a: ["will fail", "won't pass"], hint: "Unless = if not", category: "rephrasing", difficulty: "B2" },
  { id: "rp_b2_05", original: "The professor advised students to read the chapter.", keyword: "SUGGESTED", prompt: 'Complete: "The professor ___ the chapter."', a: ["suggested reading", "suggested that students read", "suggested they read"], hint: "Suggest + gerund or suggest + that + subjunctive", category: "rephrasing", difficulty: "B2" },
  { id: "rp_b2_06", original: "I'm certain he didn't take the medication.", keyword: "CAN'T", prompt: 'Complete: "He ___ the medication."', a: ["can't have taken"], hint: "Can't have + past participle for past impossibility", category: "rephrasing", difficulty: "B2" },
  { id: "rp_b2_07", original: "This is the most complex case I've ever seen.", keyword: "NEVER", prompt: 'Complete: "I ___ such a complex case."', a: ["have never seen", "'ve never seen"], hint: "Present perfect + never + such a + noun", category: "rephrasing", difficulty: "B2" },

  // ── C1 ──
  { id: "rp_c1_01", original: "It was the long hours that caused the burnout, not the stress.", keyword: "WHAT", prompt: 'Complete: "___ was the long hours, not the stress."', a: ["what caused the burnout"], hint: "What-cleft for emphasis", category: "rephrasing", difficulty: "C1" },
  { id: "rp_c1_02", original: "She managed to complete the research despite the difficulties.", keyword: "NOTWITHSTANDING", prompt: 'Complete: "___ the difficulties, she managed to complete the research."', a: ["notwithstanding"], hint: "Notwithstanding = despite (formal)", category: "rephrasing", difficulty: "C1" },
  { id: "rp_c1_03", original: "He would only consider surgery if all other options failed.", keyword: "PROVIDED", prompt: 'Complete: "He would consider surgery ___ all other options failed."', a: ["provided that", "provided"], hint: "Provided (that) = on the condition that", category: "rephrasing", difficulty: "C1" },
  { id: "rp_c1_04", original: "She didn't know that she had a rare condition until the tests came back.", keyword: "ONLY", prompt: 'Complete: "Only when the tests came back ___ that she had a rare condition."', a: ["did she know", "did she find out"], hint: "Only when + inversion: did + subject + base form", category: "rephrasing", difficulty: "C1" },
  { id: "rp_c1_05", original: "They are said to have discovered a new treatment.", keyword: "REPORTEDLY", prompt: 'Complete: "They ___ a new treatment."', a: ["have reportedly discovered"], hint: "Reportedly + present perfect", category: "rephrasing", difficulty: "C1" },
  { id: "rp_c1_06", original: "I strongly advise you to consult a specialist.", keyword: "STRONGLY", prompt: 'Complete: "It is ___ that you consult a specialist."', a: ["strongly recommended", "strongly advised"], hint: "It is + adverb + past participle + that + subject + verb", category: "rephrasing", difficulty: "C1" },
  { id: "rp_c1_07", original: "Had I known the results were wrong, I wouldn't have published them.", keyword: "KNOWN", prompt: 'Complete: "If I ___ the results were wrong, I wouldn\'t have published them."', a: ["had known"], hint: "Third conditional: If + past perfect (Had I known = inverted formal form)", category: "rephrasing", difficulty: "C1" },
  { id: "rp_c1_08", original: "No sooner had she read the diagnosis than she burst into tears.", keyword: "IMMEDIATELY", prompt: 'Complete: "___ she read the diagnosis, she burst into tears."', a: ["immediately after", "as soon as"], hint: "As soon as / Immediately after + past perfect or past simple", category: "rephrasing", difficulty: "C1" },
];

// ─────────────────────────────────────
//  ERROR CORRECTION
// ─────────────────────────────────────
export const ERROR_CORRECTION = [
  // ── B1 ──
  { id: "ec_b1_01", sentence: "She has studied medicine since three years.", error: "since three years", correction: "for three years", explanation: "'Since' needs a point in time (since 2021). 'For' is used with durations (for three years).", category: "errorcorrection", difficulty: "B1" },
  { id: "ec_b1_02", sentence: "The doctor gaved me a prescription.", error: "gaved", correction: "gave", explanation: "'Give' is an irregular verb. Past simple is 'gave', not 'gaved'.", category: "errorcorrection", difficulty: "B1" },
  { id: "ec_b1_03", sentence: "I am studying medicine since 2020.", error: "am studying", correction: "have been studying", explanation: "For actions that started in the past and continue now, use the present perfect (continuous), not the present simple/continuous.", category: "errorcorrection", difficulty: "B1" },
  { id: "ec_b1_04", sentence: "She is more taller than her sister.", error: "more taller", correction: "taller", explanation: "Short adjectives form comparatives with -er. Don't add 'more' as well.", category: "errorcorrection", difficulty: "B1" },
  { id: "ec_b1_05", sentence: "He doesn't need to comes to the hospital today.", error: "comes", correction: "come", explanation: "After modal verbs (need to, must, should, etc.), use the base form of the verb.", category: "errorcorrection", difficulty: "B1" },
  { id: "ec_b1_06", sentence: "I went to the pharmacy yesterday to buy some medicines.", error: "medicines", correction: "medicine", explanation: "'Medicine' (the substance) is uncountable. You can say 'some medicine' but not 'medicines' in this context.", category: "errorcorrection", difficulty: "B1" },
  { id: "ec_b1_07", sentence: "She said me to take the pills twice a day.", error: "said me", correction: "told me", explanation: "'Say' cannot take an indirect object directly. Use 'tell someone' or 'say to someone'.", category: "errorcorrection", difficulty: "B1" },
  { id: "ec_b1_08", sentence: "If she will study hard, she will pass the exam.", error: "will study", correction: "studies", explanation: "In first conditional, the if-clause uses present simple, not will.", category: "errorcorrection", difficulty: "B1" },

  // ── B2 ──
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
  { id: "ec_b2_01", sentence: "The patient was too much tired to answer questions.", error: "too much tired", correction: "too tired", explanation: "'Too' is already an intensifier — don't add 'much'. Use: too + adjective.", category: "errorcorrection", difficulty: "B2" },
  { id: "ec_b2_02", sentence: "She made the professor to explain the concept again.", error: "to explain", correction: "explain", explanation: "Causative 'make' takes a bare infinitive (without 'to'): make someone do something.", category: "errorcorrection", difficulty: "B2" },
  { id: "ec_b2_03", sentence: "The drug must have not been tested properly.", error: "must have not", correction: "must not have", explanation: "Negative modal perfects: must not have / can't have + past participle.", category: "errorcorrection", difficulty: "B2" },
  { id: "ec_b2_04", sentence: "Having finished her thesis, it was published immediately.", error: "it was published", correction: "she published it", explanation: "Dangling participle: the subject of 'having finished' must be the same as the main clause subject.", category: "errorcorrection", difficulty: "B2" },
  { id: "ec_b2_05", sentence: "She's been used to work night shifts since she was a student.", error: "to work", correction: "to working", explanation: "'Be used to' is always followed by a gerund (-ing form), not a base infinitive.", category: "errorcorrection", difficulty: "B2" },

  // ── C1 ──
  { id: "ec_c1_01", sentence: "Not only she failed the exam but also lost her scholarship.", error: "she failed", correction: "did she fail", explanation: "After 'Not only', auxiliary inversion is required: Not only did she fail...", category: "errorcorrection", difficulty: "C1" },
  { id: "ec_c1_02", sentence: "Rarely she has encountered such a complex case.", error: "she has encountered", correction: "has she encountered", explanation: "After negative adverbs (rarely, seldom, never), subject-auxiliary inversion is required.", category: "errorcorrection", difficulty: "C1" },
  { id: "ec_c1_03", sentence: "The committee insisted that the report was submitted by Friday.", error: "was submitted", correction: "be submitted", explanation: "After 'insist that', use the subjunctive (bare infinitive): insist that + subject + be.", category: "errorcorrection", difficulty: "C1" },
  { id: "ec_c1_04", sentence: "It is high time she learns how to manage stress.", error: "learns", correction: "learned", explanation: "'It's high time + subject + past tense' — the verb after 'time' should be in the past tense.", category: "errorcorrection", difficulty: "C1" },
  { id: "ec_c1_05", sentence: "The research findings, that were unexpected, changed the field.", error: "that were unexpected", correction: "which were unexpected", explanation: "Non-defining relative clauses (set off by commas) use 'which', not 'that'.", category: "errorcorrection", difficulty: "C1" },
  { id: "ec_c1_06", sentence: "Scarcely she had finished the operation when the next patient arrived.", error: "she had finished", correction: "had she finished", explanation: "After 'scarcely', inversion is required: Scarcely had + subject + past participle.", category: "errorcorrection", difficulty: "C1" },
  { id: "ec_c1_07", sentence: "The results were so much convincing that the paper was accepted immediately.", error: "so much convincing", correction: "so convincing", explanation: "'So' is already an intensifier — don't add 'much'. Use: so + adjective.", category: "errorcorrection", difficulty: "C1" },
];

// ─────────────────────────────────────
//  WORD FORMATION
// ─────────────────────────────────────
export const WORD_FORMATION = [
  // ── B1 ──
  { id: "wf_b1_01", sentence: "Regular exercise is ___ for your heart.", root: "BENEFIT", a: ["beneficial"], hint: "Adjective form with -ial suffix", category: "wordformation", difficulty: "B1" },
  { id: "wf_b1_02", sentence: "She showed great ___ when dealing with difficult patients.", root: "PATIENT", a: ["patience"], hint: "Noun form: the quality of being patient", category: "wordformation", difficulty: "B1" },
  { id: "wf_b1_03", sentence: "The hospital needs more ___ staff.", root: "EXPERIENCE", a: ["experienced"], hint: "Adjective: past participle used as adjective", category: "wordformation", difficulty: "B1" },
  { id: "wf_b1_04", sentence: "It's ___ to skip meals when you're studying.", root: "HEALTH", a: ["unhealthy"], hint: "Negative adjective: un- prefix", category: "wordformation", difficulty: "B1" },
  { id: "wf_b1_05", sentence: "She showed great ___ during the exam.", root: "CONCENTRATE", a: ["concentration"], hint: "Noun form with -tion suffix", category: "wordformation", difficulty: "B1" },
  { id: "wf_b1_06", sentence: "The ___ of the new hospital will take two years.", root: "CONSTRUCT", a: ["construction"], hint: "Noun form with -ion suffix", category: "wordformation", difficulty: "B1" },
  { id: "wf_b1_07", sentence: "He is a very ___ doctor who always listens carefully.", root: "CARE", a: ["careful", "caring"], hint: "Adjective: -ful suffix or -ing suffix", category: "wordformation", difficulty: "B1" },
  { id: "wf_b1_08", sentence: "The medicine was ___ in treating the infection.", root: "EFFECT", a: ["effective"], hint: "Adjective form with -ive suffix", category: "wordformation", difficulty: "B1" },

  // ── B2 ──
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
  { id: "wf_b2_01", sentence: "The research team made a significant ___.", root: "DISCOVER", a: ["discovery"], hint: "Noun form with -y suffix", category: "wordformation", difficulty: "B2" },
  { id: "wf_b2_02", sentence: "The new policy is expected to ___ the waiting times.", root: "SHORT", a: ["shorten"], hint: "Verb form: adjective + -en", category: "wordformation", difficulty: "B2" },
  { id: "wf_b2_03", sentence: "His ___ of anatomy helped him become a great surgeon.", root: "KNOW", a: ["knowledge"], hint: "Noun form: know → knowledge", category: "wordformation", difficulty: "B2" },
  { id: "wf_b2_04", sentence: "The ___ effects of the drug were carefully documented.", root: "ADVERSE", a: ["adverse"], hint: "Adjective: no change needed — adverse is already the correct form", category: "wordformation", difficulty: "B2" },
  { id: "wf_b2_05", sentence: "She spoke ___ about the challenges facing medical students.", root: "PASSION", a: ["passionately"], hint: "Adverb: adjective + -ly", category: "wordformation", difficulty: "B2" },
  { id: "wf_b2_06", sentence: "A lack of sleep can lead to ___ decision-making.", root: "POOR", a: ["poor"], hint: "Adjective: 'poor' is already the correct form here", category: "wordformation", difficulty: "B2" },
  { id: "wf_b2_07", sentence: "It is the doctor's ___ to inform patients of their diagnosis.", root: "RESPONSIBLE", a: ["responsibility"], hint: "Noun form with -ity suffix", category: "wordformation", difficulty: "B2" },
  { id: "wf_b2_08", sentence: "The patient's ___ improved significantly after physiotherapy.", root: "MOBILE", a: ["mobility"], hint: "Noun form with -ity suffix", category: "wordformation", difficulty: "B2" },

  // ── C1 ──
  { id: "wf_c1_01", sentence: "His ___ in the field of neurology is widely recognised.", root: "EXPERT", a: ["expertise"], hint: "Noun: expert → expertise", category: "wordformation", difficulty: "C1" },
  { id: "wf_c1_02", sentence: "The clinical trial was designed to ___ the initial findings.", root: "CORPORATE", a: ["corroborate"], hint: "Verb: to confirm — don't confuse with 'incorporate'", category: "wordformation", difficulty: "C1" },
  { id: "wf_c1_03", sentence: "The drug showed remarkable ___ properties in early trials.", root: "INFLAME", a: ["anti-inflammatory", "antiinflammatory"], hint: "Adjective: anti- prefix + -ory suffix", category: "wordformation", difficulty: "C1" },
  { id: "wf_c1_04", sentence: "The study yielded ___ results that surprised the team.", root: "AMBIGUITY", a: ["ambiguous"], hint: "Adjective: ambiguity → ambiguous", category: "wordformation", difficulty: "C1" },
  { id: "wf_c1_05", sentence: "She is known for her ___ approach to complex diagnoses.", root: "METHOD", a: ["methodical"], hint: "Adjective: method + -ical", category: "wordformation", difficulty: "C1" },
  { id: "wf_c1_06", sentence: "The ___ nature of the condition makes it hard to treat.", root: "PROGRESS", a: ["progressive"], hint: "Adjective: progress + -ive", category: "wordformation", difficulty: "C1" },
];

// ─────────────────────────────────────
//  VOCABULARY (Multiple Choice)
// ─────────────────────────────────────
export const VOCABULARY = [
  // ── B1 ──
  { id: "vc_b1_01", q: "Choose the correct word: The patient needs to ___ the medicine three times a day.", options: ["take", "drink", "eat", "do"], a: "take", hint: "We always 'take' medicine/pills", category: "vocabulary", difficulty: "B1" },
  { id: "vc_b1_02", q: "Choose the correct word: You need to make an ___ to see the specialist.", options: ["appointment", "arrangement", "agreement", "application"], a: "appointment", hint: "A scheduled meeting with a doctor", category: "vocabulary", difficulty: "B1" },
  { id: "vc_b1_03", q: "Choose the correct word: The doctor ___ the patient's blood pressure.", options: ["measured", "counted", "calculated", "weighed"], a: "measured", hint: "We 'measure' blood pressure and temperature", category: "vocabulary", difficulty: "B1" },
  { id: "vc_b1_04", q: "Choose the correct word: He is ___ to penicillin, so he can't take it.", options: ["allergic", "sensitive", "weak", "immune"], a: "allergic", hint: "Having a bad reaction to a substance", category: "vocabulary", difficulty: "B1" },
  { id: "vc_b1_05", q: "Choose the correct word: After the accident, she was taken to the ___ room.", options: ["emergency", "urgent", "critical", "intensive"], a: "emergency", hint: "Emergency room (ER) = urgencias", category: "vocabulary", difficulty: "B1" },
  { id: "vc_b1_06", q: "Choose the correct word: The doctor told him to ___ weight.", options: ["lose", "drop", "reduce", "decrease"], a: "lose", hint: "We 'lose' weight, we don't 'reduce' it in personal health contexts", category: "vocabulary", difficulty: "B1" },
  { id: "vc_b1_07", q: "Choose the correct word: She had a ___ of 39°C.", options: ["temperature", "fever", "heat", "warmth"], a: "temperature", hint: "When referring to a specific number, we say 'a temperature of...', not a fever of", category: "vocabulary", difficulty: "B1" },
  { id: "vc_b1_08", q: "Choose the correct word: The surgeon ___ the operation successfully.", options: ["carried out", "carried on", "carried away", "carried over"], a: "carried out", hint: "Carry out = to perform/execute a task", category: "vocabulary", difficulty: "B1" },

  // ── B2 ──
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
  { id: "vc_b2_01", q: "Choose the correct word: The patient ___ from the anaesthetic slowly.", options: ["recovered", "woke up", "came round", "returned"], a: "came round", hint: "Phrasal verb: to regain consciousness", category: "vocabulary", difficulty: "B2" },
  { id: "vc_b2_02", q: "Choose the correct word: The nurse ___ the patient's chart before the doctor arrived.", options: ["updated", "corrected", "changed", "modified"], a: "updated", hint: "To add the latest information to a medical record", category: "vocabulary", difficulty: "B2" },
  { id: "vc_b2_03", q: "Choose the correct word: The doctor ordered a ___ to rule out a fracture.", options: ["scan", "photo", "picture", "vision"], a: "scan", hint: "A medical imaging procedure (e.g. CT scan, MRI)", category: "vocabulary", difficulty: "B2" },
  { id: "vc_b2_04", q: "Choose the correct word: The tumour was found to be ___.", options: ["benign", "kind", "gentle", "mild"], a: "benign", hint: "Medical term: not cancerous", category: "vocabulary", difficulty: "B2" },
  { id: "vc_b2_05", q: "Choose the correct word: The hospital decided to ___ the new visiting hours policy.", options: ["implement", "apply", "use", "enforce"], a: "implement", hint: "To put a plan or policy into action officially", category: "vocabulary", difficulty: "B2" },
  { id: "vc_b2_06", q: "Choose the correct word: The infection ___ to other parts of the body.", options: ["spread", "moved", "went", "transmitted"], a: "spread", hint: "Infections and diseases 'spread', not 'move'", category: "vocabulary", difficulty: "B2" },
  { id: "vc_b2_07", q: "Choose the correct word: She was given a local ___ before the procedure.", options: ["anaesthetic", "painkiller", "sedative", "antibiotic"], a: "anaesthetic", hint: "A substance used to block pain in a specific area", category: "vocabulary", difficulty: "B2" },
  { id: "vc_b2_08", q: "Choose the correct word: The doctor ___ a series of tests to find the cause.", options: ["ran", "did", "made", "performed"], a: "ran", hint: "We 'run tests' in informal/natural medical English", category: "vocabulary", difficulty: "B2" },

  // ── C1 ──
  { id: "vc_c1_01", q: "Choose the correct word: The ethical ___ of the study were questioned by the committee.", options: ["implications", "consequences", "effects", "outcomes"], a: "implications", hint: "Possible future effects or consequences that are suggested rather than stated", category: "vocabulary", difficulty: "C1" },
  { id: "vc_c1_02", q: "Choose the correct word: The surgeon had to ___ quickly when the patient's condition deteriorated.", options: ["intervene", "interfere", "interrupt", "intercede"], a: "intervene", hint: "To take action to improve a medical situation", category: "vocabulary", difficulty: "C1" },
  { id: "vc_c1_03", q: "Choose the correct word: The new protocol was ___ across all departments.", options: ["standardised", "normalised", "regularised", "unified"], a: "standardised", hint: "To make consistent according to a standard", category: "vocabulary", difficulty: "C1" },
  { id: "vc_c1_04", q: "Choose the correct word: The drug's ___ profile showed it was well-tolerated.", options: ["pharmacological", "chemical", "biological", "organic"], a: "pharmacological", hint: "Relating to the study of drugs and their effects", category: "vocabulary", difficulty: "C1" },
  { id: "vc_c1_05", q: "Choose the correct word: The prognosis for patients with early-stage disease is generally ___.", options: ["favourable", "positive", "good", "promising"], a: "favourable", hint: "Medical term for a positive prognosis", category: "vocabulary", difficulty: "C1" },
  { id: "vc_c1_06", q: "Choose the correct word: The research sought to ___ the link between diet and cardiovascular disease.", options: ["elucidate", "explain", "clarify", "expose"], a: "elucidate", hint: "Formal/academic: to make something clear by explaining it in detail", category: "vocabulary", difficulty: "C1" },
];

// ─────────────────────────────────────
//  READING COMPREHENSION
// ─────────────────────────────────────
export const READING = [
  // ── B1 ──
  {
    id: "rd_b1_01", category: "reading", difficulty: "B1",
    title: "Hand Washing in Medicine",
    passage: "Hand washing is one of the most effective ways to prevent infections. Doctors and nurses must wash their hands before and after touching each patient. Studies show that many infections in hospitals spread because medical staff do not wash their hands correctly. The World Health Organization recommends washing hands for at least 20 seconds using soap and water. When soap is not available, an alcohol-based hand sanitizer should be used. This simple habit can save thousands of lives every year.",
    questions: [
      { q: "How long should hands be washed according to the WHO?", options: ["At least 10 seconds", "At least 20 seconds", "At least 30 seconds", "At least 60 seconds"], a: "At least 20 seconds" },
      { q: "When should alcohol-based hand sanitizer be used?", options: ["When soap is not available", "Instead of soap always", "Before surgery only", "Only by doctors"], a: "When soap is not available" },
      { q: "Why do infections spread in hospitals?", options: ["Staff don't wash hands correctly", "Patients don't shower", "The hospitals are old", "Antibiotics don't work"], a: "Staff don't wash hands correctly" },
    ]
  },
  {
    id: "rd_b1_02", category: "reading", difficulty: "B1",
    title: "The Importance of Sleep",
    passage: "Getting enough sleep is very important for good health. Adults need between seven and nine hours of sleep each night. When people do not sleep enough, they can feel tired, have problems concentrating, and get sick more often. Sleep helps the body repair itself and the brain to store new information. Medical students often do not sleep enough because they study very late. However, research shows that studying without enough sleep is not effective, because the brain cannot remember information well when it is tired.",
    questions: [
      { q: "How many hours of sleep do adults need?", options: ["5-7 hours", "7-9 hours", "9-11 hours", "6-8 hours"], a: "7-9 hours" },
      { q: "What can happen when people don't sleep enough?", options: ["They get sick more often", "They study better", "They feel more energetic", "They remember more"], a: "They get sick more often" },
      { q: "Why is studying without sleep not effective?", options: ["The brain can't remember well when tired", "Books are too heavy at night", "It is too quiet", "The brain works faster at night"], a: "The brain can't remember well when tired" },
    ]
  },

  // ── B2 ──
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
  {
    id: "rd_b2_01", category: "reading", difficulty: "B2",
    title: "Burnout in Healthcare",
    passage: "Burnout among healthcare professionals has reached alarming levels globally. Defined as a state of chronic stress leading to physical and emotional exhaustion, burnout affects approximately 50% of doctors and 30% of nurses worldwide. The condition manifests as depersonalisation — where clinicians emotionally detach from patients — reduced sense of personal accomplishment, and persistent fatigue. The consequences extend beyond the individual: burnt-out physicians are more likely to make errors, prescribe unnecessary treatments, and leave the profession entirely. Addressing burnout requires systemic changes, including reduced administrative burdens, adequate staffing levels, and access to mental health support for medical staff.",
    questions: [
      { q: "How is burnout defined in the passage?", options: ["Chronic stress leading to exhaustion", "A physical illness caused by overwork", "A temporary feeling of tiredness", "Dissatisfaction with pay"], a: "Chronic stress leading to exhaustion" },
      { q: "What is 'depersonalisation' as described in the text?", options: ["Emotional detachment from patients", "Forgetting patient names", "Making more medical errors", "Leaving the profession"], a: "Emotional detachment from patients" },
      { q: "Which of the following is NOT mentioned as a solution to burnout?", options: ["Higher salaries", "Reduced administrative burden", "Better staffing", "Mental health support"], a: "Higher salaries" },
    ]
  },
  {
    id: "rd_b2_02", category: "reading", difficulty: "B2",
    title: "The Gut Microbiome",
    passage: "The human gut contains trillions of microorganisms — bacteria, viruses, and fungi — collectively known as the microbiome. Far from being merely passive inhabitants, these microorganisms play active roles in digestion, immune function, and even mental health. Research has linked imbalances in the gut microbiome, known as dysbiosis, to conditions ranging from irritable bowel syndrome to depression and obesity. Factors that disrupt the microbiome include a diet high in processed foods, overuse of antibiotics, and chronic stress. Conversely, a diet rich in fibre and fermented foods has been shown to support microbial diversity, which is generally associated with better health outcomes.",
    questions: [
      { q: "What term describes an imbalance in the gut microbiome?", options: ["Dysbiosis", "Symbiosis", "Probiosis", "Microbiosis"], a: "Dysbiosis" },
      { q: "According to the passage, the gut microbiome affects:", options: ["Digestion, immune function, and mental health", "Only digestion and immune function", "Only physical health", "Only mental health"], a: "Digestion, immune function, and mental health" },
      { q: "What supports a healthy microbiome?", options: ["A diet rich in fibre and fermented foods", "A diet high in processed foods", "Frequent use of antibiotics", "Avoiding all bacteria"], a: "A diet rich in fibre and fermented foods" },
    ]
  },

  // ── C1 ──
  {
    id: "rd_c1_01", category: "reading", difficulty: "C1",
    title: "Precision Medicine",
    passage: "Precision medicine — also referred to as personalised medicine — represents a paradigm shift from the traditional 'one-size-fits-all' approach to treatment. By leveraging genomic data, biomarkers, and advanced analytics, precision medicine aims to tailor therapeutic interventions to the individual characteristics of each patient. The identification of specific genetic mutations, for instance, has revolutionised oncology: targeted therapies can now be prescribed based on the molecular profile of a tumour rather than its anatomical location. However, the widespread implementation of precision medicine faces significant barriers, including the prohibitive cost of genomic sequencing, concerns about data privacy, and persistent health inequities that limit access to advanced diagnostics in low-income settings.",
    questions: [
      { q: "What does 'paradigm shift' most likely mean in this context?", options: ["A fundamental change in approach", "A small technical improvement", "A controversial new idea", "A temporary trend"], a: "A fundamental change in approach" },
      { q: "How has precision medicine changed oncology?", options: ["Treatments are based on tumour genetics, not location", "Surgery has been eliminated", "Chemotherapy is now universal", "Patients choose their own treatments"], a: "Treatments are based on tumour genetics, not location" },
      { q: "Which barrier to precision medicine relates to fairness?", options: ["Health inequities limiting access", "Cost of genomic sequencing", "Data privacy concerns", "Lack of trained oncologists"], a: "Health inequities limiting access" },
    ]
  },
  {
    id: "rd_c1_02", category: "reading", difficulty: "C1",
    title: "The Opioid Crisis",
    passage: "The opioid crisis, particularly acute in North America, illustrates the complex interplay between pharmaceutical marketing, regulatory oversight, and clinical practice. In the 1990s, aggressive campaigns by pharmaceutical companies promoted opioid analgesics as safe and non-addictive, leading to a dramatic increase in prescriptions. Physicians, often under pressure to manage pain effectively, became unwitting participants in what would become a public health catastrophe. As dependency rates soared, so did overdose deaths — a trend further exacerbated by the emergence of illicitly manufactured fentanyl in the drug supply. The crisis has prompted calls for a reassessment of prescribing guidelines, greater accountability for pharmaceutical companies, and expanded access to addiction treatment services.",
    questions: [
      { q: "What role did pharmaceutical companies play in the opioid crisis?", options: ["Marketed opioids as safe and non-addictive", "Refused to supply painkillers to hospitals", "Developed effective addiction treatments", "Reported risks to the government"], a: "Marketed opioids as safe and non-addictive" },
      { q: "What does 'unwitting' most likely mean in this context?", options: ["Unaware of what they were contributing to", "Deliberately harmful", "Highly knowledgeable", "Legally responsible"], a: "Unaware of what they were contributing to" },
      { q: "What has worsened the crisis in recent years?", options: ["Illicitly manufactured fentanyl", "Increased opioid prescriptions", "New pharmaceutical campaigns", "Reduced addiction treatment"], a: "Illicitly manufactured fentanyl" },
    ]
  },
];

// ─────────────────────────────────────
//  MOTIVATIONAL MESSAGES
// ─────────────────────────────────────
export const MOTIVATIONS = [
  "You're doing amazing, Male! Keep it up!",
  "Every exercise brings you closer to fluency!",
  "Future Dr. Malena crushing it in English!",
  "Consistency beats perfection. Keep going!",
  "Your medical English is getting sharper!",
  "B2 today, C1 tomorrow. You've got this!",
  "Practice makes a great doctor AND a great English speaker!",
  "Anatomy of success: study + practice + rest",
  "One exercise at a time, one step closer!",
  "Hard work now, confident doctor later!",
  "You've got this, Male. Keep pushing!",
  "Every correct answer is a neuron fired!",
];
