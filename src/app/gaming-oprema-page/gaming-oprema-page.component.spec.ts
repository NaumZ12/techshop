import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingOpremaPageComponent } from './gaming-oprema-page.component';

describe('GamingOpremaPageComponent', () => {
  let component: GamingOpremaPageComponent;
  let fixture: ComponentFixture<GamingOpremaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamingOpremaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingOpremaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
