import { Link } from 'react-router-dom';

type Contributors = {
  id: number;
  name: string;
  link: string;
};

type Sponsors = {
  id: number;
  name: string;
  link: string;
};

const Contributors: Array<Contributors> = [
  {
    id: 1,
    name: 'Bobri',
    link: 'https://github.com/MitevDobromir',
  },
  {
    id: 2,
    name: 'George',
    link: 'https://github.com/beurslf',
  },
  {
    id: 3,
    name: 'Boii',
    link: 'https://github.com/AlexanderTsoiGeorgiev',
  },
  {
    id: 4,
    name: 'Pyetko',
    link: 'https://github.com/Pepkin',
  },
  {
    id: 5,
    name: 'Mertoooo',
    link: 'https://github.com/meroo893',
  },
];

const Sponsors: Array<Sponsors> = [
  {
    id: 1,
    name: 'TBI Bank',
    link: 'https://tbibank.bg/',
  },
  {
    id: 2,
    name: 'Soft Serve',
    link: 'https://www.softserveinc.com/en-us',
  },
  {
    id: 3,
    name: 'Gameloft',
    link: 'https://www.gameloft.com/',
  },
  {
    id: 4,
    name: 'FIT TU-Sofia',
    link: 'http://mtf.tu-sofia.bg/',
  },
];

export default function Footer() {
  return (
    <div className="flex justify-around py-4">
      <div className="">
        <span className="text-primary-foreground text-xl font-bold underline">
          Contributors
        </span>
        <ul className="flex flex-col gap-2">
          {Contributors.map((c) => (
            <li key={c.id} className="hover:underline">
              <Link to={c.link}>{c.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="text-primary-foreground text-xl font-bold underline">
          Sponsors
        </span>
        <ul className="flex flex-col gap-2">
          {Sponsors.map((s) => (
            <li key={s.id} className="hover:underline">
              <Link to={s.link}>{s.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
