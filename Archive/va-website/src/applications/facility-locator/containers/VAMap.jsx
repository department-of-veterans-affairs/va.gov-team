import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { updateSearchQuery, searchWithAddress, searchWithBounds, fetchVAFacility } from '../actions';
import { map, find, compact, isEmpty, debounce } from 'lodash';
import { Map, TileLayer, FeatureGroup } from 'react-leaflet';
import { mapboxClient, mapboxToken } from '../components/MapboxClient';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import isMobile from 'ismobilejs';
import CemeteryMarker from '../components/markers/CemeteryMarker';
import HealthMarker from '../components/markers/HealthMarker';
import BenefitsMarker from '../components/markers/BenefitsMarker';
import VetCenterMarker from '../components/markers/VetCenterMarker';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ResultsList from '../components/ResultsList';
import SearchControls from '../components/SearchControls';
import MobileSearchResult from '../components/MobileSearchResult';
import { facilityTypes } from '../config';

class VAMap extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.zoomOut = debounce(() => this.refs.map.leafletElement.zoomOut(0.5), 2500, {
      leading: true,
    });

    this.listener = browserHistory.listen((location) => {
      this.syncStateWithLocation(location);
    });
  }

  componentDidMount() {
    const { location, currentQuery } = this.props;

    // navigating back from a facility page preserves previous search results
    if (!isEmpty(this.props.facilities)) {
      return;
    }

    this.props.updateSearchQuery({
      facilityType: location.query.facilityType,
      serviceType: location.query.serviceType,
    });
    if (location.query.address) {
      this.props.updateSearchQuery({
        searchString: location.query.address,
      });
      this.props.searchWithAddress({
        searchString: location.query.address,
        context: location.query.context,
      });
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((currentPosition) => {
        this.props.updateSearchQuery({
          position: currentPosition.coords,
        });

        this.reverseGeocode(currentPosition.coords);
      });
    } else {
      this.props.searchWithBounds(currentQuery.bounds, currentQuery.facilityType, currentQuery.serviceType, currentQuery.currentPage);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { currentQuery } = this.props;
    const newQuery = nextProps.currentQuery;

    if (currentQuery.position !== newQuery.position) {
      this.updateUrlParams({
        location: `${newQuery.position.latitude},${newQuery.position.longitude}`,
        context: newQuery.context,
        address: newQuery.searchString,
      });
    }

    // reset to page 1 if zoom level changes
    if ((currentQuery.zoomLevel !== newQuery.zoomLevel) && (currentQuery.currentPage !== 1)) {
      this.props.updateSearchQuery({
        currentPage: 1,
      });
    }

    if (newQuery.bounds && (currentQuery.bounds !== newQuery.bounds) && !newQuery.searchBoundsInProgress) {
      this.props.searchWithBounds(newQuery.bounds, newQuery.facilityType, newQuery.serviceType, newQuery.currentPage);
    }

    if (!isEmpty(nextProps.facilities) || newQuery.inProgress) {
      this.zoomOut.cancel();
    }
  }

  componentDidUpdate(prevProps) {
    const { currentQuery } = prevProps;
    const newQuery = this.props.currentQuery;

    const shouldUpdateSearchQuery = isEmpty(this.props.facilities) &&
      !newQuery.inProgress &&
      currentQuery.inProgress &&
      newQuery.bounds &&
      parseInt(newQuery.zoomLevel, 10) > 2 &&
      !newQuery.error;

    if (shouldUpdateSearchQuery) {
      if (isMobile.any) {
        this.props.updateSearchQuery({
          bounds: [
            newQuery.bounds[0] - 0.5,
            newQuery.bounds[1] - 0.5,
            newQuery.bounds[2] + 0.5,
            newQuery.bounds[3] + 0.5,
          ],
        });
      } else {
        this.zoomOut();
      }
    }

    if (!isEmpty(this.props.facilities) || currentQuery.inProgress) {
      this.zoomOut.cancel();
    }
  }

  componentWillUnmount() {
    // call the func returned by browserHistory.listen to unbound the listener
    this.listener();
  }

  syncStateWithLocation(location) {
    if (
      location.query.address &&
      this.props.currentQuery.searchString !== location.query.address && !this.props.currentQuery.inProgress
    ) {
      this.props.searchWithAddress({
        searchString: location.query.address,
        context: location.query.context,
      });
    }
  }

  // pushes coordinates to URL so that map link is useful for sharing
  // TODO (bshyong): try out existing query-string npm library
  updateUrlParams = (params) => {
    const { location, currentQuery } = this.props;
    const queryParams = compact(map({
      ...location.query,
      zoomLevel: currentQuery.zoomLevel,
      page: currentQuery.currentPage,
      address: currentQuery.searchString,
      facilityType: currentQuery.facilityType,
      serviceType: currentQuery.serviceType,
      ...params,
    }, (v, k) => {
      if (v) { return `${k}=${v}`; }
      return null;
    })).join('&');

    browserHistory.push(`/facilities${location.pathname}?${queryParams}`);
  }

  // takes obj of form {latitude: 0, longitude: 0}
  reverseGeocode(position) {
    mapboxClient.geocodeReverse(position, {
      types: 'address',
    }, (err, res) => {
      const coordinates = res.features[0].center;
      const placeName = res.features[0].place_name;
      const zipCode = find(res.features[0].context, (v) => {
        return v.id.includes('postcode');
      }).text;

      this.props.updateSearchQuery({
        bounds: res.features[0].bbox || [
          coordinates[0] - 0.5,
          coordinates[1] - 0.5,
          coordinates[0] + 0.5,
          coordinates[1] + 0.5,
        ],
        searchString: placeName,
        context: zipCode,
      });

      this.updateUrlParams({
        address: placeName,
        context: zipCode,
      });
    });
  }

  handleSearch = () => {
    const { currentQuery } = this.props;

    this.updateUrlParams({
      address: currentQuery.searchString,
    });

    this.props.searchWithAddress(currentQuery);
  }

  handleBoundsChanged = () => {
    const { currentQuery } = this.props;
    const { position } = currentQuery;

    let center = {
      lat: position.latitude,
      lng: position.longitude,
    };
    let boundsArray = currentQuery.bounds;
    let zoom = currentQuery.zoomLevel;

    if (this.refs.map) {
      center = this.refs.map.leafletElement.getCenter();
      zoom = this.refs.map.leafletElement.getZoom();
      const bounds = this.refs.map.leafletElement.getBounds();

      boundsArray = [
        bounds._southWest.lng,
        bounds._southWest.lat,
        bounds._northEast.lng,
        bounds._northEast.lat,
      ];
    }

    this.props.updateSearchQuery({
      bounds: boundsArray,
      position: {
        latitude: center.lat,
        longitude: center.lng,
      },
      zoomLevel: zoom,
    });
  }

  centerMap = () => {
    setTimeout(() => {
      if (this.refs.map && this.refs.facilityMarkers) {
        this.refs.map.leafletElement.fitBounds(
          this.refs.facilityMarkers.leafletElement.getBounds()
        );
      }
    }, 1);
  }

  renderFacilityMarkers() {
    const { facilities } = this.props;

    // need to use this because Icons are rendered outside of Router context (Leaflet manipulates the DOM directly)
    const linkAction = (id, e) => {
      e.preventDefault();
      this.context.router.push(`facility/${id}`);
    };

    return facilities.map(f => {
      const iconProps = {
        key: f.id,
        position: [f.attributes.lat, f.attributes.long],
        onClick: () => {
          const searchResult = document.getElementById(f.id);
          if (searchResult) {
            Array.from(document.getElementsByClassName('facility-result')).forEach((e) => {
              e.classList.remove('active');
            });
            searchResult.classList.add('active');
            document.getElementById('searchResultsContainer').scrollTop = searchResult.offsetTop;
          }
          this.props.fetchVAFacility(f.id, f);
        },
      };

      const popupContent = (
        <div>
          <a onClick={linkAction.bind(this, f.id)}>
            <h5>{f.attributes.name}</h5>
          </a>
          <p>Facility type: <strong>{facilityTypes[f.attributes.facilityType]}</strong></p>
        </div>
      );

      switch (f.attributes.facilityType) {
        case 'va_health_facility':
          return (
            <HealthMarker {...iconProps}>
              {popupContent}
            </HealthMarker>
          );
        case 'va_cemetery':
          return (
            <CemeteryMarker {...iconProps}>
              {popupContent}
            </CemeteryMarker>
          );
        case 'va_benefits_facility':
          return (
            <BenefitsMarker {...iconProps}>
              {popupContent}
            </BenefitsMarker>
          );
        case 'vet_center':
          return (
            <VetCenterMarker {...iconProps}>
              {popupContent}
            </VetCenterMarker>
          );
        default: return null;
      }
    });
  }

  renderSelectedFacility() {
    const { selectedFacility } = this.props;

    if (selectedFacility) {
      return (
        <div className="mobile-search-result">
          <MobileSearchResult facility={selectedFacility}/>
        </div>
      );
    }

    return null;
  }

  renderMobileView() {
    const coords = this.props.currentQuery.position;
    const position = [coords.latitude, coords.longitude];
    const { currentQuery, facilities, pagination } = this.props;

    return (
      <div>
        <div className="columns small-12">
          <SearchControls onChange={this.props.updateSearchQuery} currentQuery={currentQuery} onSearch={this.handleSearch} isMobile/>
          <Tabs onSelect={this.centerMap}>
            <TabList>
              <Tab className="small-6 tab">View List</Tab>
              <Tab className="small-6 tab">View Map</Tab>
            </TabList>
            <TabPanel>
              <div className="facility-search-results">
                <p>Search Results near <strong>“{currentQuery.context}”</strong></p>
                <ResultsList facilities={facilities} pagination={pagination} isMobile currentQuery={currentQuery} updateUrlParams={this.updateUrlParams}/>
              </div>
            </TabPanel>
            <TabPanel>
              <Map ref="map" center={position} zoom={parseInt(currentQuery.zoomLevel, 10)} style={{ width: '100%', maxHeight: '55vh' }} scrollWheelZoom={false} zoomSnap={0.5} zoomDelta={0.5} onMoveEnd={this.handleBoundsChanged} onLoad={this.handleBoundsChanged} onViewReset={this.handleBoundsChanged}>
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=${mapboxToken}`}
                  attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'/>
                <FeatureGroup ref="facilityMarkers">
                  {this.renderFacilityMarkers()}
                </FeatureGroup>
              </Map>
              {this.renderSelectedFacility()}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }

  renderDesktopView() {
    // defaults to White House coordinates initially
    const { currentQuery, facilities, pagination } = this.props;
    const coords = this.props.currentQuery.position;
    const position = [coords.latitude, coords.longitude];

    return (
      <div className="desktop-container">
        <div>
          <SearchControls onChange={this.props.updateSearchQuery} currentQuery={currentQuery} onSearch={this.handleSearch}/>
        </div>
        <div className="row">
          <div className="columns usa-width-one-third medium-4 small-12" style={{ maxHeight: '75vh', overflowY: 'auto' }} id="searchResultsContainer">
            <div className="facility-search-results">
              <div>
                <ResultsList facilities={facilities} pagination={pagination} currentQuery={currentQuery} updateUrlParams={this.updateUrlParams}/>
              </div>
            </div>
          </div>
          <div className="columns usa-width-two-thirds medium-8 small-12" style={{ minHeight: '75vh' }}>
            <Map ref="map" center={position} zoomSnap={0.5} zoomDelta={0.5} zoom={parseInt(currentQuery.zoomLevel, 10)} style={{ minHeight: '75vh', width: '100%' }} scrollWheelZoom={false} onMoveEnd={this.handleBoundsChanged}>
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=${mapboxToken}`}
                attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'/>
              <FeatureGroup ref="facilityMarkers">
                {this.renderFacilityMarkers()}
              </FeatureGroup>
            </Map>
          </div>
        </div>
      </div>
    );
  }

  render() {
    // render mobile view for mobile devices
    return (
      <div>
        <div className="title-section">
          <h1>Facility and Service Locator</h1>
        </div>
        {isMobile.any ? this.renderMobileView() : this.renderDesktopView()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentQuery: state.searchQuery,
    facilities: state.facilities.facilities,
    pagination: state.facilities.pagination,
    selectedFacility: state.facilities.selectedFacility,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchVAFacility,
    updateSearchQuery,
    searchWithAddress,
    searchWithBounds,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VAMap);
