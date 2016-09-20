/**
 * Created by alex on 20.09.2016.
 */

import errors from "./errors";
import content from "./content";
import pageIndex from "./page-index";


export default (app, config = {})=> {
    content(app, config)
    pageIndex(app, config);
    errors(app, config);
}