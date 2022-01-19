import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPostData } from '../../PostInterfaces';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() postData: IPostData;

  @Output() onDelete = new EventEmitter<number>()

  public faTrash = faTrash;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public onDeleteClick() {
    this.onDelete.emit(this.postData.id)
  }

  public openDialog() {
    this.dialog.open(PostDetailsDialog, { data: this.postData });

  }

}

@Component({
  selector: 'app-post-details-dialog',
  templateUrl: 'post.details.component.html',
  styleUrls: ['./post.details.component.scss']
})
export class PostDetailsDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IPostData) {
  }

}
