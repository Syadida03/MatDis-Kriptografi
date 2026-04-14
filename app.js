function handleProcess(isEncrypt) {
    const text = document.getElementById('inputText').value;
    let key = parseInt(document.getElementById('keyInput').value) || 0;
    const resultDisplay = document.getElementById('resultText');

    let output = "";

    for (let i = 0; i < text.length; i++) {
        // Ambil kode ASCII asli (sama dengan ord(p) di Pascal)
        const code = text.charCodeAt(i);
        
        let newCode;
        if (isEncrypt) {
            // RUMUS ENKRIPSI DI GAMBAR: (ord(p) + k) mod 256
            newCode = (code + key) % 256;
        } else {
            // RUMUS DEKRIPSI DI GAMBAR: (ord(p) - k) mod 256
            // Ditambah 256 sebelum mod agar tidak menghasilkan angka negatif
            newCode = (code - key + 256) % 256;
        }

        // Ubah kembali jadi karakter (sama dengan chr(c) di Pascal)
        output += String.fromCharCode(newCode);
    }

    resultDisplay.innerText = output;
}