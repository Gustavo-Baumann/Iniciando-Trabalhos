function spin(){
    document.getElementById("box1").innerHTML = "<p>Around</p>"
}

function stop(){
    document.getElementById("box1").innerHTML = "<p>Box</p>"
    document.getElementById("box3").innerHTML = "<p>Box</p>"
    document.getElementById("box4").innerHTML = "<p>Box</p>"
}

function big(){
    document.getElementById("box3").innerHTML = "<p style='top: 10px'>Big<br>Box</p>"
}

function rainbow(){
    document.getElementById("box4").innerHTML = "<p style='top: 10px'>Rainbow Box</p>"
}

function mudacor(){
    if(window.document.getElementsByTagName('body')[0].style.backgroundColor == 'orange'){
        window.document.getElementsByTagName('body')[0].style.backgroundColor = 'grey'
    }else{
        window.document.getElementsByTagName('body')[0].style.backgroundColor = 'orange'
    }
}

function image(){
     document.body.background = 'imagens/164007503-andromeda-galaxy-wallpapers.jpg'
}

function broken(){
    document.getElementsByTagName('button')[2].innerHTML = 'Broken'
    document.getElementsByTagName('button')[2].style.color = 'red'
}

function reset(){
    document.getElementsByTagName('button')[3].innerHTML = '<a href="index.html">Reset</a>'
    document.getElementsByTagName('a')[0].style.textDecoration = 'none'
}