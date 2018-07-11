import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-progress-indicator',
  templateUrl: './bar-progress-indicator.component.html',
  styleUrls: ['./bar-progress-indicator.component.scss']
})
export class BarProgressIndicatorComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;

  @Input() meterColor: string;
  @Input() valueColor: string;

  @Input() strokeDashArray: number;
  @Input() strokeDashOffset: number;

  @Input() showLabel: boolean;
  @Input() descriptionText: string;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Calculate bar progress indicator by value and total length
   * @param value
   * @param length
   */
  calculateProgress(value: number, length: number): number {
    // TODO: Check if value is greater than 100 or empty
    const progress = length * ((100 - value) / 100);
    return progress;
  }
}
