// --- bg_chap_13.js ---
const chapterMetadata = {
    title: "Chapter 13: The Yoga of Distinguishing the Field and the Knower",
    info: "Kshetra Kshetrajna Vibhaga Yoga - Yoga of Discrimination Between the Field and Its Knower (35 verses)"
};
const flashcards = [
    { 
        shloka: "अर्जुन उवाच | प्रकृतिं पुरुषं चैव क्षेत्रं क्षेत्रज्ञमेव च | एतद्वेदितुमिच्छामि ज्ञानं ज्ञेयं च केशव || 13-1",
        meaning: "Arjuna said: O Kesava, I wish to learn about nature (prakriti) and the spirit (purusha), the field and the knower of the field, knowledge and that which ought to be known.",
        question: "What six topics does Arjuna want to learn about?",
        answer: "Nature (prakriti), spirit (purusha), the field, knower of the field, knowledge, and the object of knowledge.",
        concept: "Verse 13.1 - Inquiry About Fundamental Principles"
    },
    { 
        shloka: "श्रीभगवानुवाच | इदं शरीरं कौन्तेय क्षेत्रमित्यभिधीयते | एतद्यो वेत्ति तं प्राहुः क्षेत्रज्ञ इति तद्विदः || 13-2",
        meaning: "The Blessed Lord said: O son of Kunti, this body is called the field, and one who knows this body is called the knower of the field by those who know them.",
        question: "What is defined as the field and the knower of the field?",
        answer: "The body is the field, and the one who knows the body is the knower of the field.",
        concept: "Verse 13.2 - Definition of Field and Knower"
    },
    { 
        shloka: "क्षेत्रज्ञं चापि मां विद्धि सर्वक्षेत्रेषु भारत | क्षेत्रक्षेत्रज्ञयोर्ज्ञानं यत्तज्ज्ञानं मतं मम || 13-3",
        meaning: "O scion of Bharata, you should understand that I am also the knower in all fields. Knowledge of both the field and the knower of the field—that I consider true knowledge.",
        question: "What is Krishna's position regarding all fields?",
        answer: "He is the supreme knower in all fields, and knowledge of both field and knower is true knowledge.",
        concept: "Verse 13.3 - Krishna as Supreme Knower"
    },
    { 
        shloka: "तत्क्षेत्रं यच्च यादृक्च यद्विकारि यतश्च यत् | स च यो यत्प्रभावश्च तत्समासेन मे शृणु || 13-4",
        meaning: "Now hear from Me in brief about the field: what it is, what its nature is, what its modifications are, where it comes from, who the knower is, and what his powers are.",
        question: "What aspects of the field will Krishna explain?",
        answer: "What the field is, its nature, modifications, origin, the knower, and his powers.",
        concept: "Verse 13.4 - Topics to be Explained"
    },
    { 
        shloka: "ऋषिभिर्बहुधा गीतं छन्दोभिर्विविधैः पृथक् | ब्रह्मसूत्रपदैश्चैव हेतुमद्भिर्विनिश्चितैः || 13-5",
        meaning: "This knowledge has been sung by sages in many ways, in various distinctive hymns, and also in the well-reasoned and conclusive aphorisms of the Brahma Sutras.",
        question: "How has this knowledge been transmitted?",
        answer: "Through various hymns by sages and the conclusive aphorisms of Brahma Sutras.",
        concept: "Verse 13.5 - Transmission of Knowledge"
    },
    { 
        shloka: "महाभूतान्यहंकारो बुद्धिरव्यक्तमेव च | इन्द्रियाणि दशैकं च पञ्च चेन्द्रियगोचराः || 13-6",
        meaning: "The great elements, ego, intelligence, the unmanifest, the ten senses, the mind, and the five objects of the senses;",
        question: "What are the components of the field?",
        answer: "Great elements, ego, intelligence, unmanifest, ten senses, mind, five sense objects.",
        concept: "Verse 13.6 - Components of the Field (Part 1)"
    },
    { 
        shloka: "इच्छा द्वेषः सुखं दुःखं सङ्घातश्चेतना धृतिः | एतत्क्षेत्रं समासेन सविकारमुदाहृतम् || 13-7",
        meaning: "Desire, hatred, happiness, distress, the aggregate (body), consciousness, and fortitude—this, briefly described with its modifications, is the field.",
        question: "What psychological elements comprise the field?",
        answer: "Desire, hatred, happiness, distress, the body aggregate, consciousness, and fortitude.",
        concept: "Verse 13.7 - Psychological Components"
    },
    { 
        shloka: "अमानित्वमदम्भित्वमहिंसा क्षान्तिरार्जवम् | आचार्योपासनं शौचं स्थैर्यमात्मविनिग्रहः || 13-8",
        meaning: "Humility, pridelessness, nonviolence, tolerance, simplicity, service to the teacher, purity, steadiness, self-control;",
        question: "What qualities constitute knowledge?",
        answer: "Humility, pridelessness, nonviolence, tolerance, simplicity, service to teacher, purity, steadiness, self-control.",
        concept: "Verse 13.8 - Qualities of Knowledge (Part 1)"
    },
    { 
        shloka: "इन्द्रियार्थेषु वैराग्यमनहंकार एव च | जन्ममृत्युजराव्याधिदुःखदोषानुदर्शनम् || 13-9",
        meaning: "Detachment from objects of senses, absence of egoism, perception of evil in birth, death, old age, sickness, and pain;",
        question: "What additional qualities lead to knowledge?",
        answer: "Detachment from sense objects, no egoism, understanding the evils of birth/death/old age/sickness/pain.",
        concept: "Verse 13.9 - Qualities of Knowledge (Part 2)"
    },
    { 
        shloka: "असक्तिरनभिष्वङ्गः पुत्रदारगृहादिषु | नित्यं च समचित्तत्वमिष्टानिष्टोपपत्तिषु || 13-10",
        meaning: "Non-attachment, non-identification with son, wife, home, etc., constant even-mindedness amid desirable and undesirable events;",
        question: "How should one relate to family and circumstances?",
        answer: "With non-attachment, non-identification with family, and even-mindedness in all situations.",
        concept: "Verse 13.10 - Detachment and Equanimity"
    },
    { 
        shloka: "मयि चानन्ययोगेन भक्तिरव्यभिचारिणी | विविक्तदेशसेवित्वमरतिर्जनसंसदि || 13-11",
        meaning: "Unswerving devotion to Me through yoga of non-separation, resorting to solitary places, detachment from the general mass of people;",
        question: "What spiritual practices lead to knowledge?",
        answer: "Unswerving devotion to Krishna, seeking solitude, detachment from crowds.",
        concept: "Verse 13.11 - Spiritual Practices"
    },
    { 
        shloka: "अध्यात्मज्ञाननित्यत्वं तत्त्वज्ञानार्थदर्शनम् | एतज्ज्ञानमिति प्रोक्तमज्ञानं यदतोऽन्यथा || 13-12",
        meaning: "Constancy in spiritual knowledge, perception of the end of knowledge of truth—this is declared as knowledge, and what is contrary to it is ignorance.",
        question: "What completes the description of knowledge?",
        answer: "Constancy in spiritual knowledge and understanding the purpose of knowledge of truth.",
        concept: "Verse 13.12 - Completion of Knowledge Description"
    },
    { 
        shloka: "ज्ञेयं यत्तत्प्रवक्ष्यामि यज्ज्ञात्वामृतमश्नुते | अनादि मत्परं ब्रह्म न सत्तन्नासदुच्यते || 13-13",
        meaning: "I shall now describe the knowable, knowing which one attains immortality. The supreme Brahman is beginningless, and it is said to be neither sat (being) nor asat (non-being).",
        question: "What is the nature of the supreme knowable?",
        answer: "Beginningless Brahman, neither being nor non-being, knowing which brings immortality.",
        concept: "Verse 13.13 - The Knowable Brahman"
    },
    { 
        shloka: "सर्वतः पाणिपादं तत्सर्वतोऽक्षिशिरोमुखम् | सर्वतः श्रुतिमल्लोके सर्वमावृत्य तिष्ठति || 13-14",
        meaning: "Everywhere are His hands and legs, His eyes and faces, and He hears everything. In this way, the Supreme Soul exists, pervading everything.",
        question: "How does the Supreme Soul pervade everything?",
        answer: "With hands/legs/eyes/faces everywhere, hearing everything - pervading all existence.",
        concept: "Verse 13.14 - All-Pervading Nature"
    },
    { 
        shloka: "सर्वेन्द्रियगुणाभासं सर्वेन्द्रियविवर्जितम् | असक्तं सर्वभृच्चैव निर्गुणं गुणभोक्तृ च || 13-15",
        meaning: "The Supreme Soul appears to have the qualities of all senses, yet is without any senses; unattached, yet the maintainer of all; beyond the modes of nature, yet the enjoyer of them.",
        question: "What are the paradoxical qualities of the Supreme Soul?",
        answer: "Has qualities of senses yet no senses, unattached yet maintains all, beyond modes yet enjoys them.",
        concept: "Verse 13.15 - Paradoxical Nature of Supreme"
    },
    { 
        shloka: "बहिरन्तश्च भूतानामचरं चरमेव च | सूक्ष्मत्वात्तदविज्ञेयं दूरस्थं चान्तिके च तत् || 13-16",
        meaning: "It is inside and outside all beings, moving and non-moving. It is incomprehensible due to its subtlety. It is far away, yet very near.",
        question: "What is the spatial relationship of the Supreme Soul?",
        answer: "Inside and outside all beings, moving and non-moving, far yet near, subtle and incomprehensible.",
        concept: "Verse 13.16 - Omnipresence of Supreme"
    },
    { 
        shloka: "अविभक्तं च भूतेषु विभक्तमिव च स्थितम् | भूतभर्तृ च तज्ज्ञेयं ग्रसिष्णु प्रभविष्णु च || 13-17",
        meaning: "It is undivided, yet appears divided among beings. It is to be known as the supporter of beings, and as the devourer and originator.",
        question: "How does the Supreme appear in relation to beings?",
        answer: "Undivided yet appears divided, supporter of beings, devourer and originator.",
        concept: "Verse 13.17 - Unity in Diversity"
    },
    { 
        shloka: "ज्योतिषामपि तज्ज्योतिस्तमसः परमुच्यते | ज्ञानं ज्ञेयं ज्ञानगम्यं हृदि सर्वस्य विष्ठितम् || 13-18",
        meaning: "That is the light of all lights, said to be beyond darkness. It is knowledge, the object of knowledge, and the goal of knowledge, situated in the hearts of all.",
        question: "What is the Supreme in relation to light and knowledge?",
        answer: "Light of all lights beyond darkness, knowledge, object of knowledge, goal of knowledge - in all hearts.",
        concept: "Verse 13.18 - Supreme as Light and Knowledge"
    },
    { 
        shloka: "इति क्षेत्रं तथा ज्ञानं ज्ञेयं चोक्तं समासतः | मद्भक्त एतद्विज्ञाय मद्भावायोपपद्यते || 13-19",
        meaning: "Thus the field, knowledge, and the knowable have been briefly described. Understanding this, My devotee becomes qualified to attain My nature.",
        question: "What is the benefit of understanding these topics?",
        answer: "The devotee becomes qualified to attain Krishna's nature.",
        concept: "Verse 13.19 - Benefit of Understanding"
    },
    { 
        shloka: "प्रकृतिं पुरुषं चैव विद्ध्यनादी उभावपि | विकारांश्च गुणांश्चैव विद्धि प्रकृतिसम्भवान् || 13-20",
        meaning: "Know that both material nature and the living entities are beginningless. Know also that all transformations and qualities are born of material nature.",
        question: "What are the beginningless principles?",
        answer: "Material nature (prakriti) and living entities (purusha) are both beginningless.",
        concept: "Verse 13.20 - Beginningless Principles"
    },
    { 
        shloka: "कार्यकारणकर्तृत्वे हेतुः प्रकृतिरुच्यते | पुरुषः सुखदुःखानां भोक्तृत्वे हेतुरुच्यते || 13-21",
        meaning: "Nature is said to be the cause of all material causes and effects, whereas the living entity is the cause of the various sufferings and enjoyments in this world.",
        question: "What are the respective roles of nature and living entity?",
        answer: "Nature causes material effects; living entity causes experiences of pleasure and pain.",
        concept: "Verse 13.21 - Roles of Nature and Soul"
    },
    { 
        shloka: "पुरुषः प्रकृतिस्थो हि भुङ्क्ते प्रकृतिजान्गुणान् | कारणं गुणसङ्गोऽस्य सदसद्योनिजन्मसु || 13-22",
        meaning: "The living entity in material nature follows the ways of life, enjoying the three modes of nature. This is due to his association with that nature. Thus he meets with good and evil among various species.",
        question: "Why does the soul experience different births?",
        answer: "Due to association with nature's modes, the soul enjoys them and takes various births.",
        concept: "Verse 13.22 - Soul's Association with Nature"
    },
    { 
        shloka: "उपद्रष्टानुमन्ता च भर्ता भोक्ता महेश्वरः | परमात्मेति चाप्युक्तो देहेऽस्मिन्पुरुषः परः || 13-23",
        meaning: "Yet in this body there is another, a transcendental enjoyer who is the Lord, the supreme proprietor, who exists as the overseer and permitter, and who is known as the Supersoul.",
        question: "Who is the Supersoul in the body?",
        answer: "The transcendental enjoyer, Lord, supreme proprietor, overseer, permitter - the Supersoul.",
        concept: "Verse 13.23 - The Supersoul"
    },
    { 
        shloka: "य एवं वेत्ति पुरुषं प्रकृतिं च गुणैः सह | सर्वथा वर्तमानोऽपि न स भूयोऽभिजायते || 13-24",
        meaning: "One who understands this philosophy concerning material nature, the living entity, and the interaction of the modes of nature is sure to attain liberation. He will not take birth again, regardless of his present position.",
        question: "What is the result of proper understanding?",
        answer: "Liberation and no more birth, regardless of current situation.",
        concept: "Verse 13.24 - Result of Proper Knowledge"
    },
    { 
        shloka: "ध्यानेनात्मनि पश्यन्ति केचिदात्मानमात्मना | अन्ये सांख्येन योगेन कर्मयोगेन चापरे || 13-25",
        meaning: "Some perceive the Supersoul within themselves through meditation, others through the cultivation of knowledge, and still others through working without fruitive desire.",
        question: "What are the different paths to perceive the Soul?",
        answer: "Meditation, cultivation of knowledge (sankhya), or selfless work (karma yoga).",
        concept: "Verse 13.25 - Different Paths to Realization"
    },
    { 
        shloka: "अन्ये त्वेवमजानन्तः श्रुत्वान्येभ्य उपासते | तेऽपि चातितरन्त्येव मृत्युं श्रुतिपरायणाः || 13-26",
        meaning: "There are others who, although not conversant in spiritual knowledge, begin to worship the Supreme Person upon hearing about Him from others. They also transcend the path of birth and death because of their tendency to hear from authorities.",
        question: "How can even the ignorant attain liberation?",
        answer: "By hearing from authorities and worshiping the Supreme, they also transcend death.",
        concept: "Verse 13.26 - Liberation Through Hearing"
    },
    { 
        shloka: "यावत्सञ्जायते किञ्चित्सत्त्वं स्थावरजङ्गमम् | क्षेत्रक्षेत्रज्ञसंयोगात्तद्विद्धि भरतर्षभ || 13-27",
        meaning: "O chief of the Bharatas, know that whatever you see in existence, both moving and non-moving, is only a combination of the field of activities and the knower of the field.",
        question: "What comprises everything in existence?",
        answer: "The combination of the field (matter) and the knower of the field (spirit).",
        concept: "Verse 13.27 - Everything is Field and Knower"
    },
    { 
        shloka: "समं सर्वेषु भूतेषु तिष्ठन्तं परमेश्वरम् | विनश्यत्स्वविनश्यन्तं यः पश्यति स पश्यति || 13-28",
        meaning: "One who sees the Supreme Lord existing equally in every being, never perishing when they perish, actually sees.",
        question: "What is the vision of one who truly sees?",
        answer: "Seeing the Supreme Lord equally in all beings, eternal while they perish.",
        concept: "Verse 13.28 - Vision of Equality"
    },
    { 
        shloka: "समं पश्यन्हि सर्वत्र समवस्थितमीश्वरम् | न हिनस्त्यात्मनात्मानं ततो याति परां गतिम् || 13-29",
        meaning: "Seeing the Lord equally present everywhere, one does not degrade himself by his mind. Thus he approaches the transcendental destination.",
        question: "What is the result of seeing the Lord everywhere?",
        answer: "One doesn't degrade oneself and attains the supreme destination.",
        concept: "Verse 13.29 - Result of Universal Vision"
    },
    { 
        shloka: "प्रकृत्यैव च कर्माणि क्रियमाणानि सर्वशः | यः पश्यति तथात्मानमकर्तारं स पश्यति || 13-30",
        meaning: "One who can see that all activities are performed by the body, which is created of material nature, and sees that the self does nothing, actually sees.",
        question: "What does one see who understands the true performer?",
        answer: "That all activities are done by material nature, and the soul is non-doer.",
        concept: "Verse 13.30 - Vision of Non-Doership"
    },
    { 
        shloka: "यदा भूतपृथग्भावमेकस्थमनुपश्यति | तत एव च विस्तारं ब्रह्म सम्पद्यते तदा || 13-31",
        meaning: "When a sensible man stops seeing different identities, which are due to different material bodies, he attains to the Brahman conception. Thus he sees that beings are expanded everywhere.",
        question: "How does one attain Brahman realization?",
        answer: "By stopping to see different identities based on material bodies, seeing unity everywhere.",
        concept: "Verse 13.31 - Attaining Brahman Vision"
    },
    { 
        shloka: "अनादित्वान्निर्गुणत्वात्परमात्मायमव्ययः | शरीरस्थोऽपि कौन्तेय न करोति न लिप्यते || 13-32",
        meaning: "Those with the vision of eternity can see that the imperishable soul is transcendental, eternal, and beyond the modes of nature. Despite contact with the material body, O Arjuna, the soul neither does anything nor is entangled.",
        question: "Why is the soul not affected by the body?",
        answer: "Because it is beginningless, beyond qualities, supreme soul, imperishable - it neither acts nor gets entangled.",
        concept: "Verse 13.32 - Soul's Transcendental Nature"
    },
    { 
        shloka: "यथा सर्वगतं सौक्ष्म्यादाकाशं नोपलिप्यते | सर्वत्रावस्थितो देहे तथात्मा नोपलिप्यते || 13-33",
        meaning: "O son of Kunti, as the sun alone illuminates all this universe, so does the living entity, one within the body, illuminate the entire body by consciousness.",
        question: "How does the soul illuminate the body?",
        answer: "Like the sun illuminates the universe, the soul illuminates the entire body by consciousness.",
        concept: "Verse 13.33 - Soul as Illuminator"
    },
    { 
        shloka: "यथा प्रकाशयत्येकः कृत्स्नं लोकमिमं रविः | क्षेत्रं क्षेत्री तथा कृत्स्नं प्रकाशयति भारत || 13-34",
        meaning: "Those who see with eyes of knowledge the difference between the body and the knower of the body, and can also understand the process of liberation from bondage in material nature, attain to the supreme goal.",
        question: "What do those with knowledge see?",
        answer: "The difference between body and knower of body, and the path to liberation from material bondage.",
        concept: "Verse 13.34 - Vision of Discrimination"
    },
    { 
        shloka: "क्षेत्रक्षेत्रज्ञयोरेवमन्तरं ज्ञानचक्षुषा | भूतप्रकृतिमोक्षं च ये विदुर्यान्ति ते परम् || 13-35",
        meaning: "Those who see with eyes of knowledge the difference between the body and the knower of the body, and can also understand the process of liberation from bondage in material nature, attain to the supreme goal.",
        question: "What is the ultimate achievement of those with discriminative knowledge?",
        answer: "They understand the difference between field and knower, attain liberation from material nature, and reach the supreme goal.",
        concept: "Verse 13.35 - Ultimate Liberation"
    }
];