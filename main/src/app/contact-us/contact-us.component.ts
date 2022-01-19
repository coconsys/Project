import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { PostService } from '../post.service';
import { IMeetingsData } from '../PostInterfaces';
import { MyTel } from './phone-input/phone-input.component';
import Swal from 'sweetalert2';

export enum FormStatus {
  Valid = 'VALID',
  Invalid = 'INVALID',
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  public faComment = faComment;
  public contactUsForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl(new MyTel('', '', ''), [Validators.required]),
    helpYouOutMessage: new FormControl(''),
  });

  constructor(private postService: PostService) { }

  ngOnInit(): void { }

  public onSubmit(formDirective: FormGroupDirective) {

    if (this.contactUsForm.status === FormStatus.Valid) {
      const mappedForm = this.getMappedForm();
      this.postService.addNewMeeting(mappedForm).then(() => {
        Swal.fire({
          title: 'You booked a meeting',
          text: 'We will contact you soon',
          icon: 'success',
          confirmButtonText: 'Done',
        }).then(() => {
          this.contactUsForm.markAsPristine();
          formDirective.resetForm();
        });

      }).catch(() => {
        Swal.fire({
          title: 'Error',
          text: 'Something went wrong.',
          icon: 'error',
          confirmButtonText: 'Done',
        })

      })
    }
  }

  public onClearClick(formDirective: FormGroupDirective) {
    this.contactUsForm.markAsPristine();
    formDirective.resetForm();
  }

  private getMappedForm(): IMeetingsData {
    const formValues = this.contactUsForm.value;

    return {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      helpYouOutMessage: formValues.helpYouOutMessage,
      phoneNumber: `${formValues.phoneNumber.area}${formValues.phoneNumber.exchange}${formValues.phoneNumber.subscriber}`,
    };
  }
}
