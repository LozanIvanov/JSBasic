/*Вашата задача е да напишете програма, която да изчислява процента на билетите за всеки тип от продадените билети: 
студентски(student), стандартен(standard) и детски(kid), за всички прожекции.
 Трябва да изчислите и колко процента от залата е запълнена за всяка една прожекция.*/
 
 function Solve(input){
    let index=  0;
    let command=input[index];
    index++;
    let countStudentTicket=0;
    let countKidTicket=0;
    let countStandartTicket=0;
    let countTotalTicket=0;
    
    while (command!=="Finish") {
        let movieName=command;
        let freeSpace=Number(input[index]);
        index++;
        let ticketType=input[index];
        index++
        let countSellTicket=0;

        while(ticketType !=="End"){
            countSellTicket++;
           
           
           
            switch (ticketType) {
                case "student":countStudentTicket++;break;
                case "kid":countKidTicket++;break;
                case "standard":countStandartTicket++;break;
                    
            }
            if(countSellTicket==freeSpace){
                break;
            }
            ticketType=input[index];
            index++;
        }
        countTotalTicket+=countSellTicket;
        let percentageFull=countSellTicket/freeSpace*100;
        console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);

        command=input[index];
        index++;

    }
        let percentageStudentTicket=countStudentTicket/countTotalTicket*100;
        let percentageStandartTicket=countStandartTicket/countTotalTicket*100;
        let percentageKidsTicket=countKidTicket/countTotalTicket*100;

        console.log(`Total tickets: ${countTotalTicket}`);
        console.log(`${percentageStudentTicket.toFixed(2)}% student tickets.`);
        console.log(`${percentageStandartTicket.toFixed(2)}% standart tickets.`);
        console.log(`${percentageKidsTicket.toFixed(2)}% kid tickets.`);
    }
   Solve(["The Matrix",
   "20",
   "student","standard","kid", "kid", "student","student","standard","student","End",
   
   "The Green Mile",
   "17",
   "student","standard","standard","student","standard","student","End",
   
   "Amadeus",
    "3",
    "standard", "standard", "standard","Finish"
])
   