// import {authenticate} from 'user.html';
const authenticate = localStorage.getItem('token')
async function sendUrl() {
  const data = {
    longUrl: document.getElementById("urlname").value,
  };
  console.log(authenticate);

  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Authorization": authenticate
    },
    body: JSON.stringify(data),
  };
  let data1 = await fetch(
    "http://localhost:3000/api/urlShort/createUrl",
    options
  );
  loadUrl();
}

async function loadUrl() {
  let urlData = await fetch("http://localhost:3000/api/urlShort");
  let urls = await urlData.json();
  // console.log(urls);
  var div1 = [];
  var div2 = [];
  var anchor = [];
  var h61 = [];
  var container = document.getElementById("contain1");
  container.innerHTML = "";
  for (i = 0; i < urls.length; i++) {
    div1[i] = document.createElement("div");
    div1[i].className = "card";
    var content = document.createElement('p');
    content.innerText=i + 1 + "The short url for " + urls[i].longUrl +"is" 
    anchor[i] = document.createElement("a");
    anchor[i].innerHTML =urls[i].shortUrl;
    anchor[i].href = urls[i].shortUrl;
    anchor[i].className = "card-title";

    div2[i] = document.createElement("div");
    div2[i].className = "card-body";
    h61[i] = document.createElement("h6");
    h61[i].className = "card-text";
    h61[i].innerText = "";

    div2[i].appendChild(h61[i]);
    div1[i].append(content,anchor[i], div2[i]);
    container.appendChild(div1[i]);
  }

  document.body.appendChild(container);
}
loadUrl();

const logout=()=>{
  localStorage.removeItem('token')
  window.location.replace("user.html");
}
