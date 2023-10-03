/*. Да се намери сумата на всички въведени прости и сумата на всичкивъведени непрости числа. 
 ако на входа се подаде отрицателно число да се изведе следното съобщение "Number is negative.". 
 В този случай въведено число се игнорира и не се прибавя към нито една от двете суми, а програмата продължава своето изпълнение, 
 очаквайки въвеждане на следващо число*/
function Solve(input){
    index=0;
    let step=input[index];
   
    let Prime=0;
    let NotPrime=0;
    
    while (step!=="stop") {
        let Isbool=true;
        let number=Number(step);
        if(number<0){
            console.log(`Number is negative`);
            
            step=input[++index];
            number=Number(step);
        }
        for (let i = 2; i <number; i++) {
            if(number%i==0)
            {
             Isbool=false;
             break;
            }   
        }
        if(Isbool){
            Prime+=number;
        }
        else{
            NotPrime+=number
        }
    
        
        step=input[++index];
    }
     console.log(`Sum of all prime number is: ${Prime}`);
     console.log(`Sum of all  not prime number is: ${NotPrime}`);
}
Solve(["3","-1","9","0","7","19","4","stop"])