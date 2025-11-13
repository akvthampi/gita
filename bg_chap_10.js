// --- bg_chap_10.js ---
const chapterMetadata = {
    title: "Chapter 10: The Yoga of Divine Glories",
    info: "Vibhuti Yoga - Yoga of Divine Glories and Manifestations"
};
const flashcards = [
    { 
        shloka: "श्रीभगवानुवाच | भूय एव महाबाहो शृणु मे परमं वचः | यत्तेऽहं प्रीयमाणाय वक्ष्यामि हितकाम्यया || 10-1",
        meaning: "The Supreme Lord said: Listen again, O mighty-armed Arjuna. Because you are My dear friend, for your benefit I shall speak to you further, giving knowledge that is better than what I have already explained.",
        question: "Why is Krishna speaking further knowledge to Arjuna?",
        answer: "Because Arjuna is His dear friend and for his benefit, Krishna shares this superior knowledge.",
        concept: "Verse 10.1 - Speaking for the Friend's Benefit"
    },
    { 
        shloka: "न मे विदुः सुरगणाः प्रभवं न महर्षयः | अहमादिर्हि देवानां महर्षीणां च सर्वशः || 10-2",
        meaning: "Neither the hosts of demigods nor the great sages know My origin, for, in every respect, I am the source of the demigods and sages.",
        question: "Who can know Krishna's origin?",
        answer: "Neither demigods nor great sages know His origin, as He is the source of all of them.",
        concept: "Verse 10.2 - Unknowable Origin"
    },
    { 
        shloka: "यो मामजमनादिं च वेत्ति लोकमहेश्वरम् | असम्मूढः स मर्त्येषु सर्वपापैः प्रमुच्यते || 10-3",
        meaning: "He who knows Me as the unborn, as the beginningless, as the Supreme Lord of all the worlds—he, undeluded among men, is freed from all sins.",
        question: "What knowledge liberates one from all sins?",
        answer: "Knowing Krishna as unborn, beginningless, and Supreme Lord of all worlds liberates from all sins.",
        concept: "Verse 10.3 - Liberating Knowledge"
    },
    { 
        shloka: "बुद्धिर्ज्ञानमसम्मोहः क्षमा सत्यं दमः शमः | सुखं दुःखं भवोऽभावो भयं चाभयमेव च || 10-4",
        meaning: "Intelligence, knowledge, freedom from doubt, forgiveness, truthfulness, control of the senses, tranquility, happiness, distress, birth, death, fear, and fearlessness...",
        question: "What qualities does Krishna mention as His manifestations?",
        answer: "Intelligence, knowledge, non-delusion, forgiveness, truth, sense control, peace, happiness, distress, birth, death, fear, fearlessness.",
        concept: "Verse 10.4 - Divine Qualities as Manifestations"
    },
    { 
        shloka: "अहिंसा समता तुष्टिस्तपो दानं यशोऽयशः | भवन्ति भावा भूतानां मत्त एव पृथग्विधाः || 10-5",
        meaning: "Nonviolence, equanimity, contentment, austerity, charity, fame, and infamy—all these various qualities of living beings are created by Me alone.",
        question: "What additional qualities does Krishna create?",
        answer: "Nonviolence, equanimity, contentment, austerity, charity, fame, and infamy - all come from Him.",
        concept: "Verse 10.5 - All Qualities from Krishna"
    },
    { 
        shloka: "महर्षयः सप्त पूर्वे चत्वारो मनवस्तथा | मद्भावा मानसा जाता येषां लोक इमाः प्रजाः || 10-6",
        meaning: "The seven great sages and before them the four other great sages and the Manus [progenitors of mankind] come from Me, born from My mind, and all the living beings populating the various planets descend from them.",
        question: "Who are the original progenitors created by Krishna?",
        answer: "The seven great sages, four prior sages, and Manus - all born from Krishna's mind.",
        concept: "Verse 10.6 - Original Progenitors"
    },
    { 
        shloka: "एतां विभूतिं योगं च मम यो वेत्ति तत्त्वतः | सोऽविकम्पेन योगेन युज्यते नात्र संशयः || 10-7",
        meaning: "He who knows in truth this glory and power of Mine engages in pure devotional service. Of this there is no doubt.",
        question: "What is the result of truly knowing Krishna's glories?",
        answer: "One engages in unshakable pure devotional service without doubt.",
        concept: "Verse 10.7 - Result of Knowing Divine Glories"
    },
    { 
        shloka: "अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते | इति मत्वा भजन्ते मां बुधा भावसमन्विताः || 10-8",
        meaning: "I am the source of all spiritual and material worlds. Everything emanates from Me. The wise who know this perfectly engage in My devotional service and worship Me with all their hearts.",
        question: "How do the wise respond to knowing Krishna as the source?",
        answer: "They engage in loving devotional service with full consciousness.",
        concept: "Verse 10.8 - Response of the Wise"
    },
    { 
        shloka: "मच्चित्ता मद्गतप्राणा बोधयन्तः परस्परम् | कथयन्तश्च मां नित्यं तुष्यन्ति च रमन्ति च || 10-9",
        meaning: "The thoughts of My pure devotees dwell in Me, their lives are surrendered to Me, and they derive great satisfaction and bliss enlightening one another and conversing about Me.",
        question: "What characterizes pure devotees?",
        answer: "Minds fixed on Krishna, lives surrendered, discussing and enlightening about Him with satisfaction.",
        concept: "Verse 10.9 - Characteristics of Pure Devotees"
    },
    { 
        shloka: "तेषां सततयुक्तानां भजतां प्रीतिपूर्वकम् | ददामि बुद्धियोगं तं येन मामुपयान्ति ते || 10-10",
        meaning: "To those who are constantly devoted and worship Me with love, I give the understanding by which they can come to Me.",
        question: "What does Krishna give to His loving devotees?",
        answer: "He gives spiritual intelligence by which they can attain Him.",
        concept: "Verse 10.10 - Gift of Spiritual Intelligence"
    },
    { 
        shloka: "तेषामेवानुकम्पार्थमहमज्ञानजं तमः | नाशयाम्यात्मभावस्थो ज्ञानदीपेन भास्वता || 10-11",
        meaning: "Out of compassion for them, I, dwelling in their hearts, destroy with the shining lamp of knowledge the darkness born of ignorance.",
        question: "How does Krishna help His devotees from within?",
        answer: "He destroys ignorance's darkness with the lamp of knowledge from within their hearts.",
        concept: "Verse 10.11 - Inner Guidance"
    },
    { 
        shloka: "अर्जुन उवाच | परं ब्रह्म परं धाम पवित्रं परमं भवान् | पुरुषं शाश्वतं दिव्यमादिदेवमजं विभुम् || 10-12",
        meaning: "Arjuna said: You are the Supreme Brahman, the ultimate, the supreme abode and purifier, the Absolute Truth and the eternal divine person. You are the primal God, transcendental and original, and You are the unborn and all-pervading beauty.",
        question: "How does Arjuna glorify Krishna?",
        answer: "As Supreme Brahman, ultimate abode, purifier, Absolute Truth, eternal divine person, primal God, unborn, all-pervading.",
        concept: "Verse 10.12 - Arjuna's Glorification"
    },
    { 
        shloka: "आहुस्त्वामृषयः सर्वे देवर्षिर्नारदस्तथा | असितो देवलो व्यासः स्वयं चैव ब्रवीषि मे || 10-13",
        meaning: "All the great sages like Narada, Asita, Devala, and Vyasa proclaim this of You, and now You Yourself are declaring it to me.",
        question: "Who has confirmed Krishna's supreme position?",
        answer: "All great sages - Narada, Asita, Devala, Vyasa - and now Krishna Himself.",
        concept: "Verse 10.13 - Confirmation by Authorities"
    },
    { 
        shloka: "सर्वमेतदृतं मन्ये यन्मां वदसि केशव | न हि ते भगवन्व्यक्तिं विदुर्देवा न दानवाः || 10-14",
        meaning: "O Krishna, I totally accept as truth all that You have told me. Neither the gods nor demons, O Lord, know Thy personality.",
        question: "What does Arjuna accept about Krishna's statements?",
        answer: "He accepts everything as truth, acknowledging that neither gods nor demons know Krishna's personality.",
        concept: "Verse 10.14 - Total Acceptance"
    },
    { 
        shloka: "स्वयमेवात्मनात्मानं वेत्थ त्वं पुरुषोत्तम | भूतभावन भूतेश देवदेव जगत्पते || 10-15",
        meaning: "Indeed, You alone know Yourself by Your own potencies, O Supreme Person, origin of all, Lord of all beings, God of gods, O Supreme Lord of the universe!",
        question: "Who can truly know Krishna?",
        answer: "Only Krishna Himself can know Himself through His own potencies.",
        concept: "Verse 10.15 - Self-Knowledge of the Supreme"
    },
    { 
        shloka: "वक्तुमर्हस्यशेषेण दिव्या ह्यात्मविभूतयः | याभिर्विभूतिभिर्लोकानिमांस्त्वं व्याप्य तिष्ठसि || 10-16",
        meaning: "Please tell me in detail of Your divine glories by which You pervade all these worlds and abide in them.",
        question: "What does Arjuna request from Krishna?",
        answer: "To describe His divine glories by which He pervades and maintains all worlds.",
        concept: "Verse 10.16 - Request for Divine Glories"
    },
    { 
        shloka: "कथं विद्यामहं योगिंस्त्वां सदा परिचिन्तयन् | केषु केषु च भावेषु चिन्त्योऽसि भगवन्मया || 10-17",
        meaning: "O Krishna, O supreme mystic, how shall I constantly think of You, and how shall I know You? In what various forms are You to be remembered by me?",
        question: "What does Arjuna ask about meditation?",
        answer: "How to constantly think of Krishna, know Him, and what forms to meditate upon.",
        concept: "Verse 10.17 - Inquiry About Meditation"
    },
    { 
        shloka: "विस्तरेणात्मनो योगं विभूतिं च जनार्दन | भूयः कथय तृप्तिर्हि शृण्वतो नास्ति मेऽमृतम् || 10-18",
        meaning: "O Janardana, please again describe in detail the potencies of Your opulences. I am never satiated in hearing about You, for the more I hear the more I want to taste the nectar of Your words.",
        question: "Why does Arjuna want to hear more?",
        answer: "He's never satisfied hearing about Krishna's glories - it's like eternal nectar.",
        concept: "Verse 10.18 - Insatiable Desire for Hearing"
    },
    { 
        shloka: "श्रीभगवानुवाच | हन्त ते कथयिष्यामि दिव्या ह्यात्मविभूतयः | प्राधान्यतः कुरुश्रेष्ठ नास्त्यन्तो विस्तरस्य मे || 10-19",
        meaning: "The Blessed Lord said: Yes, I will tell you of My splendorous manifestations, but only briefly, for My opulences are limitless.",
        question: "What will Krishna describe about His manifestations?",
        answer: "His splendorous manifestations briefly, since they are unlimited.",
        concept: "Verse 10.19 - Beginning of Divine Manifestations"
    },
    { 
        shloka: "अहमात्मा गुडाकेश सर्वभूताशयस्थितः | अहमादिश्च मध्यं च भूतानामन्त एव च || 10-20",
        meaning: "I am the Self, O Gudakesa, seated in the hearts of all creatures. I am the beginning, the middle and the end of all beings.",
        question: "What is Krishna's position in all beings?",
        answer: "As the Self in all hearts, and as the beginning, middle, and end of all beings.",
        concept: "Verse 10.20 - Krishna as Self and Time"
    },
    { 
        shloka: "आदित्यानामहं विष्णुर्ज्योतिषां रविरंशुमान् | मरीचिर्मरुतामस्मि नक्षत्राणामहं शशी || 10-21",
        meaning: "Of the Adityas I am Vishnu, of lights I am the radiant sun, of the Maruts I am Marici, and among the stars I am the moon.",
        question: "What are Krishna's manifestations among luminaries?",
        answer: "Vishnu among Adityas, sun among lights, Marici among Maruts, moon among stars.",
        concept: "Verse 10.21 - Manifestations as Luminaries"
    },
    { 
        shloka: "वेदानां सामवेदोऽस्मि देवानामस्मि वासवः | इन्द्रियाणां मनश्चास्मि भूतानामस्मि चेतना || 10-22",
        meaning: "Of the Vedas I am the Sama Veda; of the demigods I am Indra; of the senses I am the mind; and in living beings I am the consciousness.",
        question: "What are Krishna's manifestations in knowledge and consciousness?",
        answer: "Sama Veda among Vedas, Indra among gods, mind among senses, consciousness in beings.",
        concept: "Verse 10.22 - Knowledge and Consciousness Manifestations"
    },
    { 
        shloka: "रुद्राणां शङ्करश्चास्मि वित्तेशो यक्षरक्षसाम् | वसूनां पावकश्चास्मि मेरुः शिखरिणामहम् || 10-23",
        meaning: "Of the Rudras I am Lord Shiva; of the Yakshas and Rakshasas I am Kubera; of the Vasus I am fire; and of mountains I am Meru.",
        question: "What are Krishna's manifestations among various beings?",
        answer: "Shiva among Rudras, Kubera among Yakshas/Rakshasas, fire among Vasus, Meru among mountains.",
        concept: "Verse 10.23 - Various Divine Manifestations"
    },
    { 
        shloka: "पुरोधसां च मुख्यं मां विद्धि पार्थ बृहस्पतिम् | सेनानीनामहं स्कन्दः सरसामस्मि सागरः || 10-24",
        meaning: "Of priests, O Arjuna, know Me to be the chief, Brihaspati. Of generals I am Skanda; of bodies of water I am the ocean.",
        question: "What are Krishna's manifestations among leaders and waters?",
        answer: "Brihaspati among priests, Skanda among generals, ocean among waters.",
        concept: "Verse 10.24 - Leadership and Water Manifestations"
    },
    { 
        shloka: "महर्षीणां भृगुरहं गिरामस्म्येकमक्षरम् | यज्ञानां जपयज्ञोऽस्मि स्थावराणां हिमालयः || 10-25",
        meaning: "Of the great sages I am Bhrigu; of vibrations I am the transcendental Om; of sacrifices I am the chanting of the holy names; of immovable things I am the Himalayas.",
        question: "What are Krishna's manifestations among sages, sounds, and immovables?",
        answer: "Bhrigu among sages, Om among sounds, japa among sacrifices, Himalayas among immovables.",
        concept: "Verse 10.25 - Sage, Sound, and Mountain Manifestations"
    },
    { 
        shloka: "अश्वत्थः सर्ववृक्षाणां देवर्षीणां च नारदः | गन्धर्वाणां चित्ररथः सिद्धानां कपिलो मुनिः || 10-26",
        meaning: "Of all trees I am the banyan tree; of the divine sages I am Narada; of the Gandharvas I am Citraratha; among perfected beings I am the sage Kapila.",
        question: "What are Krishna's manifestations among trees and celestial beings?",
        answer: "Banyan among trees, Narada among divine sages, Citraratha among Gandharvas, Kapila among Siddhas.",
        concept: "Verse 10.26 - Tree and Celestial Manifestations"
    },
    { 
        shloka: "उच्चैःश्रवसमश्वानां विद्धि माममृतोद्भवम् | ऐरावतं गजेन्द्राणां नराणां च नराधिपम् || 10-27",
        meaning: "Of horses know Me to be Uccaihsrava, produced during the churning of the ocean for nectar. Of lordly elephants I am Airavata, and among men I am the monarch.",
        question: "What are Krishna's manifestations among animals and men?",
        answer: "Uccaihsrava among horses, Airavata among elephants, king among men.",
        concept: "Verse 10.27 - Animal and Human Manifestations"
    },
    { 
        shloka: "आयुधानामहं वज्रं धेनूनामस्मि कामधुक् | प्रजनश्चास्मि कन्दर्पः सर्पाणामस्मि वासुकिः || 10-28",
        meaning: "Of weapons I am the thunderbolt; among cows I am the surabhi; of causes for procreation I am Kandarpa; of serpents I am Vasuki.",
        question: "What are Krishna's manifestations among weapons and animals?",
        answer: "Thunderbolt among weapons, surabhi among cows, Kandarpa for procreation, Vasuki among serpents.",
        concept: "Verse 10.28 - Weapon and Procreation Manifestations"
    },
    { 
        shloka: "अनन्तश्चास्मि नागानां वरुणो यादसामहम् | पितॄणामर्यमा चास्मि यमः संयमतामहम् || 10-29",
        meaning: "Of the Nagas I am Ananta; of aquatic deities I am Varuna; of departed ancestors I am Aryama; among dispensers of law I am Yama.",
        question: "What are Krishna's manifestations among various controllers?",
        answer: "Ananta among Nagas, Varuna among aquatics, Aryama among ancestors, Yama among controllers.",
        concept: "Verse 10.29 - Controller Manifestations"
    },
    { 
        shloka: "प्रह्लादश्चास्मि दैत्यानां कालः कलयतामहम् | मृगाणां च मृगेन्द्रोऽहं वैनतेयश्च पक्षिणाम् || 10-30",
        meaning: "Among the Daitya demons I am the devoted Prahlada; among subduers I am time; among beasts I am the lion; and among birds I am Garuda.",
        question: "What are Krishna's manifestations among various beings?",
        answer: "Prahlada among demons, time among subduers, lion among beasts, Garuda among birds.",
        concept: "Verse 10.30 - Various Being Manifestations"
    },
    { 
        shloka: "पवनः पवतामस्मि रामः शस्त्रभृतामहम् | झषाणां मकरश्चास्मि स्रोतसामस्मि जाह्नवी || 10-31",
        meaning: "Of purifiers I am the wind; of the wielders of weapons I am Rama; among fishes I am the shark; of flowing rivers I am the Ganges.",
        question: "What are Krishna's manifestations among purifiers and waters?",
        answer: "Wind among purifiers, Rama among warriors, shark among fishes, Ganges among rivers.",
        concept: "Verse 10.31 - Purifier and Water Manifestations"
    },
    { 
        shloka: "सर्गाणामादिरन्तश्च मध्यं चैवाहमर्जुन | अध्यात्मविद्या विद्यानां वादः प्रवदतामहम् || 10-32",
        meaning: "Of all creations I am the beginning, the end and also the middle, O Arjuna. Of all sciences I am the spiritual science of the self, and among logicians I am the conclusive truth.",
        question: "What are Krishna's manifestations in creation and knowledge?",
        answer: "Beginning/middle/end of creation, spiritual science among sciences, conclusive truth among logicians.",
        concept: "Verse 10.32 - Creation and Knowledge Manifestations"
    },
    { 
        shloka: "अक्षराणामकारोऽस्मि द्वन्द्वः सामासिकस्य च | अहमेवाक्षयः कालो धाताहं विश्वतोमुखः || 10-33",
        meaning: "Of letters I am the letter A, and among compound words I am the dual compound. I am also inexhaustible time, and of creators I am Brahma.",
        question: "What are Krishna's manifestations in language and creation?",
        answer: "Letter A among letters, dual compound among compounds, inexhaustible time, Brahma among creators.",
        concept: "Verse 10.33 - Language and Time Manifestations"
    },
    { 
        shloka: "मृत्युः सर्वहरश्चाहमुद्भवश्च भविष्यताम् | कीर्तिः श्रीर्वाक्च नारीणां स्मृतिर्मेधा धृतिः क्षमा || 10-34",
        meaning: "I am all-devouring death, and I am the generator of all things yet to be. Among women I am fame, fortune, speech, memory, intelligence, steadfastness and patience.",
        question: "What are Krishna's manifestations as time and feminine qualities?",
        answer: "All-devouring death, generator of future, and among women: fame, fortune, speech, memory, intelligence, steadfastness, patience.",
        concept: "Verse 10.34 - Time and Feminine Manifestations"
    },
    { 
        shloka: "बृहत्साम तथा साम्नां गायत्री छन्दसामहम् | मासानां मार्गशीर्षोऽहमृतूनां कुसुमाकरः || 10-35",
        meaning: "Of hymns I am the Brihat-sama; of poetry I am the Gayatri; of months I am Margasirsa; of seasons I am flower-bearing spring.",
        question: "What are Krishna's manifestations in hymns and time?",
        answer: "Brihat-sama among hymns, Gayatri among poetry, Margasirsa among months, spring among seasons.",
        concept: "Verse 10.35 - Hymn and Seasonal Manifestations"
    },
    { 
        shloka: "द्यूतं छलयतामस्मि तेजस्तेजस्विनामहम् | जयोऽस्मि व्यवसायोऽस्मि सत्त्वं सत्त्ववतामहम् || 10-36",
        meaning: "I am also the gambling of cheats, and of the splendid I am the splendor. I am victory, I am adventure, and I am the strength of the strong.",
        question: "What are Krishna's manifestations in various qualities?",
        answer: "Gambling of cheats, splendor of splendid, victory, adventure, strength of strong.",
        concept: "Verse 10.36 - Quality Manifestations"
    },
    { 
        shloka: "वृष्णीनां वासुदेवोऽस्मि पाण्डवानां धनञ्जयः | मुनीनामप्यहं व्यासः कवीनामुशना कविः || 10-37",
        meaning: "Of the Vrishnis I am Vasudeva; of the Pandavas I am Arjuna; of the sages I am Vyasa; among great thinkers I am Usana.",
        question: "What are Krishna's manifestations among personalities?",
        answer: "Vasudeva among Vrishnis, Arjuna among Pandavas, Vyasa among sages, Usana among thinkers.",
        concept: "Verse 10.37 - Personality Manifestations"
    },
    { 
        shloka: "दण्डो दमयतामस्मि नीतिरस्मि जिगीषताम् | मौनं चैवास्मि गुह्यानां ज्ञानं ज्ञानवतामहम् || 10-38",
        meaning: "Among punishers I am the rod; of those who seek victory I am morality; of secret things I am silence; and of the wise I am wisdom.",
        question: "What are Krishna's manifestations in discipline and knowledge?",
        answer: "Rod among punishers, morality for victors, silence among secrets, wisdom among wise.",
        concept: "Verse 10.38 - Discipline and Knowledge Manifestations"
    },
    { 
        shloka: "यच्चापि सर्वभूतानां बीजं तदहमर्जुन | न तदस्ति विना यत्स्यान्मया भूतं चराचरम् || 10-39",
        meaning: "Furthermore, O Arjuna, I am the generating seed of all existences. There is no being—moving or nonmoving—that can exist without Me.",
        question: "What is Krishna's relationship to all existence?",
        answer: "He is the generating seed of all beings; nothing exists without Him.",
        concept: "Verse 10.39 - Seed of All Existence"
    },
    { 
        shloka: "नान्तोऽस्ति मम दिव्यानां विभूतीनां परन्तप | एष तूद्देशतः प्रोक्तो विभूतेर्विस्तरो मया || 10-40",
        meaning: "O conqueror of enemies, there is no end to My divine manifestations. What I have spoken to you is but a mere indication of My infinite opulences.",
        question: "How extensive are Krishna's divine manifestations?",
        answer: "They are unlimited; what He described is only a brief indication.",
        concept: "Verse 10.40 - Unlimited Divine Manifestations"
    },
    { 
        shloka: "यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा | तत्तदेवावगच्छ त्वं मम तेजोंऽशसम्भवम् || 10-41",
        meaning: "Know that all opulent, beautiful, and glorious creations spring from but a spark of My splendor.",
        question: "What is the source of all glorious things?",
        answer: "They arise from just a spark of Krishna's splendor.",
        concept: "Verse 10.41 - Source of All Glory"
    },
    { 
        shloka: "अथवा बहुनैतेन किं ज्ञातेन तवार्जुन | विष्टभ्याहमिदं कृत्स्नमेकांशेन स्थितो जगत् || 10-42",
        meaning: "But what need is there, Arjuna, for all this detailed knowledge? With a single fragment of Myself I pervade and support this entire universe.",
        question: "What is Krishna's final statement about His power?",
        answer: "With just one fragment of Himself, He pervades and supports the entire universe.",
        concept: "Verse 10.42 - All-Pervading Support"
    }
];