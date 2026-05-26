/**
 * Random Joke Generator
 * Uses the Official Joke API (https://official-joke-api.appspot.com)
 */

interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

/**
 * Fetches a random joke from the Official Joke API
 * @returns Promise<Joke> - A joke object with setup and punchline
 */
async function getRandomJoke(): Promise<Joke> {
  try {
    const response = await fetch(
      'https://official-joke-api.appspot.com/random_joke'
    );
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const joke: Joke = await response.json();
    return joke;
  } catch (error) {
    throw new Error(`Failed to fetch joke: ${error}`);
  }
}

/**
 * Fetches a random joke of a specific type
 * @param type - The type of joke (e.g., 'general', 'knock-knock', 'programming')
 * @returns Promise<Joke> - A joke object of the specified type
 */
async function getJokeByType(type: string): Promise<Joke> {
  try {
    const response = await fetch(
      `https://official-joke-api.appspot.com/jokes/${type}/random`
    );
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const joke: Joke = await response.json();
    return joke;
  } catch (error) {
    throw new Error(`Failed to fetch ${type} joke: ${error}`);
  }
}

/**
 * Fetches multiple random jokes
 * @param count - Number of jokes to fetch (default: 5)
 * @returns Promise<Joke[]> - Array of joke objects
 */
async function getMultipleJokes(count: number = 5): Promise<Joke[]> {
  try {
    const response = await fetch(
      `https://official-joke-api.appspot.com/jokes/random/${count}`
    );
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const jokes: Joke[] = await response.json();
    return jokes;
  } catch (error) {
    throw new Error(`Failed to fetch jokes: ${error}`);
  }
}

/**
 * Displays a joke in a formatted way
 * @param joke - The joke object to display
 */
function displayJoke(joke: Joke): void {
  console.log('\n😂 ─────────────────────────────────');
  console.log(`Setup: ${joke.setup}`);
  console.log(`Punchline: ${joke.punchline}`);
  console.log('─────────────────────────────────\n');
}

// Main execution
async function main() {
  try {
    console.log('🎭 Welcome to the Random Joke Generator!\n');
    
    // Get a random joke
    console.log('1. Fetching a random joke...');
    const randomJoke = await getRandomJoke();
    displayJoke(randomJoke);
    
    // Get a programming joke
    console.log('2. Fetching a programming joke...');
    const programmingJoke = await getJokeByType('programming');
    displayJoke(programmingJoke);
    
    // Get multiple jokes
    console.log('3. Fetching 3 random jokes...');
    const multipleJokes = await getMultipleJokes(3);
    multipleJokes.forEach((joke, index) => {
      console.log(`Joke ${index + 1}:`);
      displayJoke(joke);
    });
    
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the main function
main();

// Export for use as a module
export { getRandomJoke, getJokeByType, getMultipleJokes, displayJoke, Joke };
