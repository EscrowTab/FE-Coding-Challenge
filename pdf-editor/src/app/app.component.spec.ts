import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

describe('AppComponent', () => {
  let component: AppComponent;
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [
      HomePageComponent,
    ],
    imports: [
      RouterTestingModule,
      MatButtonModule,
    ]
  })

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'PDF Manager'`, () => {
    expect(component.title).toEqual('PDF Manager');
  });

  it('should render title', () => {
    const compiled = spectator.element as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('PDF Manager');
  });
});
