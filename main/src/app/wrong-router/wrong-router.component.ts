import { Component, OnInit } from '@angular/core';

const notFoundImg = "assets/404_img.jpg"

@Component({
  selector: 'app-wrong-router',
  templateUrl: './wrong-router.component.html',
  styleUrls: ['./wrong-router.component.scss']
})
export class WrongRouterComponent implements OnInit {
  public notFoundImg = notFoundImg;
  constructor() { }

  ngOnInit(): void {
  }

}
