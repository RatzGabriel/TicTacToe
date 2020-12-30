const grid = document.querySelector('.grid')
let board = ["","","","","","","","",""]

let counter = 2;






function game(){

    winningCondition()
    
    if(counter%2===0){
        fieldUpdate("X");
        counter+=1

    }else{
        fieldUpdate("O");
        counter+=1
    }
    
}


game();

function winningCondition(){
    if(
        board[0]=="X" && board[1]=="X" && board[2]=="X"||
        board[0]=="X" && board[4]=="X" && board[8]=="X"||
        board[1]=="X" && board[4]=="X" && board[7]=="X"||
        board[2]=="X" && board[4]=="X" && board[6]=="X"||
        board[3]=="X" && board[4]=="X" && board[5]=="X"||
        board[6]=="X" && board[7]=="X" && board[8]=="X"
        ){
            alert('Player X Wins');
            board = ["","","","","","","","",""];
            
            console.log('X-Wins');
            
        }else if(
        board[0]=="O" && board[1]=="O" && board[2]=="O"||
        board[0]=="O" && board[3]=="O" && board[6]=="O"||
        board[0]=="O" && board[4]=="O" && board[8]=="O"||
        board[1]=="O" && board[4]=="O" && board[7]=="O"||
        board[2]=="O" && board[4]=="O" && board[6]=="O"||
        board[3]=="O" && board[4]=="O" && board[5]=="O"||
        board[6]=="O" && board[7]=="O" && board[8]=="O"){
            
            alert('Player O Wins');
            board = ["","","","","","","","",""];
            
            
        }
}


function fieldUpdate(mark){
    for(let el in board){
        const getDivField = document.createElement('div');
        const getButton = document.createElement('button');
        getButton.classList.add('btn-hide')
        getDivField.classList.add('grid-item');
        getDivField.innerText=board[el];
        getDivField.appendChild(getButton)
        grid.appendChild(getDivField);
    
        getButton.addEventListener('click',function(){
            console.log(el);
            board[el]=mark;
            grid.innerHTML=""
            game()
        })
    }
}