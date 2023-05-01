import { ADDITEM } from "./actions";

const added = (pros) => {
    return {
        type: ADDITEM,
        payload: {
            proid: pros[0],
            proname: pros[1],
            procat: pros[2],
            proimg: pros[3],
            proquan: pros[4],
            proprice: pros[5],
        },
    };
};

export default added;
