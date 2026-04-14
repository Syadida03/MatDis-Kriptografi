function handleProcess(isEncrypt) {
    const text = document.getElementById('inputText').value;
    let key = parseInt(document.getElementById('keyInput').value) || 0;
    const resultDisplay = document.getElementById('resultText');

    // Jika dekripsi, kunci dibalik (mundur)
    if (!isEncrypt) {
        key = (26 - (key % 26)) % 26;
    }

    let output = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
        // Hanya proses huruf A-Z dan a-z
        if (char.match(/[a-z]/i)) {
            const code = text.charCodeAt(i);
            const base = (code >= 65 && code <= 90) ? 65 : 97;
            
            // RUMUS: (Posisi Karakter + Kunci) mod 26
            char = String.fromCharCode(((code - base + key) % 26) + base);
        }
        output += char;
    }

    resultDisplay.innerText = output;
}