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
exports.CreateUserService = void 0;
const bcryptjs_1 = require("bcryptjs");
const prisma_1 = __importDefault(require("../../prisma"));
class CreateUserService {
    execute({ email, name, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email) {
                throw new Error("Email não valido!");
            }
            const userAlreadyExits = yield prisma_1.default.user.findFirst({
                where: {
                    email: email,
                    name: name,
                    password: password
                }
            });
            if (userAlreadyExits) {
                throw new Error('User alread exists!');
            }
            const passwordHask = yield (0, bcryptjs_1.hash)(password, 8);
            const user = yield prisma_1.default.user.create({
                data: {
                    name: name,
                    email: email,
                    password: password
                },
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            });
            return user;
        });
    }
}
exports.CreateUserService = CreateUserService;
