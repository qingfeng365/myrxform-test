import { FormGroup, FormControl } from '@angular/forms';

export function passWordMatchValidator(group: FormGroup) {
  const passwordCtrl: FormControl = group.get('password') as FormControl;
  const confirmpwCtrl: FormControl = group.get('confirmpw') as FormControl;

  let valid = false;
  if (passwordCtrl && confirmpwCtrl) {
    valid = (passwordCtrl.value === confirmpwCtrl.value);
  }
  return valid ? null : { 'passWordMatch': { mismatch: '密码和确认密码不匹配' } };
}
