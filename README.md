# Bandung Tour & Travel Landing Page

A premium landing page for a Bandung tour and travel agency, targeting tourists from Malaysia and Singapore.

## Features

- **Multi-language Support**: English, Bahasa Melayu, Bahasa Indonesia.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Premium Aesthetics**: Soft Blue & White theme with smooth animations.
- **Dynamic Content**: JavaScript-based localization for instant language switching.
- **WhatsApp Integration**: Direct booking via WhatsApp with pre-filled messages.

## Tech Stack

- **Vite**: Fast build tool and development server.
- **Tailwind CSS v4**: Utility-first CSS framework for styling.
- **Vanilla JavaScript**: Lightweight logic for localization and interactivity.

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

- `index.html`: Main HTML file.
- `src/main.js`: Localization logic and dynamic content rendering.
- `src/style.css`: Tailwind CSS imports and custom styles.
- `package.json`: Project metadata and scripts.

## Customization

- **Add/Edit Packages**: Modify the `translations` object in `src/main.js`.
- **Change Colors**: Update the CSS variables in `src/style.css`.
