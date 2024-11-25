import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  wasSent = 'valid-feedback ';
  form = new FormGroup({
    // name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    // email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void { }

  submit = () => {
    document.location.href =
      'mailto:info@recursiflab.com' +
      '?subject=' +
      this.form.get('subject')?.value +
      '&body=' +
      this.form.get('body')?.value;
    this.onSent();
  };

  onSent() {
    this.form.controls['body'].setValue('');
    this.form.controls['subject'].setValue('');
    this.wasSent += 'd-block';
  }

  clearSentNotification() {
    console.log(this.wasSent)
    this.wasSent = this.wasSent.replace('d-block', '');
  }
}
