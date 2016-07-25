import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject}  from 'rxjs/Subject';
import {WebSocketService} from './websocket.service';

// const CHAT_URL = 'ws://localhost:8080/chat';
const CHAT_URL = 'ws://echo.websocket.org/';

export interface Message {
    author: string;
    message: string;
}

@Injectable()
export class ChatService {
    public messages: Subject<Message>;

    constructor(wsService: WebSocketService) {

        this.messages = <Subject<Message>>wsService
            .connect(CHAT_URL)
            .map((response: MessageEvent): Message => {
                let data = JSON.parse(response.data);
                return {
                    author: data.author,
                    message: data.message,
                }
            });
    }
}
