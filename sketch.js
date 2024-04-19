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
  
  for (const comment of commentBodies) {
    prediction = sentiment.predict(comment);
    clasifiedComments.push({
      text: comment,
      prediction: prediction
    });
    console.log(prediction);
  }
}
