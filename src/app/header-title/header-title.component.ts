import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.sass']
})
export class HeaderTitleComponent implements OnInit {

  @Input() distinctTitle: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
