var color;
let divParent = document.createElement('div');
divParent.className = "Parent";

let divGrid = document.createElement('div');
for (let i = 0; i < 30; i++) {
    let div = document.createElement('div');
    div.className = "Row";
    for (let j = 0; j < 40; j++) {
        const divx = document.createElement('div');
        divx.className = "Column";
        divx.addEventListener("click", () => {
            divx.style.backgroundColor = color;
        });
        div.appendChild(divx);
    }
    divGrid.appendChild(div);
}
divParent.appendChild(divGrid);



const colors = ['red','blue','yellow','green','grey','magenta','peru','pink','purple', 'white','black','aqua'];
let div = document.createElement('div');
div.style = "display:flex; justify-content:center";
for(let c = 0;c < colors.length;c++){
    let div1 = document.createElement('div');
    div1.className = "ColorPaletteRow"
    div1.addEventListener("click", () => {
        color = colors[c];
        document.getElementById("selectedColor").style.backgroundColor = colors[c];
    });
    div1.style.background = colors[c];
    div.appendChild(div1);
}

let div1 = document.createElement('div');
let divChild  =  document.createElement('div');
divChild.innerHTML = "CURRENT COLOR >" ;
div1.appendChild(divChild);
div1.style = "display:flex;align-items:center"
div.appendChild(div1);
let div2 = document.createElement('div');
div2.id="selectedColor";
div2.className="SelectedColorName";
div.appendChild(div2);

divParent.appendChild(div);

document.body.appendChild(divParent);



