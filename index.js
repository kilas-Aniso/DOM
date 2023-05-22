// Change document background color to silver
document.getElementById('doc').style.backgroundColor= 'silver'

// Change the font color for h1 title tag to green
document.getElementById('title').style.color = 'Green'
document.getElementById('title').style.marginBottom = "10px"
document.getElementById('title').style.textAlign = 'center'

// Change the font case for h3 title tags to Uppercase
document.getElementById('h3').style.textTransform = "uppercase"
document.getElementById('h3').style.color = "red"
// 
document.getElementById('veg').style.color = "red"
document.getElementById('veg').style.textTransform = "uppercase"


// Add one more fruit to the fruits list
let newFruit = document.createElement("li")
newFruit.innerHTML = "Banana"
document.getElementById("fruList").appendChild(newFruit);

// Add one more vegetable to the vegetables list
let newvegetable = document.createElement("li")
newvegetable.innerHTML = "Banana"
document.getElementById("vegList").appendChild(newvegetable);


var image = document.createElement("img");
image.src = "images/1.png";
image.style.float = "left";
image.style.marginLeft = "40%";
image.sizes = "80%"
// image.style.marginTop = "-20%"
document.body.appendChild(image);


document.getElementById('sec').style.marginLeft = "20%"
document.getElementById('sec').style.fontSize = "16px"
