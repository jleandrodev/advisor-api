import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors/AppError"
import { prisma } from "../services/prisma"



export function accessControllVerify (role : string[]) {
  return async (request : Request, response : Response, next : NextFunction) => {
    const { userId } = request

    const user = await prisma.user.findUnique({ 
      where: { id: userId },
      select: {
        id: true,
        user_roles: {
          select: {
            roleId: true
          }
        }
      }
    })

    if(!user) {
      throw new AppError('User not exists', 404)
    }

    try {
      
      const userRoles = user.user_roles[0].roleId

      
  
      const roleName = await prisma.roles.findUnique({ 
        where: { id: userRoles },
        select: {
          name: true
        }
      })
  
      const isAuthorized = role.includes(roleName!.name)
      if(!isAuthorized){
        throw new AppError('Not permission', 401)
      }
      
  
  
      next()
    } catch (e) {
      response.status(400).send({ message: 'Not permission' })
    }

  }
}