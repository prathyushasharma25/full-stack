// console.log("hello");

document.querySelector("form").addEventListener("submit",list);

function list(){
    event.preventDefault();

    let itemName =document.querySelector("#name").value;
    let itemNumber =document.querySelector("#qty").value;
    let itemPriority =document.querySelector("#priority").value;

    let tr=document.createElement("tr");

    let td1=document.createElement("td");
    td1.innerText=itemName;
    let td2=document.createElement("td");
    td2.innerText=itemNumber;
    let td3=document.createElement("td");
    td3.innerText=itemPriority;

    tr.append(td1, td2, td3);
    document.querySelector("tbody").append(tr);
    
}
