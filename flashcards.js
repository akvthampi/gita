// flashcards.js - Common JavaScript for all chapter flashcards

let currentIndex = 0;
let viewedCards = new Set();
let isFlipped = false;

// Use the same PROJECT_ID logic as common.js
const PROJECT_ID = typeof PROJECT_ID_GLOBAL !== 'undefined' ? PROJECT_ID_GLOBAL : 'DEFAULT_';

// Get consistent key prefix (domain-independent)
function getStoragePrefix() {
    return PROJECT_ID;
}

// Extract chapter ID from URL parameter (e.g., '01', '02', etc.)
const urlParams = new URLSearchParams(window.location.search);
const chapterId = 'bg_chap_' + urlParams.get('chap');

function loadCard() {
    // Check if flashcards array is loaded
    if (!flashcards || flashcards.length === 0) {
        document.getElementById('sanskritShloka').textContent = "Error loading data. Check bg_chap_XX.js file.";
        return;
    }
    
    const card = flashcards[currentIndex];
    
    // Set front side content (Question Side)
    document.getElementById('sanskritShloka').textContent = card.shloka;
    document.getElementById('shlokaMeaning').textContent = card.meaning;
    document.getElementById('questionText').textContent = card.question;
    
    // Set back side content (Answer Side)
    document.getElementById('answerText').textContent = card.answer;
    document.getElementById('concept').textContent = card.concept;
    
    document.getElementById('currentCard').textContent = currentIndex + 1;
    
    viewedCards.add(currentIndex);
    updateProgress();
    updateButtons();
    
    document.getElementById('flashcard').classList.remove('flipped');
    isFlipped = false;

    saveProgress();
}

function saveProgress() {
    const storagePrefix = getStoragePrefix();
    
    // Saves current card index
    localStorage.setItem(storagePrefix + 'progress_' + chapterId, currentIndex);
    
    // Saves the set of viewed cards
    localStorage.setItem(storagePrefix + 'viewed_' + chapterId, JSON.stringify(Array.from(viewedCards)));
    
    // Saves the current template URL as the last visited chapter for the Resume link
    const currentChapterUrl = window.location.pathname + window.location.search;
    localStorage.setItem(storagePrefix + 'lastChapterVisited', currentChapterUrl);
    
    console.log('Progress saved:', {
        chapterId,
        currentIndex,
        currentChapterUrl,
        viewedCards: viewedCards.size
    });
}

function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
    isFlipped = !isFlipped;
}

function nextCard() {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        loadCard();
    }
}

function previousCard() {
    if (currentIndex > 0) {
        currentIndex--;
        loadCard();
    }
}

function shuffleCards() {
    for (let i = flashcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
    }
    currentIndex = 0;
    viewedCards.clear();
    loadCard(); 
}

function resetCards() {
    currentIndex = 0;
    viewedCards.clear();
    loadCard(); 
}

function updateProgress() {
    const completion = Math.round((viewedCards.size / flashcards.length) * 100);
    document.getElementById('completionRate').textContent = completion + '%';
    document.getElementById('progressFill').style.width = completion + '%';
}

function updateButtons() {
    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('nextBtn').disabled = currentIndex === flashcards.length - 1;
}

function initializeFlashcards() {
    const storagePrefix = getStoragePrefix();
    
    document.getElementById('totalCards').textContent = flashcards.length;
    
    // Load saved progress
    const savedIndex = localStorage.getItem(storagePrefix + 'progress_' + chapterId);
    const savedViewed = localStorage.getItem(storagePrefix + 'viewed_' + chapterId);

    let initialIndex = 0;

    // Load the last saved progress automatically, or start at 0.
    if (savedIndex !== null) {
        initialIndex = parseInt(savedIndex, 10);
    }
    
    currentIndex = initialIndex; 
    
    if (savedViewed !== null) {
        viewedCards = new Set(JSON.parse(savedViewed));
    }

    console.log('Flashcards initialized:', {
        chapterId,
        totalCards: flashcards.length,
        initialIndex,
        viewedCards: viewedCards.size
    });

    loadCard();
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') previousCard();
        if (e.key === 'ArrowRight') nextCard();
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            flipCard();
        }
    });
}