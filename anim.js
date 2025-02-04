// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Ohh, ohh", time: 2 },
  { text: "I", time: 7 },
  { text: "I just woke up from a dream", time: 8 },
  { text: "Where you and I had to say goodbye", time: 15 },
  { text: "And I don't know what it all means", time: 18 },
  { text: "But since I survived, I realized", time: 21 },
  { text: "Wherever you go, that's where I'll follow", time: 26 },
  { text: "Nobody's promised tomorrow", time: 31 },
  { text: "So I'ma love you every night like it's the last night", time: 37 },
  { text: "Like it's the last night", time: 35 },
  { text: "If the world was ending, I'd wanna be next to you", time: 43 },
  { text: "If the party was over and our time on Earth was through", time: 52 },
  { text: "I'd wanna hold you just for a while", time: 101 },
  { text: "And die with a smile", time: 107 },
  { text: "If the world was ending, I'd wanna be next to you", time: 100 },
  { text: "Woo-ooh", time: 120 },
  { text: "Ooh, lost", time: 124 },
  { text: "Lost in the words that we scream", time: 129 },
  { text: "I don't even wanna do this anymore", time: 133 },
  { text: "Cause you already know what you mean to me", time: 138 },
  { text: "And our love's the only war worth fighting for", time: 141 },
  { text: "Wherever you go, that's where I'll follow", time: 146 },
  { text: "Nobody's promised tomorrow", time: 151 },
  { text: "So I'ma love you every night like it's the last night", time: 156 },
  { text: "Like it's the last night", time: 159 },
  { text: "If the world was ending, I'd wanna be next to you", time: 202 },
  { text: "If the party was over and our time on Earth was through", time: 211 },
  { text: "I'd wanna hold you just for a while", time: 220},
  { text: "And die with a smile", time: 225 },
  { text: "If the world was ending, I'd wanna be next to you", time: 229 },
  { text: "Right next to you", time: 238 },
  { text: "Next to you", time: 242 },
  { text: "Right next to you", time: 247 },
  { text: "Oh-oh-oh", time: 251 },
  { text: "If the world was ending, I'd wanna be next to you", time: 311 },
  { text: "If the party was over and our time on Earth was through", time: 320 },
  { text: "I'd wanna hold you just for a while", time: 329 },
  { text: "And die with a smile", time: 333 },
  { text: "If the world was ending, I'd wanna be next to you", time: 338 },
  { text: "If the world was ending, I'd wanna be next to you", time: 346 },
  { text: "Ooh, ooh", time: 356 },
  { text: "I'd wanna be next to you", time: 400 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);