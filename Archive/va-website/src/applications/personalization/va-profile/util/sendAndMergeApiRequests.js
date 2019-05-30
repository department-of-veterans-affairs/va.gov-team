import { apiRequest } from '../../../../platform/utilities/api';

export default async function sendAndMergeApiRequests(requestMap) {
  const props = Object.keys(requestMap);
  const requests = props.map(async prop => {
    const apiRoute = requestMap[prop];
    try {
      const response = await apiRequest(apiRoute);
      return response.data.attributes;
    } catch (error) {
      return { error };
    }
  });

  const responses = await Promise.all(requests);
  const result = {};

  props.forEach((prop, index) => {
    result[prop] = responses[index];
  });

  return result;
}
