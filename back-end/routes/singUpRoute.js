export const signUpPage = {
  path: '/api/signup',
  method: 'post',
  handler: async (req, res) => {
    const { email, password } = req.body
  },
}