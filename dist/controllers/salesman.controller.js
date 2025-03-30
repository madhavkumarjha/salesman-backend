"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSalesman = exports.updateSalesman = exports.getSalesmanById = exports.getAllSalesmen = exports.createSalesman = void 0;
const salesman_model_1 = __importDefault(require("../models/salesman.model"));
// Create a new salesman
const createSalesman = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salesman = new salesman_model_1.default(req.body);
        yield salesman.save();
        res.status(201).json(salesman);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createSalesman = createSalesman;
// Get all salesmen
const getAllSalesmen = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salesmen = yield salesman_model_1.default.find();
        res.json(salesmen);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllSalesmen = getAllSalesmen;
// Get a single salesman by ID
const getSalesmanById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salesman = yield salesman_model_1.default.findById(req.params.id);
        if (!salesman) {
            res.status(404).json({ message: 'Salesman not found' });
            return;
        }
        res.json(salesman);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getSalesmanById = getSalesmanById;
// Update a salesman
const updateSalesman = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salesman = yield salesman_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!salesman) {
            res.status(404).json({ message: 'Salesman not found' });
            return;
        }
        res.json(salesman);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateSalesman = updateSalesman;
// Delete a salesman
const deleteSalesman = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salesman = yield salesman_model_1.default.findByIdAndDelete(req.params.id);
        if (!salesman) {
            res.status(404).json({ message: 'Salesman not found' });
            return;
        }
        res.json({ message: 'Salesman deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteSalesman = deleteSalesman;
