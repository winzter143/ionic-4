import { Injectable } from '@angular/core';

import { NavController, Events } from '@ionic/angular';
import { Router } from '@angular/router';

// import { Network } from '@ionic-native/network/ngx';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(
      private navCtrl : NavController,
      private events : Events,
      private router : Router,
      // private alertService : AlertModalService,
      // public network: Network,
      // public networkProvider: NetworkProvider,
      ) { }

  navigate(path:string){
    return this.navCtrl.navigateRoot(path);
  }

  navigateWithParams(path: string, params) {
    this.router.navigate([path], {
      queryParams: params
    });
  }

  goBack() {
    this.navCtrl.back();
  }

  async pop(){
    return this.navCtrl.pop();
  }

}
