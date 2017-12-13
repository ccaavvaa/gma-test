"use strict";
exports.__esModule = true;
var CardGenerator = /** @class */ (function () {
    function CardGenerator() {
    }
    CardGenerator.prototype.getCards = function (event) {
        GmailApp.setCurrentMessageAccessToken(event.messageMetadata.accessToken);
        var section = CardService.newCardSection()
            .addWidget(CardService.newTextParagraph().setText('World!'));
        var card = CardService.newCardBuilder()
            .setHeader(CardService.newCardHeader().setTitle('Hello'))
            .addSection(section);
        return [card.build()];
    };
    return CardGenerator;
}());
exports.CardGenerator = CardGenerator;
