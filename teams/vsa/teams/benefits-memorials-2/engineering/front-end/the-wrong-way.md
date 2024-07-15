# This is *not* the way
## What's here
Maybe not best practices, but workarounds for some weird stuff

## Local copay issues
Sometimes things get weird in a bad way with local mock users and they won't or can't get their copay information, so a neat little work around is to modify `copay.js`'s `getStatements` to pull from the local mock data.

Edit `src/applications/financial-status-report/actions/copays.js` with the following:
```
import copays from '../tests/e2e/fixtures/mocks/copays.json';

export const getStatements = async dispatch => {
  dispatch({ type: MCP_STATEMENTS_FETCH_INIT });

  const { data } = copays;
  return dispatch({
    type: MCP_STATEMENTS_FETCH_SUCCESS,
    statements: transformStatementData(data),
  });
};
```

## Local gmt data issues
This is a little easier than populating the db in [the other doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/benefits-memorials-2/engineering/front-end/howto-local-gmt-db-update.md) which takes like 10 min total.

You can hard code the `gmtThreshold` value and `incomeUpperThreshold`/`assetThreshold`/`discretionaryIncomeThreshold` will auto calculate, or you can hard code those values as well if you want to test thresholds.


Edit `src/applications/financial-status-report/actions/geographicMeansThreshold.js` with the following:
```
  const gmtThreshold = 78300;
  // incomeUpperThreshold is 150% of the GMT
  const incomeUpperThreshold = gmtThreshold * INCOME_UPPER_PERCENTAGE;
  // assetThreshold is 6.5% of the GMT
  const assetThreshold = gmtThreshold * ASSET_PERCENTAGE;
  // discretionaryStatus is 1.25% of the GMT
  const discretionaryIncomeThreshold =
    gmtThreshold * DISCRETIONARY_INCOME_PERCENTAGE;

  return {
    gmtThreshold: 78300,
    error: null,
    incomeUpperThreshold,
    assetThreshold,
    discretionaryIncomeThreshold,
  };
};
```

