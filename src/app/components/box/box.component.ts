import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BoxComponent implements OnInit {

  @Input('item') item: any = {};

  constructor() { }

  ngOnInit() { }

}
