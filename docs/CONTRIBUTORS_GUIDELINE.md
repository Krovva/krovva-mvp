# 🚀 Commit and Branch Guide | Krovva

Welcome to **Krovva**! This guide will help you collaborate efficiently on our project. By following these conventions, we ensure the codebase stays clear and organized, making reviews and development smoother for everyone.

---

## 🛠️ The Basics

Before you start, here are some key points:

- **Use lowercase for branch names and commit messages**: Keeps everything uniform.
- **Keep commit messages short and clear**: If a commit requires a lot of explanation, consider breaking it down.
- **Limit commit titles to 72 characters**: Use the extended description for additional details if needed.
- **One commit, one purpose**: Group related changes into a single commit. For unrelated changes, create separate commits.

---

## 🌳 Branch Naming: Clear and Consistent

Use the following structure to name branches, so everyone can understand their purpose at a glance:

### **Format:**

`<prefix>/<short-description>`

### **Main Prefixes:**

- **feat/** – For new features.
- **fix/** – For bug fixes.
- **remove/** – For removing files or features.
- **docs/** – For documentation updates.
- **style/** – For visual or formatting changes (no logic adjustments).
- **refactor/** – For restructuring code without changing functionality.
- **perf/** – For performance improvements.
- **test/** – For adding or updating tests.
- **build/** – For changes to the build system or dependencies.
- **ci/** – For continuous integration changes.
- **chore/** – For maintenance and routine tasks.

---

### **Example Branch Names:**

- `feat/user-authentication`
- `fix/cart-error`
- `docs/api-endpoints`
- `style/navbar-icons`

---

## ✍️ Writing Effective Commits

Keep your commit messages meaningful and clear to help others understand your changes.

### **Commit Format:**

`<type>: <what you did>`

### **Main Types:**

- **feat** – For new features.
- **fix** – For bug fixes.
- **docs** – For documentation updates.
- **style** – For formatting or appearance changes.
- **refactor** – For code restructuring without changing functionality.
- **perf** – For performance optimizations.
- **test** – For adding or updating tests.
- **build** – For dependency or build tool updates.
- **ci** – For CI/CD changes.
- **chore** – For maintenance tasks.
- **update** – For non-functional changes or minor improvements.

---

### **Key Commit Rules:**

- **Be clear and direct**: Write commits that explain exactly what was done.
- **Use present tense**: _"add email validation"_ instead of _"added email validation"_.
- **Avoid temporary or unclear commits**: Keep incomplete work in a local branch or create a draft PR if necessary.

---

### **Example Commit Messages:**

- `feat: implement product search`
- `fix: resolve payment form validation`
- `docs: update API sections`
- `style: adjust margins on header`

---

## Why This Matters

A clean commit history makes code reviews, collaboration, and troubleshooting faster and more efficient. By following this guide, we can keep the project organized and maintain high-quality standards.

---

## Thank You for Contributing!

By adhering to these guidelines, you help ensure the long-term success and clarity of this project. If you have suggestions to improve this guide, feel free to share them with us!

🚀 Let’s build something great together!
