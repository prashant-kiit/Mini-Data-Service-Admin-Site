import { Router } from 'express';
const router = Router();
import axios from 'axios';
import Userschema from './user-schema.js';

router.get('/users', async (req, res) => {
  try {
    const users = await Userschema.find();
    console.log(users);
    if (users.length) {
      res.json(users);
    } else {
      res.status(404).json({ message: 'user not found' });
    }
  }
  catch (err) {
    res.send('Error ' + err);
  }
});


router.get('/userids', async (req, res) => {
  try {
    let userids = [];
    const users = await Userschema.find();
    for await (const user of users) {
      userids.push(user.userid);
    }
    res.json(userids);
  }
  catch (err) {
    res.send('Error ' + err);
  }
});

router.get('/users/:userid', async (req, res) => {
  try {
    const user = await Userschema.find({ userid: req.params.userid });
    console.log(user);
    if (user.length) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'user not found' });
    }
  }
  catch (err) {
    res.send('Error ' + err);
  }
});

// POST a new item
router.post('/users', async (req, res) => {
  const user = new Userschema({
    userid: req.body.userid,
    username: req.body.username
  });
  try {
    const usertemp = await user.save();
    await axios({
      method: 'get',
      url: 'http://localhost:8086/start-cache'
    })
      .then(response => {
        console.log('Response axios ' + response.data);
      })
      .catch(error => {
        console.error('Error axios:', error);
      });
    res.json(usertemp);
  }
  catch (err) {
    res.send('Error ' + err);
  }
});

router.put('/users/:userid', async (req, res) => {
  try {
    const userId = req.params.userid;
    const updateData = req.body;
    const result = await Userschema.updateMany({ userid: userId }, { $set: updateData });
    console.log(result);
    if (result.modifiedCount) {
      res.status(200).json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.send('Error ' + err);
  }
});

router.delete('/users/:userid', async (req, res) => {
  try {
    const user = await Userschema.deleteMany({ userid: req.params.userid });
    if (user.deletedCount) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'user not found' });
    }
  }
  catch (err) {
    res.send('Error ' + err);
  }
});

export default router;

