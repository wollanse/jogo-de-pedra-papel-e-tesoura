const getUserChoice = (userInput) => {
    let result = userInput.toLowerCase()
       if(result == "rock"){
           return result
       }else if(result == "paper"){
           return result
       }else if(result == "scissors"){
           return result
       }else{
           console.log("essa opçao nao e valida")
       }      
   }
   
   //console.log(getUserChoice("ROCK"))
   
   const getComputerChoice = () =>{
     let numeros = Math.floor(Math.random() * 3)  
     if(numeros == 0){
       return "rock"    
     }else if(numeros == 1){
       return "paper"
     }else if(numeros == 2){
       return "scissors"
     }
   }
   //console.log(getComputerChoice())
   
   function determineWinner(userChoice, computerChoice){
     console.log(`escolha do humano: ${userChoice}, escolha do computador: ${computerChoice}`)
       if(userChoice == computerChoice){
         return "empate fim de jogo."
       }else if(userChoice == "rock" && computerChoice == "paper"){
         return "computador venceu"
       }else if(userChoice == "paper" && computerChoice == "scissors") {
         return "computador venceu"    
       }else if(userChoice == "scissors" && computerChoice == "rock"){
         return "computador venceu"
       }else if(userChoice == "rock" && computerChoice == "scissors"){
         return "humano venceu"
       }else if(userChoice == "paper" && computerChoice == "rock"){
         return "humano venceu"
       }else if(userChoice == "scissors" && computerChoice == "paper"){
         return "humano venceu"
       }   
   }
   //console.log(determineWinner("paper",getComputerChoice()))  
   
   function playGame(){
     let userInput = prompt("escolha rock,paper,scissors")
     let userChoice = getUserChoice(userInput)
     let computerChoice = getComputerChoice()
    console.log(determineWinner(userChoice, computerChoice))
   }
   playGame()
   //feito por:Wollanse Wallach,Gabriel diniz,Erick nejaim,Estela braz