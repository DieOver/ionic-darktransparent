import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public activedBar = 1;

  public items: any[] = [
    {
      id: 1,
      icon: 'icon-servers',
      text: 'General',
      color: 'blue'
    }, {
      id: 2,
      icon: 'icon-travel-bus',
      text: 'Transport',
      color: 'purple'
    }, {
      id: 3,
      icon: 'icon-travel',
      text: 'Shopping',
      color: 'pink'
    }, {
      id: 4,
      icon: 'icon-ic_document_paper',
      text: 'Bills',
      color: 'orange'
    }, {
      id: 5,
      icon: 'icon-travel',
      text: 'Entertreinment',
      color: 'blue'
    }, {
      id: 6,
      icon: 'icon-travel',
      text: 'Grocery',
      color: 'green'
    }
  ];

  constructor() { }

}
