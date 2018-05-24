import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import CropperController from '../../components/CropperController';

describe('<CropperController>', () => {
  beforeEach(() => {
    window.addEventListener = sinon.spy();
    window.removeEventListener = sinon.spy();
  });
  it('should render', () => {
    const tree = shallow(
      <CropperController src="test"/>
    );

    expect(tree.find('MoveRotateButton').length).to.equal(6);
    expect(tree.find('.cropper-control').length).to.equal(4);
  });
  it('should rotate', () => {
    const tree = shallow(
      <CropperController src="test"/>
    );

    const cropper = {
      rotate: sinon.spy(),
      getData: () => {
        return {
          width: 100
        };
      },
      getCanvasData: () => {
        return {
          width: 200,
          naturalWidth: 100
        };
      },
      getContainerData: () => {
        return {
          width: 100
        };
      },
      getCropBoxData: () => {
        return {
          width: 100,
          height: 100
        };
      },
      setCanvasData: sinon.spy()
    };
    tree.instance().cropper = cropper;

    tree.find('MoveRotateButton').at(4).props().onClick();

    const state = tree.state();

    expect(cropper.rotate.calledWith(-90)).to.be.true;
    expect(cropper.setCanvasData.called).to.be.true;
    expect(state.zoomMin).to.eql(2);
    expect(state.zoomValue).to.eql(2);

    cropper.rotate.reset();
    tree.find('MoveRotateButton').at(5).props().onClick();
    expect(cropper.rotate.calledWith(90)).to.be.true;
  });
  it('should zoom on button click', () => {
    const tree = shallow(
      <CropperController src="test"/>
    );

    const cropper = {
      rotate: sinon.spy(),
      getData: () => {
        return {
          width: 100
        };
      },
      getCanvasData: () => {
        return {
          width: 200,
          naturalWidth: 100
        };
      },
      getContainerData: () => {
        return {
          width: 100
        };
      },
      getCropBoxData: () => {
        return {
          width: 100,
          height: 100
        };
      },
      setCanvasData: sinon.spy(),
      zoom: sinon.spy()
    };
    tree.instance().cropper = cropper;

    tree.setState({
      zoomValue: 2,
      zoomMax: 3,
      zoomMin: 1
    });

    tree.find('.cropper-control').at(0).props().onClick();

    expect(cropper.zoom.calledWith(-0.1)).to.be.true;

    tree.find('.cropper-control').at(1).props().onClick();
    expect(cropper.zoom.calledWith(0.1)).to.be.true;
  });
  it('should not zoom outside of boundaries', () => {
    const tree = shallow(
      <CropperController src="test"/>
    );

    const cropper = {
      zoomTo: sinon.spy()
    };
    tree.instance().cropper = cropper;

    tree.setState({
      zoomMax: 3,
      zoomMin: 1
    });

    const event = {
      preventDefault: sinon.spy(),
      detail: {
        ratio: 5
      }
    };

    tree.instance().onZoom(event);

    expect(cropper.zoomTo.calledWith(3)).to.be.true;
    expect(event.preventDefault.called).to.be.true;
  });
  it('should update instance after zooming', () => {
    const tree = shallow(
      <CropperController src="test"/>
    );

    const cropper = {
      rotate: sinon.spy(),
      getData: () => {
        return {
          width: 100
        };
      },
      getCanvasData: () => {
        return {
          width: 200,
          naturalWidth: 100
        };
      },
      getContainerData: () => {
        return {
          width: 100
        };
      },
      getCropBoxData: () => {
        return {
          width: 100,
          height: 100
        };
      },
      setCanvasData: sinon.spy(),
      zoom: sinon.spy()
    };
    tree.instance().cropper = cropper;

    tree.setState({
      zoomValue: 2,
      zoomMax: 3,
      zoomMin: 1
    });

    tree.instance().onZoom({
      detail: {
        ratio: 1.5
      }
    });

    const state = tree.state();

    expect(state.zoomValue).to.eql(1.5);
  });
  describe('should move', () => {
    let cropper;
    let tree;
    beforeEach(() => {
      tree = shallow(
        <CropperController src="test"/>
      );

      cropper = {
        rotate: sinon.spy(),
        getData: () => {
          return {
            width: 400
          };
        },
        getCanvasData: () => {
          return {
            top: 10,
            left: 10,
            width: 200,
            naturalWidth: 100
          };
        },
        getContainerData: () => {
          return {
            width: 100
          };
        },
        getCropBoxData: () => {
          return {
            width: 100,
            height: 100
          };
        },
        setCanvasData: sinon.spy(),
        zoom: sinon.spy()
      };
      tree.instance().cropper = cropper;

      tree.setState({
        zoomValue: 1,
        zoomMax: 3,
        zoomMin: 0.5
      });
    });
    it('up without warning', () => {
      tree.find('MoveRotateButton').at(0).props().onClick();

      const state = tree.state();

      expect(state.warningMessage).to.eql('');
      expect(cropper.setCanvasData.firstCall.args[0].top).to.eql(5);
    });
    it('down without warning', () => {
      tree.find('MoveRotateButton').at(1).props().onClick();

      const state = tree.state();

      expect(state.warningMessage).to.eql('');
      expect(cropper.setCanvasData.firstCall.args[0].top).to.eql(15);
    });
    it('left without warning', () => {
      tree.find('MoveRotateButton').at(2).props().onClick();

      const state = tree.state();

      expect(state.warningMessage).to.eql('');
      expect(cropper.setCanvasData.firstCall.args[0].left).to.eql(5);
    });
    it('right without warning', () => {
      tree.find('MoveRotateButton').at(3).props().onClick();

      const state = tree.state();

      expect(state.warningMessage).to.eql('');
      expect(cropper.setCanvasData.firstCall.args[0].left).to.eql(15);
    });
    it('up with warning', () => {
      cropper.getCanvasData = () => {
        return {
          top: -51,
          left: 131,
          width: 363,
          height: 290
        };
      };
      cropper.getCropBoxData = () => {
        return {
          top: 0,
          left: 151,
          width: 240,
          height: 240
        };
      };

      tree.find('MoveRotateButton').at(0).props().onClick();

      const state = tree.state();

      expect(state.warningMessage).to.contain('farther up');
    });
    it('down with warning', () => {
      cropper.getCanvasData = () => {
        return {
          top: 0,
          left: 112,
          width: 399,
          height: 319
        };
      };
      cropper.getCropBoxData = () => {
        return {
          top: 0,
          left: 151,
          width: 240,
          height: 240
        };
      };

      tree.find('MoveRotateButton').at(1).props().onClick();

      const state = tree.state();

      expect(state.warningMessage).to.contain('farther down');
    });
    it('left with warning', () => {
      cropper.getCanvasData = () => {
        return {
          top: -5,
          left: -8,
          width: 399,
          height: 319
        };
      };
      cropper.getCropBoxData = () => {
        return {
          top: 0,
          left: 151,
          width: 240,
          height: 240
        };
      };

      tree.find('MoveRotateButton').at(2).props().onClick();

      const state = tree.state();

      expect(state.warningMessage).to.contain('farther left');
    });
    it('right with warning', () => {
      cropper.getCanvasData = () => {
        return {
          top: -5,
          left: 151,
          width: 399,
          height: 319
        };
      };
      cropper.getCropBoxData = () => {
        return {
          top: 0,
          left: 151,
          width: 240,
          height: 240
        };
      };

      tree.find('MoveRotateButton').at(3).props().onClick();

      const state = tree.state();

      expect(state.warningMessage).to.contain('farther right');
    });
    it('right with in frame warning', () => {
      cropper.getCanvasData = () => {
        return {
          top: 0,
          left: 151,
          width: 300,
          height: 240
        };
      };
      cropper.getCropBoxData = () => {
        return {
          top: 0,
          left: 151,
          width: 240,
          height: 240
        };
      };

      tree.find('MoveRotateButton').at(3).props().onClick();

      const state = tree.state();

      expect(state.warningMessage).to.contain('within the square frame');
    });
  });
  it('should set crop box on ready', () => {
    const tree = shallow(
      <CropperController src="test"/>
    );

    const cropper = {
      rotate: sinon.spy(),
      getData: () => {
        return {
          width: 100
        };
      },
      getCanvasData: () => {
        return {
          width: 200,
          naturalWidth: 100
        };
      },
      getContainerData: () => {
        return {
          width: 100
        };
      },
      getCropBoxData: () => {
        return {
          width: 100,
          height: 100
        };
      },
      setCanvasData: sinon.spy(),
      setCropBoxData: sinon.spy()
    };
    tree.instance().cropper = cropper;

    tree.instance().setCropBox();

    expect(cropper.setCropBoxData.firstCall.args[0]).to.deep.equal({
      top: 0,
      left: -70,
      width: 240,
      height: 240
    });
  });
  it('should stop resize listener when unmounting', () => {
    const tree = shallow(
      <CropperController src="test"/>
    );

    const instance = tree.instance();
    instance.componentWillUnmount();

    expect(window.removeEventListener.firstCall.args[0]).to.equal('resize');
    expect(instance.deboundedDetectWidth).to.be.null;
  });
  it('crop start should prevent default on disallowed actions', () => {
    const tree = shallow(
      <CropperController src="test"/>
    );

    const instance = tree.instance();
    const event = {
      preventDefault: sinon.spy(),
      detail: {
        action: 'nonsense'
      }
    };
    instance.onCropstart(event);

    expect(event.preventDefault.called).to.be.true;
  });
  it('crop start should not prevent default on allowed actions', () => {
    const tree = shallow(
      <CropperController src="test"/>
    );

    const instance = tree.instance();
    const event = {
      preventDefault: sinon.spy(),
      detail: {
        action: 'crop'
      }
    };
    instance.onCropstart(event);

    expect(event.preventDefault.called).to.be.false;
  });
  it('should call onPhotoCropped when done', () => {
    const onPhotoCropped = sinon.spy();
    const tree = shallow(
      <CropperController src="test" onPhotoCropped={onPhotoCropped}/>
    );

    const instance = tree.instance();
    const blob = {};
    const cropper = {
      getData: () => {
        return {
          width: 100
        };
      },
      getCroppedCanvas: () => {
        return {
          toBlob: callback => callback(blob)
        };
      }
    };
    instance.cropper = cropper;
    instance.onDone();

    expect(onPhotoCropped.calledWith(blob)).to.be.true;
  });
  it('should zoom on slider change', () => {
    const tree = shallow(
      <CropperController src="test"/>
    );

    const instance = tree.instance();
    const cropper = {
      zoomTo: sinon.spy()
    };
    instance.cropper = cropper;

    tree.find('[type="range"]').props().onChange({
      target: {
        value: 5
      }
    });

    expect(cropper.zoomTo.calledWith(5)).to.be.true;
  });
});
