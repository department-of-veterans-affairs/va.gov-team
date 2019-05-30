import config from './config';

export function selectAnnouncement(state) {
  const announcements = state.announcements;
  let announcement = null;

  if (announcements.isInitialized) {
    const path = document.location.pathname;
    announcement = config.announcements.find(a => a.paths.test(path));

    if (announcements.dismissed.includes(announcement.name) || announcement.disabled) {
      announcement = null;
    }
  }

  return announcement;
}
