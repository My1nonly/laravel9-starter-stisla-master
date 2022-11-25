import http from "k6/http";
import { group, check } from "k6";

export const options = {
    stages: [{ duration: "40s", target: 5 }],
};

export default function () {
    group("login", function () {
        const res = http.get(`http://127.0.0.1:8000/`);
        check(res, { Status: (r) => r.status === 200 });
        http.get("http://127.0.0.1:8000/");
    });

    group("User list", function () {
        let loginPage = http.get("http://127.0.0.1:8000/login");
        loginPage.submitForm({
            formSelector: "form",
            fields: { email: "superadmin@gmail.com", password: "password" },
        });
        const res1 = http.get("http://127.0.0.1:8000/user-management/user");
        check(res1, { Status: (r) => r.status === 200 });
    });
    group("logout", function () {
        let loginPage = http.get("http://127.0.0.1:8000/login");
        loginPage.submitForm({
            formSelector: "form",
            fields: { email: "superadmin@gmail.com", password: "password" },
        });
        http.get("http://127.0.0.1:8000/user-management/user");
        const res1 = http.post("http://127.0.0.1:8000/logout");
        check(res1, { Status: (r) => r.status === 200 });
    });
}