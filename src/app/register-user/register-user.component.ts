import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';

import { User } from '../user';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerForm: FormGroup | any;
    submitted = false;
 
    City: any = ['Bangalore','Chennai', 'Delhi', 'Kolkatta','Mumbai', 'Hyderabad',]
    
    user:User=new User();

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNo:  ['', [Validators.required]],
      street:  ['', [Validators.required]],
      city:  ['', [Validators.required]],
      pincode:  ['', [Validators.required]],
  });
  }
  
  get f() { return this.registerForm.controls; }
 
  changeCity(e:string|any) {
    this.registerForm.get('city').setValue(e.target.value, {
     onlySelf: true
    })
  }

  User(): void {
    this.submitted = false;
    this.user= new User();
  }

  onSubmit() {
    this.submitted = true;
 this.user=this.registerForm.value;
 // stop the process here if form is invalid
 if (this.registerForm.invalid) {
   return;
 }
 
 this.save();
 }
 
 save() {
 
   this.authenticationService.saveUser(this.user)
   .subscribe(data => console.log(data), error => console.log(error));
 this.user= new User();
 // this.address=new Address();
 
 this.gotoList();
 }
 gotoList() {
   this.router.navigate(['/loginuser']);
 }
}
