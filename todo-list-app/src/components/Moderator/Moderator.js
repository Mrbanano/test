import { useState } from 'react';
import TicketForm from '../TicketForm';
import Profile from '../Profile';
import Subtitle from '../Subtitle';
import TicketsClean from '../TicketsClean';
import TicketsContainter from '../TicketsContainer';
import './Moderator.css';

const Moderator = () => {
  const ticketsFail = [
    {
      _id: '615a828c97dee4aa515c874b',
      subject: 'No puedo iniciar sesion x2',
      studen: 'Juan Perex',
      description:
        'Desde el jueves no puede entrar a la pagina por que no recuerda su con...',
      idTicketManager: '615a5d9a65ab3673fec9cbd4',
      ticketDate: '29/09/2021',
      Delete: false,
    },
    {
      _id: '615a828c97dee4aa515c874b',
      subject: 'No puedo iniciar sesion x4',
      studen: 'Juan Perex',
      description:
        'Desde el jueves no puede entrar a la pagina por que no recuerda su con...',
      idTicketManager: '615a5d9a65ab3673fec9cbd4',
      ticketDate: '29/09/2021',
      Delete: false,
    },
  ];

  const [haveTickets, sethaveTickets] = useState(ticketsFail);
  const [showFormTickets, setShowFormTickets] = useState(false);

  return (
    <div className="Moderator">
      <div className="Moderator-container">
        <div className="Moderator-content">
          <Profile
            setShowFormTickets={setShowFormTickets}
            showFormTickets={showFormTickets}
          />
          {showFormTickets === true && <TicketForm />}
          <Subtitle subtitle={'Tickets'} />
          {haveTickets.length > 0 ? (
            <TicketsContainter tickets={haveTickets} />
          ) : (
            <TicketsClean />
          )}
        </div>
      </div>
    </div>
  );
};

export default Moderator;
