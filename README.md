# IPL Social - DevOps Exam - January 2026

**Student:** Alexane Dubois
**Email:** alexane.dubois@student.vinci.be

## GitHub Repository URL
https://github.com/alexane-dubois-vinci/IPL-social.git

## Project Description
This project implements an Email Validation library (`src/emailValidator.ts`) developed using **TypeScript** and **TDD** (Test Driven Development).

According to the exam requirements, the validation logic is built manually (without complex Regex) and enforces the following rules:
- The email must contain at least one `@` symbol.
- It must have characters before and after the `@` symbol.
- It must not contain any spaces.
- The domain part must contain at least one dot (`.`), but it cannot be the last character.

Each verification has been implemented following TDD's requirements, meaning that each commit focuses
on implementing a single verification before moving on to the next one.

A **GitHub Actions** CI pipeline is configured to automatically run the test suite on every Pull Request targeting the main branch.

## How to Run

**1. Install dependencies:**
```bash
npm install
```

**2. Run test**
```bash
npm test


