import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopInfoPage } from './shop-info.page';

describe('ShopInfoPage', () => {
  let component: ShopInfoPage;
  let fixture: ComponentFixture<ShopInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
