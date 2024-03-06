import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoaed';
import upcomingEvents from '../../upcoming-events.json'
import { Container } from "./App.styled";


export const App = () => {
  return (
    <Container>
      <PageTitle text="24th Core World Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </Container>
  );
};
