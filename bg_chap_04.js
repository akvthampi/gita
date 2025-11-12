// --- bg_chap_04.js ---
const chapterMetadata = {
    title: "Chapter 4: The Yoga of Knowledge and Renunciation",
    info: "Jnana Karma Sanyasa Yoga - Yoga of Knowledge and Renunciation of Action (42 verses)"
};
const flashcards = [
    { 
        shloka: "श्रीभगवानुवाच | इमं विवस्वते योगं प्रोक्तवानहमव्ययम् | विवस्वान्मनवे प्राह मनुरिक्ष्वाकवेऽब्रवीत् || 4-1",
        meaning: "The Supreme Lord said: I instructed this imperishable science of yoga to the sun-god, Vivasvan, and Vivasvan instructed it to Manu, the father of mankind, and Manu in turn instructed it to Ikshvaku.",
        question: "What is the original lineage of yoga knowledge transmission described by Krishna?",
        answer: "Krishna → Sun-god Vivasvan → Manu → Ikshvaku - showing the ancient parampara (disciplic succession).",
        concept: "Verse 4.1 - Original Transmission of Yoga"
    },
    { 
        shloka: "एवं परम्पराप्राप्तमिमं राजर्षयो विदुः | स कालेनेह महता योगो नष्टः परन्तप || 4-2",
        meaning: "This supreme science was thus received through the chain of disciplic succession, and the saintly kings understood it in that way. But in course of time the succession was broken, and therefore the science as it is appears to be lost.",
        question: "What happened to this knowledge over time according to Krishna?",
        answer: "The disciplic succession was broken over time, making the science appear to be lost.",
        concept: "Verse 4.2 - Broken Disciplic Succession"
    },
    { 
        shloka: "स एवायं मया तेऽद्य योगः प्रोक्तः पुरातनः | भक्तोऽसि मे सखा चेति रहस्यं ह्येतदुत्तमम् || 4-3",
        meaning: "That very ancient science of the relationship with the Supreme is today told by Me to you because you are My devotee as well as My friend; therefore you can understand the transcendental mystery of this science.",
        question: "Why is Krishna revealing this ancient knowledge to Arjuna?",
        answer: "Because Arjuna is both His devotee and friend, qualified to understand this transcendental mystery.",
        concept: "Verse 4.3 - Qualification to Receive Knowledge"
    },
    { 
        shloka: "अर्जुन उवाच | अपरं भवतो जन्म परं जन्म विवस्वतः | कथमेतद्विजानीयां त्वमादौ प्रोक्तवानिति || 4-4",
        meaning: "Arjuna said: The sun-god Vivasvan is senior by birth to You. How am I to understand that in the beginning You instructed this science to him?",
        question: "What chronological contradiction does Arjuna point out?",
        answer: "Arjuna questions how Krishna could have taught Vivasvan, who was born much earlier than Krishna.",
        concept: "Verse 4.4 - Arjuna's Chronological Doubt"
    },
    { 
        shloka: "श्रीभगवानुवाच | बहूनि मे व्यतीतानि जन्मानि तव चार्जुन | तान्यहं वेद सर्वाणि न त्वं वेत्थ परन्तप || 4-5",
        meaning: "The Supreme Lord said: Many, many births both you and I have passed. I can remember all of them, but you cannot, O subduer of the enemy!",
        question: "What fundamental difference does Krishna reveal between Himself and Arjuna?",
        answer: "Krishna remembers all His past births while Arjuna cannot remember his.",
        concept: "Verse 4.5 - Difference in Memory of Past Lives"
    },
    { 
        shloka: "अजोऽपि सन्नव्ययात्मा भूतानामीश्वरोऽपि सन् | प्रकृतिं स्वामधिष्ठाय सम्भवाम्यात्ममायया || 4-6",
        meaning: "Although I am unborn and My transcendental body never deteriorates, and although I am the Lord of all living entities, I still appear in every millennium in My original transcendental form.",
        question: "What is the paradox of Krishna's appearance despite being unborn?",
        answer: "Though unborn and eternal, He appears through His spiritual energy (atma-maya) in every age.",
        concept: "Verse 4.6 - The Unborn Appearing"
    },
    { 
        shloka: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत | अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् || 4-7",
        meaning: "Whenever and wherever there is a decline in religious practice, O descendant of Bharata, and a predominant rise of irreligion—at that time I descend Myself.",
        question: "What are the two conditions that prompt Krishna's descent?",
        answer: "1) Decline of dharma (religious practice), 2) Rise of adharma (irreligion).",
        concept: "Verse 4.7 - Purpose of Divine Descent"
    },
    { 
        shloka: "परित्राणाय साधूनां विनाशाय च दुष्कृताम् | धर्मसंस्थापनार्थाय सम्भवामि युगे युगे || 4-8",
        meaning: "To deliver the pious and to annihilate the miscreants, as well as to reestablish the principles of religion, I advent Myself millennium after millennium.",
        question: "What three purposes does Krishna state for His repeated appearances?",
        answer: "1) Protect the righteous, 2) Destroy the wicked, 3) Reestablish religious principles.",
        concept: "Verse 4.8 - Three Purposes of Divine Descent"
    },
    { 
        shloka: "जन्म कर्म च मे दिव्यमेवं यो वेत्ति तत्त्वतः | त्यक्त्वा देहं पुनर्जन्म नैति मामेति सोऽर्जुन || 4-9",
        meaning: "One who knows the transcendental nature of My appearance and activities does not, upon leaving the body, take his birth again in this material world, but attains My eternal abode, O Arjuna.",
        question: "What is the benefit of understanding Krishna's divine nature and activities?",
        answer: "Such a person avoids rebirth and attains Krishna's eternal abode after leaving the body.",
        concept: "Verse 4.9 - Benefit of Knowing Krishna's Divinity"
    },
    { 
        shloka: "वीतरागभयक्रोधा मन्मया मामुपाश्रिताः | बहवो ज्ञानतपसा पूता मद्भावमागताः || 4-10",
        meaning: "Being freed from attachment, fear and anger, being fully absorbed in Me and taking refuge in Me, many, many persons in the past became purified by knowledge of Me—and thus they all attained transcendental love for Me.",
        question: "What four qualities help one attain love for Krishna?",
        answer: "1) Freedom from attachment, 2) Freedom from fear, 3) Freedom from anger, 4) Taking refuge in Krishna.",
        concept: "Verse 4.10 - Qualities for Attaining Love of God"
    },
    { 
        shloka: "ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम् | मम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः || 4-11",
        meaning: "All of them—as they surrender unto Me—I reward accordingly. Everyone follows My path in all respects, O son of Pritha.",
        question: "How does Krishna respond to different types of surrender?",
        answer: "He rewards everyone according to their manner of surrender; all paths ultimately lead to Him.",
        concept: "Verse 4.11 - Krishna's Response to Surrender"
    },
    { 
        shloka: "काङ्क्षन्तः कर्मणां सिद्धिं यजन्त इह देवताः | क्षिप्रं हि मानुषे लोके सिद्धिर्भवति कर्मजा || 4-12",
        meaning: "Men in this world desire success in fruitive activities, and therefore they worship the demigods. Quickly, indeed, in this human world, success is generated by fruitive activities.",
        question: "Why do people worship demigods according to this verse?",
        answer: "They desire quick success in material activities, which demigods can provide in this human world.",
        concept: "Verse 4.12 - Worship of Demigods for Material Success"
    },
    { 
        shloka: "चातुर्वर्ण्यं मया सृष्टं गुणकर्मविभागशः | तस्य कर्तारमपि मां विद्ध्यकर्तारमव्ययम् || 4-13",
        meaning: "According to the three modes of material nature and the work associated with them, the four divisions of human society are created by Me. And although I am the creator of this system, you should know that I am yet the non-doer, being unchangeable.",
        question: "What is the paradox about Krishna's role in creating the varna system?",
        answer: "Though He created the four social orders based on guna and karma, He remains the non-doer, unchanged.",
        concept: "Verse 4.13 - Creator Yet Non-Doer"
    },
    { 
        shloka: "न मां कर्माणि लिम्पन्ति न मे कर्मफले स्पृहा | इति मां योऽभिजानाति कर्मभिर्न स बध्यते || 4-14",
        meaning: "There is no work that affects Me; nor do I aspire for the fruits of action. One who understands this truth about Me also does not become entangled in the fruitive reactions of work.",
        question: "What understanding liberates one from karmic bondage?",
        answer: "Understanding that Krishna is unaffected by work and doesn't desire fruits liberates one similarly.",
        concept: "Verse 4.14 - Freedom from Karmic Bondage"
    },
    { 
        shloka: "एवं ज्ञात्वा कृतं कर्म पूर्वैरपि मुमुक्षुभिः | कुरु कर्मैव तस्मात्त्वं पूर्वैः पूर्वतरं कृतम् || 4-15",
        meaning: "All the liberated souls in ancient times acted with this understanding of My transcendental nature. Therefore you should perform your duty, following in their footsteps.",
        question: "What example does Krishna give from ancient liberated souls?",
        answer: "Ancient liberated souls also performed duties while understanding Krishna's transcendental nature.",
        concept: "Verse 4.15 - Example of Ancient Liberated Souls"
    },
    { 
        shloka: "किं कर्म किमकर्मेति कवयोऽप्यत्र मोहिताः | तत्ते कर्म प्रवक्ष्यामि यज्ज्ञात्वा मोक्ष्यसेऽशुभात् || 4-16",
        meaning: "Even the intelligent are bewildered in determining what is action and what is inaction. Now I shall explain to you what action is, knowing which you shall be liberated from all misfortune.",
        question: "Why is it difficult to understand action and inaction?",
        answer: "Even intelligent people are confused about what constitutes proper action versus inaction.",
        concept: "Verse 4.16 - Confusion About Action"
    },
    { 
        shloka: "कर्मणो ह्यपि बोद्धव्यं बोद्धव्यं च विकर्मणः | अकर्मणश्च बोद्धव्यं गहना कर्मणो गतिः || 4-17",
        meaning: "The intricacies of action are very hard to understand. Therefore one should know properly what action is, what forbidden action is, and what inaction is.",
        question: "What three aspects of action must be understood?",
        answer: "1) Proper action (karma), 2) Forbidden action (vikarma), 3) Inaction (akarma).",
        concept: "Verse 4.17 - Three Aspects of Action"
    },
    { 
        shloka: "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः | स बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत् || 4-18",
        meaning: "One who sees inaction in action, and action in inaction, is intelligent among men, and he is in the transcendental position, although engaged in all sorts of activities.",
        question: "What paradoxical vision characterizes an intelligent person?",
        answer: "Seeing inaction in action (no doership) and action in inaction (spiritual consciousness in apparent inaction).",
        concept: "Verse 4.18 - Vision of the Intelligent"
    },
    { 
        shloka: "यस्य सर्वे समारम्भाः कामसङ्कल्पवर्जिताः | ज्ञानाग्निदग्धकर्माणं तमाहुः पण्डितं बुधाः || 4-19",
        meaning: "One whose undertakings are all free from desire and plans, and whose actions are burned up by the fire of knowledge—him the wise call a learned person.",
        question: "What are the characteristics of a truly learned person?",
        answer: "All endeavors are free from desire and planning, and actions are purified by the fire of knowledge.",
        concept: "Verse 4.19 - The Truly Learned Person"
    },
    { 
        shloka: "त्यक्त्वा कर्मफलासङ्गं नित्यतृप्तो निराश्रयः | कर्मण्यभिप्रवृत्तोऽपि नैव किञ्चित्करोति सः || 4-20",
        meaning: "Having abandoned attachment to the results of his actions, ever satisfied and independent, he performs no fruitive action, even though engaged in all kinds of undertakings.",
        question: "How can one act without actually acting?",
        answer: "By working without attachment to results, being satisfied in the self, one acts without karmic reaction.",
        concept: "Verse 4.20 - Action Without Karmic Reaction"
    },
    { 
        shloka: "निराशीर्यतचित्तात्मा त्यक्तसर्वपरिग्रहः | शारीरं केवलं कर्म कुर्वन्नाप्नोति किल्बिषम् || 4-21",
        meaning: "Such a man of understanding acts with mind and intelligence perfectly controlled, gives up all sense of proprietorship over his possessions, and acts only for the bare necessities of life. Working in this way, he is not affected by sinful reactions.",
        question: "What three qualities protect one from sinful reactions while working?",
        answer: "1) Free from desires, 2) Controlled mind and intelligence, 3) No sense of proprietorship.",
        concept: "Verse 4.21 - Protection from Sinful Reactions"
    },
    { 
        shloka: "यदृच्छालाभसन्तुष्टो द्वन्द्वातीतो विमत्सरः | समः सिद्धावसिद्धौ च कृत्वापि न निबध्यते || 4-22",
        meaning: "He who is satisfied with gain which comes of its own accord, who is free from duality and does not envy, who is steady in both success and failure, is never entangled, although performing actions.",
        question: "What four qualities make one free from entanglement while acting?",
        answer: "1) Satisfied with spontaneous gains, 2) Beyond dualities, 3) Free from envy, 4) Equipoised in success/failure.",
        concept: "Verse 4.22 - Freedom While Acting"
    },
    { 
        shloka: "गतसङ्गस्य मुक्तस्य ज्ञानावस्थितचेतसः | यज्ञायाचरतः कर्म समग्रं प्रविलीयते || 4-23",
        meaning: "The work of a man who is unattached to the modes of material nature and who is fully situated in transcendental knowledge merges entirely into transcendence.",
        question: "What happens to the work of one situated in transcendental knowledge?",
        answer: "It merges entirely into transcendence, leaving no karmic residue.",
        concept: "Verse 4.23 - Work Merging in Transcendence"
    },
    { 
        shloka: "ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम् | ब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना || 4-24",
        meaning: "A person who is fully absorbed in Krishna consciousness is sure to attain the spiritual kingdom because of his full contribution to spiritual activities, in which the consummation is absolute and that which is offered is of the same spiritual nature.",
        question: "What is the nature of sacrifice for one in spiritual consciousness?",
        answer: "Everything becomes spiritual: the offering, the process, the fire, the performer - all are Brahman.",
        concept: "Verse 4.24 - Spiritualization of Sacrifice"
    },
    { 
        shloka: "दैवमेवापरे यज्ञं योगिनः पर्युपासते | ब्रह्माग्नावपरे यज्ञं यज्ञेनोपसुधुवति || 4-25",
        meaning: "Some yogis perfectly worship the demigods by offering different sacrifices to them, and some of them offer sacrifices in the fire of the Supreme Brahman.",
        question: "What two types of sacrifice are mentioned?",
        answer: "1) Worship of demigods, 2) Sacrifice offered to Supreme Brahman in the fire of knowledge.",
        concept: "Verse 4.25 - Two Types of Sacrifice"
    },
    { 
        shloka: "श्रोत्रादीनीन्द्रियाण्यन्ये संयमाग्निषु जुह्वति | शब्दादीन्विषयानन्य इन्द्रियाग्निषु जुह्वति || 4-26",
        meaning: "Some [the mystics] offer the hearing process and the senses in the fire of the controlled mind, and others [the pure devotees] offer the objects of the senses, such as sound, in the fire of the senses.",
        question: "What two different approaches to sense control are described?",
        answer: "Mystics offer senses in mind's fire; devotees offer sense objects in senses' fire through purification.",
        concept: "Verse 4.26 - Different Approaches to Sense Control"
    },
    { 
        shloka: "सर्वाणीन्द्रियकर्माणि प्राणकर्माणि चापरे | आत्मसंयमयोगाग्नौ जुह्वति ज्ञानदीपिते || 4-27",
        meaning: "Others, who are interested in achieving self-realization through control of the mind and senses, offer the functions of all the senses, and of the life breath, as oblations into the fire of the controlled mind.",
        question: "What do mystics offer in the fire of controlled mind?",
        answer: "They offer all sensory activities and functions of the life breath into the fire of controlled mind.",
        concept: "Verse 4.27 - Mystic Sacrifice"
    },
    { 
        shloka: "द्रव्ययज्ञास्तपोयज्ञा योगयज्ञास्तथापरे | स्वाध्यायज्ञानयज्ञाश्च यतयः संशितव्रताः || 4-28",
        meaning: "Having accepted strict vows, some become enlightened by sacrificing their possessions, and others by performing severe austerities, by practicing the yoga of eightfold mysticism, or by studying the Vedas to advance in transcendental knowledge.",
        question: "What four types of sacrifice lead to enlightenment?",
        answer: "1) Sacrifice of possessions, 2) Austerity, 3) Mystic yoga, 4) Vedic study for knowledge.",
        concept: "Verse 4.28 - Various Paths of Sacrifice"
    },
    { 
        shloka: "अपाने जुह्वति प्राणं प्राणेऽपानं तथापरे | प्राणापानगती रुद्ध्वा प्राणायामपरायणाः || 4-29",
        meaning: "Still others, who are inclined to the process of breath restraint to remain in trance, practice by offering the movement of the outgoing breath into the incoming, and the incoming breath into the outgoing, and thus at last remain in trance, stopping all breathing.",
        question: "What is the process of pranayama described here?",
        answer: "Offering outgoing breath into incoming and vice versa, ultimately stopping all breathing in trance.",
        concept: "Verse 4.29 - Pranayama Practice"
    },
    { 
        shloka: "अपरे नियताहाराः प्राणान्प्राणेषु जुह्वति | सर्वेऽप्येते यज्ञविदो यज्ञक्षपितकल्मषाः || 4-30",
        meaning: "Others, who restrict their eating, offer the outgoing breath into itself as a sacrifice. All these performers who know the meaning of sacrifice become cleansed of sinful reactions, and, having tasted the nectar of the results of sacrifices, they advance toward the supreme eternal atmosphere.",
        question: "What is the common result of all these different sacrifices?",
        answer: "All become purified of sinful reactions and advance toward the supreme eternal abode.",
        concept: "Verse 4.30 - Common Result of All Sacrifices"
    },
    { 
        shloka: "यज्ञशिष्टामृतभुजो यान्ति ब्रह्म सनातनम् | नायं लोकोऽस्त्ययज्ञस्य कुतोऽन्यः कुरुसत्तम || 4-31",
        meaning: "O best of the Kuru dynasty, without sacrifice one can never live happily on this planet or in this life: what then of the next?",
        question: "What is essential for happiness in this world and the next?",
        answer: "Performance of sacrifice is essential for happiness in both this world and the next.",
        concept: "Verse 4.31 - Necessity of Sacrifice"
    },
    { 
        shloka: "एवं बहुविधा यज्ञा वितता ब्रह्मणो मुखे | कर्मजान्विद्धि तान्सर्वानेवं ज्ञात्वा विमोक्ष्यसे || 4-32",
        meaning: "All these different types of sacrifice are approved by the Vedas, and all of them are born of different types of work. Knowing them as such, you will become liberated.",
        question: "What is the origin and benefit of understanding all these sacrifices?",
        answer: "They originate from the Vedas and various works; understanding them leads to liberation.",
        concept: "Verse 4.32 - Liberation Through Understanding Sacrifices"
    },
    { 
        shloka: "श्रेयान्द्रव्यमयाद्यज्ञाज्ज्ञानयज्ञः परन्तप | सर्वं कर्माखिलं पार्थ ज्ञाने परिसमाप्यते || 4-33",
        meaning: "O chastiser of the enemy, the sacrifice of knowledge is greater than the sacrifice of material possessions. O son of Pritha, after all, all sacrifices of work culminate in transcendental knowledge.",
        question: "Which sacrifice is superior and why?",
        answer: "Sacrifice of knowledge is superior because all material sacrifices culminate in transcendental knowledge.",
        concept: "Verse 4.33 - Superiority of Knowledge Sacrifice"
    },
    { 
        shloka: "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया | उपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः || 4-34",
        meaning: "Just try to learn the truth by approaching a spiritual master. Inquire from him submissively and render service unto him. The self-realized souls can impart knowledge unto you because they have seen the truth.",
        question: "What three methods are prescribed for receiving spiritual knowledge?",
        answer: "1) Approaching a spiritual master, 2) Submissive inquiry, 3) Rendering service.",
        concept: "Verse 4.34 - Receiving Spiritual Knowledge"
    },
    { 
        shloka: "यज्ज्ञात्वा न पुनर्मोहमेवं यास्यसि पाण्डव | येन भूतान्यशेषेण द्रक्ष्यस्यात्मन्यथो मयि || 4-35",
        meaning: "Having obtained real knowledge from a self-realized soul, you will never fall again into such illusion, for by this knowledge you will see that all living beings are but part of the Supreme, or, in other words, that they are Mine.",
        question: "What two realizations come from genuine spiritual knowledge?",
        answer: "1) All living beings are part of the Supreme, 2) All beings belong to Krishna.",
        concept: "Verse 4.35 - Result of Genuine Knowledge"
    },
    { 
        shloka: "अपि चेदसि पापेभ्यः सर्वेभ्यः पापकृत्तमः | सर्वं ज्ञानप्लवेनैव वृजिनं सन्तरिष्यसि || 4-36",
        meaning: "Even if you are considered to be the most sinful of all sinners, when you are situated in the boat of transcendental knowledge you will be able to cross over the ocean of miseries.",
        question: "What power does transcendental knowledge have over sin?",
        answer: "It can carry even the greatest sinner across the ocean of material miseries.",
        concept: "Verse 4.36 - Power of Transcendental Knowledge"
    },
    { 
        shloka: "यथैधांसि समिद्धोऽग्निर्भस्मसात्कुरुतेऽर्जुन | ज्ञानाग्निः सर्वकर्माणि भस्मसात्कुरुते तथा || 4-37",
        meaning: "As a blazing fire turns firewood to ashes, O Arjuna, so does the fire of knowledge burn to ashes all reactions to material activities.",
        question: "What analogy describes the effect of knowledge on karmic reactions?",
        answer: "Like fire reducing wood to ashes, knowledge burns all karmic reactions to ashes.",
        concept: "Verse 4.37 - Knowledge Burning Karma"
    },
    { 
        shloka: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते | तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति || 4-38",
        meaning: "In this world, there is nothing so sublime and pure as transcendental knowledge. Such knowledge is the mature fruit of all mysticism. And one who has become accomplished in the practice of devotional service enjoys this knowledge within himself in due course of time.",
        question: "What is the supreme purity and how is it attained?",
        answer: "Transcendental knowledge is the supreme purity, attained through perfected devotional service over time.",
        concept: "Verse 4.38 - Supreme Purity of Knowledge"
    },
    { 
        shloka: "श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः | ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति || 4-39",
        meaning: "A faithful man who is dedicated to transcendental knowledge and who subdues his senses is eligible to achieve such knowledge, and having achieved it he quickly attains the supreme spiritual peace.",
        question: "What three qualities make one eligible for transcendental knowledge?",
        answer: "1) Faith, 2) Dedication to knowledge, 3) Controlled senses.",
        concept: "Verse 4.39 - Qualifications for Knowledge"
    },
    { 
        shloka: "अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति | नायं लोकोऽस्ति न परो न सुखं संशयात्मनः || 4-40",
        meaning: "But ignorant and faithless persons who doubt the revealed scriptures do not attain God consciousness; they fall down. For the doubting soul there is happiness neither in this world nor in the next.",
        question: "What is the fate of those who doubt the scriptures?",
        answer: "They cannot attain God consciousness and find happiness neither in this world nor the next.",
        concept: "Verse 4.40 - Fate of the Doubtful"
    },
    { 
        shloka: "योगसंन्यस्तकर्माणं ज्ञानसंछिन्नसंशयम् | आत्मवन्तं न कर्माणि निबध्नन्ति धनञ्जय || 4-41",
        meaning: "One who acts in devotional service, renouncing the fruits of his actions, and whose doubts have been destroyed by transcendental knowledge, is situated factually in the self. Thus he is not bound by the reactions of work, O conqueror of riches.",
        question: "What three qualities free one from karmic bondage?",
        answer: "1) Renouncing fruits of action, 2) Doubts destroyed by knowledge, 3) Situated in the self.",
        concept: "Verse 4.41 - Freedom from Karmic Bondage"
    },
    { 
        shloka: "तस्मादज्ञानसम्भूतं हृत्स्थं ज्ञानासिनात्मनः | छित्त्वैनं संशयं योगमातिष्ठोत्तिष्ठ भारत || 4-42",
        meaning: "Therefore the doubts which have arisen in your heart out of ignorance should be slashed by the weapon of knowledge. Armed with yoga, O Bharata, stand and fight.",
        question: "What final instruction does Krishna give to Arjuna?",
        answer: "Cut the ignorance-born doubts with the sword of knowledge, take shelter of yoga, and fight.",
        concept: "Verse 4.42 - Final Instruction: Fight with Knowledge"
    }
];