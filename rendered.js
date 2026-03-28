const nameSpan = document.getElementById('name')
const ageSpan = document.getElementById('age')
const jobSpan = document.getElementById('job')

nameSpan.innerText = window.dev.name()
ageSpan.innerText = window.dev.age()
jobSpan.innerText = window.dev.job()


function ping() {
    window.api.ping().then((response) => {
        alert(response)
    })
}

ping()