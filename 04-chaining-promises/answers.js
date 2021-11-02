/**
 * 
 * EXERCISE 1
 * 
 * @param {Promise} promise 
 * @param {function} asyncTransformer 
 */
function flatMapPromise(promise, asyncTransformer){
  return new Promise((resolve, reject) => {
    promise
      .then(val => {
        return new Promise((resolve, reject) => {
        resolve(val);
        })
        .then(val => resolve(asyncTransformer(val)));
      })
      .catch(err=>reject(err)); 
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise} firstPromise 
 * @param {function} slowAsyncProcess 
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess){
  return firstPromise.then(val => {
    
    return new Promise((resolve, reject) => {
      slowAsyncProcess(val)
      .then(result => resolve(result))
      .catch(err => reject(err));
    })
  });
}

/**
 * 
 * EXERCISE 3
 * 
 * @param {function} getUserById 
 * @param {function} getOrganizationById 
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById){
  return function getUserByIdWithOrganization(userId){
    /* IMPLEMENT ME! */
    return new Promise((resolve, reject) => {
      getUserById(userId).then(user => {
        if(user == undefined) {
          resolve(undefined);
        } else {
        getOrganizationById(user.organizationId)
        .then(org => {
          user.organization = org;
          resolve(user);
          })
        }
      })
      .catch((err)=>reject(err));
    })
  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};