document.addEventListener('DOMContentLoaded', function() {
    // Pastikan elemen-elemen yang dibutuhkan ada di halaman
    const translateButton = document.getElementById('translateButton');
    const switchButton = document.getElementById('switchButton');
    const menuToggle = document.getElementById('menuToggle');
    const moreInfoButton = document.getElementById('more-info-btn');

    // Periksa apakah elemen ada sebelum menambahkan event listener
    if (translateButton) {
        translateButton.addEventListener('click', translate);
    }
    
    if (switchButton) {
        switchButton.addEventListener('click', switchLanguage);
    }
    
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    if (moreInfoButton) {
        moreInfoButton.addEventListener('click', function() {
            const moreInfo = document.getElementById('more-info');
            if (moreInfo) {
                if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
                    moreInfo.style.display = 'block';
                    this.textContent = 'Less Info';
                } else {
                    moreInfo.style.display = 'none';
                    this.textContent = 'More Info';
                }
            }
        });
    }

    function translate() {
        const inputText = document.getElementById('inputText');
        const outputText = document.getElementById('outputText');
        
        if (!inputText || !outputText) return;

        const inputValue = inputText.value.toLowerCase().trim();

        // Kamus terjemahan bahasa daerah
        const dictionary = {
            'apa': 'apo',
            'siapa': 'siapo',
            'saya': 'ambo',
            'aku': 'ambo',
            'dia': 'inyo',
            'kau': 'ang',
            'kamu': 'waang',
            'kenapa': 'mangapo',
            'mengapa': 'mangapo',
            'bagaimana': 'baapo',
            'lapar': 'lapa',
            'mau': 'nandak',
            'air': 'ai',
            'panas': 'hangek',
            'sudah': 'ala',
            'pergi': 'pai',
            'kemana': 'kamano',
            'sedang': 'sadang',
            'kesana': 'kasinun',
            'sama': 'samo',
            'tinggal': 'tingga',
            'orang': 'urang',
            'sekolah': 'sikola',
            'kesini': 'kasikko',
            'berita': 'barito',
            'cerita': 'carito',
            'saja': 'sajo',
            'juga': 'juo',
            'ayahmu': 'ayahang',
            'pecah': 'pacah',
            'pecahkan': 'pacahkan',
            'kepala': 'kapalo',
            'ku': 'ambo',
            'mu': 'ang',
            'nanti': 'beko',
            'kupecahkan': 'ambo pacakan',
            'berani': 'bagak',
            'kali': 'bana',
            'enak': 'lamak',
            'tidak': 'indak',
            'mana': 'mano',
            'sampai': 'sampe',
            'ya': 'yo',
            'iya': 'iyo',
            'bandal': 'mada',
            'nakal': 'tangka',
            'ke': 'kadi',
            'lama': 'lamban',
            'pakai': 'pake',
            'warung': 'lapo',
            'bercanda': 'bagaluk',
            'senyum': 'galak',
            'bibir': 'bibi',
            // (tambahkan kata-kata lain sesuai kamus Anda)
        };

        // Pisahkan input menjadi kata-kata
        const words = inputValue.split(/\s+/);

        // Terjemahkan setiap kata
        const translatedWords = words.map(word => dictionary[word] || word);

        // Gabungkan hasil terjemahan
        const translatedText = translatedWords.join(' ');

        // Tampilkan hasil terjemahan
        outputText.value = translatedText;
    }

    function switchLanguage() {
        const pesisirIndicator = document.getElementById('pesisirIndicator');
        const indoIndicator = document.getElementById('indoIndicator');

        if (pesisirIndicator && indoIndicator) {
            // Toggle classes to switch position
            pesisirIndicator.classList.toggle('active');
            indoIndicator.classList.toggle('active');

            // Switch the content direction
            const inputText = document.getElementById('inputText');
            const outputText = document.getElementById('outputText');
            
            if (inputText && outputText) {
                const tempText = inputText.value;
                inputText.value = outputText.value;
                outputText.value = tempText;
            }
        }
    }

    function toggleMenu() {
        const nav = document.querySelector('.nav');
        if (nav) {
            nav.classList.toggle('active');
        }
    }
});
