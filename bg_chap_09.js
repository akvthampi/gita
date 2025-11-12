// --- bg_chap_09.js ---
const chapterMetadata = {
    title: "Chapter 9: The Yoga of the Royal Secret",
    info: "Raja Vidya Raja Guhya Yoga - Yoga of the Royal Secret and Supreme Science (34 verses)"
};
const flashcards = [
    { 
        shloka: "श्रीभगवानुवाच | इदं तु ते गुह्यतमं प्रवक्ष्याम्यनसूयवे | ज्ञानं विज्ञानसहितं यज्ज्ञात्वा मोक्ष्यसेऽशुभात् || 9-1",
        meaning: "The Supreme Lord said: My dear Arjuna, because you are never envious of Me, I shall impart to you this most secret wisdom, knowing which you shall be relieved of the miseries of material existence.",
        question: "Why is Krishna revealing this most confidential knowledge to Arjuna?",
        answer: "Because Arjuna is non-envious (anasuyave), Krishna reveals this secret wisdom to free him from material miseries.",
        concept: "Verse 9.1 - Revelation of Most Confidential Knowledge"
    },
    { 
        shloka: "राजविद्या राजगुह्यं पवित्रमिदमुत्तमम् | प्रत्यक्षावगमं धर्म्यं सुसुखं कर्तुमव्ययम् || 9-2",
        meaning: "This knowledge is the king of education, the most secret of all secrets. It is the purest knowledge, and because it gives direct perception of the self by realization, it is the perfection of religion. It is everlasting, and it is joyfully performed.",
        question: "What six qualities describe this royal secret knowledge?",
        answer: "1) King of education, 2) Most secret, 3) Purest, 4) Gives direct self-realization, 5) Everlasting, 6) Joyfully performed.",
        concept: "Verse 9.2 - Qualities of the Royal Secret"
    },
    { 
        shloka: "अश्रद्दधानाः पुरुषा धर्मस्यास्य परन्तप | अप्राप्य मां निवर्तन्ते मृत्युसंसारवर्त्मनि || 9-3",
        meaning: "Those who are not faithful in this devotional service cannot attain Me, O conqueror of enemies. Therefore they return to the path of birth and death in this material world.",
        question: "What happens to those without faith in this devotional service?",
        answer: "They cannot attain Krishna and return to the cycle of birth and death in material existence.",
        concept: "Verse 9.3 - Fate of the Faithless"
    },
    { 
        shloka: "मया ततमिदं सर्वं जगदव्यक्तमूर्तिना | मत्स्थानि सर्वभूतानि न चाहं तेष्ववस्थितः || 9-4",
        meaning: "By Me, in My unmanifested form, this entire universe is pervaded. All beings are in Me, but I am not in them.",
        question: "What is Krishna's relationship with the universe and beings?",
        answer: "Krishna pervades everything in unmanifest form; all beings exist in Him, but He is not contained in them.",
        concept: "Verse 9.4 - All-Pervading Yet Transcendent"
    },
    { 
        shloka: "न च मत्स्थानि भूतानि पश्य मे योगमैश्वरम् | भूतभृन्न च भूतस्थो ममात्मा भूतभावनः || 9-5",
        meaning: "And yet everything that is created does not rest in Me. Behold My mystic opulence! Although I am the maintainer of all living entities and although I am everywhere, I am not a part of this cosmic manifestation, for My Self is the very source of creation.",
        question: "What is the paradox of Krishna's relationship with creation?",
        answer: "Though everything rests in Krishna and He maintains all, He remains separate as the source of creation.",
        concept: "Verse 9.5 - Mystic Opulence of Maintenance"
    },
    { 
        shloka: "यथाकाशस्थितो नित्यं वायुः सर्वत्रगो महान् | तथा सर्वाणि भूतानि मत्स्थानीत्युपधारय || 9-6",
        meaning: "Understand that as the mighty wind, blowing everywhere, rests always in the sky, all created beings rest in Me.",
        question: "What analogy describes how beings exist in Krishna?",
        answer: "Like wind always resting in the sky, all beings exist in Krishna though appearing to move independently.",
        concept: "Verse 9.6 - Sky and Wind Analogy"
    },
    { 
        shloka: "सर्वभूतानि कौन्तेय प्रकृतिं यान्ति मामिकाम् | कल्पक्षये पुनस्तानि कल्पादौ विसृजाम्यहम् || 9-7",
        meaning: "O son of Kunti, at the end of the millennium all material manifestations enter into My nature, and at the beginning of another millennium, by My potency, I create them again.",
        question: "What happens at the end and beginning of cosmic cycles?",
        answer: "At cycle's end, everything merges into Krishna's nature; at beginning, He recreates everything through His potency.",
        concept: "Verse 9.7 - Cosmic Dissolution and Creation"
    },
    { 
        shloka: "प्रकृतिं स्वामवष्टभ्य विसृजामि पुनः पुनः | भूतग्राममिमं कृत्स्नमवशं प्रकृतेर्वशात् || 9-8",
        meaning: "The whole cosmic order is under Me. By My will it is manifested again and again, and by My will it is annihilated at the end.",
        question: "What is Krishna's role in cosmic manifestation?",
        answer: "The entire cosmic order works under Krishna's control - He manifests and annihilates it by His will.",
        concept: "Verse 9.8 - Cosmic Order Under Krishna's Control"
    },
    { 
        shloka: "न च मां तानि कर्माणि निबध्नन्ति धनञ्जय | उदासीनवदासीनमसक्तं तेषु कर्मसु || 9-9",
        meaning: "O Dhananjaya, all these works cannot bind Me. I am ever detached from them, seated as though neutral.",
        question: "Why don't cosmic activities bind Krishna?",
        answer: "Because He remains eternally detached and neutral, like an uninterested observer.",
        concept: "Verse 9.9 - Krishna's Detachment from Cosmic Activities"
    },
    { 
        shloka: "मयाध्यक्षेण प्रकृतिः सूयते सचराचरम् | हेतुनानेन कौन्तेय जगद्विपरिवर्तते || 9-10",
        meaning: "This material nature, which is one of My energies, is working under My direction, O son of Kunti, producing all moving and nonmoving beings. Under its rule this manifestation is created and annihilated again and again.",
        question: "How does material nature operate?",
        answer: "Material nature works under Krishna's supervision, producing all beings and governing cosmic cycles.",
        concept: "Verse 9.10 - Material Nature Under Krishna's Direction"
    },
    { 
        shloka: "अवजानन्ति मां मूढा मानुषीं तनुमाश्रितम् | परं भावमजानन्तो मम भूतमहेश्वरम् || 9-11",
        meaning: "Fools deride Me when I descend in the human form. They do not know My transcendental nature as the Supreme Lord of all that be.",
        question: "How do foolish people regard Krishna's human form?",
        answer: "They deride Him, not knowing His transcendental nature as Supreme Lord of everything.",
        concept: "Verse 9.11 - Foolish Misconception of Krishna's Form"
    },
    { 
        shloka: "मोघाशा मोघकर्माणो मोघज्ञाना विचेतसः | राक्षसीमासुरीं चैव प्रकृतिं मोहिनीं श्रिताः || 9-12",
        meaning: "Those who are thus bewildered are attracted by demonic and atheistic views. In that deluded condition, their hopes for liberation, their fruitive activities, and their culture of knowledge are all defeated.",
        question: "What three things are defeated for those in demonic consciousness?",
        answer: "1) Hopes for liberation, 2) Fruitive activities, 3) Culture of knowledge - all become useless.",
        concept: "Verse 9.12 - Defeat in Demonic Consciousness"
    },
    { 
        shloka: "महात्मानस्तु मां पार्थ दैवीं प्रकृतिमाश्रिताः | भजन्त्यनन्यमनसो ज्ञात्वा भूतादिमव्ययम् || 9-13",
        meaning: "O son of Pritha, those who are not deluded, the great souls, are under the protection of the divine nature. They are fully engaged in devotional service because they know Me as the Supreme Personality of Godhead, original and inexhaustible.",
        question: "What characterizes the great souls?",
        answer: "They are under divine protection, engage in exclusive devotion, and know Krishna as original inexhaustible Supreme.",
        concept: "Verse 9.13 - Characteristics of Great Souls"
    },
    { 
        shloka: "सततं कीर्तयन्तो मां यतन्तश्च दृढव्रताः | नमस्यन्तश्च मां भक्त्या नित्ययुक्ता उपासते || 9-14",
        meaning: "Always chanting My glories, endeavoring with great determination, bowing down before Me, these great souls perpetually worship Me with devotion.",
        question: "What four practices do great devotees perform?",
        answer: "1) Constantly chant Krishna's glories, 2) Endeavor with determination, 3) Offer obeisances, 4) Worship with devotion.",
        concept: "Verse 9.14 - Practices of Great Devotees"
    },
    { 
        shloka: "ज्ञानयज्ञेन चाप्यन्ये यजन्तो मामुपासते | एकत्वेन पृथक्त्वेन बहुधा विश्वतोमुखम् || 9-15",
        meaning: "Others, who engage in sacrifice by the cultivation of knowledge, worship the Supreme Lord as the one without a second, as diverse in many, and in the universal form.",
        question: "How do knowledge cultivators worship Krishna?",
        answer: "As non-dual, as diverse manifestations, and as universal form - through knowledge sacrifice.",
        concept: "Verse 9.15 - Worship Through Knowledge"
    },
    { 
        shloka: "अहं क्रतुरहं यज्ञः स्वधाहमहमौषधम् | मन्त्रोऽहमहमेवाज्यमहमग्निरहं हुतम् || 9-16",
        meaning: "But it is I who am the ritual, I the sacrifice, the offering to the ancestors, the healing herb, the transcendental chant. I am the butter and the fire and the offering.",
        question: "What seven aspects of sacrifice does Krishna identify with?",
        answer: "1) Ritual, 2) Sacrifice, 3) Ancestral offering, 4) Healing herb, 5) Mantra, 6) Clarified butter, 7) Fire and offering.",
        concept: "Verse 9.16 - Krishna as Everything in Sacrifice"
    },
    { 
        shloka: "पिताहमस्य जगतो माता धाता पितामहः | वेद्यं पवित्रमोङ्कार ऋक्साम यजुरेव च || 9-17",
        meaning: "I am the father of this universe, the mother, the support and the grandsire. I am the object of knowledge, the purifier and the syllable om. I am also the Rig, Sama and Yajur Vedas.",
        question: "What nine aspects does Krishna identify with?",
        answer: "1) Father, 2) Mother, 3) Support, 4) Grandsire, 5) Object of knowledge, 6) Purifier, 7) Om, 8-10) Three Vedas.",
        concept: "Verse 9.17 - Krishna as Universal Relations"
    },
    { 
        shloka: "गतिर्भर्ता प्रभुः साक्षी निवासः शरणं सुहृत् | प्रभवः प्रलयः स्थानं निधानं बीजमव्ययम् || 9-18",
        meaning: "I am the goal, the sustainer, the master, the witness, the abode, the refuge, the most dear friend. I am the creation and the annihilation, the basis of everything, the resting place and the eternal seed.",
        question: "What twelve roles does Krishna play?",
        answer: "1) Goal, 2) Sustainer, 3) Master, 4) Witness, 5) Abode, 6) Refuge, 7) Friend, 8) Creation, 9) Annihilation, 10) Basis, 11) Resting place, 12) Eternal seed.",
        concept: "Verse 9.18 - Krishna's Comprehensive Roles"
    },
    { 
        shloka: "तपाम्यहमहं वर्षं निगृह्णाम्युत्सृजामि च | अमृतं चैव मृत्युश्च सदसच्चाहमर्जुन || 9-19",
        meaning: "I give heat, and I withhold and send forth the rain. I am immortality, and I am also death personified. Both spirit and matter are in Me.",
        question: "What six cosmic functions does Krishna perform?",
        answer: "1) Gives heat, 2) Withholds rain, 3) Sends rain, 4) Is immortality, 5) Is death, 6) Contains spirit and matter.",
        concept: "Verse 9.19 - Krishna's Cosmic Functions"
    },
    { 
        shloka: "त्रैविद्या मां सोमपाः पूतपापा यज्ञैरिष्ट्वा स्वर्गतिं प्रार्थयन्ते | ते पुण्यमासाद्य सुरेन्द्रलोकमश्नन्ति दिव्यान्दिवि देवभोगान् || 9-20",
        meaning: "Those who study the Vedas and drink the soma juice, seeking the heavenly planets, worship Me indirectly. They take birth on the planet of Indra, where they enjoy godly delights.",
        question: "What is the result of Vedic ritualistic worship?",
        answer: "Birth in Indra's heaven with divine pleasures, achieved through Vedic study and soma ritual worship.",
        concept: "Verse 9.20 - Result of Vedic Ritual Worship"
    },
    { 
        shloka: "ते तं भुक्त्वा स्वर्गलोकं विशालं क्षीणे पुण्ये मर्त्यलोकं विशन्ति | एवं त्रयीधर्ममनुप्रपन्ना गतागतं कामकामा लभन्ते || 9-21",
        meaning: "When they have thus enjoyed vast heavenly sense pleasure and the results of their pious activities are exhausted, they return to this mortal planet again. Thus those who seek sense enjoyment by adhering to the principles of the three Vedas achieve only repeated birth and death.",
        question: "What happens after heavenly enjoyment ends?",
        answer: "They return to mortal world when pious merits exhaust, thus undergoing repeated birth and death.",
        concept: "Verse 9.21 - Return from Heavenly Planets"
    },
    { 
        shloka: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते | तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् || 9-22",
        meaning: "But those who always worship Me with exclusive devotion, meditating on My transcendental form—to them I carry what they lack, and I preserve what they have.",
        question: "What does Krishna do for His exclusive devotees?",
        answer: "He provides what they lack and protects what they have - ensuring both acquisition and preservation.",
        concept: "Verse 9.22 - Krishna's Protection of Devotees"
    },
    { 
        shloka: "येऽप्यन्यदेवता भक्ता यजन्ते श्रद्धयान्विताः | तेऽपि मामेव कौन्तेय यजन्त्यविधिपूर्वकम् || 9-23",
        meaning: "Those who are devotees of other gods and who worship them with faith actually worship only Me, O son of Kunti, but they do so in a wrong way.",
        question: "What is Krishna's view of worship offered to other gods?",
        answer: "Such worship actually reaches Krishna, but it is irregular and not according to proper procedure.",
        concept: "Verse 9.23 - All Worship Reaches Krishna"
    },
    { 
        shloka: "अहं हि सर्वयज्ञानां भोक्ता च प्रभुरेव च | न तु मामभिजानन्ति तत्त्वेनातश्च्यवन्ति ते || 9-24",
        meaning: "I am the only enjoyer and master of all sacrifices. Therefore, those who do not recognize My true transcendental nature fall down.",
        question: "Why do worshippers of other gods fall down?",
        answer: "Because they don't recognize Krishna as the true enjoyer and master of all sacrifices.",
        concept: "Verse 9.24 - Reason for Spiritual Fall"
    },
    { 
        shloka: "यान्ति देवव्रता देवान्पितॄन्यान्ति पितृव्रताः | भूतानि यान्ति भूतेज्या यान्ति मद्याजिनोऽपि माम् || 9-25",
        meaning: "Those who worship the demigods will take birth among the demigods; those who worship the ancestors go to the ancestors; those who worship ghosts and spirits will take birth among such beings; and those who worship Me will live with Me.",
        question: "What are the different destinations based on worship?",
        answer: "Demigod worshippers → demigods; Ancestor worshippers → ancestors; Ghost worshippers → ghosts; Krishna worshippers → Krishna.",
        concept: "Verse 9.25 - Destination Based on Worship"
    },
    { 
        shloka: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति | तदहं भक्त्युपहृतमश्नामि प्रयतात्मनः || 9-26",
        meaning: "If one offers Me with love and devotion a leaf, a flower, fruit or water, I will accept it.",
        question: "What simple offerings does Krishna accept?",
        answer: "A leaf, flower, fruit, or water - when offered with love and devotion by a pure-hearted person.",
        concept: "Verse 9.26 - Simple Offerings Accepted"
    },
    { 
        shloka: "यत्करोषि यदश्नासि यज्जुहोषि ददासि यत् | यत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम् || 9-27",
        meaning: "Whatever you do, whatever you eat, whatever you offer or give away, and whatever austerities you perform—do that, O son of Kunti, as an offering to Me.",
        question: "How should all activities be performed?",
        answer: "Everything - work, eating, offering, charity, austerity - should be done as an offering to Krishna.",
        concept: "Verse 9.27 - All Activities as Offerings"
    },
    { 
        shloka: "शुभाशुभफलैरेवं मोक्ष्यसे कर्मबन्धनैः | संन्यासयोगयुक्तात्मा विमुक्तो मामुपैष्यसि || 9-28",
        meaning: "In this way you will be freed from bondage to work and its auspicious and inauspicious results. With your mind fixed on Me in this principle of renunciation, you will be liberated and come to Me.",
        question: "What freedom comes from offering everything to Krishna?",
        answer: "Freedom from karmic bondage of good/bad results, leading to liberation and attainment of Krishna.",
        concept: "Verse 9.28 - Freedom Through Offering Everything"
    },
    { 
        shloka: "समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रियः | ये भजन्ति तु मां भक्त्या मयि ते तेषु चाप्यहम् || 9-29",
        meaning: "I am equally disposed to all living entities; I am neither inimical nor partial to anyone. But those who worship Me with devotion are in Me, and I am also in them.",
        question: "What is Krishna's equal disposition and special relationship with devotees?",
        answer: "Equal to all beings, but devotees reside in Krishna and Krishna resides in them reciprocally.",
        concept: "Verse 9.29 - Equal Yet Reciprocal with Devotees"
    },
    { 
        shloka: "अपि चेत्सुदुराचारो भजते मामनन्यभाक् | साधुरेव स मन्तव्यः सम्यग्व्यवसितो हि सः || 9-30",
        meaning: "Even if one commits the most abominable action, if he is engaged in devotional service he is to be considered saintly because he is properly situated in his determination.",
        question: "How should a devotee be regarded even if previously sinful?",
        answer: "As saintly, because proper determination in devotion rectifies all previous misdeeds.",
        concept: "Verse 9.30 - Devotional Service Purifies"
    },
    { 
        shloka: "क्षिप्रं भवति धर्मात्मा शश्वच्छान्तिं निगच्छति | कौन्तेय प्रतिजानीहि न मे भक्तः प्रणश्यति || 9-31",
        meaning: "He quickly becomes righteous and attains lasting peace. O son of Kunti, declare it boldly that My devotee never perishes.",
        question: "What transformation happens to a devotee?",
        answer: "They quickly become righteous, attain eternal peace, and never perish.",
        concept: "Verse 9.31 - Transformation of Devotee"
    },
    { 
        shloka: "मां हि पार्थ व्यपाश्रित्य येऽपि स्युः पापयोनयः | स्त्रियो वैश्यास्तथा शूद्रास्तेऽपि यान्ति परां गतिम् || 9-32",
        meaning: "O son of Pritha, those who take shelter in Me, though they be of lower birth—women, vaishyas [merchants], and shudras [workers]—can attain the supreme destination.",
        question: "Who can attain the supreme destination through taking shelter of Krishna?",
        answer: "Everyone - including women, merchants, workers, and those of lower birth - all can attain supreme perfection.",
        concept: "Verse 9.32 - Universal Eligibility for Perfection"
    },
    { 
        shloka: "किं पुनर्ब्राह्मणाः पुण्या भक्ता राजर्षयस्तथा | अनित्यमसुखं लोकमिमं प्राप्य भजस्व माम् || 9-33",
        meaning: "How much more this is so of the righteous brahmanas, the devotees and the saintly kings. Therefore, having come to this temporary, miserable world, engage in loving service unto Me.",
        question: "What is the instruction for all who come to this material world?",
        answer: "Since this world is temporary and miserable, everyone should engage in loving service to Krishna.",
        concept: "Verse 9.33 - Universal Call to Devotional Service"
    },
    { 
        shloka: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु | मामेवैष्यसि युक्त्वैवमात्मानं मत्परायणः || 9-34",
        meaning: "Engage your mind always in thinking of Me, become My devotee, offer obeisances to Me and worship Me. Being completely absorbed in Me, surely you will come to Me.",
        question: "What four practices guarantee attainment of Krishna?",
        answer: "1) Mind fixed on Krishna, 2) Become His devotee, 3) Offer obeisances, 4) Worship Him - with complete absorption.",
        concept: "Verse 9.34 - Four Practices for Attaining Krishna"
    }
];