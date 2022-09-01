/**
 * @constructor
 * @param {number} id
 * @param {string} content
 * @param {boolean} isDone
 * @param {string} category
 * @param {Array<string?>} tags
 */
function ToDo(id, content, isDone, category, tags) {}

/** create */
/**
 *
 * @param {number} id
 * @param {string} content
 * @param {boolean} isDone
 * @param {string} category
 * @param {Array<string?>} tags
 * @return {object}
 */

ToDo.prototype.createTodo = function (id, content, isDone, category, tags) {};

/** Read */
/**
 * @return {void}
 * @return {Array<object?>?}
 */
ToDo.prototype.readAll = function () {};
/**
 *
 * @param {number} id
 * @return {object}
 */
ToDo.prototype.findById = function (id) {};

/** Update */
/**
 *
 * @param {string} content : ;
 * @param {boolean} isDone
 * @param {string} category
 * @param {Array<string?>} tags
 * @return {void}
 */
ToDo.prototype.updateAllExceptId = function (
  content,
  isDone,
  category,
  tags
) {};
/**
 *
 * @param {Array<string?>} tags
 * @return {void}
 */
ToDo.prototype.updateTags = function (tags) {};

/** Delete */
/**
 *
 * @param {number} id
 * @return {void}
 */
ToDo.prototype.deleteById = function (id) {};
/**
 * @return {void}
 */
ToDo.prototype.deleteAll = function () {};
/**
 *
 * @param {string} tagName
 * @return {void}
 */
ToDo.prototype.deleteTagByName = function (tagName) {};
/**
 * @return {void}
 */
ToDo.prototype.deleteAllTags = function () {};
