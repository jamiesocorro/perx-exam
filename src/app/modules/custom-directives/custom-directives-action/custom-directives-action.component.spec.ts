import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectivesActionComponent } from './custom-directives-action.component';

describe('CustomDirectivesActionComponent', () => {
  let component: CustomDirectivesActionComponent;
  let fixture: ComponentFixture<CustomDirectivesActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirectivesActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirectivesActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
