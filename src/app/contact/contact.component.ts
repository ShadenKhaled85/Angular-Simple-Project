import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  userName !: string ;
  userAge !: number ;
  userEmail !: string ;
  userPassword !: string;
  userFocused : boolean = false;
}
