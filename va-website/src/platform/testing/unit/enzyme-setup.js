/**
 * Adapter for enzyme configuration, imported in mocha.opts
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

