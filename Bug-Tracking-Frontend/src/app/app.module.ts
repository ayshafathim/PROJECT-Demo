import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { BugComponent } from './bug/bug.component';
import { ReleaseComponent } from './release/release.component';
import { ApplicationComponent } from './application/application.component';
import { SignupsuccessComponent } from './signupsuccess/signupsuccess.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ViewAllApplicationsComponent } from './view-all-applications/view-all-applications.component';
import { SearchApplicationByNameComponent } from './search-application-by-name/search-application-by-name.component';
import { SearchApplicationByIdComponent } from './search-application-by-id/search-application-by-id.component';
import { UpdateApplicationComponent } from './update-application/update-application.component';
import { DeleteApplicationComponent } from './delete-application/delete-application.component';
import { FoundApplicationComponent } from './found-application/found-application.component';
import { CreateApplicationComponent } from './create-application/create-application.component';
import { SearchBugByIdComponent } from './search-bug-by-id/search-bug-by-id.component';
import { FoundBugComponent } from './found-bug/found-bug.component';
import { UpdateBugComponent } from './update-bug/update-bug.component';
import { DeleteBugComponent } from './delete-bug/delete-bug.component';
import { CreateBugComponent } from './create-bug/create-bug.component';
import { SearchReleaseByNameComponent } from './search-release-by-name/search-release-by-name.component';
import { SearchReleaseByIdComponent } from './search-release-by-id/search-release-by-id.component';
import { CreateReleaseComponent } from './create-release/create-release.component';
import { FoundReleaseComponent } from './found-release/found-release.component';
import { UpdateReleaseComponent } from './update-release/update-release.component';
import { DeleteReleaseComponent } from './delete-release/delete-release.component';
import { ViewAllBugsComponent } from './view-all-bugs/view-all-bugs.component';
import { ViewAllReleasesComponent } from './view-all-releases/view-all-releases.component';
import { SearchBugByStatusComponent } from './search-bug-by-status/search-bug-by-status.component';
import { ApplicationResponseComponent } from './application-response/application-response.component';
import { BugResponseComponent } from './bug-response/bug-response.component';
import { ReleaseResponseComponent } from './release-response/release-response.component';
import { DeleteResponseComponent } from './delete-response/delete-response.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ErrorComponent,
    AdminComponent,
    UserComponent,
    BugComponent,
    ReleaseComponent,
    ApplicationComponent,
    SignupsuccessComponent,
    ResetPasswordComponent,
    ViewAllApplicationsComponent,
    SearchApplicationByNameComponent,
    SearchApplicationByIdComponent,
    UpdateApplicationComponent,
    DeleteApplicationComponent,
    FoundApplicationComponent,
    CreateApplicationComponent,
    SearchBugByIdComponent,
    FoundBugComponent,
    UpdateBugComponent,
    DeleteBugComponent,
    CreateBugComponent,
    SearchReleaseByNameComponent,
    SearchReleaseByIdComponent,
    CreateReleaseComponent,
    FoundReleaseComponent,
    UpdateReleaseComponent,
    DeleteReleaseComponent,
    ViewAllBugsComponent,
    ViewAllReleasesComponent,
    SearchBugByStatusComponent,
    ApplicationResponseComponent,
    BugResponseComponent,
    ReleaseResponseComponent,
    DeleteResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
