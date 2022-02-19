var chai = require('chai');
var testCase = require('mocha').describe;
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);



testCase('1 task: /GET posts?userId=<id>&title=<title>', function () {

      it('it should GET post with exist user id & exist title', (done) => {
        const userId = 1;
        const title = 'qui est esse';
        const status = 200;
        chai.request('https://jsonplaceholder.typicode.com')
            .get(`/posts?userId=${userId}&title=${title}`)
            .end((err, res) => {
                res.should.have.status(status);
                res.body.should.be.a('array');
                res.body.should.have.lengthOf(1);
                res.body[0].should.have.property('userId');
                res.body[0].should.have.property('id');
                res.body[0].should.have.property('title');
                res.body[0].should.have.property('body');
                res.body[0].userId.should.be.a('number');
                res.body[0].userId.should.be.equal(userId);
                res.body[0].id.should.be.a('number');
                res.body[0].title.should.be.a('string');
                res.body[0].title.should.be.equal(title);
                res.body[0].body.should.be.a('string');
                done();
            });
      });

      it('it should not GET post with no exist user id & exist title', (done) => {
        const userId = 11;
        const title = 'qui est esse';
        const status = 200;
        chai.request('https://jsonplaceholder.typicode.com')
            .get(`/posts?userId=${userId}&title=${title}`)
            .end((err, res) => {
                res.should.have.status(status);
                res.body.should.be.a('array');
                res.body.should.be.empty;
                done();
            });
      });

      it('it should not GET post with no exist user id & no exist title', (done) => {
        const userId = 11;
        const title = 'hi';
        const status = 200;
        chai.request('https://jsonplaceholder.typicode.com')
            .get(`/posts?userId=${userId}&title=${title}`)
            .end((err, res) => {
                res.should.have.status(status);
                res.body.should.be.a('array');
                res.body.should.be.empty;
                done();
            });
      });

      it('it should not GET post with empty user id & empty title', (done) => {
        const userId = '';
        const title = '';
        const status = 200;
        chai.request('https://jsonplaceholder.typicode.com')
            .get(`/posts?userId=${userId}&title=${title}`)
            .end((err, res) => {
                res.should.have.status(status);
                res.body.should.be.a('array');
                res.body.should.be.empty;
                done();
            });
      });

      it('it should not GET post with exist user id & no exist title', (done) => {
        const userId = '';
        const title = '';
        const status = 200;
        chai.request('https://jsonplaceholder.typicode.com')
            .get(`/posts?userId=${userId}&title=${title}`)
            .end((err, res) => {
                res.should.have.status(status);
                res.body.should.be.a('array');
                res.body.should.be.empty;
                done();
            });
      });

});


//2 task


testCase('2 task: /GET posts?userId=<id>&title=<title>', function () {

      it('it should not GET post with exist user id & empty title', (done) => {
        const userId = 5;
        const title = '';
        const status = 200;
        chai.request('https://jsonplaceholder.typicode.com')
            .get(`/posts?userId=${userId}&title=${title}`)
            .end((err, res) => {
                res.should.have.status(status);
                res.body.should.be.a('array');
                res.body.should.be.empty;
                done();
            });
      });

      it('it should not GET post with user id = 0 & exist title', (done) => {
        const userId = 0;
        const title = 'qui est esse';
        const status = 200;
        chai.request('https://jsonplaceholder.typicode.com')
            .get(`/posts?userId=${userId}&title=${title}`)
            .end((err, res) => {
                res.should.have.status(status);
                res.body.should.be.a('array');
                res.body.should.be.empty;
                done();
            });
      });

      it('it should not GET post with user id = -1 & exist title', (done) => {
        const userId = -1;
        const title = 'qui est esse';
        const status = 200;
        chai.request('https://jsonplaceholder.typicode.com')
            .get(`/posts?userId=${userId}&title=${title}`)
            .end((err, res) => {
                res.should.have.status(status);
                res.body.should.be.a('array');
                res.body.should.be.empty;
                done();
            });
      });

      it('it should not GET post with user id = 0.5 & exist title', (done) => {
        const userId = 0.5;
        const title = 'qui est esse';
        const status = 200;
        chai.request('https://jsonplaceholder.typicode.com')
            .get(`/posts?userId=${userId}&title=${title}`)
            .end((err, res) => {
                res.should.have.status(status);
                res.body.should.be.a('array');
                res.body.should.be.empty;
                done();
            });
      });

    it('it should GET code 200 with title lenght = 2520 symbols in Unicode', (done) => {
        const userId = 1;
        const title = 'qúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì éssèqúìéssèqúìéssèqú';
        const status = 200;
        chai.request('https://jsonplaceholder.typicode.com')
            .get(`/posts?userId=${userId}&title=${title}`)
            .end((err, res) => {
                res.should.have.status(status);
                res.body.should.be.a('array');
                res.body.should.be.empty;
                done();
            });
      });


      it('it should GET 414 error with title lenght = 2521 symbols in Unicode', (done) => {
        const userId = 1;
        const title = 'qúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì éssèqúìéssèqúìéssèqúì';
        const status = 414;
        chai.request('https://jsonplaceholder.typicode.com')
            .get(`/posts?userId=${userId}&title=${title}`)
            .end((err, res) => {
                res.should.have.status(status);
                res.body.should.be.empty;
                done();
            });
      });

      it('it should GET 400 error with title lenght = 4068 symbols in Unicode', (done) => {
        const userId = 1;
        const title = 'qúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst qúì ëst qúìë ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst éssèqúì ëst';
        const status = 400;
        chai.request('https://jsonplaceholder.typicode.com')
            .get(`/posts?userId=${userId}&title=${title}`)
            .end((err, res) => {
                res.should.have.status(status);
                res.should.have.header('content-type', 'text/html');
                done();
            });
      });

});