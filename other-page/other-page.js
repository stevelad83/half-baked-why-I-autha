// use checkAuth function to redirect is user not authenticated

import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const logOutButton = document.getElementById('logout');

logOutButton.addEventListener('click', async () => {
    await logout();
});
// add event listener to the logout button and call logout
