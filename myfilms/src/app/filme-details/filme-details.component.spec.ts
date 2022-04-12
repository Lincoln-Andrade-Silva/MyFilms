import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeDetailsComponent } from './filme-details.component';

describe('FilmeDetailsComponent', () => {
  let component: FilmeDetailsComponent;
  let fixture: ComponentFixture<FilmeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
