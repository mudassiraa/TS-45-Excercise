function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love TS"; }
    console.log("creating a ".concat(size, " shirt with ").concat(printMessage, " print on shirt."));
}
make_shirt();
make_shirt("medium");
//  making a shirt with diffrent message
make_shirt("Small", "I Love MoM");
