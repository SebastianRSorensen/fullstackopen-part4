const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const logger = require("../utils/logger");
const blog = require("../models/blog");

const api = supertest(app);

describe("Verify blog posts count", () => {
  test("blogs are returned as json", async () => {
    const blogList = await api
      .get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/);
    logger.info("Blog count", blogList.body.length);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
