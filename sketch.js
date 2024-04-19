import fetchComments from "./comments";

let sentiment;
const commentBodies = fetchComments();
let prediction;
let clasifiedComments = [];

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
  for (const comment of commentBodies) {
    prediction = sentiment.predict(comment);
    clasifiedComments.push({
      text: comment,
      prediction: prediction
    });
    console.log(prediction);
  }
}
