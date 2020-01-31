import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

/** 
 * In Your .TS File
 * let selectOption = [] ;// Array list of option
  // Function to handl ethe event
  selectValue(data: any)
  {
    console.log('SelectOptionComponent: ', data);
    // DO you process on the select
  }
  inputSearch($e){
    let v = $e.target.value;
    this.searchValue = v;
    this.listOption= []; // Your List Option
  }

  // End on .ts file

  // In your template
  <ion-input #myInput placeholder="Custom Search" 
      id="input-select-temp"
      (ionInput)="inputSearch($event)"></ion-input>
    <!-- Import you List -->
    <app-select-option  *ngIf="listOption.length > 0"
      [searchValue]="searchValue"
      [selectOption] ="listOption"  
      (selectContent)="selectValue($event)"></app-select-option>
      
*/
@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss'],
})
export class SelectOptionComponent implements OnInit, OnChanges  
 {

  @Input() selectOption = []; // List Of Select Option.
  @Input() searchValue = ""; // Search Field Value from source
  @Output() selectContent = new EventEmitter();

  oldData = "";
  constructor() { }

  ngOnInit() {}

  ngOnChanges($e){
    console.log("START - ngOnChanges ", $e);
    if (this.searchValue == this.oldData){
      // Clear Select Option.
      this.selectOption = [];
    }

    console.log("START - ngOnChanges END: ", this.selectOption);
    this.oldData = this.searchValue;
  }
  buttonClick(value: any){
    console.log("START buttonClick: ", JSON.stringify(value));
    this.selectContent.emit(value);
  }

}
