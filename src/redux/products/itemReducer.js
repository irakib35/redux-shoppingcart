import { ADDITEM } from "./actions";
import initials from "./initials";

const itemReducer = (state = initials, action) => {
    switch (action.type) {
        case ADDITEM:
            return [
                ...state,
                {
                    proid: action.payload.proid,
                    proname: action.payload.proname,
                    procat: action.payload.procat,
                    proimg: action.payload.proimg,
                    proquan: action.payload.proquan,
                    proprice: action.payload.proprice,
                },
            ];
        default:
            return state;
    }
};

export default itemReducer;
