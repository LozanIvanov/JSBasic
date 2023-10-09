/*От първия елемент на масива се прочита броят на хората в журито n - цяло число в интервала [1…20]
След това името на презентацията - текстЗа всяка една презентация като нов елемент се чете n - на брой оценки - 
реално число в интервала [2.00…6.00]След изчисляване на средната оценка за конкретна презентация, на конзолата се печата
"{името на презентацията} - {средна оценка}."След получаване на команда "Finish" на конзолата се печата 
"Student's final assessment is {среден успех от всички презентации}." и програмата приключва.*/ 

function Solve(input){
    let index=0;
    const juri=input[index];
    index++;
    let name=input[index];
    index++;
    let count=0;
    let Allmark=0;
     while (name!="Finish") {
        
        let sum=0;
        for (let i = 0; i < juri; i++) {
             
          const mark=Number(input[index]);
          index++;
          sum+=mark;   
        }
        Allmark+=sum/juri;
        count++;
        console.log(`${name} - ${(sum/juri).toFixed(2)}`);
        name=input[index];
        index++;
     }
     
     console.log(`Student's final assessment is ${(Allmark/count).toFixed(2)}.`)


}

Solve(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])