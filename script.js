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
