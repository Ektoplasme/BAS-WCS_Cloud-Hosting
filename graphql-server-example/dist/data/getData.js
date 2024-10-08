// gh repo list --json languages,id,name,url >> raw.txt
import fs from 'fs';
const raw = JSON.parse(fs.readFileSync('raw.txt', { encoding: "utf8" }));
const languages = raw.map((repo) => repo.languages);
let i = 0;
const formatedRepos = raw.map((repo) => {
    const { name, url, id } = repo;
    let tmpArr = [];
    languages[i].forEach((t) => {
        tmpArr.push(t.node.name);
    });
    i++;
    return ({
        id: id,
        name: name,
        url: url,
        languages: tmpArr
    });
});
fs.writeFile('./data/formated_repos.json', JSON.stringify(formatedRepos), (err) => err ? console.error(err) : console.log("Formated repos file created."));
