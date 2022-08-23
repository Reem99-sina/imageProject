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
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const logger = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { filename, width, height } = req.query;
        if (filename) {
            const widthImage = yield (0, sharp_1.default)(path_1.default.join(__dirname, `../thumbs/23.jpg`)).metadata();
            if (width == widthImage.width && height == widthImage.height) {
                const url = filename;
                const fileimage = path_1.default.join(__dirname, `../thumbs/23.jpg`);
                yield (0, sharp_1.default)(path_1.default.join(__dirname, `../../../images/${url}.jpg`))
                    .resize({ width: Number(width), height: Number(height) })
                    .toFile(fileimage);
                res.cookie("image", filename);
                next();
            }
        }
        else {
            next();
        }
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.default = logger;
