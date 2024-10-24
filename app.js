const colors = document.querySelectorAll('.color');
const selectedColorHexa = document.getElementById('selectedColorHex');
const colorBox = document.getElementById('colorBox');
const copyHexaBtn = document.getElementById('copyHexBtn');
const customHaxaInput = document.getElementById('customHexInput');
const addCustomColorBtn = document.getElementById('addCustomColorBtn');
const palette = document.querySelector('.palette');

//addEvenlisner to all pre-defined Color elements

colors.forEach(color => {
    color.addEventListener('click', (e) => {
        const hexaCode = e.target.getAttribute('data-hex')
        selectedColorHexa.textContent = hexaCode;
        colorBox.style.backgroundColor = hexaCode;
    });
})
//copyign clipoard

copyHexaBtn.addEventListener('click', () => {
    const hexaCode = selectedColorHexa.textContent
    navigator.clipboard.writeText(hexaCode).then(() => {
        alert('Hexa Code copied to clipoard');
    }).catch(err => {
        alert('Error copying hex code');
    })
})

// add custom color

addCustomColorBtn.addEventListener('click', ()=>{
    const customHexCode = customHexInput.value.trim()
    console.log(customHexCode)

    // validate the hex code

    if(/^#[0-9A-F]{6}$/i.test(customHexCode)){
        const newColorDiv = document.createElement('div')
        newColorDiv.classList.add('color');
        newColorDiv.style.backgroundColor = customHexCode
        newColorDiv.setAttribute('data-hex', customHexCode)
        palette.appendChild(newColorDiv)

        newColorDiv.addEventListener('click', ()=>{
           selectedColorHex.textContent = customHexCode;
           colorBox.style.backgroundColor = customHexCode
        });
    } else {
        alert("Please Enter a valid hex code (e.g...#FBEE22")
    }
});