function handleProcess(encrypt) {
    const text = document.getElementById('inputText').value;
    let key = parseInt(document.getElementById('keyInput').value) || 0;
    const resultDisplay = document.getElementById('resultText');
    const decryptBtn = document.getElementById('decryptBtn');

    let output = "";

    for (let i = 0; i < text.length; i++) {
        const code = text.charCodeAt(i);

        let newCode;
        if (encrypt) {
            newCode = (code + key) % 256;
        } else {
            newCode = (code - key + 256) % 256;
        }

        output += String.fromCharCode(newCode);
    }

    resultDisplay.innerText = output;

    // Tampilkan tombol decrypt hanya setelah enkripsi
    if (encrypt) {
        decryptBtn.style.display = "inline-block";
    } else {
        decryptBtn.style.display = "none";
    }
}

// Fungsi decrypt otomatis dari hasil
function decryptResult() {
    const encryptedText = document.getElementById('resultText').innerText;
    let key = parseInt(document.getElementById('keyInput').value) || 0;
    const resultDisplay = document.getElementById('resultText');

    let output = "";

    for (let i = 0; i < encryptedText.length; i++) {
        const code = encryptedText.charCodeAt(i);

        let newCode = (code - key + 256) % 256;

        output += String.fromCharCode(newCode);
    }

    resultDisplay.innerText = output;

    // sembunyikan tombol setelah decrypt
    document.getElementById('decryptBtn').style.display = "none";
}

function clearAll() {
    document.getElementById('inputText').value = "";
    document.getElementById('keyInput').value = 3;
    document.getElementById('resultText').innerText = "Hasil";

    // sembunyikan tombol decrypt
    document.getElementById('decryptBtn').style.display = "none";
}

function exitApp() {
    if (confirm("Apakah Anda yakin ingin keluar?")) {
        window.location.href = "dashboard.html";
    }
}