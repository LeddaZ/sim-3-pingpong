import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DatepickerComponent } from './components/datepicker/datepicker.component'
import { EditEventModalComponent } from './components/edit-event-modal/edit-event-modal.component'
import { EventItemLiteComponent } from './components/event-item-lite/event-item-lite.component'
import { EventModalComponent } from './components/event-modal/event-modal.component'
import { FooterComponent } from './components/footer/footer.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive'
import { EventDashboardComponent } from './pages/event-dashboard/event-dashboard.component'
import { EventListComponent } from './pages/event-list/event-list.component'
import { LoginComponent } from './pages/login/login.component'
import { ParticipantsComponent } from './pages/participants/participants.component'
import { RegisterComponent } from './pages/register/register.component'
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component'
import { EventSourceService } from './services/event-source.service'
import { AuthInterceptor } from './utils/auth.interceptor'
import { MatchesComponent } from './pages/matches/matches.component'
import { MatchItemComponent } from './components/match-item/match-item.component'

@NgModule({
  declarations: [
    AppComponent,
    EventDashboardComponent,
    EventListComponent,
    FooterComponent,
    EventModalComponent,
    DatepickerComponent,
    LoginComponent,
    IfAuthenticatedDirective,
    EditEventModalComponent,
    NavbarComponent,
    RegisterComponent,
    EventItemLiteComponent,
    UserDashboardComponent,
    ParticipantsComponent,
    MatchesComponent,
    MatchItemComponent
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
