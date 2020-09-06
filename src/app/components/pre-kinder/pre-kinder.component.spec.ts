import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreKinderComponent } from './pre-kinder.component';

describe('PreKinderComponent', () => {
  let component: PreKinderComponent;
  let fixture: ComponentFixture<PreKinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreKinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreKinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
