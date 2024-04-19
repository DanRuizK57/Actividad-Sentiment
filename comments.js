
import fetch from 'node-fetch';

const fetchComments = async () => {
    try {
        const response = await fetch('https://dummyjson.com/comments');
        const data = await response.json();
        const comments = data.comments;
        const commentBodies = comments.map(comment => comment.body);
        console.log(commentBodies);
        return commentBodies;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export default fetchComments;