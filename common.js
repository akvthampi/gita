// common.js - Common JavaScript functionality for all flashcard index pages

// DOM Elements
let chaptersGrid;
let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// PROJECT_ID_GLOBAL is defined in index.html before this script runs.
const PROJECT_ID = typeof PROJECT_ID_GLOBAL !== 'undefined' ? PROJECT_ID_GLOBAL : 'DEFAULT_';

function getStoragePrefix() {
    return PROJECT_ID;
}

// Initialize the app
function initApp(chapterData) {
    chaptersGrid = document.getElementById('chaptersGrid');
    if (!chaptersGrid) {
        console.error('chaptersGrid element not found');
        return;
    }
    
    // Core function call to render chapters
    renderChapters(chapterData);
    
    setupEventListeners();
    setupTouchSupport();
    loadResumeFeature();
}

// Render chapters
function renderChapters(chapters) {
    let chaptersHTML = '';
    
    chapters.forEach((chapter, index) => {
        // Construct the file path using the index (0-based) + 1, padded to two digits (e.g., '01', '02')
        const chapterNumber = String(index + 1).padStart(2, '0');
        const chapterFile = `flashcard_template.html?chap=${chapterNumber}`;
        
        chaptersHTML += `
            <div class="chapter-card" data-file="${chapterFile}" data-name="${chapter.name}">
                <div class="chapter-icon">
                    <i class="${chapter.icon}"></i>
                </div>
                <div class="chapter-title">${chapter.name}</div>
                <div class="chapter-desc">${chapter.description}</div>
            </div>
        `;
    });
    
    chaptersGrid.innerHTML = chaptersHTML;
}

// Verify resume data is valid and matches existing chapters
function verifyResumeData(savedFile) {
    if (!savedFile) return null;
    
    // Extract chapter number from saved file
    const match = savedFile.match(/chap=(\d+)/);
    if (!match) return null;
    
    const chapterNum = match[1];
    // Verify this chapter exists in our data
    const chapters = document.querySelectorAll('.chapter-card');
    for (let card of chapters) {
        if (card.getAttribute('data-file').includes(`chap=${chapterNum}`)) {
            return card.getAttribute('data-file');
        }
    }
    return null;
}

// Checks localStorage and displays the resume box if data exists
function loadResumeFeature() {
    const storagePrefix = getStoragePrefix();
    
    // Retrieve the saved file URL key from localStorage
    const savedChapterFile = localStorage.getItem(storagePrefix + 'lastChapterVisited');
    
    // Debug logging (remove in production)
    console.log('Resume Debug:', {
        storagePrefix,
        savedChapterFile,
        allStorage: Object.keys(localStorage).filter(key => key.includes(storagePrefix))
    });

    if (!savedChapterFile) {
        console.log('No saved chapter found for resume feature');
        return;
    }

    const resumeContainer = document.getElementById('resume-container');
    const resumeLink = document.getElementById('resume-link');

    if (resumeContainer && resumeLink) {
        const verifiedFile = verifyResumeData(savedChapterFile);
        if (verifiedFile) {
            resumeContainer.style.display = 'block';
            resumeLink.href = verifiedFile;
            console.log('Resume feature activated for:', verifiedFile);
        } else {
            // Clear invalid resume data
            localStorage.removeItem(storagePrefix + 'lastChapterVisited');
            console.log('Invalid resume data cleared');
        }
    }
}

// Set up event listeners
function setupEventListeners() {
    document.querySelectorAll('.chapter-card').forEach(card => {
        card.addEventListener('click', handleChapterClick);
    });
    document.querySelectorAll('.published-card').forEach(card => {
        card.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            handleExternalNavigation(url);
        });
    });
}

// Setup touch support
function setupTouchSupport() {
    if (!isTouchDevice) return;
    const touchElements = document.querySelectorAll('.chapter-card, .published-card, .subject-card');
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        });
        element.addEventListener('touchend', function() {
            this.classList.remove('touch-active');
        });
    });
}

// Handle chapter click
function handleChapterClick(e) {
    const card = e.currentTarget;
    const chapterFile = card.getAttribute('data-file');
    handleNavigation(chapterFile);
}

// Handle external navigation
function handleExternalNavigation(url) {
    if (window.innerWidth <= 768 || isTouchDevice) {
        window.open(url, '_blank');
    } else {
        window.location.href = url;
    }
}

// Handle internal navigation
function handleNavigation(url) {
    if (window.innerWidth <= 768 || isTouchDevice) {
        window.open(url, '_blank');
    } else {
        window.location.href = url;
    }
}

// The external function called from index.html to start the app
function initializeFlashcardApp(chapterData) {
    document.addEventListener('DOMContentLoaded', function() {
        initApp(chapterData);
    });
}