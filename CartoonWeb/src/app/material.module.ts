import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatStepperModule,
  MatSidenavModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatStepperModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
  ]
})
export class MaterialModule {}
