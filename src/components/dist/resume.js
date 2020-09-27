"use strict";
exports.__esModule = true;
var react_1 = require("react");
var resume_rakesh_png_1 = require("../../src/images/resume-rakesh.png");
function Resume() {
    function hide_resume() {
        var _a, _b, _c, _d;
        (_a = document
            .querySelector(".main-resume-con-active")) === null || _a === void 0 ? void 0 : _a.classList.add("main-resume-con-disable");
        (_b = document
            .querySelector(".main-resume-con-disable")) === null || _b === void 0 ? void 0 : _b.classList.remove("main-resume-con-active");
        (_c = document
            .querySelector(".super-parent-con-disable")) === null || _c === void 0 ? void 0 : _c.classList.add("super-parent-con-active");
        (_d = document
            .querySelector(".super-parent-con-active")) === null || _d === void 0 ? void 0 : _d.classList.remove("super-parent-con-disable");
    }
    var resume_download_url = 'https://drive.google.com/file/d/1y9w_Btl7FosS_6bX6B_EmixaaS64ZCF1/view?usp=sharing';
    return (react_1["default"].createElement("div", { className: "main-resume-con main-resume-con-disable" },
        react_1["default"].createElement("div", { className: "cross-con" },
            react_1["default"].createElement("p", { className: "resume-p" }, "Resume"),
            react_1["default"].createElement("i", { id: "bar-btn", onClick: function () {
                    hide_resume();
                }, className: "fas fa-times" })),
        react_1["default"].createElement("div", { className: "resume-img-con" },
            react_1["default"].createElement("img", { className: "resume-img", src: resume_rakesh_png_1["default"], alt: "resume" })),
        react_1["default"].createElement("a", { className: "download-btn", target: '_blank', href: resume_download_url, download: "resume" }, "Download pdf version")));
}
exports["default"] = Resume;
