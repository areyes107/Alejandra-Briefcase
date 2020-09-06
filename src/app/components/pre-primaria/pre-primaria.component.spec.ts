import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePrimariaComponent } from './pre-primaria.component';

describe('PrePrimariaComponent', () => {
  let component: PrePrimariaComponent;
  let fixture: ComponentFixture<PrePrimariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrePrimariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrePrimariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
