export async function getProducts() {
  try {
    const serverUrl = 'http://localhost:5000/products'
    const response = await fetch(serverUrl)

    if (!response) {
      throw new Error('Erro na requisição')
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}
