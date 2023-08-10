import { PersonalDetails, Skills } from '../components';
import { DIRECTION_COLUMN } from '../helpers/constants';
import { person, skills } from '../mocks';

export function App() {
  return (
    <>
      <Skills data={skills} />
      <Skills data={skills} direction={DIRECTION_COLUMN} />
      <PersonalDetails data={person} />
      <PersonalDetails data={person} direction={DIRECTION_COLUMN} />
    </>
  );
}
