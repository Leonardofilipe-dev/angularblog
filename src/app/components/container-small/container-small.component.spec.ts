import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSmallComponent } from './container-small.component';

describe('ContainerSmallComponent', () => {
  let component: ContainerSmallComponent;
  let fixture: ComponentFixture<ContainerSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerSmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
