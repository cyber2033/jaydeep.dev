import { useEffect, useState } from 'react'

export function ExactLoader() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
      document.body.classList.add('is-loaded')
    }, 150)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`page-loader ${isLoaded ? 'is-loaded' : ''}`} aria-hidden="true">
      <div className="loader-door loader-door-left" />
      <div className="loader-door loader-door-right" />
    </div>
  )
}
