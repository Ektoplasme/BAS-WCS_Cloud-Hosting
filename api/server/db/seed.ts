import { dataSource } from "./client";

import repos from '../../data/formated_repos.json'
import { Repo } from "../repos/repo.entities";
import { Lang } from "../langs/langs.entities";

(async () => {
    await dataSource.initialize();
    const queryRunner = dataSource.createQueryRunner();

    try {
        await queryRunner.startTransaction();
        await queryRunner.query("DELETE FROM lang_repos_repo");
        await queryRunner.query("DELETE FROM lang");
        await queryRunner.query("DELETE FROM repo");
        await queryRunner.query("DELETE FROM status");

        await queryRunner.query('DELETE FROM sqlite_sequence WHERE name="status" OR name="lang"');

        const repoos = await Promise.all(
            repos.map(async el=>{
                const repo = new Repo();
                repo.name = el.name;
                repo.url = el.url;
                repo.id = el.id;
                // repo.langs = el.languages.map((l, index)=>{
                //     const formatedLang = new Lang();
                //     formatedLang.id = index;
                //     formatedLang.label = l;

                //     return formatedLang
                // });
                console.log(repo.langs);
                return await repo.save();
            })
        )

        console.log(repoos);

        await queryRunner.commitTransaction();
    } catch (error) {
        console.log(error);
        await queryRunner.rollbackTransaction();
    }
})();
