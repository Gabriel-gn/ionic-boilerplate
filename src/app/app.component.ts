import {Component} from '@angular/core';
import {Plugins, StatusBarStyle} from '@capacitor/core';

const {StatusBar} = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ionic-boilerplate';
  isStatusBarLight = true;

  changeStatusBar = () => {
    StatusBar.setStyle({
      style: this.isStatusBarLight ? StatusBarStyle.Dark : StatusBarStyle.Light
    });
    this.isStatusBarLight = !this.isStatusBarLight;

    // Display content under transparent status bar (Android only)
    StatusBar.setOverlaysWebView({
      overlay: true
    });
  };

  hideStatusBar = () => {
    StatusBar.hide();
  };

  showStatusBar = () => {
    StatusBar.show();
  };


}
