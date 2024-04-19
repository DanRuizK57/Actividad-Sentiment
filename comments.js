
let commentBodies;

fetch('https://dummyjson.com/comments')
    .then(response => response.json())
    .then(data => {
        const comments = data.comments;
        commentBodies = comments.map(comment => comment.body);
        console.log(commentBodies);
    })
    .catch(error => console.error('Error fetching data:', error));

module.exports = commentBodies;