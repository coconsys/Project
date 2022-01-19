import { Component, OnInit } from '@angular/core';
import { faBars, faAddressCard, faPhoneAlt, faPlusSquare, faNewspaper, faPhone } from '@fortawesome/free-solid-svg-icons';


const logo = "../../assets/logo.png"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public leftIcon = logo;
  public faBars = faBars;

  public buttonLogos = {
    posts: faNewspaper,
    addPost: faPlusSquare,
    aboutUs: faAddressCard,
    contactUs: faPhoneAlt
  }

  constructor() { }

  ngOnInit(): void {
  }

}
