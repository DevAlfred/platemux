/*const artistes=[
	
	{name: "Dinos Du mal à te dire ft Damso"},
	{name: "damso amnesie"},
	{name: "damso 911"},
	{name: "Arafat DJ Dosabado"},
	{name: "Yemi Alade I choose you"},
	{name: "Benaud ye dja"},
	{name: "Dadju la roue tourne "},
	{name: "Gims le pire"},
	{name: "Dadju jaloux"},
	{name: "suspect95 c'est dans tele"},
	{name: "Ferre Gola court circuit"},
	{name: "Ninho tout en Gucci"},
	{name: "Dadju complique"},
	{name: "Fally Ipupa mon bebe"},
	{name: "suspect95 Mercon"},
	{name: "Fally Ipupa Amore"},
	{name: "suspect95 Dis lui"},
	{name: "suspect95 Enfant des gens"},
	{name: "suspect95 promesse"},
	{name: "dinos Arob@se"},
	{name: "Fally Ipupa eloko oyo"},
	{name: "Dinos ciel pleure ft Laylow"},
	{name: "Dinos paranoiaque"},
	{name: "claire bahi jesus est mieux"},
	{name: "claire bahi hozanna"},
	{name: "Revolution seul ami"},
	{name: "Black m week-end"},
	{name: "Poseidon Ibs Fiere d'etre(ABOBOLAIS)"}, 
	{name: "Revolution ft Magic system kelly"},
	{name: "Elow'n Demain ya pa cours"},

];


function page(){
	const search= document.getElementById('rechercher').value;
	console.log(search);
}
*/ 



window.onload = function(){
	var motsClefs = [
	"Dinos Du mal à te dire ft Damso",
	"damso amnesie",
	"damso 911",
	"Arafat DJ Dosabado",
	"Yemi Alade I choose you",
	"Benaud ye dja",
	"Dadju la roue tourne ",
	"Gims le pire",
	"Dadju jaloux",
	"suspect95 c'est dans tele",
	"Ferre Gola court circuit",
	"Ninho tout en Gucci",
	"Dadju complique",
	"Fally Ipupa mon bebe",
	"suspect95 Mercon",
	"Fally Ipupa Amore",
	"suspect95 Dis lui",
	"suspect95 Enfant des gens",
	"suspect95 promesse",	
	"Fally Ipupa eloko oyo",
	"claire bahi jesus est mieux",
	"claire bahi hozanna",
	"Revolution seul ami",
	"Black m week-end",
	"Poseidon Ibs Fiere d'etre(ABOBOLAIS)", 
	"Revolution ft Magic system kelly",
	"Elow'n Demain ya pa cours",
	];
	
	var form = document.getElementById("auto-suggest");
	var input = form.search;
	
	var list = document.createElement("ul");
	list.className = "suggestions";
	list.style.display = "none";

	form.appendChild(list);

	input.onkeyup = function(){
		var txt = this.value;
		if(!txt){
			list.style.display = "none";
		    return;
		}
		
		var suggestions = 0;
		var frag = document.createDocumentFragment();
		
		for(var i = 0, c = motsClefs.length; i < c; i++){
			if(new RegExp("^"+txt,"i").test(motsClefs[i])){
				var word = document.createElement("li");
				frag.appendChild(word);
				word.innerHTML = motsClefs[i].replace(new RegExp("^("+txt+")","i"),"<strong>$1</strong>");
				word.mot = motsClefs[i];
				word.onmousedown = function(){					
					input.focus();
					input.value = this.mot;
					list.style.display = "none";
					return false;
				};				
				suggestions++;
			}
		}

		if(suggestions){
			list.innerHTML = "";
			list.appendChild(frag);
			list.style.display = "block";
		}
		else {
			list.style.display = "none";			
		}
	};

	input.onblur = function(){
		list.style.display = "none";
        if(this.value=="")
            this.value = "Rechercher...";
	};
};
				
if (true) {}	




