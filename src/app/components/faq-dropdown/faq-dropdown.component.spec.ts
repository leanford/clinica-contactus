import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqDropdownComponent } from './faq-dropdown.component';

describe('FaqDropdownComponent', () => {
  let component: FaqDropdownComponent;
  let fixture: ComponentFixture<FaqDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqDropdownComponent]
    });
    fixture = TestBed.createComponent(FaqDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
