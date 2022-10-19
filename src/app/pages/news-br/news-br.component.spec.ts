import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBrComponent } from './news-br.component';

describe('NewsBrComponent', () => {
  let component: NewsBrComponent;
  let fixture: ComponentFixture<NewsBrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsBrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsBrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
