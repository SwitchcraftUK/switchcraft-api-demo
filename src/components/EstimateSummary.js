import React from 'react';
import './EstimateSummary.css';

const FuelEstimateSummary = ({
  fuelName,
  fuelEstimate
}) => fuelEstimate.hasFuel ? (
  <tr>
    <td>{fuelName}</td>
    <td>{fuelEstimate.supplierName}</td>
    <td>{fuelEstimate.tariffName}</td>
    <td>{fuelEstimate.paymentType}</td>
    <td>{fuelEstimate.kwUsagePerMonth.toFixed(0)}kW</td>
  </tr>
) : null;

export const EstimateSummary = ({
  estimate
}) => (
  <div className='c-estimate-summary'>
    <p>We have made this estimate based on these details:</p>
    <table className='c-estimate-summary__table'>
      <thead>
        <tr>
          <th>Fuel Type</th>
          <th>Supplier Name</th>
          <th>Tariff Name</th>
          <th>Payment Type</th>
          <th>KwH Usage Per Month</th>
        </tr>
      </thead>
      <tbody>
        <FuelEstimateSummary fuelName='Electricity' fuelEstimate={estimate.elecEstimate} />
        <FuelEstimateSummary fuelName='Gas' fuelEstimate={estimate.gasEstimate} />
      </tbody>
    </table>
  </div>
);
