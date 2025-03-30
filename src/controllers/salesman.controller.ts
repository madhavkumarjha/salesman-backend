import { Request, Response } from 'express';
import Salesman, { ISalesman } from '../models/salesman.model';

// Create a new salesman
export const createSalesman = async (req: Request, res: Response) => {
  try {
    const salesman: ISalesman = new Salesman(req.body);
    await salesman.save();
    res.status(201).json(salesman);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

// Get all salesmen
export const getAllSalesmen = async (req: Request, res: Response) => {
  try {
    const salesmen = await Salesman.find();
    res.json(salesmen);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Get a single salesman by ID
export const getSalesmanById = async (req: Request, res: Response):Promise<void> => {
  try {
    const salesman = await Salesman.findById(req.params.id);
    if (!salesman) {
      res.status(404).json({ message: 'Salesman not found' });
      return
    }
    res.json(salesman);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Update a salesman
export const updateSalesman = async (req: Request, res: Response):Promise<void> => {
  try {
    const salesman = await Salesman.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!salesman) {
      res.status(404).json({ message: 'Salesman not found' });
      return
    }
    res.json(salesman);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

// Delete a salesman
export const deleteSalesman = async (req: Request, res: Response):Promise<void> => {
  try {
    const salesman = await Salesman.findByIdAndDelete(req.params.id);
    if (!salesman) {
     res.status(404).json({ message: 'Salesman not found' });
     return
    }
    res.json({ message: 'Salesman deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};