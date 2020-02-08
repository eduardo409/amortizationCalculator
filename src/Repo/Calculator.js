var moment = require('moment');
module.exports =  class Calculator {
    constructor(){}
    decimalToPercent(decimal) {
        return decimal * 100
    }
    percentToDecimal(percent) {
        return percent / 100
    }
    apr(apr,balance) {
        return balance * apr
    }
    // returns a amortization schedule 
    schedule(balance, payment, apr){
        let p = new Promise((resolve) =>{
            let listOfPayments = new Array()
            let monthDate = moment();
            let monthBalance = balance
            let monthPayment = payment
            while(monthBalance > 0){
                monthDate = monthDate.add(1,'months')
                let monthInterest = apr * balance /12
                monthPayment = monthBalance < monthPayment ? monthInterest + monthBalance : payment
                let monthPrinciple = monthPayment - monthInterest
                monthBalance = monthBalance - monthPrinciple
                listOfPayments.push({monthDate, monthPayment, monthPrinciple, monthInterest, monthBalance})
            resolve(listOfPayments)
        }   

        })
    
        return p



    }
}