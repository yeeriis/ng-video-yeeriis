import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent {
  isDarkTheme = false;
  darkTheme = {
    'background-color': '#222',
    'color': '#fff'
  };
  lightTheme = {
    'background-color': '#fff',
    'color': '#222'
  };
  theme = this.lightTheme;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.theme = this.isDarkTheme ? this.darkTheme : this.lightTheme;
  }
}
