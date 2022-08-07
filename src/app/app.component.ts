import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'portfolio';

  case: String | undefined;

  ngOnInit(){
    this.case = "About";
  }
  goToLink(url: string){
    window.open(url, "_blank");
  }
  changeRightView(val:string){
    this.case = val;
  }
}
