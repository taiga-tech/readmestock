export default function (context) {
  const accessToken = process.env.GITHUB_API_TOKEN

  return {
    httpEndpoint: 'https://api.github.com/graphql',
    getAuth: () => `Bearer ${accessToken}`,
  }
}
