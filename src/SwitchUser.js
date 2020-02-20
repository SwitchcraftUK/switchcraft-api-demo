import React, { useState } from 'react';
import { ENERGY_SWITCH_BACKEND_URL } from './config';
import {LoadingSpinner} from "./LoadingSpinner";

const postSwitchUser = async () => {
    const result = (await fetch(ENERGY_SWITCH_BACKEND_URL, { method: 'POST' })).json();
    return result;
};

export const SwitchUser = () => {
    const [switchState, setSwitchState] = useState(null);
    const [isLoading, setIsLoadingState] = useState(false);

    const switchUserClicked = async () => {
        setIsLoadingState(true);
        const switchResponse = await postSwitchUser();
        setSwitchState(switchResponse);
        setIsLoadingState(false);
    };

    return (
        <div>
            <button onClick={switchUserClicked}>Switch Energy</button>
            {
                isLoading && <LoadingSpinner/>
            }
            {
                !isLoading && switchState && (
                    switchState.success
                        ? <div>Switch successfully!</div>
                        : <div>Failed to switch</div>
                )
            }
        </div>
    );
};
