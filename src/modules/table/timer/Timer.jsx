import './timer.scss';

export default function Timer({ sec, min }) {
  return (
    <div className="timer">
      00:{min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
    </div>
  );
}
