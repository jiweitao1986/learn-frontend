// --------------------------------------------------------------------------------
// Class Types
// --------------------------------------------------------------------------------


console.log('\n\r\n\r');
console.log('----------------------------------------');
console.log('');
console.log('----------------------------------------');

interface ClockConstructor {
    new (hour: Date, minute: number);
}

class Clock implements ClockConstructor {

    currentTime: Date;

    constructor(h: number, m: number) {
        console.log(h);
        console.log(m);
    }
}

const clock = new Clock(10, 100);






console.log('\n\r\n\r');
console.log('----------------------------------------');
console.log('');
console.log('----------------------------------------');


interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
