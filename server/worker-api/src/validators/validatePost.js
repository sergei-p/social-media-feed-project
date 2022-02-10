const validatePost = async postObj => {
  if('title' in postObj && 'username' in postObj && 'content' in postObj && 'timestamp' in postObj){
    return true
  }
  return false
}

export default validatePost