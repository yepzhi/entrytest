# SIIP NextGEN STEM Diagnostic Test - Development Documentation

This document serves as a comprehensive reference for the implementation, rules, and logic of the STEM Diagnostic Test project. It is designed to provide context for future AI agents or developers analyzing this codebase.

## 📌 Project Overview
- **Goal**: A premium, interactive STEM diagnostic test (100 questions) based on PISA standards for "Scientific Literacy".
- **Target Audience**: Students being assessed in STEM competencies.
- **Project Root**: `/Users/yepz/entrytest`

## 🛠️ Technical Stack
- **Frontend**: Vanilla HTML5, CSS3 (Glassmorphism design), and JavaScript (ES Modules).
- **Backend (Database)**: Firebase Firestore (Compat SDK) for storing survey data and test results.
- **Deployment**: Integrated with GitHub for version control.

## ⚙️ Core Logic & Implementation Rules

### 1. Question Bank Logic
- **Fixed Count**: The test must contain exactly **100 questions**.
- **Data Source**: Questions are stored as a JSON-like array in `questions.js`.
- **Shuffling (Rotative Questions)**: Every new session generates a shuffled version of the question bank (`shuffleArray` in `main.js`). This ensures that no two test attempts follow the same order.

### 2. Folio & Resumption System
- **Folio Generation**: Each attempt generates a unique ID in the format **`JSTEM-XXXXX`** (using uppercase letters and numbers, excluding ambiguous characters).
- **Persistence**: 
    - Progress (answers, elapsed time, shuffled order) is synced to Firebase Firestore after every question.
    - Status is marked as `'in-progress'` until completion.
- **Resume Feature**: On the landing page, users can enter their Folio ID to resume from the last saved question with their specific shuffled order and accumulated time intact.

### 3. Anti-Cheat & Timing
- **Total Timer**: Tracks the total duration of the test attempt.
- **Per-Question Timer**: A **30-second countdown** is implemented for each question.
- **Auto-Advance**: If the 30-second timer reaches zero, the current question is marked as skipped (index -1), and the application auto-advances to the next question.

### 4. Internationalization (i18n)
- **Supported Languages**: Spanish (🇲🇽 ES), English (🇺🇸 EN), and Chinese (🇨🇳 CN).
- **Default Language**: **Spanish (ES)** is the hardcoded default on initialization, regardless of browser settings.
- **Dynamic Translation**: UI strings, question categories, and placeholders are managed via `translations.js`.

### 5. Admin & Results Management
- **Discreet Access**: Hidden entry point via a small dot button in the bottom-right corner of the footer.
- **Password Protection**: Access to `admin.html` is gated by the password **`JStem14`**.
- **Massive Results View**: The Admin Panel fetches all entries from Firebase, calculating scores and category performance on the fly.
- **Export**: Built-in support for exporting the results table to **Excel (.xlsx)** for mass data analysis.

## 📂 File Structure
- `index.html`: Main application shell (Welcome, Survey, Quiz, Results).
- `styles.css`: Custom Design System (Dark mode, glassmorphism, responsive utilities).
- `main.js`: Core state management and Firebase synchronization logic.
- `questions.js`: Centralized question repository (100 items).
- `translations.js`: All localized strings and category mappings.
- `admin.html`: Administrative interface for results management.

---
*Created on 2026-03-15 by Antigravity AI for yepzhi.*
