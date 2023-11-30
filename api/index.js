const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let tasks = [];
const validateFields = (req, res, next) => {
    const { title, description, status } = req.body;
    if (!title || !description || !status) {
      return res.status(400).json({ error: 'Title, description, and status are required fields' });
    }
    next();
  };

// Crear una nueva tarea
app.post('/tasks', validateFields, (req, res) => {
  const { title,description,status } = req.body;
  const task = {
    id: tasks.length + 1,
    title,
    description,
    status,
    completed: false
  };
  tasks.push(task);
  res.status(201).json({ message: 'Task created successfully', task });
});

// Actualizar una tarea
app.put('/tasks/:taskId', validateFields, (req, res) => {
    const taskId = parseInt(req.params.taskId);
    const task = tasks.find(t => t.id === taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
  
    const { title, description, status } = req.body;
    task.title = title;
    task.description = description;
    task.status = status;
  
    res.json({ message: 'Task updated successfully', task });
  });
  

// Eliminar una tarea
app.delete('/tasks/:taskId', (req, res) => {
  const taskId = parseInt(req.params.taskId);
  tasks = tasks.filter(t => t.id !== taskId);
  res.json({ message: 'Task deleted successfully' });
});

// Listar todas las tareas
app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

// Listar tareas completas
app.get('/tasks/completed', (req, res) => {
  const completedTasks = tasks.filter(t => t.completed);
  res.json({ completedTasks });
});

// Listar tareas incompletas
app.get('/tasks/incomplete', (req, res) => {
  const incompleteTasks = tasks.filter(t => !t.completed);
  res.json({ incompleteTasks });
});

// Obtener una sola tarea
app.get('/tasks/:taskId', (req, res) => {
  const taskId = parseInt(req.params.taskId);
  const task = tasks.find(t => t.id === taskId);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json({ task });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
