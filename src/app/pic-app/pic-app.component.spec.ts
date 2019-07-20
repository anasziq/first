import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicAppComponent } from './pic-app.component';

describe('PicAppComponent', () => {
  let component: PicAppComponent;
  let fixture: ComponentFixture<PicAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
