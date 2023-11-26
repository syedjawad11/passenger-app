
let count = 0;
let countEl = document.getElementById("count-el");

let increment = () => {
 return countEl.innerText = count+=1; 

}

let saveEl= document.getElementById('save-el');


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0;
}

