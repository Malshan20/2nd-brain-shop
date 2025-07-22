-- Drop table if exists (for testing)
-- DROP TABLE IF EXISTS orders;

-- Create orders table with correct schema
CREATE TABLE IF NOT EXISTS orders (
  id BIGSERIAL PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) NOT NULL DEFAULT 'USD',
  paddle_transaction_id VARCHAR(255),
  status VARCHAR(50) NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_orders_email ON orders(customer_email);
CREATE INDEX IF NOT EXISTS idx_orders_transaction_id ON orders(paddle_transaction_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);

-- Enable Row Level Security (RLS)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (you may need to adjust this based on your auth setup)
CREATE POLICY IF NOT EXISTS "Allow public inserts" ON orders
  FOR INSERT 
  TO public 
  WITH CHECK (true);

-- Create policy to allow selects (you may need to adjust this based on your auth setup)
CREATE POLICY IF NOT EXISTS "Allow public selects" ON orders
  FOR SELECT 
  TO public 
  USING (true);
