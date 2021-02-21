import React from 'react';
import { Table, Message, Header } from 'semantic-ui-react';
import Question from './Question';

export default function QuestionList({ questions }) {
  return (
    (questions && questions.length > 0) ?
    <Table celled data-testid="questionList">
      <Table.Header className="ui inverted teal table">
        <Table.Row>
          <Table.HeaderCell className="ui teal inverted segment"><Header>Question</Header></Table.HeaderCell>
          <Table.HeaderCell className="ui teal inverted segment"><Header>Rating</Header></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {
          questions.map((question, index) =>
            <Question
              key={index}
              description={question.description}
              responses={question.survey_responses}
              />
          )
        }
      </Table.Body>
    </Table>
    : <Message warning data-testid="message">No question available for this topic.</Message>
  );
}
