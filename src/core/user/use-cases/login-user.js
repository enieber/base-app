import * as R from 'rambda';

async function requestLogin(data) {
  return {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  }
}

export const userLogin = (data) => {
  return R.pipe(
    data,
    validateData,
    requestLogin
  )
}
