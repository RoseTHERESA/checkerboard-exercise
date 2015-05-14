// Your JS goes here


for (var i=0; i<81; i++) {
	var newDiv = document.createElement("div");
	newDiv.style.width = "11.1%";
	newDiv.style.float = "left";
	newDiv.style.paddingBottom = "11.1%";
	newDiv.style.backgroundColor = "red";
	if (i %2 === 0) newDiv.style.backgroundColor = "red";
		else newDiv.style.backgroundColor = "black";
	document.body.appendChild(newDiv);
};

/*for (var i=0; i<81; i++) {
	var newDiv = document.createElement("div");
	newDiv.style.width = "11.1%";
	newDiv.style.float = "left";
	newDiv.style.paddingBottom = "11.1%";
	newDiv.style.backgroundColor ='#'+Math.floor(Math.random()*16777215).toString(16);
	document.body.appendChild(newDiv);
};
var num = 150
for (var i=0; i<81; i++) {
	var newDiv = document.createElement("div");
	newDiv.style.width = "11.1%";
	newDiv.style.float = "left";
	newDiv.style.paddingBottom = "11.1%";
	newDiv.style.backgroundColor = "red";
	if (i %2 === 0) {
		newDiv.style.backgroundColor = "rgb(100,100,"+num+")";
		num+=2;}
	else {
		newDiv.style.backgroundColor = "rgb("+num+",222,200)";
		num+=2;
	}

	document.body.appendChild(newDiv);
}
*/
