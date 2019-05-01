import { type } from "os";

// const Profile = {
//   firstName : "",
//   lastName : "",
//   email : "",
// };

class Profile {
  //property
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  //method
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  display() {
    return `
    First Name \t : ${this.firstName}
    Last Name \t : ${this.lastName}
    Email \t : ${this.email}`;
  }

  updateEmail(newEmail) {
    this.email = newEmail;
    console.log("Email Updated");
    console.log(this.display());
  }
}

const johnProfile = new Profile("John", "Doe", "john@ok.com");
johnProfile.firstName = "John";
johnProfile.lastName = "Doe";
johnProfile.email = "john@ok.com";

console.log(typeof Profile);
console.log(typeof johnProfile);
console.log(johnProfile);
console.log(johnProfile.fullName());
console.log(johnProfile.display());
johnProfile.updateEmail("my@mail.com");

class ProfileSecret extends Profile {
  constructor(firstName, lastName, email, password) {
    super(firstName, lastName, email, password);
    this.password = password;
  }

  display() {
    return `
    First Name \t : ${this.firstName}
    Last Name \t : ${this.lastName}
    Email \t : ${this.email}
    Password \t : ${this.password}`;
  }

  updatePassword(newPassword) {
    this.password = newPassword;
    console.log("Password Update");
    console.log(this.display());
  }
}

const mario = new ProfileSecret("mario", "bros", "mario@mail.com", "123");
console.log(mario.display());
mario.updatePassword("321");
