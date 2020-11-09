import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousMenuMesureComponent } from './sous-menu-mesure.component';

describe('SousMenuMesureComponent', () => {
  let component: SousMenuMesureComponent;
  let fixture: ComponentFixture<SousMenuMesureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousMenuMesureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousMenuMesureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
