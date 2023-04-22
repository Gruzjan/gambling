if (window.location.href.includes("key-drop.com") && window.location.href.includes("skins/category")) {
    const buyBtn = document.querySelector('.ga_openButtonLoser');
    
    const div = document.createElement("div");
    div.classList.add("breakEvenDiv", "flex", "items-center", "justify-center", "justify-items-center", "rounded", "border", "border-solid");
    buyBtn.insertAdjacentElement("afterend", div)

    const btn = document.createElement('button');
    btn.textContent = "Load chances"
    btn.id = "tryAgainBtn"
    btn.addEventListener("click", getCost)
    div.appendChild(btn)
}

function sumChances(cost){
    let chances = 0;
    let skins = document.querySelectorAll('tbody.text-navy-100 > tr');
    //Handle multiple cases cost
    costNum = parseFloat(cost.replace(',', '.'))
    costNum /= parseFloat(document.querySelector("button.text-pastelGreen").textContent)
    //Sum chances
    skins.forEach((row) => {
        if(parseFloat(row.children[1].textContent.slice(0, -4).replace(",", ".").replace(/\s/g, '')) <= costNum){
            chances += parseFloat(row.children[3].textContent.slice(0, -1).replace(',', '.'))
        }
    })
    //Display chances
    const myText = document.createElement('p');
    myText.textContent = Math.round(chances * 100) / 100 + "% for loss";
    document.querySelector("#tryAgainBtn").remove()
    document.querySelector(".breakEvenDiv").appendChild(myText);
}

function getCost(){
    const buyBtn = document.querySelector('span.col-start-1').textContent;
    let regex = /[A-Z]{3}/;
    if(!buyBtn.match(regex)){
        alert("Please log in or wait for case price to load.")
        return
    }
    //Get case price
    regex = /\d+(,\d{1,2})?/
    const match = buyBtn.match(regex)
    if(match){
        sumChances(match[0])
    }
}