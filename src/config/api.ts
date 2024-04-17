const base = 'http://localhost:4001/'

export const API_googleAuthSignUp = base + 'api/user/google/signup'
export const API_googleAuthSignIn = base + 'api/user/google/signin'

export const API_TokenVeify = base + 'api/user/jwt/verify/'
export const API_OtpVerify = base + 'api/user/otp/verify'
export const API_OtpResend = base + 'api/user/otp/resend'

export const API_SignUp = base + 'api/user/signUp'
export const API_SignIn = base + 'api/user/signIn' 


export const API_NoteCreate = base + 'api/notes/createNote' 
export const API_NoteEdit = base + 'api/notes/EditNote' 
export const API_NoteDelete = base + 'api/notes/deleteNote/'  
export const API_NotesFetch = base + 'api/notes/get/' 