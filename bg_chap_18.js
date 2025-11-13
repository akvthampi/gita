// --- bg_chap_18.js ---
const chapterMetadata = {
    title: "Chapter 18: The Yoga of Liberation through Renunciation",
    info: "Moksha Sanyasa Yoga - Yoga of Liberation through Renunciation"
};
const flashcards = [
    { 
        shloka: "अर्जुन उवाच | संन्यासस्य महाबाहो तत्त्वमिच्छामि वेदितum | त्यागस्य च हृषीकेश पृथक्केशिनिषूदन || 18-1",
        meaning: "Arjuna said: O mighty-armed one, I wish to know the truth about renunciation and abandonment, O Hrishikesha, and the difference between them, O slayer of Keshi.",
        question: "What does Arjuna want to know about?",
        answer: "The truth about renunciation (sannyasa) and abandonment (tyaga), and the difference between them.",
        concept: "Verse 18.1 - Inquiry About Renunciation"
    },
    { 
        shloka: "श्रीभगवानुवाच | काम्यानां कर्मणां न्यासं संन्यासं कवयो विदुः | सर्वकर्मफलत्यागं प्राहुस्त्यागं विचक्षणाः || 18-2",
        meaning: "The Blessed Lord said: The wise understand renunciation as the giving up of desire-prompted actions. The intelligent declare abandonment as the relinquishment of fruits of all actions.",
        question: "What is the difference between renunciation and abandonment?",
        answer: "Renunciation is giving up desire-prompted actions; abandonment is relinquishing fruits of all actions.",
        concept: "Verse 18.2 - Definition of Renunciation and Abandonment"
    },
    { 
        shloka: "त्याज्यं दोषवदित्येके कर्म प्राहुर्मनीषिणः | यज्ञदानतपःकर्म न त्याज्यमिति चापरे || 18-3",
        meaning: "Some philosophers declare that all actions should be abandoned as faulty, while others say that acts of sacrifice, charity, and austerity should not be given up.",
        question: "What are the different views about abandoning actions?",
        answer: "Some say all actions should be abandoned; others say sacrifice, charity, and austerity should not be given up.",
        concept: "Verse 18.3 - Different Philosophical Views"
    },
    { 
        shloka: "निश्चयं शृणु मे तत्र त्यागे भरतसत्तम | त्यागो हि पुरुषव्याघ्र त्रिविधः संप्रकीर्तितः || 18-4",
        meaning: "O best of the Bharatas, hear My conclusive opinion on abandonment. Abandonment, O tiger among men, is declared to be of three kinds.",
        question: "How many kinds of abandonment are there?",
        answer: "Three kinds, according to Krishna.",
        concept: "Verse 18.4 - Three Kinds of Abandonment"
    },
    { 
        shloka: "यज्ञदानतपःकर्म न त्याज्यं कार्यमेव तत् | यज्ञो दानं तपश्चैव पावनानि मनीषिणाम् || 18-5",
        meaning: "Acts of sacrifice, charity, and austerity should not be abandoned; they must be performed. Indeed, sacrifice, charity, and austerity are purifying for the wise.",
        question: "Which actions should never be abandoned?",
        answer: "Sacrifice, charity, and austerity - they purify the wise.",
        concept: "Verse 18.5 - Essential Actions"
    },
    { 
        shloka: "एतान्यपि तु कर्माणि सङ्गं त्यक्त्वा फलानि च | कर्तव्यानीति मे पार्थ निश्चितं मतमुत्तमम् || 18-6",
        meaning: "These actions indeed should be performed giving up attachment and fruits. This is My definite and supreme opinion, O Partha.",
        question: "How should essential actions be performed?",
        answer: "Without attachment and without desire for fruits.",
        concept: "Verse 18.6 - Proper Performance of Actions"
    },
    { 
        shloka: "नियतस्य तु संन्यासः कर्मणो नोपपद्यते | मोहात्तस्य परित्यागस्तामसः परिकीर्तितः || 18-7",
        meaning: "Renunciation of prescribed duties is not proper. Abandoning them out of delusion is declared to be in the mode of ignorance.",
        question: "What is tamasic abandonment?",
        answer: "Abandoning prescribed duties out of delusion.",
        concept: "Verse 18.7 - Tamasic Abandonment"
    },
    { 
        shloka: "दुःखमित्येव यत्कर्म कायक्लेशभयात्त्यजेत् | स कृत्वा राजसं त्यागं नैव त्यागफलं लभेत् || 18-8",
        meaning: "One who abandons duty merely because it is difficult or because of fear of bodily trouble, performs rajasic abandonment and does not gain the reward of abandonment.",
        question: "What is rajasic abandonment?",
        answer: "Abandoning duty because it's difficult or due to fear of bodily trouble.",
        concept: "Verse 18.8 - Rajasic Abandonment"
    },
    { 
        shloka: "कार्यमित्येव यत्कर्म नियतं क्रियतेऽर्जुन | सङ्गं त्यक्त्वा फलं चैव स त्यागः सात्त्विको मतः || 18-9",
        meaning: "O Arjuna, when one performs prescribed duty only because it ought to be done, giving up attachment and fruit, that abandonment is considered sativic.",
        question: "What is sativic abandonment?",
        answer: "Performing prescribed duty because it should be done, without attachment or desire for fruits.",
        concept: "Verse 18.9 - Sattvic Abandonment"
    },
    { 
        shloka: "न द्वेष्ट्यकुशलं कर्म कुशले नानुषज्जते | त्यागी सत्त्वसमाविष्टो मेधावी छिन्नसंशयः || 18-10",
        meaning: "The abandoning one, imbued with goodness, wise and with doubts dispelled, neither hates disagreeable work nor is attached to agreeable work.",
        question: "How does a sativic abandoning person relate to work?",
        answer: "Doesn't hate disagreeable work nor gets attached to agreeable work.",
        concept: "Verse 18.10 - Sattvic Attitude Toward Work"
    },
    { 
        shloka: "न हि देहभृता शक्यं त्यक्तुं कर्माण्यशेषतः | यस्तु कर्मफलत्यागी स त्यागीत्यभिधीयते || 18-11",
        meaning: "It is indeed impossible for an embodied being to abandon actions entirely. But one who relinquishes the fruits of actions is called an abandoner.",
        question: "Who is the true abandoner?",
        answer: "One who relinquishes the fruits of actions, not actions themselves.",
        concept: "Verse 18.11 - True Abandoner"
    },
    { 
        shloka: "अनिष्टमिष्टं मिश्रं च त्रिविधं कर्मणः फलम् | भवत्यत्यागिनां प्रेत्य न तु संन्यासिनां क्वचित् || 18-12",
        meaning: "For non-abandoners, there are threefold results of action—undesirable, desirable, and mixed—after death, but never for renouncers.",
        question: "What happens to non-abandoners after death?",
        answer: "They experience threefold results of their actions: undesirable, desirable, and mixed.",
        concept: "Verse 18.12 - Results for Non-Abandoners"
    },
    { 
        shloka: "पञ्चैतानि महाबाहो कारणानि निबोध मे | सांख्ये कृतान्ते प्रोक्तानि सिद्धये सर्वकर्मणाम् || 18-13",
        meaning: "O mighty-armed, learn from Me these five factors for the accomplishment of all actions, as stated in the Sankhya doctrine.",
        question: "How many factors are there for accomplishing actions?",
        answer: "Five factors, according to Sankhya philosophy.",
        concept: "Verse 18.13 - Five Factors of Action"
    },
    { 
        shloka: "अधिष्ठानं तथा कर्ता करणं च पृथग्विधम् | विविधाश्च पृथक्चेष्टा दैवं चैवात्र पञ्चमम् || 18-14",
        meaning: "The body, the doer, the various senses, the different functions, and ultimately the Supersoul—these are the five factors.",
        question: "What are the five factors of action?",
        answer: "1) Body, 2) Doer, 3) Senses, 4) Various functions, 5) Supersoul.",
        concept: "Verse 18.14 - The Five Factors"
    },
    { 
        shloka: "शरीरवाङ्मनोभिर्यत्कर्म प्रारभते नरः | न्याय्यं वा विपरीतं वा पञ्चैते तस्य हेतवः || 18-15",
        meaning: "Whatever action a man performs by his body, speech, or mind, whether right or wrong, these five are its causes.",
        question: "What are the causes of all actions?",
        answer: "The five factors: body, doer, senses, various functions, and Supersoul.",
        concept: "Verse 18.15 - Causes of Action"
    },
    { 
        shloka: "तत्रैवं सति कर्तारमात्मानं केवलं तु यः | पश्यत्यकृतबुद्धित्वान्न स पश्यति दुर्मतिः || 18-16",
        meaning: "Therefore, one who, due to imperfect understanding, sees only the soul as the doer, certainly does not see properly.",
        question: "What is the wrong view about action?",
        answer: "Thinking only the soul is the doer, ignoring the other four factors.",
        concept: "Verse 18.16 - Wrong View of Action"
    },
    { 
        shloka: "यस्य नाहंकृतो भावो बुद्धिर्यस्य न लिप्यते | हत्वापि स इमाँल्लोकान्न हन्ति न निबध्यते || 18-17",
        meaning: "One who is free from egoistic notions, whose intelligence is not attached, though he kills these people, does not kill, nor is he bound.",
        question: "How can one act without being bound?",
        answer: "By being free from ego and having unattached intelligence.",
        concept: "Verse 18.17 - Action Without Bondage"
    },
    { 
        shloka: "ज्ञानं ज्ञेयं परिज्ञाता त्रिविधा कर्मचोदना | करणं कर्म कर्तेति त्रिविधः कर्मसंग्रहः || 18-18",
        meaning: "Knowledge, the object of knowledge, and the knower are the threefold impetus to action. The instrument, the action, and the doer are the threefold constituents of action.",
        question: "What are the threefold impetus and constituents of action?",
        answer: "Impetus: knowledge, object of knowledge, knower. Constituents: instrument, action, doer.",
        concept: "Verse 18.18 - Threefold Aspects of Action"
    },
    { 
        shloka: "ज्ञानं कर्म च कर्ता च त्रिधैव गुणभेदतः | प्रोच्यते गुणसंख्याने यथावच्छृणु तान्यपि || 18-19",
        meaning: "Knowledge, action, and doer are of three kinds only, according to the distinction of the modes. Hear about them duly as described in the science of modes.",
        question: "How are knowledge, action, and doer classified?",
        answer: "Into three kinds each, according to the three modes of nature.",
        concept: "Verse 18.19 - Threefold Classification"
    },
    { 
        shloka: "सर्वभूतेषु येनैकं भावमव्ययमीक्षते | अविभक्तं विभक्तेषु तज्ज्ञानं विद्धि सात्त्विकम् || 18-20",
        meaning: "That knowledge by which one sees the one indestructible reality in all beings, undivided in the divided, know that knowledge to be sativic.",
        question: "What is sativic knowledge?",
        answer: "Seeing the one indestructible reality in all beings, undivided in the divided.",
        concept: "Verse 18.20 - Sattvic Knowledge"
    },
    { 
        shloka: "पृथक्त्वेन तु यज्ज्ञानं नानाभावान्पृथग्विधान् | वेत्ति सर्वेषु भूतेषु तज्ज्ञानं विद्धि राजसम् || 18-21",
        meaning: "But that knowledge which sees various entities of different kinds in all beings, know that knowledge to be rajasic.",
        question: "What is rajasic knowledge?",
        answer: "Seeing various different entities in all beings.",
        concept: "Verse 18.21 - Rajasic Knowledge"
    },
    { 
        shloka: "यत्तु कृत्स्नवदेकस्मिन्कार्ये सक्तमहैतुकम् | अतत्त्वार्थवदल्पं च तत्तामसमुदाहृतम् || 18-22",
        meaning: "While that knowledge which is attached to one single effect as if it were the whole, without reason, without foundation in truth, and trivial—that is declared to be tamasic.",
        question: "What is tamasic knowledge?",
        answer: "Attached to one effect as the whole, unreasonable, untrue, and trivial.",
        concept: "Verse 18.22 - Tamasic Knowledge"
    },
    { 
        shloka: "नियतं सङ्गरहितमरागद्वेषतः कृतम् | अफलप्रेप्सुना कर्म यत्तत्सात्त्विकमुच्यते || 18-23",
        meaning: "An action which is prescribed, performed without attachment, without love or hatred, and without desire for fruit, is said to be sativic.",
        question: "What is sativic action?",
        answer: "Prescribed action performed without attachment, love/hate, or desire for fruits.",
        concept: "Verse 18.23 - Sattvic Action"
    },
    { 
        shloka: "यत्तु कामेप्सुना कर्म साहंकारेण वा पुनः | क्रियते बहुलायासं तद्राजसमुदाहृतम् || 18-24",
        meaning: "But action performed with desire for gain, or with egoism, or with much effort, is declared to be rajasic.",
        question: "What is rajasic action?",
        answer: "Action performed with desire for gain, egoism, or with great effort.",
        concept: "Verse 18.24 - Rajasic Action"
    },
    { 
        shloka: "अनुबन्धं क्षयं हिंसामनपेक्ष्य च पौरुषम् | मोहादारभ्यते कर्म यत्तत्तामसमुच्यते || 18-25",
        meaning: "That action which is undertaken from delusion, without consideration of consequence, loss, injury, and one's ability, is said to be tamasic.",
        question: "What is tamasic action?",
        answer: "Action undertaken from delusion, without considering consequences, loss, injury, or one's ability.",
        concept: "Verse 18.25 - Tamasic Action"
    },
    { 
        shloka: "मुक्तसङ्गोऽनहंवादी धृत्युत्साहसमन्वितः | सिद्ध्यसिद्ध्योर्निर्विकारः कर्ता सात्त्विक उच्यते || 18-26",
        meaning: "An agent who is free from attachment, non-egoistic, endowed with firmness and enthusiasm, and unaffected by success or failure, is called sativic.",
        question: "What is a sativic doer?",
        answer: "Free from attachment, non-egoistic, firm, enthusiastic, unaffected by success/failure.",
        concept: "Verse 18.26 - Sattvic Doer"
    },
    { 
        shloka: "रागी कर्मफलप्रेप्सुर्लुब्धो हिंसात्मकोऽशुचिः | हर्षशोकान्वितः कर्ता राजसः परिकीर्तितः || 18-27",
        meaning: "The doer who is passionate, desirous of fruits of action, greedy, harmful, impure, and moved by joy and sorrow, is called rajasic.",
        question: "What is a rajasic doer?",
        answer: "Passionate, desires fruits, greedy, harmful, impure, moved by joy/sorrow.",
        concept: "Verse 18.27 - Rajasic Doer"
    },
    { 
        shloka: "अयुक्तः प्राकृतः स्तब्धः शठो नैष्कृतिकोऽलसः | विषादी दीर्घसूत्री च कर्ता तामस उच्यते || 18-28",
        meaning: "The doer who is undisciplined, vulgar, stubborn, deceitful, malicious, lazy, despondent, and procrastinating, is called tamasic.",
        question: "What is a tamasic doer?",
        answer: "Undisciplined, vulgar, stubborn, deceitful, malicious, lazy, despondent, procrastinating.",
        concept: "Verse 18.28 - Tamasic Doer"
    },
    { 
        shloka: "बुद्धेर्भेदं धृतेश्चैव गुणतस्त्रिविधं शृणु | प्रोच्यमानमशेषेण पृथक्त्वेन धनञ्जय || 18-29",
        meaning: "O Dhananjaya, hear fully from Me the threefold division of understanding and steadiness according to the modes, declared in their individuality.",
        question: "What will Krishna explain about understanding and steadiness?",
        answer: "Their threefold division according to the modes of nature.",
        concept: "Verse 18.29 - Threefold Understanding and Steadiness"
    },
    { 
        shloka: "प्रवृत्तिं च निवृत्तिं च कार्याकार्ये भयाभये | बन्धं मोक्षं च या वेत्ति बुद्धिः सा पार्थ सात्त्विकी || 18-30",
        meaning: "O Partha, that understanding which knows action and inaction, what ought to be done and what ought not to be done, fear and fearlessness, bondage and liberation, is sativic.",
        question: "What is sativic understanding?",
        answer: "Knows action/inaction, right/wrong action, fear/fearlessness, bondage/liberation.",
        concept: "Verse 18.30 - Sattvic Understanding"
    },
    { 
        shloka: "यया धर्ममधर्मं च कार्यं चाकार्यमेव च | अयथावत्प्रजानाति बुद्धिः सा पार्थ राजसी || 18-31",
        meaning: "O Partha, that understanding which incorrectly distinguishes between righteousness and unrighteousness, and between what should be done and what should not be done, is rajasic.",
        question: "What is rajasic understanding?",
        answer: "Incorrectly distinguishes between righteousness/unrighteousness, right/wrong action.",
        concept: "Verse 18.31 - Rajasic Understanding"
    },
    { 
        shloka: "अधर्मं धर्ममिति या मन्यते तमसावृता | सर्वार्थान्विपरीतांश्च बुद्धिः सा पार्थ तामसी || 18-32",
        meaning: "O Partha, that understanding which, shrouded in darkness, regards unrighteousness as righteousness and sees all things perverted, is tamasic.",
        question: "What is tamasic understanding?",
        answer: "Considers unrighteousness as righteousness and sees everything perverted.",
        concept: "Verse 18.32 - Tamasic Understanding"
    },
    { 
        shloka: "धृत्या यया धारयते मनःप्राणेन्द्रियक्रियाः | योगेनाव्यभिचारिण्या धृतिः सा पार्थ सात्त्विकी || 18-33",
        meaning: "O Partha, that unwavering steadiness by which, through yoga, one controls the activities of the mind, life-airs, and senses, is sativic.",
        question: "What is sativic steadiness?",
        answer: "Unwavering steadiness that controls mind, life-airs, and senses through yoga.",
        concept: "Verse 18.33 - Sattvic Steadiness"
    },
    { 
        shloka: "यया तु धर्मकामार्थान्धृत्या धारयतेऽर्जुन | प्रसङ्गेन फलाकाङ्क्षी धृतिः सा पार्थ राजसी || 18-34",
        meaning: "But that steadiness, O Arjuna, by which one holds to duty, pleasure, and wealth with attachment, desiring fruits, is rajasic.",
        question: "What is rajasic steadiness?",
        answer: "Holding to duty, pleasure, and wealth with attachment, desiring fruits.",
        concept: "Verse 18.34 - Rajasic Steadiness"
    },
    { 
        shloka: "यया स्वप्नं भयं शोकं विषादं मदमेव च | न विमुञ्चति दुर्मेधा धृतिः सा पार्थ तामसी || 18-35",
        meaning: "That steadiness by which a foolish person does not give up sleep, fear, grief, depression, and arrogance, O Partha, is tamasic.",
        question: "What is tamasic steadiness?",
        answer: "Not giving up sleep, fear, grief, depression, and arrogance.",
        concept: "Verse 18.35 - Tamasic Steadiness"
    },
    { 
        shloka: "सुखं त्विदानीं त्रिविधं शृणु मे भरतर्षभ | अभ्यासाद्रमते यत्र दुःखान्तं च निगच्छति || 18-36",
        meaning: "O best of the Bharatas, now hear from Me about the threefold happiness, by practicing which one comes to the end of suffering.",
        question: "What will Krishna explain about happiness?",
        answer: "The threefold happiness that leads to the end of suffering.",
        concept: "Verse 18.36 - Threefold Happiness"
    },
    { 
        shloka: "यत्तदग्रे विषमिव परिणामेऽमृतोपमम् | तत्सुखं सात्त्विकं प्रोक्तमात्मबुद्धिप्रसादजम् || 18-37",
        meaning: "That which is like poison in the beginning but like nectar in the end, and which springs from the clarity of one's understanding of the Self, is said to be sativic happiness.",
        question: "What is sativic happiness?",
        answer: "Like poison initially but nectar finally, arising from Self-understanding.",
        concept: "Verse 18.37 - Sattvic Happiness"
    },
    { 
        shloka: "विषयेन्द्रियसंयोगाद्यत्तदग्रेऽमृतोपमम् | परिणामे विषमिव तत्सुखं राजसं स्मृतम् || 18-38",
        meaning: "That happiness which arises from contact of senses with objects, which is like nectar in the beginning but like poison in the end, is considered rajasic.",
        question: "What is rajasic happiness?",
        answer: "Arises from sense-object contact, like nectar initially but poison finally.",
        concept: "Verse 18.38 - Rajasic Happiness"
    },
    { 
        shloka: "यदग्रे चानुबन्धे च सुखं मोहनमात्मनः | निद्रालस्यप्रमादोत्थं तत्तामसमुदाहृतम् || 18-39",
        meaning: "That happiness which deludes the self both in the beginning and the end, and which arises from sleep, laziness, and negligence, is declared to be tamasic.",
        question: "What is tamasic happiness?",
        answer: "Deludes the self, arises from sleep, laziness, and negligence.",
        concept: "Verse 18.39 - Tamasic Happiness"
    },
    { 
        shloka: "न तदस्ति पृथिव्यां वा दिवि देवेषु वा पुनः | सत्त्वं प्रकृतिजैर्मुक्तं यदेभिः स्यात्त्रिभिर्गुणैः || 18-40",
        meaning: "There is no being on earth or among the gods in heaven who is free from these three modes born of material nature.",
        question: "Who is free from the three modes of nature?",
        answer: "No one in material existence - all beings are influenced by the three modes.",
        concept: "Verse 18.40 - Universal Influence of Gunas"
    },
    { 
        shloka: "ब्राह्मणक्षत्रियविशां शूद्राणां च परन्तप | कर्माणि प्रविभक्तानि स्वभावप्रभवैर्गुणैः || 18-41",
        meaning: "O scorcher of foes, the duties of brahmanas, kshatriyas, vaishyas, and shudras are distributed according to the qualities born of their own nature.",
        question: "How are duties distributed among the four varnas?",
        answer: "According to the qualities born of their own nature.",
        concept: "Verse 18.41 - Duties According to Nature"
    },
    { 
        shloka: "शमो दमस्तपः शौचं क्षान्तिरार्जवमेव च | ज्ञानं विज्ञानमास्तिक्यं ब्रह्मकर्म स्वभावजम् || 18-42",
        meaning: "Serenity, self-control, austerity, purity, forgiveness, honesty, knowledge, wisdom, and faith—these are the duties of brahmanas, born of their nature.",
        question: "What are the duties of brahmanas?",
        answer: "Serenity, self-control, austerity, purity, forgiveness, honesty, knowledge, wisdom, faith.",
        concept: "Verse 18.42 - Brahmana Duties"
    },
    { 
        shloka: "शौर्यं तेजो धृतिर्दाक्ष्यं युद्धे चाप्यपलायनम् | दानमीश्वरभावश्च क्षात्रं कर्म स्वभावजम् || 18-43",
        meaning: "Heroism, power, determination, resourcefulness, not fleeing in battle, generosity, and leadership—these are the duties of kshatriyas, born of their nature.",
        question: "What are the duties of kshatriyas?",
        answer: "Heroism, power, determination, resourcefulness, courage in battle, generosity, leadership.",
        concept: "Verse 18.43 - Kshatriya Duties"
    },
    { 
        shloka: "कृषिगौरक्ष्यवाणिज्यं वैश्यकर्म स्वभावजम् | परिचर्यात्मकं कर्म शूद्रस्यापि स्वभावजम् || 18-44",
        meaning: "Agriculture, cattle-rearing, and trade are the duties of vaishyas, born of their nature. Service is the duty of shudras, born of their nature.",
        question: "What are the duties of vaishyas and shudras?",
        answer: "Vaishyas: agriculture, cattle-rearing, trade. Shudras: service.",
        concept: "Verse 18.44 - Vaishya and Shudra Duties"
    },
    { 
        shloka: "स्वे स्वे कर्मण्यभिरतः संसिद्धिं लभते नरः | स्वकर्मनिरतः सिद्धिं यथा विन्दति तच्छृणु || 18-45",
        meaning: "By devotion to his own duty, everyone attains perfection. Now hear how one devoted to one's own duty attains perfection.",
        question: "How does one attain perfection?",
        answer: "By devotion to one's own prescribed duty.",
        concept: "Verse 18.45 - Perfection Through Duty"
    },
    { 
        shloka: "यतः प्रवृत्तिर्भूतानां येन सर्वमिदं ततम् | स्वकर्मणा तमभ्यर्च्य सिद्धिं विन्दति मानवः || 18-46",
        meaning: "Worshipping Him, from whom all beings have originated and by whom all this is pervaded, through performance of one's own duty, a human being attains perfection.",
        question: "How should one worship the Supreme?",
        answer: "By performing one's prescribed duty, recognizing Him as the source and pervader.",
        concept: "Verse 18.46 - Worship Through Duty"
    },
    { 
        shloka: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् | स्वभावनियतं कर्म कुर्वन्नाप्नोति किल्बिषम् || 18-47",
        meaning: "Better is one's own duty, though imperfect, than the duty of another well performed. Doing work ordained according to one's nature, one does not incur sin.",
        question: "Why is one's own duty better than another's?",
        answer: "Even if imperfect, it's better than perfectly performing another's duty; it avoids sin.",
        concept: "Verse 18.47 - Superiority of One's Own Duty"
    },
    { 
        shloka: "सहजं कर्म कौन्तेय सदोषमपि न त्यजेत् | सर्वारम्भा हि दोषेण धूमेनाग्निरिवावृताः || 18-48",
        meaning: "O son of Kunti, one should not abandon the duty one is born with, even if faulty. All undertakings are covered with fault, as fire is with smoke.",
        question: "Should one abandon one's natural duty if it has faults?",
        answer: "No, because all undertakings have faults, like fire has smoke.",
        concept: "Verse 18.48 - Don't Abandon Natural Duty"
    },
    { 
        shloka: "असक्तबुद्धिः सर्वत्र जितात्मा विगतस्पृहः | नैष्कर्म्यसिद्धिं परमां संन्यासेनाधिगच्छति || 18-49",
        meaning: "One whose intelligence is unattached everywhere, who has conquered the self, and who is free from desires, attains the supreme perfection of freedom from action through renunciation.",
        question: "How does one attain freedom from action?",
        answer: "Through unattached intelligence, self-conquest, desirelessness, and renunciation.",
        concept: "Verse 18.49 - Path to Freedom from Action"
    },
    { 
        shloka: "सिद्धिं प्राप्तो यथा ब्रह्म तथाप्नोति निबोध मे | समासेनैव कौन्तेय निष्ठा ज्ञानस्य या परा || 18-50",
        meaning: "O Kaunteya, hear briefly from Me how one who has attained perfection also attains Brahman, that supreme state of knowledge.",
        question: "What will Krishna explain about attaining Brahman?",
        answer: "How one who has attained perfection reaches Brahman.",
        concept: "Verse 18.50 - Attaining Brahman"
    },
    { 
        shloka: "बुद्ध्या विशुद्धया युक्तो धृत्यात्मानं नियम्य च | शब्दादीन्विषयांस्त्यक्त्वा रागद्वेषौ व्युदस्य च || 18-51",
        meaning: "Endowed with pure intelligence, controlling the self with firmness, abandoning sound and other objects, and casting aside attraction and aversion;",
        question: "What practices lead to Brahman realization?",
        answer: "Pure intelligence, self-control, abandoning sense objects, casting aside attraction/aversion.",
        concept: "Verse 18.51 - Practices for Brahman Realization"
    },
    { 
        shloka: "विविक्तसेवी लघ्वाशी यतवाक्कायमानसः | ध्यानयोगपरो नित्यं वैराग्यं समुपाश्रितः || 18-52",
        meaning: "Dwelling in solitude, eating lightly, controlling speech, body, and mind, always engaged in meditation and concentration, taking refuge in dispassion;",
        question: "What additional practices lead to liberation?",
        answer: "Solitude, light eating, control of speech/body/mind, meditation, dispassion.",
        concept: "Verse 18.52 - Spiritual Practices"
    },
    { 
        shloka: "अहंकारं बलं दर्पं कामं क्रोधं परिग्रहम् | विमुच्य निर्ममः शान्तो ब्रह्मभूयाय कल्पते || 18-53",
        meaning: "Relinquishing egoism, power, arrogance, desire, anger, and possessiveness, free from the sense of mine, and peaceful—he is fit for becoming Brahman.",
        question: "What qualities make one fit for becoming Brahman?",
        answer: "Free from ego, power, arrogance, desire, anger, possessiveness, mine-ness, and peaceful.",
        concept: "Verse 18.53 - Qualities for Brahman-hood"
    },
    { 
        shloka: "ब्रह्मभूतः प्रसन्नात्मा न शोचति न काङ्क्षति | समः सर्वेषु भूतेषु मद्भक्तिं लभते पराम् || 18-54",
        meaning: "Having become Brahman, serene in the self, he neither grieves nor desires. Equal to all beings, he attains supreme devotion to Me.",
        question: "What is the state of one who has become Brahman?",
        answer: "Serene, neither grieves nor desires, equal to all, attains supreme devotion.",
        concept: "Verse 18.54 - State of Brahman-realized Soul"
    },
    { 
        shloka: "भक्त्या मामभिजानाति यावान्यश्चास्मि तत्त्वतः | ततो मां तत्त्वतो ज्ञात्वा विशते तदनन्तरम् || 18-55",
        meaning: "By devotion he comes to know Me in truth—what and who I am. Then, knowing Me in truth, he forthwith enters into Me.",
        question: "How does one truly know and enter into Krishna?",
        answer: "Through devotion, one knows Krishna's true nature and enters into Him.",
        concept: "Verse 18.55 - Knowing Krishna Through Devotion"
    },
    { 
        shloka: "सर्वकर्माण्यपि सदा कुर्वाणो मद्व्यपाश्रयः | मत्प्रसादादवाप्नोति शाश्वतं पदमव्ययम् || 18-56",
        meaning: "Though engaged in all kinds of activities, taking refuge in Me, by My grace he attains the eternal, imperishable abode.",
        question: "How can one engaged in activities attain the eternal abode?",
        answer: "By taking refuge in Krishna and by His grace.",
        concept: "Verse 18.56 - Attaining Eternal Abode Through Grace"
    },
    { 
        shloka: "चेतसा सर्वकर्माणि मयि संन्यस्य मत्परः | बुद्धियोगमुपाश्रित्य मच्चित्तः सततं भव || 18-57",
        meaning: "Mentally offering all actions to Me, being devoted to Me, resorting to the yoga of discrimination, always fix your mind on Me.",
        question: "What is the final instruction for spiritual success?",
        answer: "Mentally offer all actions to Krishna, be devoted, use discriminating intelligence, always fix mind on Him.",
        concept: "Verse 18.57 - Final Spiritual Instruction"
    },
    { 
        shloka: "मच्चित्तः सर्वदुर्गाणि मत्प्रसादात्तरिष्यसि | अथ चेत्त्वमहंकारान्न श्रोष्यसि विनङ्क्ष्यसि || 18-58",
        meaning: "Fixing your mind on Me, you will overcome all obstacles by My grace. But if from egoism you will not hear, you will perish.",
        question: "What happens if one fixes mind on Krishna vs. if one doesn't listen?",
        answer: "With mind fixed on Krishna: overcome obstacles by grace. With ego: perish.",
        concept: "Verse 18.58 - Result of Following vs. Not Following"
    },
    { 
        shloka: "यदहंकारमाश्रित्य न योत्स्य इति मन्यसे | मिथ्यैष व्यवसायस्ते प्रकृतिस्त्वां नियोक्ष्यति || 18-59",
        meaning: "If, motivated by egoism, you think, 'I will not fight,' your resolve is vain. Your own nature will compel you.",
        question: "What will happen if Arjuna refuses to fight out of ego?",
        answer: "His resolve is useless; his own nature will force him to fight.",
        concept: "Verse 18.59 - Nature's Compulsion"
    },
    { 
        shloka: "स्वभावजेन कौन्तेय निबद्धः स्वेन कर्मणा | कर्तुं नेच्छसि यन्मोहात्करिष्यस्यवशोऽपि तत् || 18-60",
        meaning: "O son of Kunti, bound by your own nature-born duty, that which from delusion you wish not to do, you shall do even against your will.",
        question: "Why can't Arjuna avoid fighting?",
        answer: "He's bound by his nature-born duty as a kshatriya.",
        concept: "Verse 18.60 - Bound by Nature's Duty"
    },
    { 
        shloka: "ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति | भ्रामयन्सर्वभूतानि यन्त्रारूढानि मायया || 18-61",
        meaning: "The Lord dwells in the hearts of all beings, O Arjuna, causing all beings to revolve by His power as if mounted on a machine.",
        question: "Where does the Lord dwell and what does He do?",
        answer: "In all hearts, making beings revolve like machines through His illusory energy.",
        concept: "Verse 18.61 - Lord as Inner Controller"
    },
    { 
        shloka: "तमेव शरणं गच्छ सर्वभावेन भारत | तत्प्रसादात्परां शान्तिं स्थानं प्राप्स्यसि शाश्वतम् || 18-62",
        meaning: "Take refuge in Him alone with your whole being, O Bharata. By His grace you will attain supreme peace and the eternal abode.",
        question: "What is the ultimate instruction?",
        answer: "Take complete refuge in Krishna; by His grace attain supreme peace and eternal abode.",
        concept: "Verse 18.62 - Ultimate Refuge"
    },
    { 
        shloka: "इति ते ज्ञानमाख्यातं गुह्याद्गुह्यतरं मया | विमृश्यैतदशेषेण यथेच्छसि तथा कुरु || 18-63",
        meaning: "Thus has this knowledge, more secret than secrecy itself, been told to you by Me. Having reflected on it fully, do as you wish.",
        question: "What has Krishna revealed to Arjuna?",
        answer: "Knowledge more secret than secrecy itself, with freedom to choose.",
        concept: "Verse 18.63 - Most Confidential Knowledge"
    },
    { 
        shloka: "सर्वगुह्यतमं भूयः शृणु मे परमं वचः | इष्टोऽसि मे दृढमिति ततो वक्ष्यामि ते हितम् || 18-64",
        meaning: "Hear again My supreme word, the most secret of all. Because you are dearly beloved to Me, I will tell you what is good for you.",
        question: "Why is Krishna revealing the most secret knowledge?",
        answer: "Because Arjuna is dearly beloved to Him.",
        concept: "Verse 18.64 - Revelation Out of Love"
    },
    { 
        shloka: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु | मामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे || 18-65",
        meaning: "Fix your mind on Me, be devoted to Me, worship Me, bow down to Me. Thus you will come to Me alone. I promise you this truly, for you are dear to Me.",
        question: "What is the supreme secret for attaining Krishna?",
        answer: "Fix mind on Him, be devoted, worship, bow down to Him.",
        concept: "Verse 18.65 - Supreme Secret of Devotion"
    },
    { 
        shloka: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज | अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः || 18-66",
        meaning: "Abandoning all duties, take refuge in Me alone. I shall liberate you from all sins; do not grieve.",
        question: "What is the most confidential instruction?",
        answer: "Abandon all duties and take sole refuge in Krishna for liberation from all sins.",
        concept: "Verse 18.66 - Most Confidential Instruction"
    },
    { 
        shloka: "इदं ते नातपस्काय नाभक्ताय कदाचन | न चाशुश्रूषवे वाच्यं न च मां योऽभ्यसूयति || 18-67",
        meaning: "This should never be spoken by you to one who is without austerity, without devotion, nor to one who does not render service, nor to one who envies Me.",
        question: "To whom should this knowledge not be revealed?",
        answer: "Those without austerity, devotion, service, or those who envy Krishna.",
        concept: "Verse 18.67 - Confidentiality of Knowledge"
    },
    { 
        shloka: "य इदं परमं गुह्यं मद्भक्तेष्वभिधास्यति | भक्तिं मयि परां कृत्वा मामेवैष्यत्यसंशयः || 18-68",
        meaning: "One who teaches this supreme secret to My devotees, showing supreme devotion to Me, shall come to Me without doubt.",
        question: "What is the result of teaching this confidential knowledge?",
        answer: "The teacher attains Krishna with supreme devotion.",
        concept: "Verse 18.68 - Result of Teaching Confidential Knowledge"
    },
    { 
        shloka: "न च तस्मान्मनुष्येषु कश्चिन्मे प्रियकृत्तमः | भविता न च मे तस्मादन्यः प्रियतरो भुवि || 18-69",
        meaning: "No one among men does more pleasing service to Me than he; nor shall there be another dearer to Me in the world than he.",
        question: "How dear is one who teaches this knowledge?",
        answer: "No one does more pleasing service or is dearer to Krishna.",
        concept: "Verse 18.69 - Supreme Dearness of Teacher"
    },
    { 
        shloka: "अध्येष्यते च य इमं धर्म्यं संवादमावयोः | ज्ञानयज्ञेन तेनाहमिष्टः स्यामिति मे मतिः || 18-70",
        meaning: "And he who studies this sacred dialogue of ours, by him I am worshipped with the sacrifice of knowledge. Such is My opinion.",
        question: "How is one who studies this dialogue worshipping Krishna?",
        answer: "Through the sacrifice of knowledge.",
        concept: "Verse 18.70 - Worship Through Study"
    },
    { 
        shloka: "श्रद्धावाननसूयश्च शृणुयादपि यो नरः | सोऽपि मुक्तः शुभाँल्लोकान्प्राप्नुयात्पुण्यकर्मणाम् || 18-71",
        meaning: "And the man who hears this, full of faith and free from malice, he too, being liberated, shall attain the auspicious worlds of the virtuous.",
        question: "What happens to a faithful listener?",
        answer: "Liberated, attains auspicious worlds of the virtuous.",
        concept: "Verse 18.71 - Result for Faithful Listener"
    },
    { 
        shloka: "कच्चिदेतच्छ्रुतं पार्थ त्वयैकाग्रेण चेतसा | कच्चिदज्ञानसंमोहः प्रनष्टस्ते धनञ्जय || 18-72",
        meaning: "O Partha, has this been heard by you with single-minded attention? Has your delusion born of ignorance been destroyed, O Dhananjaya?",
        question: "What does Krishna ask Arjuna after teaching everything?",
        answer: "If he heard with attention and if his ignorance-born delusion is destroyed.",
        concept: "Verse 18.72 - Checking Understanding"
    },
    { 
        shloka: "अर्जुन उवाच | नष्टो मोहः स्मृतिर्लब्धा त्वत्प्रसादान्मयाच्युत | स्थितोऽस्मि गतसन्देहः करिष्ये वचनं तव || 18-73",
        meaning: "Arjuna said: My delusion is destroyed, and I have regained memory by Your grace, O Achyuta. I am firm, free from doubt, and shall act according to Your word.",
        question: "What is Arjuna's final response?",
        answer: "Delusion destroyed, memory regained, firm, doubt-free, ready to follow Krishna's instruction.",
        concept: "Verse 18.73 - Arjuna's Transformation"
    },
    { 
        shloka: "सञ्जय उवाच | इत्यहं वासुदेवस्य पार्थस्य च महात्मनः | संवादमिममश्रौषमद्भुतं रोमहर्षणम् || 18-74",
        meaning: "Sanjaya said: Thus have I heard this wonderful and hair-raising dialogue between Vasudeva and the great-souled Partha.",
        question: "How does Sanjaya describe the dialogue?",
        answer: "Wonderful and hair-raising.",
        concept: "Verse 18.74 - Sanjaya's Reaction"
    },
    { 
        shloka: "व्यासप्रसादाच्छ्रुतवानेतद्गुह्यमहं परम् | योगं योगेश्वरात्कृष्णात्साक्षात्कथयतः स्वयम् || 18-75",
        meaning: "By the grace of Vyasa, I heard this supreme secret yoga directly from Krishna, the Lord of yoga, Himself speaking.",
        question: "How was Sanjaya able to hear this dialogue?",
        answer: "By Vyasa's grace, directly from Krishna Himself.",
        concept: "Verse 18.75 - Source of Sanjaya's Knowledge"
    },
    { 
        shloka: "राजन्संस्मृत्य संस्मृत्य संवादमिममद्भुतम् | केशवार्जुनयोः पुण्यं हृष्यामि च मुहुर्मुहुः || 18-76",
        meaning: "O King, remembering again and again this wonderful and sacred dialogue between Keshava and Arjuna, I rejoice again and again.",
        question: "How does remembering this dialogue affect Sanjaya?",
        answer: "Makes him rejoice repeatedly.",
        concept: "Verse 18.76 - Joy of Remembering"
    },
    { 
        shloka: "तच्च संस्मृत्य संस्मृत्य रूपमत्यद्भुतं हरेः | विस्मयो मे महान्राजन्हृष्यामि च पुनः पुनः || 18-77",
        meaning: "And remembering again and again that most wonderful form of Hari, great wonder comes over me, O King, and I rejoice again and again.",
        question: "What specifically makes Sanjaya wonder and rejoice?",
        answer: "Remembering Krishna's most wonderful universal form.",
        concept: "Verse 18.77 - Wonder at Universal Form"
    },
    { 
        shloka: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः | तत्र श्रीर्विजयो भूतिध्रुवा नीतिर्मतिर्मम || 18-78",
        meaning: "Wherever there is Krishna, the Lord of yoga, and wherever there is Partha, the archer, there will surely be opulence, victory, prosperity, and sound morality. That is my conviction.",
        question: "What is Sanjaya's final conviction?",
        answer: "Where Krishna and Arjuna are, there is opulence, victory, prosperity, and sound morality.",
        concept: "Verse 18.78 - Final Conviction"
    }
];