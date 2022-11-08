import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

//Don't show when not logged in
isLoggedIn = false;
showIncidentList = false;
username? : string;


  constructor() { }

  ngOnInit(): void {
  }

  logout(): void {
    
  }
}
