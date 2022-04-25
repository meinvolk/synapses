export default function({ app, redirect }) {
    console.log("test", app.$auth.loggedIn);
    if (!app.$auth.loggedIn) {
        return redirect("/loginpage");
    }
}