import PropTypes from 'prop-types';
import React from 'react';

class GlossaryList extends React.Component {
  render() {
    const termsList = [];
    let tKey = 0;
    const terms = this.props.terms;

    Object.keys(terms).forEach(o => {
      const id = terms[o].term.toLowerCase().replace(/\s/g, '');
      termsList.push(<p className="glossary-title" id={id} key={++tKey}>{terms[o].term}</p>);
      termsList.push(<p className="glossary-body" key={++tKey}>{terms[o].definition}</p>);
    });

    let title;
    if (this.props.title) {
      title = <h2 className="rx-pgroup-title va-h-ruled">{this.props.title}</h2>;
    }

    // check if the array has length 1, then render a certain way
    // else render the way it is

    if (termsList.length === 2) {
      return (
        <div>
          <h3 className="modalTitle">Glossary: {termsList[0]}</h3>
          {termsList[1]}
        </div>
      );
    }
    return (
      <section className="rx-glossary-section">
        {title}
        <div className="rx-glossary">
          {termsList}
        </div>
      </section>
    );
  }
}

GlossaryList.propTypes = {
  title: PropTypes.string,
  terms: PropTypes.arrayOf(PropTypes.shape({
    term: PropTypes.string.isRequired,
    definition: PropTypes.string.isRequired
  })).isRequired,
};

export default GlossaryList;
