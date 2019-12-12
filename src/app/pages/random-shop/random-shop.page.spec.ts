import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RandomShopPage } from './random-shop.page';

describe('RandomShopPage', () => {
  let component: RandomShopPage;
  let fixture: ComponentFixture<RandomShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomShopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RandomShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
