// Selecionando elementos

const container = document.querySelector('.container')
const qrInput = document.querySelector('#qr_text')
const qrBtn = document.querySelector('#qr_btn')
const qrImg = document.querySelector('#qr_code img')
//Funções

function generateQRCode() {
    const qrInputValue = qrInput.value;

    if(!qrInputValue) return clean();

    qrBtn.innerHTML = 'Gerando código...';
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInputValue}`

    qrImg.addEventListener('load', () => {
        container.classList.add('active')
        qrBtn.innerHTML = 'Código gerado!'
    })

}

function clean(){
    qrBtn.innerHTML = 'Gerar QR Code'
    container.classList.remove('active')
}
//Eventos

qrBtn.addEventListener('click', () => {
    generateQRCode()
})

qrInput.addEventListener('keyup', (e) => {
    if(e.key == 'Enter'){
        generateQRCode()
    }
    if(!qrInput.value){
        clean()

    }
})
