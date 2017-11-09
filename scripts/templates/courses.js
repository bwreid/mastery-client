const coursesTemplate = (courses) => {
  const courseList = document.createElement('DIV')
  courseList.classList.add('row')

  courses.forEach(course => {
    const courseDiv = document.createElement('div')
    courseDiv.classList = 'col-sm-6 col-md-4'
    const courseButton = document.createElement('button')
    courseButton.classList = 'btn btn-danger course-button'
    courseButton.textContent = course.title
    courseButton.id = `course-button-${course.id}`
    courseDiv.appendChild(courseButton)
    courseList.appendChild(courseDiv)
  })

  return courseList
}
