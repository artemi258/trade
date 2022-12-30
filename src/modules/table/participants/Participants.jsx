import './participants.scss';
import user from '../../../JSON/users.json';
import Timer from '../timer/Timer';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Participants({ trigger }) {
  const arr = user.users.map((item) => item.name);
  const [random, setRandom] = useState();
  const [sec, setSec] = useState(59);
  const [min, setMin] = useState(1);

  if (sec < 0) {
    setMin((prev) => prev - 1);
    setSec(59);
  }
  if (min === 0 && sec === 0) {
    trigger(false);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setRandom(Math.floor(Math.random() * (arr.length - 1 - 0 + 1)) + 0);
    }, 3000);
    const secInterval = setInterval(() => {
      setSec((prev) => {
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(secInterval);
    };
  }, []);
  const users = user.users.map((item) => {
    return (
      <div key={item.name}>
        <li>
          {item.name === arr[random] ? <Timer sec={sec} min={min} /> : null}
        </li>
        <li>
          Участник №{item.number} <br />
          {item.name}
        </li>
        <li>{item.a} </li>
        <li>{item.b}</li>
        <li>{item.c}</li>
        <li>{item.d}</li>
        <li>
          {item.e.map((item) => (
            <div key={item}>{item} руб.</div>
          ))}
        </li>
      </div>
    );
  });
  return (
    <div className="participants">
      <ul className="participants__column">{users}</ul>
    </div>
  );
}
