import React from 'react';
import { Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import { NetworkErrorBoundary } from 'rest-hooks';
import Survey from './../components/Survey';
import Error from './../components/Error';

function SurveyDetails ({ history, match }) {
  const surveyId = match.params.id;

  const navigateToList = () => {
    history.push('/')
  };

  return (
    <React.Fragment>
      <NetworkErrorBoundary fallbackComponent={Error}>
        <Survey id={surveyId} />
      </NetworkErrorBoundary>
      <Button data-testid="backButton" className="ui teal button" onClick={navigateToList}><i class="left arrow icon"></i>Home</Button>
    </React.Fragment>
  )
}

export default withRouter(SurveyDetails);
