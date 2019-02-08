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

  let postThumbsUp = document.createElement("img");
  postThumbsUp.className = "postThumbsUp"
  postThumbsUp.src = "https://static.thenounproject.com/png/15931-200.png";
  postUps.appendChild(postThumbsUp);
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

let spaceButton = document.getElementById("spaceButton");
document.addEventListener("click", loadSpace);

function loadSpace() {
  let postBody = document.getElementById("posts");
  while (postBody.firstChild) {
    postBody.removeChild(postBody.firstChild);
  }

  request("https://www.reddit.com/r/space/.json", function(data) {
    let posts = data.data.children;
    posts.forEach(makeNewSpacePost);
  });

  function makeNewSpacePost(obj) {
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

let futureButton = document.getElementById("futureButton");
document.addEventListener("click", loadFuture);

function loadFuture() {
  let postBody = document.getElementById("posts");
  while (postBody.firstChild) {
    postBody.removeChild(postBody.firstChild);
  }

  request("https://www.reddit.com/r/Futurology/.json", function(data) {
    let posts = data.data.children;
    posts.forEach(makeNewFuturePost);
  });

  function makeNewFuturePost(obj) {
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

let homeButton = document.getElementById("homeButton");
document.addEventListener("click", loadHome);

function loadHome() {
  let postBody = document.getElementById("posts");
  while (postBody.firstChild) {
    postBody.removeChild(postBody.firstChild);
  }

  request("https://www.reddit.com/r/TravelPorn/.json", function(data) {
    let posts = data.data.children;
    posts.forEach(makeNewHomePost);
  });

  function makeNewHomePost(obj) {
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
