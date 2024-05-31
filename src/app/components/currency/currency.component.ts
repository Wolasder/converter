import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BankModel} from "../../shared/model/bank.model";
import {BANKS} from "../../shared/banks";
import {CURRENCY} from "../../shared/currency";
import {CurrencyModel} from "../../shared/model/currency.model";
import {CRYPTO} from "../../shared/crypto";
import {CryptoModel} from "../../shared/model/crypto.model";
import {HttpClient} from "@angular/common/http";
import {CurrencyValueService} from "../../services/currency-value.service";
import {CombineModel} from "../../shared/model/combine.model";
import {FormControl} from "@angular/forms";
import {CurrencyEnum} from "../../shared/currency.enum";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent {
  public banks: BankModel[] = BANKS;
  public currency: string[] = CURRENCY;
  public crypto: CryptoModel[] = CRYPTO;
  public checked: boolean = true;
  public checkedButtonValue: string = 'Валюта';
  public checkedButtonBoolean: boolean = true;
  public currencyFilter: string = '';
  public clicked: boolean = true;
  public usedBanks: BankModel[] = [];
  public isFilterCheck: any = {
    all : true,
    rub : false,
    usd : false,
    kzt : false,
    amd : false,
    inr : false,
    eur : false,
  }
  protected initialSelected: string = 'Все';

  @Input() public title: string = '';
  @Input() public whenIsCheck: boolean = true;

  @Output() public toAppCalc: EventEmitter<BankModel | CryptoModel> = new EventEmitter<BankModel | CryptoModel>()

  ngOnInit(): void {
    //изначально отображает все банки
    this.usedBanks.push(...this.banks);
  }

  toCalc(event: BankModel | CryptoModel):void {
    this.toAppCalc.emit(event)
  }

  usedFilter(filter: string) {
    if (filter === CurrencyEnum.All && !this.isFilterCheck.all) {
      this.usedBanks = [];
      this.usedBanks.push(...this.banks);
      this.isFilterCheck.all = true;
    }
    else if (filter === CurrencyEnum.All && this.isFilterCheck.all) {
      this.usedBanks = [];
      this.isFilterCheck.all = false;
    } else if (filter !== CurrencyEnum.All) {
      this.isFilterCheck.all = false;
    }

    if (filter === CurrencyEnum.Rubles && !this.isFilterCheck.rub) {
      this.usedBanks = [];
      this.usedBanks.push(...this.banks.filter((currency: BankModel)=> currency.bankCurrency === CurrencyEnum.Rub));
      this.isFilterCheck.rub = true;
    } else if (filter === CurrencyEnum.Rubles && this.isFilterCheck.rub) {
      this.usedBanks = [];
      this.isFilterCheck.rub = false;
    } else if (filter !== CurrencyEnum.Rubles) {
      this.isFilterCheck.rub = false;
    }

    if (filter === CurrencyEnum.Dollars && !this.isFilterCheck.usd) {
      this.usedBanks = [];
      this.usedBanks.push(...this.banks.filter((currency: BankModel)=> currency.bankCurrency === CurrencyEnum.Usd));
      this.isFilterCheck.usd = true;
    } else if (filter === CurrencyEnum.Dollars && this.isFilterCheck.usd) {
      this.usedBanks = [];
      this.isFilterCheck.usd = false;
    } else if (filter !== CurrencyEnum.Dollars) {
      this.isFilterCheck.usd = false;
    }

    if (filter === CurrencyEnum.Tenge && !this.isFilterCheck.kzt) {
      this.usedBanks = [];
      this.usedBanks.push(...this.banks.filter((currency: BankModel)=> currency.bankCurrency === CurrencyEnum.Kzt));
      this.isFilterCheck.kzt = true;
    } else if (filter === CurrencyEnum.Tenge && this.isFilterCheck.kzt) {
      this.usedBanks = [];
      this.isFilterCheck.kzt = false;
    } else if (filter !== CurrencyEnum.Tenge) {
      this.isFilterCheck.kzt = false;
    }

    if (filter === CurrencyEnum.Drama && !this.isFilterCheck.amd) {
      this.usedBanks = [];
      this.usedBanks.push(...this.banks.filter((currency: BankModel)=> currency.bankCurrency === CurrencyEnum.Amd));
      this.isFilterCheck.amd = true;
    } else if (filter === CurrencyEnum.Drama && this.isFilterCheck.amd) {
      this.usedBanks = [];
      this.isFilterCheck.amd = false;
    } else if (filter !== CurrencyEnum.Drama) {
      this.isFilterCheck.amd = false;
    }

    if (filter === CurrencyEnum.Rupee && !this.isFilterCheck.inr) {
      this.usedBanks = [];
      this.usedBanks.push(...this.banks.filter((currency: BankModel)=> currency.bankCurrency === CurrencyEnum.Inr));
      this.isFilterCheck.inr = true;
    } else if (filter === CurrencyEnum.Rupee && this.isFilterCheck.inr) {
      this.usedBanks = [];
      this.isFilterCheck.inr = false;
    } else if (filter !== CurrencyEnum.Rupee) {
      this.isFilterCheck.inr = false;
    }

    if (filter === CurrencyEnum.Euro && !this.isFilterCheck.eur) {
      this.usedBanks = [];
      this.usedBanks.push(...this.banks.filter((currency: BankModel)=> currency.bankCurrency === CurrencyEnum.Eur));
      this.isFilterCheck.eur = true;
    } else if (filter === CurrencyEnum.Euro && this.isFilterCheck.eur) {
      this.usedBanks = [];
      this.isFilterCheck.eur = false;
    } else if (filter !== CurrencyEnum.Euro) {
      this.isFilterCheck.eur = false;
    }
  }















}
