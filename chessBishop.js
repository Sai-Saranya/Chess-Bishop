const trList = document.getElementsByTagName("tr");
const table = document.getElementById("myTable");


function printTable(){
    let tableHTML='';
    const trBeginning="<tr>";
    const tdCell="<td></td>";
    const trEnd="</td>"
    for(let i=0;i<8;i++){
        tableHTML=tableHTML+trBeginning;
        for(let j=0;j<8;j++){
            tableHTML=tableHTML+tdCell;
        }
        tableHTML=tableHTML+trEnd;
    }
    table.innerHTML=tableHTML;
}

function starterView() {
    let i=0;
    let j=0;
    for(i=0;i<8;i++){
        for(j=0;j<8;j++){
            if((i+j)%2==0){
                trList[i].children[j].style.backgroundColor="black";
            }
            else{
                trList[i].children[j].style.backgroundColor="white";
            }
        }
    }
}

table.addEventListener("mouseover",(e)=>{
    starterView();
    const rowIndex=e.target.parentElement.rowIndex;
    const colIndex=e.target.cellIndex;
    let currRow=rowIndex;
    let currCol=colIndex;
    while(currRow>=0 && currRow<8 && currCol>=0 && currCol<8){
        trList[currRow].children[currCol].style.backgroundColor="blue";
        currCol++;
        currRow++;
    }
    currRow=rowIndex;
    currCol=colIndex;
    while(currRow>=0 && currRow<8 && currCol>=0 && currCol<8){
        trList[currRow].children[currCol].style.backgroundColor="blue";
        currCol--;
        currRow--;
    }
    currRow=rowIndex;
    currCol=colIndex;
    while(currRow>=0 && currRow<8 && currCol>=0 && currCol<8){
        trList[currRow].children[currCol].style.backgroundColor="blue";
        currCol++;
        currRow--;
    }
    currRow=rowIndex;
    currCol=colIndex;
    while(currRow>=0 && currRow<8 && currCol>=0 && currCol<8){
        trList[currRow].children[currCol].style.backgroundColor="blue";
        currCol--;
        currRow++;
    }
    trList[rowIndex].children[colIndex].style.backgroundColor="lightblue";
});

printTable();
starterView();
