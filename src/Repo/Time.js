/* eslint-disable no-console */
module.exports =  class Time {
    constructor(){}

    stringify(m){
        var numberOfMonths = Number(m)
        var years = Math.floor(numberOfMonths/12)
        var months = numberOfMonths % 12
        return `Approximately ${years} years ${months} months till payoff`  
    }

}