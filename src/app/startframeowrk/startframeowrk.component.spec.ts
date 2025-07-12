import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartframeowrkComponent } from './startframeowrk.component';

describe('StartframeowrkComponent', () => {
  let component: StartframeowrkComponent;
  let fixture: ComponentFixture<StartframeowrkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartframeowrkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartframeowrkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
