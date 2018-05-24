const mock = require('../../../platform/testing/e2e/mock-helpers');

export const folders = {
  data: [
    {
      attributes: {
        count: 3,
        folderId: 0,
        name: 'Inbox',
        systemFolder: true,
        unreadCount: 0
      },
      id: '0',
      links: {
        self: 'http://www.example.com/v0/messaging/health/folders/0'
      },
      type: 'folders'
    },

    {
      attributes: {
        count: 3,
        folderId: -2,
        name: 'Drafts',
        systemFolder: true,
        unreadCount: 3
      },
      id: '-2',
      links: {
        self: 'http://www.example.com/v0/messaging/health/folders/-2'
      },
      type: 'folders'
    },

    {
      attributes: {
        count: 5,
        folderId: -1,
        name: 'Sent',
        systemFolder: true,
        unreadCount: 0
      },
      id: '-1',
      links: {
        self: 'http://www.example.com/v0/messaging/health/folders/-1'
      },
      type: 'folders'
    },

    {
      attributes: {
        count: 0,
        folderId: -3,
        name: 'Deleted',
        systemFolder: true,
        unreadCount: 0
      },
      id: '-3',
      links: {
        self: 'http://www.example.com/v0/messaging/health/folders/-3'
      },
      type: 'folders'
    },

    {
      attributes: {
        count: 1,
        folderId: 123,
        name: 'Test Folder 1',
        systemFolder: false,
        unreadCount: 0
      },
      id: '123',
      links: {
        self: 'http://www.example.com/v0/messaging/health/folders/123'
      },
      type: 'folders'
    },

    {
      attributes: {
        count: 2,
        folderId: 456,
        name: 'Test Folder 2',
        systemFolder: false,
        unreadCount: 0
      },
      id: '456',
      links: {
        self: 'http://www.example.com/v0/messaging/health/folders/456'
      },
      type: 'folders'
    },
  ],

  links: {
    first: 'http://www.example.com/v0/messaging/health/folders?page=1&per_page=100',
    last: 'http://www.example.com/v0/messaging/health/folders?page=1&per_page=100',
    next: null,
    prev: null,
    self: 'http://www.example.com/v0/messaging/health/folders?per_page=100'
  },

  meta: {
    pagination: {
      currentPage: 1,
      perPage: 100,
      totalEntries: 7,
      totalPages: 1
    }
  }
};

// Inbox messages
export const messages = {
  data: [
    {
      attributes: {
        attachment: true,
        body: null,
        category: 'MEDICATIONS',
        messageId: 123,
        readReceipt: 'READ',
        recipientId: 1,
        recipientName: 'Veteran',
        senderId: 2,
        senderName: 'Clinician',
        sentDate: '2016-12-21T05:54:26.000Z',
        subject: 'Prescription Request'
      },
      id: '123',
      links: {
        self: 'http://www.example.com/v0/messaging/health/messages/123'
      },
      type: 'messages'
    },

    {
      attributes: {
        attachment: true,
        body: null,
        category: 'APPOINTMENTS',
        messageId: 456,
        readReceipt: 'READ',
        recipientId: 1,
        recipientName: 'Veteran',
        senderId: 2,
        senderName: 'Clinician',
        sentDate: '2016-11-15T18:33:05.000Z',
        subject: 'Appointment Schedule'
      },
      id: '456',
      links: {
        self: 'http://www.example.com/v0/messaging/health/messages/456'
      },
      type: 'messages'
    },

    {
      attributes: {
        attachment: true,
        body: null,
        category: 'TEST_RESULTS',
        messageId: 789,
        readReceipt: 'READ',
        recipientId: 1,
        recipientName: 'Veteran',
        senderId: 2,
        senderName: 'Clinician',
        sentDate: '2016-11-15T18:33:05.000Z',
        subject: 'Question About Test Results'
      },
      id: '789',
      links: {
        self: 'http://www.example.com/v0/messaging/health/messages/789'
      },
      type: 'messages'
    }
  ],

  links: {
    first: 'http://www.example.com/v0/messaging/health/folders/0/messages?page=1&per_page=10',
    last: 'http://www.example.com/v0/messaging/health/folders/0/messages?page=1&per_page=10',
    next: null,
    prev: null,
    self: 'http://www.example.com/v0/messaging/health/folders/0/messages?'
  },

  meta: {
    pagination: {
      currentPage: 1,
      perPage: 10,
      totalEntries: 2,
      totalPages: 1
    },
    sort: {
      sentDate: 'DESC'
    }
  }
};

// First message in Inbox
export const message = {
  data: {
    attributes: {
      attachment: true,
      body: 'Reply 3',
      category: 'MEDICATIONS',
      messageId: 123,
      readReceipt: 'READ',
      recipientId: 1,
      recipientName: 'Veteran',
      senderId: 2,
      senderName: 'Clinician',
      sentDate: '2016-12-21T05:54:26.000Z',
      subject: 'Prescription Request'
    },
    id: '123',
    links: {
      self: 'http://www.example.com/v0/messaging/health/messages/123'
    },
    relationships: {
      attachments: {
        data: [
          {
            id: '667987',
            type: 'attachments'
          }
        ]
      }
    },
    type: 'messages'
  },
  included: [
    {
      attributes: {
        messageId: 123,
        name: 'Attachment 2'
      },
      id: '12',
      links: {
        download: 'https://dev-api.vets.gov/v0/messaging/health/messages/123/attachments/12'
      },
      type: 'attachments'
    }
  ]
};

// Draft
export const draft = {
  data: {
    attributes: {
      attachment: false,
      body: 'Draft body.',
      category: 'MEDICATIONS',
      messageId: 1024,
      readReceipt: null,
      recipientId: 2,
      recipientName: 'Clinician',
      senderId: 1,
      senderName: 'Veteran',
      sentDate: null,
      subject: 'Prescription Request'
    },
    id: '1024',
    links: {
      self: 'http://www.example.com/v0/messaging/health/messages/1024'
    },
    relationships: {},
    type: 'messages'
  },
  included: []
};

// Thread of first message in Inbox
export const thread = {
  data: [
    {
      id: '3',
      type: 'messages',
      attributes: {
        attachment: true,
        body: 'Reply 2',
        category: 'MEDICATIONS',
        messageId: 3,
        readReceipt: 'READ',
        recipientId: 2,
        recipientName: 'Clinician',
        senderId: 1,
        senderName: 'Veteran',
        sentDate: '2016-12-21T03:31:26.000Z',
        subject: 'Prescription Request'
      },
      links: {
        self: 'http://www.example.com/v0/messaging/health/messages/3'
      }
    },
    {
      id: '2',
      type: 'messages',
      attributes: {
        attachment: true,
        body: 'Reply 1',
        category: 'MEDICATIONS',
        messageId: 2,
        readReceipt: 'READ',
        recipientId: 1,
        recipientName: 'Veteran',
        senderId: 2,
        senderName: 'Clinician',
        sentDate: '2016-12-20T10:28:15.000Z',
        subject: 'Prescription Request'
      },
      links: {
        self: 'http://www.example.com/v0/messaging/health/messages/2'
      }
    },
    {
      id: '1',
      type: 'messages',
      attributes: {
        attachment: true,
        body: 'Message',
        category: 'MEDICATIONS',
        messageId: 1,
        readReceipt: 'READ',
        recipientId: 2,
        recipientName: 'Clinician',
        senderId: 1,
        senderName: 'Veteran',
        sentDate: '2016-12-18T05:54:26.000Z',
        subject: 'Prescription Request'
      },
      links: {
        self: 'http://www.example.com/v0/messaging/health/messages/1'
      }
    }
  ]
};

export const recipients = {
  data: [
    {
      attributes: {
        name: 'Triage Team 1',
        relationType: 'PATIENT',
        triageTeamId: 0
      },
      id: '0',
      type: 'triage_teams'
    },
    {
      attributes: {
        name: 'Triage Team 2',
        relationType: 'PATIENT',
        triageTeamId: 1
      },
      id: '1',
      type: 'triage_teams'
    },
    {
      attributes: {
        name: 'Triage Team 1',
        relationType: 'PATIENT',
        triageTeamId: 2
      },
      id: '2',
      type: 'triage_teams'
    }
  ],
  links: {
    first: 'https://dev-api.vets.gov/v0/messaging/health/recipients?page=1&per_page=10',
    last: 'https://dev-api.vets.gov/v0/messaging/health/recipients?page=1&per_page=10',
    next: null,
    prev: null,
    self: 'https://dev-api.vets.gov/v0/messaging/health/recipients?'
  },
  meta: {
    pagination: {
      currentPage: 1,
      perPage: 10,
      totalEntries: 1,
      totalPages: 1
    },
    sort: {
      name: 'ASC'
    }
  }
};

const preferences = {
  data: {
    id: '519e94995f48def4f0e38e5c13b85150c6bc0cc0c911324ef9a1ba7400e7ec37',
    type: 'messaging_preferences',
    attributes: {
      emailAddress: 'test@vets.gov',
      frequency: 'none'
    }
  }
};

// Create API routes
export function initApplicationSubmitMock(token) {
  mock(token, {
    path: '/v0/messaging/health/folders',
    verb: 'get',
    value: folders,
  });

  mock(token, {
    path: '/v0/messaging/health/folders/0',
    verb: 'get',
    value: {
      data: {
        ...folders.data[0],
      }
    }
  });

  mock(token, {
    path: '/v0/messaging/health/folders/0/messages',
    verb: 'get',
    value: messages,
  });

  mock(token, {
    path: '/v0/messaging/health/messages',
    verb: 'post',
    value: message,
  });

  mock(token, {
    path: '/v0/messaging/health/messages/123',
    verb: 'get',
    value: message,
  });

  mock(token, {
    path: '/v0/messaging/health/messages/1',
    verb: 'get',
    value: {
      data: {
        ...thread.data[2],
      }
    },
  });

  mock(token, {
    path: '/v0/messaging/health/messages/123/thread',
    verb: 'get',
    value: thread,
  });

  mock(token, {
    path: '/v0/messaging/health/recipients',
    verb: 'get',
    value: recipients,
  });

  mock(token, {
    path: '/v0/messaging/health/preferences',
    verb: 'get',
    value: preferences,
  });

  mock(token, {
    path: '/v0/messaging/health/preferences',
    verb: 'put',
    value: preferences,
  });
}
