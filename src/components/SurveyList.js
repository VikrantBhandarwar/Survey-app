import React from 'react';
import { useResource } from 'rest-hooks';
import { withRouter } from 'react-router-dom';
import { Card, Icon, Message, Label, Header } from 'semantic-ui-react'
import SurveyResource from './../resources/SurveyResource';

function SurveyList({ history }) {
  const surveys = useResource(SurveyResource.listShape(), {});

  return (
    <section>
      { surveys && surveys.length > 0 ?
        <Card.Group centered>
          {
            surveys.map(survey => {
              const surveyId = survey.pk()
              const navigateToSurvey = (history, surveyId) => {
                history.push(`/survey/${surveyId}`)
              }

              return (
      
                <Card data-testid="surveyCard" key={surveyId} onClick={(e) => navigateToSurvey(history, surveyId)} className="ui teal basic button" style={{ width:'400px'}}>
                  <Card.Content >
                    <Card.Header > <Header as="h2">{ survey.name }</Header></Card.Header>
                    <Card.Meta style={{paddingTop:'20px'}}><Label className="ui big label">Participation: { (survey.response_rate*100).toFixed(1) }%</Label></Card.Meta>
                  </Card.Content>
                  <Card.Content extra className="ui teal label">
                    <Icon name="user" />{ survey.participant_count }
                  </Card.Content>
                </Card>
                
              )
            })
          }
        </Card.Group>
        : <Message warning data-testid="errorMessage">There is no survey available.</Message>
      }
    </section>
  );
}

export default withRouter(SurveyList)
