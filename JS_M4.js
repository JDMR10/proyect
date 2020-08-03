
function puntua1(mano,pal){ 
console.log("Jugador 1") 
var total = 0;
 for(var i=0; i<mano.length; i=i+1){ 
if(pal[i]==="c"  || pal[i]==="d"){
total = total + mano[i] * 2
}else{
total = total + mano[i]
} 
console.log("carta numero "+mano[i]+pal[i]) 
} 
   return total;
 }

function puntua2 (mano,pal){
console.log("Jugador 2") 
var total = 0;
for(var i=0; i<mano.length; i=i+1){ 
if(pal[i]==="c"  || pal[i]==="d"){
total = total + mano[i] * 2
}else{
total = total + mano[i]
} 
console.log("carta numero "+mano[i]+pal[i]) 
} 
   return total;
 }
function GanadorDePartida(res1,res2){
    if(res1 > res2 ){
    console.log("Ganador es el P1")
           }else{
    if(res1 === res2 ){
   console.log("Empate... Nueva Mano")
            }
    if (res1 < res2 ){
        console.log("Ganador es el P2")        
                  }
           }
     
}

function imprimePuntuacion(puntuacion){ 
console.log("La puntuación del P1 es " + puntuacion); 
} 
function imprimePuntuacion2(puntuación){
console.log("La puntuación del P2 es "+ puntuación)
}

function programa(){
var mano1 = [10, 9, 8, 7, 8] 
var manopalo1 =["c","t","p","c","c"]
var mano2 = [2,3,10,11,12]
var manopalo2 = ["t","t","c","p","d"]
var resultado = puntua1(mano1,manopalo1);
var resultado2 =puntua2(mano2,manopalo2);
 imprimePuntuacion(resultado); 
 imprimePuntuacion2(resultado2);
 GanadorDePartida(resultado,resultado2);
} 
programa(); 
