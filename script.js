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
                'leher': 'lihi',
                'perempuan': 'padusi',
                'besar': 'gadang',
                'orang': 'urang',
                'kuda': 'kudo',
                'buaya': 'buayo',
                'delapan': 'lapan',
                'perut': 'paruk',
                'kerbau': 'kabo',
                'semua': 'sadonyo',
                'siput': 'cipui',
                'takut': 'takku',
                'kecil': 'ketek',
                'singkat': 'singkek',
                'bangkrut': 'handam',
                'deman': 'damam',
                'mertua': 'mintuo',
                'sepotong': 'sakudung',
                'sebelas': 'sabale',
                'bulat': 'bulek',
                'merajuk': 'sundek',
                'kemarin': 'kapatang',
                'besok': 'barisuk',
                'periuk': 'pariuk',
                'hitung': 'kiro',
                'kera': 'kara',
                'pekat': 'pakke',
                'pikat': 'pikkek',
                'satu gelas': 'sagale',
                'satugelas': 'sagele',
                'segala': 'sagalo',
                'sampah': 'sarok',
                'penuh': 'panuh',
                'talas': 'tale',
                'telur': 'talu',
                'rubah': 'ruba',
                'baik': 'elok',
                'tampar': 'tampa',
                'dorong': 'tulak',
                'dapur': 'dapu',
                'sangat': 'bana',
                'udara': 'udaro',
                'utara': 'utaro',
                'dendam': 'dandam',
                'hias': 'dandan',
                'kawan': 'sanak',
                'tanya': 'tanyo',
                'enam': 'anam',
                'tangkap': 'tangkok',
                'pesan': 'pasan',
                'hujan': 'ujan',
                'berat': 'barek',
                'robek': 'cabik',
                'merobek': 'mancabik',
                'jepit': 'japik',
                'menjepit': 'manjapik',
                'cara': 'caro',
                'jala': 'jalo',
                'kakak ibu': 'uak',
                'kail': 'kai',
                'pisau': 'piso',
                'besok': 'barisuk',
                'itu': 'inun',
                'cerita': 'curito',
                'gadis': 'gadi',
                'beri': 'agi',
                'adik perempuan ibu': 'etek',
                'dapat': 'dapek',
                'panas': 'hangek',
                'perkakas': 'pakakke',
                'pasar': 'onan',
                'abang': 'ogek',
                'cabai': 'lado',
                'atas': 'ate',
                'kakak perempuan': 'accik',
                'beras': 'bare',
                'ipar perempuan': 'eda',
                'gigit': 'gigik',
                'gelas': 'gale',
                'pelaut': 'palawik',
                'pukul': 'hampok',
                'buah pikiran': 'upayo',
                'terkenang': 'takana',
                'kertas': 'karate',
                'denda': 'dando',
                'mampus': 'mampui',
                'menghadap': 'manghadok',
                'kasur': 'kasu',
                'kerupuk': 'karipik',
                'bacok': 'pakkuk',
                'cangkir': 'mangkuk',
                'telan': 'raguk',
                'halus': 'halui',
                'hancur': 'hancu',
                'jahat': 'jahek',
                'sebut': 'sabuk',
                'ejek': 'risak',
                'mengejek': 'marisak',
                'cepat': 'lakke',
                'bersatu': 'malakkek',
                'dempet': 'malakkek',
                'cari': 'resek',
                'mencari': 'maresek',
                'darah': 'dara',
                'kalian': 'munak',
                'ikan bakar': 'sambam',
                'ikan': 'lauk',
                'berhembus': 'barambui',
                'genit': 'rogon',
                'nyamuk': 'rangik',
                'ayah': 'aya',
                'jilat': 'jilek',
                'penjilat': 'panjilek',
                'jual': 'jua',
                'satu ikat': 'sajarek',
                'cermin': 'camin',
                'nangka': 'cubadak',
                'terima': 'jawek',
                'panggil': 'imbow',
                'tua': 'gaek',
                'haluan': 'aluan',
                'melihat': 'maliek',
                'lihat': 'liek',
                'hias': 'kie',
                'setiap': 'satiok',
                'terus': 'tarus',
                'putus': 'putui',
                'tambah': 'tambu',
                'angkat': 'angkek',
                'senja': 'sanjo',
                'langsat': 'langsek',
                'singkat': 'singkek',
                'mulut': 'muncung',
                'uccok': 'panggilan anak laki-laki',
                'ini': 'ikko',
                'buah': 'bua',
                'dingin': 'sajuk',
                'tiga': 'tigo',
                'awan': 'ambun',
                'betis': 'bati',
                'hanyut': 'hanyuk',
                'geli': 'gali',
                'cerai': 'care',
                'menangis': 'manangi',
                'membeli': 'mambali',
                'melempar': 'malanting',
                'berlari': 'balari',
                'berenang': 'baranang',
                'berkelahi': 'bacakkak',
                'katakan': 'katokan',
                'pegang': 'pacikk',
                'pegangkan': 'pacikkan',
                'jual': 'jua',
                'lempar': 'bahe',
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
