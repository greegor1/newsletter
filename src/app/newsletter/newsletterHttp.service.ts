import { Newsletter } from './newsletter.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class NewsletterHttpService {
    
    constructor(private http: HttpClient) {
    }
    submit(newsletter: Newsletter) {
        return this.http.post('api/emails', newsletter)
    }
}