var cartas = {valor: [1,2,3,4,5,6,7,8,9,10,11,12,13], palo: ["c", "t", "p", "d"]}
mano1=[];
val=[];
pal=[];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function puntua1(mano,pal){ 
console.log("Jugador 1") 
var total = 0;
 for(var i=0; i<mano.length; i=i+1){ 
if(mano[i]==="1"  || mano[i]===1){
total = total + 20
                }
if(mano[i]==="11" || mano[i]===11 ){
  total=total+ 12
                }
if(mano[i]==="12" || mano[i]===12){
  total=total+ 14
                } 
if(mano[i]==="13" || mano[i]===13){
  total=total+ 17
                }
 if(mano[i]>1 && mano[i]<11){
total = total + mano[i]
                  } 
console.log("carta numero "+mano[i]+pal[i]) 
} 
   return total;
 }
function imprimePuntuacion(puntuacion){ 
console.log("La puntuación del P1 es " + puntuacion); 
} 

function barajar(cartas){
cartas.valor[0]=cartas.valor[parseInt(getRandomArbitrary(0,13))]
cartas.palo[0]=cartas.palo[parseInt(getRandomArbitrary(0,4))]
return "Barajando..."; 
} 


function repartir(cartas){
for (i=0 ; i < 5 ; i++){
val[val.length]=cartas.valor[parseInt(getRandomArbitrary(0,13))];
pal[pal.length]=cartas.palo[parseInt(getRandomArbitrary(0,4))];
mano1[mano1.length]=val[i]+pal[i]  
}
val.shift();//Eliminar
pal.shift();//Eliminar Primer Elemento
var resultado=puntua1(val,pal);
imprimePuntuacion(resultado); 

console.log ("Probando Valor es "+val)

 return "Este el valor "+mano1; 
} 
 
var Croupier = {baraja: barajar, reparte: repartir};
  Croupier.baraja(cartas); 
  Croupier.baraja(cartas);
  Croupier.reparte(cartas);
