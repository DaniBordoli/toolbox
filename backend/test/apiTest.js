const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/index");

chai.use(chaiHttp);
chai.should();

describe("API Tests", () => {
  it("Debería obtener la lista de archivos", (done) => {
    chai
      .request(app)
      .get("/api/files/list")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an("object");
        res.body.should.have.property("files");
        done();
      });
  });

  it("Debería obtener datos formateados de archivos", (done) => {
    chai
      .request(app)
      .get("/api/files/data")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an("array");
        done();
      });
  });
});
