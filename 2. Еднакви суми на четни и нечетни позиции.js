/*сумата от цифрите на четни и нечетни позиции да са равни. Ако няма числа, отговарящи на условието на конзолата не се извежда резултат.*/
function EquaulSum(input){
    const FirsNumber=Number(input[0]);
    const SecondNumbur=Number(input[1]);
    let buff="";
    

    for (let index = FirsNumber; index <= SecondNumbur; index++) {
        let SumEven=0;
        let SumOdd=0;
        let StringIndex=index.toString();//String(index)
        for (let i = 0; i < StringIndex.length; i++) {
            if(i%2==0){
           SumEven+=Number(StringIndex[i]); 
            }
            else{
                SumOdd+=Number(StringIndex[i]);
            }
            
        }
        if(SumEven==SumOdd){
            buff+=StringIndex +" ";
        }
    }
    console.log(buff)
}
EquaulSum([
    "100000",
     "100050"
])