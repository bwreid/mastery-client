displayClasses = () => {
  window.location.href = '#/classes'
  Class.index().then(result => {
    const { classes } = result.data
    document.getElementById('main-content').innerHTML = ''
    document.getElementById('main-content').appendChild(classesTemplate(classes))
  })
}

displayOneClass = (classId) => {
  window.location.href = `#/classes/${classId}`
  Class.show(classId).then(result => {
    Class.getRoster(classId).then(rosterResult => {
      const { roster } = rosterResult.data
      const [group] = result.data.group
      document.getElementById('main-content').innerHTML = singleClassTemplate(group, roster)
    })
  })
}

displayClassForm = () => {
  window.location.href = `#/classes/new`
  Teachers.index().then(result => {
    const { teachers } = result.data
    console.log(teachers)
    document.getElementById('main-content').innerHTML = classFormTemplate('POST', teachers)
    document.getElementById('create').addEventListener('submit', (e) => {
      e.preventDefault()
      const name = document.getElementById('className').value
      const teacher_id = document.getElementById('teacherId').value
      Class.create({ name, teacher_id }).then(response => {
        const [ group ] = response.data.group
        displayOneClass(group.id)
      })
    })
  })
}