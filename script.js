function searchMeals() {
    const searchInput = document.getElementById('searchInput').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => displayResults(data.meals.slice(0, 5)))
      .catch(error => console.log('Error fetching data:', error));
  }
  
  function displayResults(meals) {
    const mealResults = document.getElementById('mealResults');
    mealResults.innerHTML = '';
  
    if (meals) {
      meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('meal');
  
        const mealName = document.createElement('h2');
        mealName.textContent = meal.strMeal;
  
        const mealImage = document.createElement('img');
        mealImage.src = meal.strMealThumb;
        mealImage.alt = meal.strMeal;
  
        mealDiv.appendChild(mealName);
        mealDiv.appendChild(mealImage);
        mealResults.appendChild(mealDiv);
      });
    } else {
      const noResult = document.createElement('p');
      noResult.textContent = 'No meals found';
      mealResults.appendChild(noResult);
    }
  }
  