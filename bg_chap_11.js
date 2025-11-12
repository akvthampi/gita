// --- bg_chap_11.js ---
const chapterMetadata = {
    title: "Chapter 11: The Yoga of the Cosmic Form",
    info: "Vishvarupa Darshana Yoga - Yoga of the Vision of the Universal Form (55 verses)"
};
const flashcards = [
    { 
        shloka: "अर्जुन उवाच | मदनुग्रहाय परमं गुह्यमध्यात्मसंज्ञितम् | यत्त्वयोक्तं वचस्तेन मोहोऽयं विगतो मम || 11-1",
        meaning: "Arjuna said: By my hearing this most confidential spiritual knowledge, which You have so kindly revealed for my benefit, my illusion is now dispelled.",
        question: "What effect did Krishna's teachings have on Arjuna?",
        answer: "His illusion has been dispelled by hearing this confidential spiritual knowledge.",
        concept: "Verse 11.1 - Illusion Dispelled"
    },
    { 
        shloka: "भवाप्ययौ हि भूतानां श्रुतौ विस्तरशो मया | त्वत्तः कमलपत्राक्ष माहात्म्यमपि चाव्ययम् || 11-2",
        meaning: "O lotus-eyed one, I have heard from You in detail about the origin and dissolution of living beings, and also about Your imperishable glory.",
        question: "What has Arjuna heard about from Krishna?",
        answer: "The origin and dissolution of beings, and Krishna's imperishable glory.",
        concept: "Verse 11.2 - Knowledge Received"
    },
    { 
        shloka: "एवमेतद्यथात्थ त्वमात्मानं परमेश्वर | द्रष्टुमिच्छामि ते रूपमैश्वरं पुरुषोत्तम || 11-3",
        meaning: "O Supreme Lord, You are as You have described Yourself to be. Now I wish to see Your divine universal form, O Supreme Person.",
        question: "What does Arjuna now request from Krishna?",
        answer: "To see Krishna's divine universal form (Vishvarupa).",
        concept: "Verse 11.3 - Request to See Universal Form"
    },
    { 
        shloka: "मन्यसे यदि तच्छक्यं मया द्रष्टुमिति प्रभो | योगेश्वर ततो मे त्वं दर्शयात्मानमव्ययम् || 11-4",
        meaning: "If You think, O my Lord, that I am able to behold Your cosmic form, then, O Lord of all mystic power, reveal to me Your imperishable Self.",
        question: "How does Arjuna qualify his request?",
        answer: "If Krishna thinks Arjuna can bear it, he requests to see the imperishable universal form.",
        concept: "Verse 11.4 - Qualified Request"
    },
    { 
        shloka: "श्रीभगवानुवाच | पश्य मे पार्थ रूपाणि शतशोऽथ सहस्रशः | नानाविधानि दिव्यानि नानावर्णाकृतीनि च || 11-5",
        meaning: "The Blessed Lord said: Behold, O son of Pritha, the hundreds and thousands of My multifarious divine forms of various colors and shapes.",
        question: "What does Krishna tell Arjuna to behold?",
        answer: "Hundreds of thousands of multifarious divine forms of various colors and shapes.",
        concept: "Verse 11.5 - Revelation Begins"
    },
    { 
        shloka: "पश्यादित्यान्वसून्रुद्रानश्विनौ मरुतस्तथा | बहून्यदृष्टपूर्वाणि पश्याश्चर्याणि भारत || 11-6",
        meaning: "See now the Adityas, Vasus, Rudras, the two Ashvins, and also the Maruts. Behold many wonders never seen before, O Bharata.",
        question: "What divine beings does Krishna show?",
        answer: "Adityas, Vasus, Rudras, Ashvins, Maruts - many wonders never seen before.",
        concept: "Verse 11.6 - Divine Beings Revealed"
    },
    { 
        shloka: "इहैकस्थं जगत्कृत्स्नं पश्याद्य सचराचरम् | मम देहे गुडाकेश यच्चान्यद्द्रष्टुमिच्छसि || 11-7",
        meaning: "Now see here in My body, O Gudakesa, the entire universe moving and nonmoving, and whatever else you wish to see.",
        question: "What can Arjuna see in Krishna's universal form?",
        answer: "The entire universe with all moving and nonmoving beings, and anything else he wishes.",
        concept: "Verse 11.7 - Entire Universe in One Place"
    },
    { 
        shloka: "न तु मां शक्यसे द्रष्टुमनेनैव स्वचक्षुषा | दिव्यं ददामि ते चक्षुः पश्य मे योगमैश्वरम् || 11-8",
        meaning: "But you cannot see Me with your present eyes. Therefore I give you divine eyes. Behold My mystic opulence!",
        question: "Why does Krishna give Arjuna divine vision?",
        answer: "Because human eyes cannot perceive the universal form; divine vision is needed.",
        concept: "Verse 11.8 - Divine Vision Granted"
    },
    { 
        shloka: "सञ्जय उवाच | एवमुक्त्वा ततो राजन्महायोगेश्वरो हरिः | दर्शयामास पार्थाय परमं रूपमैश्वरम् || 11-9",
        meaning: "Sanjaya said: O King, having spoken thus, the great Lord of mysticism, Hari, showed to Arjuna His supreme universal form.",
        question: "What did Krishna show to Arjuna?",
        answer: "His supreme universal form (Vishvarupa).",
        concept: "Verse 11.9 - Universal Form Revealed"
    },
    { 
        shloka: "अनेकवक्त्रनयनमनेकाद्भुतदर्शनम् | अनेकदिव्याभरणं दिव्यानेकोद्यतायुधम् || 11-10",
        meaning: "With numerous faces and eyes, presenting many wondrous sights, adorned with many divine ornaments, armed with many divine uplifted weapons.",
        question: "How is the universal form described?",
        answer: "Many faces/eyes, wondrous sights, divine ornaments, divine uplifted weapons.",
        concept: "Verse 11.10 - Description of Universal Form"
    },
    { 
        shloka: "दिव्यमाल्याम्बरधरं दिव्यगन्धानुलेपनम् | सर्वाश्चर्यमयं देवमनन्तं विश्वतोमुखम् || 11-11",
        meaning: "Wearing divine garlands and garments, anointed with divine fragrances, composed of all wonders, resplendent, boundless, and facing all directions.",
        question: "What are the glorious features of the universal form?",
        answer: "Divine garlands/fragrances, all wonders, resplendent, boundless, facing all directions.",
        concept: "Verse 11.11 - Glorious Features"
    },
    { 
        shloka: "दिवि सूर्यसहस्रस्य भवेद्युगपदुत्थिता | यदि भाः सदृशी सा स्याद्भासस्तस्य महात्मनः || 11-12",
        meaning: "If hundreds of thousands of suns were to rise at once into the sky, their radiance might resemble the splendor of that great being.",
        question: "How is the splendor of the universal form compared?",
        answer: "Like the combined radiance of thousands of suns rising simultaneously.",
        concept: "Verse 11.12 - Unimaginable Splendor"
    },
    { 
        shloka: "तत्रैकस्थं जगत्कृत्स्नं प्रविभक्तमनेकधा | अपश्यद्देवदेवस्य शरीरे पाण्डवस्तदा || 11-13",
        meaning: "At that time Arjuna saw in the universal form of the Lord the entire universe situated in one place, although divided into many, many thousands.",
        question: "What did Arjuna see in the universal form?",
        answer: "The entire universe situated in one place, though divided into many thousands.",
        concept: "Verse 11.13 - Universe in One Place"
    },
    { 
        shloka: "ततः स विस्मयाविष्टो हृष्टरोमा धनञ्जयः | प्रणम्य शिरसा देवं कृताञ्जलिरभाषत || 11-14",
        meaning: "Then, bewildered and astonished, his hair standing on end, Arjuna bowed his head to offer obeisances and with folded hands began to pray to the Supreme Lord.",
        question: "How did Arjuna react to seeing the universal form?",
        answer: "Bewildered, astonished, hair standing on end, he bowed and prayed with folded hands.",
        concept: "Verse 11.14 - Arjuna's Awe-Struck Reaction"
    },
    { 
        shloka: "अर्जुन उवाच | पश्यामि देवांस्तव देव देहे सर्वांस्तथा भूतविशेषसङ्घान् | ब्रह्माणमीशं कमलासनस्थमृषींश्च सर्वानुरगांश्च दिव्यान् || 11-15",
        meaning: "Arjuna said: My dear Lord Krishna, I see assembled in Your body all the demigods and various other living entities. I see Brahma sitting on the lotus flower, as well as Lord Shiva and all the sages and divine serpents.",
        question: "What does Arjuna see in the universal form?",
        answer: "All demigods, Brahma on lotus, Shiva, sages, divine serpents - all living entities.",
        concept: "Verse 11.15 - Vision of All Beings"
    },
    { 
        shloka: "अनेकबाहूदरवक्त्रनेत्रं पश्यामि त्वां सर्वतोऽनन्तरूपम् | नान्तं न मध्यं न पुनस्तवादिं पश्यामि विश्वेश्वर विश्वरूप || 11-16",
        meaning: "O universal form, I see You with infinite forms, with many arms, stomachs, faces, and eyes, but I see in You no end, no middle, and no beginning.",
        question: "What are the infinite qualities Arjuna sees?",
        answer: "Infinite forms, many arms/stomachs/faces/eyes, no beginning/middle/end.",
        concept: "Verse 11.16 - Infinite Qualities"
    },
    { 
        shloka: "किरीटिनं गदिनं चक्रिणं च तेजोराशिं सर्वतो दीप्तिमन्तम् | पश्यामि त्वां दुर्निरीक्ष्यं समन्ताद्दीप्तानलार्कद्युतिमप्रमेयम् || 11-17",
        meaning: "I see You with crown, club, disc, and mass of radiance, difficult to behold, shining everywhere with immeasurable brilliance of sun and fire.",
        question: "How is the form's radiance described?",
        answer: "With crown/club/disc, mass of radiance difficult to behold, brilliance like sun and fire.",
        concept: "Verse 11.17 - Radiant Form"
    },
    { 
        shloka: "त्वमक्षरं परमं वेदितव्यं त्वमस्य विश्वस्य परं निधानम् | त्वमव्ययः शाश्वतधर्मगोप्ता सनातनस्त्वं पुरुषो मतो मे || 11-18",
        meaning: "You are the supreme primal objective; You are the ultimate resting place of this universe; You are inexhaustible, the oldest; You are the maintainer of eternal religion, the eternal Person—this is my opinion.",
        question: "What is Arjuna's realization about Krishna?",
        answer: "Supreme objective, universe's resting place, inexhaustible, oldest, maintainer of eternal religion.",
        concept: "Verse 11.18 - Realization of Supreme Nature"
    },
    { 
        shloka: "अनादिमध्यान्तमनन्तवीर्यमनन्तबाहुं शशिसूर्यनेत्रम् | पश्यामि त्वां दीप्तहुताशवक्त्रं स्वतेजसा विश्वमिदं तपन्तम् || 11-19",
        meaning: "I see You without beginning, middle, or end, with infinite power, with innumerable arms, the moon and sun as Your eyes, Your mouth as blazing fire scorching this universe with Your radiance.",
        question: "What cosmic features does Arjuna see?",
        answer: "No beginning/middle/end, infinite power, innumerable arms, sun/moon eyes, blazing mouth.",
        concept: "Verse 11.19 - Cosmic Features"
    },
    { 
        shloka: "द्यावापृथिव्योरिदमन्तरं हि व्याप्तं त्वयैकेन दिशश्च सर्वाः | दृष्ट्वाद्भुतं रूपमुग्रं तवेदं लोकत्रयं प्रव्यथितं महात्मन् || 11-20",
        meaning: "Although You are one, You spread throughout the sky and the planets and all space between. O great one, seeing this wondrous and terrible form, all the planetary systems are perturbed.",
        question: "How does the universal form pervade existence?",
        answer: "Though one, it spreads throughout sky, planets, all space - perturbing all planetary systems.",
        concept: "Verse 11.20 - All-Pervading Nature"
    },
    { 
        shloka: "अमी हि त्वां सुरसङ्घाः विशन्ति केचिद्भीताः प्राञ्जलयो गृणन्ति | स्वस्तीत्युक्त्वा महर्षिसिद्धसङ्घाः स्तुवन्ति त्वां स्तुतिभिः पुष्कलाभिः || 11-21",
        meaning: "All the hosts of demigods are entering into You, some afraid with folded hands, offering prayers. Great sages and perfected beings, saying 'All peace,' praise You with glorious hymns.",
        question: "How are celestial beings reacting?",
        answer: "Demigods entering Him, some afraid with folded hands, sages and perfected beings praising.",
        concept: "Verse 11.21 - Celestial Beings' Reaction"
    },
    { 
        shloka: "रुद्रादित्या वसवो ये च साध्या विश्वेऽश्विनौ मरुतश्चोष्मपाश्च | गन्धर्वयक्षासुरसिद्धसङ्घा वीक्षन्ते त्वां विस्मिताश्चैव सर्वे || 11-22",
        meaning: "The Rudras, Adityas, Vasus, Sadhyas, Vishvedevas, two Ashvins, Maruts, Ushmapas, Gandharvas, Yakshas, Asuras, and Siddhas—all are gazing at You in great wonder.",
        question: "Which beings are gazing in wonder?",
        answer: "Rudras, Adityas, Vasus, Sadhyas, Vishvedevas, Ashvins, Maruts, Ushmapas, Gandharvas, Yakshas, Asuras, Siddhas.",
        concept: "Verse 11.22 - All Beings in Awe"
    },
    { 
        shloka: "रूपं महत्ते बहुवक्त्रनेत्रं महाबाहो बहुबाहूरुपादम् | बहूदरं बहुदंष्ट्राकरालं दृष्ट्वा लोकाः प्रव्यथितास्तथाहम् || 11-23",
        meaning: "O mighty-armed one, all the planets with their demigods are disturbed to see Your great form with its many faces, eyes, arms, thighs, legs, bellies, and terrible teeth.",
        question: "What disturbs the planets and their inhabitants?",
        answer: "The great form with many faces/eyes/arms/legs/bellies and terrible teeth.",
        concept: "Verse 11.23 - Terrifying Aspects"
    },
    { 
        shloka: "नभःस्पृशं दीप्तमनेकवर्णं व्यात्ताननं दीप्तविशालनेत्रम् | दृष्ट्वा हि त्वां प्रव्यथितान्तरात्मा धृतिं न विन्दामि शमं च विष्णो || 11-24",
        meaning: "O Vishnu, seeing You touching the sky, shining with many colors, with wide-open mouths and large glowing eyes, my mind is terrified and I can no longer maintain composure or peace.",
        question: "How does Arjuna feel seeing the form?",
        answer: "Terrified, losing composure and peace, unable to maintain steadiness.",
        concept: "Verse 11.24 - Arjuna's Terror"
    },
    { 
        shloka: "दंष्ट्राकरालानि च ते मुखानि दृष्ट्वैव कालानलसन्निभानि | दिशो न जाने न लभे च शर्म प्रसीद देवेश जगन्निवास || 11-25",
        meaning: "Seeing Your mouths with terrible teeth, blazing like fires of cosmic dissolution, I lose sense of direction and find no peace. Be gracious, O Lord of lords, refuge of the universe.",
        question: "What specifically terrifies Arjuna?",
        answer: "Mouths with terrible teeth blazing like cosmic dissolution fires.",
        concept: "Verse 11.25 - Terror of Cosmic Dissolution"
    },
    { 
        shloka: "अमी च त्वां धृतराष्ट्रस्य पुत्राः सर्वे सहैवावनिपालसङ्घैः | भीष्मो द्रोणः सूतपुत्रस्तथासौ सहास्मदीयैरपि योधमुख्यैः || 11-26",
        meaning: "All the sons of Dhritarashtra along with their allied kings, and Bhishma, Drona, Karna, and our chief soldiers too—",
        question: "Who does Arjuna see entering the universal form?",
        answer: "Dhritarashtra's sons, allied kings, Bhishma, Drona, Karna, and their own chief warriors.",
        concept: "Verse 11.26 - Warriors Entering the Form"
    },
    { 
        shloka: "वक्त्राणि ते त्वरमाणा विशन्ति दंष्ट्राकरालानि भयानकानि | केचिद्विलग्ना दशनान्तरेषु सन्दृश्यन्ते चूर्णितैरुत्तमाङ्गैः || 11-27",
        meaning: "Rushing headlong into Your fearful mouths with terrible teeth, some are seen with crushed heads caught between Your teeth.",
        question: "What happens to the warriors?",
        answer: "They rush into the fearful mouths, some with crushed heads caught between teeth.",
        concept: "Verse 11.27 - Warriors Being Devoured"
    },
    { 
        shloka: "यथा नदीनां बहवोऽम्बुवेगाः समुद्रमेवाभिमुखा द्रवन्ति | तथा तवामी नरलोकवीरा विशन्ति वक्त्राण्यभिविज्वलन्ति || 11-28",
        meaning: "As many torrents of rivers flow toward the ocean, so do these heroes of the mortal world enter into Your blazing mouths.",
        question: "How is the entry of warriors described?",
        answer: "Like rivers flowing toward the ocean, heroes enter the blazing mouths.",
        concept: "Verse 11.28 - River to Ocean Analogy"
    },
    { 
        shloka: "यथा प्रदीप्तं ज्वलनं पतङ्गा विशन्ति नाशाय समृद्धवेगाः | तथैव नाशाय विशन्ति लोकास्तवापि वक्त्राणि समृद्धवेगाः || 11-29",
        meaning: "As moths enter a blazing fire to perish, so all these people are rapidly entering Your mouths to their own destruction.",
        question: "What second analogy describes the destruction?",
        answer: "Like moths rushing into blazing fire to perish.",
        concept: "Verse 11.29 - Moth to Flame Analogy"
    },
    { 
        shloka: "लेलिह्यसे ग्रसमानः समन्ताल्लोकान्समग्रान्वदनैर्ज्वलद्भिः | तेजोभिरापूर्य जगत्समग्रं भासस्तवोग्राः प्रतपन्ति विष्णो || 11-30",
        meaning: "O Vishnu, You are licking up all the worlds on every side with Your flaming mouths, devouring them. Your fierce radiance is scorching the entire universe, filling it with splendor.",
        question: "How is the universal form consuming everything?",
        answer: "Licking up all worlds with flaming mouths, scorching universe with fierce radiance.",
        concept: "Verse 11.30 - Universal Consumption"
    },
    { 
        shloka: "आख्याहि मे को भवानुग्ररूपो नमोऽस्तु ते देववर प्रसीद | विज्ञातुमिच्छामि भवन्तमाद्यं न हि प्रजानामि तव प्रवृत्तिम् || 11-31",
        meaning: "O Supreme Lord, tell me who You are in this fierce form. My obeisances to You; be gracious. I wish to understand You, the primal one, for I do not know Your mission.",
        question: "What does Arjuna ask about the fierce form?",
        answer: "Who Krishna is in this fierce form, and what His mission is.",
        concept: "Verse 11.31 - Inquiry About Fierce Form"
    },
    { 
        shloka: "श्रीभगवानुवाच | कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्तः | ऋतेऽपि त्वां न भविष्यन्ति सर्वे येऽवस्थिताः प्रत्यनीकेषु योधाः || 11-32",
        meaning: "The Blessed Lord said: I am time, the great destroyer of worlds, come here to annihilate all people. Even without your participation, all the warriors arrayed in the opposing armies shall cease to exist.",
        question: "Who does Krishna say He is?",
        answer: "Time, the great destroyer of worlds, come to annihilate all people.",
        concept: "Verse 11.32 - Krishna as Time"
    },
    { 
        shloka: "तस्मात्त्वमुत्तिष्ठ यशो लभस्व जित्वा शत्रून्भुङ्क्ष्व राज्यं समृद्धम् | मयैवैते निहताः पूर्वमेव निमित्तमात्रं भव सव्यसाचिन् || 11-33",
        meaning: "Therefore, arise and gain glory! Conquer your enemies and enjoy a flourishing kingdom. These warriors have already been destroyed by Me; you be merely an instrument, O Savyasacin.",
        question: "What is Krishna's instruction to Arjuna?",
        answer: "Arise, fight, gain glory - be merely an instrument as the warriors are already destroyed.",
        concept: "Verse 11.33 - Instruction to Fight"
    },
    { 
        shloka: "द्रोणं च भीष्मं च जयद्रथं च कर्णं तथान्यानपि योधवीरान् | मया हतांस्त्वं जहि मा व्यथिष्ठा युध्यस्व जेतासि रणे सपत्नान् || 11-34",
        meaning: "Drona, Bhishma, Jayadratha, Karna, and other great warriors have already been destroyed by Me. Therefore, kill them and do not be disturbed. Simply fight, and you will vanquish your enemies in battle.",
        question: "Which specific warriors are mentioned as already destroyed?",
        answer: "Drona, Bhishma, Jayadratha, Karna, and other great warriors.",
        concept: "Verse 11.34 - Already Destroyed Warriors"
    },
    { 
        shloka: "सञ्जय उवाच | एतच्छ्रुत्वा वचनं केशवस्य कृताञ्जलिर्वेपमानः किरीटी | नमस्कृत्वा भूय एवाह कृष्णं सगद्गदं भीतभीतः प्रणम्य || 11-35",
        meaning: "Sanjaya said: Hearing these words of Keshava, the crowned Arjuna, with folded hands and trembling, offered obeisances. Fearful and stammering, he bowed again and addressed Krishna.",
        question: "How does Arjuna react to Krishna's words?",
        answer: "Trembling with folded hands, fearful, stammering, offering repeated obeisances.",
        concept: "Verse 11.35 - Arjuna's Fearful Response"
    },
    { 
        shloka: "अर्जुन उवाच | स्थाने हृषीकेश तव प्रकीर्त्या जगत्प्रहृष्यत्यनुरज्यते च | रक्षांसि भीतानि दिशो द्रवन्ति सर्वे नमस्यन्ति च सिद्धसङ्घाः || 11-36",
        meaning: "Arjuna said: O Hrishikesha, rightly do the worlds rejoice and glorify You; demons flee in fear, and all hosts of perfected beings bow down to You.",
        question: "How do different beings react to Krishna's glory?",
        answer: "Worlds rejoice, demons flee in fear, perfected beings bow down.",
        concept: "Verse 11.36 - Universal Reactions"
    },
    { 
        shloka: "कस्माच्च ते न नमेरन्महात्मन् गरीयसे ब्रह्मणोऽप्यादिकर्त्रे | अनन्त देवेश जगन्निवास त्वमक्षरं सदसत्तत्परं यत् || 11-37",
        meaning: "O great one, greater even than Brahma, You are the original creator. Why should they not offer You homage, O limitless one, refuge of the universe, You who are beyond cause and effect?",
        question: "Why should all beings offer homage to Krishna?",
        answer: "As greater than Brahma, original creator, limitless, refuge of universe, beyond cause/effect.",
        concept: "Verse 11.37 - Reason for Homage"
    },
    { 
        shloka: "त्वमादिदेवः पुरुषः पुराणस्त्वमस्य विश्वस्य परं निधानम् | वेत्तासि वेद्यं च परं च धाम त्वया ततं विश्वमनन्तरूप || 11-38",
        meaning: "You are the original God, the primordial Person, the supreme resting place of this universe. You are the knower, the object of knowledge, and the supreme abode. By You is this universe pervaded, O infinite form.",
        question: "What are Krishna's supreme positions?",
        answer: "Original God, primordial Person, universe's resting place, knower, known, supreme abode.",
        concept: "Verse 11.38 - Supreme Positions"
    },
    { 
        shloka: "वायुर्यमोऽग्निर्वरुणः शशाङ्कः प्रजापतिस्त्वं प्रपितामहश्च | नमो नमस्तेऽस्तु सहस्रकृत्वः पुनश्च भूयोऽपि नमो नमस्ते || 11-39",
        meaning: "You are Vayu, Yama, Agni, Varuna, the moon, Prajapati, and the great-grandfather. Obeisances unto You a thousand times, and again and again obeisances unto You!",
        question: "Which deities does Arjuna recognize in Krishna?",
        answer: "Vayu, Yama, Agni, Varuna, moon, Prajapati, great-grandfather.",
        concept: "Verse 11.39 - Recognition of Various Forms"
    },
    { 
        shloka: "नमः पुरस्तादथ पृष्ठतस्ते नमोऽस्तु ते सर्वत एव सर्व | अनन्तवीर्यामितविक्रमस्त्वं सर्वं समाप्नोषि ततोऽसि सर्वः || 11-40",
        meaning: "Obeisances from front and behind! Obeisances from all sides, O all! You are infinite prowess and boundless might. You pervade all; therefore You are all.",
        question: "How does Arjuna offer comprehensive obeisances?",
        answer: "From front, behind, all sides - recognizing Krishna as infinite, boundless, pervading all.",
        concept: "Verse 11.40 - Comprehensive Obeisances"
    },
    { 
        shloka: "सखेति मत्वा प्रसभं यदुक्तं हे कृष्ण हे यादव हे सखेति | अजानता महिमानं तवेदं मया प्रमादात्प्रणयेन वापि || 11-41",
        meaning: "Thinking of You merely as a friend, I have rashly addressed You 'O Krishna,' 'O Yadava,' 'O friend,' not knowing Your glories. Please forgive whatever I may have done in madness or in love.",
        question: "Why does Arjuna ask for forgiveness?",
        answer: "For addressing Krishna casually as friend without knowing His glories, whether in madness or love.",
        concept: "Verse 11.41 - Asking Forgiveness"
    },
    { 
        shloka: "यच्चावहासार्थमसत्कृतोऽसि विहारशय्यासनभोजनेषु | एकोऽथवाप्यच्युत तत्समक्षं तत्क्षामये त्वामहमप्रमेयम् || 11-42",
        meaning: "I have insulted You for fun while at play, resting, sitting, or at meals, alone or in company. O infallible one, please forgive me for all my offenses.",
        question: "In what situations did Arjuna insult Krishna?",
        answer: "At play, resting, sitting, meals - both alone and in company, for fun.",
        concept: "Verse 11.42 - Past Insults"
    },
    { 
        shloka: "पितासि लोकस्य चराचरस्य त्वमस्य पूज्यश्च गुरुर्गरीयान् | न त्वत्समोऽस्त्यभ्यधिकः कुतोऽन्यो लोकत्रयेऽप्यप्रतिमप्रभाव || 11-43",
        meaning: "You are the father of this world, moving and unmoving. You are its object of worship, the supreme spiritual master. There is no one equal to You, how can there be anyone greater? O You of incomparable power.",
        question: "What relationships does Arjuna acknowledge?",
        answer: "Father of world, object of worship, supreme guru - none equal or greater.",
        concept: "Verse 11.43 - Supreme Relationships"
    },
    { 
        shloka: "तस्मात्प्रणम्य प्रणिधाय कायं प्रसादये त्वामहमीशमीड्यम् | पितेव पुत्रस्य सखेव सख्युः प्रियः प्रियायार्हसि देव सोढुम् || 11-44",
        meaning: "Therefore, bowing down, prostrating my body, I ask Your mercy, O adorable Lord. As a father to his son, a friend to a friend, a lover to his beloved, please bear with me, O God.",
        question: "How does Arjuna ask for mercy?",
        answer: "Bowing, prostrating, asking like son to father, friend to friend, beloved to lover.",
        concept: "Verse 11.44 - Plea for Mercy"
    },
    { 
        shloka: "अदृष्टपूर्वं हृषितोऽस्मि दृष्ट्वा भयेन च प्रव्यथितं मनो मे | तदेव मे दर्शय देव रूपं प्रसीद देवेश जगन्निवास || 11-45",
        meaning: "Having seen what was never seen before, I am joyful, yet my mind is distressed with fear. Therefore, please reveal Your four-armed form, O God; be gracious, O Lord of lords, abode of the universe.",
        question: "What does Arjuna request now?",
        answer: "To see Krishna's four-armed form instead of the terrifying universal form.",
        concept: "Verse 11.45 - Request for Four-Armed Form"
    },
    { 
        shloka: "किरीटिनं गदिनं चक्रहस्तमिच्छामि त्वां द्रष्टुमहं तथैव | तेनैव रूपेण चतुर्भुजेन सहस्रबाहो भव विश्वमूर्ते || 11-46",
        meaning: "I wish to see You as before, with crown, club, disc in hand. O thousand-armed universal form, please assume that four-armed form.",
        question: "How does Arjuna describe the form he wants to see?",
        answer: "With crown, club, disc in hand - the four-armed form.",
        concept: "Verse 11.46 - Description of Desired Form"
    },
    { 
        shloka: "श्रीभगवानुवाच | मया प्रसन्नेन तवार्जुनेदं रूपं परं दर्शितमात्मयोगात् | तेजोमयं विश्वमनन्तमाद्यं यन्मे त्वदन्येन न दृष्टपूर्वम् || 11-47",
        meaning: "The Blessed Lord said: By My grace, through My divine power, O Arjuna, I have shown you this supreme, shining, primeval, infinite universal form, which none but you has ever seen.",
        question: "Why was Arjuna able to see the universal form?",
        answer: "By Krishna's grace and divine power - a vision granted to no one else.",
        concept: "Verse 11.47 - Grace Revealing Universal Form"
    },
    { 
        shloka: "न वेदयज्ञाध्ययनैर्न दानैर्न च क्रियाभिर्न तपोभिरुग्रैः | एवंरूपः शक्य अहं नृलोके द्रष्टुं त्वदन्येन कुरुप्रवीर || 11-48",
        meaning: "O best of the Kurus, no one before you has ever seen this universal form of Mine, for it cannot be seen by Vedic study, sacrifice, charity, rituals, or severe austerities.",
        question: "How can the universal form not be seen?",
        answer: "Not by Vedic study, sacrifice, charity, rituals, or severe austerities - only by divine grace.",
        concept: "Verse 11.48 - Inaccessibility of Vision"
    },
    { 
        shloka: "मा ते व्यथा मा च विमूढभावो दृष्ट्वा रूपं घोरमीदृङ्ममेदम् | व्यपेतभीः प्रीतमनाः पुनस्त्वं तदेव मे रूपमिदं प्रपश्य || 11-49",
        meaning: "Do not be disturbed or bewildered by seeing this terrible form of Mine. Free from fear and happy at heart, behold again My other form.",
        question: "What does Krishna tell Arjuna?",
        answer: "Don't be disturbed; free from fear and happy, behold His other form.",
        concept: "Verse 11.49 - Comforting Arjuna"
    },
    { 
        shloka: "सञ्जय उवाच | इत्यर्जुनं वासुदेवस्तथोक्त्वा स्वकं रूपं दर्शयामास भूयः | आश्वासयामास च भीतमेनं भूत्वा पुनः सौम्यवपुर्महात्मा || 11-50",
        meaning: "Sanjaya said: Having thus spoken to Arjuna, Vasudeva showed him His own four-armed form and then again His two-armed form, thus assuring the terrified Arjuna.",
        question: "What forms does Krishna show after the universal form?",
        answer: "First four-armed form, then two-armed form to comfort terrified Arjuna.",
        concept: "Verse 11.50 - Return to Original Form"
    },
    { 
        shloka: "अर्जुन उवाच | दृष्ट्वेदं मानुषं रूपं तव सौम्यं जनार्दन | इदानीमस्मि संवृत्तः सचेताः प्रकृतिं गतः || 11-51",
        meaning: "Arjuna said: Seeing this humanlike, gentle and beautiful form of Yours, O Janardana, I have now become composed and returned to my normal nature.",
        question: "How does Arjuna feel seeing Krishna's human form?",
        answer: "Composed and returned to normal nature, relieved from terror.",
        concept: "Verse 11.51 - Return to Composure"
    },
    { 
        shloka: "श्रीभगवानुवाच | सुदुर्दर्शमिदं रूपं दृष्टवानसि यन्मम | देवा अप्यस्य रूपस्य नित्यं दर्शनकाङ्क्षिणः || 11-52",
        meaning: "The Blessed Lord said: This form of Mine which you have seen is very difficult to behold. Even the demigods are ever eager to see this form.",
        question: "How rare is the vision of the universal form?",
        answer: "Very difficult to behold; even demigods constantly desire to see it.",
        concept: "Verse 11.52 - Rarity of the Vision"
    },
    { 
        shloka: "नाहं वेदैर्न तपसा न दानेन न चेज्यया | शक्य एवंविधो द्रष्टुं दृष्टवानसि मां यथा || 11-53",
        meaning: "I cannot be seen as you have seen Me by Vedic study, nor by austerity, nor by charity, nor by sacrifice. I can be seen and known in this form only by undivided devotional service.",
        question: "How can Krishna truly be seen and known?",
        answer: "Only by undivided devotional service, not by Vedic study, austerity, charity, or sacrifice.",
        concept: "Verse 11.53 - Only Through Devotion"
    },
    { 
        shloka: "मत्कर्मकृन्मत्परमो मद्भक्तः सङ्गवर्जितः | निर्वैरः सर्वभूतेषु यः स मामेति पाण्डव || 11-54",
        meaning: "One who works for Me, who accepts Me as the supreme goal, who is devoted to Me, free from attachment and hostility toward all beings—such a devotee certainly comes to Me, O son of Pandu.",
        question: "What are the qualities of one who attains Krishna?",
        answer: "Works for Krishna, accepts Him as supreme goal, devoted, free from attachment/hostility to all beings.",
        concept: "Verse 11.54 - Qualities of True Devotee"
    },
    { 
        shloka: "भक्त्या त्वनन्यया शक्य अहमेवंविधोऽर्जुन | ज्ञातुं द्रष्टुं च तत्त्वेन प्रवेष्टुं च परन्तप || 11-55",
        meaning: "O conqueror of enemies, indeed only by undivided devotional service can I be known in this form, seen as I am, and entered into.",
        question: "How can Krishna be truly known, seen, and entered?",
        answer: "Only by undivided devotional service (ananya bhakti).",
        concept: "Verse 11.55 - Exclusive Devotion Required"
    }
];