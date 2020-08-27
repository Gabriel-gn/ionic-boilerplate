import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {NgMaterialMultilevelMenuModule} from 'ng-material-multilevel-menu';


@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgMaterialMultilevelMenuModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule {
}
