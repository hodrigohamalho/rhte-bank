import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Payment } from './payment';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/banks/summit/cards/:userId")
  cardsSummit(): any {
    return {
      "bank_id": "summit",
      "account_id": "4321",
      "card_number": "4321 4567 7891 4321",
      "name_on_card": "Rodrigo Ramalho",
      "type": "credit",
      "enabled":true
    };
  }

  @Get("/banks/rhte/cards/:userId")
  cardsRhte(): any {
    return {
      "bank_id": "rhte",
      "account_id": "1234",
      "card_number": "1234 4567 7891 1234",
      "name_on_card": "Rodrigo Ramalho",
      "type": "credit",
      "enabled":true
    };
  }

  @Post("/banks/rhte/transactions/:userId")
  transactionRhteCreate(@Param('userId') userId, @Body() payment: Payment): any {
    return {
      message: "Transaction created"
    };
  }

  @Post("/banks/summit/transactions/:userId")
  transactionSummitCreate(@Param('userId') userId, @Body() payment: Payment): any {
    return {
      message: "Transaction created"
    };
  }

  @Get("/banks/rhte/transactions/:userId")
  transactionsRhte(): any {
    return [{
      "bank_id": "rhte",
      "from_accountid": "1234",
      "to_accountid": "9999", // e-store
      "item": "Mercado Libre compra",
      "description": "notebook, celphone",
      "tags": "mercado-livre",
      "amount": 20.0
    },
    {
      "bank_id": "rhte",
      "from_accountid": "1234",
      "to_accountid": "9999", // e-store
      "item": "e-store purchase",
      "description": "t-shirt, shorts",
      "tags": "e-store, wear",
      "amount": 50.0
    }];
  }

  @Get("/banks/summit/transactions/:userId")
  transactionsSummit(): any {
    return [{
      "bank_id": "rhte",
      "from_accountid": "4321", // summit account
      "to_accountid": "9999", // e-store
      "item": "Apple Store Purchase",
      "description": "iphone",
      "tags": "apple, iphone, mobile",
      "amount": 500.0
    },
    {
      "bank_id": "rhte",
      "from_accountid": "4321", // summit account
      "to_accountid": "9999", // e-store
      "item": "e-store purchase",
      "description": "shirts",
      "tags": "e-store, wear",
      "amount": 150.0
    }];
  }
}
