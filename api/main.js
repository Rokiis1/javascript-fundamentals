const postsDiv = document.getElementById("posts");

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  posts.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
    postsDiv.appendChild(postDiv);
  });
}

getPosts();