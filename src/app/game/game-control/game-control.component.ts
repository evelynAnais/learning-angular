import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() counterEvent = new EventEmitter<number>();
  count: number = 0;
  timer: any;

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    this.timer = setInterval(() => {
      this.counterEvent.emit(this.count + 1);
      this.count++;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.timer);
  }

}

