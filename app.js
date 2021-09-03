const form = document.querySelector("form")
const input = document.querySelector(".searchInp")
// /const api = `https://api.github.com/users/`
let valueInp = input.value
let show = document.querySelector(".showContainer")
let avatar = document.querySelector(".avatar")
let namee = document.querySelector(".name")
let fols = document.querySelector(".fols")
let folw = document.querySelector(".folw")
let bio = document.querySelector(".bio")
let repository = document.querySelector(".repositories")
let reposir = document.querySelector(".repositoriess")
function getResult(newData){
    // console.log(newData);
    // console.log(newData.name);
    show.classList.remove("hide")
    avatar.setAttribute("src",`${newData.avatar_url}`)
    namee.textContent = newData.name
    // folw.textContent = newData.following
    fols.textContent = `Followers: ${newData.followers}`
    folw.textContent = `Following: ${newData.following}`
    bio.textContent = `Bio: ${newData.bio}`
    repository.textContent = `Repositories: ${newData.public_repos}`
    // bio.textContent = newData.bio
    // repos.textContent = newData.public_repos
    function get(d){
        // d.preventDefault()
        let inpValue = input.value
        const repos = `https://api.github.com/users/${inpValue}/repos?sort=created`
        fetch(repos).then(function(data){
            return data.json()
        }).then(getRepository)
        function getRepository(newData){
            for(let i = 0;i < 1;i++){
                let a = document.createElement("a")
                a.classList.add("add")
                a.textContent = newData[0].name
                a.setAttribute("href",`${newData[0].html_url}`)
                console.log(newData[0].name);
                reposir.appendChild(a)
                console.log(a);
            }
            for(let i = 0;i < 1;i++){
                let a = document.createElement("a")
                a.classList.add("add")
                a.textContent = newData[1].name
                console.log(newData[0].name);
                a.setAttribute("href",`${newData[1].html_url}`)
                reposir.appendChild(a)
                console.log(a);
            }
            for(let i = 0;i < 1;i++){
                let a = document.createElement("a")
                a.classList.add("add")
                a.textContent = newData[2].name
                console.log(newData[0].name);
                a.setAttribute("href",`${newData[2].html_url}`)
                reposir.appendChild(a)
                console.log(a);
            }
            for(let i = 0;i < 1;i++){
                let a = document.createElement("a")
                a.classList.add("add")
                a.textContent = newData[3].name
                a.setAttribute("href",`${newData[3].html_url}`)
                console.log(newData[0].name);
                reposir.appendChild(a)
                console.log(a);
            }
            for(let i = 0;i < 1;i++){
                let a = document.createElement("a")
                a.classList.add("add")
                a.textContent = newData[4].name
                a.setAttribute("href",`${newData[4].html_url}`)
                console.log(newData[0].name);
                reposir.appendChild(a)
                console.log(a);
            }
        }
    }
    get()
}

form.addEventListener("submit",function(e){
    e.preventDefault()
    let inpValue = input.value
    let api = `https://api.github.com/users/${inpValue}`
    // let api = `https://api.covid19api.com/total/country/${inpValue}`
    // console.log(api);     
    fetch(api).then(function(data){
        return data.json()
    }).then(getResult)
})