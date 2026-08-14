const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: 'TechNova API - Online',
    version: '1.0.0'
  });
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'technova-api',
    version: '1.0.0'
  });
});

app.get('/info', (req, res) => {
  res.json({
    empresa: 'TechNova',
    projeto: 'API de Gerenciamento de Pedidos',
    equipe: 'Platform Engineering',
    ambiente: process.env.NODE_ENV || 'development'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
