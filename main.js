prompt('What is your name?')
prompt('What is your surname?')
let age = +prompt('How old are you?')

if (age > 0 && age < 18) {
  alert('You are too young for registration')
} else if (age > 18) {
  alert('You are too old for registration')
} else {
  alert('Registration completed')
}