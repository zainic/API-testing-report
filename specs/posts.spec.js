import * as chai from "chai"
import supertest from "supertest"
import chaiJsonSchemaAjv from "chai-json-schema-ajv"

import * as postsSchemas from "../schemas/postsSchemas.js";

chai.use(chaiJsonSchemaAjv)

const {expect} = chai

const request = supertest('https://dummyjson.com')
let res

describe("Posts Testing Schemas", () => {
    it("PS001 - Posts Get All Schema Test", async () => {
        res = await request.get('/posts')
        expect(res.body).to.be.jsonSchema(postsSchemas.postGetAllSchema)
    })
    it("PS002 - Posts Get Single Schema Test", async () => {
        res = await request.get('/posts/1')
        expect(res.body).to.be.jsonSchema(postsSchemas.postSchema)
    })
    it("PS003 - Posts Limit and Skip Schema Test", async () => {
        res = await request.get('/posts?limit=10&skip=10&select=title,reactions,userId')
        expect(res.body).to.be.jsonSchema(postsSchemas.postLimitAndSkipSchema)
    })
    it("PS004 - Posts All By Attribute Schema Test", async () => {
        res = await request.get('/posts/user/5')
        expect(res.body).to.be.jsonSchema(postsSchemas.postAllByAttributeSchema)
        for (let user of res.body.posts) {
            expect(user.userId).to.equal(5)
        }
    })
    it("PS005 - Posts Search Schema Test", async () => {
        const res = await request.get('/posts/search?q=love')
        expect(res.body).to.be.jsonSchema(postsSchemas.postSearchSchema)
    })
    it("PS006 - Posts New Post Schema Test", async () => {
        const newPost = {
            id: 3,
            title: 'Testing',
            userId: 4
        }
        const res = await request.post('/posts/add').send(newPost)
        expect(res.body).to.be.jsonSchema(postsSchemas.postNewPostSchema)
    })
    it("PS007 - Posts Comments Schema Test", async () => {
        const res = await request.get('/posts/1/comments')
        expect(res.body).to.be.jsonSchema(postsSchemas.postCommentsSchema)
    })
    it("PS008 - Posts Update Post Schema Test", async () => {
        const updatedPost = {
            title: 'I think I should shift to the moon',
        }
        const res = await request.put('/posts/1').send(updatedPost)
        expect(res.body).to.be.jsonSchema(postsSchemas.postSchema)
    })
    it("PS009 - Posts Delete Post Schema Test", async () => {
        const res = await request.delete('/posts/1')
        expect(res.body).to.be.jsonSchema(postsSchemas.postDeleteSchema)
    })
})
