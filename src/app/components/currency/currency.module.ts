import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CurrencyComponent} from './currency.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatListModule} from "@angular/material/list";
import {MatChipsModule} from "@angular/material/chips";


@NgModule({
  declarations: [CurrencyComponent],
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatIconModule, FormsModule, MatButtonToggleModule, MatListModule, MatChipsModule,],
  exports: [CurrencyComponent],
})
export class CurrencyModule {}
