import { Component, OnInit } from "@angular/core";
import { Registration } from "../models/registration.model";
import { Nationality } from "../models/nationality.model";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  registration: Registration = {
    titleCode: null,
    firstName: null,
    mobileNumber: null,
    nationality: null,
    birthDate: null,
    address: null,
    addressStayingDuration: null,
    maritalStatus: null,
    spouseName: null
  };
  spouse = false;
  nationalities: Nationality[] = [
    { id: 1, name: "American" },
    { id: 2, name: "Indian" }
  ];

  married = false;
  constructor() {
    this.datePickerConfig = Object.assign({}, { containerClass: "theme-blue" });
  }

  ngOnInit() {}
  saveDetails(formDeatails) {
    console.log("form values", formDeatails);
  }
  marital() {
    if (this.registration.maritalStatus == "married") {
      this.married = true;
    } else this.married = false;
    return true;
  }
}
