import { NextApiRequest, NextApiResponse } from "next"

interface FarmerProduct {
  id: number
  image: string
  productPrice: string
}

interface FarmerData {
  id: number
  name: string
  description: string
  stars: number
  reviews: number
  milesAway: number
  products: FarmerProduct[]
}

export const farmerData: FarmerData[] = [
  {
    id: 1,
    name: "Heriatge Hen Homestead",
    description: "Providing fresh and organic produce from our farm.",
    stars: 4.5,
    reviews: 20,
    milesAway: 5,
    products: [
      { id: 1, image: "/assets/marketplace/chicks.jpg", productPrice: "#5.00" },
      { id: 2, image: "/assets/marketplace/eggs.jpg", productPrice: "#5.00" },
    ],
  },
  {
    id: 2,
    name: "Savory Roost Haven",
    description: "Providing fresh and organic produce from our farm.",
    stars: 4.5,
    reviews: 20,
    milesAway: 5,
    products: [
      { id: 1, image: "/assets/marketplace/chicks.jpg", productPrice: "#5.00" },
      { id: 2, image: "/assets/marketplace/eggs.jpg", productPrice: "#5.00" },
    ],
  },
  {
    id: 3,
    name: "Sarah&apos;s Poultry Farm",
    description: "Providing fresh and organic produce from our farm.",
    stars: 4.5,
    reviews: 20,
    milesAway: 5,
    products: [
      { id: 1, image: "/assets/marketplace/chicks.jpg", productPrice: "#5.00" },
      { id: 2, image: "/assets/marketplace/eggs.jpg", productPrice: "#5.00" },
    ],
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (Array.isArray(id)) {
    res.status(400).json({ error: "Invalid query" })
    return
  }

  const farmerId = parseInt(id, 10)
  const farmer = farmerData.find((f) => f.id === farmerId)

  if (!farmer) {
    res.status(404).json({ error: "Farmer not found" })
    return
  }

  res.status(200).json(farmer)
}
