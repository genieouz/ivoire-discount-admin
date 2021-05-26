import { Component, OnInit } from '@angular/core';
import { transactionsDB } from 'src/app/shared/tables/transactions';
import { FetchProviderBillsGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  public transactions = []

  constructor(
    private readonly fetchProviderBillsGQL: FetchProviderBillsGQL
  ) {
    this.transactions = transactionsDB.data;
    this.fetchProviderBillsGQL.fetch().subscribe(
      ({ data }) => {
          this.transactions = data.fetchProviderBills.map(bill => {
          return {
            transaction_id: bill.charge.balance_transaction,
            pay_method: bill.charge.payment_method_details.type,
            quantity: bill.cartItem.quantity,
            price: bill.cartItem.price,
            amount: bill.cartItem.price *  bill.cartItem.quantity,
            product_name: bill.cartItem.name,
            date: new Date(bill.charge.created),
            email: bill.email,
            firstname: bill.firstname,
            lastname: bill.lastname,
            address: bill.address,
            phone: bill.phone,
          }
        });

      }
    )
  }

  public settings = {
    actions: false,
    hideSubHeader: true,
    columns: {
      transaction_id: {
        title: 'Transaction Id', filter: false
      },
      product_name: {
        title: 'Produit', filter: false
      },
      firstname: {
        title: 'Prénom', filter: false
      },
      // lastname: {
      //   title: 'Nom', filter: false
      // },
      // email: {
      //   title: 'Email', filter: false
      // },
      // phone: {
      //   title: 'Phone', filter: false
      // },
      // address: {
      //   title: 'Adresse', filter: false
      // },
      date: {
        title: 'Date', filter: false
      },
      pay_method: {
        title: 'Mode de paiement', filter: false,
      },
      price: {
        title: 'Prix Unitaire', filter: false
      },
      quantity: {
        title: 'Quantité', filter: false
      },
      amount: {
        title: 'Total', filter: false
      }
    },
  };

  ngOnInit() {
  }

}
