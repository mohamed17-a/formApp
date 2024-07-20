import { Component,OnInit  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  //inputs
  nameInput:string="";
  ageInput!:number;
  //arrays to store inputs
  users:string[]=[];
  ages:number[]=[];
  phoneNumbers:string[]=[];
  // regex to test: 
  nameRegex:any =/^[a-zA-Z]+$/;
  //error handling
  nameError:boolean=false; 
  ageError:boolean=false;
  phoneError:boolean=false;

  addPhoneNumber(): void {
    this.phoneNumbers.push("");
    console.log(this.phoneNumbers)
  }

  removePhoneNumber(index: number): void {
    this.phoneNumbers.splice(index, 1);
  }
  add():void{
    
  if(this.nameInput!='' && this.nameRegex.test(this.nameInput)){
    this.users.push(this.nameInput)
  }
  else{
    this.nameError=true;
    setTimeout(()=>{this.nameError=false;},4000)
  }

  if(this.ageInput>=18){
      this.ages.push(this.ageInput)
  }

  else{
    this.ageError=true;
    setTimeout(()=>{this.ageError=false;},4000)
  }
  if(this.phoneNumbers.length>0){
    this.phoneError=false;
  }
  for(let i in this.phoneNumbers){
    if(this.phoneNumbers[i]==''){
      this.phoneError=true;
      setTimeout(()=>{this.phoneError=false;},4000)
    }
  }
  this.nameInput=''
  !this.ageError && !this.nameError && !this.phoneError ? Swal.fire({
    title: 'Success!',
    text: 'Form submitted successfully.',
    icon: 'success',
    confirmButtonText: 'OK'
  }) : Swal.fire({
    title: 'Error!',
    text: 'Unfortunatley,Form haven\'t submitted.',
    icon: 'error',
    confirmButtonText: 'Edit' });
  }
}
