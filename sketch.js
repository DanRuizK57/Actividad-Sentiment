let sentiment;

function setup() {
  sentiment = ml5.sentiment('movieReviews', modelReady);
}

function modelReady() {
  console.log('Model Loaded!');
  
  const text = "I love this movie!";
  const prediction = sentiment.predict(text);
  console.log(prediction);
  const box = document.getElementById('box');
                // Cambiar el color del recuadro según el sentimiento
                if (prediction.score > 0.5) {
                    box.style.backgroundColor = '#8BC34A'; // Verde si es positivo
                } else if (prediction.score < 0.5) {
                    box.style.backgroundColor = '#FF5722'; // Naranja si es negativo
                }
}
