import { Newsletter } from './newsletter.model';
import { Injectable } from '@angular/core';
import { NewsletterHttpService } from './newsletterHttp.service';

@Injectable({providedIn: 'root'})
export class NewsletterService {
    private newsletters: Newsletter[] = [];

    constructor(private nhs: NewsletterHttpService) {}

    submit(form) {
        const newsletter = new Newsletter(form);
        return this.nhs.submit(newsletter)
    }
}