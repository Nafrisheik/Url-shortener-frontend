 function sendUrl(){
    const data = {
        longUrl: document.getElementById("urlname").value
    }
    console.log(data);

const options = {
    method: 'POST',
    mode: 'cors',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}
 fetch('/https://localhost:3000/api/urlshort',options);
}