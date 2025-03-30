"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const salesmanSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    territory: { type: String, required: true },
    salesTarget: { type: Number, required: true, default: 0 },
    achievedSales: { type: Number, required: true, default: 0 },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Salesman', salesmanSchema);
