import React, { useState, useEffect } from 'react';
import './Transactions.css';
import { fakeTransactions } from '../../data/fake-transactions';
import { FullScreenLoading } from './FullScreenLoading';
import { getQuote } from '../../utils/get-quote';
import { useStateValue } from '../general/State';
import { setQuote, setQuoteError } from '../../store';
import { TransactionRow } from './TransactionRow';

export const Transcations = () => {
  const [{ address, preferences, quote }, dispatch] = useStateValue();
  const [isLoading, setIsLoadingState] = useState(true);

  const getQuoteResult = async () => {
    setIsLoadingState(true);
    try {
      const quote = await getQuote(
        address,
        preferences
      );
      const savings = quote.tariffs
        && quote.tariffs[0]
        && quote.tariffs[0].annualSaving;
      if (savings && savings > 0) {
        dispatch(setQuote(quote));
      } else {
        dispatch(setQuoteError('No savings to be made for this address'));
      }
    } catch (err) {
      dispatch(setQuoteError(err.message));
    }
    setIsLoadingState(false);
  };

  useEffect(() => {
    getQuoteResult();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <FullScreenLoading />;
  }

  return <div className='c-transactions'>
    { fakeTransactions
      .map(transaction => {
        if (transaction.to === 'Energy Supplier') {
          const firstTariff = quote.tariffs && quote.tariffs[0];
          const amount = (
            firstTariff ? (
              (firstTariff.annualSaving + firstTariff.annualCost) / 12
            ) : transaction.amount
          ).toFixed(0);
          const to = Array.from(new Set(
            [
              quote.estimate.elec.hasFuel && quote.estimate.elec.supplierName,
              quote.estimate.gas.hasFuel && quote.estimate.gas.supplierName,
            ].filter(val => Boolean(val))
          )).join(' / ');
          const reference = (
            quote.estimate.elec.hasFuel
            && quote.estimate.gas.hasFuel
          ) ? 'Gas and Electric'
            : quote.estimate.elec.hasFuel
              ? 'Electric'
              : 'Gas';

          return {
            ...transaction,
            amount,
            to,
            reference
          };
        }
        return transaction;
      })
      .map(
      (transaction, index) =>
        <TransactionRow key={index}
          transaction={transaction}
          showQuote={index === 1} />
    ) }
  </div>
};
