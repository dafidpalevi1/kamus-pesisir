document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('translateButton').addEventListener('click', translate);
    document.getElementById('switchButton').addEventListener('click', switchLanguage);
    document.getElementById('menuToggle').addEventListener('click', toggleMenu);

    function translate() {
        const inputText = document.getElementById('inputText').value.toLowerCase().trim();
        const outputText = document.getElementById('outputText');

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
        };

        // Pisahkan input menjadi kata-kata
        const words = inputText.split(/\s+/); // Menggunakan regex untuk memisahkan berdasarkan spasi

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

        // Toggle classes to switch position
        pesisirIndicator.classList.toggle('active');
        indoIndicator.classList.toggle('active');

        // Switch the content direction
        const tempText = document.getElementById('inputText').value;
        document.getElementById('inputText').value = document.getElementById('outputText').value;
        document.getElementById('outputText').value = tempText;
    }

    function toggleMenu() {
        const nav = document.querySelector('.nav');
        nav.classList.toggle('active');
    }
});
