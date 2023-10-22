export const HomePage = {
  path: '/api/home',
  method: 'get',
  handler: (req, res) => {
    res.send('You have landed in the Home Page')
  },
}
