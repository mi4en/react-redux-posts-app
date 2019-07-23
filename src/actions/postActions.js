import { FETCH_POSTS, NEW_POST } from './types'

// Here we dispatch actions to our reducers

export const fetchPosts = () => dispatch => {
    console.log('fetchPosts action called from postActions')
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(res => res.json())
        .then(posts => {
            console.log(posts);
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            });
        });
}

export const createPost = (postData) => dispatch => {
    console.log('createPost action called from postActions')
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(postData),
    })
        .then(res => res.json())
        .then(post => {
            console.log('new post: ', post)
            dispatch({
                type: NEW_POST,
                payload: post
            })
        }
        );
}