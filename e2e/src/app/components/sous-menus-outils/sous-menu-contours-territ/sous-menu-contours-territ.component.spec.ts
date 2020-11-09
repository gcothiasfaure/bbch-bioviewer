import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousMenuContoursTerritComponent } from './sous-menu-contours-territ.component';

describe('SousMenuContoursTerritComponent', () => {
  let component: SousMenuContoursTerritComponent;
  let fixture: ComponentFixture<SousMenuContoursTerritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousMenuContoursTerritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousMenuContoursTerritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
