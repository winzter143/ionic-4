import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavigateService } from '../navigation.service';
import { ActionSheetController, Platform, IonInput, IonContent, IonSlides, IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
import { COUNTRIES } from './tab2.constant';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

readonly countries = COUNTRIES;

// @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
// @ViewChild('cardPlans') sliderCard: IonSlides;
// @ViewChild(IonContent) content: IonContent;
// @ViewChild('myInput') myInput: ElementRef;
@ViewChild('myInput', {static: false}) myInput: ElementRef;
@ViewChild('myInput1', {static: true}) myInput1: IonInput;

countries_data = [];

number = 3.14167;
readonly  wealth = [
        {
            label: "mutualfund.label",
            value: 'mutualfund.value',
            checked: true,
        },
        {
            label: 'vul.label',
            value: "vul.value",
            checked: false,
        },
        {
            label: 'preneed.label',
            value: 'preneed.value',
            checked: false,
        },
        {
            label: 'traditional.label',
            value: 'traditional.value',
            checked: false,
        },
    ];



  constructor(
    // private navService : NavigateService,
    public actionSheetCtrl: ActionSheetController, 
    public platform: Platform,  
    private router: Router
    ) {

    for (let x in this.wealth){
      console.log(this.wealth[x]);
    }
    // 02/14/2007
    //var time = new Date().getTime() - new Date("2013-02-20T12:01:04.753Z").getTime();
    let today = new Date();
    console.log("Todate:", today, "   -> Unix: ", today.valueOf());

    let dd = new Date("02/14/2007");
    console.log(dd);
    let dd1 = new Date("02/14/2007");
    dd1.setDate( dd1.getDate() - 30 );
    console.log("-30: ",dd1);

   let dd2 = new Date("02/14/2007");
    dd2.setDate( dd2.getDate() + 30 );
    console.log("+30: ",dd2);
    console.log("dd2.valueOf() +30: ",dd2.valueOf());

     
    console.log("Constrator; screen Size: H: ",this.platform.height, " ->W: ", this.platform.width);


// let found = array1.filter(element => {
//   return /z.*/i.test(element.fname)
// });

// console.log(found);
    
  }

  ngOnInit() {
    
  console.log('configured routes: ', this.router.config);
}
  goToolbar(){
    //this.navService.navigateWithParams('tabs/dashboard/wealthmf', [] );
  }


  changeSearch($e){
    let v = $e.target.value;
    console.log("START changeSearch: ", JSON.stringify($e));
    console.log("START changeSearch: ", JSON.stringify($e.target.value));
    
    if (v){ // prevent special char
      this.countries_data = this.countries.filter(element => {
        //return /z.*/i.test(element.fname)
        return (new RegExp(v+'.*', 'i')).test(element.fname)
      });
    }else{
      this.countries_data= [];
    }

    console.log("END: ", JSON.stringify(this.countries_data));

  }

  textFocus($e){
    // this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeigh
    // this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight
    console.log("START textFocus:", this.myInput);
  }

getCoordinates(ev) { 
  console.log('x: ' + ev.clientX + ' y: ' + ev.clientY);
}
}
