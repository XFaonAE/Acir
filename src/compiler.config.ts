import { IntigerType } from "./types/IntigerType";
import { StringType } from "./types/StringType";

export default () => {
    return {
        keywords: {
            print: {
                accepts: {
                    StringType: new StringType(),
                    IntigerType: new IntigerType()
                }
            }
        }
    }
};