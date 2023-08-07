import { PersonalDetails } from '../components';
import { DIRECTION_COLUMN } from '../helpers/constants';
import { person } from '../mocks';

export function App() {
  return (
    <>
      <PersonalDetails data={person} />
      <PersonalDetails data={person} direction={DIRECTION_COLUMN} />
    </>
  );
}
