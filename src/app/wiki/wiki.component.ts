import { Component }        from '@angular/core';
import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';

import { WikipediaService } from './wikipedia.service';

@Component({
  moduleId: module.id,
  selector: 'my-wiki',
  templateUrl: 'wiki.component.html',
  providers: [JSONP_PROVIDERS, WikipediaService]
})
export class WikiComponent {
  items: Observable<string[]>;

  constructor (private wikipediaService: WikipediaService) {}

  search (term: string) {
    this.items = this.wikipediaService.search(term);
  }
}
