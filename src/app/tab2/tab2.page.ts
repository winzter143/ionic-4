import { Component } from '@angular/core';
import { NavigateService } from '../navigation.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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
    ) {

    for (let x in this.wealth){
      console.log(this.wealth[x]);
    }
  }

  goToolbar(){
    //this.navService.navigateWithParams('tabs/dashboard/wealthmf', [] );
  }
}
