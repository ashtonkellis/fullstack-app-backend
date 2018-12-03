import { startServer, stopServer } from '../src/app';
import superagent from 'superagent';

const PORT = 4000;
const apiURL = 'localhost:4000'

beforeAll(() => startServer(PORT));
afterAll(stopServer);

describe('app', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });

  it('should receive text on a get to /', async () => {
    const response = await superagent.get(`${apiURL}/`);
    expect(response.status).toBe(200);
    expect(response.text).toBe('Server Home');
  });

  test('Receive 404 page on bad path', async () => {
    const response = await superagent.get(`${apiURL}/BADPATH`)
    expect(response.text).toContain('Oops! Route not found')
  });

  test('200 GET /content', async () => {
    const response = await superagent.get(`${apiURL}/content`);
    expect(response.status).toBe(200);
    expect(response.text).toContain('My Deck of Stuff');
  });

  test('200 GET /test', async () => {
    const response = await superagent.get(`${apiURL}/test`);
    expect(response.status).toBe(200);
    expect(response.text).toContain('HELLO FROM test.ejs');
  });

  test('200 GET /hello.html', async () => {
    const response = await superagent.get(`${apiURL}/hello.html`);
    expect(response.status).toBe(200);
    expect(response.text).toContain('Hello from hello.html')
  });
});
