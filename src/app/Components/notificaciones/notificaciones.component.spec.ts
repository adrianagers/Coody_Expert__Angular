import { ComponentFixture, TestBed } from '@angular/core/testing';

import { notificacionesComponent } from './notificaciones.component';

describe('notificacionesComponent', () => {
  let component: notificacionesComponent;
  let fixture: ComponentFixture<notificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ notificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(notificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
