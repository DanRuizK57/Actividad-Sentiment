let comments;
let sentiment;
let prediction;
let clasifiedComments = [];

async function setup() {
  comments = await fetchComments();
  sentiment = ml5.sentiment('movieReviews', modelReady);
}

 function modelReady() {
  console.log('Model Loaded!');
  
  // const text = "I love this movie!";
  // prediction = sentiment.predict(text);
  // console.log(prediction);
  // const box = document.getElementById('box');
  //               // Cambiar el color del recuadro según el sentimiento
  //               if (prediction.score > 0.5) {
  //                   box.style.backgroundColor = '#8BC34A'; // Verde si es positivo
  //               } else if (prediction.score < 0.5) {
  //                   box.style.backgroundColor = '#FF5722'; // Naranja si es negativo
   //               }
   
  for (const comment of comments) {
    prediction = sentiment.predict(comment);
    clasifiedComments.push({
      text: comment,
      prediction: prediction.score
    });
   }
   
   console.log(clasifiedComments);
}

async function fetchComments () {
  try {
      const response = await fetch('https://dummyjson.com/comments');
      const data = await response.json();
      comments = data.comments;
      commentBodies = comments.map(comment => comment.body);
      return commentBodies;
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
  }
};



