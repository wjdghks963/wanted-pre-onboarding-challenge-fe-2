interface ITodo {
  id: number;
  content: string;
  isDone: false;
  category: string;
  tags: tags;
}
type tags = Array<string | null>;

const AllTodos: Array<ITodo> = [];

class Todo {
  id: number;
  content: string;
  isDone: false;
  category: string;
  tags: tags;

  constructor({ id, content, isDone, category, tags }: ITodo) {
    this.id = id;
    this.content = content;
    this.isDone = isDone;
    this.category = category;
    this.tags = tags;
  }
}

const createTodo = (
  id: number,
  content: string,
  isDone: false,
  category: string,
  tags: tags
) => {
  const newToDo = new Todo({ id, content, isDone, category, tags });
  return AllTodos.push(newToDo);
};

const readAll = () => {
  return AllTodos.map((i, todo) => {
    `${i}번째 ${todo}`;
  });
};

const findById = (id: number) => {
  return AllTodos.filter((todo) => {
    if (todo.id === id) {
      return todo;
    }
  });
};

const updateAllExceptId = (
  Todo: ITodo,
  content: string,
  isDone: false,
  category: string,
  tags: tags
) => {
  Todo.content = content;
  Todo.isDone = isDone;
  Todo.category = category;
  Todo.tags = tags;
};

const updateTags = (Todo: ITodo, tags: tags) => {
  return (Todo.tags = tags);
};

const deleteById = (id: number) => {
  const Todo: ITodo = findById(id)[0];
  return AllTodos.filter((todo) => {
    todo.id !== Todo.id;
  });
};

const deleteAll = () => {
  return (AllTodos.length = 0);
};

const deleteTagByName = (Todo: ITodo, tagName: string) => {
  Todo.tags.filter((tag) => {
    return tag !== tagName;
  });
  return Todo;
};

const deleteAllTags = (Todo: ITodo) => {
  return (Todo.tags.length = 0);
};
