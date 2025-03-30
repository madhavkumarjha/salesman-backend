import { Router } from 'express';
import {
  createSalesman,
  getAllSalesmen,
  getSalesmanById,
  updateSalesman,
  deleteSalesman
} from '../controllers/salesman.controller';

const router = Router();

router.post('/', createSalesman);
router.get('/', getAllSalesmen);
router.get('/:id', getSalesmanById);
router.put('/:id', updateSalesman);
router.delete('/:id', deleteSalesman);

export default router;