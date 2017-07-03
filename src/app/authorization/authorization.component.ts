import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"

import {RegExpCommon} from "../common/regexp.component"

@Component({
    selector: "app-auth",
    templateUrl: "./authorization.component.html",
    styleUrls: ["./authorization.component.html"]
})
export class AuthorizationComponent implements OnInit {

    authForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder
    ) {

    }

    ngOnInit() {
        this.authForm = this.formBuilder.group({
            email:[null,[Validators.required,Validators.pattern(RegExpCommon.EMAIL)]],
            password:[null,[Validators.required,Validators.pattern(RegExpCommon.PASSWORD)]]
        })
    }
}