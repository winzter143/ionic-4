import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

 slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1.15,
    spaceBetween: 1,
    centeredSlides: false,
    //  loop: true,
    pager: true,
    // allowSlideNext: true,
    // allowSlidePrev: false,
    on: {  
      // init: function () {
      // /* do something */
      //   console.log("INITLOOP:"+  this.loop);
      //   // if (this.loop){
      //   //   this.initialSlide = 1;
      //   // }
      // },    
      beforeInit() {
        // console.log("beforeInit START");
      },
      setTransition(duration) {
        // console.log("setTransition START");
        const swiper = this;
        const { slides, activeIndex, $wrapperEl } = swiper;
      },
      slideChange() {
        //  console.log("onSlideChangeEnd START(slides) ", slides)
        console.log("onSlideChangeEnd START(this) ", this)
        console.log("onSlideChangeEnd START(activeIndex) ", this.activeIndex)
        // if (this.loop){
          // if (this.activeIndex == 0){
          //   this.centeredSlides = false;
          //   // this.allowSlideNext = false;
          //   // this.allowSlidePrev =  true;
          // }else if (this.activeIndex == 0){
          //   this.centeredSlides = false;
          //   // this.allowSlideNext = true;
          //   // this.allowSlidePrev = false;
          // }else{
          //   this.centeredSlides = true;
          //   // this.init();
          //   //this.update();
          //   // this.allowSlideNext = true;
          //   // this.allowSlidePrev = true;
          // }
          //  console.log("onSlideChangeEnd centeredSlides ", this.centeredSlides);
        // }
        // this.getActiveIndex().then((currentIndex) => {
        //   console.info("Dashbord.cardChanged Current Idex: " + currentIndex);
        // });
      }
    },    
  }

  constructor() {}

}
