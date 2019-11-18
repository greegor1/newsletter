import { Newsletter } from './newsletter.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class NewsletterService {
    private newsletters: Newsletter[] = [];

    constructor() {}

    addNewsletter(email: Newsletter) {
        this.newsletters.push(email)      
    }
}