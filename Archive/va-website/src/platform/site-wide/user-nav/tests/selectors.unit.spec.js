import { selectUserGreeting } from '../selectors';
import { expect } from 'chai';

describe('User navigation selectors', () => {
  describe('selectUserGreeting', () => {
    it('should return email', () => {
      const result = selectUserGreeting({
        user: {
          profile: {
            email: 'test@test.gov'
          }
        }
      });

      expect(result).to.equal('test@test.gov');
    });
    it('should return session name', () => {
      window.sessionStorage.userFirstName = 'Joe';
      const result = selectUserGreeting({
        user: {
          profile: {
            userFullName: {},
            email: 'test@test.gov'
          }
        }
      });

      expect(result).to.equal('Joe');
    });
    it('should return profile name', () => {
      window.sessionStorage.userFirstName = 'Joe';
      const result = selectUserGreeting({
        user: {
          profile: {
            userFullName: {
              first: 'Jane'
            },
            email: 'test@test.gov'
          }
        }
      });

      expect(result).to.equal('Jane');
      delete window.sessionStorage.userFirstName;
    });
  });
});
