import { PersonalDetails, Skills } from '../components';
import { DIRECTION_COLUMN } from '../helpers/constants';
import { person } from '../mocks';

export function App() {
  return (
    <>
      <Skills />
      <Skills direction={DIRECTION_COLUMN} />
      <PersonalDetails data={person} />
      <PersonalDetails data={person} direction={DIRECTION_COLUMN} />
    </>
  );
}
