// console.log("FAHK YASSSS");

const request = (url, callback) => {
  const oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function(data) {
    const resData = JSON.parse(data.target.responseText);
    callback(resData);
  });
  oReq.open("GET", url);
  oReq.send();
};

request("https://www.reddit.com/r/TravelPorn/.json", function(data) {
  let posts = data.data.children;
  posts.forEach(makePost);
});

function makePost(obj) {
  let data = obj.data;
  // console.log(obj.data);
  let postBody = document.getElementById("posts");
  let postDiv = document.createElement("div");
  postBody.appendChild(postDiv);

  let postTitle = document.createElement("h2");
  postTitle.className = "title";
  postTitle.innerHTML = data.title;
  postDiv.appendChild(postTitle);

  let postAuthor = document.createElement("h5");
  postAuthor.className = "author";
  postAuthor.innerHTML = data.author;
  postTitle.appendChild(postAuthor);

  let postImg = document.createElement("img");
  postImg.src = obj.data["url"];
  postTitle.appendChild(postImg);

  let postPermaLink = document.createElement("a");
  postPermaLink.className = "permaLink";
  postPermaLink.innerHTML = data.url;
  postTitle.appendChild(postPermaLink);

  let postUps = document.createElement("p");
  postUps.className = "postUps";
  postUps.innerHTML = data.ups;
  postTitle.appendChild(postUps);
}

let natureButton = document.getElementById("natureButton");
document.addEventListener("click", loadNature);

function loadNature() {
  let postBody = document.getElementById("posts");

  while (postBody.firstChild) {
    postBody.removeChild(postBody.firstChild);
  }

  request("https://www.reddit.com/r/NatureIsFuckingLit/.json", function(data) {
    let posts = data.data.children;
    posts.forEach(makeNewNaturePost);
  });

  function makeNewNaturePost(obj) {
    let data = obj.data;
    // console.log(obj.data);
    let postBody = document.getElementById("posts");
    let postDiv = document.createElement("div");
    postBody.appendChild(postDiv);

    let postTitle = document.createElement("h2");
    postTitle.className = "title";
    postTitle.innerHTML = data.title;
    postDiv.appendChild(postTitle);

    let postAuthor = document.createElement("h5");
    postAuthor.className = "author";
    postAuthor.innerHTML = data.author;
    postTitle.appendChild(postAuthor);

    let postImg = document.createElement("img");
    postImg.src = obj.data["url"];
    postTitle.appendChild(postImg);

    let postPermaLink = document.createElement("a");
    postPermaLink.className = "permaLink";
    postPermaLink.innerHTML = data.url;
    postTitle.appendChild(postPermaLink);

    let postUps = document.createElement("p");
    postUps.className = "postUps";
    postUps.innerHTML = data.ups;
    postTitle.appendChild(postUps);
  }
}

let spaceButton = 