import { Component, OnInit } from '@angular/core';

const firstFace = "assets/face_1.jpg"
const secondFace = "assets/face_2.jpg"
const thirdFace = "assets/face_3.jpg"

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  public firstFace = firstFace;
  public secondFace = secondFace;
  public thirdFace = thirdFace;
  constructor() { }

  ngOnInit(): void {
  }

}
