declare namespace Express {
  export interface Request {
    userId: string
    validToken: boolean
  }
}