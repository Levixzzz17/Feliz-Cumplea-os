const texto = "Feliz Cumpleaños Princesita 💕";
let indice = 0;

function escribir() {
  if (indice < texto.length) {
    document.getElementById("nombre").innerHTML += texto.charAt(indice);
    indice++;
    setTimeout(escribir, 120); 
  }
}

function crearConfeti() {
  const contenedor = document.getElementById("confeti-container");
  let colores = ["#ff4d6d", "#ff8fab", "#ffc2d1", "#fb6f92", "#ffb3c6", "#ffdc73", "#80e5ff"];
  
  function generarPedacito() {
    let c = document.createElement("div");
    c.className = "confeti";
    c.style.background = colores[Math.floor(Math.random() * colores.length)];
    c.style.left = Math.random() * 100 + "vw";
    
    let duracion = Math.random() * 3 + 3;
    c.animate([
      { transform: `translateY(-10vh) rotate(0deg)`, opacity: 1 },
      { transform: `translateY(110vh) rotate(${Math.random() * 720 + 360}deg)`, opacity: 0 }
    ], {
      duration: duracion * 1000,
      easing: "linear",
      fill: "forwards"
    });

    contenedor.appendChild(c);

    setTimeout(() => {
      c.remove();
    }, duracion * 1000);
  }
  setInterval(generarPedacito, 100);
}

function sorpresa() {
  const msj = document.getElementById("mensaje");
  msj.innerHTML = "¡Te amooo mucho! Amor de mi vida y ojala que este dia sea muy bonito y preciado para usted ¡Feliz cumpleaños, mi princesa! 🎉💕 Te amuuu muchooo";
  msj.style.opacity = "1";
  msj.style.transform = "scale(1.1)";

  for (let i = 0; i < 200; i++) {
    let h = document.createElement("div");
    h.className = "corazon";
    h.innerHTML = "❤️ 💗 ";
    
    h.style.left = "50vw";
    h.style.top = "50vh";
    
    let angulo = Math.random() * Math.PI * 2;
    let distancia = Math.random() * 400 + 100;
    let tx = Math.cos(angulo) * distancia;
    let ty = Math.sin(angulo) * distancia;
    
    h.style.setProperty('--tx', `${tx}px`);
    h.style.setProperty('--ty', `${ty}px`);

    document.body.appendChild(h);

    setTimeout(() => {
      h.remove();
    }, 1500);
  }
}

window.onload = function() {
  setTimeout(escribir, 500);
  crearConfeti();
}