import { dataSource } from "../db/client";

import repos from "../data/formated_repos.json";
import { Repo } from "../src/repos/repo.entities";

(async () => {
    await dataSource.initialize();
    const queryRunner = dataSource.createQueryRunner();


    try {
        await queryRunner.startTransaction();
        await queryRunner.query("TRUNCATE repo CASCADE");
        console.log("Truncate DONE");
        await queryRunner.commitTransaction();
        await Promise.all(
            repos.map(async (repoEl) => {
                const newRepo = new Repo();
                newRepo.id = repoEl.id;
                newRepo.name = repoEl.name;
                newRepo.url = repoEl.url;

                return await newRepo.save();
            })
        );

    } catch (error) {
        console.warn(error);
        await queryRunner.rollbackTransaction();
    }

    console.info("Seeder is DONE");
    await dataSource.destroy();
    return;
})();
