import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { IPostData } from '../PostInterfaces';
import Swal from "sweetalert2"

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.scss']
})
export class PostHomeComponent implements OnInit {
  postData: IPostData[] = [];
  isDataReady: boolean = false;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().then(res => {
      this.postData = res;
      // This is here to mimic the longer loading to get the data
      setTimeout(() => {
        this.isDataReady = true;
      }, 1000)
    })
  }

  handleDeleteClick(id: number) {
    this.postService.deletePostById(id).then((res) => {
      Swal.fire({
        title: 'Success',
        text: 'You deleted the post',
        icon: 'success',
        confirmButtonText: 'Finish'
      })
      this.refreshData();
    })
  }

  private refreshData() {
    this.postService.getAllPosts().then(res => {
      this.postService.saveIds(res)
      this.postData = res;
    })
  }
}
