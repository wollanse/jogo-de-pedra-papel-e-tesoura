const getUserChoice = (userInput) => {
  let result = userInput.toLowerCase()
        if(result == "rock"){
            return result
        }else if(result == "paper"){
            return result
        }else if(result == "scissors"){
            return result
        }else{
         alert("Essa opção não é válida escolha outra porfavor")
         return ""
     }      
 }
 //console.log(getUserChoice("ROCK"))
 
 const getComputerChoice = () =>{
   let numeros = Math.floor(Math.random() * 3)  
   switch(numeros){
     case 0:
       return "rock";
       break;
     case 1:
       return "paper";
       break;
     case 2:
       return "scissors";
       break;
   }
 }
 //console.log(getComputerChoice())
 
 function determineWinner(userChoice, computerChoice){
   console.log(`Escolha do humano: ${userChoice}, Escolha do computador: ${computerChoice}`)
     if(userChoice == computerChoice){
       return "Empate fim de jogo."
     }else if(userChoice == "rock" && computerChoice == "paper"){
       return "Computador venceu"
     }else if(userChoice == "paper" && computerChoice == "scissors") {
       return "Computador venceu"    
     }else if(userChoice == "scissors" && computerChoice == "rock"){
       return "Computador venceu"
     }else if(userChoice == "rock" && computerChoice == "scissors"){
       return "Humano venceu"
     }else if(userChoice == "paper" && computerChoice == "rock"){
       return "Humano venceu"
     }else if(userChoice == "scissors" && computerChoice == "paper"){
       return "Humano venceu"
     }   
 }
 //console.log(determineWinner("paper",getComputerChoice()))  
 
 function playGame(){
   let userInput = prompt("Escolha rock,paper,scissors")
   let userChoice = getUserChoice(userInput)
   if(userChoice == ""){
     playGame()
   }else{
       let computerChoice = getComputerChoice()
  console.log(determineWinner(userChoice, computerChoice))
   }
 }
 playGame()
 //feito por:Wollanse Wallach,Gabriel Diniz,Erick Nejaim,Estela Braz