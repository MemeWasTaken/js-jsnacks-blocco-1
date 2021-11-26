// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

let sumNum = 0

// For Loop
    for (let i = 1; i <= 10; i++) {
        let newNum =parseInt(prompt());
        sumNum += newNum 
    }
    console.log(sumNum);

// While Loop 
    let t = 1;
    while (t <= 10) {
        let newNum =parseInt(prompt());
        sumNum += newNum;
        t++;
    }
    console.log(sumNum);