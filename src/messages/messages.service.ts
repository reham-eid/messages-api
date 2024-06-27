import { Injectable } from '@nestjs/common'
import { MessagesRepository} from './messages.repository'

@Injectable()
export class MessagesService{
  
constructor(public messagesRepo : MessagesRepository){}
  findOne(id:string){
    return this.messagesRepo.findOne(id)
  }

  findAll(){
    return this.messagesRepo.findAll()
  }

  createOne(message:string){
    return this.messagesRepo.createOne(message)
  }
}