const headerWithToken = async ({ configHeader }) => {
  const token = localStorage.getItem('token') || ''

  if (!token) {
    const newToken = await fetchNewTokens() // 打 RefreshToken API
    return {
      ...configHeader,
      Authorization: `Bearer ${newToken}`
    }
  }

  return {
    ...configHeader,
    Authorization: `Bearer ${token}`
  }
}

export {
  headerWithToken
}

// 打 RefreshToken API
// eslint-disable-next-line require-await
const fetchNewTokens = async () => {
  return 'testTokenHeader'
}
