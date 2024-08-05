# Login App

Welcome to the Login App! This app allows users to securely log in and access their accounts.

## Features

- User registration: Users can create a new account by providing their email address and password.
- User login: Existing users can log in to their accounts using their registered email address and password.
- Password reset: Users can request a password reset if they forget their password.
- Account management: Users can update their account information, such as email address and password.

## Technologies Used

This app is built using the following technologies:

- Frontend: React and Tailwind
- Backend: Strapi running on port 1337

## Installation

To run this app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/k1muza/pinda.git`
2. Navigate to the project directory: `cd pinda`
3. Install the dependencies: `npm install`
4. Start the server: `npm run dev`
5. Open your browser and visit: `http://localhost:3000`

## Strapi Setup

1. Start your Strapi server and open the admin panel.
2. Navigate to `Settings > USERS & PERMISSIONS PLUGIN > Roles`. For the *Authenticated* role, enable the permissions for actions that require authentication (like viewing protected content).
3. If you have custom data that only authenticated users should access, create those collections or single types.

## Usage

Once the app is running, you can access the login functionality by visiting the homepage. From there, you can register a new account or log in to an existing account.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
