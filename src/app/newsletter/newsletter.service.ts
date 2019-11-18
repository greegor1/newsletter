import { Newsletter } from './newsletter.model';
import { Injectable } from '@angular/core';
import { NewsletterHttpService } from './newsletterHttp.service';

@Injectable({providedIn: 'root'})
export class NewsletterService {
    private newsletters: Newsletter[] = [];

    constructor(private nhs: NewsletterHttpService) {}

    addNewsletter(email: Newsletter) {
        this.newsletters.push(email)      
    }

    submit(form) {
        const newsletter = new Newsletter(form);
        return this.nhs.submit(newsletter)
    }
}