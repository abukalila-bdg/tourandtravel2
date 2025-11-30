import './style.css';

const translations = {
  en: {
    nav: {
      home: "Home",
      destinations: "Destinations",
      packages: "Packages",
      contact: "Contact"
    },
    hero: {
      title: "Discover the Beauty of Bandung",
      subtitle: "Your premium gateway to the Paris of Java. Tailored for our friends from Malaysia & Singapore.",
      cta: "View Packages"
    },
    destinations: {
      title: "Popular Destinations",
      subtitle: "Explore the most visited places in Bandung",
      lembang: "Cool breeze and scenic nature views.",
      rumahmode: "The iconic fashion outlet of Bandung.",
      dusunbambu: "Family leisure park with nature dining.",
      trunojoyo: "Famous street for local shopping and culinary."
    },
    packages: {
      title: "Our Premium Packages",
      subtitle: "All packages include Jakarta Airport Pickup",
      book: "Book Now",
      items: [
        {
          title: "Lembang Nature Retreat",
          desc: "Experience the fresh air and greenery of Lembang.",
          highlights: ["Floating Market", "Farmhouse Lembang", "Orchid Forest", "Jakarta Airport Pickup"]
        },
        {
          title: "Bandung Shopping Spree",
          desc: "Shop 'til you drop at the best factory outlets.",
          highlights: ["Rumah Mode", "Jalan Trunojoyo", "Kartika Sari (Oleh-oleh)", "Jakarta Airport Pickup"]
        },
        {
          title: "Family Fun Adventure",
          desc: "Perfect getaway for families with kids.",
          highlights: ["Dusun Bambu", "Lembang Park & Zoo", "Trans Studio Bandung", "Jakarta Airport Pickup"]
        },
        {
          title: "The Complete Bandung",
          desc: "3 Days 2 Nights exploring the best of Bandung.",
          highlights: ["Kawah Putih", "Glamping Lakeside", "Braga Street Walk", "Jakarta Airport Pickup"]
        },
        {
          title: "Custom Trip",
          desc: "Design your own perfect Bandung itinerary.",
          highlights: ["Choose your destinations", "Flexible timing", "Private car & driver", "Jakarta Airport Pickup"]
        }
      ]
    },
    contact: {
      title: "Ready to Explore Bandung?",
      subtitle: "Contact us now to book your trip. We speak English, Malay, and Indonesian.",
      button: "Chat on WhatsApp"
    },
    footer: {
      about: "Providing the best travel experience in Bandung for our Malaysian and Singaporean guests.",
      links: "Quick Links",
      contact: "Contact"
    }
  },
  ms: {
    nav: {
      home: "Utama",
      destinations: "Destinasi",
      packages: "Pakej",
      contact: "Hubungi"
    },
    hero: {
      title: "Temui Keindahan Bandung",
      subtitle: "Gerbang premium anda ke Paris of Java. Khas untuk rakan-rakan dari Malaysia & Singapura.",
      cta: "Lihat Pakej"
    },
    destinations: {
      title: "Destinasi Popular",
      subtitle: "Terokai tempat-tempat paling popular di Bandung",
      lembang: "Udara sejuk dan pemandangan alam yang indah.",
      rumahmode: "Outlet fesyen ikonik di Bandung.",
      dusunbambu: "Taman rekreasi keluarga dengan tempat makan alam semula jadi.",
      trunojoyo: "Jalan terkenal untuk membeli-belah dan kulinari tempatan."
    },
    packages: {
      title: "Pakej Premium Kami",
      subtitle: "Semua pakej termasuk Penjemputan Lapangan Terbang Jakarta",
      book: "Tempah Sekarang",
      items: [
        {
          title: "Percutian Alam Lembang",
          desc: "Nikmati udara segar dan kehijauan Lembang.",
          highlights: ["Floating Market", "Farmhouse Lembang", "Orchid Forest", "Penjemputan Airport Jakarta"]
        },
        {
          title: "Syurga Membeli-belah",
          desc: "Beli-belah sakan di factory outlet terbaik.",
          highlights: ["Rumah Mode", "Jalan Trunojoyo", "Kartika Sari (Oleh-oleh)", "Penjemputan Airport Jakarta"]
        },
        {
          title: "Keriangan Keluarga",
          desc: "Percutian sempurna untuk keluarga dengan anak-anak.",
          highlights: ["Dusun Bambu", "Lembang Park & Zoo", "Trans Studio Bandung", "Penjemputan Airport Jakarta"]
        },
        {
          title: "Bandung Terlengkap",
          desc: "3 Hari 2 Malam menerokai yang terbaik di Bandung.",
          highlights: ["Kawah Putih", "Glamping Lakeside", "Jalan Braga", "Penjemputan Airport Jakarta"]
        },
        {
          title: "Trip Kustom",
          desc: "Reka jadual perjalanan Bandung anda sendiri.",
          highlights: ["Pilih destinasi anda", "Masa fleksibel", "Kereta & pemandu peribadi", "Penjemputan Airport Jakarta"]
        }
      ]
    },
    contact: {
      title: "Sedia untuk Meneroka Bandung?",
      subtitle: "Hubungi kami sekarang untuk menempah perjalanan anda. Kami bertutur Bahasa Inggeris, Melayu, dan Indonesia.",
      button: "Chat di WhatsApp"
    },
    footer: {
      about: "Menyediakan pengalaman perjalanan terbaik di Bandung untuk tetamu kami dari Malaysia dan Singapura.",
      links: "Pautan Pantas",
      contact: "Hubungi"
    }
  },
  id: {
    nav: {
      home: "Beranda",
      destinations: "Destinasi",
      packages: "Paket",
      contact: "Kontak"
    },
    hero: {
      title: "Temukan Keindahan Bandung",
      subtitle: "Gerbang premium Anda ke Paris van Java. Khusus untuk teman-teman dari Malaysia & Singapura.",
      cta: "Lihat Paket"
    },
    destinations: {
      title: "Destinasi Populer",
      subtitle: "Jelajahi tempat-tempat paling hits di Bandung",
      lembang: "Udara sejuk dan pemandangan alam yang asri.",
      rumahmode: "Factory outlet ikonik di Bandung.",
      dusunbambu: "Taman rekreasi keluarga dengan suasana alam.",
      trunojoyo: "Jalan terkenal untuk belanja dan kuliner lokal."
    },
    packages: {
      title: "Paket Premium Kami",
      subtitle: "Semua paket termasuk Penjemputan Bandara Jakarta",
      book: "Pesan Sekarang",
      items: [
        {
          title: "Wisata Alam Lembang",
          desc: "Nikmati udara segar dan hijaunya Lembang.",
          highlights: ["Floating Market", "Farmhouse Lembang", "Orchid Forest", "Jemputan Bandara Jakarta"]
        },
        {
          title: "Wisata Belanja Bandung",
          desc: "Belanja puas di factory outlet terbaik.",
          highlights: ["Rumah Mode", "Jalan Trunojoyo", "Kartika Sari (Oleh-oleh)", "Jemputan Bandara Jakarta"]
        },
        {
          title: "Liburan Keluarga Seru",
          desc: "Liburan sempurna untuk keluarga dengan anak-anak.",
          highlights: ["Dusun Bambu", "Lembang Park & Zoo", "Trans Studio Bandung", "Jemputan Bandara Jakarta"]
        },
        {
          title: "Eksplorasi Bandung Lengkap",
          desc: "3 Hari 2 Malam menjelajahi yang terbaik di Bandung.",
          highlights: ["Kawah Putih", "Glamping Lakeside", "Jalan Braga", "Jemputan Bandara Jakarta"]
        },
        {
          title: "Trip Custom",
          desc: "Rancang itinerary Bandung impian Anda sendiri.",
          highlights: ["Pilih destinasi sendiri", "Waktu fleksibel", "Mobil & supir pribadi", "Jemputan Bandara Jakarta"]
        }
      ]
    },
    contact: {
      title: "Siap Menjelajahi Bandung?",
      subtitle: "Hubungi kami sekarang untuk memesan perjalanan Anda. Kami berbicara Bahasa Inggris, Melayu, dan Indonesia.",
      button: "Chat di WhatsApp"
    },
    footer: {
      about: "Menyediakan pengalaman perjalanan terbaik di Bandung untuk tamu kami dari Malaysia dan Singapura.",
      links: "Tautan Cepat",
      contact: "Kontak"
    }
  }
};

let currentLang = 'en';

function updateContent() {
  const t = translations[currentLang];

  // Update simple text elements
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = t;
    for (const k of keys) {
      value = value[k];
    }
    if (value) {
      element.textContent = value;
    }
  });

  // Update Packages
  const packagesContainer = document.getElementById('packages-container');
  packagesContainer.innerHTML = '';

  t.packages.items.forEach(pkg => {
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
        ${t.packages.book}
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
  document.getElementById('current-lang').textContent = langDisplay[currentLang];
}

window.changeLanguage = (lang) => {
  currentLang = lang;
  updateContent();
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateContent();
});
