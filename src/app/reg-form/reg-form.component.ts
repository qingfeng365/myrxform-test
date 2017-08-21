import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { passWordMatchValidator, matchValidator } from '../Validator/Validator';

import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  formModel: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formModel = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(6)]],
        mobile: ['', Validators.pattern(/^1[0-9]{10}$/)],
        passwordsGroup:
        this.fb.group({
          password: ['',
            [Validators.required, Validators.minLength(6)],
            [this.passWordUsedAsyncValidator]],
          confirmpw: ['']
        },
          {
            validator: matchValidator('password', 'confirmpw')
          })
      }
    );
  }
  onSubmit() {
    console.log(this.formModel.value);
    console.log(this.formModel);

    if (!this.formModel.get('username').valid) {
      console.log('username 校验失败:',
        JSON.stringify(this.formModel.get('username').errors));
    }
    if (!this.formModel.get('mobile').valid) {
      console.log('mobile 校验失败:',
        JSON.stringify(this.formModel.get('mobile').errors));
    }
    if (!this.formModel.get('passwordsGroup.password').valid) {
      console.log('password 校验失败:',
        JSON.stringify(this.formModel.get('passwordsGroup.password').errors));
    }
    if (!this.formModel.get('passwordsGroup').valid &&
      this.formModel.get('passwordsGroup').errors) {
      console.log('passwordsGroup 校验失败:',
        JSON.stringify(this.formModel.get('passwordsGroup').errors));
    }

  }

  passWordUsedAsyncValidator(control: FormControl) {
    return Observable.of(control.value as string)
      .map(v => v.indexOf('1') !== 0)
      .map(valid => valid ? null : { passWordUsed: true })
      .delay(5000);
  }
}
