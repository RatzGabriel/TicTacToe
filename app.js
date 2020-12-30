
const gameBoard = (()=>{
    let board = ["","","","","","","","",""]


    const isBelowThreshold = (currentValue) => currentValue == "X"||currentValue=="O";
    if(board.every(isBelowThreshold)){
        
        return 'tie'
    }
    let counter = 2;






    const game = function (){
        
        winningCondition();

        if(counter%2===0){
            fieldUpdate(p1.mark);
            counter+=1
            

        }else{
            fieldUpdate(p2.mark);
            counter+=1;
            
        }
        display.displayFunction();
        
    }




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
                p1.score+=1;
                console.log('X-Wins');
                if(p1.score>4 ||p2.score>4){
                    alert('Player Wins')
                }
                
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
                p2.score+=1;
                if(p1.score>4 ||p2.score>4){
                    alert('Player Wins GAME OVER')
                }
                
                
            }
    }


    function fieldUpdate(mark){
        
        for(let el in board){
            
            
            const grid = document.querySelector('.grid')
            const getDivField = document.createElement('div');
            const getButton = document.createElement('button')
            getButton.classList.add('btn-hide')
            getDivField.classList.add('grid-item');
            getDivField.innerText=board[el];
            getDivField.appendChild(getButton)
            grid.appendChild(getDivField);
        
            getButton.addEventListener('click',function(){
                if(board[el]=="X"||board[el]=="O"){
                    
                }else{
                
                board[el]=mark;
                grid.innerHTML="";
                
                game()
                }
            })
        }
    }

    const playerFactory = (score,mark) => {
        return{score,mark:mark}
    }
    
    

    return {game,playerFactory}
})();

let p1 = gameBoard.playerFactory(0,"X")
let p2 = gameBoard.playerFactory(0,"O")

const display = (()=>{
const displayFunction = function (){
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    left.innerText=`Score: ${p1.score}`;
    right.innerText=`Score: ${p2.score}`;
    
}
    return{displayFunction}
})();



gameBoard.game();



if(p1.score>4 ||p2.score>4){
    alert('Player Wins')
}


const reset = document.getElementById('reset');
reset.addEventListener('click',function(){
    
    p1.score=0;
    p2.score=0;
    display.displayFunction();
})