import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninFeedComponent } from './signin-feed.component';

describe('SigninFeedComponent', () => {
  let component: SigninFeedComponent;
  let fixture: ComponentFixture<SigninFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
