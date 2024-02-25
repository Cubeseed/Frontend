import { NextApiRequest, NextApiResponse } from "next"
import { ReactNode } from "react"

interface ReviewData {
  id: number
  reviewerName: string
  farmName: string
  reviewQuote: string
  time: number
  reviewerPhoto: ReactNode
}

export const reviewData: ReviewData[] = [
  {
    id: 1,
    reviewerName: "John Doe",
    farmName: "Green Acres",
    reviewQuote:
      "I receive the products on time, and in a good condition. 10/10 would recommend again",
    time: 2,
    reviewerPhoto: "/assets/marketplace/chicks.jpg",
  },
  {
    id: 2,
    reviewerName: "John Doe",
    farmName: "Green Acres",
    reviewQuote:
      "I receive the products on time, and in a good condition. 10/10 would recommend again",
    time: 2,
    reviewerPhoto: "/assets/marketplace/chicks.jpg",
  },
  {
    id: 3,
    reviewerName: "John Doe",
    farmName: "Green Acres",
    reviewQuote:
      "I receive the products on time, and in a good condition. 10/10 would recommend again",
    time: 2,
    reviewerPhoto: "/assets/marketplace/chicks.jpg",
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (Array.isArray(id)) {
    res.status(400).json({ error: "Invalid query" })
    return
  }

  const reviewerId = parseInt(id, 3)
  const reviewer = reviewData.find((r) => r.id === reviewerId)

  if (!reviewer) {
    res.status(404).json({ error: "Reviewer not found" })
    return
  }

  res.status(200).json(reviewer)
}
