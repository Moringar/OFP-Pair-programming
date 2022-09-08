console.log("BONJOUR")

const formButton = document.querySelector("#formButton")
const textarea = document.querySelector("textarea")
const Nom = document.querySelector("#nom")
const Prenom = document.querySelector("#prenom")
const Gender = document.querySelector(".right")

const checkbox = document.querySelector("#conditions")
const Choix = document.querySelector("#films")

const buttonBox = document.querySelectorAll('[data-couleur]')
const lorem = document.querySelector("#lorem")

const attachementButton = document.querySelector("#attachementButton")
const attachement = document.querySelector("#attachement")


const dropDay = document.querySelector("#Jours")
const dropMonth = document.querySelector('#Mois')
const dropYear = document.querySelector("#Année")



const welcome = document.querySelector("#welcome")



const months = ["Janvier", "Fevrier", "mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"]



dropYear.addEventListener("input" ,() => {

    welcome.innerHTML = `WELCOME !${Prenom.value} ${Nom.value}, votre date de naissance est le ${dropDay.value} ${dropMonth.value} ${dropYear.value}.`

})


for( let i = 0; i < months.length; i++){
    let nouveaumonth = document.createElement('option')

    nouveaumonth.innerHTML = months[i]

    dropMonth.appendChild(nouveaumonth)
}

for (let i = 1950; i < 2023; i++){

    let nouveauAnnée = document.createElement('option')
    // inside nouveauJour there is " <option> </option>"
    nouveauAnnée.innerHTML = i

    dropYear.appendChild(nouveauAnnée)
}

for (let i = 1; i <= 31; i++){

    let nouveauJour = document.createElement('option')
    // inside nouveauJour there is " <option> </option>"
    nouveauJour.innerHTML = i

    dropDay.appendChild(nouveauJour)
}





attachementButton.addEventListener("input", ()=>{
    if (attachementButton.checked == false){
        attachement.setAttribute("disabled", "")
    }
    else{
        attachement.removeAttribute("disabled" , "")
    }
})


function wrong(x) {
    let redMessage = document.querySelector('#alerts')
    redMessage.children[x].classList.remove("hideIt")
}
function right(x) {
    let redMessage = document.querySelector('#alerts')
    redMessage.children[x].classList.add("hideIt")
}

for (let button of buttonBox){

    console.log(button.dataset.couleur)

    button.addEventListener("click", () =>{
        lorem.style.color =  button.dataset.couleur
    })

    

}


// If I click on the button
formButton.addEventListener("click", ()=>{
    let alerts = document.querySelector('#alerts')

    //If that , i do
    if (textarea.value.length < 50){
        wrong(4)
    }
    //else
    else{
        right(4)
    }


    if(Gender.children[0].checked == false && Gender.children[2].checked == false ){
        wrong(1)
        console.log('BIEN')
        
    }
    
    else{
        console.log("PAS BIEN")
            right(1)
    }


    if(checkbox.checked == false){
        wrong(2)
    }
    else{
        right(2)

    }
    if(Choix.selectedIndex == 0 ){
    wrong(3)
}
    else{
        right(3)
    }

    if(lorem.style.color == ""){
        wrong(5)
    }
    else{
        right(5)
    }

})



Nom.addEventListener("input", ()=>{
    if(Nom.value.length < 2){
        wrong(0)
    }
    else{
        right(0)
    }
})
Prenom.addEventListener("input", ()=>{
    if(Prenom.value.length < 2){
        wrong(0)
    }
    else{
        right(0)
    }
})

