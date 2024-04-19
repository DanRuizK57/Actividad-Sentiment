
import fetch from 'node-fetch';
class Comment {

    constructor (){
        this.comments
        this.commentBodies
    };

    async fetchComments () {
    try {
        const response = await fetch('https://dummyjson.com/comments');
        const data = await response.json();
        comments = data.comments;
        console.log("paso");
        commentBodies = comments.map(comment => comment.body);
        console.log(commentBodies);
        return commentBodies;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


}
