import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAppComponent } from './text-app.component';

describe('TextAppComponent', () => {
  let component: TextAppComponent;
  let fixture: ComponentFixture<TextAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
