function greeting(greetingHandler, name) {
    greetingHandler(name);
}
function greetingHandler(name) {
    console.log("Good Morning", name);
}
function greetingEvening(name) {
    console.log("Good Morning", name);
}

greeting(greetingHandler, "Ratul");
greeting(greetingHandler, "Jhankar Mahbub sir");
greeting(greetingHandler, "Anisul Islam sir");
greeting(greetingEvening, "Ali Hossain sir");