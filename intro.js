let inputs = document.getElementById("inp");

let texts = document.getElementById("text");

let button = document.getElementById("btn");

button.addEventListener("click" , add);



function add(){

    if(inputs.value ==''){
        alert("Please enter your text")
    }

    else {
         
        let nwElement = document.createElement("ul");
        nwElement.innerHTML= inputs.value +'<i class="fa-solid fa-trash"></i>';
        texts.appendChild(nwElement)
        inputs.value = '';

        nwElement.querySelector("i").addEventListener("click",removeItem);

        function removeItem(){
            nwElement.remove()
        }
    }
}



