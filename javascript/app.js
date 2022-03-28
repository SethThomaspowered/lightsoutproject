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
let boardArray=[];
const generateBoard = (board, rows = 3, columns=3) =>{
    
    for (let row = 0; row<rows; row++) {
        const elmRow = document.createElement('ul');
        elmRow.setAttribute('data-row', row);
        
        for (let column = 0; column< columns; column++){
            const elmColumn =document.createElement('li');
            elmColumn.setAttribute('data-column', column);
            elmColumn.setAttribute('data-status', 'empty');
            elmColumn.setAttribute('data-animation', 'idle');
            elmColumn.className='white';
            elmColumn.classList.add('box');
            elmColumn.classList.add(column);
            elmColumn.classList.add(`row${row}`);
            elmColumn.textContent="__";
           
            elmRow.appendChild(elmColumn);
            elmColumn.addEventListener('click', (el)=>{
                toggleLights(elmColumn, rows)
            })
        } 
        board.appendChild(elmRow);
       
    }
}
let boxes;
const toggleLights=(el, rows)=>{
    boxes=document.querySelectorAll('.box');       
    el.classList.toggle('white');
    if(rows===2){
        if(el.classList.contains('row0')&& el.classList.contains('1'))
        {
            boxes[0].classList.toggle('white');
            boxes[3].classList.toggle('white');
        }
        if(el.classList.contains('row0')&& el.classList.contains('0'))
        {
            boxes[1].classList.toggle('white');
            boxes[2].classList.toggle('white');
        }
        if(el.classList.contains('row1')&& el.classList.contains('1'))
        {
            boxes[1].classList.toggle('white');
            boxes[2].classList.toggle('white');
        }
        if(el.classList.contains('row1')&& el.classList.contains('0'))
        {
            boxes[0].classList.toggle('white');
            boxes[3].classList.toggle('white');
        }
    }
    else if(rows===3){
        if(el.classList.contains('row0')&& el.classList.contains('0'))
        {
            boxes[1].classList.toggle('white');
            boxes[3].classList.toggle('white');
        }
        if(el.classList.contains('row0')&& el.classList.contains('1'))
        {
            boxes[0].classList.toggle('white');
            boxes[2].classList.toggle('white');
            boxes[4].classList.toggle('white');
        }
        if(el.classList.contains('row0')&& el.classList.contains('2'))
        {
            boxes[1].classList.toggle('white');
            boxes[5].classList.toggle('white');
        }
        if(el.classList.contains('row1')&& el.classList.contains('0'))
        {
            boxes[0].classList.toggle('white');
            boxes[4].classList.toggle('white');
            boxes[6].classList.toggle('white');
        }
        if(el.classList.contains('row1')&& el.classList.contains('1'))
        {
            boxes[1].classList.toggle('white');
            boxes[3].classList.toggle('white');
            boxes[5].classList.toggle('white');
            boxes[7].classList.toggle('white');
        }
        if(el.classList.contains('row1')&& el.classList.contains('2'))
        {
            boxes[2].classList.toggle('white');
            boxes[4].classList.toggle('white');
            boxes[8].classList.toggle('white');
        }
        if(el.classList.contains('row2')&& el.classList.contains('0'))
        {
            boxes[3].classList.toggle('white');
            boxes[7].classList.toggle('white');
        }
        if(el.classList.contains('row2')&& el.classList.contains('1'))
        {
            boxes[4].classList.toggle('white');
            boxes[6].classList.toggle('white');
            boxes[8].classList.toggle('white');
        }
        if(el.classList.contains('row2')&& el.classList.contains('2')){
            boxes[5].classList.toggle('white');
            boxes[7].classList.toggle('white');
        }
    }
    // if(el.classList.contains("white")){
    //     el.classList.remove("white");
    //     el.classList.add('black');
    //     console.log(boxes[1])
    //     if(el.classList.contains('row0')&&el.classList.contains('0') || el.classList.contains('2')){
    //         if(boxes[1].classList.contains('white')){
    //             boxes[1].classList.add("black");
    //             boxes[1].classList.remove('white');  
    //         }else{
    //             boxes[1].classList.add('white');
    //             boxes[1].classList.remove('black');
    //         }
    //     else if(el.classList.contains('row0')&&el.classList.contains('1')){
    //         if(boxes[0].classList.contains('white')){
    //             boxes[0].classList.add("black");
    //             boxes[0].classList.remove('white');  
    //         }else{
    //             boxes[0].classList.add('white');
    //             boxes[0].classList.remove('black');
    //         }
    //     }

        
        
            // if (boxes[i-1]){
            //     boxes[i-1].classList.add("white");
            // }
            // if (boxes[i+3]){
            //     boxes[i+3].classList.add("white");
            // }
            // if (boxes[i+1]){
            //         boxes[i+1].classList.remove("white");
            //     }
            // if (boxes[i-1]){
            //     boxes[i-1].classList.remove("white");
            // }
            // if (boxes[i+3]){
            //     boxes[i+3].classList.remove("white");
            // }
    
}

    
// const toggleLights=(element)=>{
//     if (element.classList.contains('white')){
//         element.classList.remove('white');
//         element.classList.add("black");

//        console.log('background is white');
//     }else{
//         element.classList.remove('black');
//         element.classList.add('white');
//         console.log("background is not white");
//     }
// }
const reset=()=>{
    boxes=document.querySelectorAll('.box');
    for(let i= 0; i<boxes.length; i++){
        boxes[i].classList.add('white');
    }
}
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', (e)=>{
    reset();
});

document.addEventListener('DOMContentLoaded', init);
