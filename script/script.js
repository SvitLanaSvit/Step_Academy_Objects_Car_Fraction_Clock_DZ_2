//1
class Car{
    constructor(title, model, yearOfProd, avgSpeed){
        this.title = title;
        this.model = model;
        this.yearOfProd = yearOfProd;
        this.avgSpeed = avgSpeed;
        this.showCar = function(){
            console.log(`Title:\t\t\t\t${this.title}\nModel:\t\t\t\t${this.model}\nYear of produce:\t${this.yearOfProd}\nAverage of speed:\t${avgSpeed}`);
        }
    }
}

function getTimeToCoverDistance(obj, distance){
    let ss = distance * 3600 / obj.avgSpeed;
    let hh = ss / 3600 - (ss / 3600) % 1;
    let mm = (ss - hh * 3600) / 60 - ((ss - hh * 3600) / 60) % 1;
    ss = ss - hh * 3600 - mm * 60;
    if(hh >= 4){
        let diff = hh / 4 - (hh / 4) % 1;
        hh += diff;
    }
    console.log(`The distance ${distance} km take time with a pause every 4 hours for 1 hour: ${hh < 10 ? '0' + hh : hh}:${mm < 10 ? '0' + mm : mm}:${ss < 10 ? '0' + ss : ss}`);
}

//2
class Fraction {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
}

function NOD () {
    for (var x = arguments[0], i = 1; i < arguments.length; i++) {
      var y = arguments[i];
      while (x && y) {
        x > y ? x %= y : y %= x;
      }
      x += y;
    }
    return x;
}

function sumFraction(fraction1, fraction2){
    let num = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
    let den = fraction1.denominator * fraction2.denominator;
    let nod = NOD(num, den);
    console.log(`NOD = ${nod}`);
    console.log(`Numerator: ${num / nod}`);
    console.log(`Denominator: ${den / nod}`);
}

function diffFraction(fraction1, fraction2){
    let num = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
    let den = fraction1.denominator * fraction2.denominator;
    let nod = NOD(num, den);
    if(nod < 0) nod = -nod;
    console.log(`NOD = ${nod}`);
    console.log(`Numerator: ${num / nod}`);
    console.log(`Denominator: ${den / nod}`);
}

function multyFraction(fraction1, fraction2){
    let num = fraction1.numerator * fraction2.numerator;
    let den = fraction1.denominator * fraction2.denominator;
    let nod = NOD(num, den);
    if(nod < 0) nod = -nod;
    console.log(`NOD = ${nod}`);
    console.log(`Numerator: ${num / nod}`);
    console.log(`Denominator: ${den / nod}`);
}

function devisionFraction(fraction1, fraction2){
    let num = fraction1.numerator * fraction2.denominator;
    let den = fraction1.denominator * fraction2.numerator;
    let nod = NOD(num, den);
    if(nod < 0) nod = -nod;
    console.log(`NOD = ${nod}`);
    console.log(`Numerator: ${num / nod}`);
    console.log(`Denominator: ${den / nod}`);
}

//3
class Clock {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
}

function showTime(obj){
    if(obj.hours >= 0 && obj.hours < 24 && obj.minutes >= 0 && obj.minutes < 60 && obj.seconds >= 0 && obj.seconds < 60){
        console.log(`${obj.hours < 10 ? '0' + obj.hours : obj.hours}:${obj.minutes < 10 ? '0' + obj.minutes : obj.minutes}:${obj.seconds < 10 ? '0' + obj.seconds : obj.seconds}`);
    }
    else{
        console.log('Give right time!');
    }
}

function showTimeWithChangeSeconds(obj, ss){
    if(ss >= 0 && ss <= 60){
        let totalSec = obj.seconds + ss;
        if(totalSec >= 60){
            obj.minutes += 1;
            obj.seconds = totalSec - 60;
        }
        else{
            obj.seconds = totalSec;
        }
        showTime(obj);
    }
    else{
        console.log('Enter seconds between 0-60');
    }
}

function showTimeWithChangeMinutes(obj, mm){
    if(mm >= 0 && mm <= 60){
        let totalMinutes = obj.minutes + mm;
        if(totalMinutes >= 60){
            obj.hours += 1;
            obj.minutes = totalMinutes - 60;
        }
        else{
            obj.minutes = totalMinutes;
        }
        showTime(obj);
    }
    else{
        console.log('Enter minutes between 0-60');
    }
}

function showTimeWithChangeHours(obj, hours){
    if(hours >= 0 && hours <= 24){
        let totalHours = obj.hours + hours;
        if(totalHours >= 24){
            obj.hours = 0;
            obj.hours += totalHours - 24;
        }
        else{
            obj.hours = totalHours;
        }
        showTime(obj);
    }
    else{
        console.log('Enter hours between 0-24');
    }
}