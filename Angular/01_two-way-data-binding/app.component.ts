import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Angular Two-Way Data Binding";

  // Model property
  userName: string = "";

  // Model property for attribute binding
  imageUrl: string =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/800px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg"; // Default image URL

  // Method to handle form submission
  onSubmit() {
    console.log(`Form submitted with userName: ${this.userName}`);
  }

  // Method to update the image based on the user's name
  updateImageUrl() {
    if (this.userName === "Angular") {
      // Change image
      this.imageUrl =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sheba1.JPG/800px-Sheba1.JPG";
    } else {
      // Default image URL
      this.imageUrl =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/800px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg";
    }
  }
}

// The [(ngModel)]="userName" directive binds
// the userName property of the component to
// the input field. Any changes to the input field
// will automatically update the userName property,
// and vice versa.
// The form also has a submit button, which triggers
// the onSubmit() method, logging the current userName
// to the console.
