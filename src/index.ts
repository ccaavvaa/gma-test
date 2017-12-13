import { CardGenerator } from './card-generator';
export function buildAddOn(event: GoogleAppsScript.Card.ActionEvent) {
    const cardGenerator = new CardGenerator();
    return cardGenerator.getCards(event);
}
