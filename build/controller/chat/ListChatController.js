"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListChatController = void 0;
const ListChatService_1 = require("../../services/chat/ListChatService");
class ListChatController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listChatService = new ListChatService_1.ListChatService();
            const chat = yield listChatService.execute();
            return res.json(chat);
        });
    }
}
exports.ListChatController = ListChatController;
