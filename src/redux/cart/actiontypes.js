import { ADDED, DELETED, QUANCHANGE } from "./actions";

export const cartadded = (proid) => {
    return {
        type: ADDED,
        payload: proid,
    };
};

export const cartdeleted = (proid) => {
    return {
        type: DELETED,
        payload: proid,
    };
};

export const cartprochange = (proid, type) => {
    return {
        type: QUANCHANGE,
        payload: {
            proid,
            type,
        },
    };
};
