// --- bg_chap_08.js ---
const chapterMetadata = {
    title: "Chapter 8: The Yoga of the Imperishable Brahman",
    info: "Akshara Brahma Yoga - Yoga of the Imperishable Absolute"
};
const flashcards = [
    { 
        shloka: "अर्जुन उवाच | किं तद्ब्रह्म किमध्यात्मं किं कर्म पुरुषोत्तम | अधिभूतं च किं प्रोक्तमधिदैवं किमुच्यते || 8-1",
        meaning: "Arjuna said: O my Lord, O Supreme Person, what is Brahman? What is the self? What are fruitive activities? What is this material manifestation? And what are the demigods? Please explain this to me.",
        question: "What five questions does Arjuna ask about spiritual knowledge?",
        answer: "1) What is Brahman? 2) What is the self? 3) What is karma? 4) What is material manifestation? 5) What are demigods?",
        concept: "Verse 8.1 - Arjuna's Questions About Ultimate Reality"
    },
    { 
        shloka: "अधियज्ञः कथं कोऽत्र देहेऽस्मिन्मधुसूदन | प्रयाणकाले च कथं ज्ञेयोऽसि नियतात्मभिः || 8-2",
        meaning: "Who is the Lord of sacrifice, and how does He live in the body, O Madhusudana? And how can those engaged in devotional service know You at the time of death?",
        question: "What three additional questions does Arjuna ask?",
        answer: "1) Who is the Lord of sacrifice? 2) How does He reside in the body? 3) How can devotees know Him at death?",
        concept: "Verse 8.2 - Questions About the Supersoul and Death"
    },
    { 
        shloka: "श्रीभगवानुवाच | अक्षरं ब्रह्म परमं स्वभावोऽध्यात्ममुच्यते | भूतभावोद्भवकरो विसर्गः कर्मसंज्ञितः || 8-3",
        meaning: "The Supreme Lord said: The indestructible, transcendental living entity is called Brahman, and his eternal nature is called the self. Action pertaining to the development of these material bodies is called karma, or fruitive activities.",
        question: "How does Krishna define Brahman, the self, and karma?",
        answer: "Brahman is the indestructible living entity, the self is eternal nature, karma is action for material body development.",
        concept: "Verse 8.3 - Definitions of Brahman, Self and Karma"
    },
    { 
        shloka: "अधिभूतं क्षरो भावः पुरुषश्चाधिदैवतम् | अधियज्ञोऽहमेवात्र देहे देहभृतां वर || 8-4",
        meaning: "O best of the embodied beings, the physical nature, which is constantly changing, is called adhibhuta [the material manifestation]. The universal form of the Lord, which includes all the demigods, like those of the sun and moon, is called adhidaivata. And I, the Supreme Lord, represented as the Supersoul in the heart of every embodied being, am called adhiyajna [the Lord of sacrifice].",
        question: "What are the three aspects Krishna explains?",
        answer: "1) Adhibhuta - changing material nature, 2) Adhidaivata - universal form with demigods, 3) Adhiyajna - Supersoul in hearts.",
        concept: "Verse 8.4 - Three Aspects of Manifestation"
    },
    { 
        shloka: "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम् | यः प्रयाति स मद्भावं याति नास्त्यत्र संशयः || 8-5",
        meaning: "And whoever, at the time of death, quits his body, remembering Me alone, at once attains My nature. Of this there is no doubt.",
        question: "What is guaranteed for one who remembers Krishna at death?",
        answer: "They certainly attain Krishna's nature (divine abode) without any doubt.",
        concept: "Verse 8.5 - Result of Remembering Krishna at Death"
    },
    { 
        shloka: "यं यं वापि स्मरन्भावं त्यजत्यन्ते कलेवरम् | तं तमेवैति कौन्तेय सदा तद्भावभावितः || 8-6",
        meaning: "Whatever state of being one remembers when he quits his body, that state he will attain without fail.",
        question: "What universal principle governs the state attained after death?",
        answer: "Whatever consciousness one has at death, that state one attains without fail.",
        concept: "Verse 8.6 - Law of Death Consciousness"
    },
    { 
        shloka: "तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च | मय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशयम् || 8-7",
        meaning: "Therefore, Arjuna, you should always think of Me in the form of Krishna and at the same time carry out your prescribed duty of fighting. With your activities dedicated to Me and your mind and intelligence fixed on Me, you will attain Me without doubt.",
        question: "What three practices ensure attainment of Krishna?",
        answer: "1) Always remember Krishna, 2) Perform prescribed duties, 3) Dedicate mind and intelligence to Krishna.",
        concept: "Verse 8.7 - Practices for Attaining Krishna"
    },
    { 
        shloka: "अभ्यासयोगयुक्तेन चेतसा नान्यगामिना | परमं पुरुषं दिव्यं याति पार्थानुचिन्तयन् || 8-8",
        meaning: "He who meditates on the Supreme Personality of Godhead, his mind constantly engaged in remembering Me, undeviated from the path, he, O Partha, is sure to reach Me.",
        question: "What mental state leads to reaching the Supreme?",
        answer: "Mind constantly engaged in remembering Krishna through practice, without deviation to other paths.",
        concept: "Verse 8.8 - Constant Remembrance Through Practice"
    },
    { 
        shloka: "कविं पुराणमनुशासितारमणोरणीयांसमनुस्मरेद्यः | सर्वस्य धातारमचिन्त्यरूपमादित्यवर्णं तमसः परस्तात् || 8-9",
        meaning: "One should meditate upon the Supreme Person as the one who knows everything, as He who is the oldest, who is the controller, who is smaller than the smallest, who is the maintainer of everything, who is beyond all material conception, who is inconceivable, and who is always a person. He is luminous like the sun, and He is transcendental, beyond this material nature.",
        question: "What eight qualities of the Supreme should one meditate upon?",
        answer: "1) All-knowing, 2) Oldest, 3) Controller, 4) Smaller than smallest, 5) Maintainer, 6) Inconceivable, 7) Personal, 8) Luminous like sun.",
        concept: "Verse 8.9 - Qualities for Meditation"
    },
    { 
        shloka: "प्रयाणकाले मनसाचलेन भक्त्या युक्तो योगबलेन चैव | भ्रुवोर्मध्ये प्राणमावेश्य सम्यक्स तं परं पुरुषमुपैति दिव्यम् || 8-10",
        meaning: "One who, at the time of death, fixes his life air between the eyebrows and, by the strength of yoga, with an undeviating mind, engages himself in remembering the Supreme Lord in full devotion, will certainly attain to the Supreme Personality of Godhead.",
        question: "What practice at death time leads to the Supreme?",
        answer: "Fixing life air between eyebrows with yoga strength, undeviating mind, and full devotion to Supreme Lord.",
        concept: "Verse 8.10 - Yoga Practice at Death"
    },
    { 
        shloka: "यदक्षरं वेदविदो वदन्ति विशन्ति यद्यतयो वीतरागाः | यदिच्छन्तो ब्रह्मचर्यं चरन्ति तत्ते पदं संग्रहेण प्रवक्ष्ये || 8-11",
        meaning: "Persons who are learned in the Vedas, who utter omkara and who are great sages in the renounced order enter into Brahman. Desiring such perfection, one practices celibacy. I shall now briefly explain to you this process by which one may attain salvation.",
        question: "Who attains Brahman and through what practice?",
        answer: "Vedic scholars chanting Om, renounced sages practicing celibacy attain Brahman.",
        concept: "Verse 8.11 - Path to Brahman Realization"
    },
    { 
        shloka: "सर्वद्वाराणि संयम्य मनो हृदि निरुध्य च | मूर्ध्न्याधायात्मनः प्राणमास्थितो योगधारणाम् || 8-12",
        meaning: "The yogic situation is that of detachment from all sensual engagements. Closing all the doors of the senses and fixing the mind on the heart and the life air at the top of the head, one establishes himself in yoga.",
        question: "What is the process for establishing in yoga?",
        answer: "Close all sense doors, fix mind in heart, raise life air to head top, and practice yoga with detachment.",
        concept: "Verse 8.12 - Process of Yoga Practice"
    },
    { 
        shloka: "ओमित्येकाक्षरं ब्रह्म व्याहरन्मामनुस्मरन् | यः प्रयाति त्यजन्देहं स याति परमां गतिम् || 8-13",
        meaning: "After being situated in this yoga practice and vibrating the sacred syllable om, the supreme combination of letters, if one thinks of the Supreme Personality of Godhead and quits his body, he will certainly reach the spiritual planets.",
        question: "What practice ensures reaching spiritual planets?",
        answer: "Practicing yoga while chanting Om and remembering Krishna when leaving the body.",
        concept: "Verse 8.13 - Chanting Om and Remembering Krishna"
    },
    { 
        shloka: "अनन्यचेताः सततं यो मां स्मरति नित्यशः | तस्याहं सुलभः पार्थ नित्ययुक्तस्य योगिनः || 8-14",
        meaning: "For one who always remembers Me without deviation, I am easy to obtain, O son of Pritha, because of his constant engagement in devotional service.",
        question: "For whom is Krishna easily obtainable?",
        answer: "For those who constantly remember Krishna with undivided attention through devotional service.",
        concept: "Verse 8.14 - Easy Attainment Through Constant Remembrance"
    },
    { 
        shloka: "मामुपेत्य पुनर्जन्म दुःखालयमशाश्वतम् | नाप्नुवन्ति महात्मानः संसिद्धिं परमां गताः || 8-15",
        meaning: "After attaining Me, the great souls, who are yogis in devotion, never return to this temporary world, which is full of miseries, because they have attained the highest perfection.",
        question: "What do great souls avoid after attaining Krishna?",
        answer: "They avoid returning to the miserable temporary material world, having attained highest perfection.",
        concept: "Verse 8.15 - No Return After Attaining Krishna"
    },
    { 
        shloka: "आब्रह्मभुवनाल्लोकाः पुनरावर्तिनोऽर्जुन | मामुपेत्य तु कौन्तेय पुनर्जन्म न विद्यते || 8-16",
        meaning: "From the highest planet in the material world down to the lowest, all are places of misery wherein repeated birth and death take place. But one who attains to My abode, O son of Kunti, never takes birth again.",
        question: "What is the nature of material worlds and Krishna's abode?",
        answer: "All material planets involve repeated birth/death in misery, but Krishna's abode has no rebirth.",
        concept: "Verse 8.16 - Material Worlds vs Spiritual Abode"
    },
    { 
        shloka: "सहस्रयुगपर्यन्तमहर्यद्ब्रह्मणो विदुः | रात्रिं युगसहस्रान्तां तेऽहोरात्रविदो जनाः || 8-17",
        meaning: "By human calculation, a thousand ages taken together form the duration of Brahma's one day. And such also is the duration of his night.",
        question: "What is the duration of Brahma's day and night?",
        answer: "Both Brahma's day and night last 1000 cycles of four yugas (4.32 billion human years each).",
        concept: "Verse 8.17 - Duration of Brahma's Day"
    },
    { 
        shloka: "अव्यक्ताद्व्यक्तयः सर्वाः प्रभवन्त्यहरागमे | रात्र्यागमे प्रलीयन्ते तत्रैवाव्यक्तसंज्ञके || 8-18",
        meaning: "At the beginning of Brahma's day, all living beings become manifest from the unmanifest state, and thereafter, when the night falls, they are merged into the unmanifest again.",
        question: "What happens during Brahma's day and night?",
        answer: "During day - beings manifest from unmanifest; during night - they merge back into unmanifest.",
        concept: "Verse 8.18 - Cosmic Manifestation and Dissolution"
    },
    { 
        shloka: "भूतग्रामः स एवायं भूत्वा भूत्वा प्रलीयते | रात्र्यागमेऽवशः पार्थ प्रभवत्यहरागमे || 8-19",
        meaning: "Again and again, when Brahma's day arrives, all living beings come into being, and with the arrival of Brahma's night they are helplessly annihilated.",
        question: "What is the repeated cycle of existence?",
        answer: "Beings repeatedly manifest during Brahma's days and annihilate during his nights.",
        concept: "Verse 8.19 - Cycle of Cosmic Creation"
    },
    { 
        shloka: "परस्तस्मात्तु भावोऽन्योऽव्यक्तोऽव्यक्तात्सनातनः | यः स सर्वेषु भूतेषु नश्यत्सु न विनश्यति || 8-20",
        meaning: "Yet there is another unmanifest nature, which is eternal and is transcendental to this manifested and unmanifested matter. It is supreme and is never annihilated. When all in this world is annihilated, that part remains as it is.",
        question: "What exists beyond the material manifestation?",
        answer: "An eternal transcendental nature beyond both manifest and unmanifest matter, which is never destroyed.",
        concept: "Verse 8.20 - Transcendental Nature Beyond Matter"
    },
    { 
        shloka: "अव्यक्तोऽक्षर इत्युक्तस्तमाहुः परमां गतिम् | यं प्राप्य न निवर्तन्ते तद्धाम परमं मम || 8-21",
        meaning: "That which the Vedantists describe as unmanifest and infallible, that which is known as the supreme destination, that place from which, having attained it, one never returns—that is My supreme abode.",
        question: "What is the nature of Krishna's supreme abode?",
        answer: "Unmanifest, infallible, supreme destination from which one never returns to material existence.",
        concept: "Verse 8.21 - Krishna's Supreme Abode"
    },
    { 
        shloka: "पुरुषः स परः पार्थ भक्त्या लभ्यस्त्वनन्यया | यस्यान्तःस्थानि भूतानि येन सर्वमिदं ततम् || 8-22",
        meaning: "The Supreme Personality of Godhead, who is greater than all, is attainable by unalloyed devotion. Although He is present in His abode, He is all-pervading, and everything is situated within Him.",
        question: "How is the Supreme Person attained and what is His nature?",
        answer: "Attained by pure devotion; though in His abode, He is all-pervading and contains everything.",
        concept: "Verse 8.22 - Attaining the All-Pervading Supreme"
    },
    { 
        shloka: "यत्र काले त्वनावृत्तिमावृत्तिं चैव योगिनः | प्रयाता यान्ति तं कालं वक्ष्यामि भरतर्षभ || 8-23",
        meaning: "O best of the Bharatas, I shall now explain to you the different times at which, passing away from this world, the yogi does or does not come back.",
        question: "What will Krishna explain about the time of death?",
        answer: "The different times when departing yogis either return or don't return to material existence.",
        concept: "Verse 8.23 - Times for Departure Explained"
    },
    { 
        shloka: "अग्निर्ज्योतिरहः शुक्लः षण्मासा उत्तरायणम् | तत्र प्रयाता गच्छन्ति ब्रह्म ब्रह्मविदो जनाः || 8-24",
        meaning: "Those who know the Supreme Brahman attain that Supreme by passing away from the world during the influence of the fiery god, in the light, at an auspicious moment of the day, during the fortnight of the waxing moon, or during the six months when the sun travels in the north.",
        question: "What are the auspicious times for departure to attain Brahman?",
        answer: "During fire god's influence, daytime, bright fortnight, waxing moon, or northern solstice - six favorable conditions.",
        concept: "Verse 8.24 - Auspicious Times for Departure"
    },
    { 
        shloka: "धूमो रात्रिस्तथा कृष्णः षण्मासा दक्षिणायनम् | तत्र चान्द्रमसं ज्योतिर्योगी प्राप्य निवर्तते || 8-25",
        meaning: "The mystic who passes away from this world during the smoke, the night, the fortnight of the waning moon, or the six months when the sun passes to the south reaches the moon planet but again comes back.",
        question: "What times lead to temporary attainment and return?",
        answer: "During smoke, night, dark fortnight, waning moon, or southern solstice - leads to moon planet and return.",
        concept: "Verse 8.25 - Times Leading to Return"
    },
    { 
        shloka: "शुक्लकृष्णे गती ह्येते जगतः शाश्वते मते | एकया यात्यनावृत्तिमन्ययावर्तते पुनः || 8-26",
        meaning: "According to the Vedas, there are two ways of passing from this world—one in light and one in darkness. When one passes in light, he does not come back; but when one passes in darkness, he returns.",
        question: "What are the two eternal paths after death?",
        answer: "Path of light (no return) and path of darkness (return) - according to Vedic wisdom.",
        concept: "Verse 8.26 - Two Eternal Paths"
    },
    { 
        shloka: "नैते सृती पार्थ जानन्योगी मुह्यति कश्चन | तस्मात्सर्वेषु कालेषु योगयुक्तो भवार्जुन || 8-27",
        meaning: "Although the devotees know these two paths, O Arjuna, they are never bewildered. Therefore, be always fixed in devotion.",
        question: "What should be the devotee's attitude knowing these paths?",
        answer: "Devotees understand both paths but remain unconfused, always fixed in devotion to Krishna.",
        concept: "Verse 8.27 - Devotee's Unbewildered Position"
    },
    { 
        shloka: "वेदेषु यज्ञेषु तपःसु चैव दानेषु यत्पुण्यफलं प्रदिष्टम् | अत्येति तत्सर्वमिदं विदित्वा योगी परं स्थानमुपैति चाद्यम् || 8-28",
        meaning: "A person who accepts the path of devotional service is not bereft of the results derived from studying the Vedas, performing sacrifices, undergoing austerities, giving charity, or pursuing philosophical and fruitive activities. Simply by performing devotional service, he attains all these, and at the end he reaches the supreme eternal abode.",
        question: "What does a devotee attain through devotional service?",
        answer: "All benefits of Vedic study, sacrifices, austerities, charity, and philosophy - plus the supreme eternal abode.",
        concept: "Verse 8.28 - All Attainments Through Devotion"
    }
];