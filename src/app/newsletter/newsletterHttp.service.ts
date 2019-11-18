import { Newsletter } from './newsletter.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class NewsletterHttpService {
    id: number;
    constructor(private http: HttpClient) {
        this.id = Math.floor(Math.random() * 100)
    }
    submit(newsletter: Newsletter) {
        return this.http.post('api/emails', newsletter)
    }
}