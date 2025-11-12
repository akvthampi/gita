// --- bg_chap_12.js ---
const chapterMetadata = {
    title: "Chapter 12: The Yoga of Devotion",
    info: "Bhakti Yoga - Yoga of Devotional Service (20 verses)"
};
const flashcards = [
    { 
        shloka: "अर्जुन उवाच | एवं सततयुक्ता ये भक्तास्त्वां पर्युपासते | ये चाप्यक्षरमव्यक्तं तेषां के योगवित्तमाः || 12-1",
        meaning: "Arjuna said: Those devotees who are always engaged in Your worship and those who worship the imperishable and unmanifest—which of them are better versed in yoga?",
        question: "What question does Arjuna ask about different types of worshippers?",
        answer: "Which are better versed in yoga: those who worship Krishna personally or those who worship the unmanifest?",
        concept: "Verse 12.1 - Question About Two Paths"
    },
    { 
        shloka: "श्रीभगवानुवाच | मय्यावेश्य मनो ये मां नित्ययुक्ता उपासते | श्रद्धया परयोपेतास्ते मे युक्ततमा मताः || 12-2",
        meaning: "The Blessed Lord said: Those who fix their minds on Me and always engage in My worship with great faith—them I consider most perfect in yoga.",
        question: "Who does Krishna consider most perfect in yoga?",
        answer: "Those who fix their minds on Him and worship with great faith.",
        concept: "Verse 12.2 - Superiority of Personal Worship"
    },
    { 
        shloka: "ये त्वक्षरमनिर्देश्यमव्यक्तं पर्युपासते | सर्वत्रगमचिन्त्यं च कूटस्थमचलं ध्रुवम् || 12-3",
        meaning: "But those who worship the imperishable, indefinable, unmanifest, omnipresent, inconceivable, unchanging, immovable, and eternal—",
        question: "What are the qualities of the unmanifest that some worship?",
        answer: "Imperishable, indefinable, unmanifest, omnipresent, inconceivable, unchanging, immovable, eternal.",
        concept: "Verse 12.3 - Qualities of the Unmanifest"
    },
    { 
        shloka: "संनियम्येन्द्रियग्रामं सर्वत्र समबुद्धयः | ते प्राप्नुवन्ति मामेव सर्वभूतहिते रताः || 12-4",
        meaning: "Having controlled all the senses, even-minded everywhere, engaged in the welfare of all beings—they also attain Me.",
        question: "How do worshippers of the unmanifest attain Krishna?",
        answer: "By controlling senses, maintaining even-mindedness, and working for welfare of all beings.",
        concept: "Verse 12.4 - Path of the Unmanifest Worshippers"
    },
    { 
        shloka: "क्लेशोऽधिकतरस्तेषामव्यक्तासक्तचेतसाम् | अव्यक्ता हि गतिर्दुःखं देहवद्भिरवाप्यते || 12-5",
        meaning: "For those whose minds are attached to the unmanifest, the path is more difficult, for the unmanifest goal is arduous for the embodied to attain.",
        question: "Why is the path of unmanifest worship more difficult?",
        answer: "Because the unmanifest is arduous for embodied beings to attain.",
        concept: "Verse 12.5 - Difficulty of Unmanifest Path"
    },
    { 
        shloka: "ये तु सर्वाणि कर्माणि मयि संन्यस्य मत्पराः | अनन्येनैव योगेन मां ध्यायन्त उपासते || 12-6",
        meaning: "But those who worship Me, surrendering all actions to Me, regarding Me as the supreme goal, and meditating on Me with single-minded devotion—",
        question: "What characterizes the devotees who worship Krishna personally?",
        answer: "Surrendering all actions to Him, regarding Him as supreme goal, meditating with single-minded devotion.",
        concept: "Verse 12.6 - Characteristics of Personal Devotees"
    },
    { 
        shloka: "तेषामहं समुद्धर्ता मृत्युसंसारसागरात् | भवामि नचिरात्पार्थ मय्यावेशितचेतसाम् || 12-7",
        meaning: "For them, I become the savior from the ocean of birth and death, O Partha, as their minds are completely absorbed in Me.",
        question: "What does Krishna do for His devoted worshippers?",
        answer: "He saves them from the ocean of birth and death when their minds are absorbed in Him.",
        concept: "Verse 12.7 - Salvation for Devotees"
    },
    { 
        shloka: "मय्येव मन आधत्स्व मयि बुद्धिं निवेशय | निवसिष्यसि मय्येव अत ऊर्ध्वं न संशयः || 12-8",
        meaning: "Just fix your mind upon Me, and engage all your intelligence in Me. There is no doubt that you will live in Me hereafter.",
        question: "What is Krishna's direct instruction to Arjuna?",
        answer: "Fix mind and intelligence on Krishna, and he will certainly live in Him hereafter.",
        concept: "Verse 12.8 - Direct Instruction"
    },
    { 
        shloka: "अथ चित्तं समाधातुं न शक्नोषि मयि स्थिरम् | अभ्यासयोगेन ततो मामिच्छाप्तुं धनञ्जय || 12-9",
        meaning: "If you are unable to fix your mind steadily upon Me, then seek to reach Me by the yoga of practice, O Dhananjaya.",
        question: "What alternative is given if one cannot fix the mind steadily?",
        answer: "Practice the yoga of repeated effort (abhyasa yoga).",
        concept: "Verse 12.9 - Alternative of Practice"
    },
    { 
        shloka: "अभ्यासेऽप्यसमर्थोऽसि मत्कर्मपरमो भव | मदर्थमपि कर्माणि कुर्वन्सिद्धिमवाप्स्यसि || 12-10",
        meaning: "If you cannot practice even this, then be engaged in My work, for by working for My sake, you will achieve perfection.",
        question: "What is the next alternative if one cannot practice?",
        answer: "Engage in work for Krishna's sake, which also leads to perfection.",
        concept: "Verse 12.10 - Path of Service"
    },
    { 
        shloka: "अथैतदप्यशक्तोऽसि कर्तुं मद्योगमाश्रितः | सर्वकर्मफलत्यागं ततः कुरु यतात्मवान् || 12-11",
        meaning: "If you are unable to do even this, then taking refuge in Me, renounce the fruits of all actions, self-controlled.",
        question: "What is the final alternative for those unable to perform service?",
        answer: "Take refuge in Krishna and renounce the fruits of all actions.",
        concept: "Verse 12.11 - Path of Renunciation"
    },
    { 
        shloka: "श्रेयो हि ज्ञानमभ्यासाज्ज्ञानाद्ध्यानं विशिष्यते | ध्यानात्कर्मफलत्यागस्त्यागाच्छान्तिरनन्तरम् || 12-12",
        meaning: "Knowledge is better than mere practice; meditation is better than knowledge; renunciation of the fruits of action is better than meditation; peace immediately follows such renunciation.",
        question: "What is the hierarchy of spiritual practices?",
        answer: "Practice → Knowledge → Meditation → Renunciation of fruits → Peace.",
        concept: "Verse 12.12 - Hierarchy of Practices"
    },
    { 
        shloka: "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च | निर्ममो निरहंकारः समदुःखसुखः क्षमी || 12-13",
        meaning: "One who is not envious but is a kind friend to all living entities, who does not think himself a proprietor, who is free from false ego and equal in happiness and distress, who is forgiving...",
        question: "What are the qualities of a devotee?",
        answer: "Non-envious, friendly, compassionate, without possessiveness, without false ego, equal in happiness/distress, forgiving.",
        concept: "Verse 12.13 - Qualities of a Devotee (Part 1)"
    },
    { 
        shloka: "सन्तुष्टः सततं योगी यतात्मा दृढनिश्चयः | मय्यर्पितमनोबुद्धिर्यो मद्भक्तः स मे प्रियः || 12-14",
        meaning: "Always satisfied, self-controlled, and firmly determined, with mind and intelligence fixed on Me—such a devotee is dear to Me.",
        question: "What additional qualities make a devotee dear to Krishna?",
        answer: "Always satisfied, self-controlled, firmly determined, with mind/intelligence fixed on Krishna.",
        concept: "Verse 12.14 - Qualities of a Devotee (Part 2)"
    },
    { 
        shloka: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः | हर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः || 12-15",
        meaning: "He by whom the world is not agitated and who cannot be agitated by the world, who is free from joy, envy, fear, and anxiety—he is dear to Me.",
        question: "How does a dear devotee relate to the world?",
        answer: "Doesn't agitate the world nor is agitated by it, free from joy/envy/fear/anxiety.",
        concept: "Verse 12.15 - Equanimity in World"
    },
    { 
        shloka: "अनपेक्षः शुचिर्दक्ष उदासीनो गतव्यथः | सर्वारम्भपरित्यागी यो मद्भक्तः स मे प्रियः || 12-16",
        meaning: "One who is free from expectations, pure, capable, impartial, free from anxiety, who renounces all undertakings—such a devotee is dear to Me.",
        question: "What qualities characterize a dear devotee in action?",
        answer: "Free from expectations, pure, capable, impartial, free from anxiety, renounces all undertakings.",
        concept: "Verse 12.16 - Detached Engagement"
    },
    { 
        shloka: "यो न हृष्यति न द्वेष्टि न शोचति न काङ्क्षति | शुभाशुभपरित्यागी भक्तिमान्यः स मे प्रियः || 12-17",
        meaning: "One who neither rejoices nor hates, neither grieves nor desires, and who renounces both good and bad—such a devotee is dear to Me.",
        question: "How does a dear devotee respond to dualities?",
        answer: "Neither rejoices/hates/grieves/desires, renounces both good and bad.",
        concept: "Verse 12.17 - Beyond Dualities"
    },
    { 
        shloka: "समः शत्रौ च मित्रे च तथा मानापमानयोः | शीतोष्णसुखदुःखेषु समः सङ्गविवर्जितः || 12-18",
        meaning: "One who is equal to friends and enemies, honor and dishonor, heat and cold, happiness and distress, and free from all attachment...",
        question: "In what situations does a devotee maintain equality?",
        answer: "With friends/enemies, honor/dishonor, heat/cold, happiness/distress - free from attachment.",
        concept: "Verse 12.18 - Equality in All Circumstances"
    },
    { 
        shloka: "तुल्यनिन्दास्तुतिर्मौनी सन्तुष्टो येन केनचित् | अनिकेतः स्थिरमतिर्भक्तिमान्मे प्रियो नरः || 12-19",
        meaning: "One who is equal in blame and praise, silent, satisfied with anything, without a fixed abode, steady-minded—such a devoted soul is dear to Me.",
        question: "What are the final qualities of a dear devotee?",
        answer: "Equal in blame/praise, silent, satisfied with anything, homeless, steady-minded.",
        concept: "Verse 12.19 - Complete Detachment"
    },
    { 
        shloka: "ये तु धर्म्यामृतमिदं यथोक्तं पर्युपासते | श्रद्दधाना मत्परमा भक्तास्तेऽतीव मे प्रियाः || 12-20",
        meaning: "But those who follow this immortal nectar of dharma as described, with faith, accepting Me as supreme—such devotees are extremely dear to Me.",
        question: "Who are extremely dear to Krishna?",
        answer: "Those who follow this spiritual path with faith, accepting Krishna as supreme.",
        concept: "Verse 12.20 - Supreme Devotees"
    }
];