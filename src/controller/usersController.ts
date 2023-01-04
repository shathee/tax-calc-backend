import { PrismaClient } from '@prisma/client';

import { Request, Response } from 'express';

const prisma = new PrismaClient();
// Create and Save a new Tutorial
export const create = async (req: Request, res: Response) => {
  console.log(req.body);
  // Validate request
  if (!req.body.email) {
    res.status(400).send({
      message: 'sdsd can not be empty!',
    });
    return;
  }

  const user = {
    email: req.body.email,
    name: req.body.name,
  };
  console.log(user);
  await prisma.users
    .create({ data: user })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Tutorial.',
      });
    });
};

// Retrieve all Tutorials from the database.
export const findAll = async (res: Response) => {
  const users = await prisma.users.findMany();
  res.send(users);
};

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {};

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {};

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {};

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {};

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {};
