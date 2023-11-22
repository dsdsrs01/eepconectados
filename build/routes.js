"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("./controller/user/CreateUserController");
const AuthUserController_1 = require("./controller/user/AuthUserController");
const ListUserController_1 = require("./controller/user/ListUserController");
const CreateChatController_1 = require("./controller/chat/CreateChatController");
const ListChatController_1 = require("./controller/chat/ListChatController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/users', new AuthUserController_1.AuthUserController().handle);
router.post('/session', new CreateUserController_1.CreateUserController().handle);
router.get('/list', new ListUserController_1.ListUserController().handle);
router.post('/message', isAuthenticated_1.isAuthenticated, new CreateChatController_1.CreateChatController().handle);
router.get('/message/list', isAuthenticated_1.isAuthenticated, new ListChatController_1.ListChatController().handle);