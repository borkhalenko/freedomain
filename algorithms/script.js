/* borkhalenko.freedomain.thehost.com.ua/algorithms/ */
window.onload = function () {
	document.getElementById("btnCreate").onclick=btnClickListener;
};

function btnClickListener(){
	var eBody=document.getElementById("body");
	var eUl=document.createElement("ul");
	eUl.id="booble_short";
	var numOfElements=document.getElementById("inputCount").value;
	var arrOfElements=new Array(parseInt(numOfElements,0));
	for (var i=0; i<numOfElements; ++i){
		arrOfElements[i]=document.createElement("li");
		arrOfElements[i].className="booble_element";
		var tmpP=document.createElement("p");
		tmpP.innerHTML=Math.floor(Math.random()*numOfElements*10);
		arrOfElements[i].appendChild(tmpP);
		eUl.appendChild(arrOfElements[i]);
	}	
	/*arrOfElements.forEach(function(element, index, array){
		element=document.createElement("li");
		element.className="booble_element";
		var tmpP=document.createElement("p");
		tmpP.innerHTML=Math.floor(Math.random()*array.length);
		element.appendChild(tmpP);
		eUl.appendChild(element);
	});*/
	eBody.appendChild(eUl);
}
