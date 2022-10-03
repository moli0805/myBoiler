import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html',
  styleUrls: ['./page-2.component.scss']
})
export class Page2Component implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { 
    window.opener.postMessage({a:true}, '*');
    window.close(); 
  }

  ngOnInit() {
  }

}
