let sentiment;

function setup() {
  sentiment = ml5.sentiment('movieReviews', modelReady);
}

function modelReady() {
  console.log('Model Loaded!');
  
  const text = "I love this movie!";
  const prediction = sentiment.predict(text);
  console.log(prediction);
}
