import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { routeAnimations } from './route-animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [routeAnimations], 

})
export class App {
  protected readonly title = signal('RISO-WEB');

   getRouteAnimation(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'];
  }

}
