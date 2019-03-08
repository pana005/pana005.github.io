var myName ="Aileen";
console.log(myName);
document.write(myName+"<br>");


var favNum= 7;
console.log(favNum);
document.write(favNum+"<br>");

var favNumString="seven";
console.log(favNumString);
document.write(favNumString+"<br>");

var t= true;
console.log(t);
document.write(t+"<br>");

var nameLetter= ["A","I","L","E","E","N"];
console.log(nameLetter);
document.write(nameLetter+"<br>");

var diffType=[7, false, "Third Type"];
console.log(diffType);
document.write(diffType+"<br>");

var fullName="Aileen"+" "+"Pan";
console.log(fullName);
document.write(fullName+"<br>");

var hundred=30+70;
console.log(hundred);
document.write(hundred+"<br>");

//Question 2
var l= nameLetter.length -1;
console.log(nameLetter[0]);
console.log(nameLetter[l]);
document.write(nameLetter[0]+"<br>");
document.write(nameLetter[l]+"<br>");

//Question 3
var q3= "supercalifragilisticexpialidocious";
var q3length= q3.length;
console.log(q3length);
document.write(q3length+"<br>");

//Question 4
var lastName= "pan";
var x= myName.length;
var y= lastName.length;
x == y
console.log(x);
document.write(x+"<br>");

//Question 5
var students= 16;
var ttrue="all the students are in class";
var ffalse="not everyone is here";
if( students ==16){
	console.log(ttrue);
	document.write(ttrue+"<br>");
}else{
	console.log(ffalse);
	document.write(ffalse+"<br>");
}

//Question 6
for ( var i = 0; i < nameLetter.length; i++ ){
	console.log( nameLetter[i]);
	document.write(nameLetter[i]+"<br>");
}

//Question 7
var now= new Date; 
var hr = now.getHours();
if( now > 7 && now < 9 ){
	console.log(true);
	document.write(true+"<br>");
}else{
	console.log(false);
	document.write(false+"<br>");
}

//Question 8
var day= now.getDay();
if( day == 1){
	console.log("DAY 1!");
	document.write("Day 1!"+"<br>");
}else if (day ==2){
	console.log("DAY 2!");
	document.write("Day 2!"+"<br>");
}else if (day ==3){
	console.log("DAY 3!");
	document.write("Day 3!"+"<br>");
}else if (day ==4){
	console.log("DAY 4!");
	document.write("Day 4!"+"<br>");
}else if (day ==5){
	console.log("DAY 5!");
	document.write("DAY 5!"+"<br>");
}else if (day ==6){
	console.log("DAY 6!");
	document.write("DAY 6!"+"<br>");
}else if (day ==7){
	console.log("DAY 7!");
	document.write("DAY 7!"+"<br>");
}

//Question 9
var food=["ice cream","udon","rice cake"]
var animal=["rabbit", "lion","wolf"]
var places=["disneyland","pismo beach","Union Square Park"]
var pokemon=["pikachu", "eevee", "snorlax"];
console.log(food, animal, places, pokemon);
document.write("1. " + food +"   2. "+ animal +"   3. "+ places +"   4. "+ pokemon+"<br>");

//Question 10
var combo=[ food, animal, places, pokemon];
console.log(combo);
document.write("("+combo+")"+"<br>");

//Question 11
for(var i=0; i< combo.length; i++){
	console.log(combo[i]);
	document.write("("+combo[i]+")"+"<br>");
}

//Question 12
//for(var i=0; i< combo.length; i++){
	for(var f=0; f< food.length; f++){
		console.log(food[i][f]);
	}
	for(var a=0; a< animal.length; a++){
		console.log(animal[a]);
	}
	for(var p=0; p< places.length; p++){
		console.log(places[p]);
		
	}
	for(var po=0; po< pokemon.length; po++){
		console.log(pokemon[po]);
	}
//}
var arrayAll=[food, animal, places, pokemon];

for (var i=0; i<arrayAll.length; i++){
	for(var j=0; j< arrayAll.length[i]; j++){
		console.log(arrayAll[i][j]);
	}
}



