import { Router } from 'express';
import reposControllers from './repos/repos.controllers'
import langsControllers from './langs/langs.controllers';
import statusControllers from './status/status.controllers';

const router = Router();

router.use('/repos', reposControllers);
router.use('/langs', langsControllers);
router.use('/status', statusControllers);

export default router;