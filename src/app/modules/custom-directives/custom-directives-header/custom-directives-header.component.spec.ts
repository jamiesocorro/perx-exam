import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectivesHeaderComponent } from './custom-directives-header.component';

describe('CustomDirectivesHeaderComponent', () => {
  let component: CustomDirectivesHeaderComponent;
  let fixture: ComponentFixture<CustomDirectivesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirectivesHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirectivesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
