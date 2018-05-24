export const INIT_DISMISSED_ANNOUNCEMENTS = 'INIT_DISMISSED_ANNOUNCEMENTS';
export const DISMISS_ANNOUNCEMENT = 'DISMISS_ANNOUNCEMENT';

const localAnnouncements = (() => {
  const DISMISSED_ANNOUNCEMENTS = 'DISMISSED_ANNOUNCEMENTS';

  return (appTitle) => {
    const fromLocalStorage = window.localStorage[DISMISSED_ANNOUNCEMENTS];
    let parsed = [];

    if (fromLocalStorage) {
      try {
        parsed = JSON.parse(fromLocalStorage);
      } catch (err) {
        // Value will default to an empty array
      }
    }

    if (appTitle) {
      parsed.push(appTitle);
      window.localStorage[DISMISSED_ANNOUNCEMENTS] = JSON.stringify(parsed);
    }

    return parsed;
  };
})();

export function initDismissedAnnouncements() {
  return {
    type: INIT_DISMISSED_ANNOUNCEMENTS,
    dismissedAnnouncements: localAnnouncements()
  };
}

export function dismissAnnouncement(announcement) {
  localAnnouncements(announcement);
  return {
    type: DISMISS_ANNOUNCEMENT,
    announcement
  };
}
