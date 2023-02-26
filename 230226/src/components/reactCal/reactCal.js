import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ReactCal = () => {
  return (
    <div>
      <Calendar value={new Date()} />
    </div>
  )
};

export default ReactCal;