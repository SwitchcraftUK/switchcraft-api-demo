import React, { useState } from 'react';
import { ENERGY_QUOTE_BACKEND_URL } from './config';
import {SwitchUser} from "./SwitchUser";

const getQuote = async () => {
  const result = (await fetch(ENERGY_QUOTE_BACKEND_URL, { method: 'POST' })).json();
  return result;
};

export const Quote = () => {
    const [quoteState, setQuoteState] = useState(null);
    const [isLoading, setIsLoadingState] = useState(false);

    const getQuoteClicked = async () => {
        setIsLoadingState(true);
        const quote = await getQuote();
        setQuoteState(quote);
        setIsLoadingState(false);
    };

    return (
        <div>
            <button onClick={getQuoteClicked}>Get Quote</button>
            {
                isLoading && <div>Loading...</div>
            }
            {
                !isLoading && quoteState && quoteState.tariffs && quoteState.tariffs.length > 0 &&
                    <div>
                        Switch today and save { quoteState.tariffs[0].annualSaving }
                        <SwitchUser/>
                    </div>
            }
        </div>
    );
};
