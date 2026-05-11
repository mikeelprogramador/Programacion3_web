const juegos = 10;


function html(i){
    return text = `<div class="juego">
                        <img src="img/juego.jpg" alt="La imagen del juego _nombre_ no ha cargado correctamente ">
                        <p>Descripcion del juego${i}</p>
                        <button>Jugar</button>
                    </div>`;
}

function plays(){
    let text = "";
    for(i=0; i < juegos; i ++){
        text += html(i);
        document.getElementById('conteiner-juegos').innerHTML = text;
    }
}

plays();