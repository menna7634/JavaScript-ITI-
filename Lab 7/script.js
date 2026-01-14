function fetchWithTimeout(url, timeout = 5000) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), timeout)
    )
  ]);
}
async function fetchWithRetry(url, retries = 3, timeout = 5000) {
  for (let i = 1; i <= retries; i++) {
    try {
      const response = await fetchWithTimeout(url, timeout);
      if (!response.ok)
         throw new Error("Network error");
      return await response.json();
    } catch (error) {
      if (i === retries) 
        throw error;
    }
  }
}
const usersTabs = document.getElementById("usersTabs");
const postsList = document.getElementById("postsList");
const message = document.getElementById("message");

fetchWithTimeout("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (!response.ok) throw new Error("Failed to load users");
    return response.json();
  })
  .then(users => createUserTabs(users))
  .catch(error => {
    message.textContent = error.message;
  });


function createUserTabs(users) {
  users.forEach(user => {
    const tab = document.createElement("div");
    tab.className = "tab";
    tab.textContent = user.name;
    tab.onclick = () => loadUserPosts(user.id, tab);
    usersTabs.appendChild(tab);
  });
}
async function loadUserPosts(userId, selectedTab) {
  try {
    message.textContent = "Loading posts...";
    postsList.innerHTML = "";

    document.querySelectorAll(".tab").forEach(tab =>
      tab.classList.remove("active")
    );
    selectedTab.classList.add("active");

    const posts = await fetchWithRetry(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      3,
      5000
    );

    displayPosts(posts);
    message.textContent = "";
  } catch (error) {
    message.textContent = error.message;
  }
}

function displayPosts(posts) {
  if (posts.length === 0) {
    message.textContent = "No posts found.";
    return;
  }

  posts.forEach(post => {
    const li = document.createElement("li");
    li.textContent = post.title;
    postsList.appendChild(li);
  });
}
