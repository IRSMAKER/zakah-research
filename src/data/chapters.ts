export interface Chapter {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  lede: string;
  paragraphs: string[];
  discoveries: { title: string; body: string }[];
  refs: string[];
  quote?: { text: string; source: string };
}

export const chapters: Chapter[] = [
  {
    id: "the-question",
    number: "01",
    eyebrow: "The question",
    title: "What if the word is not a tax?",
    lede:
      "The study began with a suspicion: zakāh is usually translated “charity” or “poor-due,” but the same root is used for a pure soul, a pure boy, wholesome food, and the growth of a self. A word that moves through those worlds cannot mean only a payment.",
    paragraphs: [
      "The root is Z-K-W (ز-ك-و). Its family appears in 56 distinct verses and 59 occurrences, across 20 word forms. Some are the familiar noun al-zakāh, always paired with the standing. Others are verbs about purifying a soul. Others are elatives: which food is purer, which choice is purer. One is a participle: “doers of the zakāh.”",
      "If the root had one narrow fiscal meaning, the purity-verses would be unrelated accidents of language. The study tested the opposite: that the root names one thing, and the Quran turns that one thing in different directions.",
      "So the question became precise: what single meaning can hold the pure soul, the pure boy, the wholesome food, the giving of wealth, the doers, and the divine grant together — without forcing any of them?",
    ],
    discoveries: [
      {
        title: "The word is a family, not a single form",
        body: "20 forms across 56 verses: noun, elative, adjective, Form I, Form II, Form V, participle, and verbal noun.",
      },
      {
        title: "The purity-verses are not marginal",
        body: "Seventeen verses use the root for a quality of a self, a child, or food. Any meaning that cannot hold them is incomplete.",
      },
      {
        title: "The hypothesis",
        body: "Z-K-W names purity-with-growth: the release of a portion that cleanses what remains and causes it to increase.",
      },
    ],
    refs: ["18:74", "19:13", "18:19", "92:18", "23:4"],
    quote: {
      text: "A word that can name a pure soul, a wholesome meal, a giving of wealth, and an act of God is not a tax label. It is a structure.",
      source: "Working note, first pass",
    },
  },
  {
    id: "the-method",
    number: "02",
    eyebrow: "The method",
    title: "Read every verse, in its own context",
    lede:
      "The study refused to start from a dictionary definition and then select supporting verses. It read all 56 verses first, in canonical order inside five thematic clusters, and only then asked what they shared.",
    paragraphs: [
      "Each verse was read with its surrounding passage, its grammar, its word-form, and its parallel formulas elsewhere in the Quran. The question was never “what does this verse prove?” but “what is this verse doing with the root?”",
      "Root hygiene came first. Every word containing the letters ز-ك was read. Three forms were excluded: زكريا (Zechariah, root ز-ك-ر) and يلمزك (9:58, “finds fault with you,” where the ك is a pronoun suffix, not a radical). What remained was the true Z-K-W family.",
      "The verses were then grouped by function, not by doctrine: (A) root anchors, (B) the claim and the grant, (C) the purifier sent, (D) the founding formula, (E) the institution. Canonical order inside each cluster kept the reading honest.",
    ],
    discoveries: [
      {
        title: "56 verses, 59 occurrences, 20 forms",
        body: "Every verse read in context; every form accounted for; no verse left outside the test.",
      },
      {
        title: "Look-alikes excluded by reading",
        body: "Zechariah and the pronoun-suffixed “finds fault with you” were removed after inspection, not by a blind string match.",
      },
      {
        title: "Synthesis came last",
        body: "No thesis was proposed until the last verse had been studied. The thesis was then tested back through all 56.",
      },
    ],
    refs: ["2:174", "3:77", "30:39"],
    quote: {
      text: "The corpus is small enough to read completely, and too large to guess about.",
      source: "Working note, root hygiene",
    },
  },
  {
    id: "the-root-before-money",
    number: "03",
    eyebrow: "Cluster A · anchors",
    title: "Purity is a quality before it is a payment",
    lede:
      "The first seventeen verses have almost no money in them. They name a pure soul, a pure boy, a purity given to a prophet, a child better in zakāh, wholesome food, a kept boundary, a guarded gaze.",
    paragraphs: [
      "In 18:74 Musa protests the killing of “a pure soul” — a life without guilt, killed without a life in return. In 19:19 the angel announces “a pure boy” to Maryam. In 19:13 Yahya is given “tenderness from Us, and a purity.” These are qualities of persons, not sums of money.",
      "The elative verses fix the scale. In 18:19 the sleepers seek the food that is “purest” — wholesome, unspoiled. In 18:81 the replacement child is “better in zakāh.” In 2:232, 24:28, and 24:30 a choice is “purer” for you. The root measures a grade of soundness, and a grade can rise.",
      "This is the control that decides the whole study. If zakāh began as a tax, these verses would be metaphorical extensions. If it began as a quality, the tax is the extension. The Quran's own order of use suggests the second.",
    ],
    discoveries: [
      {
        title: "The root's first field is a living self",
        body: "A pure soul (18:74), a pure boy (19:19), a purity given to Yahya (19:13): soundness of a person before any payment.",
      },
      {
        title: "Purity is a grade, not a switch",
        body: "One child can be “better in zakāh” (18:81); one food can be “purest” (18:19); one choice “purer” (2:232).",
      },
      {
        title: "The Quran's own gloss-pair",
        body: "“Purer and cleaner” (2:232): ṭahāra removes defilement; zakāh adds soundness and growth.",
      },
    ],
    refs: ["18:74", "19:19", "19:13", "18:81", "18:19", "2:232", "24:28", "24:30"],
    quote: {
      text: "The root did not begin as a tax and acquire a spiritual gloss. It began as a quality of a sound self.",
      source: "Cluster A finding",
    },
  },
  {
    id: "the-self",
    number: "04",
    eyebrow: "Cluster A · the self",
    title: "The object is always the self",
    lede:
      "When the root becomes a verb, its object is the nafs. The Quran says: flourished who purifies it; failed who buries it. The success of a human life is defined by what happens to the self.",
    paragraphs: [
      "Surah 91 sets the soul between its own wrong and its own guard, then pronounces the verdict: “Flourished is the one who purifies it, and failed is the one who buries it.” This is the centre of the root. Everything else — including the giving of wealth — serves this verse.",
      "The same object appears everywhere. In 79:18 Musa offers Pharaoh purification. In 87:14 the purified one flourishes. In 20:76 Eden is “the reward of the one who purified.” In 35:18 purification is “only for himself.” In 92:18 the one who gives his wealth is “purifying himself.”",
      "And the Quran forbids the verdict: “do not declare yourselves pure” (53:32). The act is commanded; the assessment is not ours. This is the grammar that will make the next chapter necessary.",
    ],
    discoveries: [
      {
        title: "Flourishing is defined by purification",
        body: "91:9-10 binds the root's success-word to the purifying (or burying) of the soul.",
      },
      {
        title: "Purification is non-transferable",
        body: "35:18: whoever purifies, purifies only for himself. No one can do it on another's behalf.",
      },
      {
        title: "The verdict is forbidden",
        body: "53:32 removes the right to declare oneself pure, even while commanding the act.",
      },
    ],
    refs: ["91:9", "79:18", "87:14", "20:76", "35:18", "53:32", "80:3"],
    quote: {
      text: "The root's constant object is the self. Money will be the instrument, never the subject.",
      source: "Cluster A finding",
    },
  },
  {
    id: "the-equation",
    number: "05",
    eyebrow: "The bridge",
    title: "Giving wealth is self-purification",
    lede:
      "One verse joins the quality to the institution. Surah 92 describes the one “who gives his wealth, purifying himself.” The verb is about the self; the instrument is money. This is the exact point where purity becomes the giving.",
    paragraphs: [
      "The verse is not alone. The surah has already described the giver, the guarder, and the truster, and promised to ease him to ease (92:5-7). Then it names the intention: he does not give to repay a favour; he gives “only seeking the face of his Lord Most High” (92:19-21).",
      "The second half of the equation is 9:103: “Take from their wealth a giving by which you cleanse them and make them grow.” One act, two effects. The partitive “from” is decisive: the portion, not the whole. And the giving is taken by the Messenger, for purification — not by a treasury, for revenue.",
      "So the noun zakāh does not name money. It names purity-with-growth that the giving produces. Money is what passes through; the self is what changes.",
    ],
    discoveries: [
      {
        title: "The definition is inside the Quran",
        body: "92:18 defines self-purification by the act of giving wealth. No external lexicon is needed.",
      },
      {
        title: "Two effects, one act",
        body: "9:103: “cleanses them and makes them grow.” Cleansing is subtraction; growth is addition.",
      },
      {
        title: "The portion, not the whole",
        body: "9:103 says “from their wealth” — a partitive. The giving is a release, not a surrender of everything.",
      },
    ],
    refs: ["92:18", "92:5", "92:19", "9:103", "9:99"],
    quote: {
      text: "Who gives his wealth, purifying himself. The object is the self; the instrument is wealth.",
      source: "92:18",
    },
  },
  {
    id: "the-act",
    number: "06",
    eyebrow: "The noun",
    title: "A work with doers, not a tax",
    lede:
      "Elsewhere the Quran says “give the zakāh.” In one verse it says something stranger: “those who are doers of the zakāh.” A tax is paid. A zakāh is done.",
    paragraphs: [
      "Surah 23 lists the believers: humble in their standing, turning from idle talk, active in purification, guarding chastity, keeping trusts and covenants, guarding their standings. In the middle of that character-list sits 23:4: “doers of the zakāh.” The word is treated as a work, a discipline, a character-item.",
      "The rest of the institution follows from this. It is sent ahead like an investment (2:110), given despite love of it (2:177), given without expectation of return (92:18), lent to God (5:12, 73:20), and done while the market is busy (24:37). None of these are the grammar of a tax.",
      "And the Quran gives no rate. It names the act, its effect, its intention, and its recipients. The percentage is a later juristic specification, not a Quranic datum. The Quran's measure is a direction: outward, toward the Face.",
    ],
    discoveries: [
      {
        title: "“Doers of the zakāh”",
        body: "23:4 is the only verse with fāʿilūn. It forbids reducing the word to a payment.",
      },
      {
        title: "Sent ahead, not handed over",
        body: "2:110 and 73:20 use the verb “send forward”; the giver deposits with God and finds it later.",
      },
      {
        title: "No percentage in the corpus",
        body: "The Quran commands the release and names its effects; it never fixes a rate.",
      },
    ],
    refs: ["23:4", "2:110", "2:177", "24:37", "73:20", "5:12"],
    quote: {
      text: "A tax is paid. A zakāh is done.",
      source: "Chapter finding",
    },
  },
  {
    id: "the-grant",
    number: "07",
    eyebrow: "Clusters B & C",
    title: "No one purifies himself",
    lede:
      "The command to give is followed by a safeguard: the giving does not make you the author of your own purity. God purifies whom He wills; the Messenger is sent to purify; no one may declare himself pure.",
    paragraphs: [
      "In 4:49 the claim is corrected in one sentence: they declare themselves pure, but God makes pure whom He wills. In 24:21 the correction is stronger: without God's favour and mercy, not one of you would ever be pure. In 53:32 the verdict is removed from human hands altogether.",
      "The negative form is just as sharp. Those who conceal the Book and sell it for a small price will not be made pure (2:174). Those who sell God's covenant and their oaths for a small price lose speech, sight, and purity together (3:77). The anti-zakāh is always a sale: something that should be released is converted into a price.",
      "And the positive form is a commission. Abraham prays for a messenger who recites, teaches, and purifies (2:129). The Messenger is sent to purify the believers (2:151, 3:164, 62:2). Purification is a favour, mediated by a human, aimed at an exodus from error.",
    ],
    discoveries: [
      {
        title: "Claim versus grant",
        body: "The same verb is used for the human claim (4:49) and the divine grant (4:49, 24:21).",
      },
      {
        title: "The anti-zakāh is a sale",
        body: "2:174 and 3:77: selling revelation or covenant for a small price ends in “He will not purify them.”",
      },
      {
        title: "Purification is a commission",
        body: "2:129, 2:151, 3:164, 62:2: the Messenger recites, purifies, and teaches — a formation, not a collection.",
      },
    ],
    refs: ["4:49", "24:21", "53:32", "2:174", "3:77", "2:129", "3:164", "62:2"],
    quote: {
      text: "The act is yours; the result is God's.",
      source: "Cluster B finding",
    },
  },
  {
    id: "the-covenant",
    number: "08",
    eyebrow: "Clusters D & E",
    title: "Why it stands beside the prayer",
    lede:
      "In most of its verses, zakāh appears in the same sentence as the standing. This is not a listing habit. The standing is the vertical act; the giving is the horizontal act; the Quran will not let either stand alone.",
    paragraphs: [
      "The pair is the constitution of the upright religion (98:5). It is the Israelite covenant (2:43, 2:83, 5:12). It is the peace-condition and the brotherhood-condition (9:5, 9:11). It is the condition for maintaining God's houses (9:18). It is the first act of anyone given power (22:41). It is the economic nerve of the community (9:71).",
      "The prophets carry it. Jesus is enjoined the standing and the zakāh “as long as I live” (19:31). Ishmael commands his household the pair (19:55). The leaders are inspired with “the giving of the zakāh” (21:73). The firmly rooted in knowledge are named as givers (4:162). God's party is defined by giving while bowing (5:55).",
      "And the negative is exact: those who do not give the zakāh are described as disbelievers in the Hereafter (41:7). The giver believes in the return; the withholder has decided there is none. The pair is therefore a test of two directions at once.",
    ],
    discoveries: [
      {
        title: "One of four constitutive acts",
        body: "98:5: sincere worship, uprightness, the standing, the giving — “the religion of the upright.”",
      },
      {
        title: "The community's conditions",
        body: "Peace (9:5), brotherhood (9:11), building (9:18), power (22:41), and public life (9:71).",
      },
      {
        title: "The negative definition",
        body: "41:7 coordinates withholding with disbelief in the Hereafter.",
      },
    ],
    refs: ["98:5", "2:83", "5:12", "9:5", "9:11", "9:18", "22:41", "9:71", "41:7"],
    quote: {
      text: "The standing is the vertical act; the giving is the horizontal act. The Quran will not let either stand alone.",
      source: "Chapter finding",
    },
  },
  {
    id: "the-increase",
    number: "09",
    eyebrow: "The pivot",
    title: "Interest does not grow; the giving does",
    lede:
      "One verse settles the economics. God contrasts interest, which people think makes wealth grow, with zakāh, whose givers are named “the multipliers.” The Quran moves the increase-verb from the lender to the giver.",
    paragraphs: [
      "30:39: “Whatever you give as interest so that it may increase in people's wealth does not increase with God; but whatever you give of the zakāh, seeking God's face — those are the multipliers.” The same root for increase is used for interest, and denied. The giving is given a different name, and multiplied.",
      "The surrounding Quran agrees. 2:276 says God erases interest and makes the charities grow. 2:277 promises the givers no fear and no grief — the exact opposite of the anxious accumulator. 92:19-21 promises the giver who seeks the Face that he will be satisfied.",
      "This is not a metaphor imported from a lexicon. It is the root's own growth sense, stated by the Quran in the root's own letters. Zakāh is the growth that comes by release.",
    ],
    discoveries: [
      {
        title: "“The multipliers”",
        body: "30:39 names the givers al-muḍʿifūn — the doublers. The growth is stated, not inferred.",
      },
      {
        title: "The increase-verb is transferred",
        body: "Interest is denied increase with God; the giving receives it.",
      },
      {
        title: "Fearless giving",
        body: "2:277: the givers have no fear and no grief, one verse after God makes charities grow.",
      },
    ],
    refs: ["30:39", "2:276", "2:277", "92:19", "73:20", "2:110"],
    quote: {
      text: "Ribā is the attempt to grow by holding; zakāh is the growth that comes by letting go.",
      source: "Chapter finding",
    },
  },
  {
    id: "the-settled-meaning",
    number: "10",
    eyebrow: "The settled meaning",
    title: "Give the portion, and grow",
    lede:
      "The study ends where it began: with the word. But the word is now a structure — purity-with-growth: the release of a portion that cleanses what remains and causes it to increase.",
    paragraphs: [
      "The root has three poles. The STATE is what the word is: a sound self, a pure child, a wholesome food, a kept boundary. The ACT is how it is done: a portion released from wealth, given despite love of it, given without return, given seeking the Face. The GRANT is who makes it work: God who purifies whom He wills, and the Messenger sent to recite, teach, and purify.",
      "The measure is not a percentage but a direction: outward, toward the Face, for the growth of what remains. The Quran never fixes a rate; it fixes an intention and names an effect. And it protects the giver from pride: the act is commanded, the verdict is God's.",
      "The last bridge is to the standing. In Surah 87 the purified one mentions the Name and stands (87:14-15). In 9:103 the giving cleanses and grows, and the Prophet's standing is tranquility. Purification prepares the standing; the standing carries the purified. Give the portion, and grow.",
    ],
    discoveries: [
      {
        title: "Three poles, one motion",
        body: "State (what it is), Act (how it is done), Grant (who makes it work).",
      },
      {
        title: "A direction, not a rate",
        body: "The Quran commands the release and names its effect; it does not fix a percentage.",
      },
      {
        title: "The bridge to the Standing",
        body: "87:14-15: purified, mentioned the Name, then stood. The two roots meet.",
      },
    ],
    refs: ["87:14", "87:15", "9:103", "98:5", "30:39", "92:18"],
    quote: {
      text: "Give the portion, and grow.",
      source: "The settled meaning",
    },
  },
];
