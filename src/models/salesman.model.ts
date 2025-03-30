import { Schema, model, Document } from 'mongoose';

export interface ISalesman extends Document {
  name: string;
  email: string;
  phone: string;
  territory: string;
  salesTarget: number;
  achievedSales: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const salesmanSchema = new Schema<ISalesman>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    territory: { type: String, required: true },
    salesTarget: { type: Number, required: true, default: 0 },
    achievedSales: { type: Number, required: true, default: 0 },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default model<ISalesman>('Salesman', salesmanSchema);