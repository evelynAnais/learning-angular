import { Component } from "@angular/core";

@Component({
  selector: "app-warning-alert",
  templateUrl: "./warning-alert.component.html",
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent {
  display = false;
  timesClicked = [];
  number = 0;

  displayParagraph() {
    this.display = !this.display;
    this.timesClicked.push(this.timeClick());
    console.log(this.timesClicked);
  }

  timeClick() {
    const result = {
      index: this.number,
      time: new Date()
    }
    this.number++;
    return result;
  }


}


