// --- bg_chap_06.js ---
const chapterMetadata = {
    title: "Chapter 6: The Yoga of Meditation",
    info: "Dhyana Yoga / Atma Samyama Yoga - Yoga of Meditation and Self-Control (47 verses)"
};
const flashcards = [
    { 
        shloka: "श्रीभगवानुवाच | अनाश्रितः कर्मफलं कार्यं कर्म करोति यः | स संन्यासी च योगी च न निरग्निर्न चाक्रियः || 6-1",
        meaning: "The Supreme Lord said: One who is unattached to the fruits of his work and who works as he is obligated is in the renounced order of life, and he is the true mystic, not he who lights no fire and performs no duty.",
        question: "Who is considered a true renunciant and mystic according to Krishna?",
        answer: "One who works without attachment to results while performing obligatory duties, not one who abandons rituals and duties.",
        concept: "Verse 6.1 - True Renunciant and Mystic"
    },
    { 
        shloka: "यं संन्यासमिति प्राहुर्योगं तं विद्धि पाण्डव | न ह्यसंन्यस्तसङ्कल्पो योगी भवति कश्चन || 6-2",
        meaning: "What is called renunciation you should know to be the same as yoga, or linking oneself with the Supreme, O son of Pandu, for one can never become a yogi unless he renounces the desire for sense gratification.",
        question: "What is the essential requirement for becoming a yogi?",
        answer: "Renouncing the desire for sense gratification is essential for becoming a true yogi.",
        concept: "Verse 6.2 - Essential Requirement for Yoga"
    },
    { 
        shloka: "आरुरुक्षोर्मुनेर्योगं कर्म कारणमुच्यते | योगारूढस्य तस्यैव शमः कारणमुच्यते || 6-3",
        meaning: "For one who is a neophyte in the eightfold yoga system, work is said to be the means; and for one who is already elevated in yoga, cessation of all material activities is said to be the means.",
        question: "What are the different means for beginners and advanced practitioners?",
        answer: "Work is the means for beginners, while cessation of material activities is for advanced practitioners.",
        concept: "Verse 6.3 - Means for Different Stages"
    },
    { 
        shloka: "यदा हि नेन्द्रियार्थेषु न कर्मस्वनुषज्जते | सर्वसङ्कल्पसंन्यासी योगारूढस्तदोच्यते || 6-4",
        meaning: "A person is said to be elevated in yoga when, having renounced all material desires, he neither acts for sense gratification nor engages in fruitive activities.",
        question: "When is a person considered elevated in yoga?",
        answer: "When they renounce all material desires and neither work for sense gratification nor fruitive results.",
        concept: "Verse 6.4 - Elevated State in Yoga"
    },
    { 
        shloka: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत् | आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः || 6-5",
        meaning: "One must deliver himself with the help of his mind, and not degrade himself. The mind is the friend of the conditioned soul, and his enemy as well.",
        question: "What dual role does the mind play according to this verse?",
        answer: "The mind can be both friend and enemy - it can elevate or degrade the conditioned soul.",
        concept: "Verse 6.5 - Mind as Friend and Enemy"
    },
    { 
        shloka: "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः | अनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत् || 6-6",
        meaning: "For him who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his mind will remain the greatest enemy.",
        question: "What determines whether the mind is friend or enemy?",
        answer: "Whether one has conquered the mind or not - conquered mind is friend, uncontrolled mind is enemy.",
        concept: "Verse 6.6 - Conquered vs Uncontrolled Mind"
    },
    { 
        shloka: "जितात्मनः प्रशान्तस्य परमात्मा समाहितः | शीतोष्णसुखदुःखेषु तथा मानापमानयोः || 6-7",
        meaning: "For one who has conquered the mind, the Supersoul is already reached, for he has attained tranquility. To such a man happiness and distress, heat and cold, honor and dishonor are all the same.",
        question: "What six dualities become equal for one with conquered mind?",
        answer: "Happiness-distress, heat-cold, honor-dishonor - all become equal for one with conquered mind.",
        concept: "Verse 6.7 - Equanimity of Conquered Mind"
    },
    { 
        shloka: "ज्ञानविज्ञानतृप्तात्मा कूटस्थो विजितेन्द्रियः | युक्त इत्युच्यते योगी समलोष्टाश्मकाञ्चनः || 6-8",
        meaning: "A person is said to be established in self-realization and is called a yogi when he is fully satisfied by virtue of acquired knowledge and realization. Such a person is situated in transcendence and is self-controlled. He sees everything—whether it be pebbles, stones or gold—as the same.",
        question: "What four qualities characterize an established yogi?",
        answer: "1) Satisfied with knowledge and realization, 2) Situated in transcendence, 3) Self-controlled, 4) Sees everything equally.",
        concept: "Verse 6.8 - Characteristics of Established Yogi"
    },
    { 
        shloka: "सुहृन्मित्रार्युदासीनमध्यस्थद्वेष्यबन्धुषु | साधुष्वपि च पापेषु समबुद्धिर्विशिष्यते || 6-9",
        meaning: "A person is considered still further advanced when he regards honest well-wishers, affectionate benefactors, the neutral, mediators, the envious, friends and enemies, the pious and the sinners all with an equal mind.",
        question: "Towards whom should one maintain equal vision?",
        answer: "Towards well-wishers, benefactors, neutral persons, mediators, envious, friends, enemies, pious and sinners - all equally.",
        concept: "Verse 6.9 - Equal Vision Towards All"
    },
    { 
        shloka: "योगी युञ्जीत सततमात्मानं रहसि स्थितः | एकाकी यतचित्तात्मा निराशीरपरिग्रहः || 6-10",
        meaning: "A transcendentalist should always engage his body, mind and self in relationship with the Supreme; he should live alone in a secluded place and should always carefully control his mind. He should be free from desires and feelings of possessiveness.",
        question: "What six practices are recommended for a yogi?",
        answer: "1) Engage body-mind-self with Supreme, 2) Live alone in seclusion, 3) Control mind, 4) Free from desires, 5) Free from possessiveness, 6) Maintain careful awareness.",
        concept: "Verse 6.10 - Practices for the Yogi"
    },
    { 
        shloka: "शुचौ देशे प्रतिष्ठाप्य स्थिरमासनमात्मनः | नात्युच्छ्रितं नातिनीचं चैलाजिनकुशोत्तरम् || 6-11",
        meaning: "To practice yoga, one should go to a secluded place and should lay kusha grass on the ground and then cover it with a deerskin and a soft cloth. The seat should be neither too high nor too low and should be situated in a sacred place.",
        question: "What are the specifications for the yoga seat?",
        answer: "In secluded sacred place, kusha grass covered with deerskin and cloth, neither too high nor too low.",
        concept: "Verse 6.11 - Preparation of Yoga Seat"
    },
    { 
        shloka: "तत्रैकाग्रं मनः कृत्वा यतचित्तेन्द्रियक्रियः | उपविश्यासने युञ्ज्याद्योगमात्मविशुद्धये || 6-12",
        meaning: "The yogi should sit on the seat, making the mind one-pointed and controlling its functions and senses, and should practice yoga for self-purification.",
        question: "What should be the mental state while sitting for yoga?",
        answer: "Mind should be one-pointed, controlling mental functions and senses, for self-purification.",
        concept: "Verse 6.12 - Mental State for Yoga Practice"
    },
    { 
        shloka: "समं कायशिरोग्रीवं धारयन्नचलं स्थिरः | सम्प्रेक्ष्य नासिकाग्रं स्वं दिशश्चानवलोकयन् || 6-13",
        meaning: "One should hold one's body, neck and head erect in a straight line and stare steadily at the tip of the nose. Thus, with an unagitated, subdued mind, devoid of fear, completely free from sex life, one should meditate upon Me within the heart and make Me the ultimate goal of life.",
        question: "What is the physical posture and focus for meditation?",
        answer: "Body-neck-head straight, gaze at nose tip, mind unagitated and subdued, free from fear and sex life.",
        concept: "Verse 6.13 - Meditation Posture and Focus"
    },
    { 
        shloka: "प्रशान्तात्मा विगतभीर्ब्रह्मचारिव्रते स्थितः | मनः संयम्य मच्चित्तो युक्त आसीत मत्परः || 6-14",
        meaning: "Thus, always keeping the mind balanced, the yogi, with the mind controlled, attains the peace residing in Me, which culminates in total cessation of material existence.",
        question: "What is the ultimate peace attained through yoga?",
        answer: "The peace that resides in Krishna, culminating in complete cessation of material existence.",
        concept: "Verse 6.14 - Ultimate Peace Through Yoga"
    },
    { 
        shloka: "युञ्जन्नेवं सदात्मानं योगी विगतकल्मषः | सुखेन ब्रह्मसंस्पर्शमत्यन्तं सुखमश्नुते || 6-15",
        meaning: "Thus, constantly controlling the body, the mind and the activities, the mystic transcendentalist attains to the kingdom of God [or the abode of Krishna] by cessation of material existence.",
        question: "What does the sinless yogi attain through constant practice?",
        answer: "The sinless yogi attains contact with Brahman and enjoys supreme happiness through cessation of material existence.",
        concept: "Verse 6.15 - Supreme Happiness Through Yoga"
    },
    { 
        shloka: "नात्यश्नतस्तु योगोऽस्ति न चैकान्तमनश्नतः | न चातिस्वप्नशीलस्य जाग्रतो नैव चार्जुन || 6-16",
        meaning: "There is no possibility of one's becoming a yogi, O Arjuna, if one eats too much or eats too little, sleeps too much or does not sleep enough.",
        question: "What two extremes should a yogi avoid regarding eating and sleeping?",
        answer: "Avoid eating too much or too little, and sleeping too much or too little.",
        concept: "Verse 6.16 - Moderation in Eating and Sleeping"
    },
    { 
        shloka: "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु | युक्तस्वप्नावबोधस्य योगो भवति दुःखहा || 6-17",
        meaning: "He who is regulated in his habits of eating, sleeping, recreation and work can mitigate all material pains by practicing the yoga system.",
        question: "What four areas of life should be regulated for yoga success?",
        answer: "Eating, sleeping, recreation, and work should all be regulated for successful yoga practice.",
        concept: "Verse 6.17 - Regulation for Yoga Success"
    },
    { 
        shloka: "यदा विनियतं चित्तमात्मन्येवावतिष्ठते | निःस्पृहः सर्वकामेभ्यो युक्त इत्युच्यते तदा || 6-18",
        meaning: "When the yogi, by practice of yoga, disciplines his mental activities and becomes situated in transcendence—devoid of all material desires—he is said to be well established in yoga.",
        question: "When is a yogi considered well established?",
        answer: "When mind is disciplined, situated in transcendence, and free from all material desires.",
        concept: "Verse 6.18 - Well-Established Yogi"
    },
    { 
        shloka: "यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता | योगिनो यतचित्तस्य युञ्जतो योगमात्मनः || 6-19",
        meaning: "As a lamp in a windless place does not waver, so the transcendentalist, whose mind is controlled, remains always steady in his meditation on the transcendent Self.",
        question: "What analogy describes the steady mind in meditation?",
        answer: "Like a lamp in a windless place that doesn't flicker - the controlled mind remains steady in meditation.",
        concept: "Verse 6.19 - Steady Mind Analogy"
    },
    { 
        shloka: "यत्रोपरमते चित्तं निरुद्धं योगसेवया | यत्र चैवात्मनात्मानं पश्यन्नात्मनि तुष्यति || 6-20",
        meaning: "In the stage of perfection called trance, or samadhi, one's mind is completely restrained from material mental activities by practice of yoga. This perfection is characterized by one's ability to see the self by the pure mind and to relish and rejoice in the self.",
        question: "What characterizes the perfected stage of samadhi?",
        answer: "Mind completely restrained from material activities, able to see the self with pure mind, and rejoicing in the self.",
        concept: "Verse 6.20 - Characteristics of Samadhi"
    },
    { 
        shloka: "सुखमात्यन्तिकं यत्तद्बुद्धिग्राह्यमतीन्द्रियम् | वेत्ति यत्र न चैवायं स्थितश्चलति तत्त्वतः || 6-21",
        meaning: "In that joyous state, one is situated in boundless transcendental happiness and enjoys himself through transcendental senses. Established thus, one never departs from the truth, and upon gaining this he thinks there is no greater gain.",
        question: "What is the experience of one situated in transcendental happiness?",
        answer: "Boundless transcendental happiness enjoyed through transcendental senses, never departing from truth.",
        concept: "Verse 6.21 - Transcendental Happiness"
    },
    { 
        shloka: "यं लब्ध्वा चापरं लाभं मन्यते नाधिकं ततः | यस्मिन्स्थितो न दुःखेन गुरुणापि विचाल्यते || 6-22",
        meaning: "Being situated in such a position, one is never shaken, even in the midst of greatest difficulty. This indeed is actual freedom from all miseries arising from material contact.",
        question: "What freedom does one attain in this transcendental position?",
        answer: "Freedom from all miseries arising from material contact, remaining unshaken even in greatest difficulties.",
        concept: "Verse 6.22 - Freedom from Material Miseries"
    },
    { 
        shloka: "तं विद्याद्दुःखसंयोगवियोगं योगसंज्ञितम् | स निश्चयेन योक्तव्यो योगोऽनिर्विण्णचेतसा || 6-23",
        meaning: "From whatever and wherever the mind wanders due to its flickering and unsteady nature, one must certainly withdraw it and bring it back under the control of the Self.",
        question: "What should be done when the mind wanders during meditation?",
        answer: "Wherever the mind wanders, one must withdraw it and bring it back under the control of the Self.",
        concept: "Verse 6.23 - Controlling the Wandering Mind"
    },
    { 
        shloka: "संशयात्मा विनश्यति | नायं लोकोऽस्ति न परो न सुखं संशयात्मनः || 6-24",
        meaning: "One should engage oneself in the practice of yoga with determination and faith and not be deviated from the path. One should abandon, without exception, all material desires born of mental speculation and thus control all the senses on all sides by the mind.",
        question: "What is the fate of one who is doubtful in yoga practice?",
        answer: "The doubtful-minded person perishes and finds happiness neither in this world nor the next.",
        concept: "Verse 6.24 - Fate of the Doubtful"
    },
    { 
        shloka: "संशयात्मा विनश्यति | नायं लोकोऽस्ति न परो न सुखं संशयात्मनः || 6-25",
        meaning: "Gradually, step by step, with full conviction, one should become situated in trance by means of intelligence, and thus the mind should be fixed on the Self alone and should think of nothing else.",
        question: "How should one progress in meditation?",
        answer: "Gradually, step by step, with conviction, using intelligence to fix mind on the Self alone.",
        concept: "Verse 6.25 - Gradual Progress in Meditation"
    },
    { 
        shloka: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम् | ततस्ततो नियम्यैतदात्मन्येव वशं नयेत् || 6-26",
        meaning: "From wherever the mind wanders due to its flickering and unsteady nature, one must certainly withdraw it and bring it back under the control of the Self.",
        question: "What should be done when the mind wanders?",
        answer: "Wherever the mind wanders, withdraw it and bring it back under self-control.",
        concept: "Verse 6.26 - Controlling the Wandering Mind"
    },
    { 
        shloka: "प्रशान्तमनसं ह्येनं योगिनं सुखमुत्तमम् | उपैति शान्तरजसं ब्रह्मभूतमकल्मषम् || 6-27",
        meaning: "The yogi whose mind is fixed on Me verily attains the highest perfection of transcendental happiness. He is beyond the mode of passion, he realizes his qualitative identity with the Supreme, and thus he is freed from all reactions to past deeds.",
        question: "What four attainments come to the mind-fixed yogi?",
        answer: "1) Highest transcendental happiness, 2) Beyond passion mode, 3) Realizes identity with Supreme, 4) Freed from past karmic reactions.",
        concept: "Verse 6.27 - Attainments of the Yogi"
    },
    { 
        shloka: "युञ्जन्नेवं सदात्मानं योगी विगतकल्मषः | सुखेन ब्रह्मसंस्पर्शमत्यन्तं सुखमश्नुते || 6-28",
        meaning: "Thus, the self-controlled yogi, constantly engaged in yoga practice, becomes free from all material contamination and achieves the highest stage of perfect happiness in transcendental loving service to the Lord.",
        question: "What is the ultimate achievement of the self-controlled yogi?",
        answer: "Freedom from material contamination and highest happiness in transcendental loving service.",
        concept: "Verse 6.28 - Ultimate Achievement of Yogi"
    },
    { 
        shloka: "सर्वभूतस्थमात्मानं सर्वभूतानि चात्मनि | ईक्षते योगयुक्तात्मा सर्वत्र समदर्शनः || 6-29",
        meaning: "A true yogi observes Me in all beings and also sees every being in Me. Indeed, the self-realized person sees Me everywhere.",
        question: "What vision characterizes a true yogi?",
        answer: "Seeing Krishna in all beings and all beings in Krishna - seeing the Supreme everywhere.",
        concept: "Verse 6.29 - Vision of the True Yogi"
    },
    { 
        shloka: "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति | तस्याहं न प्रणश्यामि स च मे न प्रणश्यति || 6-30",
        meaning: "For one who sees Me everywhere and sees everything in Me, I am never lost, nor is he ever lost to Me.",
        question: "What is the eternal relationship with one who sees Krishna everywhere?",
        answer: "Such a person is never lost to Krishna, nor is Krishna ever lost to them - eternal reciprocal relationship.",
        concept: "Verse 6.30 - Eternal Reciprocal Relationship"
    },
    { 
        shloka: "सर्वभूतस्थितं यो मां भजत्येकत्वमास्थितः | सर्वथा वर्तमानोऽपि स योगी मयि वर्तते || 6-31",
        meaning: "Such a yogi, who engages in the worshipful service of the Supersoul, knowing that I and the Supersoul are one, remains always in Me in all circumstances.",
        question: "How does a yogi remain always in Krishna?",
        answer: "By worshiping the Supersoul, knowing Krishna and Supersoul are one, remaining in that consciousness always.",
        concept: "Verse 6.31 - Constant Consciousness of Krishna"
    },
    { 
        shloka: "आत्मौपम्येन सर्वत्र समं पश्यति योऽर्जुन | सुखं वा यदि वा दुःखं स योगी परमो मतः || 6-32",
        meaning: "He is a perfect yogi who, by comparison to his own self, sees the true equality of all beings, both in their happiness and distress, O Arjuna!",
        question: "Who is considered the perfect yogi?",
        answer: "One who sees all beings as equal to oneself, both in happiness and distress.",
        concept: "Verse 6.32 - The Perfect Yogi"
    },
    { 
        shloka: "अर्जुन उवाच | योऽयं योगस्त्वया प्रोक्तः साम्येन मधुसूदन | एतस्याहं न पश्यामि चञ्चलत्वात्स्थितिं स्थिराम् || 6-33",
        meaning: "Arjuna said: O Madhusudana, the system of yoga which You have summarized appears impractical and unendurable to me, for the mind is restless and unsteady.",
        question: "What difficulty does Arjuna express about yoga practice?",
        answer: "He finds yoga impractical because the mind is too restless and unsteady to maintain stable meditation.",
        concept: "Verse 6.33 - Arjuna's Difficulty with Yoga"
    },
    { 
        shloka: "चञ्चलं हि मनः कृष्ण प्रमाथि बलवद्दृढम् | तस्याहं निग्रहं मन्ये वायोरिव सुदुष्करम् || 6-34",
        meaning: "For the mind is restless, turbulent, obstinate and very strong, O Krishna, and to subdue it, I think, is more difficult than controlling the wind.",
        question: "What four qualities of the mind make it difficult to control?",
        answer: "Restless, turbulent, obstinate, and very strong - making control harder than controlling wind.",
        concept: "Verse 6.34 - Difficulty of Controlling Mind"
    },
    { 
        shloka: "श्रीभगवानुवाच | असंशयं महाबाहो मनो दुर्निग्रहं चलम् | अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते || 6-35",
        meaning: "The Supreme Lord said: O mighty-armed son of Kunti, it is undoubtedly very difficult to curb the restless mind, but it is possible by constant practice and by detachment.",
        question: "What two methods make mind control possible?",
        answer: "Constant practice (abhyasa) and detachment (vairagya) make controlling the restless mind possible.",
        concept: "Verse 6.35 - Methods for Mind Control"
    },
    { 
        shloka: "असंयतात्मना योगो दुष्प्राप इति मे मतिः | वश्यात्मना तु यतता शक्योऽवाप्तुमुपायतः || 6-36",
        meaning: "For one whose mind is unbridled, self-realization is difficult work. But he whose mind is controlled and who strives by right means is assured of success. That is My opinion.",
        question: "What is Krishna's opinion about success in yoga?",
        answer: "With uncontrolled mind, success is difficult; with controlled mind and right means, success is assured.",
        concept: "Verse 6.36 - Assurance of Yoga Success"
    },
    { 
        shloka: "अर्जुन उवाच | अयतिः श्रद्धयोपेतो योगाच्चलितमानसः | अप्राप्य योगसंसिद्धिं कां गतिं कृष्ण गच्छति || 6-37",
        meaning: "Arjuna said: What is the destination of the man of faith who does not persevere, who in the beginning takes to the process of self-realization but who later desists due to worldly-mindedness and thus does not attain perfection in mysticism?",
        question: "What concern does Arjuna express about unsuccessful yogis?",
        answer: "He asks about the destination of one who begins yoga with faith but fails to complete it due to worldly distractions.",
        concept: "Verse 6.37 - Fate of Unsuccessful Yogi"
    },
    { 
        shloka: "कच्चिन्नोभयविभ्रष्टश्छिन्नाभ्रमिव नश्यति | अप्रतिष्ठो महाबाहो विमूढो ब्रह्मणः पथि || 6-38",
        meaning: "O mighty-armed Krishna, does not such a man, being deviated from the path of Transcendence, perish like a riven cloud, with no position in any sphere?",
        question: "What analogy does Arjuna use for the unsuccessful yogi?",
        answer: "Like a scattered cloud that perishes without position - suggesting complete destruction.",
        concept: "Verse 6.38 - Cloud Analogy for Failed Yogi"
    },
    { 
        shloka: "एतन्मे संशयं कृष्ण छेत्तुमर्हस्यशेषतः | त्वदन्यः संशयस्यास्य छेत्ता न ह्युपपद्यते || 6-39",
        meaning: "This is my doubt, O Krishna, and I ask You to dispel it completely. But for You, no one is to be found who can destroy this doubt.",
        question: "What does Arjuna acknowledge about Krishna's position?",
        answer: "Only Krishna can completely dispel this doubt; no one else is capable of doing so.",
        concept: "Verse 6.39 - Only Krishna Can Disperse Doubt"
    },
    { 
        shloka: "श्रीभगवानुवाच | पार्थ नैवेह नामुत्र विनाशस्तस्य विद्यते | न हि कल्याणकृत्कश्चिद्दुर्गतिं तात गच्छति || 6-40",
        meaning: "The Supreme Lord said: Son of Pritha, a transcendentalist engaged in auspicious activities does not meet with destruction either in this world or in the spiritual world; one who does good, My friend, is never overcome by evil.",
        question: "What assurance does Krishna give about spiritual aspirants?",
        answer: "They never meet destruction in this world or next; those doing good are never overcome by evil.",
        concept: "Verse 6.40 - Assurance for Spiritual Aspirants"
    },
    { 
        shloka: "प्राप्य पुण्यकृतां लोकानुषित्वा शाश्वतीः समाः | शुचीनां श्रीमतां गेहे योगभ्रष्टोऽभिजायते || 6-41",
        meaning: "The unsuccessful yogi, after many, many years of enjoyment on the planets of the pious living entities, is born into a family of righteous people, or into a family of rich aristocracy.",
        question: "Where does the unsuccessful yogi take birth?",
        answer: "In families of righteous people or wealthy aristocracy after enjoying heavenly planets.",
        concept: "Verse 6.41 - Next Birth of Unsuccessful Yogi"
    },
    { 
        shloka: "अथवा योगिनामेव कुले भवति धीमताम् | एतद्धि दुर्लभतरं लोके जन्म यदीदृशम् || 6-42",
        meaning: "Or he takes his birth in a family of transcendentalists who are surely great in wisdom. Verily, such a birth is rare in this world.",
        question: "What is the rare and fortunate birth for an unsuccessful yogi?",
        answer: "Birth in a family of wise transcendentalists - which is very rare in this world.",
        concept: "Verse 6.42 - Rare Birth in Transcendental Family"
    },
    { 
        shloka: "तत्र तं बुद्धिसंयोगं लभते पौर्वदेहिकम् | यतते च ततो भूयः संसिद्धौ कुरुनन्दन || 6-43",
        meaning: "On taking such a birth, he revives the divine consciousness of his previous life, and he again tries to make further progress in order to achieve complete success, O son of Kuru.",
        question: "What advantage does the unsuccessful yogi have in the next life?",
        answer: "They revive their previous spiritual consciousness and continue their progress toward perfection.",
        concept: "Verse 6.43 - Spiritual Continuity"
    },
    { 
        shloka: "पूर्वाभ्यासेन तेनैव ह्रियते ह्यवशोऽपि सः | जिज्ञासुरपि योगस्य शब्दब्रह्मातिवर्तते || 6-44",
        meaning: "By virtue of the divine consciousness of his previous life, he automatically becomes attracted to the yogic principles—even without seeking them. Such an inquisitive transcendentalist, striving for yoga, stands always above the ritualistic principles of the scriptures.",
        question: "What happens automatically to one with previous spiritual practice?",
        answer: "They automatically become attracted to yogic principles and transcend mere ritualistic scripture study.",
        concept: "Verse 6.44 - Automatic Attraction to Yoga"
    },
    { 
        shloka: "प्रयत्नाद्यतमानस्तु योगी संशुद्धकिल्बिषः | अनेकजन्मसंसिद्धस्ततो याति परां गतिम् || 6-45",
        meaning: "And when the yogi engages himself with sincere endeavor in making further progress, being washed of all contaminations, then ultimately, achieving perfection after many, many births of practice, he attains the supreme goal.",
        question: "What is the ultimate achievement after many births of practice?",
        answer: "After many births of sincere practice and purification, one attains the supreme spiritual goal.",
        concept: "Verse 6.45 - Ultimate Achievement After Many Births"
    },
    { 
        shloka: "तपस्विभ्योऽधिको योगी ज्ञानिभ्योऽपि मतोऽधिकः | कर्मिभ्यश्चाधिको योगी तस्माद्योगी भवार्जुन || 6-46",
        meaning: "A yogi is greater than the ascetic, greater than the empiricist and greater than the fruitive worker. Therefore, O Arjuna, in all circumstances, be a yogi.",
        question: "How does Krishna compare yogis with other spiritual practitioners?",
        answer: "Yogis are greater than ascetics, empiricists, and fruitive workers - therefore always be a yogi.",
        concept: "Verse 6.46 - Superiority of Yogis"
    },
    { 
        shloka: "योगिनामपि सर्वेषां मद्गतेनान्तरात्मना | श्रद्धावान्भजते यो मां स मे युक्ततमो मतः || 6-47",
        meaning: "And of all yogis, the one with great faith who always abides in Me, thinks of Me within himself, and renders transcendental loving service to Me—he is the most intimately united with Me in yoga and is the highest of all. That is My opinion.",
        question: "Who is considered the highest of all yogis?",
        answer: "One with great faith who always abides in Krishna, thinks of Him, and renders loving service - most intimately united.",
        concept: "Verse 6.47 - The Highest Yogi"
    }
];