const request = require ("supertest");
const app= require("./app");

describe("Testing /add path", () =>{
    test("it should return status code 200", done =>{
        request(app)
        .get("/add?a=1&b=1")
        .then(response =>{
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test("is should return applicacion JSON content-type", done =>{
        request(app)
        .get("/add?a=1&b=1")
        .then(response =>{
            expect(response.type).toBe("application/json");
            done();
        });
    });

    test("is should return applicacion valid json object", done =>{
        request(app)
        .get("/add?a=1&b=1")
        .then(response =>{
            expect(response.body.result).not.toBeUndefined();
            done();
        });
    });

    test("is should return a correct answer", done =>{
        request(app)
        .get("/add?a=1&b=4")
        .then(response =>{
            expect(response.body.result).toBe(5);
            done();
        });
    });
})