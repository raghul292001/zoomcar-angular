import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCardComponent } from './card-card.component';

describe('CardCardComponent', () => {
  let component: CardCardComponent;
  let fixture: ComponentFixture<CardCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCardComponent]
    });
    fixture = TestBed.createComponent(CardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
