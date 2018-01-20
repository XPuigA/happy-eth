import Ajax from '../../utils/Ajax.js';

export const UPDATE = 'UPDATE_TIMER';

export function updateValues(mainCurrency, destinationCurrencies) {
  return function d(dispatch) {
    Ajax.get(
      `https://min-api.cryptocompare.com/data/price?fsym=${mainCurrency}&tsyms=${destinationCurrencies.join(',')}`,
      {},
      (status, data) => {
        dispatch({ type: UPDATE, data });
      },
      () => {},
    );
  };
}
