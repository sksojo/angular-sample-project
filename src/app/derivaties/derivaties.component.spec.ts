import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivatiesComponent } from './derivaties.component';

describe('DerivatiesComponent', () => {
  let component: DerivatiesComponent;
  let fixture: ComponentFixture<DerivatiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerivatiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerivatiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
