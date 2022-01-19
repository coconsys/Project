import { Component, OnInit } from '@angular/core';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { faDiceD6 } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public faDiceD20 = faDiceD20;
  public faDiceD6 = faDiceD6;
  public faCube = faCube;
  
  constructor() {}

  ngOnInit(): void {}

  public redirectTo(icon: string) {
    let url: string;
    console.log(icon);
    switch (icon) {
      case 'dice':
        url = 'https://www.google.com';
        break;

      case 'square':
        url = 'https://www.reddit.com';
        break;

      case 'theSquare':
        url = 'https://www.youtube.com';
        break;

      default:
        url = 'https://www.google.pl';
        break;
    }
    window.open(url, '_blank');
  }
}
