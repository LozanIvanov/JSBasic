function Solve(input){
 const number=Number(input[0]);
 let buff="";
 
  for (let i = 1111; i <= 9999; i++) {
      const n=String(i);
      let isbool=true;
      for (const char of n) {
        if( number%char!=0){
            isbool=false;
        }
                 
      }
      if(isbool){
        buff+=n+" ";
      }
    
  }
  console.log(buff)
}
Solve(["3"])