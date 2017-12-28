document.getElementById('button1').addEventListener("click",getdata);
document.getElementById('button2').addEventListener("click",getcustomersdata);
function getdata(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customer.json', true);
    xhr.onload = function() {
        console.log("ReadyState",xhr.readyState);
        if( this.status === 200){
            console.log(this.responseText);
            const customer = JSON.parse(this.responseText);
           const output = `<ul>
            <li> ${customer.id}</li>
            <li> ${customer.name}</li>
            <li> ${customer.company}</li>
            </ul>
            `;
            document.getElementById('customer').innerHTML = output;
        }
    };
    xhr.send();
}
    
function getcustomersdata(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);
    xhr.onload = function(e) {
        console.log("ReadyState",xhr.readyState);
        if( this.status === 200){

            console.log(this.responseText);
            let output= '';
            const customers = JSON.parse(this.responseText);
            customers.forEach(function(customer) {
              output +=  `<ul>
              <li> ${customer.id}</li>
              <li> ${customer.name}</li>
              <li> ${customer.company}</li>
              </ul>
              `; 
            });
           
            document.getElementById('customers').innerHTML = output;
        }
    }
    xhr.send();
}