const posts = [{
        "title": "Book one",
        "content": "This is post one"
    },
    {
        "title": "Book two",
        "content": "This is post two"
    }
]

function getPosts() {
    let output = '';
    setTimeout(() => {

        posts.forEach((post) => {
            output += `<li>${post.title}</li>`

        });
        document.body.innerHTML = output;
    }, 1000)
}

function addPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            let error = false;

            if (!error) {
                resolve();
            } else {
                reject("addPost failed")
            }

        }, 2000);

    })

}


// addPost({"title":"Book three", "content":"This is post three"},getPosts)
// passed getposts as callback
addPost({
        "title": "Book three",
        "content": "This is post three"
    })
    .then(getPosts)
    .catch(err => console.log(err));


//this will handle aync calls better than callback