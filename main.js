import questions from './questions.js';
import translations from './translations.js';

// Application State
const state = {
    currentQuestionIndex: 0,
    answers: new Array(questions.length).fill(null),
    userEmail: '',
    surveyData: {
        firstName: '',
        lastName: '',
        school: 'demo',
        age: '',
        phone: 'android',
        homeInternet: 'yes',
        computer: 'yes',
        schoolInternet: 'yes',
        stemInterest: 'yes'
    },
    startTime: null,
    endTime: null,
    language: 'es',
    timerInterval: null,
    secondsElapsed: 0
};

// DOM Elements
const screens = {
    welcome: document.getElementById('welcome'),
    survey: document.getElementById('survey'),
    quiz: document.getElementById('quiz'),
    results: document.getElementById('results')
};

const elements = {
    startBtn: document.getElementById('startBtn'),
    beginTestBtn: document.getElementById('beginTestBtn'),
    userEmail: document.getElementById('userEmail'),
    
    // Survey Fields
    firstName: document.getElementById('firstName'),
    lastName: document.getElementById('lastName'),
    schoolSelect: document.getElementById('schoolSelect'),
    ageInput: document.getElementById('ageInput'),
    phoneToggle: document.getElementById('phoneToggle'),
    miniToggles: document.querySelectorAll('.mini-toggle'),
    stemInterestToggle: document.getElementById('stemInterest'),

    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    progressBar: document.getElementById('progressBar'),
    currentQuestionNum: document.getElementById('currentQuestionNum'),
    totalQuestionsNum: document.getElementById('totalQuestionsNum'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    categoryBadge: document.getElementById('categoryBadge'),
    finalScore: document.getElementById('finalScore'),
    categoryResults: document.getElementById('categoryResults'),
    retryBtn: document.getElementById('retryBtn'),
    timeVal: document.getElementById('timeVal'),
    timerDisplay: document.getElementById('timerDisplay'),
    langBtns: document.querySelectorAll('.lang-btn')
};

// Initialization
function init() {
    elements.totalQuestionsNum.textContent = questions.length;
    
    elements.startBtn.addEventListener('click', goToSurvey);
    elements.beginTestBtn.addEventListener('click', startQuiz);
    elements.prevBtn.addEventListener('click', showPrevious);
    elements.nextBtn.addEventListener('click', showNext);
    elements.retryBtn.addEventListener('click', resetQuiz);

    elements.langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });

    // Toggle logic for Survey
    setupToggles();

    // Detect browser language or default to ES
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) setLanguage(browserLang);
    else setLanguage('es');
}

function setupToggles() {
    // Phone Toggle
    elements.phoneToggle.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            elements.phoneToggle.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.surveyData.phone = btn.dataset.val;
        });
    });

    // Mini Toggles (Home internet, Computer, School internet)
    elements.miniToggles.forEach(toggle => {
        const key = toggle.dataset.key;
        toggle.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                toggle.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.surveyData[key] = btn.dataset.val;
            });
        });
    });

    // STEM Interest Toggle
    elements.stemInterestToggle.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            elements.stemInterestToggle.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.surveyData.stemInterest = btn.dataset.val;
        });
    });
}

// Language Logic
function setLanguage(lang) {
    state.language = lang;
    
    // Update active button UI
    elements.langBtns.forEach(btn => {
        if (btn.dataset.lang === lang) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    // Translate static elements
    const translatables = document.querySelectorAll('[data-i18n]');
    translatables.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        } else {
            console.warn(`Translation key not found: ${key} for lang: ${lang}`);
        }
    });

    // Translate placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // If quiz is running, reload question text
    if (screens.quiz.classList.contains('active')) {
        loadQuestion();
    }
}

// Timer Logic
function startTimer() {
    state.secondsElapsed = 0;
    elements.timerDisplay.style.display = 'block';
    state.timerInterval = setInterval(() => {
        state.secondsElapsed++;
        updateTimeDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(state.timerInterval);
}

function updateTimeDisplay() {
    const mins = Math.floor(state.secondsElapsed / 60);
    const secs = state.secondsElapsed % 60;
    elements.timeVal.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Navigation
function goToSurvey() {
    const email = elements.userEmail.value.trim();
    if (!email || !email.includes('@')) {
        alert(state.language === 'en' ? 'Please enter a valid email to continue.' : 'Por favor, introduce un correo electrónico válido.');
        return;
    }
    state.userEmail = email;
    switchScreen('survey');
}

function startQuiz() {
    // Collect survey data
    state.surveyData.firstName = elements.firstName.value.trim();
    state.surveyData.lastName = elements.lastName.value.trim();
    state.surveyData.school = elements.schoolSelect.value;
    state.surveyData.age = elements.ageInput.value;

    if (!state.surveyData.firstName || !state.surveyData.lastName) {
        alert(state.language === 'en' ? 'Please fill in your name and last name.' : 'Por favor, completa tu nombre y apellido.');
        return;
    }

    state.startTime = new Date();
    switchScreen('quiz');
    startTimer();
    loadQuestion();
}

function switchScreen(screenKey) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenKey].classList.add('active');
    window.scrollTo(0, 0);
}

function loadQuestion() {
    const question = questions[state.currentQuestionIndex];
    
    // Update UI
    elements.questionText.textContent = question.question;
    elements.categoryBadge.textContent = question.category;
    elements.currentQuestionNum.textContent = state.currentQuestionIndex + 1;
    
    // Update Progress
    const progress = ((state.currentQuestionIndex + 1) / questions.length) * 100;
    elements.progressBar.style.width = `${progress}%`;
    
    // Render Options
    elements.optionsContainer.innerHTML = '';
    question.options.forEach((opt, idx) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        if (state.answers[state.currentQuestionIndex] === idx) {
            optionEl.classList.add('selected');
        }
        
        optionEl.innerHTML = `
            <div class="option-dot"></div>
            <span class="option-text">${opt}</span>
        `;
        
        optionEl.addEventListener('click', () => selectOption(idx));
        elements.optionsContainer.appendChild(optionEl);
    });
    
    // Buttons state
    elements.prevBtn.disabled = state.currentQuestionIndex === 0;
    elements.nextBtn.innerHTML = state.currentQuestionIndex === questions.length - 1 ? translations[state.language].btn_finish : translations[state.language].btn_next;
    elements.nextBtn.disabled = state.answers[state.currentQuestionIndex] === null;
}

function selectOption(index) {
    state.answers[state.currentQuestionIndex] = index;
    
    // Refresh options UI
    const options = elements.optionsContainer.querySelectorAll('.option');
    options.forEach((opt, idx) => {
        if (idx === index) opt.classList.add('selected');
        else opt.classList.remove('selected');
    });
    
    elements.nextBtn.disabled = false;
}

function showPrevious() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        loadQuestion();
    }
}

function showNext() {
    if (state.currentQuestionIndex < questions.length - 1) {
        state.currentQuestionIndex++;
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    state.endTime = new Date();
    stopTimer();
    calculateResults();
    switchScreen('results');
}

function calculateResults() {
    let totalScore = 0;
    const catStats = {};
    
    questions.forEach((q, idx) => {
        const isCorrect = state.answers[idx] === q.answer;
        if (isCorrect) totalScore += q.points;
        
        if (!catStats[q.category]) {
            catStats[q.category] = { correct: 0, total: 0 };
        }
        catStats[q.category].total += q.points;
        if (isCorrect) catStats[q.category].correct += q.points;
    });
    
    // Update Score UI
    animateValue(elements.finalScore, 0, totalScore, 1000);
    
    // Render Category Breakdown
    elements.categoryResults.innerHTML = '';
    Object.entries(catStats).forEach(([cat, data]) => {
        const catPercentage = (data.correct / data.total) * 100;
        const catRow = document.createElement('div');
        catRow.className = 'cat-row';
        catRow.innerHTML = `
            <div class="cat-label">
                <span>${cat}</span>
                <span>${Math.round(catPercentage)}%</span>
            </div>
            <div class="cat-bar-bg">
                <div class="cat-bar-fill" style="width: 0%; transition: width 1s ease 0.5s"></div>
            </div>
        `;
        elements.categoryResults.appendChild(catRow);
        
        // Trigger animation after append
        setTimeout(() => {
            const bar = catRow.querySelector('.cat-bar-fill');
            if (bar) bar.style.width = `${catPercentage}%`;
        }, 100);
    });
}

function animateValue(obj, start, end, duration) {
    if (!obj) return;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function resetQuiz() {
    state.currentQuestionIndex = 0;
    state.answers = new Array(questions.length).fill(null);
    elements.userEmail.value = '';
    elements.firstName.value = '';
    elements.lastName.value = '';
    elements.ageInput.value = '';
    elements.timerDisplay.style.display = 'none';
    switchScreen('welcome');
}

// Start
init();
