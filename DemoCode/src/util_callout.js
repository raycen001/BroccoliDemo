import { message } from "antd";
import axios from 'axios'

const submit = (name,email) => {
  console.log({email});
  console.log({name});
  return new Promise(async (resolve, reject) => {
      try {

        if (email == 'usedemail@airwallex.com') {
          reject('Unknown Error');
        } else {
          var result = await axios.post('https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth', {
              name: name,
              email: email
          });
          console.log({result});
          resolve(result.status);
        }
      } catch(e) {
        reject(e);
      }
  });
};
export default {
  submit
};
