import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsPlanetsComponent } from './star-wars-planets.component';

describe('StarWarsPlanetsComponent', () => {
  let component: StarWarsPlanetsComponent;
  let fixture: ComponentFixture<StarWarsPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarsPlanetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarWarsPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
