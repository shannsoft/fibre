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
      phoneno : ['', Validators.compose([
        Validators.required, Validators.pattern("[0-9]{10}")
      ])],
      emailid : ['', Validators.compose([
        Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@+[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
      ])],
      adress: [null, Validators.required],
      fiberrequired: [null, Validators.required],
      fiberrequiredinmt:[null, Validators.required],
    });
   this.getdistrict();
   this.getBlock();
   this.getGp();

  }
  updateRequirement(){
     var obj:any = {
      "district" : this.entererForm.controls['district'].value,
      "block" : this.entererForm.controls['block'].value,
      "gp" : this.entererForm.controls['gp'].value,
      "name" : this.entererForm.controls['name'].value,
      "phoneno" : this.entererForm.controls['phoneno'].value,
      "emailid" : this.entererForm.controls['emailid'].value,
      "adress" : this.entererForm.controls['adress'].value,
      "fiberrequired" : this.entererForm.controls['fiberrequired'].value,
      "fiberrequiredinmt" : this.entererForm.controls['fiberrequiredinmt'].value,
    }
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


