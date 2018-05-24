import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';

import { YourClaimsPage } from '../../containers/YourClaimsPage';

describe('<YourClaimsPage>', () => {
  it('should render tabs', () => {
    const claims = [];
    const routeParams = {
      showClosedClaims: true
    };
    const tree = SkinDeep.shallowRender(
      <YourClaimsPage
        route={routeParams}
        list={claims}/>
    );
    expect(tree.everySubTree('MainTabNav').length).to.equal(1);
  });
  it('should render sort select ', () => {
    const claims = [];
    const routeParams = {
      showClosedClaims: true
    };
    const tree = SkinDeep.shallowRender(
      <YourClaimsPage
        route={routeParams}
        list={claims}/>
    );
    const sortDiv = tree.subTree('claims-list-sort');
    expect(sortDiv).to.exist;
  });
  it('should render loading div', () => {
    const changePage = sinon.spy();
    const getClaims = sinon.spy();
    const page = 1;
    const pages = 2;
    const claims = [];

    const tree = SkinDeep.shallowRender(
      <YourClaimsPage
        claimsLoading
        appealsLoading
        claims={claims}
        page={page}
        pages={pages}
        getClaims={getClaims}
        changePage={changePage}/>
    );
    expect(tree.everySubTree('LoadingIndicator').length).to.equal(1);
  });
  it('should render loading div if one is loading and no appeals', () => {
    const changePage = sinon.spy();
    const getClaims = sinon.spy();
    const page = 1;
    const pages = 2;
    const claims = [];

    const tree = SkinDeep.shallowRender(
      <YourClaimsPage
        claimsLoading
        claims={claims}
        page={page}
        pages={pages}
        getClaims={getClaims}
        changePage={changePage}/>
    );
    expect(tree.everySubTree('LoadingIndicator').length).to.equal(1);
  });
  it('should render claims list and loading indicator if claims is still loading', () => {
    const changePage = sinon.spy();
    const getClaims = sinon.spy();
    const page = 1;
    const pages = 2;
    const claims = [{}, {}];

    const tree = SkinDeep.shallowRender(
      <YourClaimsPage
        claimsLoading
        list={claims}
        page={page}
        pages={pages}
        getClaims={getClaims}
        route={{ showClosedClaims: false }}
        changePage={changePage}/>
    );
    expect(tree.everySubTree('ClaimsListItem').length).to.equal(2);
    expect(tree.everySubTree('LoadingIndicator').length).to.equal(1);
  });
  it('should render sync warning', () => {
    const changePage = sinon.spy();
    const getClaims = sinon.spy();
    const page = 1;
    const pages = 2;
    const claims = [];

    const tree = SkinDeep.shallowRender(
      <YourClaimsPage
        list={claims}
        page={page}
        pages={pages}
        getClaims={getClaims}
        route={{ showClosedClaims: false }}
        synced={false}
        changePage={changePage}/>
    );
    expect(tree.everySubTree('ClaimSyncWarning')).not.to.be.empty;
  });
  it('should not render error message when loading', () => {
    const changePage = sinon.spy();
    const getClaims = sinon.spy();
    const page = 1;
    const pages = 2;
    const claims = [];

    const tree = SkinDeep.shallowRender(
      <YourClaimsPage
        loading
        list={claims}
        page={page}
        pages={pages}
        getClaims={getClaims}
        route={{ showClosedClaims: false }}
        synced={false}
        changePage={changePage}/>
    );

    expect(tree.everySubTree('ClaimsAppealsUnavailable')).to.be.empty;
    expect(tree.everySubTree('ClaimsUnavailable')).to.be.empty;
    expect(tree.everySubTree('ClaimsUnauthorized')).to.be.empty;
    expect(tree.everySubTree('AppealsUnavailable')).to.be.empty;
  });

  it('should render error message when claims & appeals are unavailable', () => {
    const changePage = sinon.spy();
    const getClaims = sinon.spy();
    const page = 1;
    const pages = 2;
    const claims = [];

    const tree = SkinDeep.shallowRender(
      <YourClaimsPage
        canAccessAppeals
        canAccessClaims
        appealsAvailable={false}
        claimsAvailable={false}
        list={claims}
        page={page}
        pages={pages}
        getClaims={getClaims}
        route={{ showClosedClaims: false }}
        synced={false}
        changePage={changePage}/>
    );

    expect(tree.everySubTree('ClaimsAppealsUnavailable')).not.to.be.empty;
    expect(tree.everySubTree('ClaimsUnavailable')).to.be.empty;
    expect(tree.everySubTree('ClaimsUnauthorized')).to.be.empty;
    expect(tree.everySubTree('AppealsUnavailable')).to.be.empty;
  });

  it('should render error message when only claims are unavailable', () => {
    const changePage = sinon.spy();
    const getClaims = sinon.spy();
    const page = 1;
    const pages = 2;
    const claims = [];

    const tree = SkinDeep.shallowRender(
      <YourClaimsPage
        canAccessClaims
        claimsAvailable={false}
        list={claims}
        page={page}
        pages={pages}
        getClaims={getClaims}
        route={{ showClosedClaims: false }}
        synced={false}
        changePage={changePage}/>
    );

    expect(tree.everySubTree('ClaimsAppealsUnavailable')).to.be.empty;
    expect(tree.everySubTree('ClaimsUnavailable')).not.to.be.empty;
    expect(tree.everySubTree('ClaimsUnauthorized')).to.be.empty;
    expect(tree.everySubTree('AppealsUnavailable')).to.be.empty;
  });

  it('should render error message when claims are unauthorized', () => {
    const changePage = sinon.spy();
    const getClaims = sinon.spy();
    const page = 1;
    const pages = 2;
    const claims = [];

    const tree = SkinDeep.shallowRender(
      <YourClaimsPage
        canAccessClaims
        claimsAvailable
        claimsAuthorized={false}
        list={claims}
        page={page}
        pages={pages}
        getClaims={getClaims}
        route={{ showClosedClaims: false }}
        synced={false}
        changePage={changePage}/>
    );

    expect(tree.everySubTree('ClaimsAppealsUnavailable')).to.be.empty;
    expect(tree.everySubTree('ClaimsUnavailable')).to.be.empty;
    expect(tree.everySubTree('ClaimsUnauthorized')).not.to.be.empty;
    expect(tree.everySubTree('AppealsUnavailable')).to.be.empty;
  });

  it('should render no claims message', () => {
    const changePage = sinon.spy();
    const getClaims = sinon.spy();
    const page = 1;
    const pages = 2;
    const claims = [];

    const tree = SkinDeep.shallowRender(
      <YourClaimsPage
        list={claims}
        page={page}
        pages={pages}
        getClaims={getClaims}
        route={{ showClosedClaims: false }}
        changePage={changePage}/>
    );
    expect(tree.everySubTree('NoClaims').length).to.equal(1);
  });

  it('should render claims list and pagination', () => {
    const changePage = sinon.spy();
    const getClaims = sinon.spy();
    const page = 1;
    const pages = 2;
    const claims = [{}, {}];

    const tree = SkinDeep.shallowRender(
      <YourClaimsPage
        list={claims}
        page={page}
        pages={pages}
        getClaims={getClaims}
        route={{ showClosedClaims: false }}
        changePage={changePage}/>
    );
    expect(tree.everySubTree('ClaimsListItem').length).to.equal(2);
    expect(tree.subTree('Pagination').props.page).to.equal(page);
    expect(tree.subTree('Pagination').props.pages).to.equal(pages);
  });
  it('should render 30 day notice', () => {
    const changePage = sinon.spy();
    const getClaims = sinon.spy();
    const page = 1;
    const pages = 2;
    const claims = [{}, {}];

    const tree = SkinDeep.shallowRender(
      <YourClaimsPage
        unfilteredClaims={claims}
        unfilteredAppeals={claims}
        list={claims}
        page={page}
        pages={pages}
        show30DayNotice
        getClaims={getClaims}
        route={{}}
        changePage={changePage}/>
    );
    expect(tree.everySubTree('ClosedClaimMessage')).not.to.be.empty;
  });
  it('should not render 30 day notice', () => {
    const changePage = sinon.spy();
    const getClaims = sinon.spy();
    const page = 1;
    const pages = 2;
    const claims = [{}, {}];

    const tree = SkinDeep.shallowRender(
      <YourClaimsPage
        list={claims}
        page={page}
        pages={pages}
        getClaims={getClaims}
        route={{}}
        changePage={changePage}/>
    );
    expect(tree.everySubTree('ClosedClaimMessage')).to.be.empty;
  });
  it('should not render 30 day notice if on closed tab', () => {
    const changePage = sinon.spy();
    const getClaims = sinon.spy();
    const page = 1;
    const pages = 2;
    const claims = [{}, {}];

    const tree = SkinDeep.shallowRender(
      <YourClaimsPage
        list={claims}
        page={page}
        pages={pages}
        getClaims={getClaims}
        route={{ showClosedClaims: true }}
        changePage={changePage}/>
    );
    expect(tree.everySubTree('ClosedClaimMessage')).to.be.empty;
  });
});
