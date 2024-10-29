// gh repo list --json languages,id,name,url >> raw.txt
import fs from 'fs';

type Repository = {
    id: string;
    name: string;
    url: string;
    isPrivate: boolean;
    languages: {size: number, node: {
        size: number;
        node: {
            name: string;
        }
    }}
}

const raw = JSON.parse(fs.readFileSync('./data/raw.json', { encoding: "utf8" }))
const languages = raw.map((repo: Repository) =>{
    console.log(repo)
     return repo.languages
    })

let i = 0;
const formatedRepos = raw.map((repo: Repository)=>{
    const {name, url, id, isPrivate} = repo;
    let tmpArr:any = [];

    languages[i].forEach((t:any)=>{
        tmpArr.push(t.node.name);
    })

    i++;

    return ({
        id: id,
        name: name,
        url: url,
        languages: tmpArr,
        isPrivate: isPrivate
    })
})

console.log(formatedRepos)

// fs.writeFile(
//     './data/formated_repos.json',
//     JSON.stringify(formatedRepos),
//     (err) =>
//       err ? console.error(err) : console.log("Formated repos file created.")
//   )