let posts = document.getElementById("jsonPosts");
let container = document.getElementById("container")
// fetch('https://api.npoint.io/c160f8ba38e0003ce496')
fetch('res/json/data.json')
    .then((response) => response.json())
    .then(json => {
        for (post of json) {

            //"divvid"
            let postDiv = document.createElement('article');
            let postHeader = document.createElement('div');

            //article sisu komponendid
            let postUser = document.createElement('h4');
            let postDate = document.createElement('p');
            let postTitle = document.createElement('h2');
            let postBody = document.createElement('p');

            //klassid
            postDiv.classList.add('post');
            postHeader.classList.add('post-header');

            //divvide paigutus
            postDiv.appendChild(postHeader);
            posts.appendChild(postDiv);
            
            postHeader.appendChild(postUser);
            postHeader.appendChild(postDate);

            //sisu jsonist html elementidesse
            postUser.innerText = post.userName;
            postDate.innerText = post.date;
            postTitle.innerText = post.title;
            postBody.innerText = post.body;
            
            
            if (post.imgName==null) console.log("post image is null")
            if (post.imgName!=null){
                let postImgDiv = document.createElement('div');
                let postImg = document.createElement('img');
                postImg.src = 'res/img/'+post.imgName;
                postImgDiv.classList.add('post-image');
                postDiv.appendChild(postImgDiv);
                postImgDiv.appendChild(postImg);
                
            }
            postDiv.appendChild(postTitle)
            postDiv.appendChild(postBody);
        }

    })
    .catch(err => {
        let errDiv = document.createElement("div");
        errDiv.className = 'post';
        errDiv.innerText = err;
        document.body.appendChild(errDiv);
    })
    .finally(() => {
        let footer = document.createElement("footer");
        date = new Date().toLocaleString()
        footer.innerText = date;
        container.appendChild(footer);
    });