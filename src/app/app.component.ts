import { Component } from '@angular/core';
import { PusherService } from './service/pusher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tms';

  constructor(private pusherService: PusherService) {
    this.pusherService.init();
  }
}
