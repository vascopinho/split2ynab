# split2ynab

Node.js application that syncs Splitwise shared expenses to YNAB accounts.

## Description

The app runs as a cron job every _x_ minutes, and retrieves expenses on a Splitwise group and parses the expense info in order to be provided to YNAB API. Transactions show up on YNAB as uncleared, uncategorized and unapproved in order to be manually processed and categorized as a second step.

When you have a new expense on splitwise where you owe money (who you are is based on the user id provided), it will be introduced as an outflow. If you are owed, then it's treated as an inflow.

## Run

for local run: `npm run local`

### Heroku

for Heroku deployment, set up node.js worker and run: `npm run deploy`

## Future work/limitations

- Missing tests
- Only processes expenses that occur after app startup
- Keep app state on database (currently _ids_ of processed expenses are stored in-memory)
- Docker support
- Error handling
- Static mapping between Splitwise/YNAB Categories

## Config

### Env variables

```
SPLITWISE_BASE_URL - should be https://secure.splitwise.com/api/v3.0
SPLITWISE_API_KEY - user api key (needs to generated on Splitwise account)
SPLITWISE_USER_ID - your own user id to filter when parsing expenses from splitwise (needed to handle transactions as Inflow or Outflow)

YNAB_BASE_URL - should be https://api.youneedabudget.com/v1
YNAB_BUDGET_ID - your YNAB budget ID
YNAB_ACCOUNT_ID - your YNAB account ID
YNAB_PAYEE_ID - the default Payee ID you want to assign to your transactions
YNAB_API_KEY - YNAB API key, generated on account's developer settings
YNAB_UNCATEGORIZED_ID - YNAB "Needs categorization" ID, it's a master category that you can retrieve via YNAB's API, not sure if ID is general or per user.
```

## Docs

- [Splitwise API](https://dev.splitwise.com/#introduction)
- [YNAB API](https://api.youneedabudget.com/v1)
