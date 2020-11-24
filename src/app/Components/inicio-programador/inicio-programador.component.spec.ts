import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioProgramadorComponent } from './incio-programador.component';

describe('InicioProgramadorComponent', () => {
  let component: InicioProgramadorComponent;
  let fixture: ComponentFixture<InicioProgramadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioProgramadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioProgramadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
