import React, {useState} from 'react'

export const PageHook = (bool) => {
  const [page, setPage] = useState(bool)

  return {
    page, setPage
  }
}