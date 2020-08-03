var baraja = {valor: [1,2,3,4,5,6,7,8,9,10,11,12,13], palo: ["c", "t", "p", "d"]}
var rojas=[]
var negras=[]
var parojas=[]

for(i=0;i<baraja.palo.length;i++){
for(x=0;x<baraja.valor.length;x++){
if(baraja.palo[i]==="c" || baraja.palo[i]==="d"){
//console.log("rojas son" + baraja.valor[x] + baraja.palo[i]);
rojas[rojas.length]=baraja.valor[x]+baraja.palo[i];
if(baraja.valor[x]%2==0){
parojas[parojas.length]=baraja.valor[x]+baraja.palo[i];

}
            }// fin del if de las rojas
if(baraja.palo[i]==="t" || baraja.palo[i]==="p"){
negras[negras.length]=baraja.valor[x]+baraja.palo[i];
            }//fin del if de las negras
       }
}
console.log("la ultima es "+parojas[parojas.length - 1])
