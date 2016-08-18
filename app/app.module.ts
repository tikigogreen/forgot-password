import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';
// import { EmailValidator } from './enter-email.validation';

import { EnterEmailComponent } from './enter-email.component';
import { HeroFormComponent } from './hero-form.component';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    EnterEmailComponent,
    // EmailValidator,
    HeroFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

