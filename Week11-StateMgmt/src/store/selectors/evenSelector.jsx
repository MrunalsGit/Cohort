import {counterAtom} from "../atoms/counterAtom"
import {selector} from "recoil"

export const evenSelector = selector({
    key: "evenSelector",
    get: ({get})=>{
        const count = get(counterAtom)
        return (count %2) == 0
    }
})