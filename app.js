function handleProcess(encrypt) {
    const text = document.getElementById('inputText').value;
    let key = parseInt(document.getElementById('keyInput').value) || 0;
    const resultDisplay = document.getElementById('resultText');

    let output = "" ;

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
}

function clearAll() {
    document.getElementById('inputText').value = "";
    document.getElementById('keyInput').value = 3; 
    document.getElementById('resultText').innerText = "Hasil";
}

function exitApp() {
    if (confirm("Apakah Anda yakin ingin keluar?")) {
        window.location.href = "dashboard.html";
    }
}