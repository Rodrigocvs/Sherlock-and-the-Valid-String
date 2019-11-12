function getData(){
        var s = document.getElementById("string").value;
        string = s.split(''); // arreglo de caracteres
    string = string.sort(); 

    string2 = [];
    string2.push(1);
    dist=0;
    j=0;
    for (i=0 ; i< (string.length)-1 ; i++) {
        
        if(string[i] !== string[i+1]) {
            j++;
            string2.push(1);
            dist = dist + 1;
        }
        else {
            string2[j]= string2[j] + 1;
        }
    
    };
    string2 = string2.sort();
    //Validacion
    b=true;
    v = string2[0];
    dif=1;
    //Contar las frecuencias diferentes, ent si tengo mayor que 3 es falso, si tengo 2 hago control, si tengo 1 es valido
    for (i=0; i< (string2.length)-1 ; i++) {
        if (string2[i] !== v) {
            dif= dif++ ;
            v = string2[i+1];
        }
        
    };
    console.log(string2)
    console.log(dist)

    control = string2[0];
    if (dist < 3) {
        if (dif = 2) {
            for(i=0 ; i< (string2.length) -1 ; i++) {
                if (control !== string2[i+1]) {
                    if ( ((string2[i+1] - string2[i]) === 1) && ((i+1)== string2.length -1 ) ) {
                        b= true ;
                    }
                    else {
                        b= false;
                    }
                }
            }
        }
    }
    else {
        b=false;
    }
    if(b==true){
        alert("Es valido");
    }
    else {
        alert("No es valido");
    };    
};




