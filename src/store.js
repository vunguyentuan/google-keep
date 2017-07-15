export const getData = () => {
  const jsonString = localStorage.getItem('google-keep')

  if (!jsonString) {
    return []
  }

  return JSON.parse(jsonString);
}

export const updateData = (newData) => {
  localStorage.setItem('google-keep', JSON.stringify(newData))
}