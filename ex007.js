function horario(){
    let data = new Date()
    let hora = data.getHours()
    definirImagem(hora)
    document.getElementById('horarios').value = hora
}

function configurar(){
    document.getElementById('horarios').style.display = 'block'
    let horario = document.getElementById('horarios').value 
    setarHorario(horario)
}

function setarHorario(hora){
    if (hora === null) return;
    let horanum = Number(hora)
    definirImagem(horanum)
}

function esconder(){
    document.getElementById('horarios').style.display = 'none'
}

function definirImagem(hora){
    let background = document.getElementsByTagName('body')[0]
    let texto = document.querySelector('div#texto')
    let imagem = document.getElementById('imagem')
    texto.innerHTML = `<p><strong>Agora são ${hora} horas</strong></p>`

    if(hora >5 && hora <13){
        background.style.backgroundColor = 'rgb(93, 206, 214)'
        imagem.setAttribute('src', 'imagens/oracao-da-manha.jpg')
    }else if(hora >=13 && hora <19){
        background.style.backgroundColor = 'rgb(214, 162, 50)'
        imagem.setAttribute('src', 'imagens/sebastien-gabriel-IMlv9Jlb24-unsplash-scaled.jpg')
    }else{
        background.style.backgroundColor = 'rgb(7, 10, 54)'
        imagem.setAttribute('src', 'imagens/ceu_artigo.jpg')
    }
}