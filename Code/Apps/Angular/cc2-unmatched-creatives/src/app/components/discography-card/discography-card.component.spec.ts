import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscographyCardComponent } from './discography-card.component';

describe('DiscographyCardComponent', () => {
  let component: DiscographyCardComponent;
  let fixture: ComponentFixture<DiscographyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscographyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscographyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
