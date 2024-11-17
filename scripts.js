const btn = document.querySelector('.btn');
const qrDiv = document.getElementById('qrDiv');

btn.addEventListener('click', () => {

    let url = document.querySelector('input').value;

    if (url == "") {
        alert("Please enter a url");
        return;
    }

    qrDiv.innerHTML = "";
    const qrcode = new QRCode(qrDiv, {
        text: url,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

});