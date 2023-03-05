let UUID = 665

export default function UniqueID() {
  const getID = () => {
    UUID++
    return UUID
  }
  return { getID }
}
