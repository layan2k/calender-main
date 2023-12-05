# Scheduling Calendar

This is a Scheduling Calendar application built with React, Tailwind CSS, dayjs, and Ant Design. It utilizes Context to manage state across the application and offers various features to schedule appointments effectively.

## Features

* **Day, Week, and Month Views:** Switch between different calendar views to suit your needs.
* **Appointment Scheduling:** Click on a day to open a modal and schedule an appointment with specific time and details.
* **Local Storage:** Appointments are saved in local storage for persistent access.
* **Fully Responsive:** The calendar adapts seamlessly to different screen sizes and devices.
* **Built with Context:** Simplifies state management across the application.
* **Tailwind CSS:** Utilizes Tailwind CSS for rapid and responsive styling.
* **Ant Design:** Leverages Ant Design components for a clean and modern UI.

### Requirements

* Node.js 16+
* NPM 7+

### Installation

1. Clone this repository:

```bash

git clone https://github.com/layan2k/calender-main.git

```

2. Move into the project directory:

```bash
cd calendar-main
```

3. Install dependencies:

```bash
npm install or pnpn install or yarn
```

### Development

1. Start the development server:

```bash
npm run dev or  pnpm run dev or yarn dev
```

2. Open <http://localhost:5173> in your browser to access the application

### Build for Production

1. Build the application for production:

```bash
npm run build or pnpm run buil or yarn build
```

2. The production build will be generated in the `build` directory.

### Deployment

You can deploy the application to any static hosting platform like Netlify, Vercel, or Heroku.

### Localstorage

The application utilizes localstorage to persist appointments. Appointments are stored as an array of objects, where each object contains the following properties:

```json
{
  date: "2023-12-05",
  time: "10:00",
  title: "Meeting with John Doe",
  details: "Discuss project progress and next steps.",
}
```

## Project Demo

<https://ucalender.netlify.app/>

## Contributing

We welcome contributions to this project! If you have any bug fixes, feature suggestions, or pull requests, please feel free to create an issue or submit your contribution through GitHub.

## License

This project is licensed under the MIT license. See the LICENSE file for details.
