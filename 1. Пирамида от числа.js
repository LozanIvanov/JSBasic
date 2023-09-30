/*Напишете функция, която получава цяло число n и отпечатва пирамида от числа, като в примерите:*/

function numberPyramid(input){
    let n=Number(input[0]);
    let printNumber=1;
    let isFinish=false;
    for (let row = 0; row <=n; row++) {
        let buff="";
        for (let col = 0; col <=row; col++) {
            buff+=`${printNumber} `;
            if(printNumber===n){
                isFinish=true;
                break;
            }
            printNumber++;
            
        }
        console.log(buff);
        if(isFinish){
            break;
        }
        
    }
}
numberPyramid(["7"])