"use strict";

const Time = class {
  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.normalise();
  }

  normalise() {
    this.hoursInSecs = this.hours * 3600;
    this.minutesInSecs = this.minutes * 60;

    this.timeInSecs = this.hoursInSecs + this.minutesInSecs + this.seconds;

    this.hours = Math.floor(this.timeInSecs / 3600);
    if (this.hours === 24) this.hours = 0;
    if (this.hours > 24) this.hours = this.hours % 24;

    this.minutes = Math.floor((this.timeInSecs % 3600) / 60);
    this.seconds = Math.floor(this.timeInSecs % 60);

    return this;
  }
  scale(seconds) {
    this.seconds += seconds;
    return this;
  }
  timeString() {
    this.normalise();

    const hrs = `${this.hours}`.padStart(2, 0);
    const mins = `${this.minutes}`.padStart(2, 0);
    const secs = `${this.seconds}`.padStart(2, 0);
    this.time = `${hrs}:${mins}:${secs}`;

    console.log(this.time);
    return this;
  }
};

const t = new Time(1, 30, 20);
t.timeString();
t.scale(400);
t.timeString();

const t2 = new Time(1, 100, 0);
t2.timeString();
t2.scale(7600);
t2.timeString();
