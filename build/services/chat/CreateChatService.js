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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChatService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateChatService {
    execute({ message, chatUser_id, name_user }) {
        return __awaiter(this, void 0, void 0, function* () {
            const text = yield prisma_1.default.chat.create({
                data: {
                    message: message,
                    chatUser_id: chatUser_id,
                    name_user: name_user
                },
                select: {
                    id: true,
                    message: true,
                    chatUser_id: true,
                    name_user: true
                }
            });
            return text;
        });
    }
}
exports.CreateChatService = CreateChatService;
