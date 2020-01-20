import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2-page1',
  templateUrl: './tab2-page1.page.html',
  styleUrls: ['./tab2-page1.page.scss'],
})
export class Tab2Page1Page implements OnInit {

  constructor(public navCtr: NavController) { }

  ngOnInit() {
  }
  goBack(){
    this.navCtr.back()

  }

}
