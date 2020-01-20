import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2-page2',
  templateUrl: './tab2-page2.page.html',
  styleUrls: ['./tab2-page2.page.scss'],
})
export class Tab2Page2Page implements OnInit {

  constructor(public navCtr: NavController) { }

  ngOnInit() {
  }

  goBack(){
    this.navCtr.back()
  }

}
