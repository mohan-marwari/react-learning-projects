# Tailwind CSS Card Project

This project demonstrates how to build a responsive and customizable card component using **Tailwind CSS** in a **Vite** React application.

## Features

- **Responsive Design**: Adjusts seamlessly across different screen sizes.
- **Utility Classes**: Uses Tailwind's utility-first approach for styling.
- **Email Subscription**: Includes a simple form to capture user emails.
- **Customizable**: Easily modify colors, typography, and layout using Tailwind's configuration.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd tailwind-card-project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## File Structure

```
/src
  |-- components
  |     |-- Card.jsx
  |-- styles.css
/public
  |-- index.html
vite.config.js
tailwind.config.js
```

## Usage

1. **Card Component**: Located in `src/components/Card.jsx`. This component includes:
   - A heading for the hero section.
   - A content section with a description, input field, and a button.

2. **Styling**: Tailwind CSS is used for all styles, defined in `src/styles.css`. Customize colors and typography in `tailwind.config.js`.

## Example Code

### **Card Component**
```jsx
const Card = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto">
      {/* Hero Section */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">News you can Trust.</h1>
      </div>

      {/* Content Section */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-700">Stay up to date with the Latest!</h3>
        <p className="mt-2 text-gray-600">
          Subscribe to our newsletter for the latest news straight into your inbox.
        </p>
        <form className="mt-4 flex flex-col items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Subscribe Now
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-500">We value your privacy</p>
      </div>
    </div>
  );
};

export default Card;
```

## Customization

1. **Modify Tailwind Config**:
   Update the `tailwind.config.js` file to extend themes or add custom colors.
   ```js
   module.exports = {
     theme: {
       extend: {
         colors: {
           customBlue: '#1e40af',
         },
       },
     },
   };
   ```

2. **Add Plugins**:
   Use Tailwind plugins like `@tailwindcss/forms` for better form styling.
   ```bash
   npm install @tailwindcss/forms
   ```

   Add the plugin to `tailwind.config.js`:
   ```js
   module.exports = {
     plugins: [
       require('@tailwindcss/forms'),
     ],
   };
   ```

## Screenshot Preview

![Card Component Preview](./src/assets/screenshot.png)

## Deployment

To build the project for production:
```bash
npm run build
```
Serve the `dist` folder using any static server.

## Author

- **Name**: Mohan Marwari
- **Twitter**: [@mohan-marwari](https://twitter.com/mohan_marwari)
- **LinkedIn**: [Mohan Marwari](https://linkedin.com/in/mohan-marwari)
