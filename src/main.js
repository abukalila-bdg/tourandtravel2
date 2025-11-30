import './style.css';
import initI18n from './i18n.js';

let i18n;

function updateContent() {
  // Update simple text elements
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = i18n.t(key);
    if (translation !== key) {
      element.textContent = translation;
    }
  });

  // Update Packages
  const packagesContainer = document.getElementById('packages-container');
  packagesContainer.innerHTML = '';

  const packages = i18n.t('packages.items', { returnObjects: true });

  packages.forEach(pkg => {
    const pkgElement = document.createElement('div');
    pkgElement.className = 'bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2';
    pkgElement.innerHTML = `
      <h3 class="text-2xl font-bold text-primary-blue mb-4">${pkg.title}</h3>
      <p class="text-gray-600 mb-6">${pkg.desc}</p>
      <ul class="space-y-3 mb-8">
        ${pkg.highlights.map(highlight => `
          <li class="flex items-center text-gray-700">
            <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            ${highlight}
          </li>
        `).join('')}
      </ul>
      <a href="https://wa.me/6281234567890?text=I'm%20interested%20in%20${encodeURIComponent(pkg.title)}" target="_blank" class="block w-full text-center bg-soft-blue text-primary-blue font-bold py-3 rounded-xl hover:bg-primary-blue hover:text-white transition-colors">
        ${i18n.t('packages.book')}
      </a>
    `;
    packagesContainer.appendChild(pkgElement);
  });

  // Update Language Switcher Display
  const langDisplay = {
    'en': 'EN',
    'ms': 'MY',
    'id': 'ID'
  };
  document.getElementById('current-lang').textContent = langDisplay[i18n.language];
}

window.changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
  localStorage.setItem('language', lang);
  updateContent();
};

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  i18n = initI18n();
  // Wait for i18n to be ready
  await new Promise(resolve => {
    const checkReady = () => {
      if (i18n.isInitialized) {
        resolve();
      } else {
        setTimeout(checkReady, 10);
      }
    };
    checkReady();
  });
  updateContent();
});
