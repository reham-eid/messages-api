import { IsString } from 'class-validator'

export class createMsgDto{
  @IsString({
    message:'Message content must be string'
  })
  content:string
}