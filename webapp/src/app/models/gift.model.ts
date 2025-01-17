import GiftCard from "./giftcard.model";

export default class Gift {
    id!: number;
    uuid!: string;
    owner!: string;
    balance!: number;
    message!: string;
    recipient!: string;
    giftcard!: GiftCard;
}