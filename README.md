# Bandung Tour & Travel Landing Page

A premium landing page for a Bandung tour and travel agency, targeting tourists from Malaysia and Singapore.

## Features

- **Multi-language Support**: English, Bahasa Melayu, Bahasa Indonesia using i18next.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Premium Aesthetics**: Soft Blue & White theme with smooth animations.
- **Dynamic Content**: i18next-based internationalization for instant language switching.
- **Automatic Language Detection**: Detects browser language automatically.
- **WhatsApp Integration**: Direct booking via WhatsApp with pre-filled messages.

## Tech Stack

- **Vite**: Fast build tool and development server.
- **Tailwind CSS v4**: Utility-first CSS framework for styling.
- **i18next**: Industry-standard internationalization library.
- **i18next-browser-languagedetector**: Automatic language detection.
- **Vanilla JavaScript**: Lightweight logic for interactivity.

## Setup & Installation

1.  **Clone the repository** (if applicable) or download the source code.
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```
4.  **Build for production**:
    ```bash
    npm run build
    ```
5.  **Preview the build**:
    ```bash
    npm run preview
    ```

## Deployment to GitHub Pages

This project is configured for automated deployment to GitHub Pages using GitHub Actions.

### Steps to Deploy:

1.  **Create a Repository**: Create a new repository on GitHub.
2.  **Update Config**: Open `vite.config.js` and change the `base` property to match your repository name:
    ```javascript
    base: '/your-repo-name/',
    ```
3.  **Push Code**: Push your code to the GitHub repository.
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    
    # Option 1: HTTPS
    git remote add origin https://github.com/your-username/your-repo-name.git
    
    # Option 2: SSH
    git remote add origin git@github.com:your-username/your-repo-name.git
    
    git push -u origin main
    ```
4.  **Enable Pages**:
    - Go to your repository **Settings** on GitHub.
    - Click on **Pages** in the left sidebar.
    - Under **Build and deployment**, select **GitHub Actions** as the source.
5.  **Wait for Build**: The GitHub Action will automatically build and deploy your site. You can check the progress in the **Actions** tab.

## Project Structure

- `index.html`: Main HTML file with data-i18n attributes for localization.
- `src/i18n.js`: i18next configuration and initialization.
- `src/main.js`: Dynamic content rendering and language switching logic.
- `src/style.css`: Tailwind CSS imports and custom styles.
- `src/locales/`: Translation files organized by language.
  - `en/translation.json`: English translations.
  - `ms/translation.json`: Bahasa Melayu translations.
  - `id/translation.json`: Bahasa Indonesia translations.
- `package.json`: Project metadata and scripts.

## i18next Integration

### How it Works:
1. **Automatic Detection**: Browser language is detected automatically
2. **Fallback**: Falls back to English if language is not available
3. **Persistence**: Language preference is saved in localStorage
4. **Dynamic Updates**: Content updates without page refresh

### Adding New Languages:
1. Create a new folder in `src/locales/` (e.g., `th/` for Thai)
2. Add `translation.json` with translated content
3. Update language buttons in HTML
4. Add language code to `langDisplay` object in `main.js`

## Customization

- **Add/Edit Packages**: Modify the `packages.items` array in translation files.
- **Add New Translations**: Add new keys to all translation files and use `data-i18n` attribute in HTML.
- **Change Colors**: Update the CSS variables in `src/style.css`.
- **Add New Languages**: Follow the steps in "Adding New Languages" section above.
