import { models } from "mongoose";
import { Schema, model } from "mongoose";

const TransactionSchema = new Schema({
  stripeId: { type: String, required: true, unique: true },
  plan: { type: String },
  amount: { type: Number, required: true },
  credits: { type: Number },
  buyer: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Transaction =
  models?.Transaction || model("Transaction", TransactionSchema);

export default Transaction;
