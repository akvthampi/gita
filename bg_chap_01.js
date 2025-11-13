// --- bg_chap_01.js ---
const chapterMetadata = {
    title: "Chapter 1: Arjuna's Despondency",
    info: "Arjuna Vishada Yoga - The Yoga of Arjuna's Dejection"
};
const flashcards = [
    { 
        shloka: "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय || 1-1",
        meaning: "Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu do when they had assembled together, eager for battle, on the holy field of Kurukshetra?",
        question: "Who is speaking in this opening verse and what is he inquiring about?",
        answer: "Dhritarashtra is speaking to Sanjaya, asking about the events on the battlefield of Kurukshetra where both the Kauravas and Pandavas have assembled for war.",
        concept: "Verse 1.1 - The Question"
    },
    { 
        shloka: "सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् || 1-2",
        meaning: "Sanjaya said: O King, after looking over the army arranged in military formation by the sons of Pandu, King Duryodhana went to his teacher and spoke the following words.",
        question: "What was Duryodhana's immediate reaction after seeing the Pandava army formation?",
        answer: "Duryodhana went to his teacher Dronacharya and began speaking to him after observing the Pandava army's military arrangement.",
        concept: "Verse 1.2 - Duryodhana's Reaction"
    },
    { 
        shloka: "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् | व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता || 1-3",
        meaning: "Behold, O Teacher, this mighty army of the sons of Pandu, arrayed by the son of Drupada, your wise disciple.",
        question: "Who arranged the Pandava army and what was significant about this person's relationship with Dronacharya?",
        answer: "Dhrishtadyumna (son of Drupada) arranged the Pandava army. He was Dronacharya's disciple, making this situation particularly challenging as teacher and student were on opposite sides.",
        concept: "Verse 1.3 - Army Arrangement"
    },
    { 
        shloka: "अत्र शूरा महेष्वासा भीमार्जुनसमा युधि | युयुधानो विराटश्च द्रुपदश्च महारथः || 1-4",
        meaning: "Here in this army are many heroic bowmen equal in fighting to Bhima and Arjuna: great fighters like Yuyudhana, Virata, and Drupada.",
        question: "Which three warriors does Duryodhana specifically mention as being equal to Bhima and Arjuna in battle?",
        answer: "Duryodhana mentions Yuyudhana (Satyaki), Virata, and Drupada as warriors equal to Bhima and Arjuna in fighting capability.",
        concept: "Verse 1.4 - Great Warriors"
    },
    { 
        shloka: "धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान् | पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः || 1-5",
        meaning: "There are also great, heroic, mighty archers like Dhrishtaketu, Chekitana, and the King of Kashi; Purujit, Kuntibhoja, and Shaibya—the best of men.",
        question: "Name the additional warriors Duryodhana identifies as formidable opponents in the Pandava army.",
        answer: "Dhrishtaketu, Chekitana, the King of Kashi, Purujit, Kuntibhoja, and Shaibya are mentioned as additional formidable warriors.",
        concept: "Verse 1.5 - Additional Warriors"
    },
    { 
        shloka: "युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान् | सौभद्रो द्रौपदेयाश्च सर्व एव महारथाः || 1-6",
        meaning: "There are the mighty Yudhamanyu, the very powerful Uttamauja, the son of Subhadra, and the sons of Draupadi. All these are great chariot warriors.",
        question: "Which family members of the Pandavas are specifically mentioned as great chariot warriors?",
        answer: "Abhimanyu (son of Subhadra and Arjuna) and the sons of Draupadi are mentioned as great chariot warriors in the Pandava army.",
        concept: "Verse 1.6 - Pandava Family Warriors"
    },
    { 
        shloka: "अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम | नायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते || 1-7",
        meaning: "But know, O best among the twice-born, who are the most distinguished on our side. I shall now name the commanders of my army for your information.",
        question: "What is Duryodhana preparing to do in this verse and whom is he addressing with respect?",
        answer: "Duryodhana is addressing Dronacharya as 'best among the twice-born' and is preparing to name the distinguished commanders of the Kaurava army.",
        concept: "Verse 1.7 - Kaurava Commanders Introduction"
    },
    { 
        shloka: "भवान्भीष्मश्च कर्णश्च कृपश्च समितिञ्जयः | अश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च || 1-8",
        meaning: "There are personalities like you, Bhishma, Karna, Kripa, Ashwatthama, Vikarna, and the son of Somadatta (Bhurishrava), who are always victorious in battle.",
        question: "List the key commanders of the Kaurava army that Duryodhana names to Dronacharya.",
        answer: "Duryodhana lists Dronacharya himself, Bhishma, Karna, Kripa, Ashwatthama, Vikarna, and Bhurishrava (son of Somadatta) as key commanders.",
        concept: "Verse 1.8 - Kaurava Leaders"
    },
    { 
        shloka: "अपरे च बहवः शूरा मदर्थे त्यक्तजीविताः | नानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः || 1-9",
        meaning: "There are many other heroes who are prepared to lay down their lives for my sake. They are all well-armed with various weapons and are all experienced in military science.",
        question: "What three qualities does Duryodhana attribute to the other warriors in his army?",
        answer: "Duryodhana states they are: 1) Prepared to sacrifice their lives for him, 2) Well-armed with various weapons, 3) Experienced in military science.",
        concept: "Verse 1.9 - Loyal Warriors' Qualities"
    },
    { 
        shloka: "अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम् | पर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम् || 1-10",
        meaning: "Our strength is immeasurable, and we are perfectly protected by Grandfather Bhishma, whereas the strength of the Pandavas, carefully protected by Bhima, is limited.",
        question: "How does Duryodhana compare the protective strengths of both armies?",
        answer: "Duryodhana claims the Kaurava army has immeasurable strength protected by Bhishma, while the Pandava army has limited strength protected by Bhima.",
        concept: "Verse 1.10 - Strength Comparison"
    },
    { 
        shloka: "अयनेषु च सर्वेषु यथाभागमवस्थिताः | भीष्ममेवाभिरक्षन्तु भवन्तः सर्व एव हि || 1-11",
        meaning: "All of you must now give full support to Grandfather Bhishma, as you stand at your respective strategic points in the phalanx of the army.",
        question: "What specific instruction does Duryodhana give to all the commanders regarding Bhishma?",
        answer: "Duryodhana instructs all commanders to give full support and protection to Bhishma while standing at their respective strategic positions.",
        concept: "Verse 1.11 - Support for Bhishma"
    },
    { 
        shloka: "तस्य सञ्जनयन्हर्षं कुरुवृद्धः पितामहः | सिंहनादं विनद्योच्चैः शङ्खं दध्मौ प्रतापवान् || 1-12",
        meaning: "Then Bhishma, the great valiant grandsire of the Kuru dynasty, the grandfather of the fighters, blew his conch shell very loudly, making a sound like the roar of a lion, giving joy to Duryodhana.",
        question: "What did Bhishma do to encourage Duryodhana and what was significant about his action?",
        answer: "Bhishma blew his conch shell loudly like a lion's roar to encourage Duryodhana, showing his support and boosting the morale of the Kaurava army.",
        concept: "Verse 1.12 - Bhishma's Encouragement"
    },
    { 
        shloka: "ततः शङ्खाश्च भेर्यश्च पणवानकगोमुखाः | सहसैवाभ्यहन्यन्त स शब्दस्तुमुलोऽभवत् || 1-13",
        meaning: "After that, the conch shells, drums, bugles, trumpets, and horns were all suddenly sounded, and the combined sound was tumultuous.",
        question: "What happened immediately after Bhishma blew his conch shell?",
        answer: "All the musical instruments of war - conch shells, drums, bugles, trumpets, and horns - were suddenly sounded together, creating a tumultuous noise.",
        concept: "Verse 1.13 - War Instruments Sound"
    },
    { 
        shloka: "ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ | माधवः पाण्डवश्चैव दिव्यौ शङ्खौ प्रदध्मतुः || 1-14",
        meaning: "Then, seated in their great chariot, which was drawn by white horses, Madhava (Krishna) and the son of Pandu (Arjuna) blew their divine conch shells.",
        question: "Who blew their divine conch shells in response, and what was special about their chariot?",
        answer: "Krishna and Arjuna, seated in their chariot drawn by white horses, blew their divine conch shells in response to the Kaurava army's sounds.",
        concept: "Verse 1.14 - Krishna and Arjuna's Response"
    },
    { 
        shloka: "पाञ्चजन्यं हृषीकेशो देवदत्तं धनञ्जयः | पौण्ड्रं दध्मौ महाशङ्खं भीमकर्मा वृकोदरः || 1-15",
        meaning: "Lord Krishna blew His conch shell, called Panchajanya; Arjuna blew his, the Devadatta; and Bhima, the voracious eater and performer of herculean tasks, blew his terrific conch shell, called Paundra.",
        question: "What were the names of the conch shells blown by Krishna, Arjuna, and Bhima?",
        answer: "Krishna blew Panchajanya, Arjuna blew Devadatta, and Bhima blew Paundra - each conch had its own name and significance.",
        concept: "Verse 1.15 - Named Conch Shells"
    },
    { 
        shloka: "अनन्तविजयं राजा कुन्तीपुत्रो युधिष्ठिरः | नकुलः सहदेवश्च सुघोषमणिपुष्पकौ || 1-16",
        meaning: "King Yudhishthira, the son of Kunti, blew his conch shell, the Anantavijaya, and Nakula and Sahadeva blew the Sughosha and Manipushpaka.",
        question: "Which conch shells were blown by Yudhishthira, Nakula, and Sahadeva?",
        answer: "Yudhishthira blew Anantavijaya, Nakula blew Sughosha, and Sahadeva blew Manipushpaka.",
        concept: "Verse 1.16 - Pandava Brothers' Conch Shells"
    },
    { 
        shloka: "काश्यश्च परमेष्वासः शिखण्डी च महारथः | धृष्टद्युम्नो विराटश्च सात्यकिश्चापराजितः || 1-17",
        meaning: "The King of Kashi, an excellent archer, Shikhandi, the great chariot fighter, Dhrishtadyumna, Virata, and the unconquered Satyaki,",
        question: "Which five warriors from the Pandava side are mentioned as blowing their conch shells?",
        answer: "The King of Kashi, Shikhandi, Dhrishtadyumna, Virata, and Satyaki are mentioned as blowing their conch shells.",
        concept: "Verse 1.17 - Allied Warriors' Conch Shells"
    },
    { 
        shloka: "द्रुपदो द्रौपदेयाश्च सर्वशः पृथिवीपते | सौभद्रश्च महाबाहुः शङ्खान्दध्मुः पृथक्पृथक् || 1-18",
        meaning: "Drupada, the sons of Draupadi, and the son of Subhadra, the mighty-armed, O King, blew their respective conch shells from all sides.",
        question: "Who else from the Pandava side joined in blowing conch shells according to this verse?",
        answer: "Drupada, the sons of Draupadi, and Abhimanyu (son of Subhadra) also blew their respective conch shells from all sides.",
        concept: "Verse 1.18 - Additional Conch Shell Blowers"
    },
    { 
        shloka: "स घोषो धार्तराष्ट्राणां हृदयानि व्यदारयत् | नभश्च पृथिवीं चैव तुमुलोऽभ्यनुनादयन् || 1-19",
        meaning: "That tumultuous sound resounded through the sky and the earth, and it shattered the hearts of the sons of Dhritarashtra.",
        question: "What was the effect of the Pandava army's conch shell blowing on the Kaurava soldiers?",
        answer: "The tumultuous sound of the Pandava conch shells shattered the hearts of the Kaurava soldiers and resounded through both sky and earth.",
        concept: "Verse 1.19 - Psychological Impact"
    },
    { 
        shloka: "अथ व्यवस्थितान्दृष्ट्वा धार्तराष्ट्रान् कपिध्वजः | प्रवृत्ते शस्त्रसम्पाते धनुरुद्यम्य पाण्डवः || 1-20",
        meaning: "At that time, the son of Pandu (Arjuna), who had the emblem of Hanuman on the flag of his chariot, took up his bow and, seeing the sons of Dhritarashtra drawn in military array, spoke the following words to Lord Krishna.",
        question: "What did Arjuna do when he saw the Kaurava army arrayed for battle?",
        answer: "Arjuna took up his bow and prepared to speak to Krishna, noting that the Kaurava army was drawn in military array ready for battle.",
        concept: "Verse 1.20 - Arjuna's Preparation"
    },
    { 
        shloka: "अर्जुन उवाच | सेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत || 1-21",
        meaning: "Arjuna said: O infallible one, please draw my chariot between the two armies so that I may see those present here, who desire to fight,",
        question: "What specific request did Arjuna make to Krishna regarding the positioning of their chariot?",
        answer: "Arjuna requested Krishna to position their chariot between the two armies so he could see who had come to fight in this war.",
        concept: "Verse 1.21 - Arjuna's Request"
    },
    { 
        shloka: "यावदेतान्निरीक्षेऽहं योद्धुकामानवस्थितान् | कैर्मया सह योद्धव्यमस्मिन् रणसमुद्यमे || 1-22",
        meaning: "And with whom I must fight in this great trial of arms.",
        question: "What was Arjuna's intention in wanting to see the warriors arrayed for battle?",
        answer: "Arjuna wanted to identify with whom he would have to fight in this great battle that was about to begin.",
        concept: "Verse 1.22 - Identifying Opponents"
    },
    { 
        shloka: "योत्स्यमानानवेक्षेऽहं य एतेऽत्र समागताः | धार्तराष्ट्रस्य दुर्बुद्धेर्युद्धे प्रियचिकीर्षवः || 1-23",
        meaning: "I wish to see those who have come here to fight, wishing to please the evil-minded son of Dhritarashtra.",
        question: "How does Arjuna describe Duryodhana and those fighting for him?",
        answer: "Arjuna describes Duryodhana as 'evil-minded' and those fighting for him as people trying to please him by participating in this war.",
        concept: "Verse 1.23 - Characterization of Kauravas"
    },
    { 
        shloka: "सञ्जय उवाच | एवमुक्तो हृषीकेशो गुडाकेशेन भारत | सेनयोरुभयोर्मध्ये स्थापयित्वा रथोत्तमम् || 1-24",
        meaning: "Sanjaya said: O descendant of Bharata, having thus been addressed by Arjuna, Lord Krishna drew up the fine chariot in the midst of the armies of both parties.",
        question: "How did Krishna respond to Arjuna's request about positioning the chariot?",
        answer: "Krishna immediately complied with Arjuna's request and positioned their excellent chariot between the two armies as requested.",
        concept: "Verse 1.24 - Krishna's Compliance"
    },
    { 
        shloka: "भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम् | उवाच पार्थ पश्यैतान्समवेतान्कुरूनिति || 1-25",
        meaning: "In the presence of Bhishma, Drona, and all the other chieftains of the world, the Lord said: Just behold, O Partha, all the Kurus assembled here.",
        question: "In front of whom did Krishna position the chariot and what did he tell Arjuna?",
        answer: "Krishna positioned the chariot in front of Bhishma, Drona, and all world leaders, telling Arjuna to behold all the assembled Kurus.",
        concept: "Verse 1.25 - Krishna's Instruction"
    },
    { 
        shloka: "तत्रापश्यत्स्थितान्पार्थः पितॄनथ पितामहान् | आचार्यान्मातुलान्भ्रातॄन्पुत्रान्पौत्रान्सखींस्तथा || 1-26",
        meaning: "There Arjuna could see, standing before him, fathers, grandfathers, teachers, maternal uncles, brothers, sons, grandsons, and friends too.",
        question: "What relationships did Arjuna recognize among the warriors in the Kaurava army?",
        answer: "Arjuna saw fathers, grandfathers, teachers, maternal uncles, brothers, sons, grandsons, and friends - all his relatives and respected elders.",
        concept: "Verse 1.26 - Family Recognition"
    },
    { 
        shloka: "श्वशुरान्सुहृदश्चैव सेनयोरुभयोरपि | तान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान् || 1-27",
        meaning: "He saw fathers-in-law and friends in both armies. When the son of Kunti, Arjuna, saw all these different grades of friends and relatives,",
        question: "What additional relationships did Arjuna observe in both armies?",
        answer: "Arjuna also saw fathers-in-law and friends standing in both armies, making the situation even more emotionally challenging for him.",
        concept: "Verse 1.27 - Extended Relationships"
    },
    { 
        shloka: "कृपया परयाविष्टो विषीदन्निदमब्रवीत् | प्रसन्नवदनो विष्णुस्तदा वचनमब्रवीत् || 1-28",
        meaning: "He became overwhelmed with compassion and, being thus afflicted with grief, he spoke the following words. O Vishnu [Krishna], seeing your friends and relatives present before you in such a fighting spirit,",
        question: "What was Arjuna's emotional state when he saw all his relatives arrayed for battle?",
        answer: "Arjuna became overwhelmed with compassion and grief, feeling deeply afflicted at the prospect of fighting against his own relatives and loved ones.",
        concept: "Verse 1.28 - Arjuna's Emotional Turmoil"
    },
    { 
        shloka: "अर्जुन उवाच | दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम् || 1-29",
        meaning: "Arjuna said: My dear Krishna, seeing my friends and relatives present before me in such a fighting spirit,",
        question: "How does Arjuna begin expressing his distress to Krishna?",
        answer: "Arjuna begins by addressing Krishna and expressing his distress at seeing his own friends and relatives eager to fight against him.",
        concept: "Verse 1.29 - Arjuna's Distress Begins"
    },
    { 
        shloka: "सीदन्ति मम गात्राणि मुखं च परिशुष्यति | वेपथुश्च शरीरे मे रोमहर्षश्च जायते || 1-30",
        meaning: "I am feeling my limbs quivering and my mouth drying up. My body is trembling, and my hair is standing on end.",
        question: "What physical symptoms of distress does Arjuna describe experiencing?",
        answer: "Arjuna describes his limbs quivering, mouth drying up, body trembling, and hair standing on end - all physical manifestations of extreme emotional distress.",
        concept: "Verse 1.30 - Physical Symptoms of Distress"
    },
    { 
        shloka: "गाण्डीवं स्रंसते हस्तात्त्वक्चैव परिदह्यते | न च शक्नोम्यवस्थातुं भ्रमतीव च मे मनः || 1-31",
        meaning: "The Gandiva bow is slipping from my hand, and my skin is burning. I am unable to stand here any longer. I am forgetting myself, and my mind is reeling.",
        question: "What specific problems does Arjuna mention regarding his ability to fight?",
        answer: "Arjuna mentions his bow slipping from his hand, his skin burning, inability to stand steady, mental confusion, and his mind reeling - showing complete breakdown of his warrior composure.",
        concept: "Verse 1.31 - Breakdown of Warrior Spirit"
    },
    { 
        shloka: "निमित्तानि च पश्यामि विपरीतानि केशव | न च श्रेयोऽनुपश्यामि हत्वा स्वजनमाहवे || 1-32",
        meaning: "I see omens that are not good, O Keshava. I do not see any good in killing my own kinsmen in this battle.",
        question: "What two concerns does Arjuna express about the impending battle?",
        answer: "Arjuna sees bad omens and cannot perceive any good coming from killing his own kinsmen in this war.",
        concept: "Verse 1.32 - Omens and Moral Concern"
    },
    { 
        shloka: "न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च | किं नो राज्येन गोविन्द किं भोगैर्जीवितेन वा || 1-33",
        meaning: "I do not desire victory, O Krishna, nor kingdom, nor pleasures. Of what use is a kingdom to us, O Govinda, or pleasures, or even life itself?",
        question: "What does Arjuna say he no longer desires from this war?",
        answer: "Arjuna states he no longer desires victory, kingdom, pleasures, or even life itself, showing complete disillusionment with the material rewards of war.",
        concept: "Verse 1.33 - Renunciation of Desires"
    },
    { 
        shloka: "येषामर्थे काङ्क्षितं नो राज्यं भोगाः सुखानि च | त इमेऽवस्थिता युद्धे प्राणांस्त्यक्त्वा धनानि च || 1-34",
        meaning: "Those for whose sake we desire kingdom, enjoyments, and pleasures are standing here in battle, having renounced their lives and wealth.",
        question: "What irony does Arjuna point out about the people they would be fighting for?",
        answer: "Arjuna notes the irony that the very people for whom they want kingdom and pleasures are standing ready to sacrifice their lives and wealth in this battle.",
        concept: "Verse 1.34 - The Irony of War"
    },
    { 
        shloka: "आचार्याः पितरः पुत्रास्तथैव च पितामहाः | मातुलाः श्वशुराः पौत्राः श्यालाः सम्बन्धिनस्तथा || 1-35",
        meaning: "Teachers, fathers, sons, and also grandfathers; maternal uncles, fathers-in-law, grandsons, brothers-in-law, and other relatives.",
        question: "Which specific family relationships does Arjuna list that make this battle particularly painful?",
        answer: "Arjuna lists teachers, fathers, sons, grandfathers, maternal uncles, fathers-in-law, grandsons, brothers-in-law, and other relatives - emphasizing the deep family connections.",
        concept: "Verse 1.35 - Detailed Family Relationships"
    },
    { 
        shloka: "एतान्न हन्तुमिच्छामि घ्नतोऽपि मधुसूदन | अपि त्रैलोक्यराज्यस्य हेतोः किं नु महीकृते || 1-36",
        meaning: "I do not wish to kill them, even if they kill me, O Madhusudana, even for the dominion of the three worlds, let alone for this earthly kingdom.",
        question: "How strongly does Arjuna feel about not fighting his relatives?",
        answer: "So strongly that he would not fight them even if they killed him, and not even for the dominion of the three worlds, let alone this earthly kingdom.",
        concept: "Verse 1.36 - Absolute Refusal to Fight"
    },
    { 
        shloka: "निहत्य धार्तराष्ट्रान्नः का प्रीतिः स्याज्जनार्दन | पापमेवाश्रयेदस्मान्हत्वैतानाततायिनः || 1-37",
        meaning: "O Janardana, what pleasure will we derive from killing the sons of Dhritarashtra? Only sin will accrue to us by killing these aggressors.",
        question: "What does Arjuna believe will be the consequence of killing the Kauravas?",
        answer: "Arjuna believes no pleasure will come from it, only sin will accrue to them, even though the Kauravas are the aggressors.",
        concept: "Verse 1.37 - Fear of Sin"
    },
    { 
        shloka: "तस्मान्नार्हा वयं हन्तुं धार्तराष्ट्रान्स्वबान्धवान् | स्वजनं हि कथं हत्वा सुखिनः स्याम माधव || 1-38",
        meaning: "Therefore, we should not kill the sons of Dhritarashtra, who are our own relatives. O Madhava, how can we be happy by killing our own kinsmen?",
        question: "What rhetorical question does Arjuna ask about happiness after killing relatives?",
        answer: "Arjuna asks how they can possibly be happy after killing their own kinsmen, emphasizing the impossibility of finding joy in such an act.",
        concept: "Verse 1.38 - The Happiness Question"
    },
    { 
        shloka: "यद्यप्येते न पश्यन्ति लोभोपहतचेतसः | कुलक्षयकृतं दोषं मित्रद्रोहे च पातकम् || 1-39",
        meaning: "Although these men, with intelligence overwhelmed by greed, see no fault in killing one's family or quarreling with friends,",
        question: "How does Arjuna characterize the mental state of those who want to fight?",
        answer: "He says their intelligence is overwhelmed by greed, preventing them from seeing the fault in killing family and fighting with friends.",
        concept: "Verse 1.39 - Characterization of Opponents' Mindset"
    },
    { 
        shloka: "कथं न ज्ञेयमस्माभिः पापादस्मान्निवर्तितुम् | कुलक्षयकृतं दोषं प्रपश्यद्भिर्जनार्दन || 1-40",
        meaning: "Why should we, who clearly see the evil in the destruction of the family, not turn away from this sin, O Janardana?",
        question: "What responsibility does Arjuna feel given his clear understanding of the situation?",
        answer: "Arjuna feels responsible to turn away from this sin since he clearly sees the evil in destroying the family.",
        concept: "Verse 1.40 - Responsibility of Awareness"
    },
    { 
        shloka: "कुलक्षये प्रणश्यन्ति कुलधर्माः सनातनाः | धर्मे नष्टे कुलं कृत्स्नमधर्मोऽभिभवत्युत || 1-41",
        meaning: "With the destruction of the family, the eternal family traditions are destroyed, and thus the rest of the family becomes involved in irreligion.",
        question: "What is the first consequence Arjuna mentions of family destruction?",
        answer: "The destruction of eternal family traditions and traditions, leading the remaining family members to irreligion.",
        concept: "Verse 1.41 - Destruction of Family Traditions"
    },
    { 
        shloka: "अधर्माभिभवात्कृष्ण प्रदुष्यन्ति कुलस्त्रियः | स्त्रीषु दुष्टासु वार्ष्णेय जायते वर्णसङ्करः || 1-42",
        meaning: "When irreligion is prominent, O Krishna, the women of the family become corrupted, and when women are corrupted, O descendant of Vrishni, unwanted progeny are born.",
        question: "What chain of corruption does Arjuna describe following the destruction of family traditions?",
        answer: "Irreligion leads to corruption of women, which leads to unwanted progeny being born, disrupting the social order.",
        concept: "Verse 1.42 - Social Corruption Chain"
    },
    { 
        shloka: "सङ्करो नरकायैव कुलघ्नानां कुलस्य च | पतन्ति पितरो ह्येषां लुप्तपिण्डोदकक्रियाः || 1-43",
        meaning: "An increase of unwanted population certainly causes hellish life both for the family and for those who destroy the family. The ancestors of such corrupt families fall down, because the performances for offering them food and water are entirely stopped.",
        question: "What happens to the ancestors when family traditions are destroyed?",
        answer: "The ancestors fall down because the rituals for offering them food and water (pinda and water offerings) are stopped when family traditions are destroyed.",
        concept: "Verse 1.43 - Consequences for Ancestors"
    },
    { 
        shloka: "दोषैरेतैः कुलघ्नानां वर्णसङ्करकारकैः | उत्साद्यन्ते जातिधर्माः कुलधर्माश्च शाश्वताः || 1-44",
        meaning: "By the evil deeds of those who destroy the family tradition and thus give rise to unwanted children, all kinds of community projects and family welfare activities are devastated.",
        question: "What broader social impacts does Arjuna foresee from the destruction of family traditions?",
        answer: "All community projects and family welfare activities are devastated, affecting the entire social structure.",
        concept: "Verse 1.44 - Social Devastation"
    },
    { 
        shloka: "उत्सन्नकुलधर्माणां मनुष्याणां जनार्दन | नरके नियतं वासो भवतीत्यनुशुश्रुम || 1-45",
        meaning: "O Janardana, I have heard from the learned that those who destroy family traditions dwell always in hell.",
        question: "What has Arjuna heard from learned sources about destroyers of family traditions?",
        answer: "He has heard that those who destroy family traditions are destined to dwell in hell.",
        concept: "Verse 1.45 - The Hellish Consequence"
    },
    { 
        shloka: "अहो बत महत्पापं कर्तुं व्यवसिता वयम् | यद्राज्यसुखलोभेन हन्तुं स्वजनमुद्यताः || 1-46",
        meaning: "Alas, how strange it is that we are preparing to commit greatly sinful acts. Driven by the desire for royal pleasures, we are intent on killing our own kinsmen.",
        question: "What does Arjuna find strange about their current situation?",
        answer: "He finds it strange that they are preparing to commit great sins by killing their own relatives, driven merely by desire for royal pleasures.",
        concept: "Verse 1.46 - The Strange Situation"
    },
    { 
        shloka: "यदि मामप्रतीकारमशस्त्रं शस्त्रपाणयः | धार्तराष्ट्रा रणे हन्युस्तन्मे क्षेमतरं भवेत् || 1-47",
        meaning: "If the sons of Dhritarashtra, with weapons in hand, should kill me in battle, while I am unarmed and unresisting, that would be better for me.",
        question: "What alternative does Arjuna propose that would be better than fighting?",
        answer: "Arjuna says it would be better for him to be killed unarmed and unresisting by the Kauravas than to fight and kill his own relatives.",
        concept: "Verse 1.47 - Arjuna's Final Resolution"
    }
];