// --- bg_chap_14.js ---
const chapterMetadata = {
    title: "Chapter 14: The Yoga of the Division of the Three Gunas",
    info: "Gunatraya Vibhaga Yoga - Yoga of the Division of the Three Modes of Material Nature"
};
const flashcards = [
    { 
        shloka: "श्रीभगवानुवाच | परं भूयः प्रवक्ष्यामि ज्ञानानां ज्ञानमुत्तमम् | यज्ज्ञात्वा मुनयः सर्वे परां सिद्धिमितो गताः || 14-1",
        meaning: "The Blessed Lord said: I shall again declare to you this supreme wisdom, the best of all knowledge, by knowing which all the sages have attained the highest perfection from this world.",
        question: "What does Krishna promise to explain?",
        answer: "The supreme wisdom, best of all knowledge, by which sages attain highest perfection.",
        concept: "Verse 14.1 - Promise of Supreme Knowledge"
    },
    { 
        shloka: "इदं ज्ञानमुपाश्रित्य मम साधर्म्यमागताः | सर्गेऽपि नोपजायन्ते प्रलये न व्यथन्ति च || 14-2",
        meaning: "By taking refuge in this knowledge, they attain My nature and are neither born at the time of creation nor disturbed at the time of dissolution.",
        question: "What is the benefit of this knowledge?",
        answer: "Attaining Krishna's nature - no birth during creation, no disturbance during dissolution.",
        concept: "Verse 14.2 - Benefit of Transcendental Knowledge"
    },
    { 
        shloka: "मम योनिर्महद्ब्रह्म तस्मिन्गर्भं दधाम्यहम् | सम्भवः सर्वभूतानां ततो भवति भारत || 14-3",
        meaning: "My womb is the great Brahman; in that I place the seed. From this comes the birth of all beings, O Bharata.",
        question: "How does Krishna explain the process of creation?",
        answer: "The great Brahman is His womb where He places the seed, from which all beings are born.",
        concept: "Verse 14.3 - Process of Creation"
    },
    { 
        shloka: "सर्वयोनिषु कौन्तेय मूर्तयः सम्भवन्ति याः | तासां ब्रह्म महद्योनिरहं बीजप्रदः पिता || 14-4",
        meaning: "Whatever forms are produced in all different wombs, O son of Kunti, the great Brahman is their womb, and I am the seed-giving father.",
        question: "What are Krishna's roles in creation?",
        answer: "Brahman is the womb, and Krishna is the seed-giving father of all beings.",
        concept: "Verse 14.4 - Father of All Beings"
    },
    { 
        shloka: "सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः | निबध्नन्ति महाबाहो देहे देहिनमव्ययम् || 14-5",
        meaning: "Goodness, passion, and ignorance—these three modes of material nature bind the eternal soul to the body, O mighty-armed one.",
        question: "What are the three gunas and what do they do?",
        answer: "Sattva (goodness), rajas (passion), and tamas (ignorance) - they bind the eternal soul to the body.",
        concept: "Verse 14.5 - Three Modes of Nature"
    },
    { 
        shloka: "तत्र सत्त्वं निर्मलत्वात्प्रकाशकमनामयम् | सुखसङ्गेन बध्नाति ज्ञानसङ्गेन चानघ || 14-6",
        meaning: "Of these, sattva, being pure, is illuminating and free from vice. It binds by attachment to happiness and attachment to knowledge, O sinless one.",
        question: "How does sattva guna bind the soul?",
        answer: "Through attachment to happiness and attachment to knowledge, due to its pure and illuminating nature.",
        concept: "Verse 14.6 - Nature of Sattva Guna"
    },
    { 
        shloka: "रजो रागात्मकं विद्धि तृष्णासङ्गसमुद्भवम् | तन्निबध्नाति कौन्तेय कर्मसङ्गेन देहिनम् || 14-7",
        meaning: "Know rajas to be of the nature of passion, arising from thirst and attachment. It binds the soul, O son of Kunti, by attachment to fruitive action.",
        question: "How does rajas guna bind the soul?",
        answer: "Through attachment to fruitive actions, arising from thirst and desire.",
        concept: "Verse 14.7 - Nature of Rajas Guna"
    },
    { 
        shloka: "तमस्त्वज्ञानजं विद्धि मोहनं सर्वदेहिनाम् | प्रमादालस्यनिद्राभिस्तन्निबध्नाति भारत || 14-8",
        meaning: "Know tamas to be born of ignorance, deluding all embodied beings. It binds, O Bharata, by negligence, laziness, and sleep.",
        question: "How does tamas guna bind the soul?",
        answer: "Through negligence, laziness, and sleep, arising from ignorance and delusion.",
        concept: "Verse 14.8 - Nature of Tamas Guna"
    },
    { 
        shloka: "सत्त्वं सुखे सञ्जयति रजः कर्मणि भारत | ज्ञानमावृत्य तु तमः प्रमादे सञ्जयत्युत || 14-9",
        meaning: "O Bharata, sattva attaches one to happiness, rajas to action, while tamas, covering knowledge, attaches one to negligence.",
        question: "What does each guna attach one to?",
        answer: "Sattva to happiness, rajas to action, tamas to negligence by covering knowledge.",
        concept: "Verse 14.9 - Attachments of Each Guna"
    },
    { 
        shloka: "रजस्तमश्चाभिभूय सत्त्वं भवति भारत | रजः सत्त्वं तमश्चैव तमः सत्त्वं रजस्तथा || 14-10",
        meaning: "Sometimes sattva prevails over rajas and tamas, O Bharata; sometimes rajas prevails over sattva and tamas; and sometimes tamas prevails over sattva and rajas.",
        question: "How do the gunas interact with each other?",
        answer: "They compete for dominance - sometimes one prevails over the other two.",
        concept: "Verse 14.10 - Competition Among Gunas"
    },
    { 
        shloka: "सर्वद्वारेषु देहेऽस्मिन्प्रकाश उपजायते | ज्ञानं यदा तदा विद्याद्विवृद्धं सत्त्वमित्युत || 14-11",
        meaning: "When all the gates of the body are illumined by knowledge, one should know that sattva is predominant.",
        question: "How can one recognize sattva predominance?",
        answer: "When knowledge illuminates all the gates (senses) of the body.",
        concept: "Verse 14.11 - Sign of Sattva Predominance"
    },
    { 
        shloka: "लोभः प्रवृत्तिरारम्भः कर्मणामशमः स्पृहा | राजस्येतानि जायन्ते विवृद्धे भरतर्षभ || 14-12",
        meaning: "O best of the Bharatas, when rajas is predominant, these appear: greed, activity, undertaking of works, restlessness, and craving.",
        question: "What qualities appear when rajas is dominant?",
        answer: "Greed, activity, undertaking works, restlessness, and craving.",
        concept: "Verse 14.12 - Signs of Rajas Predominance"
    },
    { 
        shloka: "अप्रकाशोऽप्रवृत्तिश्च प्रमादो मोह एव च | तमस्येतानि जायन्ते विवृद्धे कुरुनन्दन || 14-13",
        meaning: "When tamas is predominant, these appear: darkness, inertia, negligence, and delusion, O joy of the Kurus.",
        question: "What qualities appear when tamas is dominant?",
        answer: "Darkness, inertia, negligence, and delusion.",
        concept: "Verse 14.13 - Signs of Tamas Predominance"
    },
    { 
        shloka: "यदा सत्त्वे प्रवृद्धे तु प्रलयं याति देहभृत् | तदोत्तमविदां लोकानमलान्प्रतिपद्यते || 14-14",
        meaning: "When the embodied being meets death when sattva is predominant, then he attains to the pure worlds of the knowers of the highest.",
        question: "What is the destination when one dies in sattva?",
        answer: "The pure worlds of those who know the highest truth.",
        concept: "Verse 14.14 - Result of Sattva at Death"
    },
    { 
        shloka: "रजसि प्रलयं गत्वा कर्मसङ्गिषु जायते | तथा प्रलीनस्तमसि मूढयोनिषु जायते || 14-15",
        meaning: "Meeting death in rajas, one is born among those attached to action; and dying in tamas, one is born in the wombs of the deluded.",
        question: "What are the destinations of rajas and tamas at death?",
        answer: "Rajas: birth among action-attached; Tamas: birth in wombs of deluded beings.",
        concept: "Verse 14.15 - Results of Rajas and Tamas at Death"
    },
    { 
        shloka: "कर्मणः सुकृतस्याहुः सात्त्विकं निर्मलं फलम् | रजसस्तु फलं दुःखमज्ञानं तमसः फलम् || 14-16",
        meaning: "The result of good action is said to be sattvic and pure; the result of rajas is pain; and the result of tamas is ignorance.",
        question: "What are the fruits of each guna?",
        answer: "Sattva: pure results; Rajas: pain; Tamas: ignorance.",
        concept: "Verse 14.16 - Fruits of the Three Gunas"
    },
    { 
        shloka: "सत्त्वात्सञ्जायते ज्ञानं रजसो लोभ एव च | प्रमादमोहौ तमसो भवतोऽज्ञानमेव च || 14-17",
        meaning: "From sattva arises knowledge, from rajas arises greed, and from tamas arise negligence, delusion, and ignorance.",
        question: "What arises from each guna?",
        answer: "Sattva: knowledge; Rajas: greed; Tamas: negligence, delusion, ignorance.",
        concept: "Verse 14.17 - Products of the Gunas"
    },
    { 
        shloka: "ऊर्ध्वं गच्छन्ति सत्त्वस्था मध्ये तिष्ठन्ति राजसाः | जघन्यगुणवृत्तिस्था अधो गच्छन्ति तामसाः || 14-18",
        meaning: "Those situated in sattva go upward; those in rajas remain in the middle; and those in tamas, abiding in the lowest quality, go downward.",
        question: "What are the directions of movement for each guna?",
        answer: "Sattva: upward; Rajas: middle; Tamas: downward.",
        concept: "Verse 14.18 - Directions of Movement"
    },
    { 
        shloka: "नान्यं गुणेभ्यः कर्तारं यदा द्रष्टानुपश्यति | गुणेभ्यश्च परं वेत्ति मद्भावं सोऽधिगच्छति || 14-19",
        meaning: "When the seer perceives no other agent than the gunas, and knows That which is beyond the gunas, he attains My nature.",
        question: "How does one attain Krishna's nature?",
        answer: "By perceiving that only gunas act, and knowing what is beyond the gunas.",
        concept: "Verse 14.19 - Attaining Krishna's Nature"
    },
    { 
        shloka: "गुणानेतानतीत्य त्रीन्देही देहसमुद्भवान् | जन्ममृत्युजरादुःखैर्विमुक्तोऽमृतमश्नुते || 14-20",
        meaning: "When the embodied being transcends these three gunas associated with the body, he is freed from birth, death, old age, and their distresses, and enjoys immortality.",
        question: "What is the result of transcending the three gunas?",
        answer: "Freedom from birth, death, old age, and their miseries; attainment of immortality.",
        concept: "Verse 14.20 - Transcending the Gunas"
    },
    { 
        shloka: "अर्जुन उवाच | कैर्लिङ्गैस्त्रीन्गुणानेतानतीतो भवति प्रभो | किमाचारः कथं चैतांस्त्रीन्गुणानतिवर्तते || 14-21",
        meaning: "Arjuna said: By what signs is one known who has transcended these three gunas, O Lord? What is his behavior, and how does he transcend these gunas?",
        question: "What does Arjuna ask about gunatita (one beyond gunas)?",
        answer: "About the signs, behavior, and method of transcending the three gunas.",
        concept: "Verse 14.21 - Inquiry About Gunatita"
    },
    { 
        shloka: "श्रीभगवानुवाच | प्रकाशं च प्रवृत्तिं च मोहमेव च पाण्डव | न द्वेष्टि सम्प्रवृत्तानि न निवृत्तानि काङ्क्षति || 14-22",
        meaning: "The Blessed Lord said: O Pandava, he who does not hate illumination, activity, and delusion when they appear, nor long for them when they disappear;",
        question: "How does a gunatita relate to the gunas' manifestations?",
        answer: "Doesn't hate them when present, nor long for them when absent.",
        concept: "Verse 14.22 - Attitude Toward Gunas"
    },
    { 
        shloka: "उदासीनवदासीनो गुणैर्यो न विचाल्यते | गुणा वर्तन्त इत्येव योऽवतिष्ठति नेङ्गते || 14-23",
        meaning: "He who, seated like a neutral, is not disturbed by the gunas; who, knowing that the gunas are operating, remains firm and does not waver;",
        question: "What is the stance of one beyond gunas?",
        answer: "Sits like a neutral, undisturbed by gunas, firm and unwavering.",
        concept: "Verse 14.23 - Neutral Stance"
    },
    { 
        shloka: "समदुःखसुखः स्वस्थः समलोष्टाश्मकाञ्चनः | तुल्यप्रियाप्रियो धीरस्तुल्यनिन्दात्मसंस्तुतिः || 14-24",
        meaning: "Alike in happiness and distress, self-satisfied, to whom a lump of earth, stone, and gold are the same, equal toward dear and hateful, steady, equal in blame and praise;",
        question: "What are the qualities of one beyond gunas?",
        answer: "Equal in happiness/distress, self-satisfied, equal toward earth/stone/gold, equal to dear/hateful, steady, equal in blame/praise.",
        concept: "Verse 14.24 - Qualities of Gunatita"
    },
    { 
        shloka: "मानापमानयोस्तुल्यस्तुल्यो मित्रारिपक्षयोः | सर्वारम्भपरित्यागी गुणातीतः स उच्यते || 14-25",
        meaning: "Equal in honor and dishonor, equal to friend and enemy, abandoning all undertakings—he is said to have transcended the gunas.",
        question: "What additional qualities define gunatita?",
        answer: "Equal in honor/dishonor, equal to friend/enemy, abandoning all undertakings.",
        concept: "Verse 14.25 - Complete Detachment"
    },
    { 
        shloka: "मां च योऽव्यभिचारेण भक्तियोगेन सेवते | स गुणान्समतीत्यैतान्ब्रह्मभूयाय कल्पते || 14-26",
        meaning: "One who serves Me with unswerving devotion, transcends these gunas and becomes qualified to attain Brahman.",
        question: "How can one definitely transcend the gunas?",
        answer: "By serving Krishna with unswerving devotion (avyabhicharena bhakti).",
        concept: "Verse 14.26 - Path Through Devotion"
    },
    { 
        shloka: "ब्रह्मणो हि प्रतिष्ठाहममृतस्याव्ययस्य च | शाश्वतधर्मस्य सुखस्यैकान्तिकस्य च || 14-27",
        meaning: "For I am the foundation of Brahman, of the immortal and imperishable, of eternal dharma, and of absolute happiness.",
        question: "What is Krishna's relationship to spiritual realities?",
        answer: "He is the foundation of Brahman, immortality, imperishability, eternal dharma, and absolute happiness.",
        concept: "Verse 14.27 - Krishna as Ultimate Foundation"
    }
];