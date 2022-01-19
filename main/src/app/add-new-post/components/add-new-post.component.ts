import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { FormStatus } from 'src/app/contact-us/contact-us.component';
import Swal from 'sweetalert2';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.scss'],
})
export class AddNewPostComponent implements OnInit {
  public addPostForm: FormGroup = new FormGroup({
    text: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
  });

  constructor(private postService: PostService) { }

  ngOnInit(): void { }

  onCancelClick(formDirective: FormGroupDirective) {
    this.clearData(formDirective);
  }

  onAddClick(formDirective: FormGroupDirective) {
    if (this.addPostForm.status === FormStatus.Valid) {
      const formData = this.addPostForm.value;
      formData.id = this.postService.generateUnusedId();
      this.postService
        .addNewPost(formData)
        .then((res) => {
          Swal.fire({
            title: 'Success',
            text: 'You added new post',
            icon: 'success',
            confirmButtonText: 'Finish',
          });
        })
        .then(() => {
          this.addPostForm.markAsPristine();
          formDirective.resetForm();
        })
        .catch((e) => {
          Swal.fire({
            title: 'Error',
            text: 'Something went wrong',
            icon: 'error',
            confirmButtonText: 'Finish',
          });
        });
    }
  }

  private clearData(formDirective: FormGroupDirective) {
    this.addPostForm.markAsPristine();
    formDirective.resetForm();
  }
}
