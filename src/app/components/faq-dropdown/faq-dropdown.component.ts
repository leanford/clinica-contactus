import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-dropdown',
  templateUrl: './faq-dropdown.component.html',
  styleUrls: ['./faq-dropdown.component.css']
})
export class FaqDropdownComponent {

  @Input() faqList: { question: string; answer: string }[] = [];

  activeIndex: number | null = null;

  toggleAnswer(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}