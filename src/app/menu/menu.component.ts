import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  activeButton: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((val : RouterEvent) => {
      this.activeButton = val.url;
    })
  }

  menuItemClick($event, uri: string) {
    //get parent and clear menu states
    //add active class to clicked button
    this.activeButton = uri;
    this.router.navigate([uri]);
  }

}
