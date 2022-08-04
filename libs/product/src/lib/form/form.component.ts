import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'nv-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  fb = new FormBuilder()
  form = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(20)]],
    age: [22, Validators.required]
  });

  ngOnInit(): void {
    this.form.valueChanges.subscribe(x => console.log(x));
  }

  submit() {
    console.log(this.form, 123);
  }
}
