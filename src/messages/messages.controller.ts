import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { createMsgDto } from './dto/create.message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

  constructor(public messagesService : MessagesService){}

  @Get()
  listMessages(){
    return this.messagesService.findAll()
  }
  @Post()
  createMessages(@Body() body : createMsgDto){
    this.messagesService.createOne(body.content)
    console.log(body)
  }
  @Get('/:id')
  async getMessages(@Param('id') ids : string){
    const message = this.messagesService.findOne(ids)
    if (!message) {
      throw new NotFoundException('message not found')
    }
    return message
  }
}
