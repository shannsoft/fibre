import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../../guards/auth-guard.service';
import { EntererDashboardComponent } from './enterer-dashboard/enterer-dashboard.component';


  const routes: Routes = [
    {
      path: '',
      data: {
        title: 'dashboard'
      },
      children: [
        {
          path: '',
          redirectTo: 'enterer-dashboard'
        },
        {
          path: 'enterer-dashboard',
          component:EntererDashboardComponent,
          data: {
            title: 'Enterer-Dashboard'
          }
        },
       
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DashboardRoutingModule {}
