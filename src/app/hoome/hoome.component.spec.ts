import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoomeComponent } from './hoome.component';

describe('HoomeComponent', () => {
  let component: HoomeComponent;
  let fixture: ComponentFixture<HoomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
