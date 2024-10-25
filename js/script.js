//let body = document.body;
//body.style.backgroundColor = `	#ADD8E6`;

// function cor() {
//     let rangeVerm= document.getElementById ("rangeVerm").value;
//     let valorVerm= document.getElementById ("valorVerm");
//     rangeVerm.value= valorVerm;
// }


// let quadrado= document.querySelector (`quadrado`);
// quadrado.style.backgroundColor = `quadrado`;

const rangeVerm= document.getElementById ("rangeVerm");
const rangeVerd= document.getElementById ("rangeVerd");
const rangeAzul= document.getElementById ("rangeAzul");

const valorVerm= document.getElementById ("valorVerm");
const valorVerd= document.getElementById ("valorVerd");
const valorAzul= document.getElementById ("valorAzul");
    
const quadrado = document.querySelector (".quadrado");

function mudaCor() {

    const R= rangeVerm.value;
    const G= rangeVerd.value;
    const B= rangeAzul.value;

    valorVerm.value= R;
    valorVerd.value= G;
    valorAzul.value= B;

quadrado.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
}


// rangeVerm.addEventListener (`input`, atualizaCor);
// rangeVerd.addEventListener (`input`, atualizaCor);
// rangeAzul.addEventListener (`input`, atualizaCor);

// function atualizaCor () {
//     const r= rangeVerm.value;
//     const g= rangeVerd.value;
//     const b= rangeAzul.value;

//     valorVerm.value= r;
//     valorVerd.value= g;
//     valorAzul.value= b;

//     quadrado.style.backgroundColor= `rgb (${r}), (${g}), (${b})`;
// }



