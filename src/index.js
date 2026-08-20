const express = require('express');

const app = express();

// Configurações via variáveis de ambiente
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 5432;
const DB_NAME = process.env.DB_NAME || 'technova';

app.use(express.json());

// Rota principal — formato esperado pelo laboratório
app.get('/', (req, res) => {
  res.json({
    servico: 'TechNova API',
    status: 'online',
    banco: `${DB_HOST}:${DB_PORT}/${DB_NAME}`
  });
});

// Health check — formato esperado pelo laboratório
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime()
  });
});

// Informações adicionais da aplicação
app.get('/info', (req, res) => {
  res.json({
    empresa: 'TechNova',
    projeto: 'API de Gerenciamento de Pedidos',
    equipe: 'Platform Engineering',
    servico: 'technova-api',
    version: '1.0.0',
    ambiente: NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`TechNova API rodando na porta ${PORT}`);
  console.log(`Ambiente: ${NODE_ENV}`);
  console.log(`Banco de dados: ${DB_HOST}:${DB_PORT}/${DB_NAME}`);
});
