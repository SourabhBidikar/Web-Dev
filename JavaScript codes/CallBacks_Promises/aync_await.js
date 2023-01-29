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

async function start(){
    await addPost({"title": "Book three","content": "This is post three"})
    getPosts();
}

start();


