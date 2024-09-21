export class AppComponent {
  onClick() {
    console.log("The button was clicked!");
  }
}

export class AppComponentEvents {
  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log(inputElement.value);
  }
}
