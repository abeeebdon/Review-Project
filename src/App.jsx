import { useState } from 'react'
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa'
import people from './data'
const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length
      return newIndex
    })
  }
  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length
      return newIndex
    })
  }
  const randomIndex = () => {
    let indexRandom = Math.floor(Math.random() * people.length)
    if (index === indexRandom) {
      indexRandom = index + 1
    }
    const newIndex = indexRandom % people.length
    setIndex(newIndex)
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn" onClick={randomIndex}>
          Surprise Me
        </button>
      </article>
    </main>
  )
}
export default App
