import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;

  @Input() buffer: string;
  runningTotal: number;
  previousOperator: string;

  /**
   * Initialize state
   */
  constructor() {
    this.previousOperator = null;
    this.runningTotal = 0;
    this.buffer = '0';
  }

  ngOnInit() {
  }

/**
 * Handle button click
 * @param value
 */
  buttonClick(value) {
    if (isNaN(Number.parseInt(value))) {
      this.handleSymbol(value);
    } else {
      this.handleNumber(value);
    }
  }

  /**
   * Handle numbers
   * @param value
   */
 handleNumber(value: string) {
    if (this.buffer === '0') {
      this.buffer = value;
    } else {
      this.buffer += value;
    }
  }

/**
 * Handle calculator symbols
 * @param value
 */
  handleSymbol(value: string) {
    switch (value) {
      case 'C':
        this.buffer = '0';
        this.runningTotal = 0;
        this.previousOperator = null;
        break;
      case '=':
        if (this.previousOperator === null) {
          // need two numbers to do math
          return;
        }
        // Commit operation
        this.flushOperation(Number.parseInt(this.buffer));
        this.previousOperator = null;

        // Coerce number to string
        this.buffer = '' + this.runningTotal;

        this.runningTotal = 0;
        break;

      case '←':
        if (this.buffer.length === 1) {
          this.buffer = '0';
        } else {
          this.buffer = this.buffer.substring(0, this.buffer.length - 1);
        }
        break;
      default:
        // console.log('Handle Math');
        this.handleMath(value);
        break;
    }
  }
  /**
   * Process the operation and flush the value
   * @param intBuffer
   */
  flushOperation(intBuffer: number) {
    switch (this.previousOperator) {
      case  '+':
        this.runningTotal += intBuffer;
        console.log(`addition total ${this.runningTotal}`);
        break;
      case '-':
        this.runningTotal -= intBuffer;
        console.log(`subtraction total ${this.runningTotal}`);
        break;
      case '×':
        this.runningTotal *= intBuffer;
        console.log(`multiply total ${this.runningTotal}`);
        break;
      case '±':
        this.runningTotal = -Math.abs(intBuffer);
        console.log(`negate total ${this.runningTotal}`);
        break;
      case '÷':
        this.runningTotal /= intBuffer;
        console.log(`divide total ${this.runningTotal}`);
        break;
      default:
        break;
    }
  }

  // value is the operator symbol
  /** Handle math */
  handleMath(operator: string) {
    const intBuffer = Number.parseInt(this.buffer);
    if (this.runningTotal === 0) {
      this.runningTotal = intBuffer;
    } else {
      console.log(`operator ${operator}`);
      this.flushOperation(intBuffer);
    }
    if (operator === '±') {
      console.log(`negate buffer ${this.buffer}`);
      // this.previousOperator = operator;
      // this.buffer = "0";
    } else {
      this.previousOperator = operator;
      this.buffer = '0';
    }
  }

}
