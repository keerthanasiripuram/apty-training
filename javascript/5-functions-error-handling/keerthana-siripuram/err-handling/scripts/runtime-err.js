const users = {
    "keerthana": { "address": { "city": "Hyderabad" } },
    "kikki": { "address": { "city": "Hyderabad" } }
}
function checkUser(user, response, flag) {
    user = user.trim().toLowerCase()
    if (users[user]) {
        response = users[user].address.city
        flag = true
    }
    else {
        throw new Error('User Not Found')
    }
    return [response, flag]
}
function findTheCity() {
    let user = document.getElementById("name").value
    let response = ""
    let flag = false
    try {
        [response, flag] = checkUser(user, response, flag)
    }
    catch (error) {
        response = error.message
    }
    flag ? document.getElementById("res").textContent = `City is: ${response}` :
        document.getElementById("res").textContent = `${response}`
}