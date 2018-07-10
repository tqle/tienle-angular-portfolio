import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating-indicator',
  templateUrl: './star-rating-indicator.component.html',
  styleUrls: ['./star-rating-indicator.component.scss']
})

export class StarRatingIndicatorComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;

  @Input() size: number;      
  @Input() fillColor: string; //Show optional fill color to style rating

  @Input() showLabel: boolean; //Show or hide rating label
  @Input() isVertical: boolean;  //Toggle rating indicator from vertical or horizontal layout by style
  
  ratingType:string = "Stars";

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
     return this.size + " out of 5 " + this.ratingType;
  }

  /**
   * Fill the rating indicator style based on a given size, else
   * show an empty style class.  Style changes based on what rating is clicked
   * @param currentSize 
   */
  showRatingStyle(currentSize:number):string{
    if(currentSize <= this.size){
       if(this.fillColor && this.fillColor.length > 0) {
          return "selectedStarRating " + this.fillColor;
       } else {
          return "selectedStarRating";
       }
    } else{
      return "emptyStarRating";
    }
  }

}
