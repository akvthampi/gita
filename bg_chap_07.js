// --- bg_chap_07.js ---
const chapterMetadata = {
    title: "Chapter 7: The Yoga of Knowledge and Realization",
    info: "Jnana Vijnana Yoga - Yoga of Knowledge and Realization (30 verses)"
};
const flashcards = [
    { 
        shloka: "श्रीभगवानुवाच | मय्यासक्तमनाः पार्थ योगं युञ्जन्मदाश्रयः | असंशयं समग्रं मां यथा ज्ञास्यसि तच्छृणु || 7-1",
        meaning: "The Supreme Lord said: Now hear, O son of Pritha, how by practicing yoga in full consciousness of Me, with mind attached to Me, you can know Me in full, free from doubt.",
        question: "What three conditions does Krishna give for knowing Him completely?",
        answer: "1) Practicing yoga with consciousness of Krishna, 2) Mind attached to Krishna, 3) Taking shelter of Krishna.",
        concept: "Verse 7.1 - Conditions for Knowing Krishna"
    },
    { 
        shloka: "ज्ञानं तेऽहं सविज्ञानमिदं वक्ष्याम्यशेषतः | यज्ज्ञात्वा नेह भूयोऽन्यज्ज्ञातव्यमवशिष्यते || 7-2",
        meaning: "I shall now declare to you in full this knowledge, both phenomenal and noumenal, by knowing which there shall remain nothing further to be known.",
        question: "What comprehensive knowledge does Krishna promise to reveal?",
        answer: "Both phenomenal (vijnana) and noumenal (jnana) knowledge that leaves nothing else to be known.",
        concept: "Verse 7.2 - Complete Knowledge"
    },
    { 
        shloka: "मनुष्याणां सहस्रेषु कश्चिद्यतति सिद्धये | यततामपि सिद्धानां कश्चिन्मां वेत्ति तत्त्वतः || 7-3",
        meaning: "Out of many thousands among men, one may endeavor for perfection, and of those who have achieved perfection, hardly one knows Me in truth.",
        question: "How rare is true knowledge of Krishna according to this verse?",
        answer: "Among thousands of men, few strive for perfection, and among perfected souls, hardly one knows Krishna truly.",
        concept: "Verse 7.3 - Rarity of True Knowledge"
    },
    { 
        shloka: "भूमिरापोऽनलो वायुः खं मनो बुद्धिरेव च | अहंकार इतीयं मे भिन्ना प्रकृतिरष्टधा || 7-4",
        meaning: "Earth, water, fire, air, ether, mind, intelligence and false ego—all together these eight constitute My separated material energies.",
        question: "What are the eight separated material energies of Krishna?",
        answer: "Earth, water, fire, air, ether, mind, intelligence, and false ego - eightfold material nature.",
        concept: "Verse 7.4 - Eightfold Material Energy"
    },
    { 
        shloka: "अपरेयमितस्त्वन्यां प्रकृतिं विद्धि मे पराम् | जीवभूतां महाबाहो ययेदं धार्यते जगत् || 7-5",
        meaning: "Besides these, O mighty-armed Arjuna, there is another, superior energy of Mine, which comprises the living entities who are exploiting the resources of this material, inferior nature.",
        question: "What is Krishna's superior energy?",
        answer: "The living entities (jiva-bhuta) who exploit the material nature constitute Krishna's superior energy.",
        concept: "Verse 7.5 - Superior Spiritual Energy"
    },
    { 
        shloka: "एतद्योनीनि भूतानि सर्वाणीत्युपधारय | अहं कृत्स्नस्य जगतः प्रभवः प्रलयस्तथा || 7-6",
        meaning: "All created beings have their source in these two natures. Of all that is material and all that is spiritual in this world, know for certain that I am both the origin and the dissolution.",
        question: "What is Krishna's relationship to both material and spiritual energies?",
        answer: "Krishna is both the origin and dissolution of all material and spiritual energies.",
        concept: "Verse 7.6 - Origin and Dissolution"
    },
    { 
        shloka: "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय | मयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव || 7-7",
        meaning: "O conqueror of wealth, there is no truth superior to Me. Everything rests upon Me, as pearls are strung on a thread.",
        question: "What analogy describes how everything depends on Krishna?",
        answer: "Like pearls strung on a thread - everything in existence rests upon and is connected to Krishna.",
        concept: "Verse 7.7 - Everything Rests on Krishna"
    },
    { 
        shloka: "रसोऽहमप्सु कौन्तेय प्रभास्मि शशिसूर्ययोः | प्रणवः सर्ववेदेषु शब्दः खे पौरुषं नृषु || 7-8",
        meaning: "O son of Kunti, I am the taste of water, the light of the sun and the moon, the syllable om in the Vedic mantras; I am the sound in ether and ability in man.",
        question: "What five manifestations of Krishna are mentioned?",
        answer: "1) Taste in water, 2) Light in sun/moon, 3) Om in Vedas, 4) Sound in ether, 5) Ability in humans.",
        concept: "Verse 7.8 - Krishna's Immanent Manifestations"
    },
    { 
        shloka: "पुण्यो गन्धः पृथिव्यां च तेजश्चास्मि विभावसौ | जीवनं सर्वभूतेषु तपश्चास्मि तपस्विषु || 7-9",
        meaning: "I am the original fragrance of the earth, and I am the heat in fire. I am the life of all that lives, and I am the penances of all ascetics.",
        question: "What four aspects of nature does Krishna identify with?",
        answer: "1) Fragrance in earth, 2) Heat in fire, 3) Life in beings, 4) Penance in ascetics.",
        concept: "Verse 7.9 - Further Immanent Manifestations"
    },
    { 
        shloka: "बीजं मां सर्वभूतानां विद्धि पार्थ सनातनम् | बुद्धिर्बुद्धिमतामस्मि तेजस्तेजस्विनामहम् || 7-10",
        meaning: "O son of Pritha, know that I am the original seed of all existences, the intelligence of the intelligent, and the prowess of all powerful men.",
        question: "What three roles does Krishna play?",
        answer: "1) Original seed of all beings, 2) Intelligence of the intelligent, 3) Prowess of the powerful.",
        concept: "Verse 7.10 - Krishna as Source and Essence"
    },
    { 
        shloka: "बलं बलवतां चाहं कामरागविवर्जितम् | धर्माविरुद्धो भूतेषु कामोऽस्मि भरतर्षभ || 7-11",
        meaning: "I am the strength of the strong, devoid of passion and desire. I am sex life which is not contrary to religious principles, O lord of the Bharatas.",
        question: "What kind of strength and desire does Krishna represent?",
        answer: "Strength without passion/desire, and desire that conforms to religious principles.",
        concept: "Verse 7.11 - Regulated Strength and Desire"
    },
    { 
        shloka: "ये चैव सात्त्विका भावा राजसास्तामसाश्च ये | मत्त एवेति तान्विद्धि न त्वहं तेषु ते मयि || 7-12",
        meaning: "Know that all states of being—be they of goodness, passion or ignorance—are manifested by My energy. I am, in one sense, everything, but I am independent. I am not under the modes of material nature, for they, on the contrary, are within Me.",
        question: "What is Krishna's relationship to the three modes of nature?",
        answer: "The modes manifest from Krishna's energy, but He remains independent and unaffected by them.",
        concept: "Verse 7.12 - Beyond the Modes of Nature"
    },
    { 
        shloka: "त्रिभिर्गुणमयैर्भावैरेभिः सर्वमिदं जगत् | मोहितं नाभिजानाति मामेभ्यः परमव्ययम् || 7-13",
        meaning: "Deluded by the three modes [goodness, passion and ignorance], the whole world does not know Me, who am above the modes and inexhaustible.",
        question: "Why doesn't the world know Krishna?",
        answer: "Because people are deluded by the three modes of nature and cannot perceive Krishna who is beyond them.",
        concept: "Verse 7.13 - Delusion by Material Modes"
    },
    { 
        shloka: "दैवी ह्येषा गुणमयी मम माया दुरत्यया | मामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते || 7-14",
        meaning: "This divine energy of Mine, consisting of the three modes of material nature, is difficult to overcome. But those who have surrendered unto Me can easily cross beyond it.",
        question: "How can one overcome the divine energy of material nature?",
        answer: "By surrendering to Krishna, one can easily cross beyond the difficult-to-overcome material energy.",
        concept: "Verse 7.14 - Overcoming Material Energy"
    },
    { 
        shloka: "न मां दुष्कृतिनो मूढाः प्रपद्यन्ते नराधमाः | माययापहृतज्ञाना आसुरं भावमाश्रिताः || 7-15",
        meaning: "Those miscreants who are grossly foolish, lowest among mankind, whose knowledge is stolen by illusion, and who partake of the atheistic nature of demons, do not surrender unto Me.",
        question: "What four characteristics prevent surrender to Krishna?",
        answer: "1) Gross foolishness, 2) Lowest among humans, 3) Knowledge stolen by illusion, 4) Demonic nature.",
        concept: "Verse 7.15 - Those Who Don't Surrender"
    },
    { 
        shloka: "चतुर्विधा भजन्ते मां जनाः सुकृतिनोऽर्जुन | आर्तो जिज्ञासुरर्थार्थी ज्ञानी च भरतर्षभ || 7-16",
        meaning: "O best among the Bharatas, four kinds of pious men begin to render devotional service unto Me—the distressed, the desirer of wealth, the inquisitive, and he who is searching for knowledge of the Absolute.",
        question: "What four types of people approach Krishna?",
        answer: "1) The distressed, 2) The seeker of wealth, 3) The inquisitive, 4) The seeker of knowledge.",
        concept: "Verse 7.16 - Four Types of Devotees"
    },
    { 
        shloka: "तेषां ज्ञानी नित्ययुक्त एकभक्तिर्विशिष्यते | प्रियो हि ज्ञानिनोऽत्यर्थमहं स च मम प्रियः || 7-17",
        meaning: "Of these, the one who is in full knowledge and who is always engaged in pure devotional service is the best. For I am very dear to him, and he is dear to Me.",
        question: "Who is the best among the four types of devotees?",
        answer: "The wise devotee engaged in constant pure devotion is best, being very dear to Krishna and Krishna to him.",
        concept: "Verse 7.17 - The Best Devotee"
    },
    { 
        shloka: "उदाराः सर्व एवैते ज्ञानी त्वात्मैव मे मतम् | आस्थितः स हि युक्तात्मा मामेवानुत्तमां गतिम् || 7-18",
        meaning: "All these devotees are undoubtedly magnanimous souls, but he who is situated in knowledge of Me I consider to be just like My own self. Being engaged in My transcendental service, he is sure to attain Me, the highest and most perfect goal.",
        question: "How does Krishna regard the wise devotee?",
        answer: "As being like His own self, engaged in His service and destined to attain the supreme perfection.",
        concept: "Verse 7.18 - The Wise Devotee as Krishna's Self"
    },
    { 
        shloka: "बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते | वासुदेवः सर्वमिति स महात्मा सुदुर्लभः || 7-19",
        meaning: "After many births and deaths, he who is actually in knowledge surrenders unto Me, knowing Me to be the cause of all causes and all that is. Such a great soul is very rare.",
        question: "When does a soul surrender to Krishna completely?",
        answer: "After many births, when true knowledge dawns and one understands Krishna as the cause of all causes.",
        concept: "Verse 7.19 - Ultimate Surrender After Many Births"
    },
    { 
        shloka: "कामैस्तैस्तैर्हृतज्ञानाः प्रपद्यन्तेऽन्यदेवताः | तं तं नियममास्थाय प्रकृत्या नियताः स्वया || 7-20",
        meaning: "Those whose intelligence has been stolen by material desires surrender unto demigods and follow the particular rules and regulations of worship according to their own natures.",
        question: "Why do people worship demigods instead of Krishna?",
        answer: "Because their intelligence is stolen by material desires, they worship demigods according to their natures.",
        concept: "Verse 7.20 - Worship of Demigods"
    },
    { 
        shloka: "यो यो यां यां तनुं भक्तः श्रद्धयार्चितुमिच्छति | तस्य तस्याचलां श्रद्धां तामेव विदधाम्यहम् || 7-21",
        meaning: "I am in everyone's heart as the Supersoul. As soon as one desires to worship some demigod, I make his faith steady so that he can devote himself to that particular deity.",
        question: "How does Krishna respond to different forms of worship?",
        answer: "Krishna stabilizes the faith of worshippers according to their chosen deity, being present in all hearts.",
        concept: "Verse 7.21 - Krishna's Role in All Worship"
    },
    { 
        shloka: "स तया श्रद्धया युक्तस्तस्याराधनमीहते | लभते च ततः कामान्मयैव विहितान्हि तान् || 7-22",
        meaning: "Endowed with such a faith, he seeks favors of a particular demigod and obtains his desires. But in actuality these benefits are bestowed by Me alone.",
        question: "Who actually grants the boons received from demigod worship?",
        answer: "Although worshipped through demigods, all boons are actually granted by Krishna alone.",
        concept: "Verse 7.22 - Actual Source of All Boons"
    },
    { 
        shloka: "अन्तवत्तु फलं तेषां तद्भवत्यल्पमेधसाम् | देवान्देवयजो यान्ति मद्भक्ता यान्ति मामपि || 7-23",
        meaning: "Men of small intelligence worship the demigods, and their fruits are limited and temporary. Those who worship the demigods go to the planets of the demigods, but My devotees ultimately reach My supreme planet.",
        question: "What is the difference between demigod worship and Krishna worship?",
        answer: "Demigod worship gives temporary results and planetary destinations, while Krishna worship gives eternal residence with Him.",
        concept: "Verse 7.23 - Temporary vs Eternal Results"
    },
    { 
        shloka: "अव्यक्तं व्यक्तिमापन्नं मन्यन्ते मामबुद्धयः | परं भावमजानन्तो ममाव्ययमनुत्तमम् || 7-24",
        meaning: "Unintelligent men, who do not know Me perfectly, think that I, the Supreme Personality of Godhead, Krishna, was impersonal before and have now assumed this personality. Due to their small knowledge, they do not know My higher nature, which is imperishable and supreme.",
        question: "What mistaken notion do unintelligent people have about Krishna?",
        answer: "They think Krishna was originally impersonal and later assumed personality, not knowing His eternal personal nature.",
        concept: "Verse 7.24 - Misconception About Krishna's Form"
    },
    { 
        shloka: "नाहं प्रकाशः सर्वस्य योगमायासमावृतः | मूढोऽयं नाभिजानाति लोको मामजमव्ययम् || 7-25",
        meaning: "I am never manifest to the foolish and unintelligent. For them I am covered by My internal potency, and therefore they do not know that I am unborn and infallible.",
        question: "Why don't foolish people recognize Krishna?",
        answer: "Because Krishna covers Himself with His internal potency (yoga-maya), remaining unmanifest to the foolish.",
        concept: "Verse 7.25 - Covered by Internal Potency"
    },
    { 
        shloka: "वेदाहं समतीतानि वर्तमानानि चार्जुन | भविष्याणि च भूतानि मां तु वेद न कश्चन || 7-26",
        meaning: "O Arjuna, as the Supreme Personality of Godhead, I know everything that has happened in the past, all that is happening in the present, and all things that are yet to come. I also know all living entities; but Me no one knows.",
        question: "What is the contrast between Krishna's knowledge and others' knowledge?",
        answer: "Krishna knows all past, present, future, and all beings, but no one knows Him completely.",
        concept: "Verse 7.26 - Krishna's Omniscience"
    },
    { 
        shloka: "इच्छाद्वेषसमुत्थेन द्वन्द्वमोहेन भारत | सर्वभूतानि संमोहं सर्गे यान्ति परन्तप || 7-27",
        meaning: "O scion of Bharata, O conqueror of the foe, all living entities are born into delusion, overcome by the dualities of desire and hate.",
        question: "What is the natural condition of all living entities?",
        answer: "All beings are born into delusion, overcome by the dualities of desire and hatred.",
        concept: "Verse 7.27 - Natural Delusion of Beings"
    },
    { 
        shloka: "येषां त्वन्तगतं पापं जनानां पुण्यकर्मणाम् | ते द्वन्द्वमोहनिर्मुक्ता भजन्ते मां दृढव्रताः || 7-28",
        meaning: "Persons who have acted piously in previous lives and in this life, whose sinful actions are completely eradicated, and who are freed from the duality of delusion, engage themselves in My service with determination.",
        question: "Who engages in determined service to Krishna?",
        answer: "Those with pious backgrounds, eradicated sins, and freedom from dualistic delusion serve Krishna determinedly.",
        concept: "Verse 7.28 - Qualified Servitors"
    },
    { 
        shloka: "जरामरणमोक्षाय मामाश्रित्य यतन्ति ये | ते ब्रह्म तद्विदुः कृत्स्नमध्यात्मं कर्म चाखिलम् || 7-29",
        meaning: "Intelligent persons who are endeavoring for liberation from old age and death take refuge in Me in devotional service. They are actually Brahman because they entirely know everything about transcendental and fruitive activities.",
        question: "What do intelligent seekers understand by taking refuge in Krishna?",
        answer: "They understand Brahman, the soul, and all activities completely by taking devotional shelter of Krishna.",
        concept: "Verse 7.29 - Intelligent Seekers of Liberation"
    },
    { 
        shloka: "साधिभूताधिदैवं मां साधियज्ञं च ये विदुः | प्रयाणकालेऽपि च मां ते विदुर्युक्तचेतसः || 7-30",
        meaning: "Those who know Me as the Supreme Lord, as the governing principle of the material manifestation, who know Me as the one underlying all the demigods and as the one sustaining all sacrifices, can, with steadfast mind, understand and know Me even at the time of death.",
        question: "What comprehensive understanding enables one to remember Krishna at death?",
        answer: "Knowing Krishna as the Supreme controlling: 1) Material manifestation, 2) Demigods, 3) All sacrifices.",
        concept: "Verse 7.30 - Comprehensive Knowledge for Death"
    }
];