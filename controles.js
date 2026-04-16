const juegos = 1;

function html(i){
    return text = `<div class="juego${i}">
                <hr>
                <div class="img-juego${i}">
                    <p>Imagen del juego${i}</p>
                </div>
                <p>Descripcion del juego${i}</p>
                <button>Jugar</button>
                <hr>
            </div>`;
}

function plays(){
    let text = "";
    for(i=0; i < juegos; i ++){
        text += html(i);
        document.getElementById('conteiner-juegos').innerHTML = text;
    }
}

//plays();