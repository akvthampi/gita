// --- bg_chap_02.js ---
const chapterMetadata = {
    title: "Chapter 2: The Yoga of Knowledge",
    info: "Sankhya Yoga - The Yoga of Analytical Knowledge (72 verses)"
};
const flashcards = [
    { 
        shloka: "सञ्जय उवाच | तं तथा कृपयाविष्टमश्रुपूर्णाकुलेक्षणम् | विषीदन्तमिदं वाक्यमुवाच मधुसूदनः || 2-1",
        meaning: "Sanjaya said: To him who was thus overcome with compassion, whose eyes were filled with tears and troubled, and who was much depressed in mind, Madhusudana (Krishna) spoke these words.",
        question: "How does Sanjaya describe Arjuna's emotional state at the beginning of Chapter 2?",
        answer: "Arjuna is described as overcome with compassion, eyes filled with tears and troubled, and deeply depressed in mind - showing complete emotional breakdown.",
        concept: "Verse 2.1 - Arjuna's Emotional State"
    },
    { 
        shloka: "श्रीभगवानुवाच | कुतस्त्वा कश्मलमिदं विषमे समुपस्थितम् | अनार्यजुष्टमस्वर्ग्यमकीर्तिकरमर्जुन || 2-2",
        meaning: "The Supreme Lord said: Whence has this dejection come upon you at this inconvenient time, O Arjuna? It does not befit an Aryan, nor does it lead to heaven; it causes disgrace, O Arjuna.",
        question: "What three negative consequences does Krishna mention about Arjuna's dejection?",
        answer: "Krishna says Arjuna's dejection is: 1) Unbefitting of an Aryan, 2) Does not lead to heaven, 3) Causes disgrace and dishonor.",
        concept: "Verse 2.2 - Krishna's Initial Response"
    },
    { 
        shloka: "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते | क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप || 2-3",
        meaning: "O son of Pritha, do not yield to this unmanliness. It does not become you. Give up such petty weakness of heart and arise, O scorcher of enemies.",
        question: "What three things does Krishna tell Arjuna to do in this verse?",
        answer: "Krishna tells Arjuna: 1) Not to yield to unmanliness, 2) Give up weakness of heart, 3) Arise and face his duty as a warrior.",
        concept: "Verse 2.3 - Call to Action"
    },
    { 
        shloka: "अर्जुन उवाच | कथं भीष्ममहं सङ्ख्ये द्रोणं च मधुसूदन | इषुभिः प्रतियोत्स्यामि पूजार्हावरिसूदन || 2-4",
        meaning: "Arjuna said: O Madhusudana, how can I fight against Bhishma and Drona with arrows in battle, when they are worthy of worship, O destroyer of enemies?",
        question: "Which two specific individuals does Arjuna mention as being too worthy to fight against?",
        answer: "Arjuna specifically mentions Bhishma and Drona as being worthy of worship and therefore impossible for him to fight against.",
        concept: "Verse 2.4 - Arjuna's Specific Concerns"
    },
    { 
        shloka: "गुरूनहत्वा हि महानुभावान् श्रेयो भोक्तुं भैक्ष्यमपीह लोके | हत्वार्थकामांस्तु गुरूनिहैव भुञ्जीय भोगान् रुधिरप्रदिग्धान् || 2-5",
        meaning: "It is better to live in this world by begging than to live at the cost of the lives of great souls who are my teachers. Even though they are avaricious, they are still superiors. If they are killed, our spoils will be tainted with blood.",
        question: "What alternative does Arjuna propose rather than killing his teachers?",
        answer: "Arjuna says it would be better to live by begging than to kill his great teachers and enjoy blood-tainted spoils.",
        concept: "Verse 2.5 - The Better Alternative"
    },
    { 
        shloka: "न चैतद्विद्मः कतरन्नो गरीयो यद्वा जयेम यदि वा नो जयेयुः | यानेव हत्वा न जिजीविषामस्तेऽवस्थिताः प्रमुखे धार्तराष्ट्राः || 2-6",
        meaning: "Nor do we know which is better for us—whether we should conquer them or they should conquer us. The sons of Dhritarashtra, after killing whom we would not care to live, are standing before us in battle.",
        question: "What dilemma does Arjuna express about the outcome of the battle?",
        answer: "Arjuna says he doesn't know which would be better - their victory or defeat - since killing the Kauravas would make life unbearable.",
        concept: "Verse 2.6 - The Victory Dilemma"
    },
    { 
        shloka: "कार्पण्यदोषोपहतस्वभावः पृच्छामि त्वां धर्मसम्मूढचेताः | यच्छ्रेयः स्यान्निश्चितं ब्रूहि तन्मे शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम् || 2-7",
        meaning: "My nature is afflicted with the fault of miserly weakness, and my mind is confused about duty. I ask You, please tell me decisively what is good for me. I am Your disciple. Please instruct me, for I have taken refuge in You.",
        question: "What four requests does Arjuna make to Krishna in this verse?",
        answer: "Arjuna requests: 1) Tell me what is truly good, 2) Do so decisively, 3) I am your disciple, 4) Please instruct me as I surrender to you.",
        concept: "Verse 2.7 - Arjuna's Surrender"
    },
    { 
        shloka: "न हि प्रपश्यामि ममापनुद्याद्यच्छोकमुच्छोषणमिन्द्रियाणाम् | अवाप्य भूमावसपत्नमृद्धं राज्यं सुराणामपि चाधिपत्यम् || 2-8",
        meaning: "I do not see that it would remove this sorrow that burns up my senses, even if I should attain unrivalled and prosperous dominion over the earth or lordship over the gods.",
        question: "What does Arjuna say won't remove his sorrow, no matter how great the achievement?",
        answer: "Arjuna says even attaining unrivaled earthly dominion or lordship over the gods would not remove the sorrow burning his senses.",
        concept: "Verse 2.8 - Inadequacy of Material Solutions"
    },
    { 
        shloka: "सञ्जय उवाच | एवमुक्त्वा हृषीकेशं गुडाकेशः परन्तप | न योत्स्य इति गोविन्दमुक्त्वा तूष्णीं बभूव ह || 2-9",
        meaning: "Sanjaya said: Having spoken thus to Hrishikesha, Gudakesha, the terror of enemies, said to Govinda, 'I shall not fight,' and became silent.",
        question: "What final declaration does Arjuna make before falling silent?",
        answer: "Arjuna declares 'I shall not fight' to Krishna and then becomes completely silent, showing his firm resolution.",
        concept: "Verse 2.9 - Arjuna's Final Declaration"
    },
    { 
        shloka: "तमुवाच हृषीकेशः प्रहसन्निव भारत | सेनयोरुभयोर्मध्ये विषीदन्तमिदं वचः || 2-10",
        meaning: "O descendant of Bharata, at that time, Hrishikesha, smiling as it were, spoke the following words to the grief-stricken Arjuna, who was in the midst of the two armies.",
        question: "How does Krishna react to Arjuna's grief-stricken state and declaration?",
        answer: "Krishna smiles and begins speaking to the grief-stricken Arjuna, showing his transcendental position and readiness to impart wisdom.",
        concept: "Verse 2.10 - Krishna's Smiling Response"
    },
    { 
        shloka: "श्रीभगवानुवाच | अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे | गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः || 2-11",
        meaning: "The Supreme Lord said: While you speak words of wisdom, you are mourning for what is not worthy of grief. The wise lament neither for the living nor for the dead.",
        question: "What contradiction does Krishna point out in Arjuna's behavior?",
        answer: "Krishna points out that while Arjuna speaks wise words, he mourns for what is not worthy of grief, unlike truly wise people.",
        concept: "Verse 2.11 - The Wise Don't Lament"
    },
    { 
        shloka: "न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः | न चैव न भविष्यामः सर्वे वयमतः परम् || 2-12",
        meaning: "Never was there a time when I did not exist, nor you, nor all these kings; nor in the future shall any of us cease to be.",
        question: "What eternal truth about existence does Krishna reveal in this verse?",
        answer: "Krishna reveals that neither He, nor Arjuna, nor the kings ever did not exist in the past, nor will they cease to exist in the future.",
        concept: "Verse 2.12 - Eternal Existence of Soul"
    },
    { 
        shloka: "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा | तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति || 2-13",
        meaning: "As the embodied soul continuously passes, in this body, from childhood to youth to old age, the soul similarly passes into another body at death. A sober person is not bewildered by such a change.",
        question: "What analogy does Krishna use to explain the soul's transition between bodies?",
        answer: "Krishna uses the analogy of the soul passing through childhood, youth, and old age in one body to explain its transition to another body at death.",
        concept: "Verse 2.13 - Body Changes vs Soul Continuity"
    },
    { 
        shloka: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः | आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत || 2-14",
        meaning: "O son of Kunti, the contacts of the senses with their objects give rise to cold and heat, pleasure and pain. They come and go and are impermanent. Endure them, O descendant of Bharata.",
        question: "What should one do with the temporary sensations caused by sense contact?",
        answer: "One should endure the temporary sensations of cold-heat and pleasure-pain that come from sense contact, recognizing their impermanent nature.",
        concept: "Verse 2.14 - Enduring Temporary Sensations"
    },
    { 
        shloka: "यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ | समदुःखसुखं धीरं सोऽमृतत्वाय कल्पते || 2-15",
        meaning: "O best among men, the person who is not disturbed by happiness and distress and remains steady in both is certainly eligible for liberation.",
        question: "What qualities make a person eligible for liberation according to this verse?",
        answer: "Being undisturbed by happiness and distress, remaining steady in both, makes one eligible for liberation.",
        concept: "Verse 2.15 - Qualification for Liberation"
    },
    { 
        shloka: "नासतो विद्यते भावो नाभावो विद्यते सतः | उभयोरपि दृष्टोऽन्तस्त्वनयोस्तत्त्वदर्शिभिः || 2-16",
        meaning: "Those who are seers of the truth have concluded that the non-existent [the material body] has no endurance and the eternal [the soul] does not change. This they have concluded by studying the nature of both.",
        question: "What fundamental distinction do truth-seers make between the material and spiritual?",
        answer: "Truth-seers conclude the material body is temporary and non-enduring, while the soul is eternal and unchanging.",
        concept: "Verse 2.16 - Real vs Unreal"
    },
    { 
        shloka: "अविनाशि तु तद्विद्धि येन सर्वमिदं ततम् | विनाशमव्ययस्यास्य न कश्चित्कर्तुमर्हति || 2-17",
        meaning: "Know that which pervades the entire body is indestructible. No one is able to destroy the imperishable soul.",
        question: "What is the nature of the soul that pervades the body?",
        answer: "The soul that pervades the entire body is indestructible, imperishable, and cannot be destroyed by anyone.",
        concept: "Verse 2.17 - Indestructible Soul"
    },
    { 
        shloka: "अन्तवन्त इमे देहा नित्यस्योक्ताः शरीरिणः | अनाशिनोऽप्रमेयस्य तस्माद्युध्यस्व भारत || 2-18",
        meaning: "The material bodies of the eternal, imperishable and incomprehensible soul are said to be perishable. Therefore fight, O descendant of Bharata.",
        question: "What conclusion does Krishna draw about fighting based on the soul's nature?",
        answer: "Since only the material bodies are perishable while the soul is eternal, Krishna concludes Arjuna should fight.",
        concept: "Verse 2.18 - Conclusion to Fight"
    },
    { 
        shloka: "य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम् | उभौ तौ न विजानीतो नायं हन्ति न हन्यते || 2-19",
        meaning: "He who thinks that the soul kills and he who thinks that it is killed—both are ignorant. The soul neither kills nor is killed.",
        question: "What misconception do people have about the soul in relation to killing?",
        answer: "People mistakenly think the soul kills or is killed, but in reality, the soul neither kills nor can be killed.",
        concept: "Verse 2.19 - Soul Neither Kills Nor is Killed"
    },
    { 
        shloka: "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः | अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे || 2-20",
        meaning: "The soul is never born nor dies at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.",
        question: "What eight qualities of the soul does Krishna describe in this verse?",
        answer: "The soul is: 1) Unborn, 2) Never dies, 3) Uncreated, 4) Eternal, 5) Ever-existing, 6) Primeval, 7) Not slain with body, 8) Permanent.",
        concept: "Verse 2.20 - Eternal Qualities of Soul"
    },
    { 
        shloka: "वेदाविनाशिनं नित्यं य एनमजमव्ययम् | कथं स पुरुषः पार्थ कं घातयति हन्ति कम् || 2-21",
        meaning: "O Partha, how can a person who knows that the soul is indestructible, eternal, unborn, and immutable kill anyone or cause anyone to kill?",
        question: "What rhetorical question does Krishna ask about one who understands the soul's nature?",
        answer: "Krishna asks how someone who knows the soul's eternal nature could possibly kill or cause killing.",
        concept: "Verse 2.21 - Impossibility of Killing Soul"
    },
    { 
        shloka: "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि | तथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही || 2-22",
        meaning: "As a person puts on new garments, giving up old ones, similarly, the soul accepts new material bodies, giving up the old and useless ones.",
        question: "What famous analogy does Krishna use to explain reincarnation?",
        answer: "Krishna uses the analogy of changing old clothes for new ones to explain how the soul changes bodies through reincarnation.",
        concept: "Verse 2.22 - Changing Bodies Like Clothes"
    },
    { 
        shloka: "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः | न चैनं क्लेदयन्त्यापो न शोषयति मारुतः || 2-23",
        meaning: "The soul can never be cut into pieces by any weapon, nor can it be burned by fire, nor moistened by water, nor withered by the wind.",
        question: "What four elements cannot affect the soul according to this verse?",
        answer: "Weapons cannot cut it, fire cannot burn it, water cannot moisten it, and wind cannot wither the soul.",
        concept: "Verse 2.23 - Soul's Invulnerability"
    },
    { 
        shloka: "अच्छेद्योऽयमदाह्योऽयमक्लेद्योऽशोष्य एव च | नित्यः सर्वगतः स्थाणुरचलोऽयं सनातनः || 2-24",
        meaning: "This individual soul is unbreakable and insoluble, and can be neither burned nor dried. It is everlasting, present everywhere, unchangeable, immovable, and eternally the same.",
        question: "What seven qualities of the soul are described in this verse?",
        answer: "The soul is: 1) Unbreakable, 2) Insoluble, 3) Unburnable, 4) Everlasting, 5) All-pervading, 6) Unchangeable, 7) Eternal.",
        concept: "Verse 2.24 - Soul's Eternal Qualities"
    },
    { 
        shloka: "अव्यक्तोऽयमचिन्त्योऽयमविकार्योऽयमुच्यते | तस्मादेवं विदित्वैनं नानुशोचितुमर्हसि || 2-25",
        meaning: "It is said that the soul is invisible, inconceivable, and immutable. Knowing this, you should not grieve for the body.",
        question: "What three qualities of the soul should prevent grief according to Krishna?",
        answer: "Knowing the soul is invisible, inconceivable, and immutable should prevent grief over the body.",
        concept: "Verse 2.25 - No Reason for Grief"
    },
    { 
        shloka: "अथ चैनं नित्यजातं नित्यं वा मन्यसे मृतम् | तथापि त्वं महाबाहो नैवं शोचितुमर्हसि || 2-26",
        meaning: "If, however, you think that the soul is perpetually born and always dies, still you have no reason to lament, O mighty-armed.",
        question: "What alternative perspective does Krishna offer even if Arjuna believes in repeated birth and death?",
        answer: "Even if Arjuna believes in perpetual birth and death, he still has no reason to lament since death is inevitable for the born.",
        concept: "Verse 2.26 - No Lamentation in Any Case"
    },
    { 
        shloka: "जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च | तस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि || 2-27",
        meaning: "For one who has taken birth, death is certain; and for one who is dead, birth is certain. Therefore, in the unavoidable discharge of your duty, you should not lament.",
        question: "What inevitable cycle does Krishna describe that makes lamentation pointless?",
        answer: "Death is certain for the born, and birth is certain for the dead - this inevitable cycle makes lamentation pointless.",
        concept: "Verse 2.27 - Inevitable Cycle of Birth and Death"
    },
    { 
        shloka: "अव्यक्तादीनि भूतानि व्यक्तमध्यानि भारत | अव्यक्तनिधनान्येव तत्र का परिदेवना || 2-28",
        meaning: "All created beings are unmanifest in their beginning, manifest in their interim state, and unmanifest again when they are annihilated. So what need is there for lamentation?",
        question: "What three states of existence make lamentation unnecessary?",
        answer: "Beings are: 1) Unmanifest before birth, 2) Manifest during life, 3) Unmanifest after death - making lamentation pointless.",
        concept: "Verse 2.28 - Three States of Existence"
    },
    { 
        shloka: "आश्चर्यवत्पश्यति कश्चिदेनमाश्चर्यवद्वदति तथैव चान्यः | आश्चर्यवच्चैनमन्यः शृणोति श्रुत्वाप्येनं वेद न चैव कश्चित् || 2-29",
        meaning: "Some look upon the soul as amazing, some describe it as amazing, and some hear of it as amazing, while others, even after hearing about it, cannot understand it at all.",
        question: "How do different people react to knowledge about the soul?",
        answer: "Some see it as amazing, some describe it as amazing, some hear it as amazing, while others cannot understand it even after hearing.",
        concept: "Verse 2.29 - Various Reactions to Soul Knowledge"
    },
    { 
        shloka: "देही नित्यमवध्योऽयं देहे सर्वस्य भारत | तस्मात्सर्वाणि भूतानि न त्वं शोचितुमर्हसि || 2-30",
        meaning: "O descendant of Bharata, the soul that dwells within the body of everyone is eternal and can never be slain. Therefore you should not grieve for any creature.",
        question: "What conclusion does Krishna draw about grief for any living being?",
        answer: "Since the soul in every body is eternal and cannot be slain, there is no reason to grieve for any creature.",
        concept: "Verse 2.30 - No Grief for Any Being"
    },
    { 
        shloka: "स्वधर्ममपि चावेक्ष्य न विकम्पितुमर्हसि | धर्म्याद्धि युद्धाच्छ्रेयोऽन्यत्क्षत्रियस्य न विद्यते || 2-31",
        meaning: "Considering your specific duty as a kshatriya, you should know that there is no better engagement for you than fighting for religious principles; and so there is no need for hesitation.",
        question: "What does Krishna say is the best engagement for a kshatriya like Arjuna?",
        answer: "For a kshatriya, fighting for religious principles is the best engagement, and there should be no hesitation about it.",
        concept: "Verse 2.31 - Kshatriya's Duty"
    },
    { 
        shloka: "यदृच्छया चोपपन्नं स्वर्गद्वारमपावृतम् | सुखिनः क्षत्रियाः पार्थ लभन्ते युद्धमीदृशम् || 2-32",
        meaning: "O Partha, happy are the kshatriyas to whom such fighting opportunities come unsought, opening for them the doors of the heavenly planets.",
        question: "What opportunity does Krishna say kshatriyas should be happy about?",
        answer: "Kshatriyas should be happy when fighting opportunities come unsought, as they open the doors to heavenly planets.",
        concept: "Verse 2.32 - Happy Opportunity for Kshatriyas"
    },
    { 
        shloka: "अथ चेत्त्वमिमं धर्म्यं सङ्ग्रामं न करिष्यसि | ततः स्वधर्मं कीर्तिं च हित्वा पापमवाप्स्यसि || 2-33",
        meaning: "If, however, you do not fight this religious war, then you will certainly incur sins for neglecting your duties and thus lose your reputation as a fighter.",
        question: "What negative consequences will Arjuna face if he refuses to fight?",
        answer: "He will incur sins for neglecting duty and lose his reputation as a warrior.",
        concept: "Verse 2.33 - Consequences of Not Fighting"
    },
    { 
        shloka: "अकीर्तिं चापि भूतानि कथयिष्यन्ति तेऽव्ययाम् | सम्भावितस्य चाकीर्तिर्मरणादतिरिच्यते || 2-34",
        meaning: "People will always speak of your infamy, and for one who has been honored, dishonor is worse than death.",
        question: "Why is dishonor worse than death for an honored person like Arjuna?",
        answer: "For an honored person, enduring permanent infamy and dishonor is worse than death itself.",
        concept: "Verse 2.34 - Dishonor Worse Than Death"
    },
    { 
        shloka: "भयाद्रणादुपरतं मंस्यन्ते त्वां महारथाः | येषां च त्वं बहुमतो भूत्वा यास्यसि लाघवम् || 2-35",
        meaning: "The great generals who have highly esteemed your name and fame will think that you have left the battlefield out of fear, and thus they will consider you insignificant.",
        question: "How will other great warriors perceive Arjuna if he leaves the battlefield?",
        answer: "They will think he left out of fear and will consider him insignificant, despite his previous great reputation.",
        concept: "Verse 2.35 - Perception of Fear"
    },
    { 
        shloka: "अवाच्यवादांश्च बहून्वदिष्यन्ति तवाहिताः | निन्दन्तस्तव सामर्थ्यं ततो दुःखतरं नु किम || 2-36",
        meaning: "Your enemies will describe you in many unkind words and scorn your ability. What could be more painful than that?",
        question: "What painful experience does Krishna describe that Arjuna would face?",
        answer: "Enemies would speak unkind words and scorn his abilities, which would be extremely painful for a warrior of his stature.",
        concept: "Verse 2.36 - Pain of Enemy Scorn"
    },
    { 
        shloka: "हतो वा प्राप्स्यसि स्वर्गं जित्वा वा भोक्ष्यसे महीम् | तस्मादुत्तिष्ठ कौन्तेय युद्धाय कृतनिश्चयः || 2-37",
        meaning: "O son of Kunti, either you will be killed on the battlefield and attain the heavenly planets, or you will conquer and enjoy the earthly kingdom. Therefore, get up and fight with determination.",
        question: "What two positive outcomes does Krishna present for Arjuna in either case?",
        answer: "If killed, he attains heaven; if victorious, he enjoys earthly kingdom - both are favorable outcomes.",
        concept: "Verse 2.37 - Favorable Outcomes Either Way"
    },
    { 
        shloka: "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ | ततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि || 2-38",
        meaning: "Do thou fight for the sake of fighting, without considering happiness or distress, loss or gain, victory or defeat—and, by so doing, you shall never incur sin.",
        question: "What mental attitude should Arjuna adopt while fighting to avoid sin?",
        answer: "He should fight without consideration of happiness-distress, loss-gain, or victory-defeat - treating them equally.",
        concept: "Verse 2.38 - Equanimity in Fighting"
    },
    { 
        shloka: "एषा तेऽभिहिता साङ्ख्ये बुद्धिर्योगे त्विमां शृणु | बुद्ध्या युक्तो यया पार्थ कर्मबन्धं प्रहास्यसि || 2-39",
        meaning: "Thus far I have described this knowledge to you through analytical study. Now listen as I explain it in terms of working without fruitive results. O son of Pritha, when you act in such knowledge you can free yourself from the bondage of works.",
        question: "What two types of knowledge has Krishna described so far?",
        answer: "Krishna has described: 1) Sankhya (analytical knowledge), and now 2) Yoga (working without fruitive results).",
        concept: "Verse 2.39 - Two Types of Knowledge"
    },
    { 
        shloka: "नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते | स्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात् || 2-40",
        meaning: "In this endeavor there is no loss or diminution, and a little advancement on this path can protect one from the most dangerous type of fear.",
        question: "What are the advantages of practicing this yoga even to a small extent?",
        answer: "There is no loss, no diminution, and even a little practice protects from the most dangerous fear.",
        concept: "Verse 2.40 - Advantages of Yoga Practice"
    },
    { 
        shloka: "व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन | बहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम् || 2-41",
        meaning: "Those who are on this path are resolute in purpose, and their aim is one. O beloved child of the Kurus, the intelligence of those who are irresolute is many-branched.",
        question: "What is the difference between resolute and irresolute intelligence?",
        answer: "Resolute intelligence has one aim, while irresolute intelligence has many branches and distractions.",
        concept: "Verse 2.41 - Resolute vs Irresolute Intelligence"
    },
    { 
        shloka: "यामिमां पुष्पितां वाचं प्रवदन्त्यविपश्चितः | वेदवादरताः पार्थ नान्यदस्तीति वादिनः || 2-42",
        meaning: "Men of small knowledge are very much attached to the flowery words of the Vedas, which recommend various fruitive activities for elevation to heavenly planets, resultant good birth, power, and so forth.",
        question: "What do men of small knowledge become attached to according to Krishna?",
        answer: "They become attached to the flowery words of the Vedas that promise heavenly pleasures and material benefits.",
        concept: "Verse 2.42 - Attachment to Vedic Flowery Words"
    },
    { 
        shloka: "कामात्मानः स्वर्गपरा जन्मकर्मफलप्रदाम् | क्रियाविशेषबहुलां भोगैश्वर्यगतिं प्रति || 2-43",
        meaning: "Being desirous of sense gratification and opulent life, they are attracted to such things, which are said to result in birth and death.",
        question: "What desires motivate those attached to flowery Vedic words?",
        answer: "They are motivated by desires for sense gratification, opulent life, and the results that lead to repeated birth and death.",
        concept: "Verse 2.43 - Desires for Sense Gratification"
    },
    { 
        shloka: "भोगैश्वर्यप्रसक्तानां तयापहृतचेतसाम् | व्यवसायात्मिका बुद्धिः समाधौ न विधीयते || 2-44",
        meaning: "The minds of those who are attached to sense gratification and opulence are carried away by such flowery words, and they are not established in firm determination.",
        question: "What happens to the intelligence of those attached to sense gratification?",
        answer: "Their intelligence is carried away by flowery words and cannot attain firm determination or concentration.",
        concept: "Verse 2.44 - Intelligence Carried Away"
    },
    { 
        shloka: "त्रैगुण्यविषया वेदा निस्त्रैगुण्यो भवार्जुन | निर्द्वन्द्वो नित्यसत्त्वस्थो निर्योगक्षेम आत्मवान् || 2-45",
        meaning: "The Vedas deal with the three modes of material nature. Rise above these three modes, O Arjuna. Be free from all dualities and from all anxieties for gain and safety, and be established in the self.",
        question: "What should Arjuna transcend according to this verse?",
        answer: "He should transcend the three modes of nature, dualities, anxieties for gain and safety, and be established in the self.",
        concept: "Verse 2.45 - Transcending Material Modes"
    },
    { 
        shloka: "यावानर्थ उदपाने सर्वतः संप्लुतोदके | तावान्सर्वेषु वेदेषु ब्राह्मणस्य विजानतः || 2-46",
        meaning: "All purposes served by a small well can at once be served by a great reservoir of water. Similarly, one who knows the purpose of the Vedas can obtain all Vedic knowledge.",
        question: "What analogy does Krishna use to explain the relationship between Vedic knowledge and its purpose?",
        answer: "He uses the analogy of a small well versus a great reservoir - all Vedic purposes are fulfilled when one knows the ultimate purpose.",
        concept: "Verse 2.46 - Well vs Reservoir Analogy"
    },
    { 
        shloka: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन | मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि || 2-47",
        meaning: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.",
        question: "What famous instruction does Krishna give about duty and its results?",
        answer: "Perform your duty but don't claim right to the results. Don't be the cause of results, and don't be attached to inaction.",
        concept: "Verse 2.47 - Famous Karma Yoga Instruction"
    },
    { 
        shloka: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय | सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते || 2-48",
        meaning: "Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity is called yoga.",
        question: "What mental state constitutes yoga according to this verse?",
        answer: "Equanimity in success and failure while performing duty without attachment is called yoga.",
        concept: "Verse 2.48 - Yoga as Equanimity"
    },
    { 
        shloka: "दूरेण ह्यवरं कर्म बुद्धियोगाद्धनञ्जय | बुद्धौ शरणमन्विच्छ कृपणाः फलहेतवः || 2-49",
        meaning: "O Dhananjaya, action with desire for fruitive results is far inferior to action performed with buddhi-yoga (devotion). Therefore, take shelter in buddhi-yoga, for those who work for results are miserable.",
        question: "What two types of workers does Krishna compare?",
        answer: "He compares those working for results (miserable) with those practicing buddhi-yoga (superior).",
        concept: "Verse 2.49 - Buddhi-yoga vs Fruitive Work"
    },
    { 
        shloka: "बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते | तस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम् || 2-50",
        meaning: "One who is engaged in devotional service (buddhi-yoga) can get free from both good and bad reactions in this life. Therefore, strive for yoga, which is the art of all work.",
        question: "What freedom does buddhi-yoga provide from karmic reactions?",
        answer: "It frees one from both good and bad karmic reactions, making work an art rather than bondage.",
        concept: "Verse 2.50 - Freedom from Karmic Reactions"
    },
    { 
        shloka: "कर्मजं बुद्धियुक्ता हि फलं त्यक्त्वा मनीषिणः | जन्मबन्धविनिर्मुक्ताः पदं गच्छन्त्यनामयम् || 2-51",
        meaning: "The wise, engaged in devotional service, take refuge in the Lord and free themselves from the cycle of birth and death by renouncing the fruits of action in the material world. In this way they can attain that state beyond all miseries.",
        question: "What state do the wise attain through devotional service?",
        answer: "They become free from birth and death cycle and attain the state beyond all miseries.",
        concept: "Verse 2.51 - State Beyond Miseries"
    },
    { 
        shloka: "यदा ते मोहकलिलं बुद्धिर्व्यतितरिष्यति | तदा गन्तासि निर्वेदं श्रोतव्यस्य श्रुतस्य च || 2-52",
        meaning: "When your intelligence has passed out of the dense forest of delusion, you shall become indifferent to all that has been heard and all that is to be heard.",
        question: "What happens when intelligence crosses the forest of delusion?",
        answer: "One becomes indifferent to all Vedic revelations, both heard and yet to be heard.",
        concept: "Verse 2.52 - Beyond Vedic Knowledge"
    },
    { 
        shloka: "श्रुतिविप्रतिपन्ना ते यदा स्थास्यति निश्चला | समाधावचला बुद्धिस्तदा योगमवाप्स्यसि || 2-53",
        meaning: "When your mind is no longer disturbed by the flowery language of the Vedas and remains fixed in the trance of self-realization, then you will have attained divine consciousness.",
        question: "When does one attain divine consciousness according to this verse?",
        answer: "When the mind is no longer disturbed by Vedic flowery language and remains fixed in self-realization trance.",
        concept: "Verse 2.53 - Attaining Divine Consciousness"
    },
    { 
        shloka: "अर्जुन उवाच | स्थितप्रज्ञस्य का भाषा समाधिस्थस्य केशव | स्थितधीः किं प्रभाषेत किमासीत व्रजेत किम् || 2-54",
        meaning: "Arjuna said: O Kesava, what is the description of one who is steady in wisdom, merged in trance? How does one of steady intelligence speak, sit, and walk?",
        question: "What four aspects of a wise person does Arjuna inquire about?",
        answer: "Arjuna asks about the description, speech, sitting, and walking of one steady in wisdom.",
        concept: "Verse 2.54 - Arjuna's Inquiry About Wise Person"
    },
    { 
        shloka: "श्रीभगवानुवाच | प्रजहाति यदा कामान्सर्वान्पार्थ मनोगतान् | आत्मन्येवात्मना तुष्टः स्थितप्रज्ञस्तदोच्यते || 2-55",
        meaning: "The Supreme Lord said: O Partha, when one gives up all varieties of desire for sense gratification, which arise from mental concoction, and when one's mind finds satisfaction in the self alone, then one is said to be in pure transcendental consciousness.",
        question: "When is a person said to have steady wisdom?",
        answer: "When one gives up all mental desires for sense gratification and finds satisfaction in the self alone.",
        concept: "Verse 2.55 - Definition of Steady Wisdom"
    },
    { 
        shloka: "दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः | वीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते || 2-56",
        meaning: "One who is not disturbed in mind even amidst the threefold miseries or elated when there is happiness, and who is free from attachment, fear, and anger, is called a sage of steady mind.",
        question: "What six qualities define a sage of steady mind?",
        answer: "1) Undisturbed in miseries, 2) Not elated in happiness, 3) Free from attachment, 4) Free from fear, 5) Free from anger, 6) Steady mind.",
        concept: "Verse 2.56 - Qualities of Steady Sage"
    },
    { 
        shloka: "यः सर्वत्रानभिस्नेहस्तत्तत्प्राप्य शुभाशुभम् | नाभिनन्दति न द्वेष्टि तस्य प्रज्ञा प्रतिष्ठिता || 2-57",
        meaning: "One who is without attachment anywhere, who neither rejoices nor hates upon obtaining good or evil, has his intelligence firmly set.",
        question: "How does a person with firm intelligence react to good and evil?",
        answer: "They neither rejoice nor hate when obtaining good or evil, remaining equipoised in all circumstances.",
        concept: "Verse 2.57 - Equipoise in Good and Evil"
    },
    { 
        shloka: "यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः | इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता || 2-58",
        meaning: "When one can withdraw the senses from sense objects, as the tortoise draws its limbs within the shell, his intelligence is firmly set.",
        question: "What famous analogy describes sense control for one with firm intelligence?",
        answer: "The tortoise withdrawing its limbs into its shell - similarly withdrawing senses from sense objects.",
        concept: "Verse 2.58 - Tortoise Analogy for Sense Control"
    },
    { 
        shloka: "विषया विनिवर्तन्ते निराहारस्य देहिनः | रसवर्जं रसोऽप्यस्य परं दृष्ट्वा निवर्तते || 2-59",
        meaning: "The embodied soul may be restricted from sense enjoyment, though the taste for sense objects remains. But, ceasing such engagements by experiencing a higher taste, one is fixed in consciousness.",
        question: "What is the effective way to control sense enjoyment according to this verse?",
        answer: "By experiencing a higher taste through spiritual realization, one naturally loses taste for sense objects.",
        concept: "Verse 2.59 - Higher Taste Replaces Lower"
    },
    { 
        shloka: "यततो ह्यपि कौन्तेय पुरुषस्य विपश्चितः | इन्द्रियाणि प्रमाथीनि हरन्ति प्रसभं मनः || 2-60",
        meaning: "The senses are so strong and impetuous, O Arjuna, that they forcibly carry away the mind even of a man of discrimination who is endeavoring to control them.",
        question: "How powerful are the senses according to Krishna?",
        answer: "The senses are so strong they can forcibly carry away the mind even of a discriminating person trying to control them.",
        concept: "Verse 2.60 - Power of the Senses"
    },
    { 
        shloka: "तानि सर्वाणि संयम्य युक्त आसीत मत्परः | वशे हि यस्येन्द्रियाणि तस्य प्रज्ञा प्रतिष्ठिता || 2-61",
        meaning: "One who restrains his senses, keeping them under full control, and fixes his consciousness upon Me, is known as a man of steady intelligence.",
        question: "What two things make a person steady in intelligence?",
        answer: "1) Restraining senses under full control, 2) Fixing consciousness upon Krishna.",
        concept: "Verse 2.61 - Steady Intelligence Requirements"
    },
    { 
        shloka: "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते | सङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते || 2-62",
        meaning: "While contemplating the objects of the senses, a person develops attachment for them, and from such attachment lust develops, and from lust anger arises.",
        question: "What is the chain reaction that starts from sense contemplation?",
        answer: "Contemplation → Attachment → Lust → Anger - this is the destructive chain.",
        concept: "Verse 2.62 - Chain of Degradation"
    },
    { 
        shloka: "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः | स्मृतिभ्रंशाद्बुद्धिनाशो बुद्धिनाशात्प्रणश्यति || 2-63",
        meaning: "From anger, complete delusion arises, and from delusion bewilderment of memory. When memory is bewildered, intelligence is lost, and when intelligence is lost, one falls down again into the material pool.",
        question: "What is the complete chain of degradation from anger to downfall?",
        answer: "Anger → Delusion → Memory bewilderment → Intelligence loss → Spiritual downfall.",
        concept: "Verse 2.63 - Complete Degradation Chain"
    },
    { 
        shloka: "रागद्वेषवियुक्तैस्तु विषयानिन्द्रियैश्चरन् | आत्मवश्यैर्विधेयात्मा प्रसादमधिगच्छति || 2-64",
        meaning: "But one who controls the senses by the mind and engages his active senses in devotional service without attachment and aversion, attains the mercy of the Lord.",
        question: "How can one attain divine mercy according to this verse?",
        answer: "By controlling senses with mind, engaging in devotional service without attachment or aversion.",
        concept: "Verse 2.64 - Attaining Divine Mercy"
    },
    { 
        shloka: "प्रसादे सर्वदुःखानां हानिरस्योपजायते | प्रसन्नचेतसो ह्याशु बुद्धिः पर्यवतिष्ठते || 2-65",
        meaning: "For one who is so situated in divine consciousness, the threefold miseries of material life exist no longer; in such a happy state, one's intelligence soon becomes steady.",
        question: "What two benefits come from divine consciousness?",
        answer: "1) Elimination of threefold miseries, 2) Steady intelligence quickly established.",
        concept: "Verse 2.65 - Benefits of Divine Consciousness"
    },
    { 
        shloka: "नास्ति बुद्धिरयुक्तस्य न चायुक्तस्य भावना | न चाभावयतः शान्तिरशान्तस्य कुतः सुखम् || 2-66",
        meaning: "One who is not in transcendental consciousness can have neither a controlled mind nor steady intelligence, without which there is no possibility of peace. And how can there be any happiness without peace?",
        question: "What is impossible without transcendental consciousness?",
        answer: "Without transcendental consciousness, one cannot have controlled mind, steady intelligence, peace, or happiness.",
        concept: "Verse 2.66 - Necessity of Transcendental Consciousness"
    },
    { 
        shloka: "इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते | तदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि || 2-67",
        meaning: "As a strong wind sweeps away a boat on the water, even one of the roaming senses on which the mind focuses can carry away a man's intelligence.",
        question: "What analogy describes how senses can destroy intelligence?",
        answer: "Like a strong wind sweeping away a boat - even one sense can carry away intelligence if mind focuses on it.",
        concept: "Verse 2.67 - Boat Analogy for Sense Danger"
    },
    { 
        shloka: "तस्माद्यस्य महाबाहो निगृहीतानि सर्वशः | इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता || 2-68",
        meaning: "Therefore, O mighty-armed, one whose senses are completely restrained from their objects is certainly of steady intelligence.",
        question: "Who has truly steady intelligence according to this verse?",
        answer: "One who has completely restrained all senses from their objects has steady intelligence.",
        concept: "Verse 2.68 - Complete Sense Restraint"
    },
    { 
        shloka: "या निशा सर्वभूतानां तस्यां जागर्ति संयमी | यस्यां जाग्रति भूतानि सा निशा पश्यतो मुनेः || 2-69",
        meaning: "What is night for all beings is the time of awakening for the self-controlled; and the time of awakening for all beings is night for the introspective sage.",
        question: "How does the self-controlled person's schedule differ from ordinary people?",
        answer: "When others are active (awake), the sage sees it as night (for spiritual progress), and when others sleep (are spiritually unconscious), the sage is awake.",
        concept: "Verse 2.69 - Different Perception of Time"
    },
    { 
        shloka: "आपूर्यमाणमचलप्रतिष्ठं समुद्रमापः प्रविशन्ति यद्वत् | तद्वत्कामा यं प्रविशन्ति सर्वे स शान्तिमाप्नोति न कामकामी || 2-70",
        meaning: "A person who is not disturbed by the incessant flow of desires—that enter like rivers into the ocean, which is ever being filled but is always still—can alone achieve peace, and not the man who strives to satisfy such desires.",
        question: "What famous analogy describes how a peaceful person handles desires?",
        answer: "Like rivers entering the ocean - desires enter but don't disturb one who, like the ocean, remains ever-filled but still.",
        concept: "Verse 2.70 - Ocean Analogy for Desire Management"
    },
    { 
        shloka: "विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः | निर्ममो निरहंकारः स शान्तिमधिगच्छति || 2-71",
        meaning: "One who gives up all desires and lives free from longing, without any sense of proprietorship or false ego, attains perfect peace.",
        question: "What four things must one give up to attain perfect peace?",
        answer: "1) All desires, 2) Longing, 3) Sense of proprietorship, 4) False ego.",
        concept: "Verse 2.71 - Requirements for Perfect Peace"
    },
    { 
        shloka: "एषा ब्राह्मी स्थितिः पार्थ नैनां प्राप्य विमुह्यति | स्थित्वास्यामन्तकालेऽपि ब्रह्मनिर्वाणमृच्छति || 2-72",
        meaning: "That is the way of the spiritual and godly life, after attaining which a man is not bewildered. Being so situated, even at the hour of death, one can enter into the kingdom of God.",
        question: "What is the ultimate benefit of attaining this spiritual state?",
        answer: "One is not bewildered and, even at death, enters the kingdom of God (Brahma-nirvana).",
        concept: "Verse 2.72 - Ultimate Spiritual Benefit"
    }
];