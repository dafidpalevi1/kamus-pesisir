document.addEventListener('DOMContentLoaded', function() {
    const translateButton = document.getElementById('translateButton');
    const switchButton = document.getElementById('switchButton');
    const menuToggle = document.getElementById('menuToggle');
    const moreInfoButton = document.getElementById('more-info-btn');

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
        const pesisirIndicator = document.getElementById('pesisirIndicator');
        const indoIndicator = document.getElementById('indoIndicator');

        if (!inputText || !outputText || !pesisirIndicator || !indoIndicator) return;

        const inputValue = inputText.value.toLowerCase().trim();

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
        };

        // Reverse dictionary for translation from Bahasa Pesisir to Indonesian
        const reverseDictionary = {};
        for (let key in dictionary) {
            reverseDictionary[dictionary[key]] = key;
        }

        const words = inputValue.split(/\s+/);
        let detectedLanguage = 'indonesia';

        for (const word of words) {
            if (reverseDictionary[word]) {
                detectedLanguage = 'pesisir';
                break;
            }
        }

        if (detectedLanguage === 'pesisir') {
            pesisirIndicator.classList.add('active');
            indoIndicator.classList.remove('active');

            const translatedWords = words.map(word => reverseDictionary[word] || word);
            const translatedText = translatedWords.join(' ');

            outputText.value = translatedText;
        } else {
            pesisirIndicator.classList.remove('active');
            indoIndicator.classList.add('active');

            const translatedWords = words.map(word => dictionary[word] || word);
            const translatedText = translatedWords.join(' ');

            outputText.value = translatedText;
        }
    }

    function switchLanguage() {
        const pesisirIndicator = document.getElementById('pesisirIndicator');
        const indoIndicator = document.getElementById('indoIndicator');
        const container = document.querySelector('.language-indicator');

        if (pesisirIndicator && indoIndicator && container) {
            // Swap the positions of the indicators
            if (container.children[0] === pesisirIndicator) {
                container.insertBefore(indoIndicator, pesisirIndicator);
            } else {
                container.insertBefore(pesisirIndicator, indoIndicator);
            }

            // Optionally toggle active classes
            pesisirIndicator.classList.toggle('active');
            indoIndicator.classList.toggle('active');

            // Swap input and output text if needed
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
