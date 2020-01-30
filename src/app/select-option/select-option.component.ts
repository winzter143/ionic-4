import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss'],
})
export class SelectOptionComponent implements OnInit, OnChanges  
 {

  @Input() selectOption =[];
  constructor() { }

  ngOnInit() {}

  ngOnChanges($e){
    console.log("START - ngOnChanges ", $e);

    console.log("START - ngOnChanges END: ", this.selectOption);
    
  }
  buttonClick(value: any){
    console.log("START buttonClick: ", JSON.stringify(value));
  }

}
