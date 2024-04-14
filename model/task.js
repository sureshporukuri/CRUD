const { Router } = require('express');
const Task = require('./task-shema');
const router = Router();


router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


//GET /api/task/:id
router.get('/:id', async (req, res) => {
  let id = req.params.id;
  let task = await Task.findById(id);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(400).json({ message: `Task with ${id} not found` });
  }
});

router.post('/', async(req,res)=>{
  let book = new Task(req.body);
  console.log(req.body);
  await task.save();
  res.status(201).json(book);
});

//PUT /api/books/:id
router.put('/:id', async (req, res) => {
  let id = req.params.id;
  let task = await Task.findByIdAndUpdate(id, req.body);
  if (task)
      res.status(200).json(task);
  else
      res.status(404).json({ message: `Task with id ${id} not found` });

});

//DELETE
router.delete('/:id', async (req, res) => {
  let id = req.params.id;
  let task = await Task.findByIdAndDelete(id);
  if (task)
      res.status(200).json(task);
  else
      res.status(404).json({ message: `Task with id ${id} not found` });

});



module.exports = router;