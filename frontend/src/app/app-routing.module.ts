import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { adminGuard } from './guards/admin.guard'
import { authGuard } from './guards/auth.guard'
import { EventDashboardComponent } from './pages/event-dashboard/event-dashboard.component'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'
import { EventListComponent } from './pages/event-list/event-list.component'
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component'
import { ParticipantsComponent } from './pages/participants/participants.component'
import { participantGuard } from './guards/participant.guard'
import { MatchesComponent } from './pages/matches/matches.component'

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/event-dashboard',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'event-list',
  //   canActivate: [authGuard],
  //   component: EventListComponent
  // },
  // {
  //   path: 'event-dashboard',
  //   canActivate: [authGuard, adminGuard],
  //   component: EventDashboardComponent
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent
  // },
  // {
  //   path: '**',
  //   redirectTo: '/event-dashboard'
  // }
  {
    path: '',
    redirectTo: '/user-dashboard',
    pathMatch: 'full'
  },
  {
    path: 'user-dashboard',
    canActivate: [authGuard],
    component: UserDashboardComponent
  },
  {
    path: 'participants',
    canActivate: [authGuard, participantGuard],
    component: ParticipantsComponent
  },
  {
    path: 'matches',
    canActivate: [authGuard, participantGuard],
    component: MatchesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
