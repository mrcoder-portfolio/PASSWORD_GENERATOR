function generate(){
    let dicionary = '';
    if(document.getElementById("smallLetter").checked){
        dicionary += 'abcdefghijklmnopqrstuvwxyz'
    }
    if(document.getElementById("capitalLetter").checked){
        dicionary += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if(document.getElementById("number").checked){
        dicionary +='0123456789'
    }
    if(document.getElementById("special").checked){
        dicionary += '!@#$%^'
    }
    const length = document.querySelector('input[type="range"]').value
    if(length < 1 || dicionary.length === 0){
        return
    }
    let password = '';
    for(let i = 0; i<length; i++){
        const index = Math.floor(Math.random() * dicionary.length)
        password += dicionary[index]
    }
    document.querySelector('input[type="text"]').value = password
}

[...document.querySelectorAll('input[type="checkbox"] , .generate')].forEach((elem)=>{
    elem.addEventListener('click' , generate)
})

document.querySelector('input[type="range"]').addEventListener('input' , (e)=>{
    document.querySelector('.range span').innerHTML = e.target.value
    generate()
})

