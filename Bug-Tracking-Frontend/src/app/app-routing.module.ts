import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ApplicationResponseComponent } from './application-response/application-response.component';
import { ApplicationComponent } from './application/application.component';
import { BugComponent } from './bug/bug.component';
import { CreateApplicationComponent } from './create-application/create-application.component';
import { CreateBugComponent } from './create-bug/create-bug.component';
import { CreateReleaseComponent } from './create-release/create-release.component';
import { DeleteApplicationComponent } from './delete-application/delete-application.component';
import { DeleteBugComponent } from './delete-bug/delete-bug.component';
import { DeleteReleaseComponent } from './delete-release/delete-release.component';
import { DeleteResponseComponent } from './delete-response/delete-response.component';
import { ErrorComponent } from './error/error.component';
import { FoundApplicationComponent } from './found-application/found-application.component';
import { FoundBugComponent } from './found-bug/found-bug.component';
import { FoundReleaseComponent } from './found-release/found-release.component';
import { ReleaseComponent } from './release/release.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SearchApplicationByIdComponent } from './search-application-by-id/search-application-by-id.component';
import { SearchApplicationByNameComponent } from './search-application-by-name/search-application-by-name.component';
import { SearchBugByIdComponent } from './search-bug-by-id/search-bug-by-id.component';
import { SearchBugByStatusComponent } from './search-bug-by-status/search-bug-by-status.component';
import { SearchReleaseByIdComponent } from './search-release-by-id/search-release-by-id.component';
import { SearchReleaseByNameComponent } from './search-release-by-name/search-release-by-name.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SignupsuccessComponent } from './signupsuccess/signupsuccess.component';
import { UpdateApplicationComponent } from './update-application/update-application.component';
import { UpdateBugComponent } from './update-bug/update-bug.component';
import { UpdateReleaseComponent } from './update-release/update-release.component';
import { UserComponent } from './user/user.component';
import { ViewAllApplicationsComponent } from './view-all-applications/view-all-applications.component';
import { ViewAllBugsComponent } from './view-all-bugs/view-all-bugs.component';
import { ViewAllReleasesComponent } from './view-all-releases/view-all-releases.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signupsuccess', component: SignupsuccessComponent },
  { path: 'reset', component: ResetPasswordComponent },

  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },

  { path: 'application', component: ApplicationComponent },
  { path: 'viewallapplications', component: ViewAllApplicationsComponent },
  { path: 'searchapplicationbyname', component: SearchApplicationByNameComponent },
  { path: 'searchapplicationbyid', component: SearchApplicationByIdComponent },
  { path: 'createapplication', component: CreateApplicationComponent },
  { path: 'updateapplication', component: UpdateApplicationComponent },
  { path: 'deleteapplication', component: DeleteApplicationComponent },
  { path: 'foundapplication', component: FoundApplicationComponent },
  { path: 'createapplicationsuccess', component: ApplicationResponseComponent },
  { path: 'deleteapplicationsucess', component: DeleteResponseComponent },



  { path: 'bug', component: BugComponent },
  { path: 'viewallbugs', component: ViewAllBugsComponent },
  { path: 'searchBugbystatus', component: SearchBugByStatusComponent },
  { path: 'searchbugbyid', component: SearchBugByIdComponent },
  { path: 'createbug', component: CreateBugComponent },
  { path: 'updatebug', component: UpdateBugComponent },
  { path: 'deletebug', component: DeleteBugComponent },
  { path: 'foundbug', component: FoundBugComponent },

  { path: 'release', component: ReleaseComponent },
  { path: 'viewallreleases', component: ViewAllReleasesComponent },
  { path: 'searchreleasename', component: SearchReleaseByNameComponent },
  { path: 'searchreleasebyid', component: SearchReleaseByIdComponent },
  { path: 'createrelease', component: CreateReleaseComponent },
  { path: 'updaterelease', component: UpdateReleaseComponent },
  { path: 'deleterelease', component: DeleteReleaseComponent },
  { path: 'foundrelease', component: FoundReleaseComponent },


  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
