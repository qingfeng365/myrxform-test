import { FormGroup, FormControl } from '@angular/forms';

export function passWordMatchValidator(group: FormGroup) {
  const passwordCtrl: FormControl = group.get('password') as FormControl;
  const confirmpwCtrl: FormControl = group.get('confirmpw') as FormControl;

  let valid = false;
  if (passwordCtrl && confirmpwCtrl) {
    valid = (passwordCtrl.value === confirmpwCtrl.value);
  }
  return valid ? null : { 'passWordMatch': { desc: '密码和确认密码不匹配' } };
}

export function matchValidator(sourceName: string, compareName: string) {
  return function (group: FormGroup) {
    const sourceCtrl: FormControl = group.get(sourceName) as FormControl;
    const compareCtrl: FormControl = group.get(compareName) as FormControl;

    let valid = false;
    if (sourceCtrl && compareCtrl) {
      valid = (sourceCtrl.value === compareCtrl.value);
    }
    return valid ? null : { 'match': { desc: '内容不匹配' } };
  };
}
