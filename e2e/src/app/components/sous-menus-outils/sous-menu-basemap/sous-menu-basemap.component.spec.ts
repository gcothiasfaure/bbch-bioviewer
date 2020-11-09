import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousMenuBasemapComponent } from './sous-menu-basemap.component';

describe('SousMenuBasemapComponent', () => {
  let component: SousMenuBasemapComponent;
  let fixture: ComponentFixture<SousMenuBasemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousMenuBasemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousMenuBasemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
