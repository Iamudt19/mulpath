/**
 * Currency utility functions for dual ₹ INR (primary) and USDC (secondary) display.
 * 1 USD ≈ 83.33 INR (1 INR ≈ 0.012 USDC)
 */

export interface DualPrice {
  inr: string;
  usdc: string;
  rawInr: number;
  rawUsdc: number;
}

const INR_TO_USDC_RATE = 0.012;

export function formatDualCurrency(amountInr: number | string | undefined | null): DualPrice {
  const numericInr = typeof amountInr === 'number' 
    ? amountInr 
    : parseFloat(amountInr || '0') || 0;

  const numericUsdc = +(numericInr * INR_TO_USDC_RATE).toFixed(2);

  return {
    inr: `₹${numericInr.toLocaleString('en-IN')}`,
    usdc: `${numericUsdc.toFixed(2)} USDC`,
    rawInr: numericInr,
    rawUsdc: numericUsdc,
  };
}
