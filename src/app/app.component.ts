import { Component } from '@angular/core';
import { MainPageComponent } from './pages/main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [MainPageComponent]
})
export class AppComponent {
  title = 'menuApp';
}
