import rawArabic from "./verse-arabic.json";
import { surahName } from "./surahs";

export type Pole = "state" | "act" | "grant" | "bridge";
export type Cluster = "A" | "B" | "C" | "D" | "E";
export type Fit = "direct" | "nuance";

export interface VerseContent {
  ref: string;
  id: string;
  aliases?: string[];
  title: string;
  translation: string;
  pole: Pole;
  fit: Fit;
  note: string;
}

export interface Verse extends VerseContent {
  surah: number;
  surahName: string;
  forms: string[];
  arabic: string;
  slug: string;
  cluster: Cluster;
}

type ArabicEntry = {
  ref: string;
  surah: number;
  forms: string[];
  arabic: string;
};

const arabic = rawArabic as ArabicEntry[];

const content: VerseContent[] = [
  {
    ref: "18:74",
    id: "A1",
    title: "A pure soul, killed",
    translation:
      "He said: “Have you killed a pure soul, without a soul in return? You have brought a dreadful thing.”",
    pole: "state",
    fit: "direct",
    note: "The root's first field is a living self: purity as guiltlessness, not money.",
  },
  {
    ref: "19:19",
    id: "A2",
    title: "A pure boy announced",
    translation:
      "He said: “I am only a messenger of your Lord, to grant you a pure boy.”",
    pole: "state",
    fit: "direct",
    note: "Purity is given before the person acts — an endowment, not an achievement.",
  },
  {
    ref: "19:13",
    id: "A3",
    title: "A purity from Us",
    translation:
      "“And tenderness from Us, and a purity; and he was guarded.”",
    pole: "state",
    fit: "direct",
    note: "The noun appears as an inner gift beside tenderness — not a payment.",
  },
  {
    ref: "18:81",
    id: "A4",
    title: "Better in purity",
    translation:
      "“So we intended that their Lord replace him with one better in purity and nearer in mercy.”",
    pole: "state",
    fit: "direct",
    note: "Purity is a grade that can increase: one person can be better in it than another.",
  },
  {
    ref: "18:19",
    id: "A5",
    title: "Which food is purest",
    translation:
      "“Send one of you with this silver to the city, and let him see which of its food is purest, and bring you provision from it.”",
    pole: "state",
    fit: "direct",
    note: "The root measures wholesomeness — a thing with nothing corrupt in it.",
  },
  {
    ref: "2:232",
    id: "A6",
    title: "Purer and cleaner",
    translation: "“That is purer for you and cleaner.”",
    pole: "state",
    fit: "direct",
    note: "The Quran's own gloss-pair: purity-growth beside cleansing. Cleansing removes; growth adds.",
  },
  {
    ref: "24:28",
    id: "A7",
    title: "Purer to return",
    translation: "“And if you are told, Go back, then go back; it is purer for you.”",
    pole: "state",
    fit: "direct",
    note: "A boundary kept is purity. The word's field includes the restraint of the hand and foot.",
  },
  {
    ref: "24:30",
    id: "A8",
    title: "Purer for the gaze",
    translation:
      "“Tell the believing men to lower their gaze and guard their chastity. That is purer for them.”",
    pole: "state",
    fit: "direct",
    note: "The first wealth to be purified is the eye and the member.",
  },
  {
    ref: "91:9",
    id: "A9",
    title: "Flourished who purifies it",
    translation:
      "“Flourished is the one who purifies it, and failed is the one who buries it.”",
    pole: "state",
    fit: "direct",
    note: "The object of purification is the self; the root's success-word is bound to it.",
  },
  {
    ref: "79:18",
    id: "A10",
    title: "Will you purify yourself?",
    translation: "“Then say: Is there a way for you to purify yourself?”",
    pole: "state",
    fit: "direct",
    note: "The invitation is offered to a tyrant — universal, not sectarian.",
  },
  {
    ref: "87:14",
    id: "A11",
    title: "Purified, then stood",
    translation:
      "“Flourished is the one who purified, and mentioned the Name of his Lord, and stood.”",
    pole: "bridge",
    fit: "direct",
    note: "The bridge to Ṣ-L-W: purity, remembrance, standing — one sequence, two roots.",
  },
  {
    ref: "20:76",
    id: "A12",
    title: "The reward of the purified",
    translation:
      "“Gardens of Eden … that is the reward of the one who purified.”",
    pole: "state",
    fit: "direct",
    note: "Purification is the entry-condition to Eden.",
  },
  {
    ref: "35:18",
    id: "A13",
    title: "Purification is for the self",
    translation:
      "“Whoever purifies, purifies only for himself; and to God is the destination.”",
    pole: "state",
    fit: "direct",
    note: "Non-transferable and self-benefiting — no one purifies on another's behalf.",
  },
  {
    ref: "92:18",
    id: "A14",
    title: "Gives his wealth, purifying himself",
    translation: "“Who gives his wealth, purifying himself.”",
    pole: "act",
    fit: "direct",
    note: "The equation: the self is the object, wealth the instrument. The giving is the purification.",
  },
  {
    ref: "80:3",
    id: "A15",
    title: "Perhaps he would purify",
    translation: "“And what makes you know? Perhaps he would purify.”",
    pole: "state",
    fit: "direct",
    note: "The blind man may be the one who purifies; rank does not purchase purity.",
  },
  {
    ref: "80:7",
    id: "A16",
    title: "Purification cannot be forced",
    translation: "“And what is on you if he does not purify?”",
    pole: "state",
    fit: "direct",
    note: "The Messenger conveys; the person acts. The word is an invitation before it is an obligation.",
  },
  {
    ref: "53:32",
    id: "A17",
    title: "Do not declare yourselves pure",
    translation:
      "“So do not declare yourselves pure; He knows best who is guarded.”",
    pole: "grant",
    fit: "direct",
    note: "The verdict is forbidden, not the act. Purity is a process one undergoes, not a status one announces.",
  },
  {
    ref: "4:49",
    id: "B1",
    title: "The claim and the grant",
    translation:
      "“Have you not seen those who declare themselves pure? Rather, God makes pure whom He wills, and they are not wronged a thread.”",
    pole: "grant",
    fit: "direct",
    note: "The same verb, two subjects: human claim and divine grant.",
  },
  {
    ref: "24:21",
    id: "B2",
    title: "No one would ever be pure",
    translation:
      "“Were it not for God's favour upon you and His mercy, not one of you would ever be pure — but God makes pure whom He wills.”",
    pole: "grant",
    fit: "direct",
    note: "Even the simplest form of the root is a gift. The act is yours; the result is God's.",
  },
  {
    ref: "2:174",
    id: "B3",
    title: "He will not make them pure",
    translation:
      "“… They eat into their bellies nothing but fire, and God will not speak to them on the Day of Rising, nor make them pure; theirs is a painful punishment.”",
    pole: "grant",
    fit: "direct",
    note: "The loss of purification is the punishment. The anti-increase is a sale: revelation sold for a small price.",
  },
  {
    ref: "3:77",
    id: "B4",
    title: "The fourfold negation",
    translation:
      "“… No share for them in the Hereafter, and God will not speak to them, nor look at them on the Day of Rising, nor make them pure; theirs is a painful punishment.”",
    pole: "grant",
    fit: "direct",
    note: "Those who sell the covenant for a small price lose speech, sight, and purity together.",
  },
  {
    ref: "2:129",
    id: "C1",
    title: "Abraham's prayer for a purifier",
    translation:
      "“Our Lord, raise among them a messenger from among them, who recites Your signs to them, teaches them the Book and the wisdom, and makes them pure.”",
    pole: "grant",
    fit: "direct",
    note: "Purification is the goal of revelation and the Messenger's commission — a formation, not a collection.",
  },
  {
    ref: "2:151",
    id: "C2",
    title: "A messenger from among you",
    translation:
      "“As We sent among you a messenger from among you, reciting Our signs to you, making you pure, and teaching you the Book and the wisdom.”",
    pole: "grant",
    fit: "direct",
    note: "Purification is mediated by a human who shares your condition.",
  },
  {
    ref: "3:164",
    id: "C3",
    title: "A favour, not a wage",
    translation:
      "“God conferred a favour on the believers when He raised among them a messenger from among themselves, reciting His signs to them, making them pure, and teaching them the Book and the wisdom.”",
    pole: "grant",
    fit: "direct",
    note: "Purification is a favour. The order — recite, purify, teach — makes it the hinge of learning.",
  },
  {
    ref: "62:2",
    id: "C4",
    title: "Out of clear error",
    translation:
      "“He is the One who raised among the unlettered a messenger from among them, reciting His signs to them, making them pure, and teaching them the Book and the wisdom — though before they were in clear error.”",
    pole: "grant",
    fit: "direct",
    note: "Purification is an exodus from one state to another, like coming out of darkness into light.",
  },
  {
    ref: "98:5",
    id: "D1",
    title: "The upright religion",
    translation:
      "“They were not commanded except to worship God, sincere to Him in religion, upright, and to establish the Standing and give the Increase — that is the religion of the upright.”",
    pole: "act",
    fit: "direct",
    note: "One of four constitutive acts of the upright religion, not an optional extra.",
  },
  {
    ref: "2:43",
    id: "D2",
    title: "Bow with those who bow",
    translation:
      "“And establish the Standing, and give the Increase, and bow with those who bow.”",
    pole: "act",
    fit: "direct",
    note: "The pair is commanded to a whole community, with a shared posture.",
  },
  {
    ref: "2:83",
    id: "D3",
    title: "The covenant they turned from",
    translation:
      "“… And establish the Standing and give the Increase. Then you turned away, except a few of you, and you were turning aside.”",
    pole: "act",
    fit: "direct",
    note: "The increase sits inside a social-ethical covenant; its breach is a turning-away.",
  },
  {
    ref: "5:12",
    id: "D4",
    title: "Five conditions",
    translation:
      "“If you establish the Standing and give the Increase and believe in My messengers and support them and lend God a good loan, I will cover your bad deeds and admit you to gardens.”",
    pole: "act",
    fit: "direct",
    note: "Condition two of five; the fifth is a loan to God. The economic axis runs through the covenant.",
  },
  {
    ref: "2:110",
    id: "D5",
    title: "Send ahead",
    translation:
      "“And establish the Standing and give the Increase; whatever good you send ahead for yourselves, you will find it with God.”",
    pole: "act",
    fit: "direct",
    note: "The giving is sent forward — an investment deposited with God, not a loss.",
  },
  {
    ref: "2:177",
    id: "D6",
    title: "Inside righteousness",
    translation:
      "“… And gives wealth, despite love of it, to relatives, orphans, the poor, the wayfarer, the askers, and for slaves, and establishes the Standing and gives the Increase …”",
    pole: "act",
    fit: "direct",
    note: "Two layers: the open hand of love, then the standing obligation of the community. The inner cost is named.",
  },
  {
    ref: "2:277",
    id: "D7",
    title: "No fear, no grief",
    translation:
      "“Those who believe and do good works and establish the Standing and give the Increase — their reward is with their Lord, and no fear is on them, nor do they grieve.”",
    pole: "act",
    fit: "direct",
    note: "The anti-interest act: the givers are fearless, one verse after God makes the charities grow.",
  },
  {
    ref: "7:156",
    id: "D8",
    title: "Mercy written for the givers",
    translation:
      "“My mercy encompasses all things; I will write it for those who guard, and give the Increase, and believe in Our signs.”",
    pole: "act",
    fit: "direct",
    note: "A condition for mercy being written. The giver is inside the circle.",
  },
  {
    ref: "19:31",
    id: "D9",
    title: "Enjoined for life",
    translation:
      "“He has made me blessed wherever I am, and enjoined on me the Standing and the Increase as long as I live.”",
    pole: "act",
    fit: "direct",
    note: "A prophetic enjoinder, lifelong, tied to blessedness — and blessedness is increase.",
  },
  {
    ref: "19:55",
    id: "D10",
    title: "The household command",
    translation:
      "“He used to command his household the Standing and the Increase, and he was pleasing to his Lord.”",
    pole: "act",
    fit: "direct",
    note: "The family is the first unit of the institution.",
  },
  {
    ref: "21:73",
    id: "D11",
    title: "Inspired to give",
    translation:
      "“We made them leaders guiding by Our command, and We inspired them the doing of good, the establishing of the Standing, and the giving of the Increase.”",
    pole: "act",
    fit: "direct",
    note: "The giving is revelation-shaped and a mark of leadership. Leaders are defined by what they give.",
  },
  {
    ref: "22:78",
    id: "D12",
    title: "No constriction",
    translation:
      "“… He has not placed on you any constriction in the religion … So establish the Standing and give the Increase and hold fast to God.”",
    pole: "act",
    fit: "direct",
    note: "The obligation belongs to the eased religion; it cannot be a crushing burden.",
  },
  {
    ref: "4:162",
    id: "D13",
    title: "The firmly rooted givers",
    translation:
      "“… And the establishers of the Standing and the givers of the Increase … those We will give a great reward.”",
    pole: "act",
    fit: "direct",
    note: "The givers are a distinct class alongside the firmly rooted in knowledge.",
  },
  {
    ref: "5:55",
    id: "D14",
    title: "God's party",
    translation:
      "“Your ally is only God, His Messenger, and those who believe — who establish the Standing and give the Increase while bowing.”",
    pole: "act",
    fit: "direct",
    note: "The giver is an ally of God. The two acts fuse in one posture.",
  },
  {
    ref: "9:5",
    id: "E1",
    title: "The peace-condition",
    translation:
      "“If they repent and establish the Standing and give the Increase, then release their way; God is forgiving, merciful.”",
    pole: "act",
    fit: "direct",
    note: "The giving is the proof of repentance and the gate to peace.",
  },
  {
    ref: "9:11",
    id: "E2",
    title: "Brothers in religion",
    translation:
      "“If they repent and establish the Standing and give the Increase, then they are your brothers in religion.”",
    pole: "act",
    fit: "direct",
    note: "The brotherhood-condition: withholding keeps one outside the bond.",
  },
  {
    ref: "9:18",
    id: "E3",
    title: "The mosque-maintainers",
    translation:
      "“Only those maintain God's houses who believe in God and the Last Day, establish the Standing, give the Increase, and fear none but God.”",
    pole: "act",
    fit: "direct",
    note: "A condition for building: the one who gives is the one who maintains.",
  },
  {
    ref: "9:71",
    id: "E4",
    title: "The community's nerve",
    translation:
      "“The believing men and believing women are allies of one another: they enjoin good, forbid wrong, establish the Standing, give the Increase, and obey God and His Messenger.”",
    pole: "act",
    fit: "direct",
    note: "The economic nerve of the believing community, men and women alike.",
  },
  {
    ref: "9:103",
    id: "E5",
    title: "Cleansed and grown",
    translation:
      "“Take from their wealth a giving by which you cleanse them and make them grow, and stand toward them; your standing is tranquility for them.”",
    pole: "act",
    fit: "direct",
    note: "The mechanism: one act, two effects — cleansing and growth. The partitive “from” is decisive.",
  },
  {
    ref: "22:41",
    id: "E6",
    title: "The first act of power",
    translation:
      "“Those who, if We establish them in the land, establish the Standing, give the Increase, enjoin good, and forbid wrong.”",
    pole: "act",
    fit: "direct",
    note: "The test of power is whether it gives, not whether it collects.",
  },
  {
    ref: "23:4",
    id: "E7",
    title: "Doers of the Increase",
    translation: "“And those who are doers of the Increase.”",
    pole: "act",
    fit: "direct",
    note: "A work with doers, not a tax that is paid. The strongest proof that zakāh is an act.",
  },
  {
    ref: "24:37",
    id: "E8",
    title: "Neither trade nor sale",
    translation:
      "“Men whom neither trade nor sale distracts from the remembrance of God, the establishing of the Standing, and the giving of the Increase.”",
    pole: "act",
    fit: "direct",
    note: "The economic test: the market bows at the giving.",
  },
  {
    ref: "24:56",
    id: "E9",
    title: "That you may receive mercy",
    translation:
      "“Establish the Standing and give the Increase and obey the Messenger, that you may receive mercy.”",
    pole: "act",
    fit: "direct",
    note: "A condition for mercy, paired with obedience.",
  },
  {
    ref: "27:3",
    id: "E10",
    title: "Certain of the Hereafter",
    translation:
      "“Those who establish the Standing and give the Increase, and they are certain of the Hereafter.”",
    pole: "act",
    fit: "direct",
    note: "The one sure of the return gives now.",
  },
  {
    ref: "30:39",
    id: "E11",
    title: "The multipliers",
    translation:
      "“Whatever you give as interest so that it may increase in people's wealth does not increase with God; but whatever you give of the Increase, seeking God's face — those are the multipliers.”",
    pole: "act",
    fit: "direct",
    note: "The pivot: the Quran moves the increase-verb from the lender to the giver.",
  },
  {
    ref: "31:4",
    id: "E12",
    title: "The fixed formula",
    translation:
      "“Those who establish the Standing and give the Increase, and they are certain of the Hereafter.”",
    pole: "act",
    fit: "direct",
    note: "Word-for-word with 27:3: a fixed Quranic formula, therefore an institution.",
  },
  {
    ref: "33:33",
    id: "E13",
    title: "The purified household",
    translation:
      "“Establish the Standing and give the Increase and obey God and His Messenger … God only desires to remove impurity from you, people of the house, and to purify you thoroughly.”",
    pole: "act",
    fit: "direct",
    note: "The verse ends in cleansing: the giving and purification are one movement.",
  },
  {
    ref: "41:7",
    id: "E14",
    title: "Withholding is denial",
    translation:
      "“Those who do not give the Increase, and they are disbelievers in the Hereafter.”",
    pole: "act",
    fit: "direct",
    note: "Withholding is coordinated with disbelief in the return — the sharpest negative definition.",
  },
  {
    ref: "58:13",
    id: "E15",
    title: "After forgiveness",
    translation:
      "“So when you did not do it, and God turned to you in forgiveness, establish the Standing and give the Increase and obey God and His Messenger.”",
    pole: "act",
    fit: "direct",
    note: "Grace precedes the act; the failed giver is re-commanded.",
  },
  {
    ref: "73:20",
    id: "E16",
    title: "The eased arrangement",
    translation:
      "“Recite what is easy of the Quran … establish the Standing and give the Increase and lend God a good loan.”",
    pole: "act",
    fit: "direct",
    note: "Commanded in the same breath as the concession; the giver becomes God's creditor.",
  },
  {
    ref: "4:77",
    id: "E17",
    title: "The peace-act",
    translation:
      "“Establish the Standing and give the Increase.” Then, when fighting was prescribed for them, a group of them feared people as they should fear God.",
    pole: "act",
    fit: "direct",
    note: "Giving loosens the grip on wealth before life is asked for.",
  },
];

function clusterOf(id: string): Cluster {
  return id[0] as Cluster;
}

export const verses: Verse[] = content.map((item) => {
  const a = arabic.find((entry) => entry.ref === item.ref);
  if (!a) {
    throw new Error(`No Arabic entry for ${item.ref}`);
  }
  return {
    ...item,
    surah: a.surah,
    surahName: surahName(a.surah),
    forms: a.forms,
    arabic: a.arabic,
    slug: item.ref.replace(/:/g, "-"),
    cluster: clusterOf(item.id),
  };
});

if (verses.length !== arabic.length) {
  throw new Error(
    `Verse count mismatch: ${verses.length} content entries vs ${arabic.length} Arabic entries`,
  );
}

export const POLE_META: Record<
  Pole,
  { label: string; short: string; description: string; accent: string }
> = {
  state: {
    label: "State",
    short: "Purity-growth",
    description:
      "Purity as a quality of a self, a soul, a child, or food — a soundness that can be graded and given.",
    accent: "var(--pole-state)",
  },
  act: {
    label: "Act",
    short: "The giving",
    description:
      "The release of a portion of wealth that cleanses what remains and causes it to grow — done, given, sent ahead.",
    accent: "var(--pole-act)",
  },
  grant: {
    label: "Grant",
    short: "The Purifier",
    description:
      "God and His Messenger as the agents who actually purify. No one purifies himself; the act is the channel, not the cause.",
    accent: "var(--pole-grant)",
  },
  bridge: {
    label: "Bridge",
    short: "Purify, then stand",
    description:
      "The verse where Z-K-W meets Ṣ-L-W: purified, mentioned the Name, then stood.",
    accent: "var(--pole-bridge)",
  },
};

export const CLUSTER_META: Record<
  Cluster,
  { label: string; description: string }
> = {
  A: {
    label: "A · Anchors",
    description: "Purity and growth before the institution is attached.",
  },
  B: {
    label: "B · Claim",
    description: "Who may purify: the human claim and the divine grant.",
  },
  C: {
    label: "C · Sent",
    description: "The Messenger as the agent of purification.",
  },
  D: {
    label: "D · Covenant",
    description: "Prophets, covenants, and the ṣalāh-zakāh pair.",
  },
  E: {
    label: "E · Institution",
    description: "Community, power, economy, and the increase.",
  },
};

export const verseBySlug = new Map(verses.map((v) => [v.slug, v]));

export const COUNTS = {
  verses: verses.length,
  occurrences: 59,
  forms: 20,
  clusters: 5,
  direct: verses.filter((v) => v.fit === "direct").length,
  nuance: verses.filter((v) => v.fit === "nuance").length,
};
