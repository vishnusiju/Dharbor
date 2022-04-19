import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemotitleComponent } from './demotitle.component';

describe('DemotitleComponent', () => {
  let component: DemotitleComponent;
  let fixture: ComponentFixture<DemotitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemotitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemotitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
