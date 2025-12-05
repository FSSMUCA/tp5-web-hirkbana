//ex1:
let x = "150";
let y = 150;
let z = true ;

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

x = Number(x);
console.log(typeof x);

// ex2 : 

let prenom = "sara";
let age= 22 ;
let phrase = "Je m'appelle " + prenom + " et j'ai " + age +  " ans.";
console.log(phrase);

age=23 ;
phrase = "Je m'appelle " + prenom + " et j'ai "+ age + " ans . " ; 
console.log(phrase);

//ex 3 : 
 let nombre1 = Number (prompt ( "Entrer un nombre :"));
 if (nombre1<0) {
    console.log("nombre négatif");
}else {
    if (nombre1<=10){
        console.log("petit");
    }else if (nombre1<=50){
        console.log("moyen");
    }else if (nombre1<=100){
        console.log("grand");
    }else {
        console.log("trés grand");
    }
}

//ex4: 

let min = Number(prompt("entrez  le nombre minimal : "));
let max = Number(prompt("entrez le nombre maximal :  "));

for (let i=min ; i<=max ; i++){
    if (i%3 === 0 && i % 5 === 0 ){
        console.log(i + " : Five&Three");
    }else if (i%3===0){
        console.log(i + " : Three  "); 
    }else if (i%5===0){
        console.log(i + " : Five   "); 
    }else {
        console.log(i); 
    }
}
//ex5:
let nombre2 = Number(prompt("entrez un nombre : "));
for (let i=1 ; i<=10 ; i++ ){
    console.log(`${nombre2} x ${i} = ${nombre2 * i}`);

}
//ex6:

let sommepairs = 0 ;
let sommeimpairs = 0 ;

for (let i=1 ; i<=50 ; i++ ){
    if (i%2===0) sommepairs += i ;
    else sommeimpairs +=i;

}
console.log("somme des pairs = "+sommepairs);
console.log("somme des impairs = "+sommeimpairs);

//ex7:
function verifierMotDePasse(mdp){
    return mdp.length>= 8 && mdp.includes("@");
}
let userMdp = prompt ("entrez un mot de passe : ");
if (verifierMotDePasse(userMdp)){console.log("mot de passe valide");} 
else {console.log("mot de passe non valide ");}


//exercice 8 : 

function totalAvecRemise(total , remise){
    return total-(total*remise/100);
}

let total = Number (prompt ("total HT : "));
let remise = Number ( prompt ("remis (%): "));

console.log("total final = " +totalAvecRemise(total,remise));



//ex9: 
function factorielle (n) {
    if ( n==0) return 1;
    return n*factorielle (n-1);
}
console.log(factorielle(5));

//ex10 

function sommeiterative(n){
    let s=0;
    for (let i=1 ; i<=n ; i++ ){
        s+=i;
    }
   
 return s;   
}


function sommerecursive(n){
    if (n===0)return 0;
    return n+ sommerecursive(n-1);

}

console.log(sommeiterative(10));
console.log(sommerecursive(10));
