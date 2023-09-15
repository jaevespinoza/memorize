/**
 * Inside this JSON reside the actions that the Redux reducer will receive
 * upon certain actions being done such as saving the username or when
 * a success or an error occurs while playing the game.
 */
const AppTypeActions = {
  UserName: "[AppTypeActions] Set name written by user on dialog",
  Count: {
    Error: "[AppTypeActions] Set the number of errors done by the user",
    Success: "[AppTypeActions] Set the number of successes done by the user",
  },
  Images: "[AppTypeActions] Save the images obtained by the Mobyo API",
};

export default AppTypeActions;
