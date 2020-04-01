import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EntererDashboardService } from '../enterer-dashboard.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../guards/auth.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-enterer-dashboard',
  templateUrl: './enterer-dashboard.component.html',
  styleUrls: ['./enterer-dashboard.component.scss']
})
export class EntererDashboardComponent implements OnInit {
  entererForm: FormGroup;
  public districtList: any;
  public blockList: any;
  public gpList: any;

  constructor(private fb: FormBuilder, private _eds: EntererDashboardService,private router : Router,private _authService: AuthService) { }
 
  ngOnInit() {
    this.districtList = [];
    this.blockList = [];
    this.gpList = [];
    this.entererForm = this.fb.group({
      district: [null, Validators.required],
      block: [null, Validators.required],
      gp: [null, Validators.required],
      name: [null, Validators.required],
      phoneno: [null, Validators.required],
      emailid: [null, Validators.required],
      adress: [null, Validators.required],
      fiberrequired: [null, Validators.required],
    });
   this.getdistrict();
   this.getBlock();
   this.getGp();

  }
  getdistrict(){

    this._eds.getDistrictService().subscribe((res: any) => {
      console.log(res);
      if (res.status == 'success' && res.statusCode == 200) {
        console.log(res);
        this.districtList = res.data;
      }
      else {
        console.log('failed');
      }
    }, err => {
      console.log(err);
      console.log('somegthing went wrong');
    })
  
  }
  getBlock(){
    let id = this.entererForm.controls['district'].value;
    this._eds.getBlockByDistrictService(id).subscribe((res: any) => {
      console.log(res);
      if (res.status == 'success' && res.statusCode == 200) {
        console.log(res);
        this.blockList = res.data;
      }
      else {
        console.log('failed');
      }
    }, err => {
      console.log(err);
      console.log('somegthing went wrong');
    })
  }
  getGp(){
    let id = this.entererForm.controls['district'].value;
    this._eds.getGPByBlockService(id).subscribe((res: any) => {
      console.log(res);
      if (res.status == 'success' && res.statusCode == 200) {
        console.log(res);
        this.gpList = res.data;
      }
      else {
        console.log('failed');
      }
    }, err => {
      console.log(err);
      console.log('somegthing went wrong');
    })
  }
}


