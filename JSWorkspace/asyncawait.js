function fetchUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userData = { id: 1, name: 'Revanth', email: 'gosreddy@deloitte.com' };
        resolve(userData);
      }, 2000); // Resolves after 2 seconds
    });
  }
  
  async function getUserData() {
    try {
      const userData = await fetchUserData();
      console.log('User data:', userData);
      // You can perform further operations with the resolved data
    } catch (error) {
      console.error('Error:', error.message);
      // Handle the error appropriately
    } finally {
      console.log('Async function completed.');
    }
  }
  
  // Calling the async function
  getUserData();
  