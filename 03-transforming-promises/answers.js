/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    /* IMPLEMENT ME!! */
    promise.then(result => {
      return transformer(result)})
      .then(value => resolve(value))
      .catch(error => reject(error));

    promise.catch(error => reject(error));
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return new Promise((resolve, reject) => {
  numberPromise.then(val => {
    let result = val * val;
      if(typeof result !== 'number' || isNaN(result)) {
        reject('Cannot convert \'' + val + '\' to a number!')
      } else {
        resolve(result);
        }
      })
      .catch(error => reject(error));
    })
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){

    return squarePromise(promise)
    .catch(() => {
      return new Promise((resolve, reject) => {
        resolve(0);
        });
      
    });
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then(val => Promise.reject(val), err => Promise.resolve(err));
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};