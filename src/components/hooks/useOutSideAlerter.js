import { useEffect, useState } from 'react'

export default function useOutSideAlerter(ref) {
  const [outsideClicked, setOutsideClicked] = useState(false)

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOutsideClicked(true)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return { outsideClicked, setOutsideClicked }
}
