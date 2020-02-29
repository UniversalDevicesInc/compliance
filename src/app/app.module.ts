import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { CdkTableModule } from '@angular/cdk/table'
import { ToastrModule } from 'ngx-toastr'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './guards/auth.guard';

import { APIService } from './API.service'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DomainComponent } from './components/types/domain/domain.component';
import { ComplianceComponent } from './components/types/compliance/compliance.component';
import { StatusComponent } from './components/types/status/status.component';
import { CommandComponent } from './components/types/command/command.component';
import { EditorComponent } from './components/types/editor/editor.component';
import { EditorrangeComponent } from './components/types/editorrange/editorrange.component';
import { NlsComponent } from './components/types/nls/nls.component';
import { UomComponent } from './components/types/uom/uom.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CommandparamComponent } from './components/types/commandparam/commandparam.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    DomainComponent,
    ComplianceComponent,
    StatusComponent,
    CommandComponent,
    EditorComponent,
    NlsComponent,
    UomComponent,
    EditorrangeComponent,
    FilterPipe,
    CommandparamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CdkTableModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      progressBar: true,
      enableHtml: true,
      closeButton: true,
      timeOut: 5000
    }),
    NgbModule.forRoot()
  ],
  providers: [
    AmplifyService,
    AuthGuard,
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('Starting AppModule')
  }
}
