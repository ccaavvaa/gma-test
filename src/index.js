"use strict";
exports.__esModule = true;
var card_generator_1 = require("./card-generator");
function buildAddOn(event) {
    var cardGenerator = new card_generator_1.CardGenerator();
    return cardGenerator.getCards(event);
}
exports.buildAddOn = buildAddOn;
