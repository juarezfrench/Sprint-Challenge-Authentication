const request = require("supertest");

const server = require("./server.js");

it("should return {api: 'up'}", function() {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.body.api).toBe("up");
      });
  });