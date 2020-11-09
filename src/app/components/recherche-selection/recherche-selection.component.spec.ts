import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheSelectionComponent } from './recherche-selection.component';

describe('RechercheSelectionComponent', () => {
  let component: RechercheSelectionComponent;
  let fixture: ComponentFixture<RechercheSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
