import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupComponent } from './meetup.component';

describe('MeetupComponent', () => {
  let component: MeetupComponent;
  let fixture: ComponentFixture<MeetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
