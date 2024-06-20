import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BANKS} from "../../shared/banks";
import {CURRENCY} from "../../shared/currency";
import {CRYPTO} from "../../shared/crypto";
import {CurrencyEnum} from "../../shared/currency.enum";
import {SelectedModel} from "../../shared/model/selected.model";
import {ISCHECK} from "../../shared/isCheck";
import {IsCheckModel} from "../../shared/model/isCheck.model";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit{
  private banks: SelectedModel[] = BANKS;
  protected crypto: SelectedModel[] = CRYPTO;
  protected currency: string[] = CURRENCY;
  protected checkedButtonValue: string = 'Валюта';
  protected checkedButtonBoolean: boolean = true;
  protected usedBanks: SelectedModel[] = [];
  protected isFilterCheck: IsCheckModel = ISCHECK;
  protected initialSelected: string = 'Все';

  @Input() public title: string = '';
  @Input() public whenIsCheck: boolean = true;

  @Output() public toAppCalc: EventEmitter<SelectedModel> = new EventEmitter<SelectedModel>()

  ngOnInit(): void {
    //изначально отображает все банки
    this.usedBanks.push(...this.banks);
  }

  toCalc(event: SelectedModel):void {
    this.toAppCalc.emit(event)
  }

  usedFilter(filter: string) {
    if (filter === CurrencyEnum.AllFilter && !this.isFilterCheck.all) {
      this.usedBanks = [];
      this.usedBanks.push(...this.banks);
      this.isFilterCheck.all = true;
    } else if (filter === CurrencyEnum.AllFilter && this.isFilterCheck.all) {
      this.usedBanks = [];
      this.isFilterCheck.all = false;
    } else if (filter !== CurrencyEnum.AllFilter) {
      this.isFilterCheck.all = false;
    }

    if (filter === CurrencyEnum.RublesFilter && !this.isFilterCheck.rub) {
      this.usedBanks = [];
      this.usedBanks.push(...this.banks.filter((currency: SelectedModel)=> currency.currency === CurrencyEnum.Rub));
      this.isFilterCheck.rub = true;
    } else if (filter === CurrencyEnum.RublesFilter && this.isFilterCheck.rub) {
      this.usedBanks = [];
      this.isFilterCheck.rub = false;
    } else if (filter !== CurrencyEnum.RublesFilter) {
      this.isFilterCheck.rub = false;
    }

    if (filter === CurrencyEnum.DollarsFilter && !this.isFilterCheck.usd) {
      this.usedBanks = [];
      this.usedBanks.push(...this.banks.filter((currency: SelectedModel)=> currency.currency === CurrencyEnum.Usd));
      this.isFilterCheck.usd = true;
    } else if (filter === CurrencyEnum.DollarsFilter && this.isFilterCheck.usd) {
      this.usedBanks = [];
      this.isFilterCheck.usd = false;
    } else if (filter !== CurrencyEnum.DollarsFilter) {
      this.isFilterCheck.usd = false;
    }

    if (filter === CurrencyEnum.TengeFilter && !this.isFilterCheck.kzt) {
      this.usedBanks = [];
      this.usedBanks.push(...this.banks.filter((currency: SelectedModel)=> currency.currency === CurrencyEnum.Kzt));
      this.isFilterCheck.kzt = true;
    } else if (filter === CurrencyEnum.TengeFilter && this.isFilterCheck.kzt) {
      this.usedBanks = [];
      this.isFilterCheck.kzt = false;
    } else if (filter !== CurrencyEnum.TengeFilter) {
      this.isFilterCheck.kzt = false;
    }

    if (filter === CurrencyEnum.DramaFilter && !this.isFilterCheck.amd) {
      this.usedBanks = [];
      this.usedBanks.push(...this.banks.filter((currency: SelectedModel)=> currency.currency === CurrencyEnum.Amd));
      this.isFilterCheck.amd = true;
    } else if (filter === CurrencyEnum.DramaFilter && this.isFilterCheck.amd) {
      this.usedBanks = [];
      this.isFilterCheck.amd = false;
    } else if (filter !== CurrencyEnum.DramaFilter) {
      this.isFilterCheck.amd = false;
    }

    if (filter === CurrencyEnum.RupeeFilter && !this.isFilterCheck.inr) {
      this.usedBanks = [];
      this.usedBanks.push(...this.banks.filter((currency: SelectedModel)=> currency.currency === CurrencyEnum.Inr));
      this.isFilterCheck.inr = true;
    } else if (filter === CurrencyEnum.RupeeFilter && this.isFilterCheck.inr) {
      this.usedBanks = [];
      this.isFilterCheck.inr = false;
    } else if (filter !== CurrencyEnum.RupeeFilter) {
      this.isFilterCheck.inr = false;
    }

    if (filter === CurrencyEnum.EuroFilter && !this.isFilterCheck.eur) {
      this.usedBanks = [];
      this.usedBanks.push(...this.banks.filter((currency: SelectedModel)=> currency.currency === CurrencyEnum.Eur));
      this.isFilterCheck.eur = true;
    } else if (filter === CurrencyEnum.EuroFilter && this.isFilterCheck.eur) {
      this.usedBanks = [];
      this.isFilterCheck.eur = false;
    } else if (filter !== CurrencyEnum.EuroFilter) {
      this.isFilterCheck.eur = false;
    }
  }
}
