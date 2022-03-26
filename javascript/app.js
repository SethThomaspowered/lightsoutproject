class Menu  {
    constructor(message, name){
        this.message=message
        this.name=name;
    }
    greet() {
    return "Welcome to Lights Out";
}

}
const init = () =>{
    console.log('Welcome to Lights Out');
    const gameBoard = document.querySelector('#board');
    generateBoard(gameBoard);
}
const generateBoard = (board, rows = 6, columns=5) =>{
    for (let row = 0; row<rows; row++) {
        const elmRow = document.createElement('ul');
        elmRow.setAttribute('data-row', row);
        
        for (let column = 0; column< columns; column++){
            const elmColumn =document.createElement('li');
            elmColumn.setAttribute('data-status', 'empty');
            elmColumn.setAttribute('data-animation', 'idle');
            elmColumn.textContent= ":)";
            elmRow.appendChild(elmColumn);
        } 
        board.appendChild(elmRow);
    }
}
document.addEventListener('DOMContentLoaded', init);
module.exports = Menu;