import express from 'express';

import { Request, Response } from 'express';
const router = express.Router();
import * as UserController from '../controller/usersController';

router.get('/', async (req: Request, res: Response) => {
  console.log(req.body);
  res.send({ s: 'sweweqwewewewewwew' });
});

// Create a new User
router.post('/users/create', UserController.create);
router.get('/users', UserController.findAll);
//  router.get("/users", async(req, res) => {
//   res.json(req.body)
//  });

export default router;
