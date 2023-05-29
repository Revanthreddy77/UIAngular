// Function that returns a Promise
function fetchUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userData = { id: 1, name: 'Revanth', email: 'gosreddy@deloitte.com' };
        resolve(userData);
      }, 2000); // Resolves after 2 seconds
    });
  }
  
  // Consuming the Promise
  fetchUserData()
    .then(userData => {
      console.log('User data:', userData);
    })
    .catch(error => {
      console.error('Error:', error.message);
    })
    .finally(() => {
      console.log('Promise completed.');
    });
  