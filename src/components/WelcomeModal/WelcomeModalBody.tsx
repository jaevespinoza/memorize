interface IWelcomeModalBody {
  onSaveName: () => void;
  nameInput: string;
  setNameInput: (name: string) => void;
}

/**
 * Body of the welcome modal that will hold the form to
 * write the name of the user
 * @param onSaveName Function to execute after the name is submitted
 * @param nameInput Input of the name written by the user
 * @param setNameInput Function that saves the input into the component's state
 */
const WelcomeModalBody = ({
  onSaveName,
  nameInput,
  setNameInput,
}: IWelcomeModalBody) => {
  /**
   * Upon pressing the "Enter" key, the name should be saved.
   * It also makes sure that the name input exists
   * @param event Key press event
   */
  const enterKeyHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && nameInput.length > 0) {
      onSaveName();
      event.preventDefault();
    }
  };

  return (
    <>
      <p>
        To ensure a better experience, please write your name in the field
        below:
      </p>
      <form>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full name
          </label>
          <input
            type="text"
            onChange={(event) => setNameInput(event.currentTarget.value)}
            onKeyDown={enterKeyHandler}
            className="form-control"
            id="fullName"
            aria-describedby="emailHelp"
          />
        </div>
      </form>
    </>
  );
};

export default WelcomeModalBody;
