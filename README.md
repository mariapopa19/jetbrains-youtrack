# **YouTrack Sample Widget**

This is a simple YouTrack app that demonstrates how to use the `MAIN_MENU_ITEM` extension point to create a single-page application. The app displays a list of available projects and includes a toggle to enable or disable a global boolean flag. The flag's state is persisted on the YouTrack server backend.

---

## **Features**

- Fetches and displays a list of available projects from the YouTrack API.
- Provides a toggle to manage a global boolean flag.
- Persists the flag's state on the YouTrack server backend.
- Built using:
  - **React** for the frontend.
  - **Ring UI** for consistent styling with YouTrack's design system.
  - **TypeScript** for type safety and maintainability.

---

## **Installation**

### **1. Prerequisites**

- YouTrack instance with administrator access.
- Node.js and npm installed on your local machine.

### **2. Build the App**

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the app:

   ```bash
   npm run build
   ```

### **3. Package the App**

1. Create a `.zip` file for the app:

   ```bash
   npm run pack
   ```

2. The `.zip` file will be located in the `dist` folder.

### **4. Upload to YouTrack**

1. Go to **Administration > Apps** in your YouTrack instance.
2. Click **Upload App** and select the `.zip` file.
3. Follow the instructions to install the app.

---

## **Usage**

1. After installation, the app will appear in the main menu of your YouTrack instance.
2. Click on the app to:
   - View the list of available projects.
   - Use the toggle to enable or disable the global boolean flag.

---

## **Technologies Used**

- **React**: For building the user interface.
- **Ring UI**: For consistent styling with YouTrack's design system.
- **TypeScript**: For type safety and better code maintainability.
- **YouTrack REST API**: For fetching project data and persisting the flag.

---

## **Project Structure**

```plain
src/
├── widgets/
│   └── sample-winget/
│       ├── app.tsx       # Main React component
│       ├── app.css       # Styling for the app
│       └── manifest.json # App configuration
```
