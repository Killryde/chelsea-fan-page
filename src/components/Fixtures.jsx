import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function Fixtures() {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    async function fetchFixtures() {
      const response = await fetch('https://api.football-data.org/v2/teams/61/matches?status=SCHEDULED', {
        headers: {
          'X-Auth-Token': '92f3671cf3b645fcbd38d0e1b8387a79',
        },
      });
      const data = await response.json();
      setFixtures(data.matches);
    }

    fetchFixtures();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Upcoming Fixtures</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Date</th>
            <th>Competition</th>
            <th>Home Team</th>
            <th>Away Team</th>
          </tr>
        </thead>
        <tbody>
          {fixtures.map((fixture) => (
            <tr key={fixture.id}>
              <td>{new Date(fixture.utcDate).toLocaleDateString()}</td>
              <td>{fixture.competition.name}</td>
              <td>{fixture.homeTeam.name}</td>
              <td>{fixture.awayTeam.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Fixtures;