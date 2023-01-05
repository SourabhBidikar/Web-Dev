const posts=[
    {"title":"Book one", "content":"This is post one"},
    {"title":"Book two", "content":"This is post two"}
]


function getPosts(){
    let output='';
    setTimeout(()=>{
        
        posts.forEach((post)=>{ 
        output+=`<li>${post.title}</li>`   

        });
    document.body.innerHTML=output;    
    },1000)
}

function addPost(post,callback){
    setTimeout(()=>{
    posts.push(post);
    callback();
    },2000);
}

addPost({"title":"Book three", "content":"This is post three"},getPosts)


