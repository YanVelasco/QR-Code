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

    QRCodeIMG.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${QRCodeInputValue}`;

    containerQRCode.classList.add("active")


}

qrCodeBTN.addEventListener("click", () => {
    generateQRCode();
})
