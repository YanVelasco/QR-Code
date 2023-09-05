const containerQRCode = document.querySelector("#container-QRcode");
const qrCodeBTN = document.querySelector("#qrCodeBTN");
const QRCodeInput = document.querySelector("#QR-CodeInput");
const QRCodeIMG = document.querySelector("#qr-code")

// eventos
function generateQRCode() {
    const QRCodeInputValue = QRCodeInput.value;
    
    if (!QRCodeInputValue) return;

    qrCodeBTN.innerHTML = "Gerando QR-Code....."

    QRCodeIMG.style.visibility = "visible";

    if ( QRCodeIMG.style.opacity = 1) {
        qrCodeBTN.innerHTML = "QR Code gerado abaixo:";
    }

    QRCodeIMG.src = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${QRCodeInputValue}`;

    containerQRCode.classList.add("active")


}

qrCodeBTN.addEventListener("click", () => {
    generateQRCode();
})

QRCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        generateQRCode();
    }
});

// Voltar ao estágio inicial da aplicação
QRCodeInput.addEventListener("keyup", () => {
    if (!QRCodeInput.value) {
        QRCodeIMG.style.transition = "0.5s"; // Use "0.5s" instead of 0.5s
        QRCodeIMG.style.opacity = 0;
        containerQRCode.classList.remove("active");
        qrCodeBTN.innerHTML = "Gerar QR Code";
    }
});