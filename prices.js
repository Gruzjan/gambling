if (window.location.href.includes("key-drop.com") && window.location.href.includes("skin-changer")) {
    let valueSpan = document.querySelector(".mr-2.text-sm.font-bold.text-white");
    let timeoutId;
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    clean = parse(valueSpan.children[0].textContent)
                    changeColors(clean);
                }, 700);
            }
        });
    });
    const config = {childList: true, subtree: true};
    let skins = document.querySelectorAll(".css-17jtwd4")[1]
    observer.observe(valueSpan, config); 
    observer.observe(skins, config);
}

function parse(spanContent){
    const regex = /\d+(,\d{1,2})?/
    const match = String(spanContent).match(regex)
    if(match){
        return parseFloat(match[0].replace(',', '.'));
    }
    return null
}

function changeColors(value){
    let skins = document.querySelectorAll(".css-17jtwd4")[1].children;
    for(let skinTile of skins){
        if(parse(skinTile.children[1].children[1].children[0].textContent) > value){
            skinTile.style.borderColor = "Green";
        }else{
            skinTile.style.borderColor = "Red";
        }
    }

}

