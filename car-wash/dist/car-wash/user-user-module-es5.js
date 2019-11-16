function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/change-password/change-password.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/change-password/change-password.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserChangePasswordChangePasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-user-header></app-user-header>\n<div class=\"login-div margin-top-1vw col-md-3\">\n    <h3 class=\"text-center\">\n        <span class=\"badge badge-secondary \">Change Password</span>\n    </h3>\n    <div *ngIf=\"errorMesg\" class=\"error-message\">{{errorMesg}}</div>\n    <div [formGroup]=\"changePassword\">\n\n        <div class=\"form-group\">\n            <label for=\"newPassword\">New Password</label>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n                <input type=\"password\" placeholder=\"Enter the password\" class=\"form-control\" id=\"newPassword\" formControlName=\"newPassword\"\n                    [ngClass]=\"{error:changePassword.get('newPassword').invalid ||changePassword.controls.confirmPassword?.errors?.notEqual}\">\n            </div>\n            <span class=\"error-text\" *ngIf=\"changePassword.get('newPassword').invalid &&changePassword.get('newPassword').touched\">*Required Field</span>\n           \n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"confirmPassword\">New Password</label>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n                <input type=\"password\" placeholder=\"Enter the password\" class=\"form-control\" id=\"confirmPassword\" formControlName=\"confirmPassword\"\n                    compareField=\"newPassword\" [ngClass]=\"{error:changePassword.get('confirmPassword').invalid &&changePassword.get('confirmPassword').touched}\">\n            </div>\n            <span class=\"error-text\" *ngIf=\"changePassword.get('confirmPassword').invalid &&changePassword.get('confirmPassword').touched && !changePassword.get('confirmPassword').errors?.notEqual\">*Required Field</span>\n            <br>\n            <span class=\"error-text\" *ngIf=\"changePassword.get('confirmPassword').errors &&changePassword.get('confirmPassword').errors.notEqual\">*New Password and confirm password are not equal</span>\n        </div>\n    </div>\n    <div class=\"btn-toolbar\">\n        <button type=\"submit\" title=\"Please fill the required field to enable SignIn button\" class=\"btn btn-primary btn-space\" (click)=\"changeUserPassword(changePassword.value.confirmPassword,changePassword.value.newPassword)\">Save Password</button>\n    </div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/edit-user/edit-user.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/edit-user/edit-user.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserEditUserEditUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-user-header></app-user-header>\n\n<div class=\"margin-top-1vw login-div\">\n    <div [formGroup]=\"editProfile\">\n        <h3 class=\"text-center\">\n            <span class=\"badge badge-secondary \">Edit Profile</span>\n        </h3>\n\n        <div *ngIf=\"successMesg\" class=\"success-message\">{{successMesg}}</div>\n        <div *ngIf=\"errorMesg\" class=\"error-message\">{{errorMesg}}</div>\n\n        <div class=\"form-group col-md-12\">\n\n            <div class=\" img-div user-profile-image position-relative\">\n                <div class=\"img-div img-peview position-absolute\" *ngIf=\"imagePreview\">\n                    <img [src]=\"imagePreview\">\n                    <i class=\"fa fa-check font-size-small check-box \" aria-hidden=\"true\"></i>\n\n                    <i class=\"fa fa-times form-checkbox font-size-small check-box\" aria-hidden=\"true\"></i>\n\n                </div>\n\n                <div class=\"edit-img-position hover\" title=\"Click to edit pic\">\n                    <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" (click)=\"toggleImgUpload()\">\n\n                    </i>\n                    <div style=\"display:inline-block;position:absolute\">\n                        <div>\n                            <input *ngIf=\"uploadImg\" type=\"file\" (change)=\"selectFile($event)\">\n                        </div>\n\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n\n\n        <div class=\"modal-body row\">\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"userName\">User Name</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <input type=\"text\" placeholder=\"Name\" class=\"form-control\" [ngClass]=\"{error:editProfile.get('userName').invalid && editProfile.get('userName').touched} \"\n                        id=\"userName\" [ngModel]=\"user.userName\" formControlName=\"userName\">\n                </div>\n                <span class=\"error-text\" *ngIf=\"editProfile.get('userName').invalid && editProfile.get('userName').touched\">*Required Field</span>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"mobileNo\" style=\"display:block\">Mobile Number</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <input type=\"text\" [ngModel]=\"user.mobileNo\" placeholder=\"Enter 10 digit mobile number\" class=\"form-control col-md-10\" [ngClass]=\"{error:editProfile.get('mobileNo').invalid && editProfile.get('mobileNo').touched }\"\n                        id=\"mobileNo\" style=\"display:inline\" formControlName=\"mobileNo\">\n                </div>\n                <span class=\"error-text\" *ngIf=\"editProfile.get('mobileNo').invalid && editProfile.get('mobileNo').touched\">*Required Field</span>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"emailId\">Email</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <input type=\"text\" placeholder=\"Enter Email Id\" [ngModel]=\"user.emailId\" class=\"form-control\" [ngClass]=\"{error:editProfile.get('emailId').invalid&&editProfile.get('emailId').touched}\"\n                        id=\"firmName\" formControlName=\"emailId\">\n                </div>\n                <span class=\"error-text\" *ngIf=\"editProfile.get('emailId').invalid&&editProfile.get('emailId').touched\">*Email is not in correct format</span>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"address\">Address</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-address-card\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <textarea type=\"text\" [ngModel]=\"user.address\" placeholder=\"Enter Address Details\" class=\"form-control\" [ngClass]=\"{error:editProfile.get('address').invalid&&editProfile.get('address').touched}\"\n                        id=\"firmName\" formControlName=\"address\"></textarea>\n                </div>\n                <span class=\"error-text\" *ngIf=\"editProfile.get('address').invalid&&editProfile.get('address').touched\">*Required Field and 10digit</span>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"pinCode\">Pin Code</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <input type=\"text\" [ngModel]=\"user.pinCode\" placeholder=\"Enter Pin Code\" class=\"form-control\" [ngClass]=\"{error:editProfile.get('pinCode').invalid&&editProfile.get('pinCode').touched}\"\n                        id=\"firmName\" formControlName=\"pinCode\">\n                </div>\n                <span class=\"error-text\" *ngIf=\"editProfile.get('pinCode').invalid&&editProfile.get('pinCode').touched\">*Required Field and 6 digit</span>\n            </div>\n\n        </div>\n        <button type=\"submit\" title=\"Fill all the field to enable submit button\" class=\"btn btn-primary btn-space\" [disabled]=\"editProfile.invalid\"\n            (click)=\"updateUser()\">Submit</button>\n        <button type=\"submit\" class=\"btn btn-primary btn-space\" (click)=\"cancelEdit()\">Cancel</button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-booking-service/user-booking-service.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-booking-service/user-booking-service.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserBookingServiceUserBookingServiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-user-header></app-user-header>\n<div *ngIf=\"loadSpinner\" class=\"spinner-div\"><i class=\"fa fa-spinner fa-spin spinner-style\"></i></div>\n<div class=\"margin-top-1vw login-div\" *ngIf=\"!loadSpinner\">\n    <div [formGroup]=\"bookingCarService\">\n        <h3 class=\"text-center\">\n            <span class=\"badge badge-secondary \">Booking for Wash/Maintainence</span>\n        </h3>\n\n        <div *ngIf=\"successMesg\" class=\"success-message\">{{successMesg}}</div>\n        <div *ngIf=\"errorMesg\" class=\"error-message\">{{errorMesg}}</div>\n\n        <div class=\"modal-body row\">\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"vechileNo\">Vechile Number</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-id-card\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <input type=\"text\" placeholder=\"Enter Vechile Number\" class=\"form-control\" [ngClass]=\"{error:bookingCarService.get('vechileNo').invalid&&bookingCarService.get('vechileNo').touched}\"\n                        id=\"vechileNo\" formControlName=\"vechileNo\">\n                </div>\n                <span class=\"error-text\" *ngIf=\"bookingCarService.get('vechileNo').invalid&&bookingCarService.get('vechileNo').touched\">*Required Field</span>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"vechileType\">Vechile Type</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-car\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <select id=\"vechileType\" class=\"browser-default custom-select\" formControlName=\"vechileType\" [ngClass]=\"{error:bookingCarService.get('vechileType').invalid&&bookingCarService.get('vechileType').touched}\">\n                        <!-- <option>Open this select menu</option> -->\n                        <option value=\"hb\">Hatchback</option>\n                        <option value=\"sd\">Sedan</option>\n                        <option value=\"cv\">Convertible</option>\n                    </select>\n                </div>\n                <span class=\"error-text\" *ngIf=\"bookingCarService.get('vechileType').invalid&&bookingCarService.get('vechileType').touched\">*Required Field</span>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"ownerName\">Vechile Owner Name</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <input type=\"text\" placeholder=\"Owner Name\" class=\"form-control\" [ngClass]=\"{error:bookingCarService.get('ownerName').invalid&&bookingCarService.get('ownerName').touched}\"\n                        id=\"firmName\" formControlName=\"ownerName\">\n                </div>\n                <span class=\"error-text\" *ngIf=\"bookingCarService.get('ownerName').invalid&&bookingCarService.get('ownerName').touched\">*Required Field</span>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"mobileNo\">Mobile No</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <input type=\"text\" placeholder=\"Enter Mobile Number\" class=\"form-control\" [ngClass]=\"{error:bookingCarService.get('mobileNo').invalid&&bookingCarService.get('mobileNo').touched}\"\n                        id=\"firmName\" formControlName=\"mobileNo\">\n                </div>\n                <span class=\"error-text\" *ngIf=\"bookingCarService.get('mobileNo').invalid&&bookingCarService.get('mobileNo').touched\">*Required Field and 10digit</span>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"serviceType\">Service Type</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-wrench\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <select class=\"browser-default custom-select\" id=\"serviceType\" formControlName=\"serviceType\" [ngClass]=\"{error:bookingCarService.get('serviceType').invalid&&bookingCarService.get('serviceType').touched}\">\n                        <!-- <option selected>Open this select menu</option> -->\n                        <option value=\"fcs\">Full Car Service</option>\n                        <option value=\"mcs\">Major Car Service</option>\n                        <option value=\"ics\">Interim Car Service</option>\n                    </select>\n                </div>\n                <span class=\"error-text\" *ngIf=\"bookingCarService.get('serviceType').invalid&&bookingCarService.get('serviceType').touched\">*Required Field</span>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"requirement\">Requirement</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-list\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <textarea type=\"text\" placeholder=\"Enter the Requirement\" class=\"form-control\" [ngClass]=\"{error:bookingCarService.get('requirement').invalid&&bookingCarService.get('requirement').touched}\"\n                        id=\"requirement\" formControlName=\"requirement\"></textarea>\n                </div>\n                <span class=\"error-text\" *ngIf=\"bookingCarService.get('requirement').invalid&&bookingCarService.get('requirement').touched\">*Required Field</span>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"budgetPrice\">Budget Price</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            ₹\n                        </span>\n                    </div>\n                    <input type=\"text\" placeholder=\"Enter Amount\" class=\"form-control\" [ngClass]=\"{error:bookingCarService.get('budgetPrice').invalid&&bookingCarService.get('budgetPrice').touched}\"\n                        id=\"budgetPrice\" formControlName=\"budgetPrice\">\n                </div>\n                <span class=\"error-text\" *ngIf=\"bookingCarService.get('budgetPrice').invalid&&bookingCarService.get('budgetPrice').touched\">*Required Field</span>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"areaLocation\">Area Location</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <input type=\"text\" placeholder=\"Enter Pickup Location\" class=\"form-control\" [ngClass]=\"{error:bookingCarService.get('areaLocation').invalid&&bookingCarService.get('areaLocation').touched}\"\n                        id=\"areaLocation\" formControlName=\"areaLocation\">\n                </div>\n                <span class=\"error-text\" *ngIf=\"bookingCarService.get('areaLocation').invalid&&bookingCarService.get('areaLocation').touched\">*Required Field</span>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"serviceDate\">Service Date</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <input type=\"date\" placeholder=\"Enter Pickup Location\" class=\"form-control\" [ngClass]=\"{error:bookingCarService.get('serviceDate').invalid&&bookingCarService.get('serviceDate').touched}\"\n                        id=\"serviceDate\" formControlName=\"serviceDate\">\n                </div>\n                <span class=\"error-text\" *ngIf=\"bookingCarService.get('serviceDate').invalid&&bookingCarService.get('serviceDate').touched\">*Required Field</span>\n            </div>\n\n            <div class=\"custom-control custom-checkbox my-1 mr-sm-2 form-checkbox\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"pickUp\" formControlName=\"pickUp\">\n                <label class=\"custom-control-label\" for=\"pickUp\" (click)=\"flag==true?flag=false:flag=true\">Is PickUp Required?</label>\n            </div>\n        </div>\n\n        <div formGroupName=\"pickupDetail\">\n            <div class=\"modal-body row\">\n                <div class=\"form-group col-md-6\">\n                    <label for=\"pickLocation\">PickUp Location</label>\n                    <div class=\"input-group mb-3\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\">\n                                <i class=\"fa fa-street-view\" aria-hidden=\"true\"></i>\n                            </span>\n                        </div>\n                        <input type=\"text\" [readonly]=\"!flag\" placeholder=\"Enter Pickup Location\" class=\"form-control\" [ngClass]=\"{error:bookingCarService.get('pickupDetail').get('pickLocation').invalid&&bookingCarService.get('pickupDetail').get('pickLocation').touched}\"\n                            id=\"pickLocation\" formControlName=\"pickLocation\">\n                    </div>\n                    <span class=\"error-text\" *ngIf=\"bookingCarService.get('pickupDetail').get('pickLocation').invalid&&bookingCarService.get('pickupDetail').get('pickLocation').touched\">*Required Field</span>\n                </div>\n\n                <div class=\"form-group col-md-6\">\n                    <label for=\"pickupDate\">PickUP Date</label>\n                    <div class=\"input-group mb-3\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\">\n                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                            </span>\n                        </div>\n                        <input type=\"date\" placeholder=\"Enter Pickup Location\" [readonly]=\"!flag\" class=\"form-control\" [ngClass]=\"{error:bookingCarService.get('pickupDetail').get('pickupDate').invalid&&bookingCarService.get('pickupDetail').get('pickupDate').touched}\"\n                            id=\"pickupDate\" formControlName=\"pickupDate\">\n                    </div>\n                    <span class=\"error-text\" *ngIf=\"bookingCarService.get('pickupDetail').get('pickupDate').invalid&&bookingCarService.get('pickupDetail').get('pickupDate').touched\">*Required Field</span>\n                </div>\n            </div>\n        </div>\n\n\n\n        <button type=\"submit\" title=\"Fill all the field to enable submit button\" class=\"btn btn-primary btn-space\" [disabled]=\"bookingCarService.invalid\"\n            (click)=\"submitBooking()\">Submit</button>\n        <button type=\"submit\" class=\"btn btn-primary btn-space\" (click)=\"cancelBooking()\">Cancel</button>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/user-dashboard.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/user-dashboard.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserDashboardUserDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-user-header></app-user-header>\n\n<div>\n    <div class=\"margin-top-1vw login-div\">\n        <h3 class=\"text-center\">\n\n            <span class=\"badge badge-secondary icon-medium\">\n                <i class=\"fa fa-dashcube\" aria-hidden=\"true\"></i>\n                User Dashboard</span>\n        </h3>\n        <div class=\"modal-body row\">\n            <div class=\"card\" class=\"dashboard-div hover btn-success\" [routerLink]=\"['userBookingService']\" style=\"width: 18rem;\">\n                <div class=\"card-body\">\n\n                    <h5 class=\"card-title text-center\" >\n                        <i class=\"fa fa-book\" aria-hidden=\"true\"></i>\n                        <b> Booking For Service</b>\n                    </h5>\n                    <p class=\"card-text\"></p>\n                    <!-- <a href=\"#\" class=\"btn btn-primary\">Click Here</a> -->\n                </div>\n            </div>\n            \n            <div class=\"card\" class=\"dashboard-div hover btn-info\" style=\"width: 18rem;\" [routerLink]=\"['userBookingHistory']\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title text-center\">\n                        <i class=\"fa fa-history\" aria-hidden=\"true\"></i>\n                        <b> View Older History</b>\n                    </h5>\n                    <p class=\"card-text\"></p>\n                    <!-- <a href=\"#\" class=\"btn btn-primary\">Click Here</a> -->\n                </div>\n            </div>\n\n            <div class=\"card\" class=\"dashboard-div hover btn-primary \" style=\"width: 18rem;\" [routerLink]=\"['userEdit']\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title text-center\">\n                        <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>\n                        <b> User Profile</b>\n                    </h5>\n                    <p class=\"card-text\"></p>\n                    <!-- <a href=\"#\" class=\"btn btn-primary\">Click Here</a> -->\n                </div>\n            </div>\n            \n            <div class=\"card\" class=\"dashboard-div hover btn-danger\" style=\"width: 18rem;\" [routerLink]=\"['changepassword']\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title text-center\">\n                        <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n                        <b> Change Password</b>\n                    </h5>\n                    <p class=\"card-text\"></p>\n                    <!-- <a href=\"#\" class=\"btn btn-primary\">Click Here</a> -->\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detailed-booking/user-detailed-booking.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detailed-booking/user-detailed-booking.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserDetailedBookingUserDetailedBookingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-user-header></app-user-header>\n<div *ngIf=\"loadSpinner\" class=\"spinner-div\">\n    <i class=\"fa fa-spinner fa-spin spinner-style\"></i>\n</div>\n<div class=\"margin-top-1vw login-div\" *ngIf=\"!loadSpinner\">\n    <div>\n        <h3 class=\"text-center\">\n            <span class=\"badge badge-secondary \">Booking Detail for Vechile No.: \" {{serviceDetail.vechileNo}} \"</span>\n        </h3>\n        <div *ngIf=\"loadSpinner\" class=\"spinner-div\">\n            <i class=\"fa fa-spinner fa-spin spinner-style\"></i>\n        </div>\n        <div *ngIf=\"errorMesg\" class=\"error-message\">{{errorMesg}}</div>\n\n        <div class=\"modal-body row\">\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"vechileNo\">Vechile Number</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-id-card\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <input readonly type=\"text\" class=\"form-control\" id=\"vechileNo\" [(ngModel)]=\"serviceDetail.vechileNo\">\n                </div>\n            </div>\n            \n\n            <div class=\"form-group col-md-6\">\n                <label for=\"vechileType\">Vechile Type</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-car\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <select disabled id=\"vechileType\" class=\"browser-default custom-select\" [(ngModel)]=\"serviceDetail.vechileType\">\n                        <option value=\"hb\">Hatchback</option>\n                        <option value=\"sd\">Sedan</option>\n                        <option value=\"cv\">Convertible</option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"ownerName\">Vechile Owner Name</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <input readonly type=\"text\" class=\"form-control\" id=\"firmName\" [(ngModel)]=\"serviceDetail.ownerName\">\n                </div>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"mobileNo\">Mobile No</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <input readonly type=\"text\" class=\"form-control\" id=\"firmName\" [(ngModel)]=\"serviceDetail.mobileNo\">\n                </div>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"serviceType\">Service Type</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-wrench\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <select disabled class=\"browser-default custom-select\" id=\"serviceType\" [(ngModel)]=\"serviceDetail.serviceType\">\n                        <option value=\"fcs\">Full Car Service</option>\n                        <option value=\"mcs\">Major Car Service</option>\n                        <option value=\"ics\">Interim Car Service</option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"requirement\">Requirement</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-list\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <textarea readonly type=\"text\" class=\"form-control\" id=\"requirement\" [(ngModel)]=\"serviceDetail.requirement\"></textarea>\n                </div>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"budgetPrice\">Budget Price</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            ₹\n                        </span>\n                    </div>\n                    <input readonly type=\"text\" class=\"form-control\" id=\"budgetPrice\" [(ngModel)]=\"serviceDetail.budgetPrice\">\n                </div>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"areaLocation\">Area Location</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <input readonly type=\"text\" class=\"form-control\" id=\"areaLocation\" [(ngModel)]=\"serviceDetail.areaLocation\">\n                </div>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"serviceDate\">Service Date</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <input readonly type=\"date\" class=\"form-control\" id=\"serviceDate\" [(ngModel)]=\"serviceDetail.serviceDate\">\n                </div>\n            </div>\n        </div>\n\n        <div class=\"modal-body row\">\n            <div class=\"form-group col-md-6\">\n                <label for=\"pickLocation\">PickUp Location</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-street-view\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <input readonly type=\"text\" class=\"form-control\" id=\"pickLocation\" [(ngModel)]=\"serviceDetail.pickLocation\">\n                </div>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label for=\"pickupDate\">PickUP Date</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <input readonly type=\"date\" class=\"form-control\" id=\"pickupDate\" [(ngModel)]=\"serviceDetail.pickupDate\">\n                </div>\n            </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary btn-space\" (click)=\"deleteBoking()\">Delete</button>\n        <button type=\"submit\" class=\"btn btn-primary btn-space\" (click)=\"cancelBooking()\">Cancel</button>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-header/user-header.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-header/user-header.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserHeaderUserHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand navbar-light bg-light\">\n    <a (click)=\"userDashboard()\" class=\"hover\"><i class=\"fa fa-dashcube\" aria-hidden=\"true\" style=\"color:aqua;font-size:3rem\"></i></a>\n    <a class=\"text-fontFamily form-checkbox header-color\" style=\"color: #379f9f;\">Welcome : {{userLoggedIn|uppercase}}</a>\n    <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\">\n                <i title=\"User Profile\" class=\"fa fa-user icon-medium user-icon-color hover\" [ngClass]=\"{highlightIcon:status}\" (click)=\"showHideDiv()\"\n                    aria-hidden=\"true\"></i>\n            </a>\n\n            <div class=\"profile-menu\" [ngClass]=\"{toggleShowHideDiv:status}\">\n                <button class=\"dropdown-item\" type=\"button\" [routerLink]=\"['userEdit']\" (click)=\"hideSelection()\">\n                    <i class=\"fa fa-user-circle\" aria-hidden=\"true\"> Edit Profile</i>\n\n                </button>\n                <button class=\"dropdown-item\" type=\"button\">\n                        Option\n    \n                    </button>\n\n            </div>\n        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <li class=\"nav-item\">\n            <a class=\"nav-link hover\">\n                <i title=\"User Logout\" class=\"fa fa-sign-out icon-medium user-icon-color\" (click)=\"userLogout()\" aria-hidden=\"true\"></i>\n            </a>\n        </li>\n    </ul>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-older-history/user-older-history.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-older-history/user-older-history.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserOlderHistoryUserOlderHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-user-header></app-user-header>\n<div>\n    <div class=\"margin-top-1vw booking-history-div\">\n        <h3 class=\"text-center col-md-12\">\n\n            <span class=\"badge badge-secondary icon-medium\">\n                <i class=\"fa fa-book\" aria-hidden=\"true\"></i>\n                View All Older History</span>\n        </h3>\n        <div class=\"error-message\" *ngIf=\"errorMesg\">{{errorMesg}}</div>\n        <div *ngIf=\"loadSpinner\" class=\"spinner-div\"><i class=\"fa fa-spinner fa-spin spinner-style\"></i></div>\n        <div class=\"modal-body row\" *ngIf=\"!loadSpinner\">\n            <div *ngFor=\"let eachBooking of allBookingHistory\"  class=\"card hover\" (click)=\"detailedBooking(eachBooking._id.$oid)\" style=\"width: 18rem;margin-left:2px\" id=\"{{eachBooking._id.$oid}}\">\n                <div class=\"card-body text-left\" (click)=\"detailedBooking(eachBooking._id)\">\n                    <b>Vechile No.:</b>{{eachBooking.vechileNo}}\n                    <br>\n                    <b>Service Date:</b>{{eachBooking.serviceDate|date:'dd/MM/yyyy'}}\n                    <br>\n                    <b>Pricing:</b>{{eachBooking.budgetPrice|currency:'INR'}}\n                    <p class=\"card-text\"></p>\n                </div>\n            </div>\n        </div>\n\n\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/usersignin/usersignin.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/usersignin/usersignin.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUsersigninUsersigninComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <nav class=\"navbar navbar-expand navbar-light bg-light\">\n        <div class=\"form-group\">\n        <a routerLink=\"backhome\">\n        <i class=\"fa fa-home font-size-medium\" title=\"Back to home page\"aria-hidden=\"true\"></i>        \n        </a>\n        </div>       \n    \n</nav> -->\n<nav class=\"navbar navbar-expand navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"https://irp-cdn.multiscreensite.com/4787128b/dms3rep/multi/mobile/Car-Care-new-logo.png\" style=\"width:100px\">\n    </a>\n    <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"user\">Customer</a>\n        </li>&nbsp;&nbsp;&nbsp;&nbsp;\n        <li class=\"nav-item\">\n            <a class=\"nav-link hover\" (click)=\"serviceProviderSignIn()\">Service Provider</a>\n        </li>\n    </ul>\n</nav>\n<div [formGroup]=\"userLoginForm\">\n    <div class=\"col-md-3 margin-top-1vw login-div\">\n        <h3 class=\"text-center\">\n            <span class=\"badge badge-secondary \">Customer Login Form</span>\n        </h3>\n        <div *ngIf=\"errorMesg\" class=\"error-message\">{{errorMesg}}</div>\n\n        <div class=\"form-group\">\n            <label for=\"mobileNo\">Mobile Number</label>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n                <input type=\"text\" placeholder=\"Enter 10 digit mobile number\" class=\"form-control\" [ngClass]=\"{error:userLoginForm.get('mobileNo').invalid&&userLoginForm.get('mobileNo').touched}\"\n                    id=\"mobileNo\" formControlName=\"mobileNo\">\n            </div>\n            <span class=\"error-text\" *ngIf=\"userLoginForm.get('mobileNo').invalid&&userLoginForm.get('mobileNo').touched\">*Required Field and 10digit</span>\n\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n                <input type=\"password\" placeholder=\"Enter the password\" class=\"form-control\" id=\"password\" formControlName=\"userPassword\"\n                    [ngClass]=\"{error:userLoginForm.get('userPassword').invalid &&userLoginForm.get('userPassword').touched}\">\n            </div>\n            <span class=\"error-text\" *ngIf=\"userLoginForm.get('userPassword').invalid &&userLoginForm.get('userPassword').touched\">*Required Field</span>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\" formControlName=\"rememberMe\">\n                <label class=\"form-check-label\" for=\"gridCheck\">\n                    Remember Me\n                </label>\n            </div>\n        </div>\n\n        <div class=\"btn-toolbar\">\n            <button type=\"submit\" [disabled]=\"userLoginForm.invalid\" title=\"Please fill the required field to enable SignIn button\" class=\"btn btn-primary btn-space\"\n                (click)=\"submitUser()\">Sign in</button>\n\n            <button type=\"submit\" class=\"btn btn-primary btn-space\" (click)=\"cancelSignIn()\">Cancel</button>\n            <div *ngIf=\"loadSpinner\"><i class=\"fa fa-spinner fa-spin\" style=\"font-size:24px\"></i></div>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"btn-space\">Forget Password ?</label>\n            <a routerLink=\"forgetPassword\">Click here</a>\n            <br>\n            <label class=\"btn-space\">To signup</label>\n            <a routerLink=\"usersignup\">Click here</a>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/usersignup/usersignup.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/usersignup/usersignup.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUsersignupUsersignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"https://irp-cdn.multiscreensite.com/4787128b/dms3rep/multi/mobile/Car-Care-new-logo.png\" style=\"width:100px\">\n    </a>\n    <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"user\">Customer</a>\n        </li>&nbsp;&nbsp;&nbsp;&nbsp;\n        <li class=\"nav-item\">\n            <a class=\"nav-link hover\" (click)=\"serviceProviderSignIn()\">Service Provider</a>\n        </li>\n    </ul>\n</nav>\n<div [formGroup]=\"userSignUp\">\n    <div class=\"col-md-3 margin-top-1vw login-div \">\n        <h3 class=\"text-center\">\n            <span class=\"badge badge-secondary \">User SignUP</span>\n        </h3>\n        <div class=\"form-group\">\n            <div *ngIf=\"successMesg\" class=\"success-message\">{{successMesg}}</div>\n            <div *ngIf=\"errorMesg\" class=\"error-message\">{{errorMesg}}</div>\n            <label for=\"userName\">User Name</label>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n                <input type=\"text\" placeholder=\"Customer Name\" (blur)=\"logValidationError(userSignUp)\" class=\"form-control\" [ngClass]=\"{'error':formErr.userName}\"\n                    id=\"userName\" formControlName=\"userName\">\n            </div>\n            <span class=\"error-text\" *ngIf=\"formErr.userName\">{{formErr.userName}}</span>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"mobileNo\" style=\"display:block\">Mobile Number</label>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n                <input type=\"text\" placeholder=\"Enter 10 digit mobile number\" (blur)=\"logValidationError(userSignUp)\" class=\"form-control col-md-10\"\n                    [ngClass]=\"{error:formErr.mobileNo}\" id=\"mobileNo\" style=\"display:inline\" formControlName=\"mobileNo\">\n            </div>\n\n            <span class=\"error-text\" *ngIf=\"formErr.mobileNo\">{{formErr.mobileNo}}</span>\n\n\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"emailId\" style=\"display:block\">Email-Id</label>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n                <input type=\"text\" placeholder=\"Enter Email-Id\" (blur)=\"logValidationError(userSignUp)\" class=\"form-control col-md-10\"\n                    [ngClass]=\"{error:formErr.emailId}\" id=\"mobileNo\" style=\"display:inline\" formControlName=\"emailId\">\n            </div>\n\n            <span class=\"error-text\" *ngIf=\"formErr.emailId\">{{formErr.emailId}}</span>\n\n\n        </div>\n\n        <div formGroupName=\"matchingPassword\">\n            <div class=\"form-group\">\n                <label for=\"password\">Enter Password</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <input type=\"password\" [ngClass]=\"{error:formErr.password||userSignUp.controls.matchingPassword.controls.confirmPassword?.errors?.notEqual}\"\n                        class=\"form-control\" id=\"password\" (blur)=\"logValidationError(userSignUp)\" placeholder=\"Please enter password\"\n                        formControlName=\"password\">\n                </div>\n                <span class=\"error-text\" *ngIf=\"formErr.password\">{{formErr.password}}</span>\n                <span class=\"error-text\" *ngIf=\"userSignUp.controls.matchingPassword.controls.confirmPassword?.errors?.notEqual\">*Password and confirm Password donot match</span>\n\n\n            </div>\n            <div class=\"form-group\">\n                <label for=\"confirmPassword\">Confirm Password</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">\n                            <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                    <input type=\"password\" class=\"form-control\" [ngClass]=\"{error:formErr.confirmPassword}\" compareField=\"password\" (blur)=\"logValidationError(userSignUp)\"\n                        id=\"confirmPassword\" placeholder=\"Please confirm password\" formControlName=\"confirmPassword\">\n                </div>\n                <span class=\"error-text\" *ngIf=\"formErr.confirmPassword\">{{formErr.confirmPassword}}</span>\n\n            </div>\n        </div>\n        <button type=\"submit\" title=\"Fill all the field to enable submit button\" class=\"btn btn-primary btn-space\" [disabled]=\"userSignUp.invalid\"\n            (click)=\"submitUser()\">Submit</button>\n        <button type=\"submit\" class=\"btn btn-primary btn-space\" (click)=\"cancelSignIn()\">Cancel</button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/shared/custom-validator.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/custom-validator.ts ***!
    \********************************************/

  /*! exports provided: CustomValidator */

  /***/
  function srcAppSharedCustomValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomValidator", function () {
      return CustomValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CustomValidator =
    /*#__PURE__*/
    function () {
      function CustomValidator() {}

      CustomValidator.numberValidation = function numberValidation(control) {
        if (control.value.match(/\D/)) {
          return {
            ERROR: 'Not a number'
          };
        }

        return null;
      };

      return CustomValidator;
    }();
    /***/

  },

  /***/
  "./src/app/shared/validation-message.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/validation-message.ts ***!
    \**********************************************/

  /*! exports provided: validationMessage */

  /***/
  function srcAppSharedValidationMessageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validationMessage", function () {
      return validationMessage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var errorMessage = {
      'userName': {
        'required': "User Name required "
      },
      'mobileNo': {
        'required': "* Mobile Number required",
        'minlength': "* Mobile Number should be of 10 digit",
        'maxlength': "* Mobile Number should be of 10 digit",
        'pattern': "* Mobile Number should be number"
      },
      "password": {
        'required': "Password is required"
      },
      "confirmPassword": {
        'required': "confirm Password is required",
        "notEqual": "*Password and confirm Password donot match"
      },
      "emailId": {
        'required': "Email-Id is required",
        "email": "Emid-Id should should be format xyx@gmail.com"
      }
    };
    var formErrors = {
      'userName': "",
      'mobileNo': "",
      'password': "",
      'confirmPassword': "",
      'emailId': ""
    };
    var validationMessage = {
      errorMessage: errorMessage,
      formErrors: formErrors
    };
    /***/
  },

  /***/
  "./src/app/user/change-password/change-password.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/user/change-password/change-password.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserChangePasswordChangePasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/change-password/change-password.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/user/change-password/change-password.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppUserChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/database-http-call.service */
    "./src/app/shared/database-http-call.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ChangePasswordComponent =
    /*#__PURE__*/
    function () {
      function ChangePasswordComponent(formBuilder, databaseCall, router) {
        this.formBuilder = formBuilder;
        this.databaseCall = databaseCall;
        this.router = router;
        this.errorMesg = "";
      }

      var _proto = ChangePasswordComponent.prototype;

      _proto.ngOnInit = function ngOnInit() {
        if (!localStorage.getItem("userName")) {
          this.router.navigate(['/user']);
        }

        this.changePassword = this.formBuilder.group({
          newPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      } //this is a common line
      ;

      _proto.changeUserPassword = function changeUserPassword(firstValue, secondValue) {
        var _this = this;

        try {
          if (firstValue == secondValue) {
            this.databaseCall.postData('changePassword', {
              "userPassword": secondValue
            }).subscribe(function (res) {
              return _this.router.navigate(['/user']);
            }, function (error) {
              if (error.error && error.error.err) {
                _this.errorMesg = error.error.err;
              }
            });
          } else {
            this.errorMesg = "New Password and Confirm Password donot match";
          }
        } catch (error) {
          console.log("error.error.err"); // if(error.error && error.error.err ){
          //   this.errorMesg = error.error.err;
          // }
        }
      };

      return ChangePasswordComponent;
    }();

    ChangePasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseHttpCallService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./change-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/change-password/change-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./change-password.component.css */
      "./src/app/user/change-password/change-password.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../shared/shared.css */
      "./src/app/shared/shared.css")).default]
    })], ChangePasswordComponent);
    /***/
  },

  /***/
  "./src/app/user/edit-user/edit-user.component.css":
  /*!********************************************************!*\
    !*** ./src/app/user/edit-user/edit-user.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserEditUserEditUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user-profile-image{\r\n    text-align: center;    \r\n    margin-left: 39%;\r\n    border:1px solid black\r\n}\r\n\r\n.edit-img-position{\r\n    right: 0px;    \r\n    top: 0px;\r\n    position: absolute;\r\n}\r\n\r\n.img-peview{\r\n    margin: 0 auto; \r\n    border:2px solid black\r\n}\r\n\r\n.img-peview img{\r\n    width:100%;\r\n    height:100%;\r\n    border-radius:50%\r\n}\r\n\r\n.img-div{\r\n    width: 10vw;    \r\n    height: 10vw;  \r\n    border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LXVzZXIvZWRpdC11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKOztBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLXByb2ZpbGUtaW1hZ2V7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDM5JTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2tcclxufVxyXG5cclxuLmVkaXQtaW1nLXBvc2l0aW9ue1xyXG4gICAgcmlnaHQ6IDBweDsgICAgXHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmltZy1wZXZpZXd7XHJcbiAgICBtYXJnaW46IDAgYXV0bzsgXHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrXHJcbn1cclxuLmltZy1wZXZpZXcgaW1ne1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCVcclxufVxyXG5cclxuLmltZy1kaXZ7XHJcbiAgICB3aWR0aDogMTB2dzsgICAgXHJcbiAgICBoZWlnaHQ6IDEwdnc7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/edit-user/edit-user.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/user/edit-user/edit-user.component.ts ***!
    \*******************************************************/

  /*! exports provided: EditUserComponent */

  /***/
  function srcAppUserEditUserEditUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditUserComponent", function () {
      return EditUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/database-http-call.service */
    "./src/app/shared/database-http-call.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EditUserComponent =
    /*#__PURE__*/
    function () {
      function EditUserComponent(formBuilder, databaseCall, router) {
        this.formBuilder = formBuilder;
        this.databaseCall = databaseCall;
        this.router = router;
        this.uploadImg = false;
        this.user = {
          userName: "",
          mobileNo: "",
          emailId: "",
          address: "",
          pinCode: ""
        };
      }

      var _proto2 = EditUserComponent.prototype;

      _proto2.ngOnInit = function ngOnInit() {
        var _this2 = this;

        if (!localStorage.getItem("userName")) {
          this.router.navigate(['/user']);
        }

        this.databaseCall.getData('userData').subscribe(function (res) {
          _this2.user.userName = res.data.userName;
          _this2.user.mobileNo = res.data.mobileNo;
          _this2.user.emailId = res.data.emailId;
          _this2.user.address = res.data.address;
          _this2.user.pinCode = res.data.pinCode;
        }, function (error) {
          _this2.router.navigate(["/user"]); // console.log(error)

        });
        this.editProfile = this.formBuilder.group({
          userName: [{
            value: "",
            key1: "riteshkumar"
          }],
          mobileNo: [{
            value: '',
            disabled: true
          }],
          emailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
          address: [],
          pinCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]]
        });
      };

      _proto2.updateUser = function updateUser() {
        var controls = this.editProfile.controls;
        var toUpdateField = {};

        for (var e in controls) {
          if (controls[e].dirty) {
            toUpdateField[e] = controls[e].value;
          }
        }

        if (Object.entries(toUpdateField).length > 0) {
          this.databaseCall.postData('userupdate', toUpdateField).subscribe(function (res) {
            return console.log(res);
          });
        } else {
          this.errorMesg = "There is no change in user profile";
        }
      };

      _proto2.cancelEdit = function cancelEdit() {
        this.router.navigate(["/user/userdashboard"]);
      };

      _proto2.selectFile = function selectFile(event) {
        var _this3 = this;

        var fileSelected = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function () {
          _this3.imagePreview = reader.result;
          console.log(_this3.imagePreview);
        };

        reader.readAsDataURL(fileSelected);
      };

      _proto2.toggleImgUpload = function toggleImgUpload() {
        this.uploadImg = !this.uploadImg;
      };

      return EditUserComponent;
    }();

    EditUserComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseHttpCallService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/edit-user/edit-user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-user.component.css */
      "./src/app/user/edit-user/edit-user.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../shared/shared.css */
      "./src/app/shared/shared.css")).default]
    })], EditUserComponent);
    /***/
  },

  /***/
  "./src/app/user/user-booking-service/user-booking-service.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/user/user-booking-service/user-booking-service.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserBookingServiceUserBookingServiceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1ib29raW5nLXNlcnZpY2UvdXNlci1ib29raW5nLXNlcnZpY2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/user-booking-service/user-booking-service.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/user/user-booking-service/user-booking-service.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: UserBookingServiceComponent */

  /***/
  function srcAppUserUserBookingServiceUserBookingServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserBookingServiceComponent", function () {
      return UserBookingServiceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/database-http-call.service */
    "./src/app/shared/database-http-call.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserBookingServiceComponent =
    /*#__PURE__*/
    function () {
      // pickupRequire = this.bookingCarService.get("pickUp").value
      function UserBookingServiceComponent(formBuilder, databaseCall, router) {
        this.formBuilder = formBuilder;
        this.databaseCall = databaseCall;
        this.router = router;
        this.presentDate = new Date();
        this.requiredField = "* Required Field";
        this.loadSpinner = false;
        this.bookingCarService = this.formBuilder.group({
          vechileNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          vechileType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          ownerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          mobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]],
          serviceType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          requirement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          budgetPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          areaLocation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          serviceDate: [this.presentDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          pickUp: [''],
          pickupDetail: this.formBuilder.group({
            pickLocation: [''],
            pickupDate: ['']
          })
        });
      }

      var _proto3 = UserBookingServiceComponent.prototype;

      _proto3.ngOnInit = function ngOnInit() {
        if (!localStorage.getItem("userName")) {
          this.router.navigate(['/user']);
        }
      };

      _proto3.submitBooking = function submitBooking() {
        var _this4 = this;

        this.loadSpinner = true;
        this.databaseCall.postData('user-car-booking', this.bookingCarService.value).subscribe(function (res) {
          _this4.loadSpinner = false;
          _this4.errorMesg = "";
          _this4.successMesg = "Booking has been saved";

          _this4.bookingCarService.reset();
        }, function (error) {
          _this4.loadSpinner = false;
          _this4.successMesg = "";
          _this4.errorMesg = "Please try again after sometime as couldnot connect to database";
        });
      };

      _proto3.cancelBooking = function cancelBooking() {
        this.router.navigate(["/user/userdashboard"]);
      };

      return UserBookingServiceComponent;
    }();

    UserBookingServiceComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseHttpCallService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    UserBookingServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-booking-service',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-booking-service.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-booking-service/user-booking-service.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-booking-service.component.css */
      "./src/app/user/user-booking-service/user-booking-service.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../shared/shared.css */
      "./src/app/shared/shared.css")).default]
    })], UserBookingServiceComponent);
    /***/
  },

  /***/
  "./src/app/user/user-dashboard/user-dashboard.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/user/user-dashboard/user-dashboard.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserDashboardUserDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kYXNoYm9hcmQvdXNlci1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/user-dashboard/user-dashboard.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/user/user-dashboard/user-dashboard.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UserDashboardComponent */

  /***/
  function srcAppUserUserDashboardUserDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function () {
      return UserDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/database-http-call.service */
    "./src/app/shared/database-http-call.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserDashboardComponent =
    /*#__PURE__*/
    function () {
      function UserDashboardComponent(databaseCall, router) {
        this.databaseCall = databaseCall;
        this.router = router;
      }

      var _proto4 = UserDashboardComponent.prototype;

      _proto4.ngOnInit = function ngOnInit() {
        if (!localStorage.getItem("userName")) {
          this.router.navigate(['/user']);
        }
      };

      return UserDashboardComponent;
    }();

    UserDashboardComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseHttpCallService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    UserDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/user-dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-dashboard.component.css */
      "./src/app/user/user-dashboard/user-dashboard.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../shared/shared.css */
      "./src/app/shared/shared.css")).default]
    })], UserDashboardComponent);
    /***/
  },

  /***/
  "./src/app/user/user-detailed-booking/user-detailed-booking.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/user/user-detailed-booking/user-detailed-booking.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserDetailedBookingUserDetailedBookingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kZXRhaWxlZC1ib29raW5nL3VzZXItZGV0YWlsZWQtYm9va2luZy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/user-detailed-booking/user-detailed-booking.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/user/user-detailed-booking/user-detailed-booking.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: UserDetailedBookingComponent */

  /***/
  function srcAppUserUserDetailedBookingUserDetailedBookingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailedBookingComponent", function () {
      return UserDetailedBookingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/database-http-call.service */
    "./src/app/shared/database-http-call.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserDetailedBookingComponent =
    /*#__PURE__*/
    function () {
      function UserDetailedBookingComponent(databaseCall, router, activeRoute) {
        this.databaseCall = databaseCall;
        this.router = router;
        this.activeRoute = activeRoute;
        this.loadSpinner = false;
        this.objectId = "";
        this.errorMesg = "";
        this.serviceDetail = {
          vechileNo: "",
          vechileType: "",
          ownerName: "",
          serviceType: "",
          requirement: "",
          budgetPrice: "",
          areaLocation: "",
          serviceDate: "",
          pickLocation: "",
          pickupDate: "",
          mobileNo: ""
        };
      }

      var _proto5 = UserDetailedBookingComponent.prototype;

      _proto5.ngOnInit = function ngOnInit() {
        var _this5 = this;

        if (!localStorage.getItem("userName")) {
          this.router.navigate(['/user']);
        }

        this.loadSpinner = true;
        this.activeRoute.queryParams.subscribe(function (res) {
          _this5.databaseCall.getData('bookingById', res).subscribe(function (res) {
            console.log(res._id);
            _this5.loadSpinner = false;
            _this5.objectId = res._id;
            _this5.serviceDetail.vechileNo = res.vechileNo;
            _this5.serviceDetail.vechileType = res.vechileType;
            _this5.serviceDetail.ownerName = res.ownerName;
            _this5.serviceDetail.serviceType = res.serviceType;
            _this5.serviceDetail.requirement = res.requirement;
            _this5.serviceDetail.budgetPrice = res.budgetPrice;
            _this5.serviceDetail.mobileNo = res.mobileNo;
            _this5.serviceDetail.areaLocation = res.areaLocation;
            _this5.serviceDetail.serviceDate = res.serviceDate;
            _this5.serviceDetail.pickLocation = res.pickupDetail.pickLocation;
            _this5.serviceDetail.pickLocation = res.pickupDetail.pickLocation;
          });
        });
      };

      _proto5.deleteBoking = function deleteBoking() {
        var _this6 = this;

        if (confirm("Are you sure to delete ")) {
          this.databaseCall.deleteById('deleteuserbooking', {
            _id: this.objectId
          }).subscribe(function (res) {
            _this6.router.navigate(['/user/userdashboard/userBookingHistory']);
          }), function (error) {
            if (error.error) {
              if (error.error.err) {
                _this6.errorMesg = error.error.err;
              }
            } else _this6.errorMesg = "Technical Error...Contact service provider";
          };
        }
      };

      _proto5.cancelBooking = function cancelBooking() {
        this.router.navigate(['/user/userdashboard']);
      };

      return UserDetailedBookingComponent;
    }();

    UserDetailedBookingComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseHttpCallService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    UserDetailedBookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-detailed-booking',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-detailed-booking.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detailed-booking/user-detailed-booking.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-detailed-booking.component.css */
      "./src/app/user/user-detailed-booking/user-detailed-booking.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../shared/shared.css */
      "./src/app/shared/shared.css")).default]
    })], UserDetailedBookingComponent);
    /***/
  },

  /***/
  "./src/app/user/user-header/user-header.component.css":
  /*!************************************************************!*\
    !*** ./src/app/user/user-header/user-header.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserHeaderUserHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1oZWFkZXIvdXNlci1oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/user-header/user-header.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/user/user-header/user-header.component.ts ***!
    \***********************************************************/

  /*! exports provided: UserHeaderComponent */

  /***/
  function srcAppUserUserHeaderUserHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserHeaderComponent", function () {
      return UserHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/database-http-call.service */
    "./src/app/shared/database-http-call.service.ts");

    var UserHeaderComponent =
    /*#__PURE__*/
    function () {
      function UserHeaderComponent(router, databaseCall) {
        this.router = router;
        this.databaseCall = databaseCall;
        this.status = false;
        this.userLoggedIn = localStorage.getItem("userName");
      }

      var _proto6 = UserHeaderComponent.prototype;

      _proto6.ngOnInit = function ngOnInit() {};

      _proto6.userDashboard = function userDashboard() {
        this.router.navigate(["user/userdashboard"]);
      };

      _proto6.showHideDiv = function showHideDiv() {
        this.status = !this.status;
      };

      _proto6.hideSelection = function hideSelection() {
        this.status = false;
        this.router.navigate(["user/userdashboard/userEdit"]);
      };

      _proto6.userLogout = function userLogout() {
        var _this7 = this;

        this.databaseCall.updateDocument('logout').subscribe(function (response) {
          localStorage.clear();

          _this7.router.navigate(["/user"]);
        }, function (error) {
          return console.log(error);
        });
      };

      return UserHeaderComponent;
    }();

    UserHeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseHttpCallService"]
      }];
    };

    UserHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-header/user-header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-header.component.css */
      "./src/app/user/user-header/user-header.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../shared/shared.css */
      "./src/app/shared/shared.css")).default]
    })], UserHeaderComponent);
    /***/
  },

  /***/
  "./src/app/user/user-older-history/user-older-history.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/user/user-older-history/user-older-history.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserOlderHistoryUserOlderHistoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".booking-history-div{\r\n    text-align: center;\r\n    display:inline-block;\r\n    border: 2px solid black;\r\n    width: 80%;\r\n    border-radius:10px;\r\n    box-shadow: 7px 10px #888;\r\n    height:70%;\r\n    margin-left:10%;\r\n    margin-right:10%;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLW9sZGVyLWhpc3RvcnkvdXNlci1vbGRlci1oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjs7QUFFcEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItb2xkZXItaGlzdG9yeS91c2VyLW9sZGVyLWhpc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29raW5nLWhpc3RvcnktZGl2e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICBib3gtc2hhZG93OiA3cHggMTBweCAjODg4O1xyXG4gICAgaGVpZ2h0OjcwJTtcclxuICAgIG1hcmdpbi1sZWZ0OjEwJTtcclxuICAgIG1hcmdpbi1yaWdodDoxMCU7XHJcblxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/user/user-older-history/user-older-history.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/user/user-older-history/user-older-history.component.ts ***!
    \*************************************************************************/

  /*! exports provided: UserOlderHistoryComponent */

  /***/
  function srcAppUserUserOlderHistoryUserOlderHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserOlderHistoryComponent", function () {
      return UserOlderHistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/database-http-call.service */
    "./src/app/shared/database-http-call.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserOlderHistoryComponent =
    /*#__PURE__*/
    function () {
      function UserOlderHistoryComponent(databaseCall, router) {
        this.databaseCall = databaseCall;
        this.router = router;
        this.loadSpinner = false;
      }

      var _proto7 = UserOlderHistoryComponent.prototype;

      _proto7.ngOnInit = function ngOnInit() {
        var _this8 = this;

        if (!localStorage.getItem("userName")) {
          this.router.navigate(['/user']);
        }

        this.loadSpinner = true;
        this.databaseCall.getData('usercarbookinghistory').subscribe(function (res) {
          _this8.loadSpinner = false;
          _this8.allBookingHistory = res.data;
        }, function (error) {
          _this8.loadSpinner = false;

          if (error.error) {
            if (error.error.err) {
              _this8.errorMesg = "User Id and Password doesnot match";
            }
          } else _this8.errorMesg = "Technical Error...Contact service provider";
        });
      };

      _proto7.showBookingHistory = function showBookingHistory() {
        console.log(this.allBookingHistory);
      };

      _proto7.detailedBooking = function detailedBooking(id) {
        if (id) {
          this.router.navigate(['/user/userdashboard/eachbookinghistory'], {
            queryParams: {
              _id: id
            }
          });
        } // this.databaseCall.getData()

      };

      return UserOlderHistoryComponent;
    }();

    UserOlderHistoryComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseHttpCallService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    UserOlderHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-older-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-older-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-older-history/user-older-history.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-older-history.component.css */
      "./src/app/user/user-older-history/user-older-history.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../shared/shared.css */
      "./src/app/shared/shared.css")).default]
    })], UserOlderHistoryComponent);
    /***/
  },

  /***/
  "./src/app/user/user-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/user-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: UserRoutingModule */

  /***/
  function srcAppUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
      return UserRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_user_usersignin_usersignin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/user/usersignin/usersignin.component */
    "./src/app/user/usersignin/usersignin.component.ts");
    /* harmony import */


    var src_app_user_usersignup_usersignup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/user/usersignup/usersignup.component */
    "./src/app/user/usersignup/usersignup.component.ts");
    /* harmony import */


    var src_app_shared_forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/forgetpassword/forgetpassword.component */
    "./src/app/shared/forgetpassword/forgetpassword.component.ts");
    /* harmony import */


    var src_app_user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/user/user-dashboard/user-dashboard.component */
    "./src/app/user/user-dashboard/user-dashboard.component.ts");
    /* harmony import */


    var src_app_user_user_booking_service_user_booking_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/user/user-booking-service/user-booking-service.component */
    "./src/app/user/user-booking-service/user-booking-service.component.ts");
    /* harmony import */


    var src_app_user_user_older_history_user_older_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/user/user-older-history/user-older-history.component */
    "./src/app/user/user-older-history/user-older-history.component.ts");
    /* harmony import */


    var src_app_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/user/edit-user/edit-user.component */
    "./src/app/user/edit-user/edit-user.component.ts");
    /* harmony import */


    var src_app_user_user_detailed_booking_user_detailed_booking_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/user/user-detailed-booking/user-detailed-booking.component */
    "./src/app/user/user-detailed-booking/user-detailed-booking.component.ts");
    /* harmony import */


    var src_app_user_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/user/change-password/change-password.component */
    "./src/app/user/change-password/change-password.component.ts"); //home route is "user"


    var routes = [{
      path: '',
      component: src_app_user_usersignin_usersignin_component__WEBPACK_IMPORTED_MODULE_3__["UsersigninComponent"]
    }, {
      path: 'usersignup',
      component: src_app_user_usersignup_usersignup_component__WEBPACK_IMPORTED_MODULE_4__["UsersignupComponent"]
    }, {
      path: 'forgetPassword',
      component: src_app_shared_forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_5__["ForgetpasswordComponent"]
    }, {
      path: "backhome",
      redirectTo: "/",
      pathMatch: 'full'
    }, {
      path: "usersignup/backlogin",
      redirectTo: "",
      pathMatch: "full"
    }, {
      path: "user",
      redirectTo: "",
      pathMatch: "full"
    }, {
      path: "usersignup/user",
      redirectTo: "",
      pathMatch: "full"
    }, {
      path: "userdashboard",
      component: src_app_user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["UserDashboardComponent"]
    }, {
      path: 'userdashboard/userBookingService',
      component: src_app_user_user_booking_service_user_booking_service_component__WEBPACK_IMPORTED_MODULE_7__["UserBookingServiceComponent"]
    }, {
      path: 'userdashboard/userBookingHistory',
      component: src_app_user_user_older_history_user_older_history_component__WEBPACK_IMPORTED_MODULE_8__["UserOlderHistoryComponent"]
    }, {
      path: 'userdashboard/userEdit',
      component: src_app_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_9__["EditUserComponent"]
    }, {
      path: 'userdashboard/userEdit/userEdit',
      redirectTo: "userdashboard/userEdit",
      pathMatch: "full"
    }, {
      path: 'userdashboard/eachbookinghistory',
      component: src_app_user_user_detailed_booking_user_detailed_booking_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailedBookingComponent"]
    }, {
      path: 'userdashboard/changepassword',
      component: src_app_user_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__["ChangePasswordComponent"]
    }];

    var UserRoutingModule = function UserRoutingModule() {};

    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/user/user-routing.module.ts");
    /* harmony import */


    var _usersignin_usersignin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./usersignin/usersignin.component */
    "./src/app/user/usersignin/usersignin.component.ts");
    /* harmony import */


    var _usersignup_usersignup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./usersignup/usersignup.component */
    "./src/app/user/usersignup/usersignup.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user-dashboard/user-dashboard.component */
    "./src/app/user/user-dashboard/user-dashboard.component.ts");
    /* harmony import */


    var _user_booking_service_user_booking_service_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./user-booking-service/user-booking-service.component */
    "./src/app/user/user-booking-service/user-booking-service.component.ts");
    /* harmony import */


    var _user_header_user_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./user-header/user-header.component */
    "./src/app/user/user-header/user-header.component.ts");
    /* harmony import */


    var _user_older_history_user_older_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./user-older-history/user-older-history.component */
    "./src/app/user/user-older-history/user-older-history.component.ts");
    /* harmony import */


    var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./edit-user/edit-user.component */
    "./src/app/user/edit-user/edit-user.component.ts");
    /* harmony import */


    var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/user/user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _user_detailed_booking_user_detailed_booking_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./user-detailed-booking/user-detailed-booking.component */
    "./src/app/user/user-detailed-booking/user-detailed-booking.component.ts");
    /* harmony import */


    var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./change-password/change-password.component */
    "./src/app/user/change-password/change-password.component.ts");

    var UserModule = function UserModule() {};

    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_usersignin_usersignin_component__WEBPACK_IMPORTED_MODULE_4__["UsersigninComponent"], _usersignup_usersignup_component__WEBPACK_IMPORTED_MODULE_5__["UsersignupComponent"], _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["UserDashboardComponent"], _user_booking_service_user_booking_service_component__WEBPACK_IMPORTED_MODULE_9__["UserBookingServiceComponent"], _user_header_user_header_component__WEBPACK_IMPORTED_MODULE_10__["UserHeaderComponent"], _user_older_history_user_older_history_component__WEBPACK_IMPORTED_MODULE_11__["UserOlderHistoryComponent"], _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__["EditUserComponent"], _user_detailed_booking_user_detailed_booking_component__WEBPACK_IMPORTED_MODULE_15__["UserDetailedBookingComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]],
      providers: [src_app_user_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"]]
    })], UserModule);
    /***/
  },

  /***/
  "./src/app/user/user.service.ts":
  /*!**************************************!*\
    !*** ./src/app/user/user.service.ts ***!
    \**************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/database-http-call.service */
    "./src/app/shared/database-http-call.service.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(router, databaseCall) {
        this.router = router;
        this.databaseCall = databaseCall;
      }

      var _proto8 = UserService.prototype;

      _proto8.serviceProviderSignIn = function serviceProviderSignIn() {
        this.router.navigate(['/serviceprovider']);
      };

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseHttpCallService"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/user/usersignin/usersignin.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/user/usersignin/usersignin.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUsersigninUsersigninComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlcnNpZ25pbi91c2Vyc2lnbmluLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/usersignin/usersignin.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/user/usersignin/usersignin.component.ts ***!
    \*********************************************************/

  /*! exports provided: UsersigninComponent */

  /***/
  function srcAppUserUsersigninUsersigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersigninComponent", function () {
      return UsersigninComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/custom-validator */
    "./src/app/shared/custom-validator.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/database-http-call.service */
    "./src/app/shared/database-http-call.service.ts");

    var UsersigninComponent =
    /*#__PURE__*/
    function () {
      function UsersigninComponent(formBuilder, router, userservice, databaseCall) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userservice = userservice;
        this.databaseCall = databaseCall;
        this.loadSpinner = false;
        this.userLoginForm = formBuilder.group({
          mobileNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _shared_custom_validator__WEBPACK_IMPORTED_MODULE_3__["CustomValidator"].numberValidation]],
          userPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          rememberMe: [true]
        });

        if (localStorage.getItem("token") && localStorage.getItem("user_id")) {
          this.router.navigate(["/user/userdashboard"]);
        }
      }

      var _proto9 = UsersigninComponent.prototype;

      _proto9.serviceProviderSignIn = function serviceProviderSignIn() {
        this.userservice.serviceProviderSignIn();
      } // mobileNumberValidation(inputField) {
      //   if (inputField.value.match(/\D/)) {
      //     return { ERROR: 'Not a number' }
      //   }
      //   return null;
      // }
      ;

      _proto9.submitUser = function submitUser() {
        var _this9 = this;

        this.errorMesg = "";
        var searchParam = {
          "userId": this.userLoginForm.value.mobileNo,
          "password": this.userLoginForm.value.userPassword
        };
        this.loadSpinner = true;
        this.databaseCall.postData('usersignin', searchParam).subscribe(function (res) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user_id', res.user._id);
          localStorage.setItem('userName', res.user.userName);

          _this9.router.navigate(["/user/userdashboard"]);
        }, function (error) {
          _this9.loadSpinner = false;

          if (error.error) {
            if (error.error.err) {
              _this9.errorMesg = "User Id and Password doesnot match";
            }
          } else _this9.errorMesg = "Technical Error...Contact service provider";
        });
      };

      _proto9.cancelSignIn = function cancelSignIn() {
        this.router.navigate(["/"]);
      };

      _proto9.ngOnInit = function ngOnInit() {};

      return UsersigninComponent;
    }();

    UsersigninComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseHttpCallService"]
      }];
    };

    UsersigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-usersignin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./usersignin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/usersignin/usersignin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./usersignin.component.css */
      "./src/app/user/usersignin/usersignin.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../shared/shared.css */
      "./src/app/shared/shared.css")).default]
    })], UsersigninComponent);
    /***/
  },

  /***/
  "./src/app/user/usersignup/usersignup.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/user/usersignup/usersignup.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUsersignupUsersignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlcnNpZ251cC91c2Vyc2lnbnVwLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/usersignup/usersignup.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/user/usersignup/usersignup.component.ts ***!
    \*********************************************************/

  /*! exports provided: UsersignupComponent */

  /***/
  function srcAppUserUsersignupUsersignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersignupComponent", function () {
      return UsersignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_validation_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/validation-message */
    "./src/app/shared/validation-message.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/database-http-call.service */
    "./src/app/shared/database-http-call.service.ts");

    var UsersignupComponent =
    /*#__PURE__*/
    function () {
      function UsersignupComponent(formBuilder, router, userservice, databaseCall) {
        var _this10 = this;

        this.formBuilder = formBuilder;
        this.router = router;
        this.userservice = userservice;
        this.databaseCall = databaseCall;
        this.passwordDisabled = false;
        this.validationMsg = src_app_shared_validation_message__WEBPACK_IMPORTED_MODULE_3__["validationMessage"].errorMessage;
        this.formErr = src_app_shared_validation_message__WEBPACK_IMPORTED_MODULE_3__["validationMessage"].formErrors;
        this.userSignUp = this.formBuilder.group({
          userName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          mobileNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]],
          emailId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
          matchingPassword: this.formBuilder.group({
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          })
        });
        this.userSignUp.valueChanges.subscribe(function (e) {
          return _this10.logValidationError(_this10.userSignUp);
        });
      }

      var _proto10 = UsersignupComponent.prototype;

      _proto10.ngOnInit = function ngOnInit() {};

      _proto10.logValidationError = function logValidationError(formgroup) {
        var _this11 = this;

        Object.keys(formgroup.controls).forEach(function (eachControl) {
          var abstrachControl = formgroup.get(eachControl);

          if (abstrachControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
            _this11.logValidationError(abstrachControl);
          } else {
            _this11.formErr[eachControl] = "";

            if (abstrachControl && !abstrachControl.valid && (abstrachControl.touched || abstrachControl.dirty)) {
              var message = _this11.validationMsg[eachControl];

              for (var errorKey in abstrachControl.errors) {
                if (errorKey) {
                  _this11.formErr[eachControl] += message[errorKey] + ' ';
                }
              }
            }
          }
        });
      };

      _proto10.serviceProviderSignIn = function serviceProviderSignIn() {
        this.userservice.serviceProviderSignIn();
      };

      _proto10.submitUser = function submitUser() {
        var _this12 = this;

        this.successMesg = "";
        this.databaseCall.postData('usersignup', this.userSignUp.value).subscribe(function (res) {
          _this12.errorMesg = "";
          _this12.successMesg = "";

          if (res.msg) {
            _this12.successMesg = res.msg;

            _this12.userSignUp.reset();
          } else {
            _this12.errorMesg = "Mobile is already registered";
          }
        }, function (error) {
          _this12.errorMesg = "";
          error.error && error.error.err ? _this12.errorMesg = error.error.err : "Contact Administrator";
        });
      };

      _proto10.cancelSignIn = function cancelSignIn() {
        this.router.navigate(["/user"]);
      };

      _createClass(UsersignupComponent, [{
        key: "confirmPassword",
        get: function get() {
          return this.userSignUp.get('confirmPassword');
        }
      }]);

      return UsersignupComponent;
    }();

    UsersignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseHttpCallService"]
      }];
    };

    UsersignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-usersignup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./usersignup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/usersignup/usersignup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./usersignup.component.css */
      "./src/app/user/usersignup/usersignup.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../shared/shared.css */
      "./src/app/shared/shared.css")).default]
    })], UsersignupComponent);
    /***/
  }
}]); //# sourceMappingURL=user-user-module-es2015.js.map
//# sourceMappingURL=user-user-module-es5.js.map