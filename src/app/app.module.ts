import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {IonicModule} from '@ionic/angular';
import {LoginLayoutComponent} from './layouts/login-layout/login-layout.component';
import {DashboardLayoutComponent} from './layouts/dashboard-layout/dashboard-layout.component';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routing';
import {NavbarModule} from './components/navbar/navbar.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SidebarModule} from './components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    DashboardLayoutComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    NavbarModule,
    SidebarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
