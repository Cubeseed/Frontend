import { Icons } from "@cs/components/icons"

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

export type SideNavItems = {
  icon?: keyof typeof Icons
  href: string
  title?: string
  notification?: string
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
