const Alternative = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return 0
    }
    return number
  }

  const randomIndex = () => {
    let indexRandom = Math.floor(Math.random() * people.length)
    if (index === indexRandom) {
      return 0
    }
    setIndex(checkNumber(indexRandom))
  }
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1
      return checkNumber(newIndex)
    })
  }
  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1
      return checkNumber(newIndex)
    })
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

export default Alternative
