fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(data=>showPost(data));


function showPost(posts) {
   const  showPost=document.getElementById('post-here');
    
for (const post of posts){
    const  createOne=document.createElement('div');
    createOne.classList.add('postStyle');
    createOne.innerHTML=`
    <h4> user - ${post.id}</h4>
    <h5> title-${post.title}</h5>
    <p> post : description -${post.body}</p>
    `
showPost.appendChild(createOne);
}

}