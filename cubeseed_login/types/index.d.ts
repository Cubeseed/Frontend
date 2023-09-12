export type BillType = {
    name: string;
    value: string;
  };

export type OrderType = {
    service: string;
    details?: string;
    quantity: string;
    unit: string;
    price: string;
    total: string;
  };

export type SummaryType = {
    name: string;
    value: string;
  };

export type SignUpErrors = {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};
