import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';
import sinon from 'sinon';

import ObjectField from '../../../../src/applications/common/schemaform/fields/ObjectField';

describe('Schemaform: ObjectField', () => {
  it('should render', () => {
    const onChange = sinon.spy();
    const onBlur = sinon.spy();
    const schema = {
      type: 'object',
      properties: {
        test: {
          type: 'string'
        }
      }
    };
    const tree = SkinDeep.shallowRender(
      <ObjectField
        schema={schema}
        idSchema={{}}
        onChange={onChange}
        onBlur={onBlur}/>
    );

    expect(tree.everySubTree('shouldUpdate(SchemaField)')).not.to.be.empty;
  });
  it('should not render hidden items', () => {
    const onChange = sinon.spy();
    const onBlur = sinon.spy();
    const schema = {
      type: 'object',
      properties: {
        test: {
          'ui:hidden': true,
          type: 'string'
        }
      }
    };
    const tree = SkinDeep.shallowRender(
      <ObjectField
        schema={schema}
        idSchema={{}}
        onChange={onChange}
        onBlur={onBlur}/>
    );

    expect(tree.everySubTree('shouldUpdate(SchemaField)')).to.be.empty;
  });
  it('should render description', () => {
    const onChange = sinon.spy();
    const onBlur = sinon.spy();
    const schema = {
      properties: {
        test: {
          type: 'string'
        }
      }
    };
    const uiSchema = {
      'ui:description': 'Blah'
    };
    const tree = SkinDeep.shallowRender(
      <ObjectField
        uiSchema={uiSchema}
        schema={schema}
        idSchema={{}}
        formData={{}}
        onChange={onChange}
        onBlur={onBlur}/>
    );

    expect(tree.text()).to.contain('Blah');
  });
  it('should render jsx description', () => {
    const onChange = sinon.spy();
    const onBlur = sinon.spy();
    const schema = {
      properties: {
        test: {
          type: 'string'
        }
      }
    };
    const uiSchema = {
      'ui:description': <div className="test-class"/>
    };
    const tree = SkinDeep.shallowRender(
      <ObjectField
        uiSchema={uiSchema}
        schema={schema}
        idSchema={{}}
        formData={{}}
        onChange={onChange}
        onBlur={onBlur}/>
    );

    expect(tree.everySubTree('.test-class')).not.to.be.empty;
  });
  it('should render component description', () => {
    const onChange = sinon.spy();
    const onBlur = sinon.spy();
    const schema = {
      properties: {
        test: {
          type: 'string'
        }
      }
    };
    const uiSchema = {
      'ui:description': () => <div className="test-class"/>
    };
    const tree = SkinDeep.shallowRender(
      <ObjectField
        uiSchema={uiSchema}
        schema={schema}
        idSchema={{}}
        formData={{}}
        onChange={onChange}
        onBlur={onBlur}/>
    );

    expect(tree.text()).to.contain('uiDescription');
  });
  it('should render title', () => {
    const onChange = sinon.spy();
    const onBlur = sinon.spy();
    const schema = {
      properties: {
        test: {
          type: 'string'
        }
      }
    };
    const uiSchema = {
      'ui:title': 'Blah'
    };
    const tree = SkinDeep.shallowRender(
      <ObjectField
        uiSchema={uiSchema}
        schema={schema}
        idSchema={{}}
        formData={{}}
        onChange={onChange}
        onBlur={onBlur}/>
    );

    expect(tree.everySubTree('TitleField')).is.not.empty;
  });
  it('should render component title', () => {
    const schema = {
      properties: {
        test: {
          type: 'string'
        }
      }
    };
    const uiSchema = {
      'ui:title': () => <div className="test-class"/>
    };
    const tree = SkinDeep.shallowRender(
      <ObjectField
        uiSchema={uiSchema}
        schema={schema}
        idSchema={{}}
        formData={{}}
        onChange={f => f}
        onBlur={f => f}/>
    );

    expect(tree.text()).to.contain('uiTitle');
  });
  it('should hide expand under items when false', () => {
    const onChange = sinon.spy();
    const onBlur = sinon.spy();
    const schema = {
      type: 'object',
      properties: {
        test: {
          type: 'boolean'
        },
        test2: {
          type: 'string',
          'ui:collapsed': true
        }
      }
    };
    const uiSchema = {
      test2: {
        'ui:options': {
          expandUnder: 'test'
        }
      }
    };
    const formData = {
      test: false
    };
    const tree = SkinDeep.shallowRender(
      <ObjectField
        schema={schema}
        uiSchema={uiSchema}
        idSchema={{}}
        formData={formData}
        onChange={onChange}
        onBlur={onBlur}/>
    );

    expect(tree.everySubTree('ExpandingGroup')).not.to.be.empty;
    expect(tree.subTree('ExpandingGroup').props.open).to.be.false;
  });
  it('should not hide expand under items when true', () => {
    const onChange = sinon.spy();
    const onBlur = sinon.spy();
    const schema = {
      type: 'object',
      properties: {
        test: {
          type: 'boolean'
        },
        test2: {
          type: 'string'
        }
      }
    };
    const uiSchema = {
      test2: {
        'ui:options': {
          expandUnder: 'test'
        }
      }
    };
    const formData = {
      test: true
    };
    const tree = SkinDeep.shallowRender(
      <ObjectField
        schema={schema}
        uiSchema={uiSchema}
        idSchema={{}}
        formData={formData}
        onChange={onChange}
        onBlur={onBlur}/>
    );

    expect(tree.everySubTree('ExpandingGroup')).not.to.be.empty;
    expect(tree.subTree('ExpandingGroup').props.open).to.be.true;
  });
  it('should handle change', () => {
    const onChange = sinon.spy();
    const onBlur = sinon.spy();
    const schema = {
      type: 'object',
      properties: {
        test: {
          type: 'string'
        }
      }
    };
    const tree = SkinDeep.shallowRender(
      <ObjectField
        schema={schema}
        idSchema={{}}
        onChange={onChange}
        onBlur={onBlur}/>
    );

    tree.getMountedInstance().onPropertyChange('test')('value');

    expect(onChange.firstCall.args[0]).to.eql({
      test: 'value'
    });
  });
  it('should handle blur', () => {
    const onChange = sinon.spy();
    const onBlur = sinon.spy();
    const schema = {
      type: 'object',
      properties: {
        test: {
          type: 'string'
        }
      }
    };
    const tree = SkinDeep.shallowRender(
      <ObjectField
        schema={schema}
        idSchema={{}}
        onChange={onChange}
        onBlur={onBlur}/>
    );

    tree.getMountedInstance().onPropertyBlur('test')();

    expect(onBlur.firstCall.args[0]).to.eql(['test']);
  });
});
