import { expect } from 'chai';
import moment from 'moment';
import serviceStatus from '../config/serviceStatus';
import * as downtimeHelpers from '../util/helpers';

const pastDowntime = {
  attributes: {
    externalService: 'dslogon',
    startTime: moment().subtract(1, 'hour').toISOString(),
    endTime: moment().subtract(1, 'minute').toISOString()
  }
};

const activeDowntime = {
  attributes: {
    externalService: 'evss',
    startTime: moment().subtract(1, 'day').toISOString(),
    endTime: moment().add(1, 'day').toISOString()
  }
};

const distantFutureDowntime = {
  attributes: {
    externalService: 'vic',
    startTime: moment().add(1, 'day').toISOString(),
    endTime: moment().add(2, 'day').toISOString()
  }
};

const approachingDowntime = {
  attributes: {
    externalService: 'mvi',
    startTime: moment().add(10, 'minute').toISOString(),
    endTime: moment().add(1, 'day').toISOString()
  }
};

const lessUrgentApproachingDowntime = {
  attributes: {
    externalService: 'appeals',
    startTime: moment().add(15, 'minute').toISOString(),
    endTime: moment().add(1, 'day').toISOString()
  }
};

const maintenanceWindows = [
  pastDowntime,
  activeDowntime,
  distantFutureDowntime,
  approachingDowntime,
  lessUrgentApproachingDowntime
];

describe('getStatusForTimeframe', () => {
  it('assigns a status according to timeframe', () => {
    expect(
      downtimeHelpers.getStatusForTimeframe(pastDowntime.attributes.startTime, pastDowntime.attributes.endTime)
    ).to.equal(serviceStatus.ok);
    expect(
      downtimeHelpers.getStatusForTimeframe(activeDowntime.attributes.startTime, activeDowntime.attributes.endTime)
    ).to.equal(serviceStatus.down);
    expect(
      downtimeHelpers.getStatusForTimeframe(approachingDowntime.attributes.startTime, approachingDowntime.attributes.endTime)
    ).to.equal(serviceStatus.downtimeApproaching);
    expect(
      downtimeHelpers.getStatusForTimeframe(lessUrgentApproachingDowntime.attributes.startTime, lessUrgentApproachingDowntime.attributes.endTime)
    ).to.equal(serviceStatus.downtimeApproaching);
    expect(
      downtimeHelpers.getStatusForTimeframe(distantFutureDowntime.attributes.startTime, distantFutureDowntime.attributes.endTime)
    ).to.equal(serviceStatus.ok);
  });
});

describe('createServiceMap', () => {
  it('creates a map using the attributes.externalService property as keys', () => {
    const serviceMap = downtimeHelpers.createServiceMap(maintenanceWindows);
    const evss = serviceMap.get('evss');
    const vic = serviceMap.get('vic');
    const mvi = serviceMap.get('mvi');
    const appeals = serviceMap.get('appeals');

    expect(evss.status).to.equal(serviceStatus.down);
    expect(vic.status).to.equal(serviceStatus.ok);
    expect(mvi.status).to.equal(serviceStatus.downtimeApproaching);
    expect(appeals.status).to.equal(serviceStatus.downtimeApproaching);
  });
});

describe('getMostUrgentDowntime', () => {

  let serviceMap = null;

  before(() => {
    serviceMap = downtimeHelpers.createServiceMap(maintenanceWindows);
  });

  it('returns null when all services are ok', () => {
    expect(
      downtimeHelpers.getSoonestDowntime(serviceMap, ['dslogon', 'vic'])
    ).to.be.null;
  });

  it('returns the status with the soonest startTime and endTime that is not in the past', () => {
    const evss = downtimeHelpers.getSoonestDowntime(serviceMap, ['dslogon', 'evss', 'vic', 'mvi']);
    expect(evss.status).to.equal(serviceStatus.down);
    expect(evss.externalService).to.equal('evss');

    const mvi = downtimeHelpers.getSoonestDowntime(serviceMap, ['dslogon', 'vic', 'mvi', 'appeals']);
    expect(mvi.status).to.equal(serviceStatus.downtimeApproaching);
    expect(mvi.externalService).to.equal('mvi');

    const appeals = downtimeHelpers.getSoonestDowntime(serviceMap, ['dslogon', 'vic', 'appeals']);
    expect(appeals.status).to.equal(serviceStatus.downtimeApproaching);
    expect(appeals.externalService).to.equal('appeals');
  });
});
