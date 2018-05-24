export const selectUser = (state) => state.user;
export const isLoggedIn = (state) => selectUser(state).login.currentlyLoggedIn;
export const selectProfile = (state) => selectUser(state).profile;
export const isProfileLoading = (state) => selectProfile(state).loading;
export const isLOA3 = (state) => selectProfile(state).loa.current === 3;
export const selectAvailableServices = (state) => selectProfile(state).services;
export function createIsServiceAvailableSelector(service) {
  return (state) => selectAvailableServices(state).includes(service);
}
