// --- bg_chap_05.js ---
const chapterMetadata = {
    title: "Chapter 5: The Yoga of Renunciation",
    info: "Karma Sanyasa Yoga - Yoga of Renunciation of Action"
};
const flashcards = [
    { 
        shloka: "अर्जुन उवाच | संन्यासं कर्मणां कृष्ण पुनर्योगं च शंससि | यच्छ्रेय एतयोरेकं तन्मे ब्रूहि सुनिश्चितम् || 5-1",
        meaning: "Arjuna said: O Krishna, first You ask me to renounce work, and then again You recommend work with devotion. Now will You kindly tell me definitely which of the two is more beneficial?",
        question: "What apparent contradiction in Krishna's teachings does Arjuna point out?",
        answer: "Krishna sometimes recommends renunciation of work and other times recommends work with devotion, creating confusion.",
        concept: "Verse 5.1 - Arjuna's Confusion About Renunciation"
    },
    { 
        shloka: "श्रीभगवानुवाच | संन्यासः कर्मयोगश्च निःश्रेयसकरावुभौ | तयोस्तु कर्मसंन्यासात्कर्मयोगो विशिष्यते || 5-2",
        meaning: "The Supreme Lord said: Both renunciation of work and work in devotion are good for liberation. But, of the two, work in devotional service is better than renunciation of work.",
        question: "How does Krishna compare renunciation and work in devotion?",
        answer: "Both lead to liberation, but work in devotional service is superior to mere renunciation of work.",
        concept: "Verse 5.2 - Renunciation vs Devotional Work"
    },
    { 
        shloka: "ज्ञेयः स नित्यसंन्यासी यो न द्वेष्टि न काङ्क्षति | निर्द्वन्द्वो हि महाबाहो सुखं बन्धात्प्रमुच्यते || 5-3",
        meaning: "One who neither hates nor desires the fruits of his activities is known to be always renounced. Such a person, free from all dualities, easily overcomes material bondage and is completely liberated, O mighty-armed Arjuna.",
        question: "Who is considered a true renunciant according to this verse?",
        answer: "One who neither hates nor desires the results of work, being free from all dualities.",
        concept: "Verse 5.3 - The True Renunciant"
    },
    { 
        shloka: "साङ्ख्ययोगौ पृथग्बालाः प्रवदन्ति न पण्डिताः | एकमप्यास्थितः सम्यगुभयोर्विन्दते फलम् || 5-4",
        meaning: "Only the ignorant speak of karma-yoga and devotional service as being different from the analytical study of the material world [sankhya]. Those who are actually learned say that he who applies himself well to one of these paths achieves the results of both.",
        question: "How do learned persons view the different spiritual paths?",
        answer: "Learned persons understand that properly following one path gives the results of both sankhya and yoga.",
        concept: "Verse 5.4 - Unity of Spiritual Paths"
    },
    { 
        shloka: "यत्साङ्ख्यैः प्राप्यते स्थानं तद्योगैरपि गम्यते | एकं साङ्ख्यं च योगं च यः पश्यति स पश्यति || 5-5",
        meaning: "One who knows that the position reached by means of analytical study can also be attained by devotional service, and who therefore sees analytical study and devotional service to be on the same level, sees things as they are.",
        question: "What understanding constitutes true vision according to this verse?",
        answer: "Understanding that both sankhya (knowledge) and yoga (devotion) lead to the same goal constitutes true vision.",
        concept: "Verse 5.5 - True Vision of Spiritual Paths"
    },
    { 
        shloka: "संन्यासस्तु महाबाहो दुःखमाप्तुमयोगतः | योगयुक्तो मुनिर्ब्रह्म न चिरेणाधिगच्छति || 5-6",
        meaning: "Merely renouncing all activities is not enough for perfection. But one who is engaged in the path of devotional service, without desiring the fruits of work, certainly attains to the spiritual kingdom.",
        question: "Why is mere renunciation insufficient for perfection?",
        answer: "Because without devotional service, renunciation alone cannot lead to spiritual perfection.",
        concept: "Verse 5.6 - Insufficiency of Mere Renunciation"
    },
    { 
        shloka: "योगयुक्तो विशुद्धात्मा विजितात्मा जितेन्द्रियः | सर्वभूतात्मभूतात्मा कुर्वन्नपि न लिप्यते || 5-7",
        meaning: "One who works in devotion, who is a pure soul, and who controls his mind and senses, is dear to everyone, and everyone is dear to him. Though always working, such a man is never entangled.",
        question: "What four qualities enable one to work without entanglement?",
        answer: "1) Engaged in devotion, 2) Pure soul, 3) Controlled mind and senses, 4) Seeing all beings as equal.",
        concept: "Verse 5.7 - Working Without Entanglement"
    },
    { 
        shloka: "नैव किञ्चित्करोमीति युक्तो मन्येत तत्त्ववित् | पश्यञ्शृण्वन्स्पृशञ्जिघ्रन्नश्नन्गच्छन्स्वपञ्श्वसन् || 5-8",
        meaning: "A person in the divine consciousness, although engaged in seeing, hearing, touching, smelling, eating, moving about, sleeping, and breathing, always knows within himself that he actually does nothing at all. Because while speaking, evacuating, receiving, or opening or closing his eyes, he always knows that only the material senses are engaged with their objects and that he is aloof from them.",
        question: "How does a self-realized person view sensory activities?",
        answer: "They understand that only the material senses interact with objects while the soul remains detached.",
        concept: "Verse 5.8 - Detachment in Sensory Activities"
    },
    { 
        shloka: "प्रलपन्विसृजन्गृह्ण्न्नुन्मिषन्निमिषन्नपि | इन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन् || 5-9",
        meaning: "One who performs his duty without attachment, surrendering the results unto the Supreme Lord, is unaffected by sinful action, as the lotus leaf is untouched by water.",
        question: "What analogy describes the detached worker?",
        answer: "Like a lotus leaf untouched by water, the detached worker remains unaffected by sinful reactions.",
        concept: "Verse 5.9 - Lotus Leaf Analogy"
    },
    { 
        shloka: "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः | लिप्यते न स पापेन पद्मपत्रमिवाम्भसा || 5-10",
        meaning: "The yogis, abandoning attachment, act with body, mind, intelligence, and even with the senses, only for the purpose of purification.",
        question: "What is the purpose of action for yogis?",
        answer: "Yogis act with all their faculties solely for the purpose of purification, without attachment.",
        concept: "Verse 5.10 - Purpose of Action for Yogis"
    },
    { 
        shloka: "कायेन मनसा बुद्ध्या केवलैरिन्द्रियैरपि | योगिनः कर्म कुर्वन्ति सङ्गं त्यक्त्वात्मशुद्धये || 5-11",
        meaning: "The steadily devoted soul attains unadulterated peace because he offers the result of all activities to Me; whereas a person who is not in union with the Divine, who is greedy for the fruits of his labor, becomes entangled.",
        question: "What is the difference between devoted and greedy workers?",
        answer: "Devoted workers attain peace by offering results to Krishna, while greedy workers become entangled.",
        concept: "Verse 5.11 - Devoted vs Greedy Workers"
    },
    { 
        shloka: "युक्तः कर्मफलं त्यक्त्वा शान्तिमाप्नोति नैष्ठिकीम् | अयुक्तः कामकारेण फले सक्तो निबध्यते || 5-12",
        meaning: "The embodied soul, who has controlled his nature and renounced all actions by mind, remains happily in the city of nine gates [the material body], neither working nor causing work to be done.",
        question: "How does a self-controlled soul live in the material body?",
        answer: "They remain happy in the body (nine-gated city) without working or causing work, being mentally renounced.",
        concept: "Verse 5.12 - The Controlled Soul in the Body"
    },
    { 
        shloka: "सर्वकर्माणि मनसा संन्यस्यास्ते सुखं वशी | नवद्वारे पुरे देही नैव कुर्वन्न कारयन् || 5-13",
        meaning: "The embodied spirit, master of the city of his body, does not create activities, nor does he induce people to act, nor does he create the fruits of action. All this is enacted by the modes of material nature.",
        question: "What is the soul's actual relationship to action?",
        answer: "The soul doesn't create activities, induce action, or create results - all this is done by material nature.",
        concept: "Verse 5.13 - Soul's Non-Doership"
    },
    { 
        shloka: "न कर्तृत्वं न कर्माणि लोकस्य सृजति प्रभुः | न कर्मफलसंयोगं स्वभावस्तु प्रवर्तते || 5-14",
        meaning: "Nor does the Supreme Lord assume anyone's sinful or pious activities. Embodied beings, however, are bewildered because of the ignorance which covers their real knowledge.",
        question: "What is Krishna's relationship to our activities?",
        answer: "Krishna doesn't take responsibility for anyone's sinful or pious activities; beings are bewildered by ignorance.",
        concept: "Verse 5.14 - Krishna's Detachment from Our Karma"
    },
    { 
        shloka: "नादत्ते कस्यचित्पापं न चैव सुकृतं विभुः | अज्ञानेनावृतं ज्ञानं तेन मुह्यन्ति जन्तवः || 5-15",
        meaning: "When, however, one is enlightened with the knowledge by which nescience is destroyed, then his knowledge reveals everything, as the sun lights up everything in the daytime.",
        question: "What happens when transcendental knowledge destroys ignorance?",
        answer: "Knowledge reveals everything clearly, just as the sun illuminates everything during daytime.",
        concept: "Verse 5.15 - Knowledge Destroying Ignorance"
    },
    { 
        shloka: "ज्ञानेन तु तदज्ञानं येषां नाशितमात्मनः | तेषामादित्यवज्ज्ञानं प्रकाशयति तत्परम् || 5-16",
        meaning: "When one's intelligence, mind, faith and refuge are all fixed in the Supreme, then one becomes fully cleansed of misgivings through complete knowledge and thus proceeds straight on the path of liberation.",
        question: "What four things must be fixed in the Supreme for liberation?",
        answer: "1) Intelligence, 2) Mind, 3) Faith, 4) Refuge - all fixed in the Supreme.",
        concept: "Verse 5.16 - Requirements for Liberation"
    },
    { 
        shloka: "तद्बुद्धयस्तदात्मानस्तन्निष्ठास्तत्परायणाः | गच्छन्त्यपुनरावृत्तिं ज्ञाननिर्धूतकल्मषाः || 5-17",
        meaning: "The humble sages, by virtue of true knowledge, see with equal vision a learned and gentle brahmana, a cow, an elephant, a dog and a dog-eater [outcaste].",
        question: "What is the vision of truly knowledgeable sages?",
        answer: "They see all beings equally - whether learned brahmin, cow, elephant, dog, or outcaste.",
        concept: "Verse 5.17 - Equal Vision of the Wise"
    },
    { 
        shloka: "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि | शुनि चैव श्वपाके च पण्डिताः समदर्शिनः || 5-18",
        meaning: "Those whose minds are established in sameness and equanimity have already conquered the conditions of birth and death. They are flawless like Brahman, and thus they are already situated in Brahman.",
        question: "What have equal-visioned persons already conquered?",
        answer: "They have conquered birth and death and are already situated in Brahman, being flawless.",
        concept: "Verse 5.18 - Conquest of Birth and Death"
    },
    { 
        shloka: "इहैव तैर्जितः सर्गो येषां साम्ये स्थितं मनः | निर्दोषं हि समं ब्रह्म तस्माद्ब्रह्मणि ते स्थिताः || 5-19",
        meaning: "A person who neither rejoices upon achieving something pleasant nor laments upon obtaining something unpleasant, who is self-intelligent, who is unbewildered, and who knows the science of God, is already situated in transcendence.",
        question: "What five qualities indicate one is situated in transcendence?",
        answer: "1) No rejoicing in pleasure, 2) No lamenting in distress, 3) Self-intelligent, 4) Unbewildered, 5) Knows divine science.",
        concept: "Verse 5.19 - Signs of Transcendental Position"
    },
    { 
        shloka: "न प्रहृष्येत्प्रियं प्राप्य नोद्विजेत्प्राप्य चाप्रियम् | स्थिरबुद्धिरसम्मूढो ब्रह्मविद्ब्रह्मणि स्थितः || 5-20",
        meaning: "Such a liberated person is not attracted to material sense pleasure but is always in trance, enjoying the pleasure within. In this way the self-realized person enjoys unlimited happiness, for he concentrates on the Supreme.",
        question: "Where does a self-realized person find happiness?",
        answer: "They find unlimited happiness within through trance, concentrating on the Supreme, not in external pleasures.",
        concept: "Verse 5.20 - Internal Happiness of the Realized"
    },
    { 
        shloka: "बाह्यस्पर्शेष्वसक्तात्मा विन्दत्यात्मनि यत्सुखम् | स ब्रह्मयोगयुक्तात्मा सुखमक्षयमश्नुते || 5-21",
        meaning: "An intelligent person does not take part in the sources of misery, which are due to contact with the material senses. O son of Kunti, such pleasures have a beginning and an end, and so the wise man does not delight in them.",
        question: "Why do wise persons avoid material pleasures?",
        answer: "Because material pleasures are temporary sources of misery with definite beginnings and ends.",
        concept: "Verse 5.21 - Wise Avoidance of Material Pleasures"
    },
    { 
        shloka: "ये हि संस्पर्शजा भोगा दुःखयोनय एव ते | आद्यन्तवन्तः कौन्तेय न तेषु रमते बुधः || 5-22",
        meaning: "One who can control his forces of desire and anger before death is a yogi and is happy in this world.",
        question: "What must one control to become a happy yogi?",
        answer: "One must control the forces of desire and anger before death to become a happy yogi.",
        concept: "Verse 5.22 - Control of Desire and Anger"
    },
    { 
        shloka: "योऽन्तःसुखोऽन्तरारामस्तथान्तर्ज्योतिरेव यः | स योगी ब्रह्मनिर्वाणं ब्रह्मभूतोऽधिगच्छति || 5-23",
        meaning: "One whose happiness is within, who is active within, who rejoices within and is illumined within is actually the perfect mystic. He is liberated in the Supreme, and ultimately he attains the Supreme.",
        question: "What four internal qualities characterize a perfect mystic?",
        answer: "1) Happiness within, 2) Active within, 3) Rejoices within, 4) Illumined within.",
        concept: "Verse 5.23 - The Perfect Mystic"
    },
    { 
        shloka: "लभन्ते ब्रह्मनिर्वाणमृषयः क्षीणकल्मषाः | छिन्नद्वैधा यतात्मानः सर्वभूतहिते रताः || 5-24",
        meaning: "Those who are beyond the dualities that arise from doubts, whose minds are engaged within, who are always busy working for the welfare of all living beings, and who are free from all sins achieve liberation in the Supreme.",
        question: "What four qualities lead to liberation in the Supreme?",
        answer: "1) Beyond dualities of doubt, 2) Mind turned inward, 3) Working for welfare of all, 4) Free from sins.",
        concept: "Verse 5.24 - Qualities for Liberation"
    },
    { 
        shloka: "कामक्रोधवियुक्तानां यतीनां यतचेतसाम् | अभितो ब्रह्मनिर्वाणं वर्तते विदितात्मनाम् || 5-25",
        meaning: "Those who are free from anger and all material desires, who are self-realized, self-disciplined and constantly endeavoring for perfection, are assured of liberation in the Supreme in the very near future.",
        question: "Who is assured of imminent liberation?",
        answer: "Those free from anger and desires, self-realized, disciplined, and constantly striving for perfection.",
        concept: "Verse 5.25 - Assurance of Liberation"
    },
    { 
        shloka: "स्पर्शान्कृत्वा बहिर्बाह्यांश्चक्षुश्चैवान्तरे भ्रुवोः | प्राणापानौ समौ कृत्वा नासाभ्यन्तरचारिणौ || 5-26",
        meaning: "Shutting out all external sense objects, keeping the eyes and vision concentrated between the two eyebrows, suspending the inward and outward breaths within the nostrils—thus controlling the mind, senses and intelligence, the tranecendentalist becomes free from desire, fear and anger. One who is always in this state is certainly liberated.",
        question: "What meditation practice is described for controlling the senses?",
        answer: "Withdrawing senses from objects, focusing eyes between eyebrows, equalizing inhalation and exhalation.",
        concept: "Verse 5.26 - Meditation Technique"
    },
    { 
        shloka: "यतेन्द्रियमनोबुद्धिर्मुनिर्मोक्षपरायणः | विगतेच्छाभयक्रोधो यः सदा मुक्त एव सः || 5-27",
        meaning: "The sages, knowing Me as the ultimate purpose of all sacrifices and austerities, the Supreme Lord of all planets and demigods, and the benefactor and well-wisher of all living entities, attain peace from the pangs of material miseries.",
        question: "What understanding brings peace to the sages?",
        answer: "Understanding Krishna as the ultimate goal of all spiritual practices and the well-wisher of all beings.",
        concept: "Verse 5.27 - Knowledge That Brings Peace"
    },
    { 
        shloka: "ऋषीणामप्यहं कृष्णः सर्वयोगविनिष्ठिताम् | वेत्ता न च मत्तः सिद्धिं प्राप्नुवन्ति महर्षयः || 5-28",
        meaning: "A self-realized soul is not bewildered by the different phases of the body, which is born and is subject to death. He is not affected even when the body is burned to ashes.",
        question: "How does a self-realized soul view the body's changes?",
        answer: "They are not bewildered by the body's birth, death, or destruction, knowing the soul's eternity.",
        concept: "Verse 5.28 - Unaffected by Bodily Changes"
    },
    { 
        shloka: "भोक्तारं यज्ञतपसां सर्वलोकमहेश्वरम् | सुहृदं सर्वभूतानां ज्ञात्वा मां शान्तिमृच्छति || 5-29",
        meaning: "One who sees Me in everything and everything in Me, I am never lost to him, and he is never lost to Me.",
        question: "What vision maintains the eternal relationship with Krishna?",
        answer: "Seeing Krishna in everything and everything in Krishna maintains the eternal reciprocal relationship.",
        concept: "Verse 5.29 - Vision of Unity with Krishna"
    }
];