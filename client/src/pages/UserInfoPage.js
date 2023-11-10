import { useState } from 'react'
const UserInfoPage = () => {
  const [favoriteFood, setFavoriteFood] = useState('')
  const [hairColor, setHairColor] = useState('')
  const [bio, setBio] = useState('')

  // Success and Error messages
  const [showSuccess, setShowSuccess] = useState('')
  const [showError, setShowError] = useState('')

  // Show and hide success and error message when interacting with the page

  // Add functionality to the buttons
  const saveChanges = async () => {
    alert('Save functionality has to be implemented')
  }

  const resetValues = async () => {
    alert('Reset functionality has to be implemented')
  }

  const logOut = async () => {
    alert('Log out functionality has to be implemented')
  }
  return (
    <div>
      {showSuccess && <div>Your data has been saved successfully</div>}
      {showError && (
        <div>Your data could not be save... Something went wrong</div>
      )}

      <label htmlFor="userFavoriteFood">
        Favorite Food:
        <input
          type="text"
          value={favoriteFood}
          onChange={(e) => setFavoriteFood(e.target.value)}
        />
      </label>
      <label htmlFor="userHairColor">
        Hair Color:
        <input
          type="text"
          value={hairColor}
          onChange={(e) => setHairColor(e.target.value)}
        />
      </label>
      <label htmlFor="userBio">
        Bio:
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </label>

      <button onClick={saveChanges}>Save Changes</button>
      <button onClick={resetValues}>Reset Values</button>
      <button onClick={logOut}>Log Out</button>
    </div>
  )
}

export default UserInfoPage
