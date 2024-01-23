import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root',
})
export class PusherService {
  private readonly notifier: NotifierService;
  pusher: any;
  channel: any;

  constructor(notifierService: NotifierService) {
    this.notifier = notifierService;
    this.pusher = new Pusher('asdasdasdasd', {
      cluster: 'mt1',
    });

    this.channel = this.pusher.subscribe('channel-name');
  }

  public init() {
    const echo = new Echo({
      broadcaster: 'pusher',
      key: 'asdasdasdasd',
      cluster: 'mt1',
      encrypted: true,
      wsHost: window.location.hostname,
      wsPort: 6001,
      disableStats: true,
      forceTLS: false,
    });

    echo.channel('chat')
      .listen('TestingEvent', (data: any) => {
        console.log(data);
        this.notifier.notify('success', 'You are awesome! I mean it!');
      });
  }
}
