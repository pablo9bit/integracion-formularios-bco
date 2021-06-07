import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivaIndividualComponent } from './productiva-individual.component';

describe('ProductivaIndividualComponent', () => {
  let component: ProductivaIndividualComponent;
  let fixture: ComponentFixture<ProductivaIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductivaIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductivaIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
