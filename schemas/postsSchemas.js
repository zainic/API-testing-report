export const postSchema = {
    type: "object",
    properties : {
        id : {type : "number"},
        title : {type : "string"},
        body : {
            type : "string",
            minLength : 20
        },
        userId : {type : "number"},
        tags : {
            type : "array",
            items: { type: "string" }
        },
        reaction : {type : "number"}
    },
}

export const postGetAllSchema = {
    type : "object",
    properties : {
        posts : {
            type : "array",
            items : postSchema,
            maxItems : 30
        },
        total: {type : "number"},
        skip: {type : "number"},
        limit: {type : "number"}
    }
}

export const postAllByAttributeSchema = {
    type : "object",
    properties : {
        posts : {
            type : "array",
            items : postSchema,
            maxItems : 30
        },
        total: {type : "number"},
        skip: {type : "number"},
        limit: {type : "number"}
    }
}

export const postLimitAndSkipSchema = {
    type : "object",
    properties : {
        posts : {
            type : "array",
            items : {
                type: "object",
                properties : {
                    id : {
                        type : "number",
                        exclusiveMinimum : 10,
                    },
                    title : {type : "string"},
                    userId : {type : "number"},
                    reaction : {type : "number"}
                },
                required : ["id", "title", "reactions", "userId"]
            },
            maxItems : 10
        },
        total: {type : "number"},
        skip: {type : "number"},
        limit: {type : "number"}
    }
}

export const postDeleteSchema = {
    type : "object",
    properties : {
        id : {type : "number"},
        title : {type : "string"},
        body : {
            type : "string",
            minLength : 20
        },
        userId : {type : "number"},
        tags : {
            type : "array",
            items: { type: "string" }
        },
        reaction : {type : "number"},
        isDeleted : {type : "boolean"},
        deletedOn : {type : 'string'}
    },
}

export const postNewPostSchema = {
    type : "object",
    properties : {
        id : {type : "number"},
        title : {type : "string"},
        userId : {type : "number"},
    }
}

export const postCommentsSchema = {
    type : "object",
    properties : {
        comments : {
            type : "array",
            items : {
                type: "object",
                properties : {
                    id : {type : "number"},
                    body : {type : "string"},
                    postId : {type : "number"},
                    user : {
                        type : "object",
                        properties: { 
                            id : {type : "number"},
                            username : {type : "string"} 
                        }
                    },
                },
            },
        },
        total: {type : "number"},
        skip: {type : "number"},
        limit: {type : "number"}
    }
}

export const postSearchSchema = {
    type : "object",
    properties : {
        posts : {
            type : "array",
            items : {
                type: "object",
                properties : {
                    id : {type : "number"},
                    title : {type : "string"},
                    body : {
                        type : "string",
                        // pattern : "^.*love.*$",
                        minLength : 20
                    },
                    userId : {type : "number"},
                    tags : {type : "array"},
                    reaction : {type : "number"}
                },
            },
            maxItems : 30
        },
        total: {type : "number"},
        skip: {type : "number"},
        limit: {type : "number"}
    }
}

