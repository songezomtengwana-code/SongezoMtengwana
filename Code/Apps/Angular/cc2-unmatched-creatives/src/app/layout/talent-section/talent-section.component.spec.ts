import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentSectionComponent } from './talent-section.component';

describe('TalentSectionComponent', () => {
  let component: TalentSectionComponent;
  let fixture: ComponentFixture<TalentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
