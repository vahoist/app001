import { Component, OnInit } from '@angular/core';

import { boldDirective } from '../directives/bold.directives';

import { trigger, state, style, animate, transition } from '@angular/animations';

// for 
//import { NgForm } from '@angular/forms';

// Import for data-driven
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// import { joinPipe } from '../pipes/join.pipe'

import { UserService } from '../services/user.services';
import { User } from '../models/user.model';

// declare var jQuery: JQueryStatic;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
  animations: [
    trigger("userState",
      [state("active", style({
        background: "red",
        transform: "scale(1)"
      })),
      state("inactive", style({
        background: "green",
        transform: "scale(1.1)",
        width: "*"

      })),
      transition("void => *", [
        style({
          background: "blue",
          transform: "scale(1)"
        }),
        animate("300ms ease-in", style({
          background: "yellow",
          transform: "scale(2)"
        })
        )
      ]),

      transition("* => *", [
        style({
          background: "red",
          transform: "scale(1)"
        }),
        animate("300ms ease-in", style({
          background: "red",
          transform: "scale(2)"
        })
        )
      ]),



      transition("active => inactive", animate("300ms ease-in"))
      ])
  ]
})
export class HomeComponent implements OnInit {
  users: User[];
  isFormSubmitted: boolean = false;
  isLoginForm: boolean = false;
  //navItems: Array<String> = ['ff', 'ss', 'tt'];
  //testVar: string = 'testVa';
  //factorialNumber: number = 10;
  //testArr: Array<any> = ['aaaa', 'bbbb'];
  //size: String = '30px';

  // define userForm variable as FormGroup
  userForm: FormGroup;
  REG_EXP: any = /[0-9]/;
  selectedUser: User;


  constructor(
    //Add method which using FormBuilder class to build data-driven form
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // jQuery(document).ready(() => {

    // });
    this.users = this.userService.getUsers();


    this.userForm = this.formBuilder.group({
      id: [this.selectedUser ? this.selectedUser.id : null],
      firstName: [this.selectedUser ? this.selectedUser.firstName : null, Validators.required],
      lastName: [this.selectedUser ? this.selectedUser.lastName : null, [Validators.required, Validators.pattern(this.REG_EXP)]],
      email: [this.selectedUser ? this.selectedUser.email : null],
      age: [this.selectedUser ? this.selectedUser.age : null]
    });
  }

  animStarted(): void {
    console.log("animStarted");
    // for (var i = 0; i < 999; i++) {
    //   console.log(i);
    // }

    setTimeout(function () { console.log("animStarted100"); }, 1000);
    console.log("animStartedAfter");

  }


  toggleState() {
    if (this.selectedUser.state === "inactive") {
      this.selectedUser.state = "active";
    } else {
      this.selectedUser.state = "inactive";
    }


  }
  onSelect(currentUser: User) {
    this.selectedUser = currentUser;
    this.userForm.controls["id"].setValue(this.selectedUser.id);
    this.userForm.controls["firstName"].setValue(this.selectedUser.firstName);
    this.userForm.controls["firstName"].setValue(this.selectedUser.firstName);
    this.userForm.controls["lastName"].setValue(this.selectedUser.lastName);
    this.userForm.controls["email"].setValue(this.selectedUser.email);
    this.userForm.controls["age"].setValue(this.selectedUser.age);

  }

  clearControlValidation(name: string) {
    this.userForm.controls[name].markAsUntouched();
  }


  onClear(e: Event, form: FormGroup) {
    this.userForm.reset();
    this.selectedUser = null;
  }

  deleteUser() {
    let id: string = this.selectedUser.id;
    let intId: number = this.users.findIndex(x => x.id === this.selectedUser.id);
    this.selectedUser = null;
    this.users.splice(intId, 1);

  }

  // was template-driven
  //onSubmit(e: Event,form NgForm) {

  // data-driwen form
  onSubmit(e: Event, form: FormGroup) {
    e.preventDefault();
    this.isFormSubmitted = true;

    //let newUser: User = new User(form.controls["firstName"].value, form.controls["lastName"].value, //form.controls["email"].value, form.controls["age"].value);
    // to remove dublicate user objects
    //this.users = new Array<User>();
    //this.users.push(newUser);
    let newUser: User = form.value;
    this.userForm.controls["lastName"].markAsUntouched();
    if (this.userForm.valid) {

      if (newUser.id === undefined || newUser.id === null) {
        newUser.state = "inactive";
        this.userService.addUser(newUser);
        this.isFormSubmitted = false;
        this.userForm.reset();
      }
      else {
        this.userService.editUser(newUser);
        this.isFormSubmitted = false;
        this.userForm.reset();
      }
      console.log(this.userService.getUsers());

      this.userService.getUsers();

      //this.users.forEach(user => user.state = "inactive");
    }
  }
}
