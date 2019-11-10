function getData(){
    var s = document.getElementById("string").value;
}




let s = "aabbccddeefghi";
class Letter {
    constructor (name, cant) {
    this.name = name;
    this.cant = cant;
    }
};

string = s.split(''); // arreglo de caracteres
string = string.sort(); 

string2 = [];

var l = new Letter(string[0] , 1);
string2.push(l);
dist=0;
j=0;
for (i=0 ; i< (string.length)-1 ; i++) {
    
    if(string[i] !== string[i+1]) {
        j++;
        //console.log("ENTRO POR IF");
        var l = new Letter(string[i+1], 1);
        string2.push(l);
        dist = dist + 1;
    }
    else {
        //console.log('ENTRO POR ELSE')
        string2[j].cant= string2[j].cant + 1;
    }
   
};
console.log(string2.lenght); //PORQUEEEEE
//Validacion
b=true;
v = string2[0].cant;
tot=0;
control=0;

for (t=0; t< (string2.length) ; t++) {
    if (string2[t].cant !== v) {
        b=false;
    }
    tot= tot + string2[t].cant;
};

control = tot % dist;

if (control > 1) {
    b = false;
}
else {
    b = true;
}
if(b==true){
    prompt("Es valido");
}
else {
    prompt("No es valido");
}

