/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html',
  './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
  './vendor/laravel/jetstream/**/*.blade.php',
  './storage/framework/views/*.php',
  './resources/views/**/*.blade.php',
],
  theme: {
    extend: {},
  },
  plugins: [],
}

