import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCoucheComponent } from './info-couche.component';

describe('InfoCoucheComponent', () => {
  let component: InfoCoucheComponent;
  let fixture: ComponentFixture<InfoCoucheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCoucheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCoucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
