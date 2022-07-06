import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscograpyPageComponent } from './discograpy-page.component';

describe('DiscograpyPageComponent', () => {
  let component: DiscograpyPageComponent;
  let fixture: ComponentFixture<DiscograpyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscograpyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscograpyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
