export enum OrderStatus {
  IDLE = 'IDLE',
  PROCESSING = 'PROCESSING',
  PAYMENT_PENDING = 'PAYMENT_PENDING',
  PAID = 'PAID',
  SHIPPING = 'SHIPPING',
  DELIVERED = 'DELIVERED',
  CONFIRMED = 'CONFIRMED'
}

export interface ProductSpec {
  label: string;
  value: string;
  details?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}
