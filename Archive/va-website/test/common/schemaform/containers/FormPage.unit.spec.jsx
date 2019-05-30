import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';
import sinon from 'sinon';

import { FormPage } from '../../../../src/applications/common/schemaform/containers/FormPage';

describe('Schemaform <FormPage>', () => {
  const location = {
    pathname: '/testing/0'
  };

  it('should render', () => {
    const route = {
      pageConfig: {
        pageKey: 'testPage',
        schema: {},
        uiSchema: {},
        errorMessages: {},
        title: ''
      },
      pageList: [
        {
          path: 'testing'
        }
      ]
    };
    const form = {
      pages: {
        testPage: {
          schema: {},
          uiSchema: {},
        }
      },
      data: {}
    };
    const user = {
      profile: {
        savedForms: []
      },
      login: {
        currentlyLoggedIn: true
      }
    };

    const tree = SkinDeep.shallowRender(
      <FormPage form={form} route={route} user={user} location={location}/>
    );

    expect(tree.everySubTree('SchemaForm')).not.to.be.empty;
    expect(tree.everySubTree('ProgressButton').length).to.equal(2);
  });
  describe('should handle', () => {
    let tree;
    let setData;
    let router;
    let onSubmit;
    let form;
    let route;
    let user;
    beforeEach(() => {
      setData = sinon.spy();
      onSubmit = sinon.spy();
      router = {
        push: sinon.spy()
      };
      route = {
        pageConfig: {
          pageKey: 'testPage',
          schema: {},
          uiSchema: {},
          errorMessages: {},
          title: ''
        },
        pageList: [
          {
            path: 'previous-page'
          },
          {
            path: 'testing',
            pageKey: 'testPage'
          },
          {
            path: 'next-page'
          }
        ]
      };
      form = {
        pages: {
          testPage: {
            schema: {},
            uiSchema: {},
          }
        },
        data: {},
        testPage: {
          schema: {},
          uiSchema: {},
          data: {}
        }
      };
      user = {
        profile: {
          savedForms: []
        },
        login: {
          currentlyLoggedIn: false
        }
      };

      tree = SkinDeep.shallowRender(
        <FormPage
          router={router}
          setData={setData}
          form={form}
          user={user}
          onSubmit={onSubmit}
          location={location}
          route={route}/>
      );
    });
    it('change', () => {
      const newData = {};
      const autoSave = sinon.spy();
      const instance = tree.getMountedInstance();
      instance.debouncedAutoSave = autoSave;
      instance.onChange(newData);

      expect(setData.calledWith('testPage', newData));
    });
    it('submit', () => {
      tree.getMountedInstance().onSubmit({});

      expect(router.push.calledWith('next-page'));
    });
    it('back', () => {
      tree.getMountedInstance().goBack();

      expect(router.push.calledWith('previous-page'));
    });
  });
  it('should go back to the beginning if current page isn\'t found', () => {
    const route = {
      pageConfig: {
        pageKey: 'testPage',
        schema: {},
        uiSchema: {},
        errorMessages: {},
        title: ''
      },
      pageList: [
        {
          path: 'first-page'
        },
        {
          path: 'previous-page'
        },
        {
          path: 'testing',
          pageKey: 'testPage'
        }
      ]
    };
    const form = {
      pages: {
        testPage: {
          depends: () => false,
          schema: {},
          uiSchema: {},
        }
      },
      data: {}
    };
    const user = {
      profile: {
        savedForms: []
      },
      login: {
        currentlyLoggedIn: false
      }
    };
    const router = {
      push: sinon.spy()
    };

    const tree = SkinDeep.shallowRender(
      <FormPage
        router={router}
        form={form}
        user={user}
        route={route}
        location={location}/>
    );

    tree.getMountedInstance().goBack();

    expect(router.push.calledWith('first-page'));
  });
  it('should render array page', () => {
    const route = {
      pageConfig: {
        pageKey: 'testPage',
        showPagePerItem: true,
        arrayPath: 'arrayProp',
        errorMessages: {},
        title: ''
      },
      pageList: [
        {
          path: 'testing'
        }
      ]
    };
    const form = {
      pages: {
        testPage: {
          schema: {
            properties: {
              arrayProp: {
                items: [{}]
              }
            }
          },
          uiSchema: {
            arrayProp: {
              items: {}
            }
          }
        }
      },
      data: {
        arrayProp: [{}]
      }
    };
    const user = {
      profile: {
        savedForms: []
      },
      login: {
        currentlyLoggedIn: false
      }
    };

    const tree = SkinDeep.shallowRender(
      <FormPage
        form={form}
        user={user}
        route={route}
        params={{ index: 0 }}
        location={location}/>
    );

    expect(tree.subTree('SchemaForm').props.schema).to.equal(form.pages.testPage.schema.properties.arrayProp.items[0]);
    expect(tree.subTree('SchemaForm').props.uiSchema).to.equal(form.pages.testPage.uiSchema.arrayProp.items);
    expect(tree.subTree('SchemaForm').props.data).to.equal(form.data.arrayProp[0]);
  });
  it('should handle change in array page', () => {
    const setData = sinon.spy();
    const route = {
      pageConfig: {
        pageKey: 'testPage',
        showPagePerItem: true,
        arrayPath: 'arrayProp',
        errorMessages: {},
        title: ''
      },
      pageList: [
        {
          path: 'testing'
        }
      ]
    };
    const form = {
      pages: {
        testPage: {
          schema: {
            properties: {
              arrayProp: {
                items: [{}]
              }
            }
          },
          uiSchema: {
            arrayProp: {
              items: {}
            }
          }
        }
      },
      data: {
        arrayProp: [{}]
      }
    };
    const user = {
      profile: {
        savedForms: []
      },
      login: {
        currentlyLoggedIn: false
      }
    };

    const tree = SkinDeep.shallowRender(
      <FormPage
        setData={setData}
        form={form}
        user={user}
        route={route}
        params={{ index: 0 }}
        location={location}/>
    );

    tree.getMountedInstance().onChange({ test: 2 });

    expect(setData.firstCall.args[0]).to.eql({
      arrayProp: [
        {
          test: 2
        }
      ]
    });
  });
  it('should update data when submitting on array page', () => {
    const setData = sinon.spy();
    const route = {
      pageConfig: {
        pageKey: 'testPage',
        showPagePerItem: true,
        arrayPath: 'arrayProp',
        errorMessages: {},
        title: ''
      },
      pageList: [
        {
          path: 'testing'
        }
      ]
    };
    const form = {
      pages: {
        testPage: {
          schema: {
            properties: {
              arrayProp: {
                items: [{}]
              }
            }
          },
          uiSchema: {
            arrayProp: {
              items: {}
            }
          }
        }
      },
      data: {
        arrayProp: [{}]
      }
    };
    const user = {
      profile: {
        savedForms: []
      },
      login: {
        currentlyLoggedIn: false
      }
    };
    const router = {
      push: sinon.spy()
    };

    const tree = SkinDeep.shallowRender(
      <FormPage
        setData={setData}
        router={router}
        form={form}
        user={user}
        route={route}
        location={location}
        params={{ index: 0 }}/>
    );

    tree.getMountedInstance().onSubmit({ formData: { test: 2 } });

    expect(setData.firstCall.args[0]).to.eql({
      arrayProp: [
        {
          test: 2
        }
      ]
    });
  });
});
