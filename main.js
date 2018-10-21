'use strict'

// let numberDisplayed = "";
let runningTotal = 0;

// function updateNumberDisplayed(s) {
//     numberDisplayed += s;
// }

// function clearNumberDisplayed() {
//     numberDisplayed = "";
// }

        // document.querySelector("button#three").addEventListener('click', this.one());
        // document.querySelector("button#four").addEventListener('click', this.two());
        // document.querySelector("button#five").addEventListener('click', this.one());
        // document.querySelector("button#six").addEventListener('click', this.two());
        // document.querySelector("button#seven").addEventListener('click', this.one());
        // document.querySelector("button#eight").addEventListener('click', this.two());
        // document.querySelector("button#nine").addEventListener('click', this.two());
        // document.querySelector("button#add").addEventListener('click', this.one());
        // document.querySelector("button#minus").addEventListener('click', this.two());
        //  document.querySelector("button#eight").addEventListener('click', this.two());
        // document.querySelector("button#nine").addEventListener('click', this.two());
        // document.querySelector("button#add").addEventListener('click', this.one());
        // document.querySelector("button#minus").addEventListener('click', this.two());
    
var stack = function() {
    var values = [];

    return {
        push : function(x){
            values.push(x);
        },
        pop : function(){
            return values.pop(x);
        },
        peek : function() {
            return values[values.length-1];
        },
        size : function() {
            return values.length;
        },
        isEmpty : function() {
            return values.length === 0;
        }
    }
}

var makeCalculator = function() {
    var result = 0;
    var numberDisplayed = "";

    console.log("New Calculator made");
    
    return {

        changeNumberDisplayed : function(s) {
            numberDisplayed += s;
            document.querySelector("#numberDisplayed").innerHTML = numberDisplayed;
        },   
        zero : function() {
            numberDisplayed += '0';
            document.querySelector("#numberDisplayed").innerHTML = numberDisplayed;
        },

        one : function() {
            numberDisplayed += '1';
            document.querySelector("#numberDisplayed").innerHTML = numberDisplayed;
        },

        two : function() {
            numberDisplayed += '2';
            document.querySelector("#numberDisplayed").innerHTML = numberDisplayed;
        },

        three : function() {
            numberDisplayed += '3';
            document.querySelector("#numberDisplayed").innerHTML = numberDisplayed;
        },

        four : function() {
            numberDisplayed += '4';
            document.querySelector("#numberDisplayed").innerHTML = numberDisplayed;
        },

        five : function(){
            numberDisplayed += '5';
            document.querySelector("#numberDisplayed").innerHTML = numberDisplayed;
        }
        ,

        six: function() {
            numberDisplayed += '6';
            document.querySelector("#numberDisplayed").innerHTML = numberDisplayed;
        },
        
        seven : function() {
            numberDisplayed += '7';
            document.querySelector("#numberDisplayed").innerHTML = numberDisplayed;
        },

        eight: function() {
            numberDisplayed += '8';
            document.querySelector("#numberDisplayed").innerHTML = numberDisplayed;
        },

        nine: function() {
            numberDisplayed += '9';
            document.querySelector("#numberDisplayed").innerHTML = numberDisplayed;
        },
        
        add: function() {
            var temp = result;
            result += Number(numberDisplayed);
            console.log(String(temp) + " + " + numberDisplayed + " = " + String(result));
            numberDisplayed = '';
        },

        subtract: function() {
            var temp = result;
            result -= Number(numberDisplayed);
            console.log(String(temp) + " - " + numberDisplayed + " = " + String(result));
            numberDisplayed = '';
        },

        multiply: function() {
            var temp = result;
            result *= Number(numberDisplayed);
            console.log(String(temp) + " * " + numberDisplayed + " = " + String(result));
            numberDisplayed = '';
        },
        
        divide: function() {
            var temp = result;
            result /= Number(numberDisplayed);
            console.log(String(temp) + " / " + numberDisplayed + " = " + String(result));
            numberDisplayed = '';
        },

        exponent: function() {
            result **= Number(numberDisplayed);
            numberDisplay = '';
        },

        negation: function() {
            result = -Number(numberDisplayed);
        },
        
        tangent: function() {
            result = Math.tan(numberDisplayed);
        },

        sine: function() {
            result = Math.sin(numberDisplayed);
        },

        cosine: function() {
            result = Math.cos(numberDisplayed);
        },

        clearResult: function() {
            result = 0;
        },

        clearNumberDisplayed: function() {
            numberDisplayed = '';
        },

        returnResult: function() {
            return result;
        },

        returnNumberDisplayed: function() {
            return numberDisplayed;
        }
    }
}

var c = makeCalculator();

document.querySelector("button#zero").addEventListener('click', function() {c.zero()});
document.querySelector("button#one").addEventListener('click', function() {c.one()});
document.querySelector("button#two").addEventListener('click', function() {c.two()});
document.querySelector("button#three").addEventListener('click', function() {c.three()});
document.querySelector("button#four").addEventListener('click', function() {c.four()});
document.querySelector("button#five").addEventListener('click', function() {c.five()});
document.querySelector("button#six").addEventListener('click', function() {c.six()});
document.querySelector("button#seven").addEventListener('click', function() {c.seven()});
document.querySelector("button#eight").addEventListener('click', function() {c.eight()});
document.querySelector("button#nine").addEventListener('click', function() {c.nine()});
document.querySelector("button#add").addEventListener('click', function() {c.add()});
document.querySelector("button#minus").addEventListener('click', function(){c.subtract()});
document.querySelector("button#multiply").addEventListener('click', function(){c.multiply()});
document.querySelector("button#divide").addEventListener('click', function(){c.divide()});
document.querySelector("button#exponent").addEventListener('click', function(){c.exponent()});
document.querySelector("button#cosine").addEventListener('click', function() {c.cosine()});
document.querySelector("button#sine").addEventListener('click', function() {c.sine()});
document.querySelector("button#tangent").addEventListener('click', function(){c.tangent()});
document.querySelector("button#negation").addEventListener('click', function(){c.negation()});

// module.exports = {
//     // numberDisplayed: numberDisplayed,
//     // runningTotal: runningTotal,
//     makeCalculator: makeCalculator,
//     // updateNumberDisplayed: updateNumberDisplayed,
//     // clearNumberDisplayed: clearNumberDisplayed
// }
