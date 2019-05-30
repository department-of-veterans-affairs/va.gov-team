import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import FormNav from '../../../../src/applications/common/schemaform/components/FormNav';

describe('Schemaform FormNav', () => {
  it('should render current chapter data', () => {
    const formConfig = {
      chapters: {
        chapter1: {
          title: 'Testing',
          pages: {
            page1: {
              path: 'testing'
            }
          }
        },
        chapter2: {
          pages: {
            page2: {
              path: 'testing'
            }
          }
        },
        chapter3: {
          pages: {
            page3: {
              path: 'testing'
            }
          }
        }
      }

    };
    const currentPath = 'testing';

    const tree = SkinDeep.shallowRender(
      <FormNav
        formConfig={formConfig}
        currentPath={currentPath}/>
    );

    expect(tree.subTree('SegmentedProgressBar').props.total).to.equal(4);
    expect(tree.subTree('SegmentedProgressBar').props.current).to.equal(1);
    expect(tree.subTree('.nav-header').text()).to.equal('1 of 4 Testing');
  });
});
