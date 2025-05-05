import { WebSocketServer } from 'ws';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

const wss = new WebSocketServer({ port }, () => {
    console.log(`✅ WebSocket rodando na porta ${port}`);
});

wss.on('connection', (ws) => {
  console.log('🔗 Cliente conectado');
  ws.send('👋 Seja bem-vindo!');

  ws.on('message', (msg) => {
    console.log(`📩 Mensagem recebida: ${msg}`);
    ws.send(`📢 Eco: ${msg}`);
  });

  ws.on('close', () => console.log('❌ Cliente desconectado'));
});
