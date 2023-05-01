import { ADDED, DELETED, QUANCHANGE } from "./actions";
import initials from "./initials";

const cartReducer = (state = initials, action) => {
    switch (action.type) {
        case ADDED:
            const ex = state.findIndex((el) => el.proid === action.payload);
            if (ex >= 0) {
                state[ex].quan += 1;
                return state;
            } else {
                return [
                    ...state,
                    {
                        proid: action.payload,
                        quan: 1,
                    },
                ];
            }
        case DELETED:
            return state.filter((pro) => pro.proid !== action.payload);
        case QUANCHANGE:
            return state.map((pro) => {
                if (pro.proid === action.payload.proid) {
                    if (action.payload.type === "add") {
                        return {
                            ...pro,
                            quan: pro.quan + 1,
                        };
                    } else {
                        return {
                            ...pro,
                            quan: pro.quan - 1,
                        };
                    }
                }
                return pro;
            });
        default:
            return state;
    }
};

export default cartReducer;
