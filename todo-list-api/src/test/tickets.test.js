const moongose = require('mongoose');
const supertest = require('supertest');
const Ticket = require('../models/Tickets');
const app = require('../app');

const api = supertest(app);

const initialTickets = [
  {
    subject: 'No puedo iniciar sesion',
    studen: 'Juan Perex',
    description:
      'Desde el jueves no puede entrar a la pagina por que no recuerda su contraseña',
    idTicketManager: 5,
    ticketDate: '29-09-2021',
  },
  {
    subject: 'No puedo iniciar sesion x2',
    studen: 'Juan Perez',
    description:
      'Desde el martes no puede entrar a la pagina por que no recuerda su contraseña',
    idTicketManager: 5,
    ticketDate: '30/09/2021',
  },
];

beforeEach(async () => {
  await Ticket.deleteMany({});
  const ticket1 = new Ticket(initialTickets[0]);
  await ticket1.save();
  const ticket2 = new Ticket(initialTickets[1]);
  await ticket2.save();
});

describe('/Tickets request test', () => {
  it('Tickets are return as json', (done) => {
    api
      .get('/api/tickets')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it('there are two notes', async (done) => {
    const res = await api.get('/api/tickets');
    expect(res.body).toHaveLength(initialTickets.length);
  });
});

afterAll(() => {
  moongose.connection.close;
});
