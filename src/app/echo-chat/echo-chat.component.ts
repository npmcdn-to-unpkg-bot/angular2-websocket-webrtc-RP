
import {ChatService} from './chat.service'
import {Chat} from './chat.component';
import {Component ,OnInit} from '@angular/core';
import {CreateMessage} from './create-message.component';
import {WebSocketService} from './websocket.service';

@Component({
    moduleId: module.id,
    selector: 'echo-chat',
    templateUrl: 'echo-chat.component.html',
    directives: [Chat, CreateMessage],
    providers: [ChatService, WebSocketService],
})
export class EchoChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
