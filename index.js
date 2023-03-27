
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state')
let addup = users.length + 1
app.use(express.json())
/* BEGIN - create routes here */
app.get('/users', (req, res) => {
  res.json(users)
})

app.get("/users/1", (req, res) => {
 res.json(users[0])
})

app.post("/users", (req, res) => {
  anotherUser = {
    "_id": 6,
    "name": "Arthur Morgan",
    "occupation": "Cowboy",
    "avatar": "https://www.giantbomb.com/images/1300-3058153"
  }
  users.push(anotherUser);
  return res.json(users);
})

app.put('/users/1', (req, res) => {
  users[0].name = 'Danny Dale Cooper'
  res.json(users);
});

app.delete('/users/1', (req, res) => {
  users[0].delete;
  res.send('deleted')
});


app.post('/users', (req, res) => {
  users.push({
    _id: addup++,
    ...req.body    
  });
  res.json(users[users.length -1])
});

app.get('/users/:userId', (req, res) => {
  res.json(users.find(user => user._id === parseInt(req.params.userId)));
});

app.put('/users/:userId', (req, res) => {
  const findUser = users.find( user => user._id = parseInt(req.params.userId));
  if(findUser) {
    const update = {
      ...req.body
    }
    res.json(update)
  } else {
    res.status(400).json( {msg : `No member with the id of ${req.params.userId} is found!`})
  }
});

app.delete('/users/:userId', (req, res) => {
  let findUser = (users.find( user => user._id === parseInt(req.params.userId)));
  if (findUser) {
    users.isActive = 'false';
    res.send('deleted')
  } else {
    res.status(400).json({ msg : `No user with the id of ${req.params.userId}  can be found!`})
  }
})
/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))