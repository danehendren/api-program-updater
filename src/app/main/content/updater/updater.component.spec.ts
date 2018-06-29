import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseUpdaterComponent } from './updater.component';

describe('UpdaterComponent', () => {
  let component: FuseUpdaterComponent;
  let fixture: ComponentFixture<FuseUpdaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuseUpdaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseUpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
