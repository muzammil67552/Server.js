const ToDoModel = require("../model/models");

// Controller to get all ToDos
module.exports.getToDos = async (req, res) => {
  try {
    const toDos = await ToDoModel.find();
    res.status(200).send(toDos);
  } catch (error) {
    console.error("Error fetching ToDos:", error);
    res.status(500).send("An error occurred while fetching ToDos");
  }
};

// Controller to save a new ToDo
module.exports.saveToDos = async (req, res) => {
  const { toDo } = req.body;

  try {
    const newToDo = await ToDoModel.create({ toDo });
    console.log("SaveData Successfully");
    res.status(201).send(newToDo);
  } catch (error) {
    console.error("Error saving ToDo:", error);
    res.status(500).send("An error occurred while saving the ToDo");
  }
};
