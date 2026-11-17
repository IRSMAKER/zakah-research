export interface TableRow {
  cells: string[];
}

export const poles = [
  {
    id: "state",
    name: "STATE",
    gloss: "purity-growth",
    description:
      "Purity as a quality of a living self: a pure soul, a pure boy, a purity given to a prophet, a child better in purity, wholesome food, a kept boundary, a guarded gaze. The root's success-word belongs here.",
    refs: ["18:74", "19:19", "19:13", "18:81", "18:19", "91:9"],
    marker: "Quality",
  },
  {
    id: "act",
    name: "ACT",
    gloss: "the giving",
    description:
      "The release of a portion of wealth that cleanses what remains and causes it to grow. Done as a work, sent ahead, lent to God, given seeking the Face — and never fixed to a percentage.",
    refs: ["9:103", "92:18", "23:4", "30:39", "2:110"],
    marker: "Release",
  },
  {
    id: "grant",
    name: "GRANT",
    gloss: "the Purifier",
    description:
      "God and His Messenger as the agents who actually purify. The human act is the channel, not the cause: no one purifies himself, and no one may declare himself pure.",
    refs: ["4:49", "24:21", "2:129", "3:164", "62:2"],
    marker: "Given",
  },
];

export const nounLexicon: TableRow[] = [
  { cells: ["ZAKĀH", "noun (f.)", "the growth-purity; the institution that carries it", "2:43 · 2:83 · 98:5 (26×)"] },
  { cells: ["ZAKĀH", "indefinite noun", "a purity-endowment given to a person", "19:13"] },
  { cells: ["ZAKĀH", "indefinite noun", "a grade of purity — “better in zakāh”", "18:81"] },
  { cells: ["ZAKĀH", "indefinite noun", "any act of giving the Increase", "30:39"] },
  { cells: ["ZAKĪ", "adjective", "pure, guiltless, sound", "18:74 · 19:19"] },
  { cells: ["AZKĀ", "elative", "purer, more wholesome, better", "18:19 · 2:232 · 24:28 · 24:30"] },
  { cells: ["MUZAKKĪ", "Form II participle", "the one who purifies and causes growth", "2:129 · 3:164 · 9:103"] },
  { cells: ["MUTAZAKKĪ", "Form V participle", "the self-purifier", "92:18 · 35:18 · 87:14"] },
];

export const verbVoices: TableRow[] = [
  { cells: ["زَكَا", "simple state", "to be pure", "24:21"] },
  { cells: ["يُزَكِّي", "Form II active", "He makes pure", "4:49 · 24:21"] },
  { cells: ["يُزَكِّيهِم", "Form II active", "He makes them pure", "2:129 · 3:164 · 62:2"] },
  { cells: ["زَكَّاهَا", "Form II perfect", "he purified it — the soul", "91:9"] },
  { cells: ["تُزَكُّوا", "Form II prohibitive", "do not declare yourselves pure", "53:32"] },
  { cells: ["تَزَكَّىٰ", "Form V", "to purify oneself", "87:14 · 20:76 · 79:18"] },
  { cells: ["يَتَزَكَّىٰ", "Form V", "he purifies himself", "35:18 · 92:18"] },
  { cells: ["يَزَّكَّىٰ", "Form V assimilated", "he purifies himself", "80:3 · 80:7"] },
  { cells: ["أَزْكَىٰ", "elative", "purer, more wholesome", "18:19 · 2:232 · 24:28 · 24:30"] },
  { cells: ["زَكِيَّة · زَكِيّ", "adjective", "pure, guiltless", "18:74 · 19:19"] },
];

export const grantTable: TableRow[] = [
  { cells: ["humans declare themselves pure (4:49)", "God makes pure whom He wills (4:49)"] },
  { cells: ["no one would be pure without favour (24:21)", "God makes pure whom He wills (24:21)"] },
  { cells: ["sell revelation for a small price (2:174)", "He will not make them pure (2:174)"] },
  { cells: ["sell the covenant for a small price (3:77)", "no speech, no look, no purity (3:77)"] },
  { cells: ["declare yourselves pure (53:32)", "He knows best who is guarded (53:32)"] },
];

export const breachPattern: TableRow[] = [
  { cells: ["2:174", "concealed the Book, sold it for a small price", "no purification; fire in the belly"] },
  { cells: ["3:77", "sold God's covenant and oaths for a small price", "no share, no speech, no look, no purity"] },
  { cells: ["41:7", "withheld the Increase", "counted a disbeliever in the Hereafter"] },
  { cells: ["4:49", "claimed self-purity", "the claim corrected by the grant"] },
  { cells: ["53:32", "declared the self pure", "the verdict belongs to God alone"] },
  { cells: ["24:21", "followed Satan's steps", "purity impossible without grace"] },
  { cells: ["2:83", "turned from the covenant", "the giving abandoned with the standing"] },
];

export const twoEffect: TableRow[] = [
  { cells: ["9:103", "tuṭahhiruhum — cleanses them", "tuzakkīhim — makes them grow"] },
  { cells: ["2:232", "aṭhar — cleaner", "azkā — purer"] },
  { cells: ["33:33", "yuṭahhirakum — purify you thoroughly", "the Increase commanded in the same verse"] },
  { cells: ["2:174", "—", "lā yuzakkīhim — He will not purify them"] },
  { cells: ["24:21", "—", "mā zakā … abadan — never pure"] },
];

export const wealthTable: TableRow[] = [
  { cells: ["2:177", "wealth, despite love of it", "relatives, orphans, the poor, the wayfarer, askers, slaves"] },
  { cells: ["9:103", "from their wealth, a giving", "taken by the Messenger; cleanses and grows"] },
  { cells: ["92:18", "his wealth", "not to repay a favour; seeking God's face"] },
  { cells: ["30:39", "any giving of the Increase", "seeking God's face; multiplied"] },
  { cells: ["2:110 · 73:20", "whatever good is sent ahead", "found with God, better and greater"] },
  { cells: ["5:12", "a good loan to God", "repaid with covering and gardens"] },
  { cells: ["2:274-276", "charity, secret and public", "God makes it grow"] },
];

export const selfTable: TableRow[] = [
  { cells: ["91:9-10", "al-nafs", "purified or buried"] },
  { cells: ["53:32", "anfusakum", "do not declare pure"] },
  { cells: ["4:49", "anfusahum", "they declare pure; God makes pure"] },
  { cells: ["35:18", "nafsihi", "purifies only for himself"] },
  { cells: ["92:18", "implied self", "gives wealth, purifying himself"] },
  { cells: ["24:21", "minkum", "not one would be pure without grace"] },
  { cells: ["18:74", "nafsan zakiyyah", "a pure soul"] },
  { cells: ["79:18", "tazakkā", "will you purify yourself?"] },
];

export const timeTable: TableRow[] = [
  { cells: ["19:31", "as long as I live — the lifelong horizon"] },
  { cells: ["19:55", "the habitual household command"] },
  { cells: ["27:3 · 31:4", "a standing practice, named by a participle"] },
  { cells: ["2:110 · 73:20", "value sent ahead into the future"] },
  { cells: ["58:13", "after forgiveness — grace precedes the act"] },
  { cells: ["73:20 · 22:78", "calibrated to capacity, with no constriction"] },
];

export const covenantTable: TableRow[] = [
  { cells: ["2:83", "Israel: one God, social excellence, good speech, standing, giving", "inside the list; breach = turning away"] },
  { cells: ["5:12", "Israel: five conditions", "condition #2, with the good loan as #5"] },
  { cells: ["7:156", "mercy written for the guarding, giving, believing", "a condition of mercy"] },
  { cells: ["98:5", "the upright religion", "one of four constitutive acts"] },
  { cells: ["22:78", "the milla of Abraham, no constriction", "establish, give, hold fast"] },
  { cells: ["9:11", "the brotherhood covenant", "the third condition"] },
  { cells: ["9:5", "the peace covenant", "the third condition"] },
];

export const faceTable: TableRow[] = [
  { cells: ["30:39", "turīdūna wajha Allāh", "seeking God's face — the condition of increase"] },
  { cells: ["92:20", "ibtighāʾa wajhi rabbihi al-aʿlā", "only seeking the face of his Lord Most High"] },
  { cells: ["2:177", "ʿalā ḥubbihi", "despite love of it — the inner cost"] },
  { cells: ["9:103", "taken by the Messenger", "the act has a minister, not a market"] },
  { cells: ["2:110 · 73:20", "li-anfusikum", "for yourselves — the self-benefit"] },
  { cells: ["4:49 · 53:32", "the self as claimant", "the wrong intention: self-certification"] },
];

export const bridges = [
  {
    surah: "Surah 87",
    title: "The hinge to the Standing",
    steps: [
      { ref: "87:14", text: "Flourished is the one who purified." },
      { ref: "87:15", text: "And mentioned the Name of his Lord, and stood." },
      { ref: "87:18-19", text: "This is already written in the scrolls of Abraham and Musa." },
    ],
    note: "Purification prepares the standing; the standing carries the purified. The two roots of this project meet in one verse-pair.",
  },
  {
    surah: "Surah 92",
    title: "The quality becomes the act",
    steps: [
      { ref: "92:5-7", text: "The giver, the guarder, the truster — eased to ease." },
      { ref: "92:18", text: "Who gives his wealth, purifying himself." },
      { ref: "92:19-21", text: "Not to repay a favour, only seeking the face of his Lord Most High." },
    ],
    note: "The verb of purity is defined by the act of giving wealth. This is the exact point where the quality becomes the institution.",
  },
  {
    surah: "Surah 9",
    title: "The mechanism",
    steps: [
      { ref: "9:99", text: "Their spending is counted as the Messenger's standings." },
      { ref: "9:103", text: "Take from their wealth a giving that cleanses and grows them." },
      { ref: "9:84", text: "The standing is withheld from the dead who sold the covenant." },
    ],
    note: "The giving, the standing, and the honor-economy are one system, in one surah.",
  },
  {
    surah: "Surah 30",
    title: "The pivot",
    steps: [
      { ref: "30:38", text: "Give the relative his due, and the poor, and the wayfarer." },
      { ref: "30:39", text: "Interest does not grow with God; the Increase multiplies its givers." },
      { ref: "30:39", text: "Those who seek God's face are the multipliers." },
    ],
    note: "The Quran moves the increase-verb from the lender to the giver. Increase belongs to God, not to the lender.",
  },
];

export const verificationRows: TableRow[] = [
  { cells: ["A · Anchors", "17", "17", "0", "0"] },
  { cells: ["B · Claim and grant", "4", "4", "0", "0"] },
  { cells: ["C · Purifier sent", "4", "4", "0", "0"] },
  { cells: ["D · Covenant", "14", "14", "0", "0"] },
  { cells: ["E · Institution", "17", "17", "0", "0"] },
  { cells: ["Total", "56", "56", "0", "0 contradictions"] },
];
