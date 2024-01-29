import express from 'express';
import { PedidoController } from '../adapter/driver/PedidoController';
import { ProdutoController } from '../adapter/driver/ProdutoController';
import { UsuarioController } from '../adapter/driver/UsuarioController';
import { autenticacaoMiddleware } from '../adapter/middleware/autenticacao.middleware';
import { ItensPedido } from '../core/domain/models/ItensPedido';
import { UsuarioUseCase } from '../core/domain/useCases/Usuario/UsuarioUseCase';
const router = express.Router();
// const usuarioUseCase = new UsuarioUseCase();
router.get('/', (req, res) => {
  res.status(200).send('OK');
});



export default router;
