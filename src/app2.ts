const button = document.querySelector("button");
// we added ? or ! at the end of the querySelector becayse ts wouldnt know if there is a button in the html so it can yield null
function printMessage(message: string) {
  return message;
}
button?.addEventListener("click", () => {
  console.log("Message " + printMessage("this is the second message"));
});
