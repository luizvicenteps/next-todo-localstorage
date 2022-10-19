import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsUsComponent } from './news-us.component';

describe('NewsUsComponent', () => {
  let component: NewsUsComponent;
  let fixture: ComponentFixture<NewsUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
