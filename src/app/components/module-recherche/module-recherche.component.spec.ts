import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleRechercheComponent } from './module-recherche.component';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

describe('ModuleRechercheComponent', () => {
  let component: ModuleRechercheComponent;
  let fixture: ComponentFixture<ModuleRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

