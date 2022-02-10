import { v4 as uuidv4 } from 'uuid';
import validatePost from '../validators/validatePost'; 

const postPost = async request => {
  const value = await request.json()
  const objectValidated = await validatePost(value)
  
  if(!objectValidated) {
    return new Response('Contents of POST request did not meet the required syntax criteria', {status: 400})
  }
  
  const key = "post_" + uuidv4()
  value['id'] = key
  const stringifiedValue = JSON.stringify(value)
  await FILES.put(key, stringifiedValue)

  return new Response(key, {status: 200, headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json' 
  }})
}

export default postPost
