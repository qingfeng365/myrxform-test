import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formdemo1',
  templateUrl: './formdemo1.component.html',
  styleUrls: ['./formdemo1.component.css']
})
export class Formdemo1Component implements OnInit {
  userName: FormControl = new FormControl('abc');

  dateGroup: FormGroup = new FormGroup({
    from: new FormControl(),
    to: new FormControl()
  });

  emails: FormArray = new FormArray([
    new FormControl('a@abc.com'),
    new FormControl('b@abc.com'),
    new FormControl('c@abc.com'),
  ]);

  formModel: FormGroup = new FormGroup({
    userName: this.userName,
    date: this.dateGroup,
    emails: this.emails,
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.formModel.value);
  }
  addEmail() {
    this.emails.push(new FormControl());
  }
}
