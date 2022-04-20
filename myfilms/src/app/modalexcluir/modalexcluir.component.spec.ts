import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalexcluirComponent } from './modalexcluir.component';

describe('ModalexcluirComponent', () => {
  let component: ModalexcluirComponent;
  let fixture: ComponentFixture<ModalexcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalexcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalexcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
