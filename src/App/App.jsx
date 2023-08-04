import { PersonalDetails } from '../components';
import { DIRECTION_COLUMN } from '../helpers/constants';

const person = {
  name: 'Billy Pearson',
  occupation: 'Front-end developer',
  email: 'billy@example.com',
  phone: '(+603) 546 624 342',
  image: 'billy-pearson.png',
  description: [
    <p key='p-1'>
      Self-motivated developer, who is willing to learn and create outstanding
      UI applications.
    </p>,
    <p key='p-2'>
      Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
      feugiat malesuada molestie.
    </p>,
  ],
};

export function App() {
  return (
    <>
      <PersonalDetails data={person} />
      <PersonalDetails data={person} direction={DIRECTION_COLUMN} />
    </>
  );
}
