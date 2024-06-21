class Chronometer {
  constructor() {
    this.currentSec = 0;
    this.intervalId = null;
    this.splitArray = [];
  }

  start(callback) {
    // ... your code goes here
    if (callback) callback();
    console.log('Has pulsado Start');
    //this.intervalId = setInterval(funcion = lo que va a pasar, temporizador = cada cuánto va a pasar);
    this.intervalId = setInterval(() => {
      this.currentSec++;
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentSec / 60);
    ('62/60 -> 1.05... Math.floor-> 1');
  }

  getSeconds() {
    // ... your code goes here
    return this.currentSec % 60;
    ('62/60 -> 2');
  }

  computeTwoDigitNumber(value) {
    let str = '0' + value.toString() + '0';
    if (str.length === 3) {
      return str.slice(0, 2);
    }
    return str.slice(1, 3);
  }

  stop() {
    console.log('Has pulsado Stop');
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentSec = 0;
  }

  split() {
    // ... your code goes here
    // ¿?
    // Si llaman a split -> splitArray.push(this.currentSec)
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
