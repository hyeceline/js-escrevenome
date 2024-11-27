let palavra;

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  
  let palavra = ["finn", "jake", "bmo", "jujuba", "simon", "marceline"];
  
  return random(palavra);
}

function inicializaCores() {
  background("#B6D7E5");
  fill("rgb(255,247,223)");
  textSize(30);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 0, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  
  inicializaCores();

  let texto = palavraParcial(0, width);
    
  text(texto, 200, 200);
  
}

function modoNoturno(horario) {
  if (horario > 18) {
    console.log("Você precisa ligar o modo escuro!");
  } else {
    console.log("Modo noturno não é neceslet palavra;

        () => {
            createCanvas(400, 400);

            palavra = palavraAleatoria();

        }

() => {

    let palavra = ["finn", "jake", "bmo", "jujuba", "simon", "marceline"];

    return random(palavras);
}

        () => {
            background("#B6D7E5");
            fill("rgb(255,247,223)");
            textSize(30);
            textAlign(CENTER, CENTER);
        }

        (minimo, maximo) => {
            let quantidade = map(mouseX, minimo, maximo, 0, palavra.length);
            let parcial = palavra.substring(0, quantidade);
            return parcial;
        }

        () => {

            inicializaCores();

            let texto = palavraParcial(0, width);

            text(texto, 200, 200);

        }

        (horario) => {
            if (horario > 18) {
                console.log("Você precisa ligar o modo escuro!");
            } else {
                sário; neste; momento.; ");";
            }
        }

modoNoturno(15);
modoNoturno(20);