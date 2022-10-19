import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsStarshipsComponent } from './star-wars-starships.component';

describe('StarWarsStarshipsComponent', () => {
  let component: StarWarsStarshipsComponent;
  let fixture: ComponentFixture<StarWarsStarshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarsStarshipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarWarsStarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
