import React from 'react';
import './TransactionRow.css';
import { Quote } from './Quote';

export const TransactionRow = ({
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
