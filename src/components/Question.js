import React from 'react';
import { Table, Header } from 'semantic-ui-react';

export default function Question({ description, responses }) {
  const validResponses = responses ? responses.filter((response) => response.response_content !== '') : [];
  const total = validResponses.reduce((acc, response) => acc + parseInt(response.response_content), 0)
  const rating = (total !== 0 && validResponses.length > 0) ? (total / validResponses.length).toFixed(1) : 0;

  return (
    <Table.Row>
      <Table.Cell data-testid="question"><Header>{ description}</Header></Table.Cell>
      <Table.Cell data-testid="rating" singleLine  textAlign='center'><Header>{ rating }</Header></Table.Cell>
    </Table.Row>
  );
}
