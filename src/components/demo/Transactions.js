import React from 'react';
import './Transactions.css';
import { fakeTransactions } from '../../data/fake-transactions';
import { Quote } from './Quote';

const TransactionRow = ({
  transaction,
  showQuote
}) => (
  <div className='c-transaction-row'>
    <div className='c-transaction-row__date'>{ transaction.date }</div>
    <div className='c-transaction-row__inner'>
      <div>
        <p className='c-transaction-row__to'>{ transaction.to }</p>
        {
          transaction.reference &&
          <p className='c-transaction-row__reference'>
            { transaction.reference }
          </p>
        }
      </div>
      <div>
        <p className='c-transaction-row__amount'>£{ transaction.amount }</p>
      </div>
    </div>
    {
      showQuote && <Quote />
    }
  </div>
);

export const Transcations = () => (
  <div className='c-transactions'>
    { fakeTransactions.map(
      (transaction, index) =>
        <TransactionRow key={index}
          transaction={transaction}
          showQuote={index === 1 } />
    ) }
  </div>
);
