// --- bg_chap_03.js ---
const chapterMetadata = {
    title: "Chapter 3: The Yoga of Action",
    info: "Karma Yoga - The Yoga of Selfless Action (43 verses)"
};
const flashcards = [
    { 
        shloka: "अर्जुन उवाच | ज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन | तत्किं कर्मणि घोरे मां नियोजयसि केशव || 3-1",
        meaning: "Arjuna said: O Janardana, if You consider that knowledge is superior to action, then why do You engage me in this terrible action, O Keshava?",
        question: "What apparent contradiction does Arjuna point out in Krishna's teachings?",
        answer: "Arjuna questions why Krishna is engaging him in terrible action if knowledge is superior to action.",
        concept: "Verse 3.1 - Arjuna's Doubt About Action"
    },
    { 
        shloka: "व्यामिश्रेणेव वाक्येन बुद्धिं मोहयसीव मे | तदेकं वद निश्चित्य येन श्रेयोऽहमाप्नुयाम् || 3-2",
        meaning: "With these apparently conflicting statements, You are confusing my intelligence. Therefore, please tell me decisively which path is most beneficial for me.",
        question: "How does Arjuna describe the effect of Krishna's teachings on his mind?",
        answer: "Arjuna says the conflicting statements are confusing his intelligence and requests a decisive answer.",
        concept: "Verse 3.2 - Request for Clear Guidance"
    },
    { 
        shloka: "श्रीभगवानुवाच | लोकेऽस्मिन्द्विविधा निष्ठा पुरा प्रोक्ता मयानघ | ज्ञानयोगेन साङ्ख्यानां कर्मयोगेन योगिनाम् || 3-3",
        meaning: "The Supreme Lord said: O sinless one, I have already explained that there are two classes of men who realize the Self. Some are inclined to understand Him by empirical philosophy, and others by devotional service.",
        question: "What two paths to self-realization does Krishna mention?",
        answer: "The path of knowledge (jnana-yoga) for philosophers and the path of action (karma-yoga) for devotees.",
        concept: "Verse 3.3 - Two Paths to Realization"
    },
    { 
        shloka: "न कर्मणामनारम्भान्नैष्कर्म्यं पुरुषोऽश्नुते | न च संन्यसनादेव सिद्धिं समधिगच्छति || 3-4",
        meaning: "Not by merely abstaining from work can one achieve freedom from reaction, nor by renunciation alone can one attain perfection.",
        question: "What two misconceptions about perfection does Krishna correct?",
        answer: "One cannot achieve perfection merely by abstaining from work or by renunciation alone.",
        concept: "Verse 3.4 - Correction About Renunciation"
    },
    { 
        shloka: "न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत् | कार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः || 3-5",
        meaning: "Everyone is forced to act helplessly according to the qualities he has acquired from the modes of material nature; therefore, no one can refrain from doing something, not even for a moment.",
        question: "Why is complete inaction impossible according to Krishna?",
        answer: "Everyone is forced to act by the modes of material nature; no one can remain inactive even for a moment.",
        concept: "Verse 3.5 - Impossibility of Inaction"
    },
    { 
        shloka: "कर्मेन्द्रियाणि संयम्य य आस्ते मनसा स्मरन् | इन्द्रियार्थान्विमूढात्मा मिथ्याचारः स उच्यते || 3-6",
        meaning: "One who restrains the senses of action but whose mind dwells on sense objects certainly deludes himself and is called a pretender.",
        question: "Who is considered a hypocrite in spiritual practice?",
        answer: "One who controls the senses externally but whose mind still dwells on sense objects is a hypocrite.",
        concept: "Verse 3.6 - The Hypocrite"
    },
    { 
        shloka: "यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन | कर्मेन्द्रियैः कर्मयोगमसक्तः स विशिष्यते || 3-7",
        meaning: "On the other hand, one who controls the senses by the mind and engages the active senses in devotional service without attachment is by far superior.",
        question: "What makes a person superior in spiritual practice?",
        answer: "Controlling senses with mind and engaging them in devotional service without attachment makes one superior.",
        concept: "Verse 3.7 - The Superior Practitioner"
    },
    { 
        shloka: "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः | शरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः || 3-8",
        meaning: "Perform your prescribed duty, for action is better than inaction. A man cannot even maintain his physical body without work.",
        question: "Why is prescribed action better than inaction?",
        answer: "Action is better because even maintaining the physical body requires work; inaction cannot sustain life.",
        concept: "Verse 3.8 - Necessity of Action"
    },
    { 
        shloka: "यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः | तदर्थं कर्म कौन्तेय मुक्तसङ्गः समाचर || 3-9",
        meaning: "Work done as a sacrifice for Vishnu has to be performed; otherwise, work binds one to this material world. Therefore, O son of Kunti, perform your prescribed duties for His satisfaction, and in that way you will always remain unattached and free from bondage.",
        question: "How can work become liberating instead of binding?",
        answer: "When work is performed as sacrifice for Vishnu, it becomes liberating; otherwise, it binds to material world.",
        concept: "Verse 3.9 - Work as Sacrifice"
    },
    { 
        shloka: "सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः | अनेन प्रसविष्यध्वमेष वोऽस्त्विष्टकामधुक् || 3-10",
        meaning: "In the beginning of creation, the Lord of all creatures sent forth generations of men and demigods, along with sacrifices for Vishnu, and blessed them by saying, 'Be thou happy by this yajna [sacrifice], for its performance will bestow upon you everything desirable for living happily and achieving liberation.'",
        question: "What was the original instruction given to humanity at creation?",
        answer: "The creator instructed humanity to perform sacrifices for Vishnu to attain happiness and liberation.",
        concept: "Verse 3.10 - Original Purpose of Sacrifice"
    },
    { 
        shloka: "देवान्भावयतानेन ते देवा भावयन्तु वः | परस्परं भावयन्तः श्रेयः परमवाप्स्यथ || 3-11",
        meaning: "By sacrifice, the demigods will be pleased, and they will also please you. Thus, nourishing one another, you will achieve the supreme good.",
        question: "What mutual benefit comes from performing sacrifices?",
        answer: "Sacrifices please the demigods who in turn provide blessings, creating mutual nourishment leading to supreme good.",
        concept: "Verse 3.11 - Mutual Nourishment Through Sacrifice"
    },
    { 
        shloka: "इष्टान्भोगान्हि वो देवा दास्यन्ते यज्ञभाविताः | तैर्दत्तानप्रदायैभ्यो यो भुङ्क्ते स्तेन एव सः || 3-12",
        meaning: "The demigods, being satisfied by the performance of yajna [sacrifice], will supply all necessities to you. But he who enjoys these gifts without offering them to the demigods in return is certainly a thief.",
        question: "Who is considered a thief according to this verse?",
        answer: "One who enjoys nature's gifts without offering sacrifices in return is considered a thief.",
        concept: "Verse 3.12 - The Thief of Nature's Gifts"
    },
    { 
        shloka: "यज्ञशिष्टाशिनः सन्तो मुच्यन्ते सर्वकिल्बिषैः | भुञ्जते ते त्वघं पापा ये पचन्त्यात्मकारणात् || 3-13",
        meaning: "The devotees of the Lord are released from all kinds of sins because they eat food which is offered first for sacrifice. Others, who prepare food for personal sense enjoyment, verily eat only sin.",
        question: "What is the difference between eating sacrificed food and personal food?",
        answer: "Eating sacrificed food liberates from sins, while eating for personal enjoyment binds one in sin.",
        concept: "Verse 3.13 - Food and Sin"
    },
    { 
        shloka: "अन्नाद्भवन्ति भूतानि पर्जन्यादन्नसम्भवः | यज्ञाद्भवति पर्जन्यो यज्ञः कर्मसमुद्भवः || 3-14",
        meaning: "All living bodies subsist on food grains, which are produced from rains. Rains are produced by performance of yajna [sacrifice], and yajna is born of prescribed duties.",
        question: "What is the cycle that sustains life according to this verse?",
        answer: "Prescribed duties → Sacrifice → Rains → Food grains → Living beings - this is the sustaining cycle.",
        concept: "Verse 3.14 - Cycle of Sustenance"
    },
    { 
        shloka: "कर्म ब्रह्मोद्भवं विद्धि ब्रह्माक्षरसमुद्भवम् | तस्मात्सर्वगतं ब्रह्म नित्यं यज्ञे प्रतिष्ठितम् || 3-15",
        meaning: "Regulated activities are prescribed in the Vedas, and the Vedas are directly manifested from the Supreme Personality of Godhead. Consequently, the all-pervading Transcendence is eternally situated in acts of sacrifice.",
        question: "What is the ultimate source of all prescribed duties?",
        answer: "Prescribed duties come from the Vedas, which manifest from the Supreme Personality of Godhead.",
        concept: "Verse 3.15 - Source of Prescribed Duties"
    },
    { 
        shloka: "एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः | अघायुरिन्द्रियारामो मोघं पार्थ स जीवति || 3-16",
        meaning: "My dear Arjuna, one who does not follow in human life the cycle of sacrifice thus established by the Vedas certainly leads a life full of sin. Living only for the satisfaction of the senses, such a person lives in vain.",
        question: "What kind of life does one live who doesn't follow the Vedic cycle?",
        answer: "They live a sinful life of sense gratification and their life is wasted and vain.",
        concept: "Verse 3.16 - Life Without Sacrifice"
    },
    { 
        shloka: "यस्त्वात्मरतिरेव स्यादात्मतृप्तश्च मानवः | आत्मन्येव च सन्तुष्टस्तस्य कार्यं न विद्यते || 3-17",
        meaning: "But for one who takes pleasure in the self, whose human life is one of self-realization, and who is satisfied in the self only, fully satiated—for him there is no duty.",
        question: "For whom are there no prescribed duties?",
        answer: "For one who is self-satisfied, takes pleasure in the self, and is fully self-realized.",
        concept: "Verse 3.17 - The Self-Realized Person"
    },
    { 
        shloka: "नैव तस्य कृतेनार्थो नाकृतेनेह कश्चन | न चास्य सर्वभूतेषु कश्चिदर्थव्यपाश्रयः || 3-18",
        meaning: "A self-realized man has no purpose to fulfill in the discharge of his prescribed duties, nor has he any reason not to perform such work. Nor has he any need to depend on any other living being.",
        question: "What three freedoms does a self-realized person enjoy?",
        answer: "1) No personal purpose in work, 2) No reason to avoid work, 3) No dependence on others.",
        concept: "Verse 3.18 - Freedom of Self-Realized"
    },
    { 
        shloka: "तस्मादसक्तः सततं कार्यं कर्म समाचर | असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः || 3-19",
        meaning: "Therefore, without being attached to the fruits of activities, one should act as a matter of duty; for by working without attachment, one attains the Supreme.",
        question: "How should one perform duties to attain the Supreme?",
        answer: "Perform duties as a matter of obligation without attachment to results.",
        concept: "Verse 3.19 - Duty Without Attachment"
    },
    { 
        shloka: "कर्मणैव हि संसिद्धिमास्थिता जनकादयः | लोकसंग्रहमेवापि संपश्यन्कर्तुमर्हसि || 3-20",
        meaning: "Kings such as Janaka attained perfection solely by performance of prescribed duties. Therefore, just for the sake of educating the people in general, you should perform your work.",
        question: "What example does Krishna give of perfection through duty?",
        answer: "Kings like Janaka attained perfection by performing prescribed duties, setting example for others.",
        concept: "Verse 3.20 - Example of King Janaka"
    },
    { 
        shloka: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः | स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते || 3-21",
        meaning: "Whatever action a great man performs, common men follow. And whatever standards he sets by exemplary acts, all the world pursues.",
        question: "What influence do great persons have on society?",
        answer: "Whatever great persons do, common people imitate; whatever standards they set, the world follows.",
        concept: "Verse 3.21 - Influence of Great Persons"
    },
    { 
        shloka: "न मे पार्थास्ति कर्तव्यं त्रिषु लोकेषु किञ्चन | नानवाप्तमवाप्तव्यं वर्त एव च कर्मणि || 3-22",
        meaning: "O son of Pritha, there is no work prescribed for Me within all the three planetary systems. Nor am I in want of anything, nor have I need to obtain anything—and yet I am engaged in prescribed duties.",
        question: "Why does Krishna, who needs nothing, still work?",
        answer: "Although He has no duties and needs nothing, He still performs prescribed duties to set the example.",
        concept: "Verse 3.22 - Krishna's Example"
    },
    { 
        shloka: "यदि ह्यहं न वर्तेयं जातु कर्मण्यतन्द्रितः | मम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः || 3-23",
        meaning: "For if I ever failed to engage in carefully performing prescribed duties, O Partha, certainly all men would follow My path.",
        question: "What would happen if Krishna stopped performing duties?",
        answer: "All people would follow His example and abandon their duties, causing chaos.",
        concept: "Verse 3.23 - Responsibility of Leadership"
    },
    { 
        shloka: "उत्सीदेयुरिमे लोका न कुर्यां कर्म चेदहम् | सङ्करस्य च कर्ता स्यामुपहन्यामिमाः प्रजाः || 3-24",
        meaning: "If I did not perform prescribed duties, all these worlds would be put to ruination. I would be the cause of creating unwanted population, and I would thereby destroy the peace of all living beings.",
        question: "What three disastrous consequences would occur if Krishna abandoned duties?",
        answer: "1) Worlds would be ruined, 2) Unwanted population created, 3) Peace of all beings destroyed.",
        concept: "Verse 3.24 - Consequences of Abandoning Duty"
    },
    { 
        shloka: "सक्ताः कर्मण्यविद्वांसो यथा कुर्वन्ति भारत | कुर्याद्विद्वांस्तथासक्तश्चिकीर्षुर्लोकसंग्रहम् || 3-25",
        meaning: "As the ignorant perform their duties with attachment to results, the learned may similarly act, but without attachment, for the sake of leading people on the right path.",
        question: "How should wise persons perform duties compared to ignorant ones?",
        answer: "Wise persons should perform duties without attachment, unlike ignorant who work with attachment, to set proper example.",
        concept: "Verse 3.25 - Wise vs Ignorant Action"
    },
    { 
        shloka: "न बुद्धिभेदं जनयेदज्ञानां कर्मसङ्गिनाम् | जोषयेत्सर्वकर्माणि विद्वान्युक्तः समाचरन् || 3-26",
        meaning: "So as not to disrupt the minds of ignorant men attached to the fruitive results of prescribed duties, a learned person should not induce them to stop work. Rather, by working in the spirit of devotion, he should engage them in all sorts of activities.",
        question: "How should wise persons deal with ignorant people attached to work?",
        answer: "They should not stop them from working but engage them in devotional service while they work.",
        concept: "Verse 3.26 - Dealing with the Ignorant"
    },
    { 
        shloka: "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः | अहंकारविमूढात्मा कर्ताहमिति मन्यते || 3-27",
        meaning: "The spirit soul bewildered by the influence of false ego thinks himself the doer of activities that are in actuality carried out by the three modes of material nature.",
        question: "What mistaken belief does the bewildered soul have?",
        answer: "The soul thinks 'I am the doer' when actually the three modes of nature are performing the actions.",
        concept: "Verse 3.27 - False Ego of Doership"
    },
    { 
        shloka: "तत्त्ववित्तु महाबाहो गुणकर्मविभागयोः | गुणा गुणेषु वर्तन्त इति मत्वा न सज्जते || 3-28",
        meaning: "One who is in knowledge of the Absolute Truth, O mighty-armed, does not engage himself in the senses and sense gratification, knowing well the differences between work in devotion and work for fruitive results.",
        question: "How does a person in knowledge view sense activities?",
        answer: "They understand that senses interact with sense objects (guna-guneshu vartante) and thus remain unattached.",
        concept: "Verse 3.28 - Knowledge and Detachment"
    },
    { 
        shloka: "प्रकृतेर्गुणसम्मूढाः सज्जन्ते गुणकर्मसु | तानकृत्स्नविदो मन्दान्कृत्स्नविन्न विचालयेत् || 3-29",
        meaning: "Bewildered by the modes of material nature, the ignorant fully engage in material activities and become attached. But the wise should not unsettle them, although these duties are inferior due to the performers' lack of knowledge.",
        question: "How should wise persons treat ignorant people engaged in material work?",
        answer: "They should not disturb them, even though such work is inferior due to ignorance.",
        concept: "Verse 3.29 - Not Disturbing the Ignorant"
    },
    { 
        shloka: "मयि सर्वाणि कर्माणि संन्यस्याध्यात्मचेतसा | निराशीर्निर्ममो भूत्वा युध्यस्व विगतज्वरः || 3-30",
        meaning: "Therefore, O Arjuna, surrendering all your works unto Me, with full knowledge of Me, without desires for profit, with no claims to proprietorship, and free from lethargy, fight.",
        question: "What five instructions does Krishna give Arjuna for proper action?",
        answer: "1) Surrender all works to Krishna, 2) With spiritual consciousness, 3) Without desires for profit, 4) Without proprietorship, 5) Free from mental agitation.",
        concept: "Verse 3.30 - Instructions for Proper Action"
    },
    { 
        shloka: "ये मे मतमिदं नित्यमनुतिष्ठन्ति मानवाः | श्रद्धावन्तोऽनसूयन्तो मुच्यन्ते तेऽपि कर्मभिः || 3-31",
        meaning: "Those persons who execute their duties according to My injunctions and who follow this teaching faithfully, without envy, become free from the bondage of fruitive actions.",
        question: "What three qualities help one become free from karmic bondage?",
        answer: "1) Faithfully following instructions, 2) Having faith, 3) Being free from envy.",
        concept: "Verse 3.31 - Freedom from Karma"
    },
    { 
        shloka: "ये त्वेतदभ्यसूयन्तो नानुतिष्ठन्ति मे मतम् | सर्वज्ञानविमूढांस्तान्विद्धि नष्टानचेतसः || 3-32",
        meaning: "But those who, out of envy, disregard these teachings and do not follow them regularly, are to be considered bereft of all knowledge, befooled, and doomed to ignorance and bondage.",
        question: "What happens to those who reject these teachings out of envy?",
        answer: "They remain ignorant, bewildered, devoid of knowledge, and bound in material existence.",
        concept: "Verse 3.32 - Fate of the Envious"
    },
    { 
        shloka: "सदृशं चेष्टते स्वस्याः प्रकृतेर्ज्ञानवानपि | प्रकृतिं यान्ति भूतानि निग्रहः किं करिष्यति || 3-33",
        meaning: "Even a man of knowledge acts according to his own nature, for everyone follows the nature he has acquired from the three modes. What can repression accomplish?",
        question: "Why is it difficult to change one's nature?",
        answer: "Everyone acts according to their acquired nature from the three modes; mere repression cannot change this.",
        concept: "Verse 3.33 - Power of Acquired Nature"
    },
    { 
        shloka: "इन्द्रियस्येन्द्रियस्यार्थे रागद्वेषौ व्यवस्थितौ | तयोर्न वशमागच्छेत्तौ ह्यस्य परिपन्थिनौ || 3-34",
        meaning: "Attraction and aversion for sense objects are fixed by the senses themselves. One should not come under the control of these two, because they are obstacles in one's path to self-realization.",
        question: "What two obstacles to self-realization are mentioned?",
        answer: "Attachment and aversion to sense objects are the two main obstacles on the spiritual path.",
        concept: "Verse 3.34 - Obstacles to Realization"
    },
    { 
        shloka: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् | स्वधर्मे निधनं श्रेयः परधर्मो भयावहः || 3-35",
        meaning: "It is far better to discharge one's prescribed duties, even though faultily, than another's duties perfectly. Destruction in the course of performing one's own duty is better than engaging in another's duties, for to follow another's path is dangerous.",
        question: "Why is performing one's own duty better than performing others' duties perfectly?",
        answer: "Even imperfect performance of one's own duty is better than perfect performance of others' duties, which is dangerous.",
        concept: "Verse 3.35 - Superiority of Own Duty"
    },
    { 
        shloka: "अर्जुन उवाच | अथ केन प्रयुक्तोऽयं पापं चरति पूरुषः | अनिच्छन्नपि वार्ष्णेय बलादिव नियोजितः || 3-36",
        meaning: "Arjuna said: O descendant of Vrishni, by what is one impelled to sinful acts, even unwillingly, as if engaged by force?",
        question: "What question does Arjuna ask about sinful actions?",
        answer: "Arjuna asks what force impels people to sin even when they don't want to, as if compelled.",
        concept: "Verse 3.36 - Question About Sinful Tendencies"
    },
    { 
        shloka: "श्रीभगवानुवाच | काम एष क्रोध एष रजोगुणसमुद्भवः | महाशनो महापाप्मा विद्ध्येनमिह वैरिणम् || 3-37",
        meaning: "The Supreme Lord said: It is lust only, Arjuna, which is born of contact with the material mode of passion and later transformed into wrath, and which is the all-devouring sinful enemy of this world.",
        question: "What does Krishna identify as the cause of sinful actions?",
        answer: "Lust, born of the mode of passion and transforming into anger, is the all-devouring sinful enemy.",
        concept: "Verse 3.37 - Lust as the Enemy"
    },
    { 
        shloka: "धूमेनाव्रियते वह्निर्यथादर्शो मलेन च | यथोल्बेनावृतो गर्भस्तथा तेनेदमावृतम् || 3-38",
        meaning: "As fire is covered by smoke, as a mirror is covered by dust, or as the embryo is covered by the womb, the living entity is similarly covered by different degrees of this lust.",
        question: "What three analogies describe how lust covers consciousness?",
        answer: "Like: 1) Smoke covering fire, 2) Dust covering mirror, 3) Womb covering embryo - lust covers the soul.",
        concept: "Verse 3.38 - Lust Covering Consciousness"
    },
    { 
        shloka: "आवृतं ज्ञानमेतेन ज्ञानिनो नित्यवैरिणा | कामरूपेण कौन्तेय दुष्पूरेणानलेन च || 3-39",
        meaning: "Thus, the wise living entity's pure consciousness is covered by his eternal enemy in the form of lust, which is never satisfied and which burns like fire.",
        question: "What three characteristics of lust are mentioned?",
        answer: "Lust is: 1) The eternal enemy, 2) Never satisfied, 3) Burns like fire.",
        concept: "Verse 3.39 - Characteristics of Lust"
    },
    { 
        shloka: "इन्द्रियाणि मनो बुद्धिरस्याधिष्ठानमुच्यते | एतैर्विमोहयत्येष ज्ञानमावृत्य देहिनम् || 3-40",
        meaning: "The senses, the mind and the intelligence are the sitting places of this lust. Through them, lust covers the real knowledge of the living entity and bewilders him.",
        question: "Through what three channels does lust operate?",
        answer: "Lust operates through the senses, mind, and intelligence to cover knowledge and bewilder the soul.",
        concept: "Verse 3.40 - Channels of Lust"
    },
    { 
        shloka: "तस्मात्त्वमिन्द्रियाण्यादौ नियम्य भरतर्षभ | पाप्मानं प्रजहि ह्येनं ज्ञानविज्ञाननाशनम् || 3-41",
        meaning: "Therefore, O best of the Bharatas, in the very beginning curb this great symbol of sin [lust] by regulating the senses, and slay this destroyer of knowledge and self-realization.",
        question: "What two instructions does Krishna give to control lust?",
        answer: "1) First control the senses, 2) Then destroy lust which destroys knowledge and realization.",
        concept: "Verse 3.41 - Controlling Lust"
    },
    { 
        shloka: "इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः | मनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः || 3-42",
        meaning: "The working senses are superior to dull matter; mind is higher than the senses; intelligence is still higher than the mind; and he [the soul] is even higher than the intelligence.",
        question: "What is the hierarchy from matter to soul?",
        answer: "Matter → Senses → Mind → Intelligence → Soul (with soul being supreme).",
        concept: "Verse 3.42 - Hierarchy of Consciousness"
    },
    { 
        shloka: "एवं बुद्धेः परं बुद्ध्वा संस्तभ्यात्मानमात्मना | जहि शत्रुं महाबाहो कामरूपं दुरासदम् || 3-43",
        meaning: "Thus, knowing oneself to be transcendental to the material senses, mind, and intelligence, O mighty-armed Arjuna, one should steady the mind by deliberate spiritual intelligence and thus—by spiritual strength—conquer this insatiable enemy known as lust.",
        question: "What is the final instruction for conquering lust?",
        answer: "Understand your transcendental position, steady the mind with spiritual intelligence, and conquer lust with spiritual strength.",
        concept: "Verse 3.43 - Conquering Lust"
    }
];