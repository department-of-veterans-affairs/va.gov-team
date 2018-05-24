import PropTypes from 'prop-types';
import React from 'react';

export class Programs extends React.Component {

  constructor(props) {
    super(props);
    this.renderProgramLabel = this.renderProgramLabel.bind(this);

    const { institution } = props;
    this.programs = {
      yr: {
        modal: 'yribbon',
        text: 'Yellow Ribbon',
        link: {
          href: `http://www.benefits.va.gov/gibill/yellow_ribbon/2016/states/${institution.state}.asp`,
          text: 'See rates',
        }
      },

      studentVeteran: {
        modal: 'vetgroups',
        text: 'Student Veteran Group',
        link: {
          href: institution.studentVeteranLink,
          text: 'Site',
        }
      },

      poe: {
        modal: 'poe',
        text: 'Principles of Excellence',
        link: false
      },

      eightKeys: {
        modal: 'eightKeys',
        text: '8 Keys to Veteran Success',
        link: false
      },

      vetSuccessName: {
        modal: 'vsoc',
        text: 'VetSuccess on Campus',
        link: {
          href: institution.vetSuccessEmail && `mailto:${institution.vetSuccessEmail}`,
          text: `Email ${institution.vetSuccessName}`,
        }
      },

      dodmou: {
        modal: 'ta',
        text: 'Military Tuition Assistance (TA)',
        link: false
      },
    };
  }

  renderProgramLabel(programKey, available) {
    const program = this.programs[programKey];
    const icon = available ? 'fa fa-check' : 'fa fa-remove';

    const link = available && program.link && program.link.href && (
      <span>
        &nbsp;(<a href={program.link.href} target="_blank">
          {program.link.text}
        </a>)
      </span>
    ) || '';

    const label = program.modal ?
      (<a onClick={this.props.onShowModal.bind(this, program.modal)}>
        {program.text}
      </a>) : program.text;

    return <div key={programKey}><i className={icon}/> {label} {link}</div>;
  }

  render() {
    const it = this.props.institution;
    const programs = Object.keys(this.programs);
    const available = programs.filter((key) => !!it[key] === true);
    const notAvailable = programs.filter((key) => !!it[key] === false);
    return (
      <div className="programs row">
        {
          available.length > 0 && (
            <div className="usa-width-one-half medium-6 large-6 column">
              <h3>Available at this campus</h3>
              {available.map((program) => this.renderProgramLabel.bind(this, program, true)())}
              <br/>
            </div>
          )
        }
        {
          notAvailable.length > 0 && (
            <div className="usa-width-one-half medium-6 large-6 column">
              <h3>Not available at this campus</h3>
              {notAvailable.map((program) => this.renderProgramLabel.bind(this, program, false)())}
            </div>
          )
        }
      </div>
    );
  }
}

Programs.propTypes = {
  institution: PropTypes.object,
  onShowModal: PropTypes.func
};

export default Programs;
