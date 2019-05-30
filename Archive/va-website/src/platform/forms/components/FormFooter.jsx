import React from 'react';

import AskVAQuestions from './AskVAQuestions';

export default class FormFooter extends React.Component {
  render() {
    const { formConfig, currentLocation } = this.props;
    const GetFormHelp = formConfig.getHelp;
    const trimmedPathname = currentLocation.pathname.replace(/\/$/, '');
    const isConfirmationPage = trimmedPathname.endsWith('confirmation');

    return (
      <div>
        {!isConfirmationPage && <AskVAQuestions>
          {!!GetFormHelp && <GetFormHelp/>}
        </AskVAQuestions>}
      </div>
    );
  }
}
