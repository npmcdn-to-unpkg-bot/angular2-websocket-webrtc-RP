import {ChatService} from './chat.service'
import {Component} from '@angular/core';

import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';

import { WikipediaService } from '../wiki/wikipedia.service';

@Component({
    moduleId: module.id,
    selector: 'create-message',
    templateUrl: 'create-message.component.html', 
    directives: [],
    providers: [ChatService, JSONP_PROVIDERS, WikipediaService]
})

export class CreateMessage {
    private submitted = false;
    private message = {
        author: 'ng2-websphone',
        message: '',
    }

    constructor(private chatService: ChatService, private wikipediaService: WikipediaService) {}

    private searchTermStream = new Subject<string>();

    search(term: string) { this.searchTermStream.next(term); }

    items: Observable<string[]> = this.searchTermStream
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap((term: string) => this.wikipediaService.search(term));
    private onSubmit() {
        this.chatService.messages.next(this.message);
        this.message.message = '';
    }
}
