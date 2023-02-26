import Calendar from 'react-awesome-calendar';
// import { Scheduler } from "@aldabil/react-scheduler";

const events = [
  {
    event_id: 1,
    color: 'red',
    from: new Date(2023, 2, 26, 17, 0),
    to: new Date(2023, 2, 27, 17, 0),
    title: 'New Event'
  }
]

console.log(new Date(1995, 11, 17, 3, 23, 0))

const AweSome = () => {
  const clickHandler = () => {
    console.log('heya')
  };

  return (
    <div style={{ marginLeft: '70px', marginRight: '70px'}}>
      <Calendar events={events} onClickEvent={clickHandler} />  
      {/* onChange, onClickTimeLink, onClickEvent, header ref */}
    </div>
  )
};

export default AweSome;