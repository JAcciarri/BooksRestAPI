"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var author_controller_1 = require("../controllers/author.controller");
router.get('/authors', author_controller_1.getAuthors);
router.get('/authors/:id', author_controller_1.getOneAuthor);
router.post('/authors', author_controller_1.createAuthor);
router.put('/authors/:id', author_controller_1.updateAuthor);
router.delete('/authors/:id', author_controller_1.deleteAuthor);
exports.default = router;
