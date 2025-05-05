import WebSocket from "ws";
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3001;
const wss = new WebSocket.Server({ port }, () => {
  console.log(`WebSocket ativo na porta ${port}`);
});

wss.on('connection', (ws) => {
  console.log('-- Cliente conectado --');
  ws.send('Seja bem-vindo!');

  ws.on('message', (msg) => {
    console.log(`-- Recebido --: ${msg}`);
    ws.send(`Eco: ${msg}`);
  });

  ws.on('close', () => console.log('-- Cliente desconectado --'));
});
