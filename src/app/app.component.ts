import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myCustom';

  openNewWindow() {
    var popup:any;
    popup = window.open(
      'http://localhost:4200/page2',
      'my_custom_page',
      'width:250px,height:170px,left:150px,top:250px'
    );

    window.onmessage = function(m) {
      console.log("inside",m);
      
      if(m.data) {
        // logic if 'OK' in child clicked
      }
    
    }

    popup.onunload = function(){ console.log('Child window closed',popup); };    
  }
}
