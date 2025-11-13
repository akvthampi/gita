// --- bg_chap_17.js ---
const chapterMetadata = {
    title: "Chapter 17: The Yoga of the Threefold Division of Faith",
    info: "Shraddha Traya Vibhaga Yoga - Yoga of the Threefold Division of Faith"
};
const flashcards = [
    { 
        shloka: "अर्जुन उवाच | ये शास्त्रविधिमुत्सृज्य यजन्ते श्रद्धयान्विताः | तेषां निष्ठा तु का कृष्ण सत्त्वमाहो रजस्तमः || 17-1",
        meaning: "Arjuna said: O Krishna, what is the position of those who do not follow the principles of scripture but worship with faith? Do they act in goodness, passion, or ignorance?",
        question: "What question does Arjuna ask about those who worship without scriptural guidance?",
        answer: "What is the nature of those who worship with faith but without following scriptural rules - are they in goodness, passion, or ignorance?",
        concept: "Verse 17.1 - Question About Faith Without Scripture"
    },
    { 
        shloka: "श्रीभगवानुवाच | त्रिविधा भवति श्रद्धा देहिनां सा स्वभावजा | सात्त्विकी राजसी चैव तामसी चेति तां शृणु || 17-2",
        meaning: "The Blessed Lord said: The faith of the embodied is of three kinds, born of their own nature—goodness, passion, and ignorance. Now hear about these.",
        question: "How many types of faith are there?",
        answer: "Three kinds - born of one's nature: sattvic (goodness), rajasic (passion), and tamasic (ignorance).",
        concept: "Verse 17.2 - Three Types of Faith"
    },
    { 
        shloka: "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत | श्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः || 17-3",
        meaning: "O Bharata, according to one's existence under the modes of nature, one evolves a particular kind of faith. The living entity is of the nature of his faith; whatever his faith is, that indeed he is.",
        question: "What determines a person's faith?",
        answer: "One's nature according to the modes of material nature - a person becomes what his faith is.",
        concept: "Verse 17.3 - Faith According to Nature"
    },
    { 
        shloka: "यजन्ते सात्त्विका देवान्यक्षरक्षांसि राजसाः | प्रेतान्भूतगणांश्चान्ये यजन्ते तामसा जनाः || 17-4",
        meaning: "Men in the mode of goodness worship the demigods; those in passion worship demons; and those in ignorance worship ghosts and spirits.",
        question: "Who do people worship according to their modes?",
        answer: "Goodness: demigods; Passion: demons; Ignorance: ghosts and spirits.",
        concept: "Verse 17.4 - Worship According to Modes"
    },
    { 
        shloka: "अशास्त्रविहितं घोरं तप्यन्ते ये तपो जनाः | दम्भाहङ्कारसंयुक्ताः कामरागबलान्विताः || 17-5",
        meaning: "Those who undergo severe austerities not recommended in scripture, who are full of hypocrisy and ego, impelled by lust and attachment,",
        question: "What characterizes false austerities?",
        answer: "Not scripturally recommended, full of hypocrisy and ego, driven by lust and attachment.",
        concept: "Verse 17.5 - False Austerities"
    },
    { 
        shloka: "कर्शयन्तः शरीरस्थं भूतग्राममचेतसः | मां चैवान्तःशरीरस्थं तान्विद्ध्यासुरनिश्चयान् || 17-6",
        meaning: "Tormenting the aggregate of material elements in the body and Me dwelling within the body—know them to be demoniac in their resolves.",
        question: "Who are considered demonic in their determination?",
        answer: "Those who torture their body elements and Krishna within the body.",
        concept: "Verse 17.6 - Demonic Determination"
    },
    { 
        shloka: "आहारस्त्वपि सर्वस्य त्रिविधो भवति प्रियः | यज्ञस्तपस्तथा दानं तेषां भेदमिमं शृणु || 17-7",
        meaning: "Even the food preferred by all is of three kinds, as are sacrifice, austerity, and charity. Now hear of the distinctions between them.",
        question: "What four things have threefold divisions?",
        answer: "Food, sacrifice, austerity, and charity - all have sattvic, rajasic, and tamasic varieties.",
        concept: "Verse 17.7 - Threefold Division of Practices"
    },
    { 
        shloka: "आयुःसत्त्वबलारोग्यसुखप्रीतिविवर्धनाः | रस्याः स्निग्धाः स्थिरा हृद्या आहाराः सात्त्विकप्रियाः || 17-8",
        meaning: "Foods that promote life, vitality, strength, health, happiness, and satisfaction, which are juicy, smooth, substantial, and agreeable, are dear to those in goodness.",
        question: "What foods are preferred by sattvic persons?",
        answer: "Those that increase life, purity, strength, health, happiness, and satisfaction - juicy, smooth, substantial, and agreeable.",
        concept: "Verse 17.8 - Sattvic Food"
    },
    { 
        shloka: "कट्वम्ललवणात्युष्णतीक्ष्णरूक्षविदाहिनः | आहारा राजसस्येष्टा दुःखशोकामयप्रदाः || 17-9",
        meaning: "Foods that are too bitter, sour, salty, pungent, dry, and burning are liked by those in passion. Such foods cause pain, grief, and disease.",
        question: "What foods are preferred by rajasic persons?",
        answer: "Bitter, sour, salty, pungent, dry, burning foods - which cause pain, grief, and disease.",
        concept: "Verse 17.9 - Rajasic Food"
    },
    { 
        shloka: "यातयामं गतरसं पूति पर्युषितं च यत् | उच्छिष्टमपि चामेध्यं भोजनं तामसप्रियम् || 17-10",
        meaning: "Food that is stale, tasteless, putrid, rotten, and impure is dear to those in ignorance.",
        question: "What foods are preferred by tamasic persons?",
        answer: "Stale, tasteless, putrid, rotten, leftover, and impure foods.",
        concept: "Verse 17.10 - Tamasic Food"
    },
    { 
        shloka: "अफलाकाङ्क्षिभिर्यज्ञो विधिदृष्टो य इज्यते | यष्टव्यमेवेति मनः समाधाय स सात्त्विकः || 17-11",
        meaning: "That sacrifice which is offered according to scriptural injunction, by those who expect no reward, with a mind fixed on the idea that sacrifice is a duty, is of the nature of goodness.",
        question: "What characterizes sattvic sacrifice?",
        answer: "Performed according to scripture, without desire for fruits, with mind fixed on duty.",
        concept: "Verse 17.11 - Sattvic Sacrifice"
    },
    { 
        shloka: "अभिसन्धाय तु फलं दम्भार्थमपि चैव यत् | इज्यते भरतश्रेष्ठ तं यज्ञं विद्धि राजसम् || 17-12",
        meaning: "But that sacrifice which is performed for the sake of reward, or for show, O best of the Bharatas, know that to be in the mode of passion.",
        question: "What characterizes rajasic sacrifice?",
        answer: "Performed for material reward or for ostentation and show.",
        concept: "Verse 17.12 - Rajasic Sacrifice"
    },
    { 
        shloka: "विधिहीनमसृष्टान्नं मन्त्रहीनमदक्षिणम् | श्रद्धाविरहितं यज्ञं तामसं परिचक्षते || 17-13",
        meaning: "That sacrifice which is contrary to scriptural injunctions, in which no food is distributed, which is devoid of mantra, and where no faith exists, is declared to be in ignorance.",
        question: "What characterizes tamasic sacrifice?",
        answer: "Without scriptural rules, no food distribution, no mantras, and devoid of faith.",
        concept: "Verse 17.13 - Tamasic Sacrifice"
    },
    { 
        shloka: "देवद्विजगुरुप्राज्ञपूजनं शौचमार्जवम् | ब्रह्मचर्यमहिंसा च शारीरं तप उच्यते || 17-14",
        meaning: "Worship of the gods, brahmanas, spiritual masters, and the wise; purity, honesty, celibacy, and nonviolence—these are called the austerities of the body.",
        question: "What constitutes bodily austerity?",
        answer: "Worship of gods, brahmanas, gurus, and wise; purity, honesty, celibacy, nonviolence.",
        concept: "Verse 17.14 - Austerity of Body"
    },
    { 
        shloka: "अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत् | स्वाध्यायाभ्यसनं चैव वाङ्मयं तप उच्यते || 17-15",
        meaning: "Speech that causes no distress, that is truthful, pleasant, and beneficial, and the regular recitation of the Vedas—these are called the austerities of speech.",
        question: "What constitutes austerity of speech?",
        answer: "Speech that doesn't distress, is truthful, pleasant, beneficial, and regular Vedic recitation.",
        concept: "Verse 17.15 - Austerity of Speech"
    },
    { 
        shloka: "मनः प्रसादः सौम्यत्वं मौनमात्मविनिग्रहः | भावसंशुद्धिरित्येतत्तपो मानसमुच्यते || 17-16",
        meaning: "Serenity of mind, gentleness, silence, self-control, and purity of thought—these are called the austerities of the mind.",
        question: "What constitutes mental austerity?",
        answer: "Mental serenity, gentleness, silence, self-control, and purity of thought.",
        concept: "Verse 17.16 - Austerity of Mind"
    },
    { 
        shloka: "श्रद्धया परया तप्तं तपस्तत्त्रिविधं नरैः | अफलाकाङ्क्षिभिर्युक्तैः सात्त्विकं परिचक्षते || 17-17",
        meaning: "This threefold austerity, practiced with supreme faith by men of disciplined mind who desire no fruit, is said to be in the mode of goodness.",
        question: "What makes austerity sattvic?",
        answer: "Threefold austerity practiced with supreme faith by disciplined persons without desire for fruits.",
        concept: "Verse 17.17 - Sattvic Austerity"
    },
    { 
        shloka: "सत्कारमानपूजार्थं तपो दम्भेन चैव यत् | क्रियते तदिह प्रोक्तं राजसं चलमध्रुवम् || 17-18",
        meaning: "That austerity which is performed for the sake of respect, honor, and worship, and with hypocrisy, is said to be in passion. It is unstable and impermanent.",
        question: "What characterizes rajasic austerity?",
        answer: "Performed for respect, honor, worship, and with hypocrisy - unstable and impermanent.",
        concept: "Verse 17.18 - Rajasic Austerity"
    },
    { 
        shloka: "मूढग्राहेणात्मनो यत्पीडया क्रियते तपः | परस्योत्सादनार्थं वा तत्तामसमुदाहृतम् || 17-19",
        meaning: "That austerity which is performed with foolish stubbornness, or with self-torture, or for the purpose of destroying another, is declared to be in ignorance.",
        question: "What characterizes tamasic austerity?",
        answer: "Performed with foolish stubbornness, self-torture, or to harm others.",
        concept: "Verse 17.19 - Tamasic Austerity"
    },
    { 
        shloka: "दातव्यमिति यद्दानं दीयतेऽनुपकारिणे | देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम् || 17-20",
        meaning: "Charity given as a matter of duty, to one who can make no return, at the proper time and place, and to a worthy person, is said to be in the mode of goodness.",
        question: "What characterizes sattvic charity?",
        answer: "Given out of duty, to deserving person who can't return, at right time and place.",
        concept: "Verse 17.20 - Sattvic Charity"
    },
    { 
        shloka: "यत्तु प्रत्युपकारार्थं फलमुद्दिश्य वा पुनः | दीयते च परिक्लिष्टं तद्दानं राजसं स्मृतम् || 17-21",
        meaning: "But that charity which is given with expectation of return, or with desire for fruit, or reluctantly, is said to be in passion.",
        question: "What characterizes rajasic charity?",
        answer: "Given expecting return, desiring results, or given reluctantly.",
        concept: "Verse 17.21 - Rajasic Charity"
    },
    { 
        shloka: "अदेशकाले यद्दानमपात्रेभ्यश्च दीयते | असत्कृतमवज्ञातं तत्तामसमुदाहृतम् || 17-22",
        meaning: "And that charity which is given at wrong place and time, to unworthy persons, without respect, or with contempt, is declared to be in ignorance.",
        question: "What characterizes tamasic charity?",
        answer: "Given at wrong place/time, to unworthy persons, without respect or with contempt.",
        concept: "Verse 17.22 - Tamasic Charity"
    },
    { 
        shloka: "ॐ तत्सदिति निर्देशो ब्रह्मणस्त्रिविधः स्मृतः | ब्राह्मणास्तेन वेदाश्च यज्ञाश्च विहिताः पुरा || 17-23",
        meaning: "From the beginning of creation, the three words Om Tat Sat have been used to indicate the Supreme Absolute Truth. They were uttered by brahmanas while chanting Vedic hymns and performing sacrifices.",
        question: "What three words designate the Supreme Absolute Truth?",
        answer: "Om Tat Sat - used since beginning of creation in Vedas and sacrifices.",
        concept: "Verse 17.23 - Om Tat Sat"
    },
    { 
        shloka: "तस्मादोमित्युदाहृत्य यज्ञदानतपःक्रियाः | प्रवर्तन्ते विधानोक्ताः सततं ब्रह्मवादिनाम् || 17-24",
        meaning: "Therefore, acts of sacrifice, charity, and austerity as prescribed in scripture should always be begun by uttering Om by those who know Brahman.",
        question: "How should spiritual activities be begun?",
        answer: "By uttering Om, as prescribed in scriptures by knowers of Brahman.",
        concept: "Verse 17.24 - Beginning with Om"
    },
    { 
        shloka: "तदित्यनभिसन्धाय फलं यज्ञतपःक्रियाः | दानक्रियाश्च विविधाः क्रियन्ते मोक्षकाङ्क्षिभिः || 17-25",
        meaning: "Without desiring fruits, various acts of sacrifice, austerity, and charity should be performed by those seeking liberation, by uttering Tat.",
        question: "How should one perform activities for liberation?",
        answer: "Without desire for fruits, uttering Tat while performing sacrifice, austerity, and charity.",
        concept: "Verse 17.25 - Performing with Tat"
    },
    { 
        shloka: "सद्भावे साधुभावे च सदित्येतत्प्रयुज्यते | प्रशस्ते कर्मणि तथा सच्छब्दः पार्थ युज्यते || 17-26",
        meaning: "The word Sat is used to denote existence and goodness. Likewise, O Partha, the word Sat is used for auspicious action.",
        question: "What does Sat signify?",
        answer: "Existence, goodness, and auspicious action.",
        concept: "Verse 17.26 - Meaning of Sat"
    },
    { 
        shloka: "यज्ञे तपसि दाने च स्थितिः सदिति चोच्यते | कर्म चैव तदर्थीयं सदित्येवाभिधीयते || 17-27",
        meaning: "Steadfastness in sacrifice, austerity, and charity is also called Sat, and action for the sake of the Supreme is also called Sat.",
        question: "What else is called Sat?",
        answer: "Steadfastness in sacrifice/austerity/charity, and action for the Supreme's sake.",
        concept: "Verse 17.27 - Applications of Sat"
    },
    { 
        shloka: "अश्रद्धया हुतं दत्तं तपस्तप्तं कृतं च यत् | असदित्युच्यते पार्थ न च तत्प्रेत्य नो इह || 17-28",
        meaning: "Whatever is sacrificed, given, or performed, and whatever austerity is practiced without faith—it is called Asat, O Partha. It is useless both in this life and the next.",
        question: "What is the result of activities without faith?",
        answer: "They are called Asat (unreal) and are useless in this life and the next.",
        concept: "Verse 17.28 - Result of Faithless Action"
    }
];