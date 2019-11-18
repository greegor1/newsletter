import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { NewsletterService } from './newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  newsletterFormGroup: FormGroup;
  private emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  constructor(private fb: FormBuilder, private newsletterService: NewsletterService) { }

  ngOnInit() {
    this.newsletterFormGroup = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)])
    })
  }

  onSubmit() {
    this.newsletterService.submit(this.newsletterFormGroup.value).subscribe(() => {console.log('wyslano')})
  }

}
