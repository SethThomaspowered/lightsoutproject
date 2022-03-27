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
    const mainTitle = document.querySelector("#title");
    const gameBoard = document.querySelector('#board');
    generateHeader(mainTitle);
    generateBoard(gameBoard);
}
const generateHeader = (header) =>{
    const title = document.createElement('h1');
    title.textContent="Welcome to Lights Out";
    header.appendChild(title);

}
const generateBoard = (board, rows = 5, columns=5) =>{
    for (let row = 0; row<rows; row++) {
        const elmRow = document.createElement('ul');
        elmRow.setAttribute('data-row', row);
        
        for (let column = 0; column< columns; column++){
            const elmColumn =document.createElement('li');
            elmColumn.setAttribute('data-status', 'empty');
            elmColumn.setAttribute('data-animation', 'idle');
            elmColumn.className='white';
            elmColumn.textContent="__";
           
            elmRow.appendChild(elmColumn);
            elmColumn.addEventListener('click', (el)=>{
                toggleLights(elmColumn)
            })
        } 
        board.appendChild(elmRow);
    }
}
const toggleLights=(element)=>{
    if (element.classList.contains('white')){
        element.classList.remove('white');
        element.classList.add("black");

       console.log('background is white');
    }else{
        element.classList.remove('black');
        element.classList.add('white');
        console.log("background is not white");
    }
}
document.addEventListener('DOMContentLoaded', init);
module.exports = Menu;