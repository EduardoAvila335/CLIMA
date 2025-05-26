let valor = document.getElementById('valor');
let div = document.getElementById('div');
let modoescuro = document.getElementById('modoescuro');
let body = document.getElementById('body');



document.addEventListener('keydown', function(evento){
    if(evento.key === 'Enter'){
        document.getElementById('inserir').click();
    }
})



function inserir(){

    const text = {
     Ibaiti: 'Ibaiti, está em solarado☀️',
     Curitiba: 'Curitiba, está em chuva forte⛈️', 
     SãoPaulo: 'São Paulo, está com chuva leve🌦️'  
    };

    
    let valorDoSelect = valor.value;
   
    

    if(valorDoSelect == ''){
        div.innerHTML = '<p> Escolha alguma <strong>opção</strong> disponivel!!</p>';
        backgroundColorModoEscuro()
        body.style.backgroundImage = '';
        return;
    }

    if(valorDoSelect == 'Ibaiti'){
        body.style.backgroundImage = 'url(solarado.jpg)'
    }else if(valorDoSelect == 'Curitiba'){
        body.style.backgroundImage = 'url(chuvaforte.jpg)'
    }else if(valorDoSelect == 'SãoPaulo'){
         body.style.backgroundImage = 'url(chuvaleve.jpeg)'
    }


    let textos = text[valorDoSelect];

    div.textContent = textos


}   


function trocarDecor(){
   
    let h1 = document.getElementById('h1');
    let inserir = document.getElementById('inserir');
    let header = document.getElementById('header');
    

    modoescuro.classList.toggle('ativado');

    if(modoescuro.classList.contains('ativado')){
        div.style.color = 'white';
        header.style.backgroundColor = 'rgb(52, 21, 157)';
        h1.textContent = '🌙Clima';
        h1.style.color = 'black';
        h1.style.textDecorationColor = 'white';
        inserir.style.color = 'black';
        inserir.style.backgroundColor = 'white';
        modoescuro.textContent = '🔅'
        modoescuro.style.backgroundColor = 'white';
        valor.style.backgroundColor = 'black';
        valor.style.color = 'white';
        body.style.backgroundColor = 'black';
    }else{
        div.style.color = 'black';
        header.style.backgroundColor = 'rgb(110, 224, 224)'
        h1.textContent = '⛅Clima'
        h1.style.color = 'white';
        h1.style.textDecorationColor = 'blue';
        inserir.style.color = 'white';
        inserir.style.backgroundColor = 'blue';
        modoescuro.textContent = '🌙';
        modoescuro.style.backgroundColor = 'rgb(64, 64, 64)';
        valor.style.backgroundColor = 'white';
        valor.style.color = 'black';
        body.style.backgroundColor = 'aquamarine';
    }
}


function backgroundColorModoEscuro(){

    if(modoescuro.textContent === '🌙'){
        body.style.backgroundColor = 'aquamarine';
    }else{
        body.style.backgroundColor = 'black';
    }
}