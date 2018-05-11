import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaBannerComponent } from './pelicula-banner.component';

describe('PeliculaBannerComponent', () => {
  let component: PeliculaBannerComponent;
  let fixture: ComponentFixture<PeliculaBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
