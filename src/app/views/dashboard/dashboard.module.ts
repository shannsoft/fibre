import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatProgressBarModule, MatInputModule, MatTableModule, MatListModule, MatCheckboxModule, MatSelectModule, MatProgressSpinnerModule, MatSortModule, MatPaginatorModule, MatFormFieldModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { ErrorModule } from '../error/error.module';
import { CdkTableModule } from '@angular/cdk/table';
import { EntererDashboardComponent } from './enterer-dashboard/enterer-dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    ErrorModule,
    CdkTableModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),

    MatProgressBarModule
  ],
  declarations: [ EntererDashboardComponent]
})
export class DashboardModule { }
