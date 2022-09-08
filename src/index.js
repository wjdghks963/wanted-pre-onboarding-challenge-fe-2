let AllToDos = new Array();

/**
 * @constructor
 * @param {number} id
 * @param {string} content
 * @param {boolean} isDone
 * @param {string} category
 * @param {Array<string?>} tags
 */
function ToDo(id, content, isDone, category, tags) {
  const ToDo = new Map();
  ToDo.set("id", id);
  ToDo.set("content", content);
  ToDo.set("isDone", isDone);
  ToDo.set("category", category);
  ToDo.set("tags", tags);
  return ToDo;
}

/** create */
/**
 *
 * @param {number} id
 * @param {string} content
 * @param {boolean} isDone
 * @param {string} category
 * @param {Array<string?>} tags
 * @return {void}
 */

ToDo.prototype.createToDo = function (id, content, isDone, category, tags) {
  const newToDo = ToDo(id, content, isDone, category, tags);
  return AllToDos.push(newToDo);
};

/** Read */
/**
 * @return {void}
 * @return {Array<ToDo?>?}
 */
ToDo.prototype.readAll = function () {
  return AllToDos;
};
/**
 *
 * @param {number} id
 * @return {ToDo?}
 */
ToDo.prototype.findById = function (id) {
  return AllToDos.filter((i) => {
    if (i.get("id") === id) {
      return i;
    } else {
      null;
    }
  });
};

/** Update */
/**
 * @param {ToDo} ToDo
 * @param {string} content
 * @param {boolean} isDone
 * @param {string} category
 * @param {Array<string?>} tags
 * @return {void}
 */
ToDo.prototype.updateAllExceptId = function (
  ToDo,
  content,
  isDone,
  category,
  tags
) {
  ToDo.set("content", content);
  ToDo.set("isDone", isDone);
  ToDo.set("category", category);
  ToDo.set("tags", tags);
};
/**
 * @param {ToDo} ToDo
 * @param {Array<string?>} tags
 * @return {void}
 */
ToDo.prototype.updateTags = function (ToDo, tags) {
  ToDo.set("tags", tags);
};

/** Delete */
/**
 *
 * @param {number} id
 * @return {void}
 */
ToDo.prototype.deleteById = function (id) {
  const ToDo = ToDo.prototype.findById(id);
  return (AllToDos = AllToDos.fillter((i) => {
    i !== ToDo;
  }));
};
/**
 * @return {void}
 */
ToDo.prototype.deleteAll = function () {
  return (AllToDos = new Array());
};
/**
 * @param {ToDo} ToDo
 * @param {string} tagName
 * @return {void}
 */
ToDo.prototype.deleteTagByName = function (ToDo, tagName) {
  const tags = ToDo.get("tags");
  const lefttags = tags.fillter((i) => i !== tagName);
  return ToDo.set("tags", lefttags);
};

/**
 * @param {ToDo} ToDo
 * @return {void}
 */
ToDo.prototype.deleteAllTags = function (ToDo) {
  return ToDo.set("tags", []);
};
