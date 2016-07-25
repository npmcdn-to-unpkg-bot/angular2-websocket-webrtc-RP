import { Component }        from '@angular/core';
import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';

import { WikipediaService } from './wikipedia.service';

@Component({
    moduleId: module.id,
    selector: 'my-wiki-smart',
    templateUrl: 'wiki-smart.component.html',    
    providers: [JSONP_PROVIDERS, WikipediaService]
})
export class WikiSmartComponent {

  constructor (private wikipediaService: WikipediaService) { }

  private searchTermStream = new Subject<string>();

  search(term: string) { this.searchTermStream.next(term); }

  items: Observable<string[]> = this.searchTermStream
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap((term: string) => this.wikipediaService.search(term));
}
