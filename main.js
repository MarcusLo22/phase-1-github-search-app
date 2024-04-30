document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the value of the search input
    const searchQuery = document.getElementById('search-input').value;
  
    // Call a function to perform the GitHub user search
    searchUsers(searchQuery);
  });

  function searchUsers(query) {
    const url = `https://api.github.com/search/users?q=${query}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Call a function to display the search results on the screen
        displaySearchResults(data.items);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  function displaySearchResults(results) {
    const searchResultsElement = document.getElementById('search-results');
    searchResultsElement.innerHTML = ''; // Clear previous results
  
    // Create a list of users
    const userList = document.createElement('ul');
  
    results.forEach(user => {
      const userItem = document.createElement('li');
      userItem.textContent = user.login;
  
      // Add click event listener to each user item
      userItem.addEventListener('click', () => {
        // Call a function to display the user's repositories
        displayUserRepositories(user.login);
      });
  
      userList.appendChild(userItem);
    });
  
    searchResultsElement.appendChild(userList);
  }

  function displaySearchResults(results) {
    const searchResultsElement = document.getElementById('search-results');
    searchResultsElement.innerHTML = ''; // Clear previous results
  
    // Create a list of users
    const userList = document.createElement('ul');
  
    results.forEach(user => {
      const userItem = document.createElement('li');
  
      // Create an image element for the user's avatar
      const avatarImg = document.createElement('img');
      avatarImg.src = user.avatar_url;
      avatarImg.alt = `${user.login}'s avatar`;
      userItem.appendChild(avatarImg);
  
      // Create a link element for the user's profile
      const profileLink = document.createElement('a');
      profileLink.href = user.html_url;
      profileLink.textContent = user.login;
      userItem.appendChild(profileLink);
  
      userList.appendChild(userItem);
    });
  
    searchResultsElement.appendChild(userList);
  }

  function displayUserRepositories(username) {
    const url = `https://api.github.com/users/${username}/repos`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Call a function to display the user's repositories on the screen
        displayRepositories(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  function displayRepositories(repositories) {
    const searchResultsElement = document.getElementById('search-results');
    searchResultsElement.innerHTML = ''; // Clear previous results
  
    // Create a list of repositories
    const repoList = document.createElement('ul');
  
    repositories.forEach(repo => {
      const repoItem = document.createElement('li');
      repoItem.textContent = repo.name;
  
      repoList.appendChild(repoItem);
    });
  
    searchResultsElement.appendChild(repoList);
  }

  function displaySearchResults(results) {
    const searchResultsElement = document.getElementById('search-results');
    searchResultsElement.innerHTML = ''; // Clear previous results
  
    // Create a list of users
    const userList = document.createElement('ul');
  
    results.forEach(user => {
      const userItem = document.createElement('li');
  
      // Create an image element for the user's avatar
      const avatarImg = document.createElement('img');
      avatarImg.src = user.avatar_url;
      avatarImg.alt = `${user.login}'s avatar`;
      userItem.appendChild(avatarImg);
  
      // Create a link element for the user's profile
      const profileLink = document.createElement('a');
      profileLink.href = user.html_url;
      profileLink.textContent = user.login;
      userItem.appendChild(profileLink);
  
      // Add click event listener to each user item
      userItem.addEventListener('click', () => {
        // Call the displayUserRepositories function with the selected user's username
        displayUserRepositories(user.login);
      });
  
      userList.appendChild(userItem);
    });
  
    searchResultsElement.appendChild(userList);
  }

  function displayRepositories(repositories) {
    const searchResultsElement = document.getElementById('search-results');
    searchResultsElement.innerHTML = ''; // Clear previous results
  
    const repositoriesList = document.createElement('ul');
  
    repositories.forEach(repo => {
      const repoItem = document.createElement('li');
      const repoLink = document.createElement('a');
      repoLink.href = repo.html_url;
      repoLink.textContent = repo.name;
      repoItem.appendChild(repoLink);
  
      repositoriesList.appendChild(repoItem);
    });
  
    searchResultsElement.appendChild(repositoriesList);
  }

  let searchType = 'users'; // Default search type is users

document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const searchQuery = document.getElementById('search-input').value;

  if (searchType === 'users') {
    searchUsers(searchQuery);
  } else if (searchType === 'repos') {
    searchRepositories(searchQuery);
  }
});

document.getElementById('toggle-search').addEventListener('click', function() {
  const toggleButton = document.getElementById('toggle-search');

  if (searchType === 'users') {
    searchType = 'repos';
    toggleButton.textContent = 'Search Users';
  } else if (searchType === 'repos') {
    searchType = 'users';
    toggleButton.textContent = 'Search Repositories';
  }
});

  function searchRepositories(query) {
    const url = `https://api.github.com/search/repositories?q=${query}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayRepositories(data.items);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }