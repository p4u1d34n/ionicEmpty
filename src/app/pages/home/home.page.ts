import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { IonSlide, IonSlides } from '@ionic/angular';

declare var window;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('slider',{static:false}) slider:IonSlides;
  @ViewChildren('slide',{read:false}) slides:IonSlide;

  constructor() { }

  private view: any;
  public sliderindex:any = ['Group1','Group2'];

  ngOnInit() {
  }

  ionViewDidEnter(){
    console.log("slider",this.slider)
    console.log("slides",this.slides)
  }

  removeAction(a:any){}
  doSomething(a:any){}

  changeSegment(ev: any) {
        
    this.view = this.sliderindex.indexOf(ev.detail.value);
    console.log(this.view)
    this.slider.slideTo(this.view,250).then(()=>{



    });
}

}
