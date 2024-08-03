const url = 'https://jsonplaceholder.typicode.com/posts';

// index.html DOM
const loadingElement = document.querySelector('#loading');
const postsContainer = document.querySelector('#posts-container');

// post.html DOM
const postPage = document.querySelector('#post');
const postContainer = document.querySelector('#post-container');
const commentsContainer = document.querySelector('#comments-container')

// Get id from URL
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get('id');

// Get all posts
async function getAllPosts() {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    // postsContainer.textContent = '';
    loadingElement.classList.add('hide');

    data.map((post) => {
        const div = document.createElement('div');
        const title = document.createElement('h2');
        const body = document.createElement('p');
        const link = document.createElement('a');

        div.setAttribute('class', 'post');
        title.innerHTML = post.title;
        body.innerText = post.body;
        link.innerText = 'Ler';
        link.setAttribute("href", `/JavaScript/post.html?id=${post.id}`);

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        postsContainer.appendChild(div);
        // console.log(post);
    });
}

// Get individual post
async function getPost(id) {
    const [responsePost, responseComments] = await Promise.all([
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ]);
    
    const dataPost = await responsePost.json();
    const dataComments = await responseComments.json();
    
    loadingElement.classList.add('hide');
    postPage.classList.remove('hide');
}

if(!postId) {
    getAllPosts();
} else {
    console.log(postId);
}

