import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-enterer-dashboard',
  templateUrl: './enterer-dashboard.component.html',
  styleUrls: ['./enterer-dashboard.component.scss']
})
export class EntererDashboardComponent implements OnInit {
  entererForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.entererForm = this.fb.group({
      district:  [null, Validators.required],
      block: [null, Validators.required],
      gp:  [null, Validators.required],
      name: [null, Validators.required],
      phoneno: [null, Validators.required],
      emailid:  [null, Validators.required],
      adress:  [null, Validators.required],
      fiberrequired:  [null, Validators.required],
    })
  }

}
