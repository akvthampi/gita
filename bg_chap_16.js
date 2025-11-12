// --- bg_chap_16.js ---
const chapterMetadata = {
    title: "Chapter 16: The Yoga of Division Between the Divine and Demonic Natures",
    info: "Daivasura Sampad Vibhaga Yoga - Yoga of Division Between Divine and Demonic Qualities (24 verses)"
};

const flashcards = [
    { 
        shloka: "श्रीभगवानुवाच | अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः | दानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम् || 16-1",
        meaning: "The Blessed Lord said: Fearlessness, purification of one's existence, cultivation of spiritual knowledge, charity, self-control, sacrifice, study of the Vedas, austerity, and simplicity;",
        question: "What divine qualities does Krishna begin listing?",
        answer: "Fearlessness, purity, spiritual knowledge, charity, self-control, sacrifice, Vedic study, austerity, simplicity.",
        concept: "Verse 16.1 - Divine Qualities (Part 1)"
    },
    { 
        shloka: "अहिंसा सत्यमक्रोधस्त्यागः शान्तिरपैशुनम् | दया भूतेष्वलोलुप्त्वं मार्दवं ह्रीरचापलम् || 16-2",
        meaning: "Nonviolence, truthfulness, freedom from anger, renunciation, tranquility, aversion to fault-finding, compassion toward all beings, freedom from covetousness, gentleness, modesty, steadiness;",
        question: "What additional divine qualities are mentioned?",
        answer: "Nonviolence, truth, non-anger, renunciation, peace, no fault-finding, compassion, non-covetousness, gentleness, modesty, steadiness.",
        concept: "Verse 16.2 - Divine Qualities (Part 2)"
    },
    { 
        shloka: "तेजः क्षमा धृतिः शौचमद्रोहो नातिमानिता | भवन्ति सम्पदं दैवीमभिजातस्य भारत || 16-3",
        meaning: "Vigor, forgiveness, fortitude, purity, freedom from malice, and absence of pride—these belong to one born with divine qualities, O Bharata.",
        question: "What are the final divine qualities listed?",
        answer: "Vigor, forgiveness, fortitude, purity, freedom from malice, absence of pride.",
        concept: "Verse 16.3 - Divine Qualities (Part 3)"
    },
    { 
        shloka: "दम्भो दर्पोऽभिमानश्च क्रोधः पारुष्यमेव च | अज्ञानं चाभिजातस्य पार्थ सम्पदमासुरीम् || 16-4",
        meaning: "Hypocrisy, arrogance, conceit, anger, harshness, and ignorance—these belong to one born with demonic qualities, O Partha.",
        question: "What demonic qualities does Krishna list?",
        answer: "Hypocrisy, arrogance, conceit, anger, harshness, ignorance.",
        concept: "Verse 16.4 - Demonic Qualities (Part 1)"
    },
    { 
        shloka: "दैवी सम्पद्विमोक्षाय निबन्धायासुरी मता | मा शुचः सम्पदं दैवीमभिजातोऽसि पाण्डव || 16-5",
        meaning: "The divine qualities lead to liberation, while the demonic qualities lead to bondage. Do not grieve, O Pandava, you are born with divine qualities.",
        question: "What are the results of divine and demonic qualities?",
        answer: "Divine qualities lead to liberation; demonic qualities lead to bondage. Arjuna has divine nature.",
        concept: "Verse 16.5 - Results of Two Natures"
    },
    { 
        shloka: "द्वौ भूतसर्गौ लोकेऽस्मिन्दैव आसुर एव च | दैवो विस्तरशः प्रोक्त आसुरं पार्थ मे शृणु || 16-6",
        meaning: "O Partha, there are two types of beings in this world—the divine and the demonic. The divine has been described at length; now hear from Me about the demonic.",
        question: "What two types of beings exist in the world?",
        answer: "Divine-natured and demonic-natured beings.",
        concept: "Verse 16.6 - Two Types of Beings"
    },
    { 
        shloka: "प्रवृत्तिं च निवृत्तिं च जना न विदुरासुराः | न शौचं नापि चाचारो न सत्यं तेषु विद्यते || 16-7",
        meaning: "Demonic persons do not know what to do and what not to do. Neither purity, nor proper conduct, nor truth is found in them.",
        question: "What do demonic persons lack?",
        answer: "Knowledge of right and wrong action, purity, proper conduct, and truth.",
        concept: "Verse 16.7 - Ignorance of Demonic Persons"
    },
    { 
        shloka: "असत्यमप्रतिष्ठं ते जगदाहुरनीश्वरम् | अपरस्परसम्भूतं किमन्यत्कामहैतुकम् || 16-8",
        meaning: "They say that the world is unreal, without foundation, without God, born of mutual union, brought about by desire, with no other cause.",
        question: "What false philosophy do demonic persons believe?",
        answer: "That the world is unreal, godless, born from sexual union, caused only by desire.",
        concept: "Verse 16.8 - Atheistic Philosophy"
    },
    { 
        shloka: "एतां दृष्टिमवष्टभ्य नष्टात्मानोऽल्पबुद्धयः | प्रभवन्त्युग्रकर्माणः क्षयाय जगतोऽहिताः || 16-9",
        meaning: "Holding this view, these lost souls of small intelligence, of fierce deeds, come forth as enemies for the destruction of the world.",
        question: "What is the effect of such demonic philosophy?",
        answer: "Lost souls with small intelligence perform cruel acts and become enemies of the world.",
        concept: "Verse 16.9 - Effects of Demonic Worldview"
    },
    { 
        shloka: "काममाश्रित्य दुष्पूरं दम्भमानमदान्विताः | मोहाद्गृहीत्वासद्ग्राहान्प्रवर्तन्तेऽशुचिव्रताः || 16-10",
        meaning: "Taking shelter of insatiable lust, absorbed in the vanity of pride and false prestige, the demonic, thus illusioned, are always sworn to unclean work, attracted by the impermanent.",
        question: "What drives demonic persons?",
        answer: "Insatiable lust, pride, vanity, and attachment to impermanent things.",
        concept: "Verse 16.10 - Drives of Demonic Persons"
    },
    { 
        shloka: "चिन्तामपरिमेयां च प्रलयान्तामुपाश्रिताः | कामोपभोगपरमा एतावदिति निश्चिताः || 16-11",
        meaning: "They believe that to gratify the senses is the prime necessity of human civilization. Thus until the end of life, their anxiety is immeasurable.",
        question: "What do demonic persons consider the goal of life?",
        answer: "Sense gratification as the prime necessity of human civilization.",
        concept: "Verse 16.11 - Demonic Life Goal"
    },
    { 
        shloka: "आशापाशशतैर्बद्धाः कामक्रोधपरायणाः | ईहन्ते कामभोगार्थमन्यायेनार्थसञ्चयान् || 16-12",
        meaning: "Bound by hundreds of ties of desire, absorbed in lust and anger, they strive to obtain wealth by unlawful means for sense gratification.",
        question: "How do demonic persons accumulate wealth?",
        answer: "By unlawful means, driven by desire, lust, and anger.",
        concept: "Verse 16.12 - Unlawful Accumulation"
    },
    { 
        shloka: "इदमद्य मया लब्धमिमं प्राप्स्ये मनोरथम् | इदमस्तीदमपि मे भविष्यति पुनर्धनम् || 16-13",
        meaning: "This today has been gained by me; this desire I shall obtain; this is mine, and this wealth also shall be mine in the future;",
        question: "What is the demonic mentality about possessions?",
        answer: "Constant thinking about what they have gained, will gain, and will possess in future.",
        concept: "Verse 16.13 - Possessive Mentality"
    },
    { 
        shloka: "असौ मया हतः शत्रुर्हनिष्ये चापरानपि | ईश्वरोऽहमहं भोगी सिद्धोऽहं बलवान्सुखी || 16-14",
        meaning: "That enemy has been slain by me, and others also I shall slay. I am the lord, I am the enjoyer, I am perfect, powerful, and happy;",
        question: "What false identifications do demonic persons have?",
        answer: "Thinking themselves as lords, enjoyers, perfect, powerful, and happy.",
        concept: "Verse 16.14 - False Ego of Demonic"
    },
    { 
        shloka: "आढ्योऽभिजनवानस्मि कोऽन्योऽस्ति सदृशो मया | यक्ष्ये दास्यामि मोदिष्य इत्यज्ञानविमोहिताः || 16-15",
        meaning: "I am rich and born in a noble family. Who else is equal to me? I shall sacrifice, I shall give charity, I shall rejoice. Thus they are deluded by ignorance.",
        question: "What arrogant thoughts occupy demonic minds?",
        answer: "Pride in wealth and lineage, thinking themselves superior, with plans for sacrifice and charity for show.",
        concept: "Verse 16.15 - Arrogance and Delusion"
    },
    { 
        shloka: "अनेकचित्तविभ्रान्ता मोहजालसमावृताः | प्रसक्ताः कामभोगेषु पतन्ति नरकेऽशुचौ || 16-16",
        meaning: "Bewildered by numerous thoughts, entangled in the net of delusion, addicted to satisfying lust, they fall into a foul hell.",
        question: "What is the destination of demonic persons?",
        answer: "A foul hell, due to being bewildered, deluded, and addicted to lust.",
        concept: "Verse 16.16 - Destination of Demonic"
    },
    { 
        shloka: "आत्मसम्भाविताः स्तब्धा धनमानमदान्विताः | यजन्ते नामयज्ञैस्ते दम्भेनाविधिपूर्वकम् || 16-17",
        meaning: "Self-complacent, stubborn, filled with pride and intoxication of wealth, they perform sacrifices in name only, without following any rules, out of hypocrisy.",
        question: "How do demonic persons perform religious rituals?",
        answer: "Hypocritically, without following rules, for name and fame only.",
        concept: "Verse 16.17 - Hypocritical Religion"
    },
    { 
        shloka: "अहंकारं बलं दर्पं कामं क्रोधं च संश्रिताः | मामात्मपरदेहेषु प्रद्विषन्तोऽभ्यसूयकाः || 16-18",
        meaning: "Given to egoism, power, haughtiness, lust, and anger, these malicious people hate Me in their own bodies and in the bodies of others.",
        question: "How do demonic persons relate to Krishna?",
        answer: "They hate Krishna, residing in their own bodies and others' bodies.",
        concept: "Verse 16.18 - Hatred Toward God"
    },
    { 
        shloka: "तानहं द्विषतः क्रुरान्संसारेषु नराधमान् | क्षिपाम्यजस्रमशुभानासुरीष्वेव योनिषु || 16-19",
        meaning: "Those who are hateful, cruel, worst among men, I hurl these evil-doers forever into the wombs of demons only.",
        question: "What happens to persistently demonic persons?",
        answer: "Krishna hurls them into demonic wombs life after life.",
        concept: "Verse 16.19 - Rebirth in Demonic Species"
    },
    { 
        shloka: "आसुरीं योनिमापन्ना मूढा जन्मनि जन्मनि | मामप्राप्यैव कौन्तेय ततो यान्त्यधमां गतिम् || 16-20",
        meaning: "Obtaining demonic wombs, the deluded ones, birth after birth, without attaining Me, O son of Kunti, go to the lowest state.",
        question: "What is the ultimate fate of those in demonic species?",
        answer: "Birth after birth in demonic wombs, never attaining Krishna, going to the lowest state.",
        concept: "Verse 16.20 - Ultimate Degradation"
    },
    { 
        shloka: "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः | कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत् || 16-21",
        meaning: "Lust, anger, and greed—these are the three gates to hell, destructive to the self. Therefore, one should abandon these three.",
        question: "What three gates lead to hell?",
        answer: "Lust, anger, and greed - which destroy the self.",
        concept: "Verse 16.21 - Three Gates to Hell"
    },
    { 
        shloka: "एतैर्विमुक्तः कौन्तेय तमोद्वारैस्त्रिभिर्नरः | आचरत्यात्मनः श्रेयस्ततो याति परां गतिम् || 16-22",
        meaning: "One who is liberated from these three gates of darkness, O son of Kunti, does what is good for himself and thereby attains the supreme goal.",
        question: "What happens when one avoids these three gates?",
        answer: "They perform what's truly beneficial and attain the supreme destination.",
        concept: "Verse 16.22 - Liberation from Demonic Qualities"
    },
    { 
        shloka: "यः शास्त्रविधिमुत्सृज्य वर्तते कामकारतः | न स सिद्धिमवाप्नोति न सुखं न परां गतिम् || 16-23",
        meaning: "But one who discards scriptural injunctions and acts according to his own whims attains neither perfection, nor happiness, nor the supreme goal.",
        question: "What is the result of ignoring scripture?",
        answer: "No perfection, no happiness, no supreme goal is attained.",
        concept: "Verse 16.23 - Danger of Ignoring Scripture"
    },
    { 
        shloka: "तस्माच्छास्त्रं प्रमाणं ते कार्याकार्यव्यवस्थितौ | ज्ञात्वा शास्त्रविधानोक्तं कर्म कर्तुमिहार्हसि || 16-24",
        meaning: "Therefore, let the scripture be your authority in determining what should be done and what should not be done. Knowing what is stated in the rules of scripture, you should perform your duty here.",
        question: "What should be our guide for action?",
        answer: "Scripture should be the authority for determining right and wrong action.",
        concept: "Verse 16.24 - Scripture as Guide"
    }
];