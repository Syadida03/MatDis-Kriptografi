function handleProcess(encrypt) {
    const text = document.getElementById('inputText').value;
    let key = parseInt(document.getElementById('keyInput').value) || 0;
    const resultDisplay = document.getElementById('resultText');

    let output = "" ;

    for (let i = 0; i < text.length; i++) {
        // Ambil kode ASCII asli (sama dengan ord(p) di Pascal)
        const code = text.charCodeAt(i);
        
        let newCode;
        if (encrypt) {
            // RUMUS ENKRIPSI DI GAMBAR: (ord(p) + k) mod 256
            newCode = (code + key) % 256;
                    // 32      3   
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



// a b c d e f g h i j k       !  "   #  
// 0 1 2 3                32   33 34  35




