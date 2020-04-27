import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideTableComponent } from './inside-table.component';

describe('InsideTableComponent', () => {
  let component: InsideTableComponent;
  let fixture: ComponentFixture<InsideTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
