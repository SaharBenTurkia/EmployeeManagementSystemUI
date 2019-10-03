import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employeeUI';

  constructor(private loginService:AuthenticationService) {}
}
