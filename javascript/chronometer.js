class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    setInterval(() => {
      this.currentTime += 1;
      this.intervalId += 1;
    },1000)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes
  }

  getSeconds() {
    if (this.currentTime %60 === 0) {
      return 0
    } else {
      return this.currentTime % 60
    }
    
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0');
    
  }

  stop() {
    clearInterval(this.intervalId);
    
    
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
