// Ask for a user name until API returns a valid user
async function getUser() {
  let user
  while (true) {
    let name = prompt('Enter a user name', 'rubjo')
    try {
      user = await loadJson(`https://my.api.com/users/${name}`)
      break // No error, exit loop and proceed
    } catch (err) {
      if (err.response && err.response.status === 404) {
        // Loop will continue after the alert
        alert(`User "${name} not found, please reenter.`)
      } else {
        // Unknown error, rethrow it
        throw err
      }
    }
  }

  alert(`Full name: ${user.name}.`)
  return user
}
