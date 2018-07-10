import { Component, OnInit,Input } from '@angular/core';
import { BatteryIndicatorComponent } from '../battery-indicator/battery-indicator.component';

@Component({
  selector: 'app-battery-graded-indicator',
  templateUrl: './battery-graded-indicator.component.html',
  styleUrls: ['./battery-graded-indicator.component.scss']
})
export class BatteryGradedIndicatorComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;

  @Input() size: number;      
  @Input() fillColor: string; //Show optional fill color to style rating
  @Input() increment: number;

  @Input() showLabel: boolean; //Show or hide rating label
  @Input() isVertical: boolean; //Toggle rating indicator from vertical or horizontal layout by style
  
  constructor() { }

  ngOnInit() {
  }

  /**
   * Work-around to create an array for the ngFor to loop based on a count
   * @param count
   */
  counter(count:number){
    return new Array(count);
  }

    /**
   * Update the rating indicator based on a click event binding
   * @param currentSize
   */
  toggleRating(currentSize:number){
    // console.log("selected rating indicator size " + currentSize);
    this.size = currentSize;
  }

  showRatingTitle():string{
     return "Battery Life: " + this.calculateRatingPercentage() + " %";
  }

  calculateRatingPercentage():number{
    return Math.floor((this.size*this.increment)/100 * 100);
  }

    /**
   * Fill the rating indicator style based on a given size, else
   * show an empty style class.  Style changes based on what rating is clicked
   * Show different styles depending on rating percentages
   * @param currentSize 
   */
  showRatingStyle(currentSize:number):string{
    if(currentSize <= this.size){
      //  if(this.fillColor && this.fillColor.length > 0) {
         if(this.calculateRatingPercentage() <= 25){
            return "selectedRating ratingColor5";
         } else if(this.calculateRatingPercentage() <= 50){
            return "selectedRating ratingColor3";
        } else if(this.calculateRatingPercentage() <= 75){
            return "selectedRating ratingColor4";
        } else{ 
            return "selectedRating ratingColor1";
         }
      //  }
    } else{
      return "emptyRating";
    }
  }
}
