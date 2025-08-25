// Task 1
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data");
    }, 1000);
  });
}
function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Posts data");
    }, 1000);
  });
}

async function fetchAllData() {
  try {
    const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
    console.log(user);
    console.log(posts);
  } catch (error) {
    console.error("Error occured", error);
  }
}

fetchAllData();

//  Task 2

function fetchSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success data");
    }, 1000);
  });
}

function fetchFailure() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Error occurred"));
    }, 1000);
  });
}

async function handlePromises() {
  try {
    const results = await Promise.all([fetchSuccess(), fetchFailure()]);
    console.log(results);
  } catch (error) {
    console.log(error.message);
  }
}

handlePromises();

// Task 3

function fetchWithTimeout(promise, timeout) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject("Timeout exceeded"), timeout);
  });
  return Promise.race([promise, timeoutPromise]);
}

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched"), 2000); 
  });
}