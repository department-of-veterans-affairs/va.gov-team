import { expect } from 'chai';
import { isTab, setFocus, setPageFocus } from '../../utils/page';

describe('Page utils:', () => {
  describe('isTab', () => {
    it('should detect tab urls', () => {
      expect(isTab('testing/details')).to.be.true;
      expect(isTab('testing/files')).to.be.true;
      expect(isTab('testing/status')).to.be.true;
      expect(isTab('testing/turn-in-evidence')).to.be.false;
    });
  });
  describe('setFocus', () => {
    it('should focus on element', () => {
      const mainDiv = document.createElement('div');
      mainDiv.setAttribute('id', 'main');
      document.body.appendChild(mainDiv);
      setFocus('#main');
      expect(document.activeElement.id).to.equal('main');
      expect(mainDiv.tabIndex).to.equal(-1);
      document.body.removeChild(mainDiv);
    });
  });
  describe('setPageFocus', () => {
    it('should focus on selector', () => {
      const div = document.createElement('div');
      div.classList.add('testing');
      document.body.appendChild(div);
      setPageFocus('.testing');
      expect(document.activeElement.classList.contains('testing')).to.be.true;
      expect(div.tabIndex).to.equal(-1);
      document.body.removeChild(div);
    });
  });
});
