import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalculateCurrencyComponent} from './calculate-currency.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [CalculateCurrencyComponent],
  imports: [CommonModule, MatFormFieldModule, MatIconModule, FormsModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  exports: [CalculateCurrencyComponent],
})
export class CalculateCurrencyModule {}
