function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let itens = [
  { emoji: "📄", tipo: "papel" },
  { emoji: "🥤", tipo: "plastico" },
  { emoji: "🍾", tipo: "vidro" },
  { emoji: "🥫", tipo: "metal" }
];

let atual;
let pontos = 0;
let mensagem = "";

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER, CENTER);
  novoItem();

  papel = createButton("Papel");
  papel.position(150, 400);
  papel.mousePressed(() => verificar("papel"));

  plastico = createButton("Plástico");
  plastico.position(300, 400);
  plastico.mousePressed(() => verificar("plastico"));

  vidro = createButton("Vidro");
  vidro.position(470, 400);
  vidro.mousePressed(() => verificar("vidro"));

  metal = createButton("Metal");
  metal.position(620, 400);
  metal.mousePressed(() => verificar("metal"));
}

function draw() {
  background(220, 245, 220);

  fill(34, 139, 34);
  textSize(32);
  text("🌱 Agro Forte Sustentável 🌱", width / 2, 50);

  textSize(24);
  text("Jogo da Reciclagem", width / 2, 100);

  textSize(80);
  text(atual.emoji, width / 2, 220);

  textSize(24);
  fill(0);
  text("Pontos: " + pontos, width / 2, 320);

  textSize(20);
  text(mensagem, width / 2, 360);
}

function novoItem() {
  atual = random(itens);
}

function verificar(tipo) {
  if (tipo === atual.tipo) {
    pontos += 10;
    mensagem = "✅ Correto!";
  } else {
    pontos -= 5;
    mensagem = "❌ Errado!";
  }

  novoItem();
}
