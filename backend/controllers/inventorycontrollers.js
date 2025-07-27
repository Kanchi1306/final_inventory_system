// controllers/inventoryController.js

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Get all products
exports.getInventory = async (req, res) => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json(data);
};

// Add a new product
exports.addProduct = async (req, res) => {
  const { name, quantity, price } = req.body;
  const { data, error } = await supabase.from('products').insert([{ name, quantity, price }]);
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data[0]);
};

// Update product
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, quantity, price } = req.body;
  const { data, error } = await supabase.from('products').update({ name, quantity, price }).eq('id', id);
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json(data[0]);
};

// Delete product
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from('products').delete().eq('id', id);
  if (error) return res.status(500).json({ error: error.message });
  res.status(204).send();
};
