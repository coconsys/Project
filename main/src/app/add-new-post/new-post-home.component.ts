import { Component, OnInit } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-post-home',
  templateUrl: './new-post-home.component.html',
  styleUrls: ['./new-post-home.component.scss']
})
export class NewPostHomeComponent implements OnInit {
  public faPlusSquare = faPlusSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
