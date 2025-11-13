// --- bg_chap_15.js ---
const chapterMetadata = {
    title: "Chapter 15: The Yoga of the Supreme Person",
    info: "Purushottama Yoga - Yoga of the Supreme Person"
};
const flashcards = [
    { 
        shloka: "श्रीभगवानुवाच | ऊर्ध्वमूलमधःशाखमश्वत्थं प्राहुरव्ययम् | छन्दांसि यस्य पर्णानि यस्तं वेद स वेदवित् || 15-1",
        meaning: "The Blessed Lord said: They speak of an eternal ashvattha tree with its roots above and branches below, whose leaves are the Vedic hymns. One who knows this tree is the knower of the Vedas.",
        question: "How is the material existence described?",
        answer: "As an eternal banyan tree with roots above (in spirit), branches below (in matter), and Vedic hymns as leaves.",
        concept: "Verse 15.1 - The Ashvattha Tree of Material Existence"
    },
    { 
        shloka: "अधश्चोर्ध्वं प्रसृतास्तस्य शाखा गुणप्रवृद्धा विषयप्रवालाः | अधश्च मूलान्यनुसन्ततानि कर्मानुबन्धीनि मनुष्यलोके || 15-2",
        meaning: "The branches of this tree extend above and below, nourished by the gunas, with sense objects as twigs. The roots grow downward, binding to actions in the human world.",
        question: "What are the characteristics of the ashvattha tree's branches and roots?",
        answer: "Branches extend everywhere, nourished by gunas, with sense objects as twigs; roots bind to karmic actions in human world.",
        concept: "Verse 15.2 - Expansion of Material Existence"
    },
    { 
        shloka: "न रूपमस्येह तथोपलभ्यते नान्तो न चादिर्न च सम्प्रतिष्ठा | अश्वत्थमेनं सुविरूढमूलमसङ्गशस्त्रेण दृढेन छित्त्वा || 15-3",
        meaning: "Its real form is not perceived here, nor its end, nor beginning, nor foundation. Having cut this firmly rooted ashvattha tree with the strong weapon of non-attachment,",
        question: "What is needed to cut the ashvattha tree?",
        answer: "The strong weapon of non-attachment (asanga shastra).",
        concept: "Verse 15.3 - Cutting the Tree of Material Existence"
    },
    { 
        shloka: "ततः पदं तत्परिमार्गितव्यं यस्मिन्गता न निवर्तन्ति भूयः | तमेव चाद्यं पुरुषं प्रपद्ये यतः प्रवृत्तिः प्रसृता पुराणी || 15-4",
        meaning: "Then that goal should be sought from which, having gone, one never returns. I take refuge in that primordial Person from whom this ancient activity streamed forth.",
        question: "What should one seek after cutting the material tree?",
        answer: "The supreme goal from which there's no return, the primordial Person from whom everything emanated.",
        concept: "Verse 15.4 - Seeking the Supreme Goal"
    },
    { 
        shloka: "निर्मानमोहा जितसङ्गदोषा अध्यात्मनित्या विनिवृत्तकामाः | द्वन्द्वैर्विमुक्ताः सुखदुःखसंज्ञैर्गच्छन्त्यमूढाः पदमव्ययं तत् || 15-5",
        meaning: "Free from pride and delusion, victorious over the evil of attachment, constantly dwelling in the Self, desires completely stilled, liberated from dualities of pleasure and pain, the undeluded reach that eternal goal.",
        question: "What qualities help one reach the eternal goal?",
        answer: "Free from pride/delusion/attachment, fixed in Self, desireless, beyond pleasure-pain dualities.",
        concept: "Verse 15.5 - Qualities for Attaining Liberation"
    },
    { 
        shloka: "न तद्भासयते सूर्यो न शशाङ्को न पावकः | यद्गत्वा न निवर्तन्ते तद्धाम परमं मम || 15-6",
        meaning: "That supreme abode of Mine is not illumined by the sun or moon, nor by fire. Having gone there, they do not return.",
        question: "How is Krishna's supreme abode described?",
        answer: "Not illumined by sun, moon, or fire; those who go never return.",
        concept: "Verse 15.6 - The Supreme Abode"
    },
    { 
        shloka: "ममैवांशो जीवलोके जीवभूतः सनातनः | मनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति || 15-7",
        meaning: "The eternal fragment of Myself becomes the living entity in the world of life, and draws to itself the mind and five senses, which rest in material nature.",
        question: "What is the relationship between Krishna and the living entities?",
        answer: "Living entities are eternal fragments of Krishna who acquire mind and senses from material nature.",
        concept: "Verse 15.7 - Living Entities as Krishna's Fragments"
    },
    { 
        shloka: "शरीरं यदवाप्नोति यच्चाप्युत्क्रामतीश्वरः | गृहीत्वैतानि संयाति वायुर्गन्धानिवाशयात् || 15-8",
        meaning: "When the Lord acquires a body and when He leaves it, He takes these (mind and senses) and goes, as the wind carries aromas from their source.",
        question: "How does the soul change bodies?",
        answer: "Like wind carrying fragrances, the soul carries mind and senses from one body to another.",
        concept: "Verse 15.8 - Transmigration of the Soul"
    },
    { 
        shloka: "श्रोत्रं चक्षुः स्पर्शनं च रसनं घ्राणमेव च | अधिष्ठाय मनश्चायं विषयानुपसेवते || 15-9",
        meaning: "Presiding over the ear, eye, skin, tongue, and nose, and also over the mind, he enjoys the sense objects.",
        question: "How does the embodied soul experience the world?",
        answer: "Through the senses (ear, eye, skin, tongue, nose) and mind, it enjoys sense objects.",
        concept: "Verse 15.9 - Soul's Experience Through Senses"
    },
    { 
        shloka: "उत्क्रामन्तं स्थितं वापि भुञ्जानं वा गुणान्वितम् | विमूढा नानुपश्यन्ति पश्यन्ति ज्ञानचक्षुषः || 15-10",
        meaning: "The deluded do not see Him who departs, stays, or enjoys, conjoined with the gunas. Those with the eye of knowledge see.",
        question: "Who can perceive the soul's activities?",
        answer: "Only those with knowledge can see; the deluded cannot perceive the soul departing, staying, or enjoying.",
        concept: "Verse 15.10 - Perception of the Soul"
    },
    { 
        shloka: "यतन्तो योगिनश्चैनं पश्यन्त्यात्मन्यवस्थितम् | यतन्तोऽप्यकृतात्मानो नैनं पश्यन्त्यचेतसः || 15-11",
        meaning: "The striving yogis see Him established in themselves, but the unrefined, despite striving, do not see Him, being undisciplined.",
        question: "Who can see the Supreme within?",
        answer: "Striving yogis with self-discipline; undisciplined persons cannot see Him even with effort.",
        concept: "Verse 15.11 - Vision Through Yoga"
    },
    { 
        shloka: "यदादित्यगतं तेजो जगद्भासयतेऽखिलम् | यच्चन्द्रमसि यच्चाग्नौ तत्तेजो विद्धि मामकम् || 15-12",
        meaning: "The splendor that is in the sun and illumines the whole world, that which is in the moon and in fire—know that splendor to be Mine.",
        question: "What splendor does Krishna claim as His?",
        answer: "The splendor in the sun that illuminates the world, and in the moon and fire.",
        concept: "Verse 15.12 - Krishna as Cosmic Splendor"
    },
    { 
        shloka: "गामाविश्य च भूतानि धारयाम्यहमोजसा | पुष्णामि चौषधीः सर्वाः सोमो भूत्वा रसात्मकः || 15-13",
        meaning: "Entering the earth, I sustain all beings by My energy; becoming the moon, I nourish all plants with sap.",
        question: "How does Krishna sustain the world?",
        answer: "By entering the earth to sustain beings, and as the moon to nourish plants with sap.",
        concept: "Verse 15.13 - Krishna as Sustainer"
    },
    { 
        shloka: "अहं वैश्वानरो भूत्वा प्राणिनां देहमाश्रितः | प्राणापानसमायुक्तः पचाम्यन्नं चतुर्विधम् || 15-14",
        meaning: "Becoming the fire of digestion in the bodies of living beings, united with prana and apana, I digest the four kinds of food.",
        question: "How does Krishna function within the body?",
        answer: "As the digestive fire (vaishvanara), He digests the four kinds of food using prana and apana.",
        concept: "Verse 15.14 - Krishna as Digestive Fire"
    },
    { 
        shloka: "सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च | वेदैश्च सर्वैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम् || 15-15",
        meaning: "I am seated in everyone's heart, and from Me come remembrance, knowledge, and forgetfulness. By all the Vedas, I am to be known; indeed, I am the compiler of Vedanta, and I am the knower of the Vedas.",
        question: "What is Krishna's role in consciousness and knowledge?",
        answer: "Seated in all hearts, He gives remembrance/knowledge/forgetfulness; He is the object of Vedas, compiler of Vedanta, and knower of Vedas.",
        concept: "Verse 15.15 - Krishna as Inner Controller"
    },
    { 
        shloka: "द्वाविमौ पुरुषौ लोके क्षरश्चाक्षर एव च | क्षरः सर्वाणि भूतानि कूटस्थोऽक्षर उच्यते || 15-16",
        meaning: "There are two persons in this world: the perishable and the imperishable. All beings are perishable, and the unchanging is called imperishable.",
        question: "What are the two types of purushas?",
        answer: "Perishable (all beings) and imperishable (the unchanging soul).",
        concept: "Verse 15.16 - Two Types of Persons"
    },
    { 
        shloka: "उत्तमः पुरुषस्त्वन्यः परमात्मेत्युदाहृतः | यो लोकत्रयमाविश्य बिभर्त्यव्यय ईश्वरः || 15-17",
        meaning: "But the Supreme Person is different, called the Supreme Self, who, as the imperishable Lord, enters the three worlds and sustains them.",
        question: "Who is the third, supreme Person?",
        answer: "The Supreme Self (Paramatma), the imperishable Lord who enters and sustains the three worlds.",
        concept: "Verse 15.17 - The Supreme Person"
    },
    { 
        shloka: "यस्मात्क्षरमतीतोऽहमक्षरादपि चोत्तमः | अतोऽस्मि लोके वेदे च प्रथितः पुरुषोत्तमः || 15-18",
        meaning: "Because I transcend the perishable and am higher than the imperishable, I am celebrated in the world and in the Vedas as the Supreme Person.",
        question: "Why is Krishna called Purushottama?",
        answer: "Because He transcends both the perishable (matter) and imperishable (individual souls).",
        concept: "Verse 15.18 - Krishna as Purushottama"
    },
    { 
        shloka: "यो मामेवमसम्मूढो जानाति पुरुषोत्तमम् | स सर्वविद्भजति मां सर्वभावेन भारत || 15-19",
        meaning: "O Bharata, he who, undeluded, thus knows Me as the Supreme Person, knows all and worships Me with his whole being.",
        question: "What is the result of knowing Krishna as Purushottama?",
        answer: "One knows everything and worships Krishna with complete devotion.",
        concept: "Verse 15.19 - Result of Knowing Purushottama"
    },
    { 
        shloka: "इति गुह्यतमं शास्त्रमिदमुक्तं मयानघ | एतद्बुद्ध्वा बुद्धिमान्स्यात्कृतकृत्यश्च भारत || 15-20",
        meaning: "Thus, O sinless one, this most secret science has been spoken by Me. Understanding this, one becomes wise and fulfilled, O Bharata.",
        question: "What is the conclusion of this teaching?",
        answer: "This most confidential knowledge makes one wise and fulfilled when understood.",
        concept: "Verse 15.20 - Conclusion of Confidential Knowledge"
    }
];