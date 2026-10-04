# SIIP NextGEN STEM Diagnostic Test - Development Documentation

This document serves as a comprehensive reference for the implementation, rules, and logic of the STEM Diagnostic Test project. It is designed to provide context for future AI agents or developers analyzing this codebase.

## 📌 Project Overview
- **Goal**: A premium, interactive STEM diagnostic test with **exactly 78 questions** (SIIP NextGEN EntryTest).
- **Structure**:
  - **SECCIÓN A**: Ciencias Fundamentales (A1–A25: Física, Química y Biología) — 25 ítems.
  - **SECCIÓN B**: Física Universal (B1–B37) — 37 ítems.
  - **SECCIÓN C**: Tecnología, Innovación y Educación STEM (C1–C16) — 16 ítems.
- **Standard**: Aligned to PISA 2025 "Scientific Literacy" framework and JóvenesSTEM / BlueBook curriculum.
- **Project Root**: `/Users/yepz/entrytest`
- **Target Audience**: Students in STEM preparatory programs.

## 🛠️ Technical Stack
- **Frontend**: Vanilla HTML5, CSS3 (Glassmorphism design), and JavaScript (ES Modules).
- **Backend (Database)**: Firebase Firestore (Compat SDK) for storing survey data and test results.
- **Admin**: Discreet access via a hidden dot button with password protection.
- **Deployment**: Automatic push to GitHub (`yepzhi/entrytest`).

## 📜 Development History & Request Log
Below is the chronological history of requirements requested by the user during development:

1.  **Survey Enhancement**: Added specific family-related STEM questions:
    -   "¿Tus papas te hablan de tecnologia de vez en cuando o de ciencias?"
    -   "¿Hay ingenieros o cientificos en la familia?"
    -   "¿Sientes admiracion por ellos?"
2.  **Admin Panel**:
    -   Discreet access button with password: `JStem14`.
    -   Visual list of massive results with score per category and student name.
    -   Export functionality to **Excel**.
    -   Cloud integration via **Firebase**.
3.  **UI/UX Fixes**:
    -   Persistent language selector (ES, EN, CN).
    -   Resolved "Infinite Loading Loop" caused by recursive logo errors.
    -   Fixed scrolling issues on the student profile survey.
    -   Fixed "Begin Test" button and state clearing.
4.  **Security & Anti-Cheat**:
    -   **Instrument Capacity**: 78 curated questions from the official thesis / BlueBook instrument.
    -   **Per-Question Timer**: 40-second limit per question to deter external AI assistance.
    -   **Question Shuffling**: Shuffled presentation per session while tracking original indices.
5.  **Folio & Resumption (v1.5)**:
    -   Generation of a unique tracking Folio (**`JSTEM-XXXXX`**).
    -   **Resume with Folio**: Users can resume a test if interrupted by entering their Folio ID.
    -   **Firebase Progress Sync**: State (answers, indices, time) is saved to Firestore after every question transition.
    -   **Spanish Default**: Hardcoded Spanish as the default language.
    -   **Confirmation Screen**: Displays the folio and a simulated email confirmation.
6.  **Instrument Calibration & Answer Key Alignment (v2.1)**:
    -   Synchronized all 78 questions with official answer key (A1–A25, B1–B37, C1–C16).
    -   Differentiated duplicate questions B14 (astronomical classification on HR diagram) and B15 (nuclear fusion process H->He).
    -   Refined scientific rigor on questions B9 (impact timing vs cosmic age), B13 (Hubble expansion vs 1998 acceleration), B18 (mass/temperature requirement for heavy element nucleosynthesis), B27 (core-collapse massive star neutron star formation), B29 (Andromeda collision ~4.0-4.5 billion years), and B35 (Cosmic calendar human history ~10-14 seconds).

## ⚙️ Core Logic & Implementation Rules

### 1. Question Bank (`questions.js`)
- **Capacity**: Must always maintain **78 questions** (25 en Ciencias Fundamentales, 37 en Física Universal, 16 en Tecnología e Innovación STEM).
- **Structure**: Objects with `id` ("A1".."C16"), `category`, `question`, `options` (array), `answer` (0-based index), and `points` (1).
- **Shuffling**: `state.shuffledQuestions` is generated at the start of each session via the Fisher-Yates algorithm.

### 2. Authentication & Admin (`admin.html`)
- **Admin Access**: Bottom-right dot button (`.admin-dot-btn`).
- **Session Auth**: Stores `adminAuth: 'true'` in `sessionStorage` after successful login (`JStem14`).

### 3. Timing Mechanism
- **Total Time**: `state.secondsElapsed` increments every second globally.
- **Question Timer**: `state.questionSecondsRemaining` starts at 40 for each question.
- **Timeout Logic**: At zero, the response is marked as `-1` (timeout) and `showNext()` is triggered automatically.

### 4. Internationalization (`translations.js`)
- **Mapping**: The `categoryMap` in `main.js` translates raw categories from `questions.js` into i18n keys for UI display (`cat_fundamentals`, `cat_universal_phys`, `cat_stem_innov`).
- **UI Elements**: All translatable elements use the `data-i18n` attribute.

### 5. Data Schema (Firebase)
- **Collection**: `results`
- **Document ID**: Folio ID (`JSTEM-XXXXX`).
- **Fields**: `email`, `survey` (object), `currentQuestionIndex`, `answers` (array of indices), `shuffledIndices`, `secondsElapsed`, `status` (`'in-progress'` or `'completed'`), `score`, `timestamp`.

---
*Updated on 2026-10-04 by Antigravity AI for yepzhi.*
