import { useState, useEffect } from 'react'
export const UserInfoPage = () => {
  const [favoriteFood, setFavoriteFood] = useState('')
  const [hairColor, setHairColor] = useState('')
  const [bio, setBio] = useState('')

  // Show either success message or error message
  const [showErrorMessage, setShowErrorMessage] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState('')

  useEffect(() => {
    if (showSuccessMessage || showErrorMessage) {
      setTimeout(() => {
        setShowSuccessMessage(false)
        setShowErrorMessage(false)
      }, 3000)
    }
  }, [showSuccessMessage, showErrorMessage])

  // Functions to add actions when clicking on the buttons
  const saveChanges = async () => {
    // Send a request to the server to
    // update the user's info with any changes we've
    // made to the text input values
    alert('Save functionality not implemented yet')
  }

  const logOut = () => {
    // We'll want to log the user out here
    // and send them to the "login page"
    alert('Log out functionality not implemented yet')
  }

  const resetValues = () => {
    // Reset the text input values to
    // their starting values (the data we loaded from the server)
    alert('Reset functionality not implemented yet')
  }
  return (
    <div className="content-container">
      {showSuccessMessage && (
        <div className="success">Successfully saved user data!</div>
      )}
      {showErrorMessage && (
        <div className="fail">
          Uh oh... something went wrong and we could not save changes
        </div>
      )}
      <label htmlFor="userFood">
        Input your food:
        <input
          type="text"
          value={favoriteFood}
          onChange={(e) => setFavoriteFood(e.target.value)}
        />
      </label>
      <label htmlFor="userHair">
        Input your hair color:
        <input
          type="text"
          value={hairColor}
          onChange={(e) => setHairColor(e.target.value)}
        />
      </label>
      <label htmlFor="userBio">
        Bio
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </label>
      <hr />
      <button onClick={saveChanges}>Save Changes</button>
      <button onClick={logOut}>Log Out</button>
      <button onClick={resetValues}>Reset</button>
    </div>
  )
}
