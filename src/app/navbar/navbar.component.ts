import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navbarLink1:string = "Home";
  navbarLink2:string = "Publications";
  navbarLink3:string = "Achievements";
  navbarLink4:string = "About";
  popupMessage:string = "Hi, Welcome to Vigneshwaran's Portfolio";
}
