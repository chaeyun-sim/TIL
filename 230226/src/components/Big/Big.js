import {Calendar} from 'react-big-calendar'
import { momentLocalizer } from 'react-big-calendar'
import moment from 'moment';

const events = {
  starts: new Date(2023, 2, 26, 17, 50),
  ends: new Date(2023, 2, 26, 18, 0),
  allday: false,
  title: 'new Event'
}

const Big = () => {
    moment.locale('ko-KR');
    const localizer = momentLocalizer(moment);

    return (
        <Calendar
          localizer={localizer}
          events={events}
          style={{ height: 500 }}
        />
    )
}

export default Big;