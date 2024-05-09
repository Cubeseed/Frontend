export type BillType = {
  name: string
  value: string
}

export type OrderType = {
  service: string
  details?: string
  quantity: string
  unit: string
  price: string
  total: string
}

export type SummaryType = {
  name: string
  value: string
}

export type SignUpErrors = {
  fullName?: string
  email?: string
  address?: string
  password?: string
  confirmPassword?: string
  [key: string]: boolean
}

export type UserProfileType = {
  url: string
  full_name: string
  phone_number: string
  address: string
  city: string
  state: string
  country: string
  zip_code: string
  about_me: string
  created_at: Date
  updated_at: Date
}

export type ApiResponse = {
  results: {
    name: string
    url: string
  }[]
}
