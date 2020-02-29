import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DomainComponent } from './components/types/domain/domain.component';
import { ComplianceComponent } from './components/types/compliance/compliance.component';
import { StatusComponent } from './components/types/status/status.component';
import { CommandComponent } from './components/types/command/command.component';
import { CommandparamComponent } from './components/types/commandparam/commandparam.component';
import { EditorComponent } from './components/types/editor/editor.component';
import { EditorrangeComponent } from './components/types/editorrange/editorrange.component';
import { NlsComponent } from './components/types/nls/nls.component';
import { UomComponent } from './components/types/uom/uom.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'domain', component: DomainComponent, canActivate: [AuthGuard]},
  {path: 'compliance', component: ComplianceComponent, canActivate: [AuthGuard]},
  {path: 'status', component: StatusComponent, canActivate: [AuthGuard]},
  {path: 'command', component: CommandComponent, canActivate: [AuthGuard]},
  {path: 'commandparam', component: CommandparamComponent, canActivate: [AuthGuard]},
  {path: 'editor', component: EditorComponent, canActivate: [AuthGuard]},
  {path: 'editorrange', component: EditorrangeComponent, canActivate: [AuthGuard]},
  {path: 'nls', component: NlsComponent, canActivate: [AuthGuard]},
  {path: 'uom', component: UomComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
