import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOutilsComponent } from './menu-outils.component';

describe('MenuOutilsComponent', () => {
  let component: MenuOutilsComponent;
  let fixture: ComponentFixture<MenuOutilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuOutilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOutilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
