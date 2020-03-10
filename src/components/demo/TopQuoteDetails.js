import React from 'react';
import './TopQuoteDetails.css';

export const TopQuoteDetails = ({
  topTariff
}) => (
  <div className='c-top-quote'>
    <div className='c-top-quote__top-row'>
      <div className='c-top-quote__row-item'>
        <img className='c-top-quote__supplier-logo'
          src={topTariff.supplierLogoUrl} alt='Supplier logo' />
      </div>
      <div className='c-top-quote__row-item'>
        <div className='c-top-quote__cost-text'>Estimated cost</div>
        <div className='c-top-quote__cost'>
          <span className='c-top-quote__currency'>£</span>
          {topTariff.annualCost.toFixed(0)}
        </div>
        <div className='c-top-quote__cost-text'>per year</div>
      </div>
      <div className='c-top-quote__row-item'>
        <div className='c-top-quote__cost-text'>You save</div>
        <div className='c-top-quote__saving'>
          <span className='c-top-quote__currency'>£</span>
          {topTariff.annualSaving.toFixed(0)}
        </div>
        <div className='c-top-quote__cost-text'>per year</div>
      </div>
    </div>

    <div className='c-top-quote__bottom-row'>
      <span className='c-top-quote__supplier-name'>{topTariff.supplierName}</span>
      &nbsp;
      {topTariff.tariffName}
      <span className='c-top-quote__warm-home-discount'>
        {
          topTariff.hasWarmHomeDiscount
            ? 'This tariff will preserve your warm home discount'
            : 'This tariff does not include a warm home discount'
        }
      </span>
    </div>
  </div>
);
