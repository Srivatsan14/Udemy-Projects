document.getElementById('button').addEventListener("click",getdata);
function getdata(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true);
    xhr.onload = function() {
        console.log("ReadyState",xhr.readyState);
        if( this.status === 200){
            console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1> ${this.responseText}</h1>`;
        }
    };
    xhr.send();
}
