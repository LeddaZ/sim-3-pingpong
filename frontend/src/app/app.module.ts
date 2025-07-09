import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DatepickerComponent } from './components/datepicker/datepicker.component'
import { EditMatchModalComponent } from './components/edit-match-modal/edit-match-modal.component'
import { EventItemLiteComponent } from './components/event-item-lite/event-item-lite.component'
import { FooterComponent } from './components/footer/footer.component'
import { MatchItemComponent } from './components/match-item/match-item.component'
import { MatchModalComponent } from './components/match-modal/match.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive'
import { EventListComponent } from './pages/event-list/event-list.component'
import { LoginComponent } from './pages/login/login.component'
import { ManageMatchesComponent } from './pages/manage-matches/manage-matches.component'
import { MatchesComponent } from './pages/matches/matches.component'
import { ParticipantsComponent } from './pages/participants/participants.component'
import { RegisterComponent } from './pages/register/register.component'
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component'
import { EventSourceService } from './services/event-source.service'
import { AuthInterceptor } from './utils/auth.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    FooterComponent,
    MatchModalComponent,
    DatepickerComponent,
    LoginComponent,
    IfAuthenticatedDirective,
    EditMatchModalComponent,
    NavbarComponent,
    RegisterComponent,
    EventItemLiteComponent,
    UserDashboardComponent,
    ParticipantsComponent,
    MatchesComponent,
    MatchItemComponent,
    ManageMatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    EventSourceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
