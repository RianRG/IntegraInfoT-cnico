import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat-service';
import { HttpService } from '../../services/http-service';
import { TextDTO } from '../../../TextDTO';

@Component({
  selector: 'app-chat-component',
  imports: [ReactiveFormsModule],
  templateUrl: './chat-component.html',
  styleUrl: './chat-component.css',
  standalone: true
})
export class ChatComponent {
  @ViewChild('hr') hr!: ElementRef

  form!: FormGroup;
  messages: TextDTO[] = [];
  constructor(
    private fb: FormBuilder,
    // private websocket: ChatService,
    // private http: HttpService
  ){

    // this.http.getTexts().subscribe((data: TextDTO[]) =>{
    //   this.messages = data;
    // })

    this.form = this.fb.group({
      content: ['', Validators.required]
    })
  };

  ngOnInit(): void{
    // this.websocket.getMessages().subscribe((data: string) =>{
    //   this.messages.push({
    //     content: data,
    //     sender: 'Assistent'
    //   })
    //   this.form.enable();
    //   if (this.hr && this.hr.nativeElement) {
    //     this.hr.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    //   }
    // })
  }

  onSubmit(){
    this.form.disable()
    // this.websocket.sendMessage(this.form.value.content);
    this.messages.push({
      content: this.form.value.content,
      sender: 'User'
    });
    this.form.reset();
    if (this.hr && this.hr.nativeElement) {
      this.hr.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
}
